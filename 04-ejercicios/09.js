let pairs = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'Chanchito' }]
];

function toCollection(arr){
    let collection = [];
    for(data of arr){
        let obj = {
            id: data[0],
            name: data[1]['name']
        }
        collection.push(obj);
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);