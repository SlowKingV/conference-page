const mainContainer = document.getElementById('main-container');
const menuBtn = document.getElementById('menu-btn');

const menuClosers = Array.from(document.querySelectorAll('.nav-container .link'));
menuClosers.push(mainContainer);

const menuBtnToggle = () => {
  const children = menuBtn.children;

  if (mainContainer.classList.contains('move-out')) {
    children[0].classList.add('d-none');
    children[1].classList.remove('d-none');
  } else {
    children[0].classList.remove('d-none');
    children[1].classList.add('d-none');
  }
}

menuBtn.addEventListener('click', () => {
  mainContainer.classList.toggle('move-out');
  menuBtnToggle();
});

menuClosers.forEach((element) => {
  element.addEventListener('click', () => {
    mainContainer.classList.remove('move-out');
    menuBtnToggle();
  });
});
