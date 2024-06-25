//var generateName=require('sillyname');
// import generateName from 'sillyname';
// var name = generateName();

// console.log("The Name : ",name);

import superheroes from 'superheroes';
// console.log(superheroes)

import {randomSuperhero} from 'superheroes';
var names=superheroes.filter(name=>name.charAt(0).toLowerCase()==='a');
console.log(names);
// console.log(randomSuperhero());