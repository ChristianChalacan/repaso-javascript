const config = {
  url: "https://holamundo.io",
};

function configurarAPI({ url } = { url: "www.google.com" }) {
  return `${url}`;
}

function parametrosPorDefecto(a = "Parametro por defecto") {
  return a;
}

console.log(parametrosPorDefecto("parametro"));
console.log(parametrosPorDefecto());

console.log(configurarAPI());
console.log(configurarAPI(config));
