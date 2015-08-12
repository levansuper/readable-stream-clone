npm install readable-stream-clone

```js
var fs = require("fs");
var ReadableStreamClone = require("readable-stream-clone");

var readStream = fs.createReadStream('text.txt');

var readStream1 = new ReadableStreamClone(readStream);
var readStream2 = new ReadableStreamClone(readStream);

var writeStream1 = fs.createWriteStream('sample1.txt');
var writeStream2 = fs.createWriteStream('sample2.txt');

readStream1.pipe(writeStream1)
readStream2.pipe(writeStream2)
```
