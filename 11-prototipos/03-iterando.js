function User() {
  this.name = "hola mundo";
}

User.prototype.login = function () {
  console.log("Iniciando sesion ", this.name);
};

let user = new User();

// Forma antigua de verificar si un objeto tiene una propiedad en el objeto y no en el prototipo
for (let prop in user) {
  if (user.hasOwnProperty(prop)) console.log(prop);
}

// Forma antigua de verificar si un objeto tiene una propiedad en su prototipo
for (let prop in user) {
  if (!user.hasOwnProperty(prop)) console.log(prop);
}
// Forma actual de obtenerlas propiedades de un objeto y no de su prototipo prototipo
console.log(Object.keys(user));

user.login();
