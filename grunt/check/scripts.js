'use strict';

module.exports = function (grunt, CFG) {
	var jsFiles = {
		expand: true,
		cwd: CFG.SRC,
		src: [
			'**/*.{js,jsx}',
			'!bower_components/**/*'
		]
	};

	this

		.eslint({
			files: [ jsFiles ]
		});
};