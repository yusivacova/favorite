export function createBurgerMenu() {
  openMenuBurger();

  pastMenu();

  closeBurgerMenu();
};

const openMenuBurger = () => {
  document.querySelector('.burger').addEventListener('click', (e) => {
    document.querySelector('.cover').classList.toggle('open-cover');
    document.querySelector('.header__burger').classList.toggle('active-burger');
    document.body.classList.toggle('noscroll');
  });
};

const pastMenu = () => {
  const menu = document.querySelector('.nav__list').cloneNode(1);
  document.querySelector('.cover').appendChild(menu);
};

const closeBurgerMenu = () => {
  if (document.querySelector('.burger')) {
    document.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        removeActiveClassForBurgerMenu();
      });
    });
  }

  document.querySelector('.cover').addEventListener('click', (e) => {
    const clickedTag = e.target;
    if (clickedTag.classList.contains('cover')) {
      removeActiveClassForBurgerMenu();
    }
  });
};

const removeActiveClassForBurgerMenu = () => {
  document.querySelector('.cover').classList.remove('open-cover');
  document.querySelector('.header__burger').classList.remove('active-burger');
  document.body.classList.remove('noscroll');
};
