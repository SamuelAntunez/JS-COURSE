let a = 10;
let b = a;

a = 30

console.log({a, b})

let juan = { nombre: 'Juan'}
let ana = {...juan}; // ... operador spread separar elementos

ana.nombre = 'ana'
console.log({juan, ana})

const cambiaNombre = ( {...persona} ) => {
    persona.nombre= 'tony'
    return persona;
}

let peter = { nombre : 'peter'}
let tony = cambiaNombre(peter)

console.log({peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña']

const otrasFrutas = [...frutas]

// const otrasFrutas = frutas.slice() pero el spread es mas eficiente

otrasFrutas.push('Mango')

console.table({frutas, otrasFrutas});

// romper relaciones con los arreglos y objetos