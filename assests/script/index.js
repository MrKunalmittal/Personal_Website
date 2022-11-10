'use strict';

// Utility Functions 
function onEvent(event, selector, callback) {
return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const content = [
    'Hello, World. I\'m Kunal Mittal, a Full-Stack developer and student based in Winnipeg',
 
    'I am originally from India',
    'I have completed my graduation from India'
]
const bioParagraph = select('.banner-text p');
const bioButton = select('.banner-text button');
let n = 0;

window.addEventListener('load', () => {

    bioParagraph.classList.add('is-visible');
    setTimeout(() => {
        bioButton.classList.add('is-visible');
    }, 1000);

    onEvent('click', bioButton, function() {
        bioButton.innerText = (n === 1) ? 'Again' : 'More';

        if(n === 2) {
            bioParagraph.innerText = content[n=0];
            return;
        }

        bioParagraph.innerText = content[++n];
    });
});