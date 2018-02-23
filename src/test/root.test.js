const request = require('supertest');
const app = require('../server');

test('root route', async () => {
  const response = await request(app.callback()).get('/');
  expect(response.status).toEqual(200);
  expect(response.text).toEqual('Hello World');
});

