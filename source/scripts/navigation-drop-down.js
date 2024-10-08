const navMobile = document.querySelector('.page-header__nav');
const buttonToggle = document.querySelector('.page-header__nav-toggle');

navMobile.classList.remove('page-header__nav--state-open','page-header__nav--state-open-position');
buttonToggle.classList.remove('page-header__nav-toggle--state-open');

buttonToggle.onclick = function() {
  navMobile.classList.toggle('page-header__nav--state-open');
  if (buttonToggle.classList.contains('page-header__nav-toggle--cross')) {
    buttonToggle.classList.replace('page-header__nav-toggle--cross', 'page-header__nav-toggle--burger');
  }else{
    buttonToggle.classList.replace('page-header__nav-toggle--burger', 'page-header__nav-toggle--cross');
  }
};
