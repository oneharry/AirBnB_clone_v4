const request = require('request');

const readyFunc = () => {
	let url = 'http://0.0.0.0:5001/api/v1/places_search/';
	request(url, (err, res, body) => {
		if (err)
			console.log(err);
		if (JSON.parse(body).status == "OK") {
			$('div#api_status').addClass("available");
		} else {
			$('div#api_status').removeClass("available");
		}
	}
}

$(document).ready(readyFun);
