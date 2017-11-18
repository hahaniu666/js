buf = new Buffer(256);
len = buf.write("www.runoob.com");   //写入对象

console.log("写入字节数 : "+  len);