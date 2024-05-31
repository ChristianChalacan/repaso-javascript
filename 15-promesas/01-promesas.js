let promesaResolve = new Promise((resolve, reject) => {
  resolve("Realizado con exito");
});
let promesaPending = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(44);
  }, 10000);
});
let promesaReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error de carga");
  }, 10000);
});

promesaResolve.then(
  (valor) => console.log(valor),
  (e) => console.log("error", e)
);
promesaReject.then(
  (valor) => console.log(valor),
  (e) => console.log("error", e)
);
