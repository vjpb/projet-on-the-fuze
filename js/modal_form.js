const modal = document.querySelector('#myModal'),
  buttonForm = document.querySelector('#buttonForm'),
  close = document.querySelectorAll('.close')[0];

buttonForm.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
