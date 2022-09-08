const express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const dotenv  = require('dotenv')
//  const  usersRoutes= require('./routes/userRoutes')

const PORT = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());

const usersRoute = require("./routes/users");
// const loginRoute = require("./routes/login")
// const signinRoute = require("./routes/signin");
const imagesRoute = require("./routes/images");
// const backgroundImages = require("./routes/backgroundImages");
const  backgroundImagesRoute = require("./routes/backgroundImages") 

app.use(express.static('public'));
app.use('/api/users', usersRoute)
// app.use("/api/signin", signinRoute)
app.use("/api/images", imagesRoute);
// app.use("/api/backgroundImages", backgroundImagesRoute);




app.get('/', (req, res) => {
  headers = { 'cache-control': 'no-cache' };
  body = { status: 'available' };
  res.status(200).json(body);
});

mongoose.connect(
  "mongodb+srv://Bhavani:grboH9SCXmqRmmVW@cluster0.ry3rsvw.mongodb.net/?retryWrites=true&w=majority",

  // 'mongodb+srv://hannapshanich:hanna@cluster0.9hnyd.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected")
);



app.listen(PORT);
