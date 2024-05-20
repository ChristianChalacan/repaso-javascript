function ordenar(texto, fn) {
  let orden = texto
    .replace(" ", "")
    .split("")
    .sort((a, b) => {
      let aLower = a.toLowerCase();
      let bLower = b.toLowerCase();
      if (aLower < bLower) return -1;
      if (aLower > bLower) return 1;
      return 0;
    })
    .join("");
  fn(orden);
}

ordenar("Hola mundo", console.log);
