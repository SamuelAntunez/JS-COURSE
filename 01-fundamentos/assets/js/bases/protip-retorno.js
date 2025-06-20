// function crearPersona( nombre, apellido) {
//     return {
//         nombre, 
//         apellido
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona('Fernando', 'Herrera')
console.log(persona)

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args)=> { // despues del parametro rest ( ... ) no pueden ir mas argumentos, pero si pueden ir antes, con su arugmento independiente
    console.log({edad, args});
    return args
}
imprimeArgumentos(10, true, false, 'Fernando', 'Hola');
imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');

const argumentos = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({argumentos});

// cuando se hace un console log con las llaves, te devuelve un objeto con los pares de valores


const [ casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo})

const {apellido} = crearPersona('Fernando', 'Herrera');
console.log ({ apellido });

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');
console.log({nuevoApellido});

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    // edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],

};

// const imprimePropiedades = (personaje) => {
//     console.log(personaje.nombre)
//     console.log(personaje.codeName)
//     console.log(personaje.vivo)
// }


const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes}) => { // puedo poner edad = 45 para que si no hay ninguna edad por defecto me venga esa edad
    edad = edad || 0
    
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}


imprimePropiedades(tony);
