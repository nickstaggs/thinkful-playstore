var express = require('express');
var router = express.Router();
let playstore = require('./playstore');

/* GET users listing. */
router.get('', function(req, res, next) {

  let localPlaystore = playstore;
  if (req.query["sort"] !== undefined) {
    let sortParam = req.query["sort"];
    if (sortParam === "rating") {
      localPlaystore = localPlaystore.sort((a,b) => a.Rating - b.Rating);
    }
    else if (sortParam === "app") {
      localPlaystore = localPlaystore.sort((a,b) => (a.App).localeCompare(b.App));
    }
    else if (sortParam === "") {
      localPlaystore = localPlaystore;
    }
    else {
      res.status(400);
      res.end();
    }
  }

  if (req.query["genres"] !== undefined) {
    let genres = ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];
    let genresParam = req.query["genres"];

    if (genres.includes(genresParam)) {
      localPlaystore = localPlaystore.filter(app => app.Genres === genresParam);
    }

    else {
      res.status(400);
      res.end();
    }
  }

  res.status(200);
  res.send(localPlaystore);
});

module.exports = router;
