function Entidad(entidad) {
  this.id = Math.random().toString("20");
  this.entidad = entidad;
}

function User() {
  // Cambiamos el contexto de this
  Entidad.call(this, "User");
  this.attrs = {};
}

const u = new User();
console.log(u);
