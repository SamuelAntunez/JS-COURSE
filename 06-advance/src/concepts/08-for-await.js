import { heroes } from '../data/hero';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
    const id = '5d86371fd55e2e2a30fe1ccb';
    const heroIds = heroes.map(hero => hero.id)

    //! If Await
    // if (await getHeroAsync(id)){
    //     element.innerHTML = 'si existe'
    //     return
    // }
    // element.innerHTML = 'no existe ese heroe';

    const heroPromises = getHeroesAsync(heroIds);
    
    for await( const hero of heroPromises){
        element.innerHTML += `${hero.name} <br/>`
    }


}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}