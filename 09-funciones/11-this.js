// Dentro de una objeto: this hace referencia al objeto
// En una funcion: this hace referencia al objeto window, global
// Si se usa new, se hace referencia al objeto que sera creado

// CASO 1
const usuario = {
  name: "Nicolas",
  login() {
    console.log(this);
  },
};
usuario.login();
usuario.apellido = "Perez";
usuario.logout = function logout() {
  console.log(this);
};

usuario.logout();

// CASO 2
function log() {
  this.variable = 3;
  console.log(this);
}

log();

// CASO 3
function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

// CUANDO SE USA LA PALABRA NEW
/*
 *Se crea un objeto literal
 *Se vincula este objeto a THIS
 *Se vincula el prototipo
 *Si no retorna nada, retorna THIS
 */
const l = new Log("Hola mundo");

console.log(l);
