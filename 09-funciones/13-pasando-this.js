function saludar(...rest) {
  console.log(this, rest);
}

saludar();

// El primer parametro que enviamos es el contexto de this y luego los argumentos de la funcion
saludar.call({ propiedad: "hola mundo" }, 1, 2, 3);
// Apply hace lo mismo que call pero los argumentos de la funcion deben de ser enviados en un array
saludar.apply({ propiedad: "hola mundo" }, [1, 2, 3]);
// Con bind solo le pasamos el contexto de this y nos retorna una nueva funcion
let nuevoSaludo = saludar.bind({ propiedad: "hola mundo" });
nuevoSaludo(1, 5);

// EJEMPLO con un objeto
const usuario = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "Nueva Zelanda"],
  mostrarCiudadania() {
    this.ciudadanias.forEach(
      function (el) {
        console.log(this.nombre, el);
      }.bind(this)
    );
    //this.ciudadanias.map((el) => console.log(el));
  },
};

const usuarioSelf = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "Nueva Zelanda"],
  mostrarCiudadania() {
    // Creamos una variable que luego sea usada para remplazar el contexto de una funcion interna
    let self = this;
    this.ciudadanias.forEach(function (el) {
      console.log(self.nombre, el);
    });
    //this.ciudadanias.map((el) => console.log(el));
  },
};

const usuarioThisArgumento = {
  nombre: "Nicolas",
  ciudadanias: ["Chile", "Colombia", "Nueva Zelanda"],
  mostrarCiudadania() {
    // El metodo foreach nos permite pasar el contexto como ultimo parametro
    this.ciudadanias.forEach(function (el) {
      console.log(this.nombre, el);
    }, this);
    //this.ciudadanias.map((el) => console.log(el));
  },
};

/* usuario.mostrarCiudadania();
usuarioSelf.mostrarCiudadania(); */
usuarioThisArgumento.mostrarCiudadania();
