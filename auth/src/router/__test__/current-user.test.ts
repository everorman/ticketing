import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
    const mockUser = {
        email: 'demo@demo.com',
        password: 'demo123',
    };

    const singOutResponse = await request(app)
        .post('/api/users/signup')
        .send(mockUser)
        .expect(201);

    const cookie = singOutResponse.get('Set-Cookie');

    const response = await request(app)
        .get('/api/users/currentUser')
        .set('Cookie', cookie)
        .expect(200);

    expect(response.body.currentUser.email).toEqual(
        mockUser.email
    );
});
