'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModel = document.querySelectorAll('.show-modal');
console.log(openModel);

for(let i = 0; i < openModel.length; i++)
    openModel[i].addEventListener('click', function() {
// document.querySelector('.hidden').style.display = 'block';
modal.classList.remove('hidden');
// console.log('Btn is clicked!');

    })