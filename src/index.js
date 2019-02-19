import React from 'react';
import ReactDOM from  'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		//only time we do direct assigment to this.state
		this.state = {lat: null};

		window.navigator.geolocation.getCurrentPosition(
			position => {
				//we call setState
				this.setState({lat: position.coords.latitude});
			},
			err => console.log(err)
		);
	}

	//render is requirement
	render() {
		return (
			<div>Lattitude: {this.state.lat}</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));