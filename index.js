const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

const WordCheckService = require('./WordCheckService');
const { length, letters } = require('./word-requirements');

const dictionaryFile = fs.readFileSync('./words_alpha.txt');
const dictionaryAsArray = dictionaryFile.toString().split('\r\n');

const passesCheck = word => {
    const wordCheck = new WordCheckService(word);
    return wordCheck.fitsLength(length) && wordCheck.fitsLetterRequirements(letters);
};

const filteredDictionary = dictionaryAsArray.filter(word => passesCheck(word));
console.log(filteredDictionary);

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body)
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

