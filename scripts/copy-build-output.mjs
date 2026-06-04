/**
 * postbuild: 将 next build 输出的关键文件从 out/ 复制到项目根目录
 * CF Pages 从根目录部署，所以 sitemap.xml / robots.txt / 404.html 等必须在根目录
 * 
 * 用法: node scripts/copy-build-output.mjs
 * 或在 package.json 中: "build": "next build && node scripts/copy-build-output.mjs"
 */
import { cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outDir = resolve(root, 'out');

const files = ['sitemap.xml', 'robots.txt', '404.html', 'index.html', 'index.txt'];

let copied = 0;
for (const file of files) {
  const src = resolve(outDir, file);
  const dst = resolve(root, file);
  if (existsSync(src)) {
    cpSync(src, dst, { force: true });
    console.log(`  [OK] ${file}`);
    copied++;
  } else {
    console.log(`  [SKIP] ${file} (not found in out/)`);
  }
}

// 复制所有子目录（learn/, about/, planner/, resources/ 等）
const subdirs = ['learn', 'about', 'contact', 'planner', 'resources', 'faq', '404', '_next', 'fonts'];
for (const dir of subdirs) {
  const src = resolve(outDir, dir);
  const dst = resolve(root, dir);
  if (existsSync(src)) {
    cpSync(src, dst, { force: true, recursive: true });
    console.log(`  [DIR] ${dir}/`);
  }
}

console.log(`\nDone: ${copied} files copied from out/ to root`);
