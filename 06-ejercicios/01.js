function User(name) {
    this.id = Math.random();
    this.name = name;
}

let user1 = new User("Christian");
let user2 = new User("Orlando");

console.log("Usuario 1", user1);
console.log("Usuario 2", user2);