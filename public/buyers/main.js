window.name="NG_DEFER_BOOTSTRAP!",require.config({paths:{angular:"/vendor/angular/angular",angularAnimate:"/vendor/angular-animate/angular-animate",angularCookies:"/vendor/angular-cookies/angular-cookies",angularResource:"/vendor/angular-resource/angular-resource",angularRoute:"/vendor/angular-route/angular-route",angularSanitize:"/vendor/angular-sanitize/angular-sanitize",angularTouch:"/vendor/angular-touch/angular-touch",jquery:"/vendor/jquery/dist/jquery.min",lodash:"/vendor/lodash/dist/lodash.min",socketIoClient:"/vendor/socket.io-client/socket.io.min"},shim:{angular:{exports:"angular"},angularAnimate:["angular"],angularCookies:["angular"],angularResource:["angular"],angularRoute:["angular"],angularSanitize:["angular"],angularTouch:["angular"]},priority:["lodash","angular"]}),require(["lodash","jquery","angular","app","routes","bootstrap"],function(a,n,r,e){r.element(document.getElementsByTagName("html")[0]);r.element().ready(function(){r.resumeBootstrap([e.name])})});