import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');
const htmlPath = path.join(publicDir, 'brochure.html');
const pdfPath = path.join(publicDir, 'tekloria-services-brochure.pdf');

const edgePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

let generated = false;

for (const browserPath of edgePaths) {
  if (fs.existsSync(browserPath)) {
    try {
      console.log(`Generating high-resolution brochure PDF using ${browserPath}...`);
      const cmd = `"${browserPath}" --headless=new --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;
      execSync(cmd, { stdio: 'pipe' });
      if (fs.existsSync(pdfPath)) {
        console.log('Successfully compiled brochure PDF via headless browser!');
        console.log('PDF Path:', pdfPath);
        console.log('File size (bytes):', fs.statSync(pdfPath).size);
        generated = true;
        break;
      }
    } catch (e) {
      console.warn('Browser print failed, trying next option...', e.message);
    }
  }
}

if (!generated) {
  console.log('Existing PDF preserved at:', pdfPath);
}
