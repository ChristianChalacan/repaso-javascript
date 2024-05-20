let afuera = "Estoy afuera";

function alcance() {
  // Podemos acceder a variables que estan a fuera de las funciones, como variables globales
  // pero no podemos acceder a las funciones de esta funcion, fuera de la funcion
  // ya que estan delimitadas al uso interno
  afuera = "Estoy adentro";
  function saludo() {}
  var vieja = "ya no usar";
  let variable = "Hola Mundo let";
  const constante = "Hola mundo constante";
}

console.log(afuera);
alcance();
console.log(afuera);
