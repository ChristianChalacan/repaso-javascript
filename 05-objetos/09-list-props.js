// RESUMEN: 
const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('dibujando');
    }
}

//delete punto.dibujar;
// Verificacion de funcion - propiedad en un objeto
if( 'dibujar' in punto) {
    punto.dibujar();
}
else {
    console.log('No existe el metodo dinujar en el objeto');
}
// Mostramos en consola todas las llaves de un objeto
console.log(Object.keys(punto));
// **LOS DOS METODOS A CONTINUACION SON COMO REFERENCIA PARA REVISION DE CODIGO ANTIGUO

for(let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}
// Nos devuelve un la lista de listas de las llaves y los valores del objeto
for(let entry of Object.entries(punto)) {
    console.log(entry);
}

// LA FUNCIONALIDAD NUEVA PARA ACCEDER A LAS LLAVES Y VALORES ES CON EL METODO FOR - IN

for(let llave in punto ) {
    console.log(llave, punto[llave]);
}