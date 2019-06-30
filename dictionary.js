///////// CONFIG /////////
const wordLength = 7;
const requirements = [
    {
        place: 5,
        letter: 'r'
    },
    {
        place: 7,
        letter: 'a'
    }
];
///////////////////////////

const fs = require('fs');
const dictionaryFile = fs.readFileSync('./words_alpha.txt');
const dictionaryAsArray = dictionaryFile.toString().split('\r\n');

const fitsOneRequirement = ({word, place, letter}) => word[place-1] === letter;

const fitsAllRequirements = (word, requirementsArray) => {
    if (requirementsArray.length === 0) {
        return true;
    }
    if (fitsOneRequirement({word, ...requirementsArray[0]})) {
        return fitsAllRequirements(word, requirementsArray.slice(1));
    }
};

const filteredDictionary = dictionaryAsArray.filter(word => word.length === wordLength && fitsAllRequirements(word, requirements));
console.log(filteredDictionary);
