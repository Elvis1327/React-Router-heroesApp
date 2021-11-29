import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
    console.log('Hola me vulevo a llamar')
    if(name.length === 0){
        return [];
    }
    const resp = heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name.toLowerCase()));
    return resp;
}

