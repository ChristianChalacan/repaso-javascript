const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

const getPaidUsers = (usrs) => {
  const names = usrs
    .filter((u) => u.plan !== "free")
    .sort((a, b) => {
      if (a.edad > b.edad) return 1;
      if (a.edad < b.edad) return -1;
      return 0;
    })
    .map((u) => `<li>${u.nombre}</li>`);
  const html = `
    <ul>
        ${names.join(`
        `)}
    </ul>`;
  return html;
};

console.log(getPaidUsers(usuarios));
