const express = require("express");

const app = express();
app.use(express.json());
const usersRoute = require("./routes/users");
app.use("/api/users", usersRoute);


module.exports = app