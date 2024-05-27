function mixin(Ctr, ...args) {
  return Object.assign(Ctr.prototype, ...args);
}
let vuela = {
  vuela() {
    console.log("volando");
  },
};

let vivo = {
  vivo: false,
};

let maquina = {
  tieneMotor: true,
};

let nada = {
  nada() {
    console.log("nadando");
  },
};
let camina = {
  camina() {
    console.log("caminando");
  },
};
let bano = {
  bano() {
    console.log("yendo al baño!");
  },
};

// vuele, nada, camina, va al baño
function Pato() {
  this.name = "Lucas";
}
//Object.assign(Pato.prototype, nada, bano, camina, vuela);
mixin(Pato, nada, bano, camina, vuela);
console.log("PATO", Pato.prototype, new Pato());

// camina, nada, va al baño
function Perro() {}
mixin(Perro, nada, bano, camina);
console.log(Perro.prototype, new Perro());

// nada, va al baño
function Pez() {}
mixin(Pez, nada, bano);
console.log(Pez.prototype, new Pez());

// vuela pero no nada, ni camina ni va al baño
function Avion() {}

// Podemos agregar un objeto literal con todos los metodos/propiedades que queramos
Avion.prototype = { ...vuela, ...vivo };

mixin(Avion, maquina);
console.log(Avion.prototype, new Avion());
