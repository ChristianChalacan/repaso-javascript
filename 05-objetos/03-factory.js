// Si la propiedad del objeto tiene el mismo nombre que el parametro de la factory function
// Se puede colocar directo el nombre asi como en la linea 6 y 5
function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave')
        }
    };
}

let user1 = crearUsuario('user1', 'user1@domain.com');
let user2 = crearUsuario('user2', 'user2@domain.com');

console.log('Usuario 1: ', user1);
console.log('Usuario 2: ', user2);
