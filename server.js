const express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const PORT = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(express.json());

//Swagger config
//For exmamples: https://github.com/Surnet/swagger-jsdoc/tree/master/examples/app
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "User registeration API",
      description: "User registration and login API Information",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000"],
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



//Routes
const usersRoute = require("./routes/users");
const imagesRoute = require("./routes/images");
const  backgroundImagesRoute = require("./routes/backgroundImages"); 


//Register api with routes
app.use(express.static('public'));
app.use('/api/users', usersRoute)
app.use("/api/images", imagesRoute);


mongoose.connect(
  "mongodb+srv://Bhavani:grboH9SCXmqRmmVW@cluster0.ry3rsvw.mongodb.net/?retryWrites=true&w=majority",

  // 'mongodb+srv://hannapshanich:hanna@cluster0.9hnyd.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Mongo DB")
);



app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`)
});
