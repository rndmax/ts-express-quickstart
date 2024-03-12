import supertest, { SuperTest, Test } from 'supertest';
import { server } from './server';

describe('app', () => {
  let request: SuperTest<Test>;
  beforeEach(() => {
    request = supertest(server);
  });
  it('should return a successful response for GET /', async () => {
    const response = await request.get('/hello?user-name=max');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello max!');
  });
});
