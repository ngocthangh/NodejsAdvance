var EventEmitter = require('events');
var util = require('util');

var Dialog = function() {
    this.message = 'Xin chao toi la dialog';
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function() {
    console.log(this.message);
    this.emit('event');
}

var dialog = new Dialog();

dialog.on('event', function() {
    console.log('Có một sự kiện vừa xảy ra');
});

dialog.sayHello();

