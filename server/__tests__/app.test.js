const supertest = require('supertest');

const app = require('../app/app');

const payload = {
  prompt: 'I want to watch a scifi movie with tom cruise which is less than 2 hours',
};

const movieData = {
  movie_id: 15
}

describe('Get movies', () => {
  test('Content-Type should be "application/json" and status code 200', async () => {
    supertest(app.callback())
      .post('/')
      .set('Content-Type', 'application/json')
      .send(payload)
      .expect('Content-Type', /json/)
      .expect(res => expect(res.status).toBe(200));
  });

  test('Return 500 status code if input dosn\'t exist', () => {
    supertest(app.callback())
      .post('/')
      .set('Content-Type', 'application/json')
      .send() 
      .expect(res => expect(res.status).toBe(500));
  });
})

describe('Watchlist movies', () => {
  test('Content-Type should be "application/json" and status code 200', async () => {
    supertest(app.callback())
      .post('/watchlist')
      .set('Content-Type', 'application/json')
      .send(movieData)
      .expect('Content-Type', /json/)
      .expect(res => expect(res.status).toBe(200));
  });

  test('Return 500 status code if input dosn\'t exist', () => {
    supertest(app.callback())
      .post('/')
      .set('Content-Type', 'application/json')
      .send() 
      .expect(res => expect(res.status_message).toBe('Success.'));
  });
})

