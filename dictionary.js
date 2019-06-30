const fs = require('fs');
const { length, letters } = require('./word-requirements');
const WordCheckService = require('./WordCheckService');

const dictionaryFile = fs.readFileSync('./words_alpha.txt');
const dictionaryAsArray = dictionaryFile.toString().split('\r\n');

const passesCheck = word => {
    const wordCheck = new WordCheckService(word);
    return wordCheck.fitsLength(length) && wordCheck.fitsLetterRequirements(letters);
};

const filteredDictionary = dictionaryAsArray.filter(word => passesCheck(word));

console.log(filteredDictionary);
