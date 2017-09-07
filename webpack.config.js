const path = require('path');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './public/dist/scripts')
    }
};