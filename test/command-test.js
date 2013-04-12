var vows = require('vows'),
	assert = require('assert'),
	exists = require('../exists');

exports.exists = vows.describe('Test Exists').addBatch({
	'Standard Arguments': {
		topic: function () {
			var self = this;
			exists('node', function (results) {
				self.callback(null, results);
			});
		},

		'does command exist': function (topic) {
			assert.equal(topic.node, true);
		}
	},

	'Array Arguments': {
		topic: function () {
			var self = this;
			exists(['node'], function (results) {
				self.callback(null, results);
			});
		},

		'does command exist': function (topic) {
			assert.equal(topic.node, true);
		}
	},

	'Bad Command': {
		topic: function () {
			var self = this;
			exists('__this_is_a_fake_command__', function (results) {
				self.callback(null, results);
			});
		},

		'does command not exist': function (topic) {
			assert.equal(topic.__this_is_a_fake_command__, false);
		}
	}
});