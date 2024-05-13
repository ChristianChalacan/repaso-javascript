const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

const getPaidUsers = (users) => {
  return users.filter((el) => el.plan !== "free");
};

console.log(getPaidUsers(usuarios));
