const fetch = require('node-fetch');
const randomstring = require("randomstring");


setInterval(postMessage, 2000);

async function postMessage() {

	const body = random();

	const response = await fetch('https://enb0vptlpxj7d.x.pipedream.net', {
		method: 'post',
		body: JSON.stringify(body),
		headers: {'Content-Type': 'application/json'}
	});

	const json = await response.json();
	console.log(json);
};

function random(){

	return {
		"token": "one-long-verification-token",
		"team_id": "T061EG9R6",
		"api_app_id": "A0PNCHHK2",
		"event": {
			"type": "message",
			"channel": "C024BE91L",
			"user": "U2147483697",
			"text": randomstring.generate(),
			"ts": "1355517523.000005",
			"event_ts": "1355517523.000005",
			"channel_type": "channel"
		},
		"type": "event_callback",
		"authed_teams": [
			"T061EG9R6"
		],
		"event_id": "Ev0PV52K21",
		"event_time": 1355517523
	}
}