class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        if (!!Singleton.instancia){
            return Singleton.instancia
        }
        
        Singleton.instancia = this;
        this.nombre = nombre;

        return this
    }
}

// undefined negado es true, y si lo niegas de nuevo es false  !undefined = true !!undefined = false
console.log(Singleton.instancia)
const instancia1 = new Singleton('Ironman')
const instancia2 = new Singleton('Spiderman')

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`)
console.log(`Nombre en la instancia 1 es: ${instancia2.nombre}`)
