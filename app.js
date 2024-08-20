const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
var colors = require('colors');

crearArchivo(argv.base, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.error(colors.red(err)));



