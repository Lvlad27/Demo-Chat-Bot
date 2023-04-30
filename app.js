const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Vlad!');
});

app.get('/exercise', (req, res) => {
  res
    .status(418)
    .set({
      'X-Vlad-Header': 'Test exercise',
    })
    .send('This is an exercise');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
