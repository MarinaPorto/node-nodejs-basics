import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Transform } from 'stream';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transform = async () => {
  const createTransformStream = () => {
    return new Transform({
      transform(chunk, enc, cb) {
        let str = chunk.toString();
        let reverseStr = [...str].reverse().join("");
        cb(null, reverseStr);
      }
    });
  };

  const res = createTransformStream();
  process.stdin.pipe(res).pipe(process.stdout)
};

await transform();