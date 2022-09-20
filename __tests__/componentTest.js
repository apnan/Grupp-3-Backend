/**
 * @group component
 */
const app = require('../server.js');
const supertest = require('supertest');
const { v4: uuidv4 } = require('uuid');

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe('Given user service is up', () => {
  describe('When listing all users ', () => {
    it.skip('Then response should be as expected', async () => {
      await supertest(app)
        .get('/api/users/')
        .expect(200)
        .then(async (response) => {});
    });
  });
});

describe('Given user service is up', () => {
  describe('When finding one user ', () => {
    describe('not registered ', () => {
      it.skip('Then response should be 404', async () => {
        await supertest(app)
          .get('/api/users/123') /* fel ID  */
          .expect(200)
          .then(async (response) => {});
      });
    });

    describe('not registered ', () => {
      it.skip('Then response should be 200', async () => {
        await supertest(app)
          .get('/api/users/auserthatcantbefound')
          .expect(200)
          .then(async (response) => {});
      });
    });
  });
});

describe('Given user service is up', () => {
  describe('When creating one user ', () => {
    it.skip('Then user should get a id', async () => {
      await supertest(app)
        .post('/api/users/signin')
        .send({
          firstName: uuidv4(),
          email: uuidv4(),
          lastName: uuidv4(),
          password: uuidv4(),
          userName: uuidv4(),
        })
        .expect(200)
        .then(async (response) => {
          expect(response.body._id).toBeTruthy();
        });
    });
  });
});

describe('Given user service is up', () => {
  const TESTABLE_USERNAME = 'username';
  const TESTABLE_EMAIL = 'email';
  const TESTABLE_FIRST_NAME = 'name';
  const TESTABLE_LAST_NAME = 'lastname';
  const TESTABLE_PASSWORD = 'password';

  describe('When updating one user ', () => {
    it.skip('Then user should change', async () => {
      await supertest(app)
        .patch('/api/users/63297a2aebae8e84cb36957c')
        .send({
          userName: TESTABLE_USERNAME,
          email: TESTABLE_EMAIL,
          firstName: TESTABLE_FIRST_NAME,
          lastName: TESTABLE_LAST_NAME,
          password: TESTABLE_PASSWORD,
        })
        .expect(200);
      /* .then(async (response) => {
            expect(response.body.firstName).toBe(TESTABLE_FIRST_NAME);
            expect(response.body.lastName).toBe(TESTABLE_LAST_NAME);
            expect(response.body.password).toBe(TESTABLE_PASSWORD);
            expect(response.body.email).toBe(TESTABLE_EMAIL);
            expect(response.body.userName).toBe(TESTABLE_USERNAME);
          }); */
    });
  });
});

describe('Given user service is up', () => {
  describe('When deleting one user ', () => {
    it.skip('Then user should be deleted', async () => {
      await supertest(app)
        .delete('/api/users/63297a2aebae8e84cb36957c')
        .expect(200);
    });
  });
});

/* // const supertest = require("supertest");
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
}); */

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
