/* REQUIRES */

var child_process = require('child_process');

/* CONSTANTS */

var soxPath = 'sox';

/* MODULE */

module.exports = {

	/*  
	 * combineSamples -> function (string, string, string)
	 *
	 * Will combine `file_1`, `file_2` into a wav file called
	 * `outName` and normalize the result using the sox audio
	 * library.
	 *
	 */

	combineSamples: function (file_1, file_2, outName) {

		var command = soxPath +
		              ' ' + '-m' +
		              ' ' + file_1 +
		              ' ' + file_2 +
		              ' ' + outName + ' norm';

		child_process.exec(command, function (err, stdout, stderr) {

			if (err) {
				console.log (err.stack);
				throw new Error ('`audio-combiner` process `sox` failed with error: ' + err.stack);
			}
			else {
				console.log (stdout);
			}

		});
	}

};