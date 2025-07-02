const fs = require('fs');
const fsp = require('fs/promises');

async function statType(path) {
  try {
    const stats = await fsp.lstat(path);
    return getType(stats);
  } catch (err) {
    if (err.code === 'ENOENT') return 'not found';
    throw err;
  }
}

function statTypeSync(path) {
  try {
    const stats = fs.lstatSync(path);
    return getType(stats);
  } catch (err) {
    if (err.code === 'ENOENT') return 'not found';
    throw err;
  }
}

function getType(stats) {
  if (stats.isFile()) return 'file';
  if (stats.isDirectory()) return 'directory';
  if (stats.isSymbolicLink()) return 'symlink';
  if (stats.isSocket()) return 'socket';
  if (stats.isFIFO()) return 'FIFO';
  if (stats.isBlockDevice()) return 'blockDevice';
  if (stats.isCharacterDevice()) return 'characterDevice';
  return 'unknown';
}

module.exports = statType;
module.exports.sync = statTypeSync;
