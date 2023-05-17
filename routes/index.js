var express = require('express');
var router = express.Router();
var my = require('../models/atlas')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', async function(req, res, next) {

      try{
        data = await my.create(req.body)
        res.status(201).json({
          status:'succes',
          data
        })
      }
      catch(error){
        console.log(error);
      }

});

module.exports = router;
