// Expresion de clase
const Rectangulo = class {

}

// Las clases creadas con la palabra Class no tienen HOISTING
// es decir que se crean en el lugar del codigo donde se las escribe y no se las puede llamar antes
class Rombo {

}

// Creacion de una funcion como clase
// Las funciones en javascript se crean como las variable con la palabra var
// se crean al principio del archivo, a este accion se le conoce como HOISTING
function Cuadrado() {

}

console.log("Rectangulo", Rectangulo);

console.log("Rombo", Rombo);
console.log("Cuadrado", Cuadrado);

const r = new Rectangulo();
const c = new Rombo();

class Chancho {
    propiedad = 'mi propiedad';
    // Creas una propiedad privada colocando un numeral antes de la variable
    #hambre;
    // propiedad estatica
    static peso = 18;
    constructor(estado = 'hambriento', hambre = false){
        this.estado = estado;
        this.#hambre = hambre;
    }
    hablar() {
        // Las propiedades estaticas no pertenecen al contexto de this por lo que no pueden ser usadas en la clase
        // pero si pueden ser usadas como constantes en fuera de la clase al igual que los metodos
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'y hambriento' : 'y satisfecho'} y mi peso es ${this.peso}`);
    }
    // Los metodos estaticos no pueden acceder a las propiedades de la clase
    // pero si pueden acceder a las propiedades estaticas
    static comer() {
        console.log(this.propiedad, " Estoy comiendo");
    }
    

}
Chancho.comer();
// Las variables estaticas no se pueden usar como constantes de una clase ya que su valor si puede ser reasigando
Chancho.peso = 64;
console.log("peso ", Chancho.peso);
const feliz = new Chancho("feliz");
console.log(feliz);
console.log(feliz.__proto__);
feliz.hablar();
const triste = new Chancho("triste");
//triste.hablar();
const sinSentimientos = new Chancho();
//sinSentimientos.hablar();