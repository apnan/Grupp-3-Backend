/**
 * @group integration
 */
const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { response } = require("../app");
const PORT = process.env.HOST || 3001;

let server = app;
let data = {
  userName: "dummy19",
  firstName: "dummy1",
  lastName: "dummy1",
  email: "dummy1@mail.com",
  password: "3333333",
};


beforeAll((done) => {
  server = app.listen(PORT, (err) => {
    if (err) return done(err);
    done();
  });
  mongoose
    .connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));
});

afterAll(async() => {
   await new Promise((resolve) => setTimeout(() => resolve(), 500)); 
  await mongoose.disconnect();
  await server.close();
});

describe("/POST/signin", function () {
  it("should add new user", async () => {
    const resp = await request(app)
      .post("/api/users/signin")
      .send(data)
      .set("Accept", "application/json")
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .then(function (err, response) {
        if (err) return err;
      });
   
  });
});

 









  