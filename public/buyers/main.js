window.name="NG_DEFER_BOOTSTRAP!",require.config({paths:{angular:"/vendor/angular/angular",angularRoute:"/vendor/angular-route/angular-route"},shim:{angular:{exports:"angular"},angularRoute:["angular"]},priority:["angular"]}),require(["angular","app","routes"],function(a,e){"use strict";a.element(document.getElementsByTagName("html")[0]);a.element().ready(function(){a.resumeBootstrap([e.name])})});