let a = 5;

if ( a > 10) {
    console.log('A es mayor a 10')
} else {
    console.log('A es menor a 10')
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay()
console.log( {dia} )

if ( dia === 0) {
    console.log('Domingo');
} else if ( dia === 1 ) { 
    console.log(' lunes')
} else {
    console.log('No es ningun dia')
}

console.log(' TAREA ')

const semanaDia = {
    domingo: 'domingo', 
    lunes: 'lunes', 
    martes: 'martes', 
    miercoles: 'miercoles', 
    jueves: 'jueves', 
    viernes: 'viernes', 
    sabado: 'sabado', 

}

const SemanaValor = Object.values(semanaDia)
console.log('El dia es', SemanaValor[dia])