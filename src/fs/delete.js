import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileForDelete = path.resolve(__dirname, 'files', 'fileToRemove.txt');




const remove = async () => {
  // Write your code here 

  fs.unlink(fileForDelete, (err) => {
    if (err) {
      console.log("FS operation failed")
      return
    }
  })
};

await remove();