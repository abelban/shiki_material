import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as sass from 'sass';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (name) => readFile(path.join(root, name), 'utf8');
const files = JSON.parse(await read('config/theme_files.json'));
const source = [
  await read('config/build.sass'),
  ...await Promise.all(files.filter((file) => file.checked).map((file) => read(`assets/${file.url}`))),
].join('\n\n');

const check = process.argv.includes('--check');
for (const style of ['expanded', 'compressed']) {
  const { css } = sass.compileString(source, { syntax: 'indented', charset: false, style });
  // Ограничения загрузчика пользовательского CSS Shikimori.
  if (/@charset/i.test(css) || !/@media\b/.test(css) || /expression/i.test(css)) {
    throw new Error('CSS не соответствует ограничениям Shikimori');
  }
  const name = `dist/abelman-material3${style === 'compressed' ? '.min' : ''}.css`;
  const output = `${css}\n`;
  if (check) {
    if (await read(name) !== output) throw new Error(`${name} устарел: выполните npm run build`);
  } else {
    await mkdir(path.join(root, 'dist'), { recursive: true });
    await writeFile(path.join(root, name), output);
  }
  console.log(`${check ? 'Проверен' : 'Собран'} ${name}`);
}
