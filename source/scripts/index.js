const navMobile = document.querySelector('.page-header_nav');
const buttonToggle = document.querySelector('.page-header__nav-toggle');
// Поставить окно окрытым если не работает ява
buttonToggle.onclick = function() {
  navMobile.classList.toggle('page-header_nav--state-open');
  if (buttonToggle.classList.contains('page-header__nav-toggle--cross')) {
    buttonToggle.classList.remove('page-header__nav-toggle--cross');
    buttonToggle.classList.add('page-header__nav-toggle--burger');
  }else{
    buttonToggle.classList.add('page-header__nav-toggle--cross');
  }
};
