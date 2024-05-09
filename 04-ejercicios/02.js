
function nombreResolucion(ancho, alto){
    let resoluciones = [{
        nombre: 'HD',
        ancho: 1280,
        alto: 720
    },
    {
        nombre: 'FHD',
        ancho: 1920,
        alto: 1080
    },
    {
        nombre: 'WQHD',
        ancho: 2560,
        alto: 1440
    },
    {
        nombre: '4K',
        ancho: 3840,
        alto: 2160
    },
    {
        nombre: '8K',
        ancho: 7680,
        alto: 4320
    }];
    for(let i = 0; i < resoluciones.length; i++){
        if(ancho < resoluciones[i]['ancho'] || alto < resoluciones[i]['alto']){
            if((i-1) == -1){
                return 'muy baja';
            }
            return resoluciones[i -1]['nombre'];
        }
        else if(ancho == resoluciones[i]['ancho'] || alto == resoluciones[i]['alto']){
            return resoluciones[i]['nombre'];
        }
    }
    return 'muy alta';
}

let resolucion = nombreResolucion(1280, 720);

console.log('La resolucion de la pantalla es: ', resolucion);