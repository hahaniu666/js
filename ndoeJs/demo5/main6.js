// const buf = Buffer.allocUnsafe(26);
//
// for (let i = 0; i < 26; i++) {
//     // 97 is the decimal ASCII value for 'a'
//     buf[i] = i + 97;
// }
// console.log('111',buf.toString());  //abcd....xyz
//
// buf.copy(buf, 0, 4, 10);  //将buf的4开始到10结束的字节拷贝到buf中0开始   并占用其位置
//
// // Prints: efghijghijklmnopqrstuvwxyz
// console.log('111',buf.toString());
//


// const buf1 = Buffer.allocUnsafe(26);
// const buf2 = Buffer.allocUnsafe(26).fill('!');
//
// for (let i = 0; i < 26; i++) {
//     // 97 是 'a' 的十进制 ASCII 值
//     buf1[i] = i + 97;
// }
//
//
//
//
//
// console.log('buf1',buf1.toString());
// console.log('buf2',buf2.toString());
// buf1.copy(buf2, 8, 16, 20);  //将buf1中的数据,也就是abcd....xyz,从16开始到20结束的4个字节拷贝到buf2中从8开始的数据
// console.log('buf4',buf2.toString());
// // 输出: !!!!!!!!qrst!!!!!!!!!!!!!
// console.log('buf3',buf2.toString('ascii', 0, 25));


const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');

for (const pair1 of buf1.entries()) {
    console.log('1', pair1);
}

for (const pair2 of buf2.entries()) {
    console.log('2', pair2);
}
for (const pair3 of buf3.entries()) {
    console.log('3', pair3);
}


console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf3.toString());

// 输出: true
console.log(buf1.equals(buf2));

// 输出: false
console.log(buf1.equals(buf3));