const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const openModal = () => {
  //   modal.style.display = "block";
  //   backdrop.style.display = "block";
  modal.classList.add("open");
  backdrop.classList.add("open");
};
const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
};
const openMobileNav = () => {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
};
const closeMobileNav = () => {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
};
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", openModal);
}
backdrop.addEventListener("click", closeMobileNav);
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
toggleButton.addEventListener("click", openMobileNav);
