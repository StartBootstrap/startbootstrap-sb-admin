'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');
const sass = require('sass');
const packageJSON = require('../package.json');

const stylesPath = path.resolve(path.dirname(__filename), '../src/scss/styles.scss');
const destPath = path.resolve(path.dirname(__filename), '../dist/css/styles.css');

module.exports = function renderSCSS() {
    
    const result = sass.renderSync({
        // file: stylesPath,
        data: entryPoint,
        includePaths: [
            path.resolve(path.dirname(__filename), '../node_modules')
        ],
        // sourceMap: true,
        // outFile: 'styles.css'
      });

    const destPathDirname = path.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }
    fs.writeFileSync(destPath, result.css.toString());

};

const entryPoint = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/BlackrockDigital/${packageJSON.name}/blob/master/LICENSE)
*/
@import "${stylesPath}"
`