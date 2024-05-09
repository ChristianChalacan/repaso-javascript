function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for(let i = 0; i < arr.length; i++){
        // Solucion con if's
        /* if(menor < arr[i]){

        }
        else{
            menor = arr[i];
        }
        if(mayor > arr[i]){

        }
        else{
            mayor = arr[i];
        } */
        menor = menor < arr[i] ? menor : arr[i];
        mayor = mayor > arr[i] ? mayor : arr[i]
    }
    let numeros = [menor, mayor];
    return numeros;
}

console.log('El numero mayor y menor son: ', getMenorMayor([10, 1,2,3,-50,100,4,5]));