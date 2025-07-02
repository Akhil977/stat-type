const fs = require('fs');
const path = require('path');

// Async version
function statType(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(path.resolve(filePath), (err, stats) => {
      if (err) return reject(err);

      if (stats.isFile()) return resolve('file');
      if (stats.isDirectory()) return resolve('directory');
      return resolve('other');
    });
  });
}

// Sync version
function statTypeSync(filePath) {
  const stats = fs.statSync(path.resolve(filePath));

  if (stats.isFile()) return 'file';
  if (stats.isDirectory()) return 'directory';
  return 'other';
}

// 👇 Make sure to export both correctly
module.exports = {
  statType,
  statTypeSync
};
