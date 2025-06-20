const heroes = ['Batman', 'Superman', 'Mujer Maravilla']

console.warn('For Tradicional');
for ( let i = 0; i < heroes.length; i++){
    console.log( heroes[i])
}

console.warn('For In')
for( let i in heroes ){
    console.log(heroes[i])
} // extrae el indice en i

console.warn('For Of')
for( let heroe of heroes ){
    console.log( heroe )
} // extrae el valor en heroe   