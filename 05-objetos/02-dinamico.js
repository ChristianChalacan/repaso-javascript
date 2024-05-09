const user = { id: 1 };

user.name = 'Name';

user.guardar = function () {
    console.log('Guardando ', user.name);
}

user.guardar();
console.log('Usuario', user);

delete user.name;
delete user.guardar;

console.log('Usuario 1', user);

// Para crear un objeto que no se puede modificar usamos el Object.freeze
const user1 = Object.freeze({ id: 1 });

user1.name = 'User1';
console.log('Usuario constante',user1);

// Para modificar solo los valores de las propiedades usamos el Object.seal
const user2 = Object.seal({ id: 1 });
// Resultado de console.log = { id: 1 }
console.log('User seal 1',user2);
// Cambiamos el valor de id pero no podemos agregar mas propiedades
user2.id = 2;
user2.name = 'Name';
// Resultado de console.log = { id: 2 } sin el atributo name
console.log('User seal 2', user2);