import crypto from 'crypto';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const readStream = fs.createReadStream(filePath, 'utf-8');
  readStream.on('data', (chunk) => {
    const hash = crypto.createHash('sha256').update(chunk).digest('hex');
    console.log(hash)
  });
};

await calculateHash();