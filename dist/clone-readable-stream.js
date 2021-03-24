"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class ReadableStreamClone extends stream_1.Readable {
    constructor(readableStream, options) {
        super(options);
        readableStream.on('data', (chunk) => {
            console.log('chunk pushed ', chunk.toString());
            this.push(chunk);
        });
        readableStream.on('end', () => {
            this.push(null);
        });
        readableStream.on('error', (err) => {
            this.emit('error', err);
        });
        readableStream.on('error', (err) => {
            this.emit('error', err);
        });
    }
    _read() { }
}
module.exports = ReadableStreamClone;
