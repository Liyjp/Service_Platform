// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const fundinglistApi = require('./api/fundinglistApi');
const moneyApi = require('./api/moneyApi');
const project = require('./api/project');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 后端api路由
app.use('/api/user', userApi);
app.use('/api/funding',fundinglistApi);
app.use('/api/money',moneyApi);
app.use('/api/project',project);


// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
