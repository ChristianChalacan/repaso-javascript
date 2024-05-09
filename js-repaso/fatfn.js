// Las funciones en javascript sirven como clase, pero solo las funciones que se creen con la palabra function
// Desde ETMAScript6 tenemos las clases que sirven como azucar sintactica para el uso de POO con javascript
function Fn() {
    this.prop = 'Hola mundo';
}
// Para usar una funcion como clase se debe usar la palabra new para crear un nuevo contexto y asi trabajar como con una clase
let saludo = new Fn();
// Nos devuelve el contexto de THIS
console.log(saludo);
// Nos devuelve la propiedad de la funcion
console.log(saludo.prop);

// FAT ARROW FUNCTION
// No posee contexto de this, si se consulta el valor de THIs en esta funcion nos devuelve el contexto previo a la funcion
let fatFn = () => {
    console.log('Funcion sin contexto de THIS');
}
// Para las fat arrow functios no se puede usar la palabra new, ya que no posee contexto.
let fatArrowFn = fatFn();
// Ademas las fat arrow function tiene un return implicito
// Si no se usan las llaves de la funcion nos devuelve el valor del calculo de la funcion

let fnR = () => 2+2;
console.log(fnR());