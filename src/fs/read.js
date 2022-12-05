import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  fs.stat(filePath, (error, st) => {
    if (error) {
      console.log("FS operation failed");
    } else {
      const readStream = fs.createReadStream(filePath, 'utf-8');
      readStream.on('data', (chunk) => {
        console.log(chunk);
      });
    }
  });
};

await read();