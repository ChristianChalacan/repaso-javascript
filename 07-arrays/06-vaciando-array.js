let arr = [1, 2];
// Vaciar un array dandole un valor vació, este forma solo se debe de usar cuando
// no se ha dado el valor del array a otro array, ya que es una variable por referencia
arr = [];
// Vaciar un array dandole una longitud de cero
arr.length = 0;
// Vaciar un array con metodo splice
arr.splice(0, arr.length);
