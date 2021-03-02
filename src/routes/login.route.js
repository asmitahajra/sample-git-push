const express= require('express');

const {loginHandler} = require('../handlers');

const router= express.Router();

router.post('', loginHandler);

module.exports={router};