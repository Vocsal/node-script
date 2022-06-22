import fs from 'fs';
import { spawn } from 'child_process';

export function fileIsExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

export function runCommand(cmd, args, callback) {
  const child = spawn(cmd, args);
  let resp = "";

  child.stdout.on('data', (buffer) => {
    const str = buffer.toString();
    console.log(str)
    resp += str;
  });
  child.stdout.on('end', () => {
    (typeof callback === 'function') && callback(resp);
  });
}

export function mkdir(dirPath, callback) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    typeof callback === 'function' && callback(err);
  })
}

export function writeFile(filePath, contents, callback) {
  const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
  mkdir(dirPath, (err) => {
    if (err) {
      console.error(err);
      typeof callback === 'function' && callback(err);
    } else {
      fs.writeFile(filePath, contents, err => {
        if (err) {
          console.error(err);
        }
        typeof callback === 'function' && callback(err);
      })
    }
  })
}