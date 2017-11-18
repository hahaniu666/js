var buffer1 = new Buffer('ABCD');
// 拷贝一个缓冲区
var buffer2 = new Buffer('qw');   //创建长度为3的字节
console.log("buffer1 " + buffer1.toString());
console.log("buffer2 " + buffer2.toString());
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

console.log("buffer1 content: " + buffer1.toString());

var buffer3 = new Buffer('runoob');
// 剪切缓冲区
var buffer4 = buffer3.slice(0,2);
console.log("buffer4 content: " + buffer4.toString());