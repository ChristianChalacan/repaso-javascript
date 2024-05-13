let usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];
// Con el metodo Map obtenemos un nuevo array
// con la misma cantidad de objetos que el array de origen
const lista = usuarios.map((u) => `<li> ${u.nombre} </li>`);
// Generamos un HTML que enliste los usuarios
const html = `<ol>${lista.join("")}</ol>`;

console.log(html);

const mapped = usuarios.map((u) => {
  /* if (u.edad > 17) {
    return { nombre: u.nombre, mayor: true };
  } else {
    return { nombre: u.nombre, mayor: false };
  } */
  return { ...u, mayor: u.edad > 17 };
});

console.log(mapped);

// Generamos un HTML que enliste solo los usuarios mayores de edad
const listaMayores = usuarios
  .filter((u) => u.edad > 17)
  .map((u) => `<li> ${u.nombre} </li>`);

const htmlMayores = `<ol> ${listaMayores.join("")} </ol>`;
console.log(htmlMayores);
