const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const cepHelper = require('./server-helpers.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/cep', (req, res) => {
  const cep = req.query.cep;
  axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then( (response) => {
      res.send(cepHelper.parseCep(response.data));
    })
    .catch( (error) => {
      res.send({error});
      console.log(error);
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));