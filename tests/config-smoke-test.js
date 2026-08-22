'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const nodeVm = require('node:vm');

global.tinycolor = require('../vendor/tinycolor/tinycolor.min.js');

const readConfig = (name) => JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'config', 'theme_' + name + '.json'), 'utf8')
);

const embeddedSandbox = { window: {} };
const embeddedConfigSource = fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'theme-config.js'), 'utf8');
nodeVm.runInNewContext(embeddedConfigSource, embeddedSandbox);
const embeddedThemeSource = fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'theme-bundle.js'), 'utf8');
nodeVm.runInNewContext(embeddedThemeSource, embeddedSandbox);
global.window = embeddedSandbox.window;

const localValues = new Map();
global.localStorage = {
  getItem: (key) => localValues.has(key) ? localValues.get(key) : null,
  setItem: (key, value) => localValues.set(key, String(value)),
};

const outputField = { value: '' };
const builderStylesheet = {
  cssRules: [],
  deleteRule: function (index) { this.cssRules.splice(index, 1); },
  insertRule: function (rule, index) { this.cssRules.splice(index, 0, rule); },
};
global.document = {
  addEventListener: function () {},
  createElement: function () { return { sheet: builderStylesheet }; },
  getElementById: function (id) {
    assert.equal(id, 'output_css');
    return outputField;
  },
  head: { appendChild: function () {} },
  queryCommandSupported: function () { return false; },
};

const nextTickCallbacks = [];
function Vue(options) {
  Object.assign(this, options.data);
  this.$set = function (object, key, value) { object[key] = value; };

  Object.keys(options.methods).forEach((name) => {
    this[name] = options.methods[name].bind(this);
  });

  Object.keys(options.computed).forEach((name) => {
    let definition = options.computed[name];
    let getter = typeof definition === 'function' ? definition : definition.get;
    let setter = typeof definition === 'function' ? undefined : definition.set;

    Object.defineProperty(this, name, {
      configurable: true,
      get: getter.bind(this),
      set: setter ? setter.bind(this) : undefined,
    });
  });

  global.builderVm = this;
  global.builderMounted = options.mounted.bind(this);
}

Vue.component = function () {};
Vue.nextTick = function (callback) { nextTickCallbacks.push(callback); };
global.Vue = Vue;

require('../src/js/common.js');
global.builderMounted();
while (nextTickCallbacks.length) nextTickCallbacks.shift()();

['colors', 'imports', 'helpers', 'palettes', 'sources'].forEach((name) => {
  assert.deepEqual(
    JSON.parse(JSON.stringify(embeddedSandbox.window.SHIKI_THEME_CONFIG[name])),
    readConfig(name)
  );
});

const vm = global.builderVm;
assert.equal(vm.status.isFileLoading, false);
assert.equal(vm.currentPalette.id, 'light');
assert.ok(outputField.value.length > 320000);
assert.match(outputField.value, /shiki-material3 v3\.0\.0/);
assert.doesNotMatch(outputField.value, /@import url\("\.\/theme\/main\.css"\);/);
assert.doesNotMatch(outputField.value, /320608/);
vm.builderData.colors = readConfig('colors');
vm.builderData.imports = readConfig('imports');
vm.builderData.palettes = readConfig('palettes');
vm.builderData.sources = readConfig('sources');
assert.equal(vm.builderData.sources.theme_branch, 'master');
assert.equal(vm.builderData.sources.theme_version, '3.0.0');
assert.equal(vm.builderData.sources.imports, './theme/');
assert.equal(vm.builderData.imports.length, 1);
assert.equal(vm.builderData.imports[0].url, 'main.css');
vm.user.selected_imports = vm.builderData.imports
  .filter((file) => file.checked)
  .map((file) => file.url);

const requiredMaterial3Roles = [
  'primary',
  'on-primary',
  'primary-container',
  'on-primary-container',
  'secondary',
  'on-secondary',
  'secondary-container',
  'on-secondary-container',
  'tertiary',
  'on-tertiary',
  'tertiary-container',
  'on-tertiary-container',
  'error',
  'on-error',
  'error-container',
  'on-error-container',
  'background',
  'on-background',
  'surface',
  'on-surface',
  'surface-variant',
  'on-surface-variant',
  'surface-container-lowest',
  'surface-container-low',
  'surface-container',
  'surface-container-high',
  'surface-container-highest',
  'inverse-surface',
  'inverse-on-surface',
  'inverse-primary',
  'outline',
  'outline-variant',
  'scrim',
  'shadow',
];

vm.builderData.palettes.forEach((palette, index) => {
  Object.assign(vm.scheme, palette.palette);
  vm.currentHelpers = palette.helpers || vm.defaultHelpers();
  vm.currentPalette = {
    id: palette.value,
    index: index,
    locked: true,
  };

  vm.createTheme();
  const css = outputField.value;

  assert.match(css, /@media\{:root \{/);
  assert.doesNotMatch(css, /undefined/);
  assert.match(css, /shiki-material3 v3\.0\.0/);
  assert.doesNotMatch(css, /@import url\("\.\/theme\/main\.css"\);/);

  requiredMaterial3Roles.forEach((role) => {
    assert.match(css, new RegExp('--md-sys-color-' + role + ':\\s*[^;]+;'));
  });

  if (palette.value === 'light') {
    assert.match(css, /--md-sys-color-primary:\s*#65558f;/);
    assert.match(css, /--md-sys-color-on-primary:\s*#ffffff;/);
    assert.match(css, /--md-sys-color-secondary:\s*#625b71;/);
    assert.match(css, /--md-sys-color-on-secondary:\s*#ffffff;/);
    assert.match(css, /--md-sys-color-background:\s*#fffbfe;/);
    assert.match(css, /--color-link:\s*#65558f;/);
    assert.match(css, /--color-link-hover:\s*#4f378b;/);
    assert.match(css, /--color-link-active:\s*#7d5260;/);
    assert.match(css, /--color-menu-background:\s*#4f378b;/);
    assert.match(css, /--color-menu-text-primary:\s*#f8f7fa;/);
    assert.match(css, /--color-menu-text-disabled:\s*#a093c0;/);
    assert.match(css, /--color-menu-icon:\s*#cfc9df;/);
    assert.match(css, /--color-menu-background-hover:\s*#5d4694;/);
    assert.match(css, /--color-menu-background-active:\s*#634e98;/);
    assert.match(css, /--color-menu-search:\s*#634e98;/);
  }
});

const themeCss = fs.readFileSync(path.join(__dirname, '..', 'theme', 'main.css'), 'utf8');
assert.ok(Buffer.byteLength(themeCss) > 250000);
assert.match(themeCss, /shiki-material3 v3\.0\.0/);
assert.match(themeCss, /--md-sys-color-primary/);
assert.doesNotMatch(themeCss, /320608/);
assert.doesNotMatch(themeCss, /body\{background-image:none\}\.p-profiles \.profile-head\[data-user-id=/);
assert.equal(embeddedSandbox.window.SHIKI_THEME_CSS, themeCss);

console.log('Validated ' + vm.builderData.palettes.length + ' palettes and ' + requiredMaterial3Roles.length + ' Material 3 roles.');
