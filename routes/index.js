var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/dbk', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var temp=[];
  if(req.body.a==1){
   temp=[1,2,3]
  }else if(req.body.a==2){
    temp=[4,5,6]
  }
   res.send({name:temp})
});
module.exports = router;
