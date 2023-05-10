import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(400);
});

it('fails when am incorrect password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(201);

    return request(app)
        .post('/api/users/signin')
        .send({
            email: 'demo@demo.com',
            password: 'demo1234',
        })
        .expect(400);
});

it('sets a cookie after a successful signin', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({
            email: 'demo@demo.com',
            password: 'demo123',
        })
        .expect(200);
    expect(response.get('Set-Cookie')).toBeDefined();
});
