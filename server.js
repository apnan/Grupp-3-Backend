const express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

app.get('/', (req, res) => {
  headers = { 'cache-control': 'no-cache' };
  body = { status: 'available' };
  res.status(200).json(body);
});

mongoose.connect(
  'mongodb+srv://hannapshanich:hanna@cluster0.9hnyd.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected')
);

app.listen(PORT);
