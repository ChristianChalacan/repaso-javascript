// Arrow function tradicional
const hola = () => {
  return "hola mundo";
};

// Arrow Function con return implicito
const saludo = () => "Saludo";

// Arrow Function con un solo parametro
const mensaje = (mensaje) => "El mensaje es: " + mensaje;

const resultado1 = hola();
const resultado2 = saludo();
const resultado3 = mensaje("Hola");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
