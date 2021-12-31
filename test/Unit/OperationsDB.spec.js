const OperationDB = require("../../src/libs/OperationDB");


// findOne

describe('Mongo DB findOne OK', () => {
    let db;
    beforeEach(async () => {

        jest.resetModules();
        jest.clearAllMocks();
        jest.resetAllMocks();

        
        // get the DB
        db = {
            getConection: () => Promise.resolve({
                collection: (coll) => (
                    {
                        findOneAndUpdate: (db, coll, data, projection) => 
                            Promise.resolve({
                                "_id" : "61cb199a4e9483076946df35",
                                "origUrl" : "https://w3schools.com/",
                                "shortUrl" : "http:mytest/AQEVVnlLNT",
                                "urlId" : "AQEVVnlLNT",
                                "date" : "2021-12-28T14:05:14.290Z",
                                "clicks" : 5
                            })
                    })
            })
        };
    });
    afterEach(() => {
    });

    it('check findOneAndUpdate', async () => {    
        const response = await OperationDB.findOneAndUpdate(db, "urls", { urlId: 'AQEVVnlLNT'}, {"clicks" : 5});
        expect(response._id).toBe('61cb199a4e9483076946df35');
    });
});