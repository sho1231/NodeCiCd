const request = require('supertest');
const app = require('../app.js');
const mongo=require('../connect');

describe('CRUD',() => {
    beforeAll(async()=>{
        await mongo.connect();
    })
    console.log(123,app);
    test('Get req test', async () => {
        await request(app).get("/get").expect(200);
    })
    test('Post req test', async () => {
        await request(app).post("/get").send({
            name:"Shourja1",
            age:31
        }).expect(200);
    })
    afterAll(async()=>{
        await mongo.users.deleteMany();
        await mongo.close();
    })
})