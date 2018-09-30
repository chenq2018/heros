// 引入express
const express = require('express');

// 创建服务器
const app = express();
// 引入body-parse，解决post传输问题
const bodyParser = require('body-parser');
// 注册body-parse中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 启用cors解决数据跨域问题
const cors = require('cors');
app.use(cors());

// 引入router.js
const router = require('./router.js');
// 注册中间件
app.use(router);

// 启动服务器
app.listen('5002', () => {
    console.log("server running at http://127.0.0.1:5002");
})

