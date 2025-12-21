import { refs } from './refs';

const burgerMidLine = document.querySelector('.mobile-burger-menu-mid-line');
const burgerBotLine = document.querySelector('.mobile-burger-menu-bot-line');

const onEscPress = event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

const burgerMenuAnim = () => {
  refs.headerBurgerTopLine.classList.toggle('top-line');
  refs.headerBurgerMidLine.classList.toggle('mid-line');
  refs.headerBurgerBotLine.classList.toggle('bot-line');
};

const closeBurgerMenuAnim = () => {
  refs.headerBurgerTopLine.classList.remove('top-line');
  refs.headerBurgerMidLine.classList.remove('mid-line');
  refs.headerBurgerBotLine.classList.remove('bot-line');
};

const openMobileMenu = () => {
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onEscPress);

  refs.headerMobileMenu.classList.toggle('is-open');
  if (refs.headerMobileMenu.className !== 'mobile-menu is-open')
    document.body.style.overflow = '';

  burgerMenuAnim();
};

const closeMobileMenu = () => {
  document.body.style.overflow = '';
  refs.headerMobileMenu.classList.remove('is-open');
  document.removeEventListener('keydown', onEscPress);

  closeBurgerMenuAnim();
};

const onBackdropClick = event => {
  const isInteractive = event.target.closest(
    '.mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button'
  );

  if (isInteractive) return;

  closeMobileMenu();
};

const onHeaderClick = event => {
  const isInteractive = event.target.closest('.header-logo, .burger-btn');

  if (isInteractive) return;

  closeMobileMenu();
};

refs.headerBurgerBtn.addEventListener('click', openMobileMenu);
refs.header.addEventListener('click', onHeaderClick);
refs.headerMobileMenu.addEventListener('click', onBackdropClick);

refs.headerMobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('resize', () => {
  if (innerWidth >= 1440) {
    document.body.style.overflow = '';
    refs.headerMobileMenu.classList.remove('is-open');
    closeMobileMenu();
  }
});
