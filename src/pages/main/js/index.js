import sayHi from './modules/test.js';

console.log('main/index.js');
sayHi();

const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('[data-open-modal]');
const closeModalBtns = document.querySelectorAll('[data-close-modal]');

console.log(modal);
console.log(closeModalBtns);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

openModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', openModal);
});

closeModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    console.log('modal clock!');
    closeModal();
  }
});

// add auto pop-up timer
