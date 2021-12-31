let config = {
    mongoDb: {
        uri: "XXX",
        db: 'test'
    },
    baseUrl: 'http://shortUlr'
}

if(process.env.NODE_ENV === 'test') {
    config = {
        mongoDb: {
            uri: global.__MONGO_URI__,
            db: 'test'
        },
        baseUrl: 'http://shortUlr'
    }
}

module.exports = config;