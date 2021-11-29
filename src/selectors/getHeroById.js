import { heroes } from '../data/heroes';


const getHeroeById = (id) => {
    const resp = heroes.find(res => res.id === id);
    return resp;
};
export default getHeroeById;



