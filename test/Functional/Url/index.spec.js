const request = require('supertest');
const {MongoClient} = require('mongodb');

jest.setTimeout(30000);

const app = require('./../../../src/app');

const getUrl = async (urlId) => request(app)
  .get(`/api/urls/${urlId}`)
  .set({'Authorization': 'test'})

const getTopUrl = async () => request(app)
  .get(`/api/urls/`)
  .set({'Authorization': 'test'})

const postUrl = async (origUrl) => request(app)
  .post(`/api/urls/`)
  .set({'Authorization': 'test'})
  .send({ origUrl })

describe('Get URL', () => {
    let connection;
    let db;

    beforeEach(async () => {
        jest.resetModules();
        jest.clearAllMocks();
        jest.resetAllMocks();

        connection = await MongoClient.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('test');

        const counter = db.collection('counter');

        await counter.insertMany([
            {
                "counter" : 0
            }
        ]);

    });

    it('should be return Not found', async () => {
        const {body} = await getUrl('asdda');
        expect(body.message).toBe('Not found');
    });

    it('should be able to create the short url', async () => {
        const {body} = await postUrl('https://google.com/');
        expect(body.origUrl).toBe('https://google.com/');

        const {status} = await getUrl(body.urlId);
        expect(status).toBe(302);

    });

    it('should be able to get the 100 top short url', async () => {
        const {body} = await postUrl('https://google.es/');
        expect(body.origUrl).toBe('https://google.es/');

        const {body: urls} = await getTopUrl();
        expect(urls.documents.length).toBeGreaterThan(0);

    });

    afterAll(async () => {
        await connection.close(); 
    })
});