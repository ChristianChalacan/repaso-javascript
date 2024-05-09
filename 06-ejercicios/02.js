function createUser(name) {
    return {
        id: Math.random(),
        name
    }
}

let user1 = createUser('Christian');
let user2 = createUser('Orlando');

console.log(user1);
console.log(user2);