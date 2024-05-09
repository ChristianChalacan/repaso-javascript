let longitud = 10;

function crearArray(n){
    if (n <= 0){
        return [];
    }
    let arreglo = [];
    for(let i = 0; i < n; i++){
        arreglo[i] = i+1;
    }
    return arreglo;
}

let resultado = crearArray(10);
console.log(resultado);