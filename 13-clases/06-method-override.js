class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {
    console.log("save en entidad");
  }
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }

  save() {
    // llamamos al constructor padre con super y ejecutamos save de Entidad
    super.save();
    console.log("save en user");
  }
}

const u = new User("Chanchito");

console.log(u);
