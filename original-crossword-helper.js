let regex = / /;

let dictionary = [];
require('fs').readFileSync('./words_alpha.txt').toString().split('\r\n').forEach(function (line) { dictionary.push(line); })

let filteredDictionary = dictionary.filter(word => {
    if (word.length == 7) {
        if (word[0] == 'i' && word[6] == 'a') {
            return word;
        }

    }


});

console.log(filteredDictionary);
