/**
 * @group integration
 */

const app = require("../app.js");
const request = require("supertest");
const { default: mongoose } = require("mongoose");
const { response } = require("../app.js");
const server  = require("../server");

// const supertest=require('supertest')

//const HOST = process.env.HOST || "http://localhost:3000/";

dbURI = "mongodb://mongo:27017/test";

let data = {
  userName: "dummy1",
  firstName: "dummy1",
  lastName: "dummy1",
  email: "dummy1@mail.com",
  password: "333444",
};

describe("testing api", function () {
  beforeAll(function (){
    mongoose.connect(
      "mongodb://mongo:27017/test",

      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to Mongo DB")
    );
  });

  describe("/POST/signin", function () {
    it("should add new user", function () {
    
       request(app)
        .post("/api/users/signin")
        .send(data)
        .set("Accept", "application/json")
        .expect(200)
        .expect("Content-Type", "application/json; charset=utf-8")
        .then(function (err, response) {
          if (err) return err;
        });
    });
  });

  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));

    mongoose.disconnect(console.log("Done"));

    // await server.close();

    // avoid jest open handle error
  });
});
