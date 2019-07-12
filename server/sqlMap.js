// sql语句
var sqlMap = {
  // 用户
  user: {
    mainprojectDelete:'delete from mainproject where id = ?',
    mainprojectUpdate:"update mainproject set name = ? ,year = ? ,rank= ? ,studenttype= ?, starttime= ?, endtime= ?, describle1= ?, innovaproject= ?, period= ? where id = ?",
    applyUpdate:"update project set check1 = ?,middlecheck=?,lastcheck=? ,state= ? where id = ?",
    checkUpdate1:"update project set middlecheck=?,state= ? where id = ?",
    checkUpdate2:"update project set lastcheck=?,state= ? where id = ?",
    assessUpdate:"update project set assess= ? where id = ?",
    selectMainproject:'select * from mainproject',
    selectInfo:'select * from mainproject where id =?',
    selectAll:'select * from project',
    select:'select * from project where id = ? ',
    selectCheck:"select * from project where check1 = '未审核'",
    selectStateYes :"select * from project where check1 = '已通过' and state = '项目结题'and assess = ''",
    selectStateNo1 :"select * from project where check1 = '已通过' and state  ='项目初期' ",
    selectStateNo2 :"select * from project where check1 = '已通过' and state  ='项目中期' ",
    add: 'insert into mainproject(id, name, year, rank, studenttype, starttime, endtime, describle1, innovaproject, period) values (?, ?, ?, ?, ?, ?, ? ,? ,? ,?)'
  },
  news:{
    add: 'insert into news(newsname,newsdate,author,content,display) values(?,?,?,?,true)',
    query:'select * from news',
    del:'delete from news where newsname=?'
  },
  project:{
    query:'select * from project',
    select1: "select id,name,type,rank,money,captain,teacher,time from project where check1 = '已通过'",
    select3: 'select id,name,usedmoney from project',
    update: 'update project set moneystate = ? where name = ?',
    // 创新项目申请
    // eslint-disable-next-line no-useless-escape
    add: 'insert into project(name, type, rank, major, college, source, money, period, teacher, captain, phonenum, emailnum, describle1, result1, result2, result3, result4, result5, time, check1, state, middlecheck, lastcheck, range1, range2) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "未审核", "未审核", "未提交", "未提交", "2019-10-10~2019-11-03", "2020-03-04~2020-03-28")',
    // index1组件的数据显示
    query1: 'select name, college, time, state from project where captain = ?',
    // index2组件的数据显示
    query2: 'select name, money, time, state from project where captain = ? and state != "项目结题"',
    // index3组件的数据显示
    query3: 'select name, range1, state from project where captain = ? and state != "项目结题"',
    // index4组件的数据显示
    query4: 'select name, time, state from project where captain = ? and state != "项目结题"',
    // index7组件的数据显示
    query7: 'select name, money, time, range2, state from project where captain = ? and state != "项目结题"',
    // index8组件的数据显示
    query8: 'select college, name, money, starttime, endtime from project where state = "项目结题" and  captain = ?',
    // 参与组件的数据显示
    queryOn: 'select name, captain, money, time, check1, state from project where captain = ?',
    // 进度管理的修改
    update1: 'update project set progress = ? where name = ?',
    // 提交中期报告后状态更新
    update2: 'update project set middlecheck = "已提交" where name = ?',
    // 提交结题报告后状态更新
    update3: 'update project set lastcheck = "已提交" where name = ?',
    // 经费变更申请
    update4: 'update project set money = ? where name = ?',
    // 查看某一条的语句
    queryByName: 'select * from project where name = ?'
  },
  results:{
    add: 'insert into results(resultname,teamname,details) values(?,?,?)'
  },
  users:{
    query:'select * from user where name = ?',
  },
  funding: {
    select: 'select * from funding',
    add: 'insert into funding(id,name,reason,usemoney,usedate) values (?,?,?,?,?)',
    select1: 'select usedate,reason,usemoney from funding where name = ?',
    add1: 'insert into funding(name, reason, usedate, usemoney, check1) values (?, ?, ?, ?, "未审核")',
    query: 'select name, reason, usedate, usemoney, check1 from funding where name = ?',
    select2: 'select usedate,name,reason,usemoney,check1 from funding where check1 = "未审核"'
  },
  money: {
    select: "select id,name,type,rank,money,captain,teacher,time from money where check1 = '通过'",
    select2: "select time,name,type,check1 from money where check1 != '通过'"
  },
  // 自主项目申报
  selfProject: {
    add: 'insert into selfproject(name, type, rank, major, unit, date1, institution, class1, describe1, participant, teacher, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "未审核")',
    query9: 'select name, type, date1, unit, describe1, state from selfproject',
    del: 'delete from selfproject where name = ?'
  },
  
};

module.exports = sqlMap;
