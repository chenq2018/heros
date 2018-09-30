// 引入express
const express = require('express');
// 创建服务器
const app = express();
// 创建路由
const router = express.Router();

// 引入controller.js
const controller = require('./controller.js');

// get请求
router.get('/', controller.testAPI)

// 查询英雄列表接口
router.get('/getAllHeros', controller.getAllHeros)

// 添加英雄接口
router.post('/addHeros', controller.addHeros)

// 根据id查询英雄，:id表示url形式传参可以用res.params获取参数
router.get('/getHeros/:id', controller.getHeros)

// 根据id更新英雄数据
router.post('/updateHeros/:id', controller.updateHeros)

// 根据id删除英雄数据
router.get('/deleteHeros/:id', controller.deleteHeros)

// 向外暴露路由
module.exports = router;

// 启动服务器
app.listen('5001', () => {
    console.log("server running at http://127.0.0.1:5001");
})
