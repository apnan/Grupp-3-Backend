const { response } = require("express");
const supertest = require("supertest");
const request = require("supertest");
const User = require("../models/User");

const HOST = process.env.HOST || "http://localhost:3000";

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

test("GET /users", async () => {
  await supertest(HOST)
    .get("/api/users")
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBe(true);
    });
});
test("POST/users", async () => {
  const data = {
    userName: "tester1",
    firstName: "tester",
    lastName: "woman",
    email: "tester1@mai.com",
    password: "999999",
  };
  await supertest(HOST)
    .post("/api/users")
    .send(data)
    .expect(200)
    .then(async (response) => {
      //console.log(response)
      // Check the response
      expect(response.body._id).toBeTruthy();
      expect(response.body.userName).toBe(data.userName);
      expect(response.body.firstName).toBe(data.firstName);
      expect(response.body.lastName).toBe(data.lastName);
      expect(response.body.email).toBe(data.email);
      expect(response.body.password).toBe(data.password);

  
    });
});

 describe("Testing users", () => {
  describe("given a broken url", () => {
    it("should return status 404", () => {
      const container = request(HOST);
      container.get("/whatever").expect(404);
    });
  });
 });

 
 

