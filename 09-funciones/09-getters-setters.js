const usuario = {
  nombre: "Chanchito",
  apellido: "feliz",
  // Forma sencilla de crear una funcion que se usa como parametro del objeto
  nombreCompleto() {
    return `${usuario.nombre} ${usuario.apellido}`;
  },
};

console.log(usuario.nombreCompleto());

const usuarioGetSet = {
  nombre: "Chanchito",
  apellido: "feliz",
  // Forma sencilla de crear una funcion que se usa como parametro del objeto
  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
  set nombreCompleto(valor) {
    const [nombre, apellido] = valor.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  },
};

usuarioGetSet.nombreCompleto = "Pedro Perez";
console.log(usuarioGetSet.nombreCompleto);
