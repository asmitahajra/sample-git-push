const { router: healthRouter } = require('./health.route');
const { router: loginRouter } = require('./login.route');
const { router: adminRouter } = require('./admin.route');

module.exports = {
  healthRouter, loginRouter, adminRouter
};