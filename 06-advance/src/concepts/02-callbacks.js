import { heroes } from "../data/hero"


/**
 * 
 * @param {HTMLDivElement} element 
 */


export const callbacksComponent = (element) => {
    const id1 ='5d86371f1efebc31def272e2'
    const id2 ='5d86371f25a058e5b1c8a65e'
    findHero(id1, (err, hero1)=>{

        if(err) {
            element.innerHTML = err
            return
        }
        findHero(id2, (err, hero2)=>{
            if(err) {
                element.innerHTML = err
                return
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`
            
        })
        //element.innerHTML = hero?.name || 'No hay heroe';
    })
    
}
/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object)=> void} callbacks 
 */
const findHero = (id, callback) =>{

   const hero = heroes.find( hero=> hero.id === id )
    if(!hero) {
        callback(`Hero with id ${id} not found`);
    }
   callback(null, hero);
}