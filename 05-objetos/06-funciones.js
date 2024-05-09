function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Christian');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');

console.log(user1);

function returned() {
    return function() {
        console.log('Hola mundo');
    }
}
// Asiganamos la funcion anonima a una variable
let saludo = returned();
// Ejecutamos la variable como funcion y accedemos a las acciones de la funcion anonima
saludo();

console.log(returned());