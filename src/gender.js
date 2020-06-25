const btnMale = document.querySelector('#gender-male');

const btnFemale = document.querySelector('#gender-female');

const btnGenderAll = document.querySelector('#gender-all');

btnGenderAll.addEventListener("click", () => renderCards(characters));

btnMale.addEventListener("click", () => renderByGender('Male'));

btnFemale.addEventListener("click", () => renderByGender('Female'));

function renderByGender(gender) {
  const newData = filterByGender(characters, gender);
  renderCards(newData);
}
