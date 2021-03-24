import { Readable, ReadableOptions } from 'stream';

class ReadableStreamClone extends Readable {
  constructor(readableStream: Readable, options?: ReadableOptions) {
    super(options);

    readableStream.on('data', (chunk: Buffer) => {
      // you can uncomment this line and see how chunks in pushed into two clone stream
      // you will see that output will be repeated twice
      // console.log('chunk pushed ', chunk.toString());
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _read() {}
}

module.exports = ReadableStreamClone;
