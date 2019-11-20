'use strict';

const _ = require('lodash');
const chokidar = require('chokidar');
const path = require('path');
const renderAssets = require('./render-assets');
const renderPug = require('./render-pug');
const renderScripts = require('./render-scripts');
const renderSCSS = require('./render-scss');

const watcher = chokidar.watch('src', {
    persistent: true,
});

process.title = 'pug-watch';

let allFiles = {};

watcher.on('add', filePath => _processFile(filePath, 'add'));
watcher.on('change', filePath => _processFile(filePath, 'change'));

_handleSCSS();

function _processFile(filePath, watchEvent) {
    
    console.log(`### INFO: File event: ${watchEvent}: ${filePath}`);

    if (filePath.match(/\.pug$/)) {
        return _handlePug(filePath, watchEvent);
    }

    if (filePath.match(/\.scss$/)) {
        if (watchEvent === 'change') {
            return _handleSCSS(filePath, watchEvent);
        }
        return;
    }

    if (filePath.match(/src\/js\//)) {
        return renderScripts();
    }

    if (filePath.match(/src\/assets\//)) {
        return renderAssets();
    }

}

function _handlePug(filePath, watchEvent) {
    if (watchEvent === 'change') {
        if (filePath.match(/includes/) || filePath.match(/\/pug\/layouts\//)) {
            return _renderAllPug();
        }
        return renderPug(filePath);
    }
    if (!filePath.match(/includes/) && !filePath.match(/\/pug\/layouts\//)) {
        allFiles[filePath] = true;
        return renderPug(filePath);
    }
}

function _renderAllPug() {
    console.log('### INFO: Rendering All');
    _.each(allFiles, (value, filePath) => {
        renderPug(filePath);
    });
}

function _handleSCSS() {
    renderSCSS();
}