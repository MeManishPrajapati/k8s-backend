const express = require('express');
const { checkHealth, errorGenerator } = require('../controllers/extras.controller');
const extrasRouter = express.Router();

extrasRouter.get('/_healthz', checkHealth);

extrasRouter.get('/_errorz', errorGenerator);

module.exports = extrasRouter;
