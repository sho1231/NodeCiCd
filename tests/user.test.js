const app = require('../index1');
const request = require('supertest');
const mongo=require('../connect');

describe('CRUD',() => {
    beforeAll(async()=>{
        await mongo.connect();
    })
    test('Get req test', async () => {
        await request(app).get("/get").expect(200);
    })
    test('Post req test', async () => {
        await request(app).post("/get").send({
            name:"Shourja1",
            age:23
        }).expect(201);
    })
})