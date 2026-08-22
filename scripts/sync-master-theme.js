'use strict';

const fs = require('node:fs');
const path = require('node:path');

const sourcePath = process.argv[2];
if (!sourcePath) {
  throw new Error('Usage: node scripts/sync-master-theme.js /path/to/master/dist/*.min.css');
}

const source = fs.readFileSync(path.resolve(sourcePath), 'utf8');
const personalSettingsMarker = 'body{background-image:none}.p-profiles .profile-head[data-user-id=';
const personalSettingsIndex = source.lastIndexOf(personalSettingsMarker);
const immersiveCoverRule = '@media(min-width: 960px){body{background:var(--user-cover) center top/cover no-repeat fixed !important}#profiles_show .l-page{margin-top:352px;border-radius:8px 8px 0 0}.p-profiles .profile-head::before{display:none !important}}';

if (personalSettingsIndex < 0) {
  throw new Error('Personal settings marker was not found; refusing to publish an unverified build.');
}

const genericTheme = source.slice(0, personalSettingsIndex);
if (!genericTheme.includes(immersiveCoverRule)) {
  throw new Error('Immersive cover rule was not found; refusing to publish an unverified build.');
}

const theme = genericTheme.replace(immersiveCoverRule, '').trim() + '\n';
if (!theme.includes('--md-sys-color-primary') || !theme.includes('shiki-material3 v3.0.0')) {
  throw new Error('The source is not the expected Shiki Material 3.0.0 build.');
}
if (theme.includes('320608') || theme.includes(personalSettingsMarker)) {
  throw new Error('Personal settings remain in the generated theme.');
}
if (theme.includes('background:var(--user-cover) center top/cover no-repeat fixed')) {
  throw new Error('The generated theme still turns the profile cover into a page background.');
}

const outputDirectory = path.join(__dirname, '..', 'theme');
const outputPath = path.join(outputDirectory, 'main.css');
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputPath, theme);

const bundlePath = path.join(__dirname, '..', 'src', 'js', 'theme-bundle.js');
const bundle = "'use strict';\n\nwindow.SHIKI_THEME_CSS = " + JSON.stringify(theme) + ';\n';
fs.writeFileSync(bundlePath, bundle);

console.log('Wrote ' + outputPath + ' (' + Buffer.byteLength(theme) + ' bytes)');
console.log('Wrote ' + bundlePath);
