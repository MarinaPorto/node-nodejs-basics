import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {

  const newFolderPath = path.resolve(__dirname, 'files-copy');
  const folderPath = path.resolve(__dirname, 'files');

  fs.stat(folderPath, (error, st) => {
    if (error) {
      console.log("FS operation failed");
    } else {
      checkPath(newFolderPath);
    }
  });

  async function checkPath(newFolderPath) {
    fs.stat(newFolderPath, (error, st) => {
      if (error) {
        createNewFolder(newFolderPath);
        copyFiles(folderPath);
      }
      else {
        console.log("FS operation failed");
      }
    });
  }


  function createNewFolder() {
    fs.promises.mkdir(newFolderPath, { recursive: true }, (err) => {
      if (err) {
        console.log(err)
      }
    });
  }

  async function copyFiles(folderPath) {
    const files = await fs.promises.readdir(folderPath);
    for (const file of files) {
      fs.promises.copyFile(folderPath + '\\' + file, newFolderPath + '\\' + file);
    }
  }
};

copy();




