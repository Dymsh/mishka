var pageModal = document.querySelector('.modal');
var btnClose = document.getElementById('closeModal');
var btnModalOpen = document.querySelectorAll('.btn--goods, .cards__basket');

for (var i = 0; i < btnModalOpen.length; i++) {
  btnModalOpen[i].addEventListener('click', function(event) {
    pageModal.classList.add('modal--open');
  });
}

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    pageModal.classList.remove('modal--open');
  }
});

btnClose.addEventListener('click', function (event) {
  pageModal.classList.remove('modal--open');
});
