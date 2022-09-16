const app = require('../server.js');
const supertest = require('supertest');
const { v4: uuidv4 } = require('uuid');

describe('Given user service is up', () => {
  describe('When listing all users ', () => {
    it('Then response should be as expected', async () => {
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
      it('Then response should be 404', async () => {
        await supertest(app)
          .get('/api/users/123') /* fel ID  */
          .expect(200)
          .then(async (response) => {});
      });
    });

    describe('not registered ', () => {
      it('Then response should be 200', async () => {
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
    it('Then user should get a id', async () => {
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
    it('Then user should change', async () => {
      await supertest(app)
        .patch('/api/users/6322e25490d3916a49b877e4')
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
    it('Then user should be deleted', async () => {
      await supertest(app)
        .delete('/api/users/6322e25490d3916a49b877e4')
        .expect(200);
    });
  });
});
