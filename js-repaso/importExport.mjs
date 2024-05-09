const chanchosFelices = ['chancho1', 'chancho2', 'chancho3'];
// Exportando una constante
export const chanchosTristes = ['chanchoTriste1', 'chanchoTriste2', 'chanchoTriste3'];

const otrosChanchos = [];

// Antigua forma de exportar 
/* module.exports = {
    chanchosFelices, chanchosTristes
}; */

//Si no se quiere exportar en el lugar de la declaracion de la constante, se puede poner exportar las variables en un objeto literal


const fn1  = () => {
    console.log("Mensaje de FatArrowFunction");
}
function fn2() {
    console.log("Soy la funcion normal");
}

export {  otrosChanchos, fn1, fn2 } 
export default chanchosFelices