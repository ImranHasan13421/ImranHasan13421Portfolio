const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projects = ['ezzewash', 'atlanta', 'ezzemusic', 'ezzecv', 'ezzeexpense', 'shec-cse'];

async function run() {
  for (const slug of projects) {
    const svgPath = path.join(__dirname, '..', 'public', 'assets', 'projects', slug, 'overview.svg');
    const pngPath = path.join(__dirname, '..', 'public', 'assets', 'projects', slug, 'overview.png');
    if (fs.existsSync(svgPath)) {
      await sharp(svgPath).resize(960, 540).png().toFile(pngPath);
      console.log(`Generated: ${pngPath}`);
    }
  }
  console.log('All project overview PNGs generated successfully.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
