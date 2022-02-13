import React from "react";

class SearchBar extends React.Component {

    state = { term : '' };

    // Arrow function guarantees that 'this' referes to SearchBar and not the function
    onFormSubmit = event => {
        event.preventDefault();

        // use 'this.props' for classes rather than only 'props'
        this.props.onSubmit(this.state.term);
    }

    // onInputChange is a callback function so no 'onInputChange()' --> convention name: On Input Change
    // onChange --> special property like onClick or onSubmit
    // alternative: onChange={(e) => function()}
	render() {
		return (
			<div className="ui segment ">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
                        <label >Image search</label>
						<input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term : e.target.value })}
                        />
					</div>
				</form>
			</div>
		);
	}
    // Do not store data inside the DOM but in the React component intead --> Controlled components
}

export default SearchBar;

