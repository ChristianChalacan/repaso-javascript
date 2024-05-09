let object = { name: "Christian" }

function addId(obj) {
    obj.id = Math.random();
}

addId(object);
console.log(object);