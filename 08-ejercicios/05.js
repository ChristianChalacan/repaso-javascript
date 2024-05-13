const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

const obtenerMayor = (usrs) => {
  return usrs.reduce((acc, u) => (u.edad > acc.edad ? (acc = u) : acc));
};

const mayor = obtenerMayor(usuarios);

console.log(mayor);
