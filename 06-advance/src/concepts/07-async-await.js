/**
 * 
 * @param {HTMLDivElement} element 
 */


export const asyncAwait2Component = async(element) => {
    // const value1 = await slowPromise();    
    // const value2 = await mediumPromise();    
    // const value3 = await fastPromise();    
    console.time('start')

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])

    element.innerHTML = `
    Value1: ${value1} <br/>
    Value2: ${value2} <br/>
    Value3: ${value3} <br/>
    
    `;

    console.timeEnd('start')

    
    
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