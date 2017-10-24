const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors');

  stripeRoutes = require('./expressRoutes/stripeRoutes');

  const app = express();
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/stripe', stripeRoutes);

  const port = process.env.PORT || 4000;

  const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
  });
