global.args = require('yargs').argv;

var _Envs = {
		Apps: ['nextgenleads'],
		UIs: ['corporate','admin','marketplace']
	},
	Env = {};

Env.Port = process.env.PORT || args.port || 3000;


// Set App
for (var i = _Envs.Apps.length - 1; i >= 0; i--) {
	if( args.app === _Envs.Apps[i] ) {
		Env.Name = _Envs.Apps[i];
		require('../'+_Envs.Apps[i]+'/loader');
	}
}
// Default to first
if( typeof args.app === 'undefined' ) {
	Env.Name = _Envs.Apps[0];
	require('../'+_Envs.Apps[0]+'/loader');
}

// Set UI
for (var i = _Envs.UIs.length - 1; i >= 0; i--) {
	if( args.ui === _Envs.UIs[i] ) {
		Env.UI = _Envs.UIs[i];
	}
}
// Default to first
if( typeof args.ui === 'undefined' ) {
	Env.UI = _Envs.UIs[0];
}

global.Env = Env;
global._Envs = _Envs;