let persona = {
    nombre: "Christian",
    estadoCivil: "Soltero",
    edad: 16,
};

console.log(persona);// Se muestra todo el objeto

console.log(persona.nombre);// Se muestra el valor de la llave nombre

console.log(persona['nombre']);// Se muestra el valor de la llave nombre

//Modificar una propiedad

persona.edad = 24;
persona['estadoCivil'] =  "Feo";
// Eliminacion de un valor del objeto
delete persona.estadoCivil;

console.log(persona);// Se muestra todo el objeto