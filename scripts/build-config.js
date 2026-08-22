'use strict';

const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const configNames = ['colors', 'imports', 'helpers', 'palettes', 'sources'];
const config = {};

configNames.forEach((name) => {
  const filename = path.join(root, 'config', 'theme_' + name + '.json');
  config[name] = JSON.parse(fs.readFileSync(filename, 'utf8'));
});

const output = [
  "'use strict';",
  '',
  'window.SHIKI_THEME_CONFIG = ' + JSON.stringify(config, null, 2) + ';',
  '',
].join('\n');

const outputPath = path.join(root, 'src', 'js', 'theme-config.js');
fs.writeFileSync(outputPath, output);
console.log('Wrote ' + outputPath);
