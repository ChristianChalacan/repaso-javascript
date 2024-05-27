function User() {
  this.name = "Hola mundo";
}

function Product() {
  this.name = "Producto";
}
// Creamos una entidad que heredará sus metodos a User y Producto
function Entidad() {}
// Creamos las funciones constructoras que seran heredadas
Entidad.prototype.save = function () {
  console.log("guardando...", this.name);
};
Entidad.prototype.validate = function () {
  console.log("validando...", this.name);
};

// Asignacion de prototipo de Entidad a User
// Si se usa este metodo de herencia la funcion constructora de User será la de Entidad
// y esto no esta bien
/* User.prototype = Entidad.prototype; //
// Asignamos el constructor de User a User para que no use el constructor de Entidad por heredar el prototipo
User.prototype.constructor = User;
const user = new User();
console.log(user);
user.save();
 */
// FORMA CORRECTA Y ANTIGUA DE HEREDAR DE UN PROTOTIPO SIN PERDER EL CONSTRUCTOR ORIGINAL
/* User.prototype = Object.create(Entidad.prototype);
User.prototype.constructor = User;

const user2 = new User();

console.log(user2);
user2.save();
 */
// Asigna un prototipo(Segundo parametro) a un prototipo principal(Primer parametro)
// con setPrototypeOf Heredamos los metodos de Entidad a User
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);
