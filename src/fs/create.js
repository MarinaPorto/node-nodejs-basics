import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {

  fs.stat(filePath, (error, st) => {
    if (error) {
         fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) {
          throw err;
        } else {
        }
      });
    }
    else {
      console.log("FS operation failed");
    }
  });
};

await create();