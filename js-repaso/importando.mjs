// Antigua forma de importar un archivo
/* const chanchosF = require('./importExport');
const chanchosT = require('./importExport');

 */
//console.log(chanchosF);

// Nueva forma de importar metodos, funciones, variables, etc. de un archivo

// Si importa el valor por defecto, no es necesario usar el mismo nombre de la variable original
// Si se quiere importar una constante se debe colocar el nombre entre unas llaves
import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2 } from './importExport.mjs';


console.log(chanchos);
console.log(chanchosTristes);
console.log(otrosChanchos);
fn1();
fn2();