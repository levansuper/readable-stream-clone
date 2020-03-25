## Readable Stream Clone

npm install readable-stream-clone

with this utility you can pipe readable stream into multiple writable streams

### Node
```js
const fs = require("fs");
const ReadableStreamClone = require("readable-stream-clone");

const readStream = fs.createReadStream('text.txt');

const readStream1 = new ReadableStreamClone(readStream);
const readStream2 = new ReadableStreamClone(readStream);

const writeStream1 = fs.createWriteStream('sample1.txt');
const writeStream2 = fs.createWriteStream('sample2.txt');

readStream1.pipe(writeStream1)
readStream2.pipe(writeStream2)
```

### Typescript
```ts
import * as fs from 'fs';
import ReadableStreamClone from 'readable-stream-clone'

const readStream = fs.createReadStream('text.txt');

const readClone1 = new ReadableStreamClone(readStream);
const readClone2 = new ReadableStreamClone(readStream);

const writeStream1 = fs.createWriteStream("text1.txt");
const writeStream2 = fs.createWriteStream("text2.txt");

readClone1.pipe(writeStream1);
readClone2.pipe(writeStream2);
```