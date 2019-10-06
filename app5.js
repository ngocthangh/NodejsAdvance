// var buffer = new Buffer.alloc(9,'xin chào');
// console.log(buffer.toString());

// buffer.write('hoa');
// console.log(buffer.toString());


// var buffer = new ArrayBuffer(8);
// var view = new Int32Array(buffer)

// view[0] = 5;
// view[1] = 10;
// view[2] = 15;

// console.log(view)


var fs = require('fs');
var content = fs.readFile(__dirname + '/text.txt', 'utf8', (err, data) => {
    console.log(data);
})