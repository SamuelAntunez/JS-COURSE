
class Persona {
    // static palabra reservada para volver una propiedad estatica
    static _conteo = 0;
    static mensaje(){
        console.log('Hola soy un mensaje estatico')
    }

    nombre;
    codigo;
    frase;

    // constructor: metodo que se ejecuta cuando se crea una nueva instancia de la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++
    
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi codigo es: ${this.codigo}`)
    }

    set setComida(comida) {
        this.comida = comida
    }
    get getComida(){
        return `la comida favorita es ${this.comida}`
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Spiderman cool')
const ironman = new Persona('Tony Stark', 'iron', 'iron cool')


console.log(spiderman)
spiderman.quienSoy();
// los set y los getters se inicializan de la siguiente forma
spiderman.setComida = 'juas'
console.log(spiderman.getComida)

console.log('Conteo statico', Persona._conteo)

// los metodos estaticos lo iniciales desde la clase y no desde el nuevo objeto
Persona.mensaje()
