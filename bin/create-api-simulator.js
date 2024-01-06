#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const copyTemplateFiles = (projectName) => {
  const templateDir = path.join(__dirname, '../templates');
  const currentDir = process.cwd();

  fs.readdirSync(templateDir).forEach((file) => {
    const source = path.join(templateDir, file);
    const dest = path.join(currentDir, projectName, file);
    let fileContent = fs.readFileSync(source, 'utf8');

    fileContent = fileContent.replace(/{{projectName}}/g, projectName);

    fs.writeFileSync(dest, fileContent);
  });
};

const initializeProject = (projectName) => {
  try {
    fs.mkdirSync(projectName);
    copyTemplateFiles(projectName);

    process.chdir(projectName);
    execSync('npm install');

    console.log('API Simulator project created successfully!');
  } catch (err) {
    console.error('Error creating API Simulator project:', err);
  }
};

const projectName = process.argv[2];
if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

initializeProject(projectName);
