function suma(fn, ...rest) {
  let suma = rest.reduce((acc, el) => acc + el);
  fn(suma);
}

suma((resultado) => console.log(resultado), 1, 2, 3, 4);
