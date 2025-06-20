/**
 * 
 * @param {HTMLDivElement} element 
 */


export const promiseRaceComponent = (element) => {
    const renderValue = (value ) =>{
        element.innerHTML = value;
    }    
    Promise.race([
        slowPromise(),
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(renderValue)
}

const slowPromise = () => new Promise( resolve =>{
    setTimeout(() => {
        resolve('Slow Promise')

    }, 2000)
})
const mediumPromise = () => new Promise( resolve =>{
    setTimeout(() => {
        resolve('medium Promise')

    }, 1500)
})
const fastPromise = () => new Promise( resolve =>{
    setTimeout(() => {
        resolve('fast Promise')

    }, 1000)
})