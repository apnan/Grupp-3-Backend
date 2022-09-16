/* const supertest = require('supertest');
const request = require('supertest');

const HOST = process.env.HOST || 3000;

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

test('GET api/users', async () => {
  await supertest(HOST)
    .get('/api/users/')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBe(true);
    });
});

test('POST/users', async () => {
  const data = {
    userName: 'newW',
    firstName: 'new for test"',
    lastName: 'woman',
    email: 'tester123@mai.com',
    password: 'dddd999999',
  };
  await supertest(HOST)
    .post('/api/users')
    .send(data)
    .expect(200)
    .then(async (response) => {
      expect(response.body._id).toBeTruthy();
      expect(response.body.userName).toBe(data.userName);
      expect(response.body.firstName).toBe(data.firstName);
      expect(response.body.lastName).toBe(data.lastName);
      expect(response.body.email).toBe(data.email);
      expect(response.body.password).toBe(data.password);
    });
});

describe('Testing users', () => {
  describe('given a broken url', () => {
    it('should return status 404', () => {
      const container = request(HOST);
      container.get('/whatever').expect(404);
    });
  });
});
 */
