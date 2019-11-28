const concurrently = require('concurrently');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgGreen.bold' },
    { 
        command: 'node_modules/.bin/browser-sync dist -w --no-online',
        name: 'BROWSER_SYNC', 
        prefixColor: 'bgBlue.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');    
}

function failure() {
    console.log('Failure');
}