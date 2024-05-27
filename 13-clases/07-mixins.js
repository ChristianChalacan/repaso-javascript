const Entidad = {
  save() {
    console.log("guardando de entidad");
  },
};
const Actualizar = {
  update() {
    console.log("actualizando entidad");
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
  save() {
    console.log("guardando desde user");
  }
}

const u = new User("chanchito");

const nuevoProto = Object.assign({}, Entidad, Actualizar);
// Podemos usar assign pero el formato de prototipos no quedara como cuando se hereda con extends
// por lo que usamos setPrototypeOf
Object.setPrototypeOf(User.prototype, nuevoProto);

u.save();
