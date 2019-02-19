import React from 'react';
import ReactDOM from  'react-dom';

class App extends React.Component {
	state = {lat: null, errorMessage: ''};

	componentDidMount(){
		//also, do some API requests
		console.log("component is rendered");

		//data loading goes to didMount method
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			err => this.setState({errorMessage: err.message})
		);
	}

	componentDidUpdate(){
		console.log("component updated and rerendered");
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