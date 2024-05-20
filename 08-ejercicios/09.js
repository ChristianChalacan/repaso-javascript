const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

const users = [
  { age: 17, name: "Michael", membership: "premium" },
  { age: 13, name: "Kevin", membership: "free" },
  { age: 32, name: "Happy ping", membership: "free" },
  { age: 25, name: "Bryan", membership: "gold" },
];

const unificacion = (usuarios, users) => {
  const users2 = usuarios.map((u) => {
    let user = { age: u.edad, name: u.nombre, membership: u.plan };
    return user;
  });
  return [...users, ...users2];
};

const ordenando = (usrs) => {
  return usrs.sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
  });
};

const generarHtml = (usrs) => {
  const data = usrs.map((u) => `<li>Nombre: ${u.name}, Edad: ${u.age}</li>`);
  const html = `
    <ul>
        ${data.join(`
        `)}
    </ul>`;
  return html;
};

const unifiedUsers = unificacion(usuarios, users);
const orderedUsers = ordenando(unifiedUsers);
console.log(generarHtml(orderedUsers));
