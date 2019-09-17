const Joi = require('joi')
const express = require('express');
const app = express();
const port = 3000;
// middleware 
app.use(express.json());

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Romance' },
  { id: 3, name: 'Comedy' }
];

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.post('api/genres', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre)
});

// app.put();
// app.delete();
function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(genre, schema)
}


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});