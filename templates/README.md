# API Simulator

API Simulator is a tool to quickly set up a mock API server for testing and development purposes.

## Features

- **Rapid Setup:** Initialize a mock API server with predefined endpoints.
- **Customizable:** Easily add, modify, or remove endpoints to mimic your API's behavior.
- **Docker Support:** Dockerfile and docker-compose included for containerized deployment.
- **Prettier Config:** Included `.prettierrc` for consistent code formatting.

## Usage

Create a new API Simulator project by running:

```bash
npx create-api-simulator <project-name>
```

This will initialize a new project with default configurations. Replace <project-name> with your desired project name.

## Directory Structure

Upon project initialization, the directory structure will be as follows:

```bash
<project-name>/
  |- server.js          # Main server file
  |- package.json       # Project configuration
  |- endpoints.js       # API endpoints definition
  |- Dockerfile         # Docker configuration
  |- .dockerignore      # Files to exclude in Docker
  |- .prettierrc        # Prettier configuration
  |- docker-compose.yml # Docker compose file
```

## Getting Started

1. Define Endpoints: Edit endpoints.js to define your API's endpoints and responses.
2. Start the Server: Run node server.js to start the API simulator.
3. Testing: Interact with your mock API using tools like Postman or curl.

Rules for defining endpoints:

```javascript
{
  "/api/endpoint": {
    METHOD: {
        request: {
            // Request body
        },
        response: {
            // Response body
        },
    }
  }
}
```

## Contributing

We welcome contributions! If you have suggestions, bug reports, or want to add features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License
