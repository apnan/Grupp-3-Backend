/**
 * @group integration
 */

const app = require('../app.js');
const request = require('supertest');
const { default: mongoose } = require('mongoose');
const { response } = require('../app.js');
// const supertest=require('supertest')

//const HOST = process.env.HOST || "http://localhost:3000/";

dbURI = 'mongodb://mongo:27017/test';

let data = {
  userName: 'dummy10',
  firstName: 'dummy10',
  lastName: 'dummy10',
  email: 'dummy10@mail.com',
  password: '3333333',
};

describe('testing api', function () {
  beforeAll(async () => {
    await mongoose.connect(
      dbURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log('Connected to Mongo DB')
    );
  });

  describe('/POST/signin', function () {
    it.skip('should add new user', async () => {
      await request(app)
        .post('/api/users/signin')
        .send(data)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .then(function (err, response) {
          if (err) return err;
        });
    });
  });

  afterAll(async () => {
    await mongoose.connection.close(console.log('Done'));
  });
});
