import * as fs from 'fs';
const ReadableStreamClone = require('./cloneReadableStream');

const readStream = fs.createReadStream('text.txt', { highWaterMark: 3 });

// for test purposes I'm restrict internal buffer threshold  to 3 byte
const readClone1 = new ReadableStreamClone(readStream, { highWaterMark: 3 });
const readClone2 = new ReadableStreamClone(readStream, { highWaterMark: 3 });

const writeStream1 = fs.createWriteStream('text1.txt');
const writeStream2 = fs.createWriteStream('text2.txt');

readClone1.pipe(writeStream1);
readClone2.pipe(writeStream2);

console.log('File test.txt was copied - OK.');
