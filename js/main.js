const navContainer = document.querySelector('.nav-container');
const menuBtn = document.getElementById('menu-btn');
const mainContent = document.getElementById('main-container');

const menuClosers = Array.from(document.querySelectorAll('.nav-container .link'));
menuClosers.push(navContainer);
menuClosers.push(mainContent);

const menuBtnToggle = () => {
  const [openIcon, closeIcon] = menuBtn.children;

  if (navContainer.classList.contains('active')) {
    openIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none');
    mainContent.classList.add('overshadow');
  } else {
    openIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
    mainContent.classList.remove('overshadow');
  }
};

menuBtn.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  menuBtnToggle();
});

menuClosers.forEach((element) => {
  element.addEventListener('click', () => {
    navContainer.classList.remove('active');
    menuBtnToggle();
  });
});

// FEATURED SECTION
const artists = [
  {
    name: 'Bad Bunny',
    image: 'bad_bunny.jpg',
    title: 'Puerto Rican rapper and singer.',
    description: 'His music is often defined as Latin trap and reggaeton,[3] but he has incorporated various other genres into his music, including rock, bachata, and soul. He is also known for his deep, slurred vocal style and his eclectic fashion sense.',
  },
  {
    name: 'Rauw Alejandro',
    image: 'rauw_alejandro.jpg',
    title: 'Puerto Rican singer and rapper. Referred to as the "King of Modern Reggaeton"',
    description: 'He belongs to "the new generation" of Puerto Rican urban musicians.[4] His debut studio album, Afrodisíaco, was released in November 2020. His second studio album, Vice Versa, released in June 2021, featured the lead single "Todo de Ti". He has won one Latin Grammy Award from four nominations.',
  },
  {
    name: 'KarolG',
    image: 'karolg.jpg',
    title: 'Colombian singer, songwriter and businesswoman.',
    description: 'She is predominantly described as a reggaeton and Latin trap artist, but has experimented with a variety of other genres including reggae and sertaneja. She is also noted for her prominent female presence in the reggaeton scene. In 2018, she won the Latin Grammy Award for Best New Artist, and has been nominated for several Billboard Latin Music Awards and Premios Lo Nuestro awards.',
  },
  {
    name: 'Kali Uchis',
    image: 'kali_uchis.jpg',
    title: 'Known professionally as Kali Uchis, is an American singer.',
    description: "She released her debut mixtape, Drunken Babble, in 2012, which was followed by her debut EP, Por Vida, released in 2015. In 2018, Uchis released her debut studio album Isolation to widespread acclaim. Uchis's second studio album and her first Spanish language project, Sin Miedo (del Amor y Otros Demonios), was released in 2020.",
  },
  {
    name: 'Jbalvin',
    image: 'jbalvin.jpg',
    title: 'Colombian singer. He has been referred to as the "Prince of Reggaeton".',
    description: 'Throughout his career, Balvin has won eleven Billboard Latin Music Awards, six Latin Grammy Awards, five MTV Video Music Awards and seven Latin American Music Awards and received four Grammy Award nominations. In 2017, the BMI Latin Awards named him the Contemporary Latin Songwriter of the Year for his contribution in the Latin music industry,[5] and has won the first Global Icon Award given by Lo Nuestro Awards, in recognition of his contribution to spread Latin music worldwide.',
  },
  {
    name: 'Jhay Cortez',
    image: 'jhay_cortez.jpg',
    title: 'Known professionally as Jhayco, is a Puerto Rican singer and rapper.',
    description: 'He began composing songs at age 15, this made producer Eddie Dee interested in him and he was known by producers Lele "El arma secreta" and Eliel, with whom he began to write songs and who connect him to work with him. duo Zion & Lennox, for which he composed two songs, "Como curar" and "Detective de tu amor", in addition to producing "Soltera" under the pseudonym Jay "El Superdotado", the three songs forming part of the album Los Verdaderos.',
  },
];

const buildCardHTML = (artist) => `
  <li class="artist">
    <figure class="img-wrap"><img src="./assets/artists/${artist.image}" alt="Picture of ${artist.name}" class="img"></figure>
    <div class="info">
      <h3 class="name">${artist.name}</h3>
      <em class="subtitle">${artist.title}</em>
      <p class="description">${artist.description}</p>
    </div>
  </li>
  `;

let artistsCardList = '';
const artistsList = document.querySelector('.artists-list');

artists.forEach((artist) => {
  artistsCardList = artistsCardList.concat(buildCardHTML(artist));
});

artistsList.innerHTML = artistsCardList;
