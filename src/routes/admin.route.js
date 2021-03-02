const express= require('express');
const {adminHandler}= require('../handlers/')

const router= express.Router();

router.get('', adminHandler);
module.exports= {
    router
};
