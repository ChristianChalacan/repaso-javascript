const miArray = ["Hola", 12, true, "Mundo", {}, { id: 15 }, ["lala"]];

const dividePorTipo = (arr) => {
  return arr.reduce((acc, el) => {
    let llave = typeof el;

    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});
};

console.log(dividePorTipo(miArray));
