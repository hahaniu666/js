//编写程序,,读取input.txt中的内容并写入到output.txt中输出   类似于main3.js中的pipe方法

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output2.txt');
// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {

    console.log('data', data);
    console.log('chunk', chunk);
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);

    // 使用 utf8 编码写入数据
    writerStream.write(data, 'UTF8');
    // 标记文件末尾
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', function () {
        console.log("写入完成123。");
    });
    writerStream.on('error', function (err) {
        console.log(err.stack);
    });
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");
