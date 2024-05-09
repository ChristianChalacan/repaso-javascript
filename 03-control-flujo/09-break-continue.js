let i = 0;
// La instruccion continue nos sirve para continuar con una nueva iteracion en un loop
// no sale del loop solo regresa a la condicion while
while(i < 6){
    i++;
    if(i === 4){
        continue;
    }
    console.log(i);
}
console.log('Mensaje despues de continue');
i = 0;

// La instruccion break termina con el loop 
while(i < 6){
    console.log(i);
    if(i === 4){
        break;
    }
    i++;
}

console.log('mensaje despues del break');