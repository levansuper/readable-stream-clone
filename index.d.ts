
declare module 'readable-stream-clone' { 
    import * as stream from "stream";
    export default class ReadableStreamClone extends stream.Readable {
        
        constructor(readableStream: stream.Readable, options? : any)

    }
}