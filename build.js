const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const src = path.join(__dirname, 'index.html');
const destDir = path.join(__dirname, 'www');
const dest = path.join(destDir, 'index.html');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log('Successfully copied index.html to www/index.html');
} catch (err) {
  console.error('Error during build:', err);
  process.exit(1);
}

esbuild.buildSync({
  entryPoints: [path.join(__dirname, 'src', 'capacitor-exports.js')],
  outfile: path.join(destDir, 'capacitor-exports.js'),
  bundle: true,
  format: 'iife',
  minify: true,
  platform: 'browser',
  target: 'es2020',
});
console.log('Successfully bundled capacitor-exports.js');
