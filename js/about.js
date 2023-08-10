const showbtn = document.querySelector('.activeNav');
const hidebtn = document.querySelector('.nav');

const x = document.getElementById('menubar');
const show = () => {
  x.classList = 'activeNav';
};

const hide = () => {
  x.classList = 'nav';
};

showbtn.addEventListener('click', show);
hidebtn.addEventListener('click', hide);