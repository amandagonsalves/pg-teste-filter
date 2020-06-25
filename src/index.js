const characters = require('./characters.json');  


const male = character => character.gender === 'Male';
const female = character => character.gender === 'Female';
const dead = character => character.status === 'Dead';
const alive = character => character.status === 'Alive';
const all = character => character.season === 'All';
const shippuden = character => character.season === 'Shippuden';

/* const filterAll = characters.filter(all)
console.log(filterAll) */

/* document.querySelectorAll('#buttons > button').forEach(btn => {
    btn.addEventListener('click', e=> {
        console.log('ola')
    })
}) */