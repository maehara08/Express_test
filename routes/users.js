var express = require('express');
var router = express.Router();
/* GET users listing. */

router.use(require('body-parser')());

router.get('/a', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/posts',function (req, res) {
  console.log(req.body.name);
  res.send("/posts!!")
});

module.exports = router;
