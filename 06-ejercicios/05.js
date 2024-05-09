let object = {
    id: 1,
    name: 'Christian',
    login: function() {},
    logout: function() {},
}

let propiedad = 'name';

function haveProp(obj, prop) {
    return Object.keys(obj).includes(prop);
}

console.log(haveProp(object, propiedad))