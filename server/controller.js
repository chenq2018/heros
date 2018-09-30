const conn = require('./db.js');

module.exports = {
    testAPI: (req, res) => {
        // express中的方法send()
        res.send('API接口连接成功');
    },
    getAllHeros: (req, res) => {
        // sql语句
        const sql = "select * from heros";
        // 查询
        conn.query(sql, (err, result) => {
            if(err) return res.send({status: 500, msg: err.message, data: {}});
    
            res.send({status: 200, msg: 'ok', data: result});
        })
    },
    addHeros: (req, res) => {
        // 获取用户传入的添加数据
        const hero = req.body;
        // 获取当前时间
        const dt = new Date();
        // 字符串中有个新方法padStart(位数, '以什么补齐')可以补齐时间前面的0
        // 获取年
        const y = dt.getFullYear(); 
        // 获取月
        const m = (dt.getMonth() + 1).toString().padStart(2, '0');
        // 获取日
        const d = (dt.getDate()).toString().padStart(2, '0');
        // 获取时
        const h = (dt.getHours()).toString().padStart(2, '0');
        // 获取分
        const min = (dt.getMinutes()).toString().padStart(2, '0');
        // 获取秒
        const s = (dt.getSeconds()).toString().padStart(2, '0');
    
        // 拼接
        hero.time = y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
    
        // 查询语句，?是占位符，只有在node中才可以用hero代替? 这样使用
        const sql = "insert into heros set ?"
        conn.query(sql, hero, (err, result) => {
            if(err) return res.send({status: 500, msg: err.message, data: null});
    
            res.send({status: 200, msg: 'ok', data: null});
        })
    },
    getHeros: (req, res) => {
        // 获取id
        const id = req.params.id;
        // sql语句
        const sql = 'select * from heros where id = ?';
        // 执行语句
        conn.query(sql, id, (err, result) => {
            if(err) return res.send({status: 500, msg: err.message, data: null});
    
            res.send({status: 200, msg: 'ok', data: result});
        })
    },
    updateHeros: (req, res) => {
        // 获取id
        const id = req.params.id;
        // 获取数据
        const herosInfo = req.body;
        // sql语句
        const sql = 'update heros set ? where id = ?';
        // 执行语句
        conn.query(sql, [herosInfo, id], (err, result) => {
            if(err) return res.send({status: 500, msg: err.message, data: null});
    
            res.send({status: 200, msg: 'ok', data: null});
        })
    },
    deleteHeros: (req, res) => {
        // 获取id
        const id = req.params.id;
        // sql语句，假删除
        const sql = 'update heros set isdel = 1 where id = ?';
        // 执行
        conn.query(sql, id, (err, result) => {
            if(err) return res.send({status: 500, msg: err.message, data: null});
    
            res.send({status: 200, msg: 'ok', data: null});
        })
    
    }

}