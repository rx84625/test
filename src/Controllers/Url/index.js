const validUrl = require('valid-url')
const {ObjectId} = require('mongodb')

const UrlsModel = require('./../../Models/Url')
const CounterModel = require('../../Models/Counter')
const hashData = require('./../../libs/shortUrl');
const config = require("./../../libs/Config")
const customError = require("./../../libs/error")

class UrlsController {
  async get(cond, limit = 100, sortBy= {}) {
    const documents = await UrlsModel.find(cond, limit, sortBy)

    return {
      responseCode: 200,
      responseSend: {
        documents
      }
    };
  }

  async getOne(urlId) {
    if(!urlId) {
        throw customError("UrlId is required", "UrlsController get", 500);
    }

    const {value: url} = await UrlsModel.findAndUpdateUrl({ urlId }, { $inc: { clicks: 1 } })

    if (url) {
        return url;
    } else {
        throw customError("Not found", "get api/url", 404);
    }
  }

  async post(origUrl) {
    if (validUrl.isUri(origUrl)) {
        let [document] = await CounterModel.find();

        const urlId = hashData(document.counter);
        const url = {
          origUrl,
          shortUrl: `${config.baseUrl}/${urlId}`,
          urlId,
          date: new Date(),
          clicks: 0
        };

        const {insertedId} = await UrlsModel.insertOne(url);

        await CounterModel.update({_id: document._id}, { $inc: { counter: 1 } });

        return {
          responseCode: 201,
          responseSend: {
            _id: insertedId.toString(),
            ...url
          }
        };
      } else {
        throw customError("Invalid Original Url", "UrlsController post", 500);
      }
}
}

module.exports = new UrlsController()