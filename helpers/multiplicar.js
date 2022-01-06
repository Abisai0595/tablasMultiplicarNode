const fs= require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, lista=false, hasta=10) =>{
        try{
            let salida ='';
            let consola = '';
        
            for(i=1;i<=hasta;i++){
                salida+=(`${base} x ${i} = ${base*i}\n`);
                consola+=(`${base} x ${i} = ${base*i}\n`);
            }
            if(lista)
            {
            console.log('================='.rainbow);
            console.log(`Tabla de multiplicar del ${base}`.rainbow);
            console.log(consola .blue .bgCyan);

            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            return(`tabla-${base}.txt creado`);
        }
        catch(err){
            throw err;
        }
    
}

module.exports={
    crearArchivo
}