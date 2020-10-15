// console.log('Hello!');

import heroes, {owners} from '../data/heroes';

console.log(owners);

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroeById(5));


console.log('-------------------------------------');


const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));