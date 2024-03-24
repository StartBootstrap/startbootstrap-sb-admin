'use strict';
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const postcss = require('postcss');
const sass = require('sass');
const sh = require('shelljs');

const stylesPath = '../src/scss/styles.scss';
const destPath = upath.resolve(upath.dirname(__filename), '../dist/css/styles.css');
const destPathMin = upath.resolve(upath.dirname(__filename), '../dist/css/styles.min.css');
const loadPaths = upath.resolve(upath.dirname(__filename), '../node_modules');

module.exports = function renderSCSS(compress) {
    const sassStyle = compress === true ? 'compressed' : 'expanded';

    const results = sass.compileString(entryPoint, {
        style: sassStyle,
        loadPaths: [
            loadPaths
        ],
    });

    const destPathDirname = upath.dirname(destPath);

    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    postcss([ autoprefixer ]).process(results.css, {from: 'styles.css', to: 'styles.css'}).then(result => {
        result.warnings().forEach(warn => {
            console.warn(warn.toString())
        })
        fs.writeFileSync(compress === true ? destPathMin : destPath, result.css.toString(), () => true);
    });
};

const entryPoint = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
*/
@import "${stylesPath}"
`;