const concurrently = require('concurrently');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 dist -w --no-online',
        name: 'SB_WATCH', 
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