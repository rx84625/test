const express = require('express');
const UrlsController = require('./../Controllers/Url')



const router = express.Router();

router.get('/:urlId', async (req, res, next) => {
  try {
    const {origUrl} = await UrlsController.getOne(req.params.urlId)
    res.redirect(origUrl);
  } catch (err) {
    next(err)
  }
});

router.get('/', async (req, res, next) => {
  try {
    res.locals = await UrlsController.get({}, 100,  {clicks: -1})
    next()
  } catch (err) {
    next(err)
  }
});

// Short URL Generator
router.post('/', async (req, res, next) => {
  try {
    const { origUrl } = req.body;

    res.locals = await UrlsController.post(origUrl)

    next();
  } catch (err) {
    next(err)
  }
});


module.exports = router;
