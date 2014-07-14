// --------------------------------------------------
// NEXTGEN LEADS - CORPORATE - GULP CONFIG
// --------------------------------------------------

var srcPath = 'src',
	distPath = 'dist',
	appPath = '/apps/corporate',
	exports = {
		default: [
			'watch',
			'nodemon'
		],
		minifyHtml: {
			src: srcPath + appPath + '/views/**/*.html',
			dest: distPath + appPath + '/'
		},
		less: {
			src: [
				srcPath + '/assets/less/**/*'
			],
			dest: distPath + '/assets/css'
		},
		nodemon: {
			app: srcPath + appPath + '/server.js',
			ignore: [
				srcPath + appPath + '/**/*',
				srcPath + appPath + '/dist/**/*',
				srcPath + appPath + '/view/**/*'
			]
		}
	};

exports.watch = [{
	src: exports.minifyHtml.src,
	task: ['minifyHtml']
}, {
	src: exports.less.src,
	task: ['less']
}];

// Exports
module.exports = exports;