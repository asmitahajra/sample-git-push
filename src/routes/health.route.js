const express = require('express');

//const healthHandlers = require('../handlers/health.handler');
const {healthHandler}= require('../handlers');
// const{ deleteByIdToDoHandler}= require('../handlers/todo.handler');

const router = express.Router();

router.get('', healthHandler);

module.exports = {
  router,
};
