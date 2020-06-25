function isGender(character, gender) {
    return character.gender === gender;
  }
  function filterByGender(characters, gender) {
    return characters.filter(character => isGender(character, gender));
  }