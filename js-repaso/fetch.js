// URL de donde sacaremos la informacion
const url = 'https://jsonplaceholder.typicode.com/users'
// La funcion fetch recibe dos parametros, el primero es la URL y el segundo es la configuracion
fetch(url).then((response) => response.json()).then(data => console.log(data));
// El segundo parametro que recibe el metodo fetch es el tipo de configuracion
// con el tipo de llamado al servidor, el tipo de datos que se envian, el token de autorizacion, etc.
fetch(url,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer aquiDebeIrElToken'
    },
    body: JSON.stringify({
        name: 'Chanchito Feliz',
        website: 'google.com'
    })
})
    .then((response) => response.json())
    .then(data => console.log(data));

// USANDO UNA FUNCION ASINCRONA
const fn = async () => {
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer aquiDebeIrElToken'
        },
        body: JSON.stringify({
            name: 'Chanchito Feliz',
            website: 'google.com'
        })
    })
    const data = await response.json();
    console.log('data', data)
}
console.log('RESULTADO USANDO UNA FUNCION ASINCRONA');
fn();