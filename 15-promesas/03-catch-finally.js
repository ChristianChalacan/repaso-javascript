let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  rej(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) return promesa2;
  })
  .then((valor2) => {
    return valor2;
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => console.log("estamos en finally"));
