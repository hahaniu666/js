console.log(__filename);
console.log(__dirname);


// function printHello(){
//     console.log( "Hello, World!");
// }
// // 两秒后执行以上函数
// setTimeout(printHello, 2000);


var aaa = false;
function printHello() {
    console.log("Hello, World!");
    aaa = true;
    console.log("aaa", aaa);
    if (aaa) {
        // 清除定时器
        clearTimeout(t);
    }
    console.trace()

}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);


console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);




console.info("-------------程序开始执行--------------------");
var counter = 0;
console.time("获取数据");
while(counter<10){
    console.log("计数: %d", counter);
    counter++;
}
console.timeEnd('获取数据');
console.info("------------程序执行完毕--------------------");