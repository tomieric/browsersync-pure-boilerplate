/**
 * 发布
 * generate by browsersync-pure-boilerplate
 * by tommyshao <tomieric@gmail.com>
 */

var fscopy = require('./copyFile').copy

fscopy.copyFiles('./html', 'dist', '--all', [
    { reg: /"(js|css|images|fonts)\//g, text: '"src/$1/'},
    { reg: /(\/)(bower_components)\//g, text: 'src/$2/'}
])
fscopy.copyFiles('./src', 'dist/src')
fscopy.copyFiles('./bower_components', 'dist/src/bower_components')

console.log('bundle complete!')