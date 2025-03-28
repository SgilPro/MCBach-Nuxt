import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [16, 32, 180, 192, 512];
const publicDir = path.join(__dirname, '../public');

// 確保 public 目錄存在
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 生成不同尺寸的圖標
sizes.forEach(size => {
  sharp('public/logo.svg')
    .resize(size, size)
    .png()
    .toFile(`public/icon-${size}x${size}.png`)
    .then(() => {
      console.log(`Generated ${size}x${size} icon`);
    })
    .catch(err => {
      console.error(`Error generating ${size}x${size} icon:`, err);
    });
});

// 生成 favicon.ico
sharp('public/logo.svg')
  .resize(32, 32)
  .toFile('public/favicon.png')
  .then(() => {
    console.log('Generated favicon');
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  }); 