
const argv = require('yargs')
    .option('b',{
    alias:'base',
    type:'number', demandOption: true, 
    description: 'numero de la tabla a desglosar'})
    .option('l', {
        alias: 'lista',
        type:'boolean',
        default:false,
        description:'desglosa la tabla de la base'
    })
    .option('h', {
        alias: 'hasta',
        type:'number',
        default:10,
        description:'Limite hasta donde llegara la tabla'
    })
    .check((argv, options)=>{if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true;
}).argv;

module.exports=argv;