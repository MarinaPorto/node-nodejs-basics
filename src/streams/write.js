import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  process.stdin.on('data', function (data) {
    const writeStream = fs.createWriteStream(filePath, { 'flag': 'a' });
    writeStream.write(data);
  })

};

await write();