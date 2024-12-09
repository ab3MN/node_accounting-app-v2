'use strict';

const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes/users.route');
const { expensesRouter } = require('./routes/expenses.route');

function createServer() {
  const app = express();

  /* CORS  */
  const options = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE , PATCH',
    allowedHeaders: 'Content-Type',
    credentials: true,
  };

  app.use(cors(options), express.json());

  /* ROUTES */
  app.use('/users', userRouter);
  app.use('/expenses', expensesRouter);

  /* ERRORS */
  app.use((_, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use((err, _, res) => {
    res.status(500).json({ message: err.message });
  });

  return app;
}

module.exports = {
  createServer,
};
