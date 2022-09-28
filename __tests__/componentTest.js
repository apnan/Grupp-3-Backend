/* const calculator = require('../calculator.js');

test('Calculator should add!', () => {
  expect(calculator.add('1')).toBe(1);
});

test('Calculator should add!', () => {
  expect(calculator.add('3,3')).toBe(6);
});
 */

/**
 * @group component
 */
const app = require('../server.js');
const supertest = require('supertest');
const { v4: uuidv4 } = require('uuid');

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  // avoid jest open handle error
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

/* describe('Given user service is up', () => {
  describe('When finding one user ', () => {
    describe('not registered ', () => {
      it('Then response should be 404', async () => {
        await supertest(app)
          .get('/api/users/123') 
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
 */
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
        .expect(201);
      /* .expect(function (err, res) {
          if (err) return done(err);
          done();
        }); */
    });
  });
});

/* describe('Given user service is up', () => {
  const TESTABLE_USERNAME = 'username';
  const TESTABLE_EMAIL = 'email';
  const TESTABLE_FIRST_NAME = 'name';
  const TESTABLE_LAST_NAME = 'lastname';
  const TESTABLE_PASSWORD = 'password'; */

/* describe('Given user service is up', () => {
  describe('When deleting one user ', () => {
    it.skip('Then user should be deleted', async () => {
      await supertest(app)
        .delete('/api/users/63297a2aebae8e84cb36957c')
        .expect(200);
    });
  });
});
 */
