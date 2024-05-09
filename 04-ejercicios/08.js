let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Felipe',
},{
    id: 3,
    name: 'Chanchito',
}];

function toPairs(arr){
    let pares = [];
    for(idx in arr){
        pares.push([arr[idx]['id'], arr[idx]]);
    }
    return pares;
}

let resultado = toPairs(array);

console.log(resultado);