// Ejemplo donden se cambian los metodos de la funcion Usuario
function Usuario() {
    this.name = 'Christian';
    this.log = function() {
        console.log('logging...');
    }
    this.guardar = function() {
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.log = function() {
    console.log('lala');
}
usuario.log();

// Ejemplo de como poner las propiedades privadas
// En este ejemplo la funcion Log y la propiedad id son inaccesibles al crear una instancia de UsuarioPrivado 
function UsuarioPrivado() {
    let id = 1;
    this.name = 'Christian';
    let log = function() {
        console.log('logging...');
    }
    this.guardar = function() {
        log();
        console.log('guardando...');
    }
}

const usuarioPrivado = new UsuarioPrivado();
usuarioPrivado.guardar();