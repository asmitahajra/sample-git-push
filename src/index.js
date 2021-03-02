const express = require('express');
const dotenv = require('dotenv');
const { healthRouter, loginRouter, adminRouter } = require('./routes');
const { authenticateJwt } = require('./middleware/auth.middleware');

const app = express();
dotenv.config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/health', healthRouter);

app.use('/login', loginRouter);

app.use('/admin', authenticateJwt, adminRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
