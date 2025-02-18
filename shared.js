const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeMobileNav);
modalNoButton.addEventListener('click', closeModal);

const closeModal = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

const openModal = () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}  

const closeMobileNav = () => {
    mobileNav.style.display = 'none';
    closeModal();
}

toggleButton.addEventListener('click', openModal);







