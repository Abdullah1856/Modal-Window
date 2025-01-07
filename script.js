'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModals() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener('click', openModals);

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
