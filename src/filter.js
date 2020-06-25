function isGender(character, gender) {
    return character.gender === gender;
};
function filterByGender(characters, gender) {
    return characters.filter(character => isGender(character, gender));
};
function isStatus(character, status) {
    return character.status === status;
};
function filterByStatus(characters, status) {
    return characters.filter(character => isStatus(character, status));
};
function isSeason(character, season) {
    return character.season === season;
};
function filterBySeason(characters, season) {
    return characters.filter(character => isSeason(character, season));
}