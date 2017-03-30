var pageModal = document.querySelector('.modal');
var btnModalOpen = document.getElementById('openModal');
var btnModalClose = document.getElementById('closeModal');
/*navMain.classList.remove('main-nav--nojs');*/
btnModalOpen.addEventListener('click', function() {
  pageModal.classList.add('modal--open');
});
btnModalClose.addEventListener('click', function() {
  pageModal.classList.remove('modal--open');
});

var btnChoise = document.querySelector('.modal_btn');

btnChoise.addEventListener('click', function() {
  if (btnChoise.classList.contains('modal__btn--selected')){
    btnChoise.classList.remove('modal__btn--selected');
  }
  else {
    btnChoise.classList.add('modal__btn--selected');
  }
});
