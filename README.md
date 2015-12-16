audio-combiner.js
-----------------

audio-combiner is a simple node.js script that will combine two wav files into one, using the open source **sox** audio toolkit found here: <http://sox.sourceforge.net/>

Note: You must have sox installed on your system for audio-combiner to work. If you're using homebrew on OS X, a simple `brew install sox` will do the trick.

Usage
-----

```javascript

var audioCombiner = require ('./audio-combiner.js');

// If you need to change the path to the sox executable, set the 'soxPath' property on
// audioCombiner.

audioCombiner.soxPath = './sox/sox';

// Then simply call the combineSamples() function with the names of the files and output

var file_1 = './bell.wav';
var file_2 = './explosion.wav';
var outputName = './MyNewSound.wav';

audioCombiner.combineSamples(file_1, file_2, outputName);

```