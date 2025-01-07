'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
console.log(openModal);

function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModels() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', openModels);

btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
