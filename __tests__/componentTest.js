/**
 * @group component
 */

// const supertest = require("supertest");
const request = require("supertest");
const routes = require('../app')

test("GET api/users", async () => {
  await supertest(routes)
    .get("/api/users/")
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBe(true);
    });
});

describe("get", () => {
  it("respond with 200", async () => {
    const response = await request(routes).get("/");
    console.log(response);
    expect(response.statusCode).toEqual(200);
  });
});

/* describe("Signin", () => {
  test("respond with 200", async () => {
    const response = await (
      await request(routes).post("/signin")
    ).send({
      firstName: "Test1",
      lastName: "test1",
      email: "test1@mail.com",
      password: "123456",
    });
    expect(response.statusCode).toEqual(200);
  });
});
 */