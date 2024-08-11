const navMobile = document.querySelector('.navigation');
const buttonToggle = document.querySelector('.page-header__nav-toggle');

buttonToggle.onclick = function() {
  navMobile.classList.toggle('close-button');
  if (buttonToggle.classList.contains('cross')) {
    buttonToggle.classList.remove('cross');
    buttonToggle.classList.add('burger');
  }else{
    buttonToggle.classList.add('cross');
  }
};
