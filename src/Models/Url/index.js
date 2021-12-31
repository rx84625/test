const connectionDB = require('../../libs/MongoConnection')
const operationsDB = require('../../libs/operationDB')

class UrlsModel {
    findAndUpdateUrl(cond, data) {
       return operationsDB.findOneAndUpdate(connectionDB, 'urls', cond, data);
    }

    findOne(cond) {
        return operationsDB.findOne(connectionDB, 'urls', cond);
    }

    find(cond, limit = 100, sortBy = {}) {
        return operationsDB.find(connectionDB, 'urls', cond, limit, sortBy);
    }

    insertOne(data) {
        return operationsDB.insertOne(connectionDB, 'urls', data);
    }
}

module.exports = new UrlsModel()