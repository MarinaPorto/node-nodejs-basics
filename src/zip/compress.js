
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const zipFile = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const inp = fs.createReadStream(filePath);
  const out = fs.createWriteStream(zipFile);
  const gzip = zlib.createGzip();
  inp.pipe(gzip).pipe(out);
};

await compress();