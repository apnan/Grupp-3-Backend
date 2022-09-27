const express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const JEST_WORKER_ID = process.env.JEST_WORKER_ID;

/* if (JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
  });
} */

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  headers = { 'cache-control': 'no-cache' };
  body = { status: 'available' };
  res.status(200).json(body);
});

//Swagger config
//For exmamples: https://github.com/Surnet/swagger-jsdoc/tree/master/examples/app

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'User registeration API',
      description: 'User registration and login API Information',
      contact: {
        name: 'Developer',
      },
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
const usersRoute = require('./routes/users');
//const imagesRoute = require('./routes/images');
//const backgroundImagesRoute = require('./routes/backgroundImages');

//Register api with routes
app.use(express.static('public'));
app.use('/api/users', usersRoute);
//app.use('/api/images', imagesRoute);

const uri = process.env.MONGO;

mongoose.connect(uri, () => {
  /* dbNative = mongoose.connection.db; */
  /*  console.log(dbNative); */
  console.log('Connected to Mongo DB');
});

/* comment */
/* console.log(dbNative); */
app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});

module.exports = app;
