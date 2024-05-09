let punto = {
    x: 10,
    y: 15,
}
// Asiganr un nuevo valor a un objeto existente

Object.assign(punto, { z: 20 });

// Clonacion de un objeto con la clase Object
// Le pasamos un objeto vacio como primer parametro y este tomara la informacion de los demas parametros a la derecha
// Por este motivo el objeto inicial (punto) no sufre ningun cambio
let clonePunto = Object.assign({}, punto, { o: 20 });

console.log(punto, clonePunto);
// Si tratamos de añadir una propiedad existente, se remplazara el valor original por el valor pasado en el metodo assign
Object.assign(clonePunto, { x: 5 });

console.log(clonePunto);

// La copia de un objeto solo se realiza con el objeto nuevo y el objeto que se quiere copiar
let copiaPunto = Object.assign({}, punto);

console.log(copiaPunto);

// Forma actual de copiar un objeto

let copiaPuntoActual = { ...punto };
console.log('Copia de forma actual', copiaPuntoActual);

// Forma mas antigua de copiar un objeto
let copiaAntigua = {};

for(let llave in punto){
    copiaAntigua[llave] = punto[llave];
}

console.log('Copia forma antigua', copiaAntigua);