import supertest from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
  it('should return 200 OK', async () => {
    const init = app();
    const request = supertest(init);
    const { status, body } = await request.get('/api');

    expect(status).toBe(200);
    expect(body).toEqual({ title: 'API Examples' });
  });
});
