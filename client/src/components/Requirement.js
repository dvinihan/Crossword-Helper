import React from 'react';

export class Requirement extends React.Component {
	constructor () {
		super();
		this.state = {
			place: '',
			letter: ''
		}
		this.setPlace = this.setPlace.bind(this);
		this.setLetter = this.setLetter.bind(this);
		this.setLetterRequirements = this.setLetterRequirements.bind(this);
	}

	setPlace (e) {
		this.setState({place: e.target.value});
		this.setLetterRequirements();
	}

	setLetter (e) {
		this.setState({letter: e.target.value});
		this.setLetterRequirements();
	}

	setLetterRequirements () {
		this.props.setLetterRequirements(
			this.state.place,
			this.state.letter,
			this.props.index
		);
	}

	render () {
		const { index } = this.props;

		return (
			<div>
				<div>Letter Requirement #{index + 1}</div>
				<div>Place:</div>
				<input className="place-input" onChange={this.setPlace} />
				<div>Letter:</div>
				<input className="letter-input" onChange={this.setLetter} />
			</div>
		);
	}
};
