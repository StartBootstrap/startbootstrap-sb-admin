'use strict';
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const sh = require('shelljs');

module.exports = function renderPug(filePath) {
    const destPath = filePath.replace(/src\/pug\/\pages\//, 'dist/').replace(/\.pug$/, '.html');
    console.log(`### INFO: Rendering ${filePath} to ${destPath}`);
    const html = pug.renderFile(filePath, {
        doctype: 'html',
        filename: filePath,
        pretty: true,
    });

    const destPathDirname = path.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }
    fs.writeFileSync(destPath, html);
};