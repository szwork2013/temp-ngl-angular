define(["./module.js"],function(e){e.factory("Flash",function(e){var s=[],n="";return e.$on("$routeChangeSuccess",function(){n=s.shift()||"",currentClass=queueClasses.shift()||""}),{setMessage:function(e){s.push(e)},getMessage:function(){return n}}})});