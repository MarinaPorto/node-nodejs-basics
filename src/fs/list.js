import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesPath = path.resolve(__dirname, 'files');

const list = async () => {

  try {
    const files = await fs.promises.readdir(filesPath, { withFileTypes: true });
    let filesList = []
    for (const file of files) {
      filesList.push(file.name)
    }
    console.log(filesList);
  }
  catch (error) {
    console.error('FS operation failed');
  }
};

await list();
