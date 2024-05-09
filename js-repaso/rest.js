// Rest operation nos permite usar todos los argumentos que recibe la funcion
// Si se quieren pasar mas variables, se puede hacer siempre y cuando el rest operation vaya al final 
// si se solicitan mas parametros como propiedad, se iran tomando en orden y los que sobren seran asignados al rest operation
const rest = (a, ...argumentos) =>  {
    console.log(a);
    console.log(argumentos);
}

rest(1,2,3);

const obj = {
    a: 1, b: 2, c: 3, d: 4
};

// **DESTRUCTURING**
// Obtenemos el valor que tenga la llave de a y lo ponemos en una nueva variable con el nombre de a
// Esto solo funciona si la variable nueva tiene el mismo nombre de la llave a la que queremos acceder
// Con el rest operation podemos capturar los valores restantes en un nuevo objeto
const { a, b, ...restObj } = obj;
// El valor es copiado como dato y no como referfencia 
obj.a = 5;
console.log(a, b, restObj);
// Cuando se restructura un array los datos se pasan todos en una misma variable
// en este caso ...r toma los valores de 4, 5, 6
const arr = [1,2,3,4,5,6]
const [v1, v2, v3, ...r] = arr
console.log(v1, v2, v3, ...r);

// Ejemplo de retorno de una funcion useState, retorna un valor y una funcion que actualiza el valor 
const useState = () => ['valor', () => {}];

console.log(useState());
const [valor, setValor] = useState()
console.log(valor, setValor)