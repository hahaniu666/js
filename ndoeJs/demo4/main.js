// //event.js 文件
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event', function() {
//     console.log('some_event 事件触发');
// });
// setTimeout(function() {
//     event.emit('some_event');
// }, 1000);
//



var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('some_event', function() {
    console.log('some_event 事件触发');
});

setTimeout(function() {
    eventEmitter.emit('some_event');
}, 1000);