const obj = {
  nombre: "Nicolas",
};

function Extender() {
  this.login = () => {
    return `logueando usuario ${this.nombre}`;
  };
  this.logout = () => {
    return `cerrando sesion ${this.nombre}`;
  };
}

Extender.call(obj);

console.log(obj);
console.log(obj.login());
console.log(obj.logout());
