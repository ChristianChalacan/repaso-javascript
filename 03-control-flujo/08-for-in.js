let user = {
    id: 1,
    name: 'Juan',
    age: 25,
}

for(let prop in user){
    console.log(prop);
    console.log(user[prop]);
}

let animales = ['perro', 'gato', 'chancho', 'elefante'];

for(let indice in animales){
    console.log(indice, animales[indice])
}