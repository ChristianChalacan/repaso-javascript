// Si colocamos una funcion normal en el foreach no podremos usar los demas atributos del objeto
// ya que cada funcion maneja un contexto de THIS diferente
// Para poder acceder a los atributos de un objeto, dentro de una funcion,
// debemos de usar una fat arrow function

const usuario = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "Nueva Zelanda"],
  mostrarCiudadania() {
    this.ciudadanias.forEach((el) => console.log(this.nombre, el));
    this.ciudadanias.map((el) => console.log(el));
  },
};

usuario.mostrarCiudadania();
