
const carros = ['ford', 'mazda']
let i = 0


console.warn('While')
while (i < carros.length) {
    console.log(carros[i])
    i++;
}

console.warn('Do while')
let j = 0
do {
    console.log(carros[j])
    j++;
} while( carros[j] ); 