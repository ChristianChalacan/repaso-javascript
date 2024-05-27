function getProto(entity) {
  return Object.getPrototypeOf(entity);
}
function Entidad() {}

Entidad.prototype.save = function () {
  console.log("guardando desde entidad...");
};

function User() {}
// Pasamos el prototipo de Entidad a User
Object.setPrototypeOf(User.prototype, Entidad.prototype);
// Creamos un método que tiene el mismo nombre que el metodo de Entidad
// por lo que se usa el metodo de User y no el de Entidad
User.prototype.save = function () {
  console.log("guardando desde user...");
};

const u = new User();
// Obtenemos el metodo de Entidad
console.log(getProto(getProto(u)).save());
