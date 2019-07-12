var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

router.get('/moneylist', (req,res)=>{
  var sql = $sql.project.select1;
  conn.query(sql, function (error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    res.send(results).end();
  })
});
router.get('/moneylist/state', (req,res)=>{
  var sql = $sql.funding.select2;
  conn.query(sql, function (error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    res.send(results).end();
  })
});
router.post('/moneylist/update', (req, res) => {
  var sql = $sql.project.update;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.check1, params.name], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

module.exports = router;
