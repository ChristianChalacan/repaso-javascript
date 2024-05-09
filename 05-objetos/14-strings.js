const saludo = "Hola Mundo!";
const despedida = new String("Chao Mundo!");

console.log(typeof saludo);
console.log(typeof(despedida));

console.log(saludo.length);
// Busca una lista de caracteres especificadas - si no encuentra el texto especificado devuelve un -1
console.log(saludo.indexOf("Mu"));
// Devuelve un true o un false dependiendo de si el string incluye el texto especificado 
console.log(saludo.includes(" Mundo"));
// El metodo replace solo remplaza el texto en tiempo de ejecucion pero no cambia el contenido de la variable
console.log(saludo.replace("Mundo", "Christian"), saludo);
// Para obtener la variable modificada se debe crear una nueva variable
let nuevoSaludo = saludo.replace("Mundo", "Christian");
console.log(nuevoSaludo);
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
// El metodo substring nos devuelve un recorte de la cadena original
// El metodo necesita dos parametros: el inicio y el final de la cadena y elo metodo no presenta el ultimo caracter referenciado
// Si solo se envia un parametro este es tomado como el inicio del recoprte y se despliega el resto del string
console.log(saludo.substring(5));
// Ejemplo con dos parametros
console.log(saludo.substring(0, 5));

// QUITAR ESPACIOS
const espacio = "      Hola      Mundo!      ";
// Quita los espacios del inicio y del final
console.log(espacio.trim());
// Quita los espacios del inicio
console.log(espacio.trimStart());
// Quita los espacios del final
console.log(espacio.trimEnd());
