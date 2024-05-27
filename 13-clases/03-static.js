class Restaurants {
  static cantidad = 12;
  constructor(name) {
    this.name = name;
  }

  getTimetable() {
    console.log("Horario de atencion");
  }

  static getRestaurante(id) {
    return new Restaurants("BBQ");
  }
}

const r = Restaurants.getRestaurante(12);
console.log(r);
