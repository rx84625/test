const connectionDB = require('../../libs/MongoConnection')
const operationsDB = require('../../libs/operationDB')

class CounterModel {
    find(cond) {
       return operationsDB.find(connectionDB, 'counter', cond);
    }

    findOne(cond) {
        return operationsDB.findOne(connectionDB, 'counter', cond);
    }

    update(cond, data) {
        return operationsDB.update(connectionDB, 'counter', cond, data);
     }
}

module.exports = new CounterModel()