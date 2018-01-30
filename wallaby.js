module.exports = function (wallaby) {
	return {
		files: [
			'server.js',
			'public/**/*'
		],

		tests: [
			'test/**/test-*.js'
		],

		testFramework: 'mocha',

		env: {
			type: 'node',
			runner: 'node'
		},

		workers: {
			initial: 1,
			regular: 1
			// restart: true
		},

		debug: true
	};
};