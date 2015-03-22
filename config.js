"use strict";

var path = require('path');

module.exports = {
	device: {
		initDelay: 500
	},
	detector: {
		emitMinInterval: 500,
		deviceRead: 200,

		settingsFile: path.normalize(__dirname + '/run/runtime/settings.txt'),
		logFile: path.normalize(__dirname + '/run/runtime/log.txt')
	}
};
