let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'infinity war'
};

console.log(personaje)
console.log('Nombre:', personaje.nombre)
console.log('Nombre:', personaje['nombre'])
console.log('Edad', personaje['edad'])
console.log('coords', personaje.coords.lat)
console.log(personaje.trajes.length)
console.log(personaje['trajes'][personaje.trajes.length - 1])
console.log('Ultima pelicula', personaje["ultima pelicula"])

// mas detalles
delete personaje.edad
console.log(personaje)

personaje.casado = true


const entriesPares = Object.entries(personaje) // Nos devuelve un arreglo en pares de valores
console.log(entriesPares);

// nos permite congelar el objeto, no se van agregar mas propiedades pero si puedes modificar los valores
Object.freeze(personaje);
personaje.dinero = 200
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)

const propiedades = Object.getOwnPropertyNames( personaje ); // 
const valores = Object.values(personaje)
console.log(propiedades) // nos devuelve las propiedades en forma de arreglo
console.log(valores) // nos devuelve los valores en forma de arreglo