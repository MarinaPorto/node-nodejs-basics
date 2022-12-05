
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const zipFile = path.resolve(__dirname, 'files', 'archive.gz');


const decompress = async () => {
  const inp = fs.createReadStream(zipFile);
  const out = fs.createWriteStream(filePath);
  const gzip = zlib.createGzip();
  inp.pipe(zlib.createUnzip()).pipe(out);
};

await decompress();