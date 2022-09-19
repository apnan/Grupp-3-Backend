/**
 * @group integration
 */

const app = require("../server.js");
const request = require("supertest");

//const HOST = process.env.HOST || "http://localhost:3000";
/**
 * Testing post user endpoint
 */

let data = {
  userName: "dummy12",
  firstName: "dummy",
  lastName: "dummy",
  email: "dummy@mail.com",
  password: "123456",
};
describe("testing api", function () {
  describe("/POST/signin", function () {
    it("should add new user", async () => {
      await request(app)
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
});
