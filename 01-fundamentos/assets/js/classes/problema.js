function Persona(nombre, edad) {
    console.log('Se ejecutó este línea')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`)
    }

}

const maria = new Persona('Maria', 18)
const melissa = new Persona ('Melissa', 0)

maria.imprimir();
melissa.imprimir();