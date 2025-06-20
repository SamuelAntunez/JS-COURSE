const elMayor = (a, b) => {
    return (a >= b) ? a : b
}
const membresia = (membresia) => (membresia) ? '2 dol' : '3 dol';


console.log(membresia(true))
console.log(elMayor(1, 3))

const amigo = true

const amigoArr = [ 
    'thor',
    'fer',
    amigo ? 'Ka' : 'pe'
]

console.log(amigoArr)

const nota = 80
const grado = nota >= 90 ? 'A+' :
              nota >= 80 ? 'A'  :
              nota >= 60 ? 'B'  : 'C'

console.log(grado)