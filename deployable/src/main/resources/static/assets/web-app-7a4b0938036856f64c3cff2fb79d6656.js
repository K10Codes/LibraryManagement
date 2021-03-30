"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("web-app/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/app",["exports","ember-resolver","ember-load-initializers","web-app/config/environment"],(function(e,t,n,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return u(this,n)}}function u(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(u,Ember.Application)
var n=a(u)
function u(){var e
o(this,u)
for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c]
return f(l(e=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),f(l(e),"podModulePrefix",r.default.podModulePrefix),f(l(e),"Resolver",t.default),e}return u}()
e.default=s,(0,n.default)(s,r.default.modulePrefix)})),define("web-app/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/components/all-books/component",["exports","web-app/interfaces/button","@ember-decorators/object"],(function(e,t,n){var r,o,i,a,u
function l(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=m(e)
if(t){var o=m(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return d(this,n)}}function d(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(r=Ember.inject.service,o=(0,n.observes)("view"),i=Ember._action,u=v((a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(a,Ember.Component)
var n,r,o,i=b(a)
function a(){var e
c(this,a)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return l(y(e=i.call.apply(i,[this].concat(n))),"ajaxRequest",u,y(e)),e}return n=a,(r=[{key:"init",value:function(){s(m(a.prototype),"init",this).call(this),this.setButton()}},{key:"setButton",value:function(){"available"===this.view&&this.set("button",new t.default("Borrow","borrow")),"availableCopies"===this.view&&(this.set("additionalFields",[{header:"Copies",value:"copies"}]),this.set("button",new t.default("Borrow","borrow")))}},{key:"borrow",value:function(e){var t=this,n={type:"POST",url:"/api/library/books/availableCopies/"+e+"/borrow",success:function(){t.set("messageData",{success:!0,message:"Book issued successfully."}),t.callback&&t.sendAction("callback")},fail:function(e){t.set("messageData",{success:!1,message:e.responseJSON.message})}}
this.ajaxRequest.makeAjaxRequest(n)}}])&&f(n.prototype,r),o&&f(n,o),a}()).prototype,"ajaxRequest",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v(a.prototype,"setButton",[o],Object.getOwnPropertyDescriptor(a.prototype,"setButton"),a.prototype),v(a.prototype,"borrow",[i],Object.getOwnPropertyDescriptor(a.prototype,"borrow"),a.prototype),a)
e.default=h})),define("web-app/components/all-books/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"U/4WhbUM",block:'[[[1,[28,[35,0],null,[["messageData"],[[33,1]]]]],[1,"\\n"],[41,[33,3,["length"]],[[[1,"  "],[1,[28,[35,4],null,[["additionalFields","button","books","buttonAction"],[[33,5],[33,6],[33,3],[28,[37,7],[[30,0],"borrow"],null]]]]],[1,"\\n"]],[]],null]],[],false,["status-bar","messageData","if","books","book-listing","additionalFields","button","action"]]',moduleName:"web-app/components/all-books/template.hbs",isStrictMode:!1})
e.default=t})),define("web-app/components/book-listing/component",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return a(this,n)}}function a(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(s,Ember.Component)
var a,l,c,f=i(s)
function s(){return t(this,s),f.apply(this,arguments)}return a=s,(l=[{key:"init",value:function(){r(u(s.prototype),"init",this).call(this)}}])&&n(a.prototype,l),c&&n(a,c),s}()
e.default=l})),define("web-app/components/book-listing/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"k8XjY1gc",block:'[[[10,"table"],[14,1,"bookList"],[14,0,"table table-striped"],[12],[1,"\\n  "],[10,"thead"],[12],[1,"\\n  "],[10,"th"],[12],[1,"S.No."],[13],[1,"\\n  "],[10,"th"],[12],[1,"Name"],[13],[1,"\\n  "],[10,"th"],[12],[1,"Author"],[13],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[33,2]],null]],null],null,[[[1,"    "],[10,"th"],[12],[1,[30,1,["header"]]],[13],[1,"\\n"]],[1]],null],[1,"  "],[13],[1,"\\n  "],[10,"tbody"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[33,3]],null]],null],null,[[[1,"    "],[10,"tr"],[12],[1,"\\n      "],[10,"td"],[12],[1,[28,[35,4],[[30,3]],null]],[13],[1,"\\n      "],[10,"td"],[12],[1,[30,2,["name"]]],[13],[1,"\\n      "],[10,"td"],[12],[1,[30,2,["author"]]],[13],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[33,2]],null]],null],null,[[[1,"        "],[10,"td"],[12],[1,[28,[35,5],[[30,2],[30,4,["value"]]],null]],[13],[1,"\\n"]],[4]],null],[41,[33,7],[[[1,"        "],[10,"td"],[12],[10,"button"],[14,0,"btn btn-info"],[15,1,[33,7,["id"]]],[15,"onclick",[28,[37,8],[[30,0],[33,9],[30,2,["id"]]],null]],[12],[1,[33,7,["text"]]],[13],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n"]],[2,3]],null],[1,"  "],[13],[1,"\\n"],[13]],["field","book","index","field"],false,["each","-track-array","additionalFields","books","increment","get-property","if","button","action","buttonAction"]]',moduleName:"web-app/components/book-listing/template.hbs",isStrictMode:!1})
e.default=t})),define("web-app/components/status-bar/component",["exports","jquery"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({statusBarId:"status-bar",showNotification:function(e,n){var r=this;(0,t.default)("#".concat(this.statusBarId)).removeClass("alert-success alert-danger").addClass(n).show(),this.set("message",e),Ember.run.later((function(){(0,t.default)("#".concat(r.statusBarId))&&(0,t.default)("#".concat(r.statusBarId)).hide()}),2500)},messageDataChangeHandler:Ember.observer("messageData",(function(){var e="alert-info"
e=this.messageData.success?"alert-success":"alert-danger",this.showNotification(this.messageData.message,e)}))})
e.default=n})),define("web-app/components/status-bar/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"AOVvqeZ4",block:'[[[10,0],[15,1,[36,0]],[14,0,"alert"],[14,5,"display:none"],[12],[1,"\\n  "],[10,"strong"],[12],[1,[34,1]],[13],[1,"\\n"],[13]],[],false,["statusBarId","message"]]',moduleName:"web-app/components/status-bar/template.hbs",isStrictMode:!1})
e.default=t})),define("web-app/components/user-books/component",["exports","web-app/interfaces/button"],(function(e,t){var n,r,o,i
function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t)
if(r){var o=Object.getOwnPropertyDescriptor(r,t)
return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m=(n=Ember.inject.service,r=Ember._action,i=y((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(y,Ember.Component)
var n,r,o,p=s(y)
function y(){var e
u(this,y)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return a(b(e=p.call.apply(p,[this].concat(n))),"ajaxRequest",i,b(e)),e}return n=y,(r=[{key:"init",value:function(){c(d(y.prototype),"init",this).call(this),this.set("button",new t.default("Return","return"))}},{key:"return",value:function(e){var t=this,n={type:"POST",url:"/api/library/books/"+e+"/return",success:function(e){t.set("messageData",{success:!0,message:"Book returned successfully."}),t.sendAction("callback")},fail:function(e){t.set("messageData",{success:!1,message:e.responseJSON.message})}}
this.ajaxRequest.makeAjaxRequest(n)}}])&&l(n.prototype,r),o&&l(n,o),y}()).prototype,"ajaxRequest",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y(o.prototype,"return",[r],Object.getOwnPropertyDescriptor(o.prototype,"return"),o.prototype),o)
e.default=m})),define("web-app/components/user-books/template",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1Pp4wBHM",block:'[[[1,[28,[35,0],null,[["messageData"],[[33,1]]]]],[1,"\\n"],[41,[33,3,["length"]],[[[1,"  "],[1,[28,[35,4],null,[["button","books","buttonAction"],[[33,5],[33,3],[28,[37,6],[[30,0],"return"],null]]]]],[1,"\\n"]],[]],null]],[],false,["status-bar","messageData","if","books","book-listing","button","action"]]',moduleName:"web-app/components/user-books/template.hbs",isStrictMode:!1})
e.default=t})),define("web-app/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/helpers/app-version",["exports","web-app/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("web-app/helpers/get-property",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Helper.helper((function(e){return e[0][e[1]]}))
e.default=t})),define("web-app/helpers/increment",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Helper.helper((function(e){return e[0]+1}))
e.default=t})),define("web-app/helpers/loc",["exports","@ember/string/helpers/loc"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"loc",{enumerable:!0,get:function(){return t.loc}})})),define("web-app/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-app/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-app/helpers/route-action",["exports","ember-route-action-helper/helpers/route-action"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("web-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","web-app/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("web-app/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("web-app/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("web-app/initializers/export-application-global",["exports","web-app/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("web-app/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("web-app/interfaces/button",["exports"],(function(e){function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=function e(n,r){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t(this,"text",void 0),t(this,"id",void 0),this.text=n,this.id=r}})),define("web-app/router",["exports","web-app/config/environment"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=u(e)
if(t){var o=u(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(u,Ember.Router)
var i=o(u)
function u(){var e
n(this,u)
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
return l(a(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),l(a(e),"rootURL",t.default.rootURL),e}return u}()
e.default=c,c.map((function(){this.route("library"),this.route("test-route")}))})),define("web-app/routes/index",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=a(e)
if(t){var o=a(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(c,Ember.Route)
var i,a,u,l=o(c)
function c(){return t(this,c),l.apply(this,arguments)}return i=c,(a=[{key:"beforeModel",value:function(e){this.transitionTo("library")}}])&&n(i.prototype,a),u&&n(i,u),c}()
e.default=u})),define("web-app/routes/library",["exports","jquery"],(function(e,t){var n,r,o,i,a
function u(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=d(e)
if(t){var o=d(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return p(this,n)}}function p(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(n=Ember.inject.service,r=Ember._action,o=Ember._action,a=m((i=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(p,Ember.Route)
var n,r,o,i=s(p)
function p(){var e
l(this,p)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return u(b(e=i.call.apply(i,[this].concat(n))),"ajaxRequest",a,b(e)),y(b(e),"allBooks",!0),e}return n=p,(r=[{key:"init",value:function(){this._super.apply(this,arguments),this.set("allBooks",!0)}},{key:"allBooks",get:function(){return this.allBooks}},{key:"setupController",value:function(e){e.set("allBooks",!0),this.fetchAllBooks()}},{key:"fetchAllBooks",value:function(){var e=this
this.controller.set("books",[]),this.controller.set("view","")
var t={type:"GET",url:"/api/library/books/availableCopies",success:function(t){e.controller.set("allBooks",!0),e.controller.set("books",t),e.controller.set("view","availableCopies")}}
this.ajaxRequest.makeAjaxRequest(t)}},{key:"fetchUserBooks",value:function(){var e=this
this.controller.set("books",[])
var t={type:"GET",url:"/api/library/books/issued",success:function(t){e.controller.set("allBooks",!1),e.controller.set("books",t)}}
this.ajaxRequest.makeAjaxRequest(t)}},{key:"loadAllBooks",value:function(){this.fetchAllBooks(),(0,t.default)("#userBooks").removeClass("btn-primary"),(0,t.default)("#userBooks").addClass("btn-outline-primary"),(0,t.default)("#allBooks").removeClass("btn-outline-primary"),(0,t.default)("#allBooks").addClass("btn-primary")}},{key:"loadUserBooks",value:function(){this.fetchUserBooks(),this.controller.set("allBooks",!1),(0,t.default)("#allBooks").removeClass("btn-primary"),(0,t.default)("#allBooks").addClass("btn-outline-primary"),(0,t.default)("#userBooks").removeClass("btn-outline-primary"),(0,t.default)("#userBooks").addClass("btn-primary")}}])&&c(n.prototype,r),o&&c(n,o),p}()).prototype,"ajaxRequest",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m(i.prototype,"loadAllBooks",[r],Object.getOwnPropertyDescriptor(i.prototype,"loadAllBooks"),i.prototype),m(i.prototype,"loadUserBooks",[o],Object.getOwnPropertyDescriptor(i.prototype,"loadUserBooks"),i.prototype),i)
e.default=v}))
define("web-app/routes/test-route",["exports"],(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=i(e)
if(t){var a=i(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return o(this,n)}}function o(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)})(i,Ember.Route)
var o=r(i)
function i(){return t(this,i),o.apply(this,arguments)}return i}()
e.default=a})),define("web-app/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/services/ajax-request",["exports","jquery"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Service.extend({makeAjaxRequest:function(e){t.default.ajax({type:e.type,url:"http://localhost:8080"+e.url,data:e.data,contentType:"application/json",context:this}).done((function(t){e.hasOwnProperty("success")&&Ember.run((function(){e.success(t)}))})).fail((function(t){e.hasOwnProperty("fail")&&Ember.run((function(){e.fail(t)}))}))}})
e.default=n})),define("web-app/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("web-app/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"3YQXVJyl",block:'[[[1,[28,[35,0],["Library Management"],null]],[1,"\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"web-app/templates/application.hbs",isStrictMode:!1})
e.default=t})),define("web-app/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"eI+1cFjA",block:'[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',moduleName:"web-app/templates/index.hbs",isStrictMode:!1})
e.default=t})),define("web-app/templates/library",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"leg9R9As",block:'[[[10,0],[14,0,"wrapper"],[12],[1,"\\n  "],[10,0],[12],[1,"\\n    "],[10,"button"],[14,1,"allBooks"],[14,0,"btn btn-primary"],[15,"onclick",[28,[37,0],["loadAllBooks"],null]],[14,4,"button"],[12],[1,"All Books"],[13],[1,"\\n    "],[10,"button"],[14,1,"userBooks"],[14,0,"btn btn-outline-primary"],[15,"onclick",[28,[37,0],["loadUserBooks"],null]],[14,4,"button"],[12],[1,"My Books"],[13],[1,"\\n  "],[13],[1,"\\n"],[41,[33,2],[[[1,"    "],[1,[28,[35,3],null,[["books","view","callback"],[[33,4],[33,5],"loadAllBooks"]]]],[1,"\\n"]],[]],[[[1,"    "],[1,[28,[35,6],null,[["books","callback"],[[33,4],"loadUserBooks"]]]],[1,"\\n"]],[]]],[13]],[],false,["route-action","if","allBooks","all-books","books","view","user-books"]]',moduleName:"web-app/templates/library.hbs",isStrictMode:!1})
e.default=t})),define("web-app/templates/test-route",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"eWcCL1mx",block:'[[[1,[28,[35,0],["TestRoute"],null]],[1,"\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"web-app/templates/test-route.hbs",isStrictMode:!1})
e.default=t})),define("web-app/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("web-app/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("web-app/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("web-app/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("web-app/config/environment",[],(function(){try{var e="web-app/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("web-app/app").default.create({name:"web-app",version:"0.0.0+5ee6e77f"})
