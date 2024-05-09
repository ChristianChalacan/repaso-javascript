//  Con la copia de spread se genera una copia de los datos y no de la referencia, 
// por lo que se pueden hacer cambios individuales de los arreglos
const fn = (a, b, c) => console.log(a + b + c);

const arrIdeal = [1,2,3]
const arrIncompleto = [1,2]
const arrExtras = [1,2,3,4]

// Toma los datos del arreglo y los pasa a la funcion de forma ordenada 
console.log("Array ideal");
fn(...arrIdeal);
// Si no tiene los datos suficientes en el array, tomas los datos restantes como NaN
console.log("Array incompleto");
fn(...arrIncompleto);
// Si tiene datos adicionales solo toma los primeros de forma ordenada
console.log("Array extras");
fn(...arrExtras);

const arr1 = [5,6]
// Forma antigua de concatenar arrays
const arrConcat = arrExtras.concat(arr1);
console.log("Union de arrays con Concat", arrConcat);
const arrUnion = [...arrExtras, ...arr1];
console.log("Union de arrays con spread", arrConcat);
const arrNuevos = [...arrExtras, 5,6];
console.log("Union de array con nuevos datos con spread", arrNuevos);

// SPREAD APLICADO A OBJETOS
const obj1 = { 
    a: 1,
    b: 2,
}
const obj2 ={
    b:5,
    c:'Chanchito feliz'
}
// La copia de objetos se realiza de izquierda a derecha y si existen llaves duplicadas
// Javascript tomara las que esten mas a la derecha,
// en este caso la llave b es usada en los dos objetos pero se usara la de obj2 por ser la que se enceuntra mas a la derecha en la copia del objeto
const obj3 = {...obj1, ...obj2}

console.log(obj3);
// Al igual que en los arrays, se pueden agregar datos nuevos a las copias de los objetos
const obj4 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'Perro',
    }
};

console.log(obj4);