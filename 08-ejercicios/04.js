const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

const cuantosPremium = (usrs) => {
  return usrs.reduce((acc, u) => (u.plan !== "free" ? ++acc : acc), 0);
};

const cuantosMayores = (usrs) => {
  return usrs.reduce((acc, u) => (u.edad > 17 ? ++acc : acc), 0);
};

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
