const { MongoClient } = require("mongodb");
const customError = require("./Error");
const config = require("./Config")

// Class Mongo
class MongoConnection {
  
    constructor() {
        this._db = null;
    }

    // return the connection
    getDB() {
        try {
            // return the conenction
            return this._db
        } catch (e) {
            throw customError("Error returning the connection", "getDB", 500, e);
        }
    }

    // this function create the connection if it dont exist yet
    async getConection() {
        try {
            // check if exist the connection
            if (this._db) {
                return this.getDB();
            }

            // Mongo Client
            const connection = await MongoClient.connect(config.mongoDb.uri, { useNewUrlParser: true });

            // pick up the DB
            this._db = connection.db(config.mongoDb.db);

            return this._db;
        } catch (e) {
            throw customError("Error Mongo", "getConection", 500, e);
        }
    }
}

module.exports = new MongoConnection();