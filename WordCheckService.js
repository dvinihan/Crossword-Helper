class WordCheckService {
	constructor (word) {
		this.word = word;
	}

	fitsLength (length) {
		return this.word.length === length;
	}

	fitsLetterRequirements (letterRequirements) {
		if (letterRequirements.length === 0) {
			return true;
		}

		if (this.hasSingleLetterMatch(letterRequirements[0])) {
			return this.fitsLetterRequirements(letterRequirements.slice(1));
		}
	};

	hasSingleLetterMatch ({ place, letter }) {
		return this.word[place - 1] === letter;
	}
}

module.exports = WordCheckService;
