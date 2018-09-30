// 引入express
const express = require('express');
// 创建服务器
const app = express();

// 快速启动静态页面
app.use(express.static('./'));
app.use('/semantic', express.static('./semantic'));
app.use('/node_moudles', express.static('./node_moudles'));

// 启动服务器
app.listen('3001', () => {
    console.log("server running at http://127.0.0.1:3001");
})