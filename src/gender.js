const btnMale = document.querySelector('#gender-male');

const btnFemale = document.querySelector('#gender-female');

const btnGenderAll = document.querySelector('#gender-all');

btnGenderAll.addEventListener("click", () => renderCards(characters));

btnMale.addEventListener("click", e => renderByGender('Male'));

btnFemale.addEventListener("click", e => renderByGender('Female'));

function renderByGender(characters,gender) {
  const newData = filterByGender(characters, gender);
  renderCards(newData);
}
