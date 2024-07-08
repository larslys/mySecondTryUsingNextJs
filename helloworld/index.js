import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/test/', (req, res) => {
    const name = process.env.NAME || 'World';
    res.send(`Dette er en test: Hello ${name}!`);
  });
  

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});