var app = './nextgenleads',
	exports = {
		default: [
			'watch',
			'nodemon'
		],
		minifyHtml: {
			input: app+'/**/*.html',
			output: app+'/dist/'
		},
		browserify: {
			input: [
				app+'/admin/admin.js',
				app+'/corporate/corporate.js',
				app+'/marketplace/marketplace.js'
			],
			output: [
				app+'/dist/admin',
				app+'/dist/corporate',
				app+'/dist/marketplace'
			]
		},
		less: {
			input: [
				app+'/assets/less/**/*',
				'!'+app+'/vendor/**/*',
				'!'+app+'/bower_components/**/*'
			],
			output: app+'/assets/css'
		},
		nodemon: {
			app: app+'/app.js',
			ignore: [
				app+'/**/*',
				app+'/dist/**/*'
			]
		}
	};

exports.watch = [
	{
		src: exports.minifyHtml.input,
		task: ['minifyHtml']
	},
	{
		src: exports.browserify.input,
		task: ['browserify']
	},
	{
		src: exports.less.input,
		task: ['less']
	}
];

// Exports
module.exports = exports;