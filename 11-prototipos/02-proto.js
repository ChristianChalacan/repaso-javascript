// Creamos una funcion con algunos atributos para el ejemplo
function User() {
  this.name = "Hola Mundo";
  this.login = () => {
    console.log("iniciando sesion");
  };
}

// Desplegando el prototipo podemos ver el constructor de User pero tambien
// el prototipo de Object
console.log(User.prototype);
const user1 = new User();
const user2 = new User();

user1.login();
// Al crearse varias instancias vemos que los metodos no son los mismos
// esto puede traer problemas de rendimiento si se crean varias instancias de un objeto
console.log(user1.login == user2.login);

// Creamos una funcion sin el metodo de login para hacer el cambio y pasar esta funcion al prototipo
// Podemos ver que podemos llamar a la funcion del prototipo y lo mismo se puede hacer con el prototipo
// llamando a una funcion del constructor
// esto es posible por la herencia
function UserProto() {
  this.name = "Hola Mundo";
  this.logger = function () {
    console.log("loggeando...");
    this.login();
  };
}

// Metodo de prototipo
// Al usarse en una instancia this toma el contexto de la instancia
UserProto.prototype.login = function () {
  console.log("iniciando sesion ", this.name);
  //this.logger();
};

const user3 = new UserProto();
const user4 = new UserProto();

//user3.login();
user3.logger();
console.log(user4);
//console.log(user3.login == user4.login);
