const btnSeasonAll = document.querySelector('#season-all');

const btnShippuden = document.querySelector('#season-shippuden');

btnSeasonAll.addEventListener('click', () => renderBySeason('All'));

btnShippuden.addEventListener('click', () => renderBySeason('Shippuden'));

function renderBySeason(season) {
    const newData = filterBySeason(characters, season);
    renderCards(newData);
}