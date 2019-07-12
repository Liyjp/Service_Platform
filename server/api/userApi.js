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

//添加新闻
router.post('/addNews', (req, res) => {
  var sql = $sql.news.add;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [params.newsname, params.newsdate,params.author,params.content], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//删除新闻
router.post('/delNews', (req, res) => {
  var sql = $sql.news.del;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [params.newsname], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//用户
router.post('/getUsers', (req, res) => {
  var sql = $sql.users.query;
  var params = req.body;
  // console.log(params);
  conn.query(sql,[params.name], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//显示新闻列表
router.post('/showNews', (req, res) => {
  var sql = $sql.news.query;
  var params = req.body;
  // console.log(params);
  conn.query(sql,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//添加科研成果
router.post('/addResults', (req, res) => {
  var sql = $sql.results.add;
  var params = req.body;
  // console.log(params);
  conn.query(sql, [params.resultname, params.teamname,params.details], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

//查找所有项目
router.post('/showProjects', (req, res) => {
  var sql = $sql.project.query;
  var params = req.body;
  // console.log(params);
  conn.query(sql,function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.id, params.name,params.year,params.rank,params.studenttype,params.starttime,params.endtime,params.describle1,params.innovaproject,params.period], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
//返回全部数据接口,一开始进来就进行加载
router.get('/allUser', (req, res) => {
  let sql = $sql.user.selectAll;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//根据id显示详细的项目信息
router.get('/queryUser', (req, res) => {
  let sql = $sql.user.select;
  var params = req.query;
  conn.query(sql, [params.queryParam], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      console.log(result)
    }
  })
});
//显示已经结题的项目
//返回全部数据接口,一开始进来就进行加载
router.get('/stateYesUser', (req, res) => {
  let sql = $sql.user.selectStateYes;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//显示未结题的项目
//返回全部数据接口,一开始进来就进行加载
router.get('/stateNoUser1', (req, res) => {
  let sql = $sql.user.selectStateNo1;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//返回全部数据接口,一开始进来就进行加载
router.get('/stateNoUser2', (req, res) => {
  let sql = $sql.user.selectStateNo2;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//根据id显示主项目内容
//返回全部数据接口,一开始进来就进行加载
router.get('/mainprojectInfo', (req, res) => {
  let sql = $sql.user.selectInfo;
  var params = req.query;
  conn.query(sql, [params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      console.log(result)
    }
  })
});
//显示主项目内容
//返回全部数据接口,一开始进来就进行加载
router.get('/mainInfo', (req, res) => {
  let sql = $sql.user.selectMainproject;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//显示未通过的项目
//返回全部数据接口,一开始进来就进行加载
router.get('/checkUser', (req, res) => {
  let sql = $sql.user.selectCheck;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//修改用户数据接口
router.patch('/patchUser', (req, res) => {
  var sql = $sql.user.applyUpdate;
  var params = req.body;
  conn.query(sql, [params.check1,params.middlecheck,params.lastcheck ,params.state,params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//删除用户接口
router.delete('/deleteUser', (req, res) => {
  var sql = $sql.user.mainprojectDelete;
  console.log(req)
  var params = req.query;
  conn.query(sql, [params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//修改mainproject数据接口
router.patch('/editAgain', (req, res) => {
  var sql = $sql.user.mainprojectUpdate;
  var params = req.body;
  conn.query(sql, [params.name , params.year , params.rank , params.studenttype , params.starttime  , params.endtime , params.describle1 , params.innovaproject , params.period , params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});

//修改用户数据接口
router.patch('/checkUpdate1', (req, res) => {
  var sql = $sql.user.checkUpdate1;
  var params = req.body;
  conn.query(sql, [ params.middlecheck,params.state,params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//修改用户数据接口
router.patch('/checkUpdate2', (req, res) => {
  var sql = $sql.user.checkUpdate2;
  var params = req.body;
  conn.query(sql, [ params.lastcheck,params.state,params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});
//修改用户数据接口
router.patch('/assessUser', (req, res) => {
  var sql = $sql.user.assessUpdate;
  var params = req.body;
  conn.query(sql, [params.assess,params.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
    }
  })
});

// 申请表入库接口
router.post('/addProject', (req, res) => {
  var sql = $sql.project.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name, params.type, params.rank, params.major, params.college, params.source, params.money, params.period, params.teacher, params.captain, params.phonenum, params.emailnum, params.describe1, params.result1, params.result2, params.result3, params.result4, params.result5, params.time], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 我申请的项目查询接口
router.post('/queryProject1', (req, res) => {
  var sql = $sql.project.query1
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 立项项目管理查询接口
router.post('/queryProject2', (req, res) => {
  var sql = $sql.project.query2
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 中期检查申请查询接口
router.post('/queryProject3', (req, res) => {
  var sql = $sql.project.query3
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 项目变更申请查询接口
router.post('/queryProject4', (req, res) => {
  var sql = $sql.project.query4
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 项目结题申请查询接口
router.post('/queryProject7', (req, res) => {
  var sql = $sql.project.query7
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 结题项目管理查询接口
router.post('/queryProject8', (req, res) => {
  var sql = $sql.project.query8
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 参与的项目查询接口
router.post('/queryProjectOn', (req, res) => {
  var sql = $sql.project.queryOn
  var params = req.body
  console.log(params)
  conn.query(sql, [params.captain], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 自主申请表入库接口
router.post('/addSelfProject', (req, res) => {
  var sql = $sql.selfProject.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name, params.type, params.rank, params.major, params.unit, params.date1, params.institution, params.class1, params.describe1, params.participant, params.teacher], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 自主项目查询接口
router.post('/querySelfProject9', (req, res) => {
  var sql = $sql.selfProject.query9
  var params = req.body
  console.log(params)
  conn.query(sql, function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 自主申请表删除接口
router.post('/delSelfProject', (req, res) => {
  var sql = $sql.selfProject.del
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 项目进度管理接口
router.post('/updateProject1', (req, res) => {
  var sql = $sql.project.update1
  var params = req.body
  console.log(params)
  conn.query(sql, [params.progress, params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
}),

// 添加经费使用管理
router.post('/addFunding', (req, res) => {
  var sql = $sql.funding.add1;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.name, params.reason, params.usedate, params.usemoney], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
}),

// 经费管理查询接口
router.post('/queryFunding', (req, res) => {
  var sql = $sql.funding.query
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
}),

// project表的查看总接口
router.post('/queryProjectByName', (req, res) => {
  var sql = $sql.project.queryByName
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 中期提交接口
router.post('/updateProject2', (req, res) => {
  var sql = $sql.project.update2
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 结题提交接口
router.post('/updateProject3', (req, res) => {
  var sql = $sql.project.update3
  var params = req.body
  console.log(params)
  conn.query(sql, [params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
})

// 经费变更管理接口
router.post('/updateProject4', (req, res) => {
  var sql = $sql.project.update4
  var params = req.body
  console.log(params)
  conn.query(sql, [params.money, params.name], function (err, result0) {
    if (err) {
      console.log(err)
    }
    if (result0) {
      jsonWrite(res, result0)
    }
  })
});

module.exports = router;
