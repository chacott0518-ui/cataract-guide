const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = 'public/images/노안백내장';

function processDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processDir(fullPath);
    } else if (file.name.endsWith('.webp')) {
      const tempPath = fullPath + '.tmp';
      sharp(fullPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(tempPath)
        .then(() => {
          fs.renameSync(tempPath, fullPath);
          console.log('완료:', fullPath);
        })
        .catch(err => console.error('에러:', fullPath, err));
    }
  });
}

processDir(targetDir);
