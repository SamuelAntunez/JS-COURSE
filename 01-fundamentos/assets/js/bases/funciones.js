function saludar(nombre){ 
    console.log(arguments)
    console.log('Hola ' + nombre)
    return [1,2]; //si queremos retornar mas de dos valores retornamos un arreglo
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre)
}
const saludarFlecha = ()=> {
    console.log('hola flecha')
}


const retorno = saludar('pepe');
console.log(retorno)
saludar2('juan');
saludarFlecha()

function sumar(a, b){
    console.log('el resultado es')
    return a + b;
}

const sumar2 =(a,b)=> a + b

console.log(sumar(1,2))
console.log(sumar2(1,2))

function getAleatorio(){
    return Math.random()

}

console.log(getAleatorio())

const getAleatorio2 = ()=> Math.random();
console.log(getAleatorio2())

