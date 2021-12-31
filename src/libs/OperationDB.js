const customError = require("./Error");


class OperationsDB {

    async find (db, coll, data, limit = 100,  sortBy = {}, projection = {}) {
        try {
            // get the conection
            const myDb = await db.getConection();

            // get the document
            const result = await myDb.collection(coll).find(data, {projection}).sort(sortBy).limit(limit).toArray();
            
            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "find", 500, e);
        }
    }

    async findOne(db, coll, data, projection){
        try {
            // get the conection
            const myDb = await db.getConection();

            // get the document
            const result = await myDb.collection(coll).findOne(data, {projection});

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "findOne", 500, e);
        }
    }

    async insertOne(db, coll, data) {
        try {
            // get the conection
            const myDb = await db.getConection();
            
            // insert a new document
            const result = await myDb.collection(coll).insertOne(data);

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "insertOne", 500, e);
        }
    }

    async findOneAndUpdate(db, coll, cond, data){
        try {
            // get the conection
            const myDb = await db.getConection();
            // update the document
            const result = await myDb.collection(coll).findOneAndUpdate(cond,  data, {returnOriginal: false} );

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "findOneAndUpdate", 500, e);
        }
    }

    async findOneAndDelete(db, coll, cond){
        try {
            // get the conection
            const myDb = await db.getConection();
            
            // delete the document
            const result = await myDb.collection(coll).findOneAndDelete(cond);

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "findOneAndDelete", 500, e);
        }
    }

    async insertMany(db, coll, data) {
        try {
            // get the conection
            const myDb = await db.getConection();
            
            // insert a new document
            const result = await myDb.collection(coll).insertMany(data);

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "insertMany", 500, e);
        }
    }

    async update(db, coll, cond, data){
        try {
            // get the conection
            const myDb = await db.getConection();
            // update the document
            const result = await myDb.collection(coll).updateOne(cond,  data, {returnOriginal: false} );

            return result;
        }  catch (e) {
            throw customError("Error MongoDB", "update", 500, e);
        }
    }
}

module.exports = new OperationsDB();