function User(a) {
  // Creamos una variable privada con let
  let name = a;
  this.getName = function () {
    return name;
  };
}

class UserClass {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #logger() {
    console.log("logger...");
  }
  getName() {
    this.#logger();
    return this.#name;
  }
}

const u = new User("Chanchito Cansado");
const uC = new UserClass("Chanchito Cansado");

console.log(u);
console.log(uC);
// Si tratamos de acceder a la variable privada se creara una nueva variable con el nombre #name pero
// no sera privada
uC["#name"] = "lala";

console.log(uC["#name"]);
console.log(uC);
