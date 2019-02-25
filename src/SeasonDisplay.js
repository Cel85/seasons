import React from 'react';

const SeasonDisplay = (props) => {

	const lat = props.lat;
	var message = '';
	if(lat>0){
		message ='BRR ZIMA JE';
	}
	else {
		message ='LJETO JE :)';
	}
	return (
		<div>{message}</div>
	);
}

export default SeasonDisplay;