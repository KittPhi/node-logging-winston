const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
);

// Setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});
