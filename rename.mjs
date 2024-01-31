import fs from 'fs';
import path from 'path';

const oldPath = path.join(process.cwd(), 'out', 'index.txt');
const newPath = path.join(process.cwd(), 'next.txt');

fs.rename(oldPath, newPath, (err) => {
  if (err) throw err;
  console.log('File renamed and moved successfully');
});
