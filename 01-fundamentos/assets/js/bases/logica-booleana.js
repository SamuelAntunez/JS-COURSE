const regresaTrue = () => {
    console.log('Regresa true');
    return true
};

const regresaFalse = () => {
    console.log('Regresa False');
    return false
};

console.warn('not o la negacion');
console.log(true);
console.log(!true);  // negacion !

console.log(!regresaFalse());

console.warn('And') // true si todos los valores son verdaderos
console.log(true && true)
console.log('=========')
console.log( regresaFalse() && regresaTrue()) // evalua la primera y si da falso deja de evaluar lo demas
console.log(regresaTrue() && regresaFalse())

regresaTrue() && regresaFalse() // es para que se ejecute el segundo si el primero es verdadero

console.warn('OR')
console.log( regresaFalse() || regresaTrue())
console.log(regresaTrue() || regresaFalse())

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const al = true && 'Hola Mundo' && 150;
const a2 = 'mundo' && 'Mundo' && soyFalso;

console.log({al, a2}  )

