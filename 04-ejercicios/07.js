function precioCompleto(precio, impuesto){
    return precio + (precio*impuesto);
}

let resultado = precioCompleto(20, 0.12);
console.log(resultado);
