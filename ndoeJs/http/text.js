var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});//设置response编码为utf-8
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('host',host);
    console.log('port',port);
    console.log('server.address()',server.address());
    console.log('server.',server);

    console.log("应用实例，访问地址为 http://localhost:8081/index.html", host, port)

})