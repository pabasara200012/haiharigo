const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repoRemote = process.argv[2] || 'https://github.com/pabasara200012/haiharigo.git';
const outDir = path.join(__dirname, '..', 'out');
const publishDir = path.join(outDir, 'haiharigo');

if (!fs.existsSync(outDir)) {
  throw new Error('out directory not found. Run npm run build first.');
}

if (!fs.existsSync(publishDir)) {
  fs.mkdirSync(publishDir, { recursive: true });
}

const entries = fs.readdirSync(outDir, { withFileTypes: true });
for (const entry of entries) {
  if (entry.name === 'haiharigo') continue;
  const source = path.join(outDir, entry.name);
  const target = path.join(publishDir, entry.name);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
  fs.renameSync(source, target);
}

const noJekyll = path.join(publishDir, '.nojekyll');
fs.writeFileSync(noJekyll, '');

const opts = { stdio: 'inherit', cwd: publishDir };
execSync('git init', opts);
execSync('git checkout -B gh-pages', opts);
execSync('git add .', opts);
execSync('git commit -m "Deploy GitHub Pages"', opts);
execSync(`git remote add origin ${repoRemote}`, opts);
execSync('git push -f origin gh-pages', opts);
fs.rmSync(path.join(publishDir, '.git'), { recursive: true, force: true });
console.log('GitHub Pages deployed to gh-pages branch.');
