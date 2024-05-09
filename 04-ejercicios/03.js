function getbyIdx(arr, idx){
    return arr[idx] === undefined ? 'No existe valor en el indice indicado' : arr[idx];
}

let resultado = getbyIdx([1,2,3,4], 5);

console.log(resultado);