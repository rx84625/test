const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {authMiddleware} = require('./Middleware/AuthMiddleware');
const {responseMiddleware} = require('./Middleware/responseMiddleware');
const {errorMiddleware} = require('./Middleware/errorMiddleware');

const urlRouter = require('./routes/urls');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(authMiddleware);

app.use('/api/urls', urlRouter);

app.use(responseMiddleware);
app.use(errorMiddleware);

module.exports = app;
