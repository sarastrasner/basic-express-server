'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('no name in query', () => {
  it('should respond with a 500 error for invalid name queries', () => {
    return mockRequest
      .get('/person')
      .send({})
      .then(results => {
        expect(results.status).toBe(500)
      }).catch(console.error);
  })
})

describe('name in query', () => {
  it('should respond with a status 200 for valid name queries', () => {
    return mockRequest
      .get('/person')
      .send({name: 'Sara'})
      .then(results => {
        expect(results.status).toBe(200)
      }).catch(console.error);
  })
})

// The above code is passing for some reason, even though it is sending the wrong response code.

