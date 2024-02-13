import { Readable } from "stream";
import fs from "fs-extra";

import ReadableStreamClone, { promisifyWriteStreams } from './readable-stream-clone';

const path = "tmp-folder";
const fileName1 = path + `/text1.txt`
const fileName2 = path + `/text2.txt`


describe("readable-stream-clone", () => {
    beforeEach(async () => {
       await fs.rm(path, { recursive: true, force: true })
       await fs.mkdir(path);
    })

    afterEach(async () => {
        await fs.rm(path, { recursive: true, force: true })
    })

    it("should pipe readable into writable stream", async () => {
        const testStr = "testStr";
        const buffer = Buffer.from(testStr, 'utf8');

        const readStream = Readable.from(buffer);
        const readClone1 = new ReadableStreamClone(readStream);
        const readClone2 = new ReadableStreamClone(readStream);
         
        const writeStream1 = fs.createWriteStream(fileName1);
        const writeStream2 = fs.createWriteStream(fileName2);
         
        readClone1.pipe(writeStream1);
        readClone2.pipe(writeStream2);


        await promisifyWriteStreams([writeStream1, writeStream2]);

        
        const result1 = fs.readFileSync(fileName1, 'utf8');
        const result2 = fs.readFileSync(fileName2, 'utf8');


        expect(result1).toEqual(testStr);
        expect(result2).toEqual(testStr);
    });
    
  });