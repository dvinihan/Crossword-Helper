import React from 'react';
import { Requirement } from './Requirement';

export default class App extends React.Component {
	constructor () {
		super();
		this.state = {
			wordLength: 0,
			letterRequirements: []
		}
		this.setLetterRequirements = this.setLetterRequirements.bind(this);
		this.submit = this.submit.bind(this);
		this.newRequirement = this.newRequirement.bind(this);
		this.setWordLength = this.setWordLength.bind(this);
	}

	setLetterRequirements (place, letter, index) {
		const letterRequirements = this.state.letterRequirements;
		letterRequirements[index].place = place;
		letterRequirements[index].letter = letter;

		this.setState({ letterRequirements });
	}

	setWordLength (e) {
		this.setState({ wordLength: e.target.value })
	}

	newRequirement () {
		this.setState({ letterRequirements: [...this.state.letterRequirements, { place: '', letter: '' }] });
	}

	submit () {
		const options = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ length: this.state.wordLength, letters: this.state.letterRequirements })
		};

		console.log(options.body)

		fetch('/', options)
			.then(response => {

			})
			.catch(error => {

			});
	}

	render () {
		return (
			<div>
				<div>Word Length</div>
				<input className="word-length-input" onChange={this.setWordLength} />
				<br />

				<div>Letter Requirements</div>
				{this.state.letterRequirements.map((requirement, index) => {
					return <Requirement key={index} {...requirement} index={index} setLetterRequirements={this.setLetterRequirements} />;
				})}
				<br />

				<button onClick={this.newRequirement}>Add Letter Requirement</button>
				<br />

				<button onClick={this.submit}>Submit</button>
			</div>
		);
	}
};
