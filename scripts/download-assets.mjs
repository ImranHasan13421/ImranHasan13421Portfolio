import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

const downloads = [
  // Tech devicons
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/dart/dart-original.svg',
    dest: 'public/assets/icons/dart.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/flutter/flutter-original.svg',
    dest: 'public/assets/icons/flutter.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/github/github-original.svg',
    dest: 'public/assets/icons/github.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/figma/figma-original.svg',
    dest: 'public/assets/icons/figma.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/supabase/supabase-original.svg',
    dest: 'public/assets/icons/supabase.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/android/android-original.svg',
    dest: 'public/assets/icons/android.svg',
  },
  {
    url: 'https://raw.githubusercontent.com/devicons/devicon/v2.17.0/icons/androidstudio/androidstudio-original.svg',
    dest: 'public/assets/icons/androidstudio.svg',
  },
  // Project logos
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeWash_Logo.webp',
    dest: 'public/assets/projects/ezzewash/logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeAdmin.webp',
    dest: 'public/assets/projects/ezzewash/admin-logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeRider.webp',
    dest: 'public/assets/projects/ezzewash/rider-logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeCV.webp',
    dest: 'public/assets/projects/ezzecv/logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/ATLANTA.webp',
    dest: 'public/assets/projects/atlanta/logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeExpense.webp',
    dest: 'public/assets/projects/ezzeexpense/logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeMusic.webp',
    dest: 'public/assets/projects/ezzemusic/logo.webp',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ShEC-CSE/main/assets/branding/logo.png',
    dest: 'public/assets/projects/shec-cse/logo.png',
  },
  {
    url: 'https://raw.githubusercontent.com/ImranHasan13421/ImranHasan13421/main/EzzeWatchList.webp',
    dest: 'public/assets/projects/ezzewatchlist/logo.webp',
  },
];

async function run() {
  console.log('Downloading assets...');
  for (const item of downloads) {
    const destPath = path.join(root, item.dest);
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.warn(`Failed ${item.url}: status ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(destPath, buffer);
      console.log(`Saved: ${item.dest} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${item.url}:`, e.message);
    }
  }

  // Fetch EzzeWatchList README
  try {
    const res = await fetch('https://raw.githubusercontent.com/ImranHasan13421/EzzeWatchList/main/README.md');
    if (res.ok) {
      const text = await res.text();
      fs.writeFileSync(path.join(root, 'scripts/ezzewatchlist-readme.md'), text);
      console.log('Saved EzzeWatchList README.md');
    }
  } catch (e) {
    console.error('Error fetching README:', e.message);
  }
}

run();
