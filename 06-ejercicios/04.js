let object = {
    id: 1,
    name: 'Christian',
    login: function() {},
    logout: function() {},
}
function isMethod(obj) {
    for(let key in obj) {
        if((typeof obj[key]) === 'function') {
            console.log(key);
        }
    }
}
isMethod(object);
