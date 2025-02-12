'use strict';

let vraag1 = prompt('Wat is de hoofdstad van Nederland?');
let punt = 0;
if(vraag1 === 'Amsterdam' || vraag1 === 'amsterdam') {
    alert('Dat is correct!');
    punt++;
}else{
    alert('De juiste antwoord was: Amsterdam');
}

let vraag2 = prompt('Wat is de hoofdstad van België?');
if(vraag2 === 'Brussel' || vraag2 === 'brussel') {
    alert('Dat is correct!');
    punt++;
}else{
    alert('De juiste antwoord was: Brussel');
}

let vraag3 = prompt('Wat is de hoofdstad van Duitsland?');
if(vraag3 === 'Berlijn' || vraag3 === 'berlijn') {
    alert('Dat is correct!');
    punt++;
}else{
    alert('De juiste antwoord was: Berlijn');
}

alert('Je hebt ' + punt + ' punten behaald!');