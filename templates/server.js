import express from 'express';
import cors from 'cors';

import { endpointsData } from './endpoints.js';

const app = express();
const PORT = 3333;

app.use(
  cors({
    origin: '*',
  })
);

app.use((req, _res, next) => {
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);
  next();
});

Object.entries(endpointsData).forEach(([endpoint, methods]) => {
  Object.entries(methods).forEach(([method, config]) => {
    app[method.toLowerCase()](endpoint, (_req, res) => {
      if (!config.response) {
        return res.status(404).json({ message: 'Response not added' });
      }
      return res.status(200).json(config.response);
    });
  });
});

app.listen(PORT, () => {
  console.log(`API Simulator running at http://localhost:${PORT}`);
  console.table(endpointsData);
});
