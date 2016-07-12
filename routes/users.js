var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET users listing. */

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/a', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/posts',function (req, res) {
  console.log(req.get('content-type'));
  console.log(req.body.name);
  res.send("/posts!!")
});

module.exports = router;