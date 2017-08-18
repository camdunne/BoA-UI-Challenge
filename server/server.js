const express = require('express');
const { join, resolve } = require('path');
require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();
// express middleware
require('./config/middleware')(app);
// display static pages
app.use(express.static(join(`${__dirname}/../build`)));
app.use(express.static(join(`${__dirname}/../public`)));

app.get('/*', (request, response) => {
  response.sendFile(resolve(`${__dirname}/../public/index.html`));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
