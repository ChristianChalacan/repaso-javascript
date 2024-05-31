const p1 = Promise.reject(3);
const p2 = 42;
const p3 = new Promise((res, rej) => {
  setTimeout(rej, 1000, "foo");
});

// El metodo all de Promise resuelve un array de promesas en paralelo
Promise.all([p1, p2, p3])
  .then((valores) => {
    console.log("Promesas exitosas all", valores);
  })
  .catch((e) => {
    console.log("Una promesa fue rechazada", e);
  });
// El metodo race nos devuelve el resultado de la primera promesa en responder de una lista de promesas
// enviadas como parametros
Promise.race([p1, p2, p3])
  .then((valor) => console.log("Promesas exitosas race", valor))
  .catch((e) =>
    console.log("La primera promesa en responder fue rechazada", e)
  );

Promise.any([p1, p3])
  .then((valor) => console.log({ valor }))
  .catch((e) => console.log({ e }));
