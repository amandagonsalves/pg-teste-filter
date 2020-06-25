const characters = [
    {
        name: 'Naruto',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/naruto.jpg'
    },
    {
        name: 'Tsunade',
        gender: 'Female',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/tsunade.jpg'
    },
    {
        name: 'Danzou',
        gender: 'Male',
        status: 'Dead',
        season: 'All',
        image: './src/data/img/danzou.jpg'
    },
    {
        name: 'Gaara',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/gaara.jpg'
    },
    {
        name: 'Hidan',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/hidan.jpg'
    },
    {
        name: 'Kabuto',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/kabuto.jpg'
    },
    {
        name: 'Kaguya',
        gender: 'Female',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/kaguya.jpg'
    },
    {
        name: 'Kakashi',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/kakashi.jpg'
    },
    {
        name: 'Rock Lee',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/lee.jpg'
    },
    {
        name: 'Madara',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/madara.jpg'
    },
    {
        name: 'Minato',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/minato.jpg'
    },
    {
        name: 'Neji',
        gender: 'Male',
        status: 'Dead',
        season: 'All',
        image: './src/data/img/neji.jpg'
    },
    {
        name: 'Orochimaru',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/orochimaru.jpg'
    },
    {
        name: 'Pain',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/pain.jpg'
    },
    {
        name: 'Sai',
        gender: 'Male',
        status: 'Alive',
        season: 'Shippuden',
        image: './src/data/img/sai.jpg'
    },
    {
        name: 'Sasori',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/sasori.jpg'
    },
    {
        name: 'Shikamaru',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/shikamaru.jpg'
    },
    {
        name: 'Shino',
        gender: 'Male',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/shino.jpg'
    },
    {
        name: 'Shisui',
        gender: 'Male',
        status: 'Dead',
        season: 'Shippuden',
        image: './src/data/img/shisui.jpg'
    },
    {
        name: 'Shizune',
        gender: 'Female',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/shizune.jpg'
    },
    {
        name: 'Tenten',
        gender: 'Female',
        status: 'Alive',
        season: 'All',
        image: './src/data/img/tenten.jpg'
    }
];

const cardsElement = document.querySelector('#cards');

function renderCards(characters) {
    cardsElement.innerHTML = '';
    characters.map(renderCard)
}

function renderCard(character) {
    const div = document.createElement('div');
    div.style.width = '12rem';
    div.style.margin = '1rem';
    div.className = 'card';
    div.innerHTML = `
        <img src="${character.image}" class="card-img-top" alt="character image"/>
        <div class="card-body">
            <h5 class="card-title">
                ${character.name}
            </h5>
            <p class="card-text">
                Situação: ${character.status}
            </p>
            <p class="card-text">
                Sexo: ${character.gender}
            </p>
        </div>
        `
    cardsElement.appendChild(div)
};
characters.forEach(character => {
    renderCard(character);
});
    