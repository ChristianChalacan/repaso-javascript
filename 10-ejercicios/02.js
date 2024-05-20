const obj = {
  nombre: "Nicolas",
};

// Metodo modificando el objeto usuario
function extender(usuario) {
  usuario.login = function () {
    console.log("Iniciando sesion ", this.nombre);
  };
  usuario.logout = function () {
    console.log("Cerrando sesion ", this.nombre);
  };
  return usuario;
}

// Usando el metodo assign de Object fusionamos el objeto existente con uno nuevo
function extenderFusion(usuario) {
  const metodos = {
    login() {
      console.log("Iniciando sesion ", this.nombre);
    },
    logout() {
      console.log("cerrando sesion ", this.nombre);
    },
  };
  return Object.assign(usuario, metodos);
}

// Unimos el objeto existente con uno nuevo
function extenderSpread(usuario) {
  const metodos = {
    login() {
      console.log("Iniciando sesion ", this.nombre);
    },
    logout() {
      console.log("cerrando sesion ", this.nombre);
    },
  };
  return { ...usuario, ...metodos };
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();

const usuarioFusion = extenderFusion(obj);

console.log(usuarioFusion);
usuarioFusion.login();
usuarioFusion.logout();

const usuarioUnionSpread = extenderSpread(obj);

console.log(usuarioUnionSpread);
usuarioUnionSpread.login();
usuarioUnionSpread.logout();
