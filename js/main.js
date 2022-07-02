const mainContainer = document.getElementById('main-container');
const menuBtn = document.getElementById('menu-btn');

const menuClosers = Array.from(document.querySelectorAll('.nav-container .link'));
menuClosers.push(mainContainer);

menuBtn.addEventListener('click', () => { mainContainer.classList.toggle('move-out'); });
menuClosers.forEach((element) => {
  element.addEventListener('click', () => { mainContainer.classList.remove('move-out'); }); 
});
