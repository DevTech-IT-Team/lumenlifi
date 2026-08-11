import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeLogo() {
  const inputPath = path.join(__dirname, 'public', 'brand', 'logo.png');
  const outputPathWebP = path.join(__dirname, 'public', 'brand', 'logo.webp');
  
  try {
    await sharp(inputPath)
      .webp({ quality: 60, effort: 6 })
      .toFile(outputPathWebP);
    console.log('Successfully optimized logo to WebP');
  } catch (err) {
    console.error('Error optimizing logo:', err);
  }
}

optimizeLogo();
