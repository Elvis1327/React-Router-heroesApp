import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher) => {

    let comics = ['Marvel Comics', 'DC Comics'];
    
    if(!comics.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    };
    
    const resp = heroes.filter(heroe => heroe.publisher === publisher);
    return resp;
};


