/**
 * @group component
 */
const calculator = require('../calculator.js');

test('Calculator should add!', () => {
  expect(calculator.add('1')).toBe(1);
});

test('Calculator should add!', () => {
  expect(calculator.add('3,3')).toBe(8);
});

/* 
const app = require("../app");
const supertest = require('supertest');
const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  // avoid jest open handle error
});

mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(err));
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
        .expect(201);
      expect(function (err, res) {
          if (err) done(err);
        done();
        }); 
    });
  });
});
 */
