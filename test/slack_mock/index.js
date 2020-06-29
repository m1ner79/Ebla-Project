const fetch = require('node-fetch');
console.log("I'm working here");
(async () => {
	const body = {a: 1};
	const response = await fetch('https://en1x1r494oruq.x.pipedream.net/', {
		method: 'post',
		body: JSON.stringify(body),
		headers: {'Content-Type': 'application/json'}
	});
	const json = await response.json();
	console.log(json);
})();