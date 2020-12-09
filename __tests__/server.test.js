'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('should respond with a 404 for bad routes', () => {
    return mockRequest
      .get('/bananas')
      .then(results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
})

describe('bad methods', () => {
  it('should respond with a 404 for bad methods', () => {
    return mockRequest
      .put('/bananas')
      .then(results => {
        expect(results.status).toBe(404)
      }).catch(console.error);
  })
})

