const config = {
  url: "https://holamundo.io",
  direccion: {
    calle: "calle hola mundo",
    numero: 80,
  },
};

function webServer({ url, direccion, direccion: { calle, numero } }) {
  console.log(url);
  console.log(direccion);
  console.log(calle);
  console.log(numero);
}

webServer(config);
