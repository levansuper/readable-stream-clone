import * as fs from 'fs';
const ReadableStreamClone = require('../src/clone-readable-stream');

const highWaterMark = 15;
console.log('for best understanding you can uncomment line 10 in file ../src/clone-readable-stream.ts\n');

// for test purposes I'm restrict internal buffer threshold  to 3 byte
const readStream = fs.createReadStream('./test/text.txt', { highWaterMark });

const readClone1 = new ReadableStreamClone(readStream, { highWaterMark });
const readClone2 = new ReadableStreamClone(readStream, { highWaterMark });

const writeStream1 = fs.createWriteStream('./test/text1.txt');
const writeStream2 = fs.createWriteStream('./test/text2.txt');

readClone1.pipe(writeStream1);
readClone2.pipe(writeStream2);

console.log('File test.txt was copied - OK.\n');
