// Creacion de la fecha actual
const ahora = new Date();

console.log(ahora);
//Creacion de la fecha con una cadena de caracteres
const fecha = new Date('September 29 1999 21:00 UTC-5');

console.log(fecha);
// Creacion de una fecha a travez de parametros  AÑO, MES, DIA, HORA, MINUTOS, SEGUNDOS, MILISEGUNDOS
// Si se quiere transformar la zona horaria, se debe sumar las horas de diferencia al parametro de horas
const fecha2 = new Date(1999, 11, 30, 21, 15);

console.log(fecha2)
// Para tener un formato de hora mas corto y amigable, podemos usar el metodo toDateString de la propia fecha
console.log('dateString', fecha2.toDateString());
// Para tener un formato para enviar al Backend usamos el metodo toISOString
console.log('ISOString', fecha2.toISOString());
// Para tener solo la hora de la fecha usamos el metodo toTimeString
console.log('timeString', fecha2.toTimeString());

// Para tener un elemento especifico de una fecha (año, mes, dia, etc.) tenemos metodos get propios de una variable tipo fecha
console.log(fecha2.getFullYear());
// Devuelve el mes iniciando desde el 0 como enero
console.log(fecha2.getMonth());
// Te devuelve el numero del dia de la semana(lunes = 1, martes = 2, miercoles = 3,etc.)
console.log(fecha2.getDay());
console.log(fecha2.getHours());
console.log(fecha2.getMinutes());
