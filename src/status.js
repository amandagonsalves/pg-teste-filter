const btnAlive = document.querySelector('#status-alive');

const btnDead = document.querySelector('#status-dead');

const btnStatusAll = document.querySelector('#status-all');

btnAlive.addEventListener('click', () => {
    renderByStatus('Alive');
})

btnDead.addEventListener('click', () => {
    renderByStatus('Dead');
})

btnStatusAll.addEventListener('click', () => {
    renderCards(characters);
})

function renderByStatus(status) {
    const newData = filterByStatus(characters, status);
    renderCards(newData);
}
