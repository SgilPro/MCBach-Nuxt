import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

sharp('public/images/og-image.svg')
  .jpeg({ quality: 90 })
  .toFile('public/images/og-image.jpg')
  .then(() => {
    console.log('Generated OG image');
  })
  .catch(err => {
    console.error('Error generating OG image:', err);
  }); 