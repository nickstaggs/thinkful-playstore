const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const playstore = require('../routes/playstore');

describe('Express App', () => {
    it('should return a message from GET /', () => {
      return supertest(app)
        .get('/')
        .expect(200, 'Hello Express!');
    });
  });

describe('Apps endpoint', () => {
    it('should return the playstore from GET /apps', () => {
        return supertest(app)
          .get('/apps')
          .expect(200, playstore);
      });
})