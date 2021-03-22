import { Readable, ReadableOptions } from 'stream';

class ReadableStreamClone extends Readable {
  constructor(readableStream: Readable, options?: ReadableOptions) {
    super(options);

    readableStream.on('data', (chunk) => {
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
