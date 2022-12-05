import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const newfileName = path.resolve(__dirname, 'files', 'properFilename.md');


const rename = async () => {
  fs.stat(fileName, (error, st) => {
    if (error) {
      console.log("FS operation failed");
    }
    else {
      checkPath(newfileName)
    }
  });

  async function checkPath(newfileName) {
    fs.stat(newfileName, (error, st) => {
      if (error) {
        fs.rename(fileName, newfileName, function (err) {
          if (err) console.log('ERROR: ' + err);
        });
      }
      else {
        console.log("FS operation failed");
      }
    });
  }
}

await rename();