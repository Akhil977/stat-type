// index.js
const fs = require('fs');
const fsPromises = fs.promises;

/**
 * Async version using callback
 */
function checkPathType(path, cb) {
  fs.stat(path, (err, stats) => {
    if (err) return cb(err);
    if (stats.isDirectory()) return cb(null, 'directory');
    if (stats.isFile()) return cb(null, 'file');
    return cb(null, 'other');
  });
}

/**
 * Sync version
 */
function checkPathTypeSync(path) {
  const stats = fs.statSync(path);
  if (stats.isDirectory()) return 'directory';
  if (stats.isFile()) return 'file';
  return 'other';
}

/**
 * Promise-based async version
 */
async function checkPathTypeAsync(path) {
  const stats = await fsPromises.stat(path);
  if (stats.isDirectory()) return 'directory';
  if (stats.isFile()) return 'file';
  return 'other';
}

module.exports = {
  checkPathType,
  checkPathTypeSync,
  checkPathTypeAsync,
};
