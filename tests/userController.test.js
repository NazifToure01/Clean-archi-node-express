
import jest from "mocha/lib/runnable.js";
// tests/userController.test.js
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app.js';
import UserRepository from "../interface-adapters/repositories/UserRepository.js";

let server;

beforeAll(done => {
    server = app.listen(4000, done);
});

afterAll(done => {
    mongoose.connection.close(() => {
        server.close(done);
    });
});

describe('UserController', () => {
    let userRepositoryStub;

    beforeEach(() => {

        userRepositoryStub = {
            add: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        };

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /users', () => {
        it('should create a user', async () => {
            const userData = { name: 'John Doe', email: 'john@example.com' };
            userRepositoryStub.add.mockResolvedValue(userData);

            const response = await request(app)
                .post('/users')
                .send(userData)
                .expect(201);

            expect(response.body).toEqual(expect.objectContaining(userData));
        });

        it('should handle errors', async () => {
            userRepositoryStub.add.mockRejectedValue(new Error('Failed to create user'));

            const response = await request(app)
                .post('/users')
                .send({ name: 'Jane Doe', email: 'jane@example.com' })
                .expect(400);
        });
    });

    describe('GET /users', () => {
        it('should retrieve all users', async () => {
            const usersData = [
                { name: 'John Doe', email: 'john@example.com' },
                { name: 'Jane Doe', email: 'jane@example.com' }
            ];
            userRepositoryStub.findAll.mockResolvedValue(usersData);

            const response = await request(app)
                .get('/users')
                .expect(200);

            expect(response.body).toEqual(expect.arrayContaining(usersData));
        });
    });
    
});
