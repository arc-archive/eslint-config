const path = require('path');
const fs = require('fs');
/**
 * This script coppies `.eslintignore` and `.eslintrc.js` to application current directory,
 * if such files aren't installed already.
 */

function copyTemplate(file) {
  const loc = path.join(__dirname, '..', 'templates', file);
  const dest = path.join(process.cwd(), file);
  let exists = false;
  try {
    if (fs.existsSync(dest)) {
      exists = true;
    }
  } catch (_) {}
  if (exists) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    fs.copyFile(loc, dest, (err) => {
      if (err) {
        console.warn(`The file ${file} from @advanced-rest-client/eslint-config wasn't coppied.`);
        console.warn(`Copy the file manually for linter to work with ARC standards.`);
        console.log(err);
      } else {
        console.log(`Created ${dest} file.`);
      }
      resolve();
    });
  });
}

copyTemplate('.eslintignore').then(() => copyTemplate('.eslintrc.js'));
