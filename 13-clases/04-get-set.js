class Restaurants {
  #timetable;
  constructor(name) {
    this.name = name;
  }
  get timetable() {
    return this.#timetable;
  }
  set timetable(value) {
    if (Date.parse(value)) {
      this.#timetable = value;
    } else {
      throw new Error("Fecha Invalida");
    }
  }
}

const r = new Restaurants("BBQ");
console.log(r);
r.timetable = "2023-01-23";
console.log(r);
