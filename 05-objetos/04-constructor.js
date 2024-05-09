// { id: 1, recuperarClave: function(){}}
function Usuario() {
    this.id = 1
    this.recuperarClave = function () {
        console.log('Recuperando clave...');
    };
}

let usuario = new Usuario();
// Despliega el console.log del metodo del objeto Usuario
usuario.recuperarClave();
// Despliega Undefined porque el metodo del objeto no retorna nada
console.log(usuario.recuperarClave());