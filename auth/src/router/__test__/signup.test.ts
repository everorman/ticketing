import request from 'supertest';
import { app } from '../../app';

it('should return a success response ', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(201);
});
