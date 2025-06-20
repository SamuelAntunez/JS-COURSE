const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje; 

// if ( dia === 0 || dia === 6) {
//     horaApertura = 11
//     console.log('fin semana')
//     if (horaActual >= horaApertura){
//         console.log('esta abierto')
//     } else {
//         console.log(`esta cerrado, abrimos a las ${horaApertura}`)
//     }
// } else {
//     console.log('semana')
//     horaApertura = 9
//     if (horaActual >= horaApertura){
//         console.log('esta abierto')
//     } else {
//         console.log(`esta cerrado, abrimos a las ${horaApertura}`)
//     }
// }
// console.log({horaApertura});

// if ( [0.6].includes(dia) ){
//     horaApertura = 11
// } else {
//     horaApertura = 9
// }

 horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;
 mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : 'Esta cerrado'

 console.log({horaApertura, mensaje})