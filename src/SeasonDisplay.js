import React from 'react';

const gateSeason = (lat, month) => {
	if(month > 2 && month < 9){
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {

	const lat = props.lat;
	var  month =   new Date().getMonth();
	const season = gateSeason(lat, month);;

	return (
		<div>{season}</div>
	);
}

export default SeasonDisplay;