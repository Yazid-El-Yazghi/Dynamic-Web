'use strict';

const specialElements = document.querySelectorAll('.special');

specialElements.forEach((element) => {
    element.style.color = 'red';
});

const paragraphs = document.getElementsByTagName('p');
const secondParagraph = paragraphs[1];

secondParagraph.style.textDecoration = 'underline';

let numberSP = specialElements.length;

document.getElementById('output').innerText = numberSP;