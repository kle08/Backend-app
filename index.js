const express = require('express');
const app = express();
const port = 3000;

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

// app.post();
// app.put();
// app.delete();

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});