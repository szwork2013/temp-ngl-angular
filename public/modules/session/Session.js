define(["./module.js"],function(i){i.service("Session",function(){return this.create=function(i,s,e){this.id=i,this.userId=s,this.userRole=e},this.destroy=function(){this.id=null,this.userId=null,this.userRole=null},this})});