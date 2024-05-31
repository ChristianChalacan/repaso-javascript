let promesa1 = new Promise((res, rej) => {
  res(5);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) return promesa2;

    // La clase de Promise tiene metodos que nos permiten crear una promesa resuelta o rechazada
    //return Promise.reject("Valor menor que 10");
    return Promise.resolve("Valor menor que 10");
  })
  .then((valor2) => {
    return valor2;
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => console.log("estamos en finally"));
