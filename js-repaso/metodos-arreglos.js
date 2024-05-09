
const arr = [1,2,3,4,5,6]
// **************** FILTER ****************

// Filter toma todos los valores de un arreglo y devuelve los que den true a la condicion
// siempre nos devuelve un array con una longitud menor o igual al del aaray que se esta evaluando 
// el segundo parametro que resive la funcion filter es el indice de la iteracion
const r = arr.filter((el, indiceDeIteracion) =>  {
    console.log(indiceDeIteracion)
    return el > 2;
});
console.log(r);

// **************** MAP ****************

// Map toma todos los valores de un array y devuelve un array con la misma longitud del array original pero
// con los valores modificados por esta funcion

const mapped =arr.map((el) => el * 2);
console.log(mapped);
// Ejemplo en React
const mappedReact =arr.map((el) => `<h1>${el}</h1>`);
console.log(mappedReact);

const users = [
    {id: 1, name: 'Christian'},
    {id: 2, name: 'Orlando'},
    {id: 3, name: 'Andrea'},
    {id: 4, name: 'Roberto'},
];

const mappedUsers = users.map((user) => {
    return `
    <h1>Id: ${user.id} </h1>
    <h1>Nombre: ${user.name} </h1>
    `;
});
console.log(mappedUsers);

// **************** REDUCE ****************

// Toma todos los valores de una array y devuelve un nuevo valor que dependera de la funcion que le enviemos y el parametro de inicio
// Tambien puede elminar duplicados 
// La funcion reduce recibe cuatro parametros, el primero se encarga de guardar el resultado,
// el segundo parametro es el elmento de la iteracion,
// el tercero es el indice en el que estamos del arreglo 
// y el ultimo es el arreglo sobre el que estamos iterando
// Aparte de la funcion tambien pasamos como parametro de la funcion reduce EL NUMERO INICIAL DEL ACUMULADOR

// Forma con una funcion con return
const r1 = arr.reduce((acc, el) => {
    return acc + el;
}, 5);
// Forma corta para realizar la operacion
const r2 = arr.reduce((acc, el) => acc + el, 0)


console.log(r1)
console.log(r2)

// USO DE REDUCE CON OTRAS FUNCIONES
// En este ejemplo se ve como se pasa una funcion para obtener el numero mayor pero no se usa el valor inicial
// Si no se pasa el segundo parametro a la funcion reduce este toma el primer valor del array como valor de inicio del acumulador

const getMax = (a, b) => {
    console.log(a, b);
    return Math.max(a, b);
};
const r3 = arr.reduce(getMax);
// Usando una suma
const rNombres = users.reduce((acc, el) => acc + el.name + ' ', '');
// Usando templates strings
const rNombresTS = users.reduce((acc, el) => {
    return `${acc === '' ? '' : `${acc}, ` }${el.name}`;
} , '');
console.log(rNombres);
console.log(rNombresTS);

// Uso de reduce como funcion filter
// Al usar la funcion reduce asi, no se puede añadir un nuevo elemento al array con la funcion push, sino solo con la funcion concat
const indDesde = users.reduce((acc, el) => {
    return el.id < 2 ? acc : acc.concat(el);
}, []);

console.log(indDesde);