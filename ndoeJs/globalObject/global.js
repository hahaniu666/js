console.info("-------------程序开始执行--------------------");
// 输出到终端
process.stdout.write("大家好！我是山水子农！" + "\n");
// 通过参数读取
console.log("由命令行执行脚本时的各个参数:");
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
// 获取执行路径
console.log("执行路径："+process.execPath);
// 平台信息
console.log("平台信息："+process.platform);
// Node 的版本
console.log("Node 的版本："+process.version);
// 当前进程的进程号
console.log("当前进程的进程号："+process.pid);
// 进程名
console.log("进程名："+process.title);
// 当前 CPU 的架构
console.log("当前CPU的架构："+process.arch);



console.log("111："+process.argv);
console.log("222："+process.env.toString());

console.log("333："+process.config);
console.info("------------程序执行完毕--------------------");

console.info("-------------程序开始执行--------------------");
// 输出当前目录
console.log('当前目录: ' + process.cwd());
// 输出当前版本
console.log('当前版本: ' + process.version);
// 输出内存使用情况
console.log('内存使用情况:',process.memoryUsage());
// Node 已经运行的秒数
console.log('Node已经运行的秒数:'+process.uptime()+'s');
// 当前进程的高分辨时间
console.log('当前进程的高分辨时间:',process.hrtime());
console.info("------------程序执行完毕--------------------");