// Forma literal
let obj = {};
// Formato con constructor
let obj1 = new Object();

// Formato literal que nos devuelve un tipo de dato string
let texto = "1+1";
// Formato con constructo que nos devuelve un tipo de dato Object
let texto1 = new String("1+1");
// Nos devuelve un string "1+1" y un objecto String{'1+1'}
console.log(texto, texto1)
// Si evaluamos el contenido nos despliega un 2 resultado de la suma en el string texto
// y nos devuelve el objeto String{'1+1'}
console.log(eval(texto), eval(texto1));
//Si queremos acceder al contenido del objecto String tenemos que usar el metodo valueOf()
console.log(texto1.valueOf());
// Usando el valueOf podemos usar la funcion eval para realizar la suma del string
console.log(eval(texto1.valueOf()));