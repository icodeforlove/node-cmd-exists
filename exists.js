var async = require('async'),
	spawn = require('child_process').spawn;

module.exports = function () {
	var commands,
		callback,
		args = Array.prototype.slice.call(arguments);

	if (Array.isArray(args[0]))  {
		commands = arguments[0];
		callback = arguments[1];
	} else {
		commands = args.slice(0,-1);
		callback = args[args.length-1];
	}

	var response = {};

	async.each(
		commands,
		function (command, callback) {
			var child = spawn('type', [command]);

			child.on('close', function (code) {
				response[command] = !code;
				callback();
			});
		},
		function () {
			callback(response);
		}
	);
};