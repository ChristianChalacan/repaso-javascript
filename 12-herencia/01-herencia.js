function User() {
  this.name = "Hola mundo";
}

function Product() {
  this.name = "Producto";
}
// Creamos una entidad que heredará sus metodos a User y Producto
function Entidad() {
  prototype.save = function () {
    console.log("guardando...", this.name);
  };
}
// Creamos las funciones constructoras que seran heredadas
Entidad.prototype.validate = function () {
  console.log("validando...", this.name);
};

// Asignacion de prototipo de Entidad a User
User.prototype = Entidad.prototype; //2222222222266666

const user = new User();

user.save();
