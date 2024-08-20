
const { error } = require('console');
const fs = require('fs');
var color = require('colors/safe');
const crearArchivo = async (base, listar, hasta ) =>{
   try{
        let salida="", consola = "";
        salida += `=============== \n Tabla del ${base}\n===============\n`;
        for(let i = 1; i <= hasta; i++){
            let resultado = base * i; 
            salida += `${base} x ${i} = ${resultado} \n`;
            consola += `${color.green(base)} ${color.red('x')} ${color.blue(i)} = ${color.yellow(resultado)} \n`;
        }
        if(listar){
            console.log(consola);
            await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            return `El archivo tabla-${base}.txt fue creado exitosamente`;
        }
       
        throw new Error("Nos se pudo enlistar ")
   }catch(err){
        throw err;
   }
}

module.exports = {
    crearArchivo:crearArchivo
}