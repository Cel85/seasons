import React from 'react';
import ReactDOM from  'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		//only time we do direct assigment to this.state
		this.state = {lat: null, errorMessage: ''};

		window.navigator.geolocation.getCurrentPosition(
			position => {
				//we call setState to update state
				this.setState({lat: position.coords.latitude});
			},
			err => {
				this.setState({errorMessage: err.message})
			}
		);
	}

	//render is requirement
	render() {
		if(this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if(!this.state.errorMessage && this.state.lat){
			return <div>Latitude: {this.state.lat}</div>;
		}

		if(!this.state.errorMessage && !this.state.lat){
			return <div>Loading..</div>;
		}


	}
}

ReactDOM.render(<App />, document.getElementById('root'));