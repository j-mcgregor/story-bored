import supertest from 'supertest';
import app from '../src/app';

describe('GET /random-url', () => {
  it('should return 404', async done => {
    const init = app();
    const request = supertest(init);
    const { status, body } = await request.get('/reset');

    expect(status).toBe(404);
    expect(body).toEqual({});
    done();
  });
});
