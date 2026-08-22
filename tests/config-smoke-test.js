'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

global.tinycolor = require('../vendor/tinycolor/tinycolor.min.js');

const outputField = { value: '' };
global.document = {
  addEventListener: function () {},
  getElementById: function (id) {
    assert.equal(id, 'output_css');
    return outputField;
  },
};

function Vue(options) {
  Object.assign(this, options.data);

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
}

Vue.component = function () {};
Vue.nextTick = function (callback) { callback(); };
global.Vue = Vue;

require('../src/js/common.js');

const readConfig = (name) => JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'config', 'theme_' + name + '.json'), 'utf8')
);

const vm = global.builderVm;
vm.builderData.colors = readConfig('colors');
vm.builderData.imports = readConfig('imports');
vm.builderData.palettes = readConfig('palettes');
vm.builderData.sources = readConfig('sources');
assert.equal(vm.builderData.sources.theme_branch, 'master');
assert.equal(vm.builderData.sources.theme_version, '3.0.0');
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
  assert.match(css, /profile-update_1\.css/);
  assert.match(css, /profile-update_2\.css/);

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

console.log('Validated ' + vm.builderData.palettes.length + ' palettes and ' + requiredMaterial3Roles.length + ' Material 3 roles.');
