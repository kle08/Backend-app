const Joi = require('joi');
const express = require('express');
const app = express();
const port = 3000;
const courses = require('./routes/genres')

// middleware 
app.use(express.json());
app.use('./api/genres', courses);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});