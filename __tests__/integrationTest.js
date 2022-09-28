/**
 * @group integration
 */

const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const { response } = require("../app");
require("dotenv").config();

const { v4: uuidv4 } = require("uuid");

const PORT = process.env.HOST || 3000;

let server = app;
let data = {
  firstName: uuidv4(),
  email: uuidv4(),
  lastName: uuidv4(),
  password: uuidv4(),
  userName: uuidv4(),
};
beforeAll((done) => {
  server = app.listen(PORT, (err) => {
    if (err) return done(err);
    done();
  });
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));
});

afterAll(async () => {
  await mongoose.disconnect();
  await new Promise((resolve) => setTimeout(resolve, 3000));
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
