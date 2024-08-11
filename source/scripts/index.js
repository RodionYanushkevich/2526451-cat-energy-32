/* в этот файл добавляет скрипты*/
const navMobile = document.querySelector('.navigation');
const buttonToggle = document.querySelector('.page-header__nav-toggle');

buttonToggle.onclick = function() {
  navMobile.classList.toggle('close-button');
};
