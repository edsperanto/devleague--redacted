module.exports = function(req, res, next) {
	let redacted = ['selfie', 'yummers', 'outchea', 'bruh', 'doge', 'cilantro', 'bae', 'swag', 'yolo'];
	let newspeak = ['self-portrait', 'delicious', 'are out here', 'wow', 'pug', 'soap', 'loved one', 'style', 'carpe diem'];
	function replacer(redacted, newspeak) {
		for(let i = 0; i < redacted.length; i++) {
			req.body.split(redacted[i]).join(newspeak[i]);
		}
	}
	replacer(redacted, newspeak);
	next();
}
