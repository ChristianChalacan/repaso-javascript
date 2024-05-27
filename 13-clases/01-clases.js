function User(name) {
  this.name = name;
  this.instancia = function () {};
}

User.prototype.login = function () {
  console.log("Hola Mundo!");
};

// Las clases no se anclan al inicio(hoisting)
class UserClass {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  }
  // Al ser una propiedad se pasa directo a la instancia
  activo = true;
  // Si se asigna una funcion anonima a una propiedad, esta aparecera directo en la instancia
  // y no aparecera en el prototipo como login
  logout = () => {
    console.log("logout");
  };

  // Al ser un metodo se agrega al prototipo
  login() {
    console.log("hola mundo");
  }
}
/* UserClass.prototype.login = function () {
  console.log("Hola Mundo!");
}; */

const u = new User("Usuario funciones");
const uC = new UserClass("Usuario Clase");

console.log(u);
console.log(uC);
