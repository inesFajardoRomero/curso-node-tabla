const argv = require('yargs')
.option('b',{
    alias:"base",
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
}).option('l',{
    alias:"listar",
    type:'boolean',
    demandOption:false,
    describe:'Muestra la tabla en la consola'
}).option('h',{
    alias:"hasta",
    type:'number',
    demandOption:true,
    describe:'Es el muultiplicador de la tabla'})
.check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("Debe ingresar un numero")
    }        
    return true;
})
.argv;

module.exports = argv;