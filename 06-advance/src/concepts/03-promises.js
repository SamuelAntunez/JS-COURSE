/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/hero";


export const promiseComponent = (element) => {
    
    const renderHero = (hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `
            ${ hero1.name} <br>
            ${ hero2.name}
        `
    }

    const renderError = ( error ) =>{
        element.innerHTML = error
    }

    const id1 = '5d86371f25a058e5b1c8a65e'
    const id2 = '5d86371f2343e37870b91ef1'

    let hero1, hero2;
    //! Depende de que las promesas sean independientes
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then( ([hero1, hero2] )=> {renderTwoHeros(hero1, hero2)})
    .catch(renderError)


    //!FORMA 2
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2)
    //     }).then(hero2 => {
    //         renderTwoHeros( hero1, hero2)
    //     })
    //     .catch( renderError)
    


    // !FORMA 1 
    // findHero( id1 )
    //     .then( hero1 => renderHero( superHero))
    //     .catch( renderError) // ambas formas son
    
//     findHero(id1)
//         .then( (hero) => {
//             hero1 = hero;
//             findHero(id2)
//                 .then( (hero2 ) => {
//                     // hero2 = hero2;
//                     renderTwoHeros(hero1, hero2)
//                 })
//                 .catch( renderError)
//         } ) 
//         .catch(renderError)
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = ( id ) =>{

    return new Promise(( resolve, reject )=>{

        const hero = heroes.find(hero => hero.id === id)

        if ( hero ) {
            resolve(hero)
            return;
        }
        
        reject(`Hero with id ${ id } not found`)
    });

   

    
}