/* REQUIRES */

var child_process = require('child_process');

/* MODULE */

module.exports = {

	// The path to the Sox audio toolkit executable
	soxPath: 'sox',

	/*  
	 * combineSamples -> function (string, string, string, function)
	 *
	 * Will combine `file_1`, `file_2` into a wav file called
	 * `outName` and normalize the result using the sox audio
	 * library. Upon completion, `next` callback is called with
	 * an `error` argument.
	 *
	 */

	combineSamples: function (file_1, file_2, outName, next) {

		var command = this.soxPath +
		              ' ' + '-m' +
		              ' ' + file_1 +
		              ' ' + file_2 +
		              ' ' + outName + ' norm';

		child_process.exec(command, function (err, stdout, stderr) {

			next(err);

		});
	}

};