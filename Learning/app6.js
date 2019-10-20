var fs = require('fs');
var zlip = require('zlib');

var readable = fs.createReadStream(__dirname + '/text.txt', {
    encoding: 'utf8',
    highWaterMark: 16 * 1024 // 16kb
});

var writable = fs.createWriteStream(__dirname + '/testcopy.txt');
var compress = fs.createWriteStream(__dirname + '/test.txt.gz');

var gzip = zlip.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compress);