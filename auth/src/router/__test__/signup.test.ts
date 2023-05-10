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

it('should return a 400 with a invalid email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo123invalidemail',
            password: 'demo123',
        })
        .expect(400);
});

it('should return a 400 with a invalid password', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'd',
        })
        .expect(400);
});

it('should return a 400 with a empty email or password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
        })
        .expect(400);

    await request(app)
        .post('/api/users/signup')
        .send({
            password: 'demo',
        })
        .expect(400);
});

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(201);

    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(400);
});

it('sets a cookie after a successful signup', async () => {
    const response = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(201);
    expect(response.get('Set-Cookie')).toBeDefined();
});
