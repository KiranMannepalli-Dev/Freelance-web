import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const htmlPath = path.join(publicDir, 'og-card.html');
const outPngPath = path.join(publicDir, 'og-image.png');

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

let generated = false;

for (const browserPath of edgePaths) {
  if (fs.existsSync(browserPath)) {
    try {
      console.log(`Generating 1200x630 OG social preview image using ${browserPath}...`);
      const cmd = `"${browserPath}" --headless=new --disable-gpu --window-size=1200,630 --screenshot="${outPngPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;
      execSync(cmd, { stdio: 'pipe' });
      if (fs.existsSync(outPngPath)) {
        console.log('Successfully generated OG preview PNG image!');
        console.log('PNG Path:', outPngPath);
        console.log('File size (bytes):', fs.statSync(outPngPath).size);
        generated = true;
        break;
      }
    } catch (e) {
      console.warn('Browser screenshot failed, trying next option...', e.message);
    }
  }
}

if (!generated) {
  console.log('Browser not available, skipped generating og-image.png');
}

