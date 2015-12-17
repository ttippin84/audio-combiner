/* REQUIRES */

var child_process = require('child_process');

/* MODULE */

module.exports = {

	// The path to the Sox audio toolkit executable
	soxPath: 'sox',

	/*  
	 * combineSamples -> function (string, string, string)
	 *
	 * Will combine `file_1`, `file_2` into a wav file called
	 * `outName` and normalize the result using the sox audio
	 * library.
	 *
	 */

	combineSamples: function (file_1, file_2, outName) {

		var command = this.soxPath +
		              ' ' + '-m' +
		              ' ' + file_1 +
		              ' ' + file_2 +
		              ' ' + outName + ' norm';

		child_process.exec(command, function (err, stdout, stderr) {

			if (err) {
				throw new Error ('`audio-combiner` process `sox` failed with error: ' + err.stack);
			}
			else {
				console.log ('2 wav files combined in ' + outName);
			}

		});
	}

};