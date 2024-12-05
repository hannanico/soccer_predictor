const connectDB = require('./database');
connectDB();

const express = require('express');
const app = express();

const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/auth', usersRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
