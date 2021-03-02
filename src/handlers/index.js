const {healthHandler}= require('./health.handler');
const {loginHandler}= require('./login.handler');
const {adminHandler}= require('./admin.handler')

// const { handler: healthHandler } = require('./health.handler');
// const { handler: loginHandler } = require('./login.hanlder');

// module.exports = {
//   healthRouter, loginRouter
// };

//sconst {healthHandler}= require(./heal)
module.exports= {
    healthHandler, loginHandler, adminHandler
};