const usuarios = [
  { edad: 17, nombre: "Chanchito", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function groupBy(usrs, prop) {
  return usrs.reduce((acc, u) => {
    let valor = u[prop];
    // Cuando se hace una comparacion y no se realiza una asignacion
    // javascript hace la asignacion a la primera variable de la comparacion
    // acc[valor] = acc[valor] = acc[valor] ? acc[valor] : [];
    acc[valor] = acc[valor] ? acc[valor] : [];
    acc[valor].push(u);
    return acc;
  }, {});
}

const grouped = groupBy(usuarios, "nombre");
console.log({ grouped });

/* let var1 = 5;
let var2 = 3;

var1 = var2 ? 1 : 0;

console.log(var1); */
