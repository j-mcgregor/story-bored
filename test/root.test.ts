import supertest from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', async done => {
    const init = app();
    const request = supertest(init);
    const { status, body } = await request.get('/');

    expect(status).toBe(200);
    expect(body).toEqual({
      story: { prompts: 'http://localhost:3000/api/story/prompts' }
    });
    done();
  });
});
