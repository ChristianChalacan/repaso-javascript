class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {}
}

class User extends Entidad {
  constructor(name) {
    // Siempre debemos llamar al metodo constructor padre
    super(1);
    this.name = name;
  }
}

const u = new User("Chanchito");

console.log(u);
