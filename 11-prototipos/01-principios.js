// Encapsulacion

const user = {
  nombre: "Hola",
  apellido: "Mundo",
  getNombreCompleto() {
    return [this.nombre, this.apellido].join(" ");
  },
};

console.log(user.getNombreCompleto());

// Abstraccion

const user1 = new user();
user.password = "password";
user.save();
