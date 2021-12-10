// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const advHpEl = document.querySelector('#adventurer-hp');
const defeatedGoblinsEl = document.querySelector('.defeated-list');
const defeatedNumberEl = document.querySelector('defeated-number');
const advImageEl = document.querySelector('#aadventurer-img');
const form = document.querySelector(form);
const goblinsEl = document.querySelector('.goblins');

// let state
let defeatedGoblins = 0;
let advHp = 10;
let goblins = [
    { 
        name: 'Clarence',
        hp: 3
    },
    {
        name: 'JimJon',
        hp: 3
    }
];

// set event listeners 
form.addEventListner('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5)
    };
    goblins.push(newGoblin);
    displayGoblins();
});

function displayGoblins() {
    goblinsEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        if (goblin.hp > 0) {
            goblinEl.addEventListner('click', () => {
                if (Math.random() < .33) {
                    goblin.hp--;
                    alert('You hit' + goblin.name + '!');
                } else {
                    alert('You missed' + goblin.name + '!');
                }

                if (Math.random() < .5) {
                    advHp.hp--;
                    alert(goblin.name + 'hit you!');
                } else {
                    (goblin.name + 'missed you!');
                }

                if (goblin.hp === 0) {
                    defeatedGoblins++;
                }

                if (advHp === 0) {
                    alert('You have died, GG');
                }

                advHpEl.textContent = advHp;
                defeatedGoblinsEl.textContent = defeatedGoblins;

                displayGoblins();
            });
        }
    }
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
