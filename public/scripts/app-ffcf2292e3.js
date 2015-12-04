!function(){"use strict";angular.module("accountBook",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","pascalprecht.translate"])}(),function(){"use strict";function a(){function a(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=a}angular.module("accountBook").service("webDevTec",a)}(),function(){"use strict";function a(){function a(a){var t=this;t.relativeDate=a(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return t}angular.module("accountBook").directive("acmeNavbar",a)}(),function(){"use strict";function a(){function a(a){this.menu_names=[{name:a.instant("TITLES.LOGIN"),icon:"glyphicon-leaf",url:"login"},{name:a.instant("TITLES.SIGN_UP"),icon:"glyphicon-heart",url:"sign_up"},{name:a.instant("TITLES.RESET_PASSWORD"),icon:"glyphicon-leaf",url:"reset_password"},{name:a.instant("TITLES.RESEND_EMAIL"),icon:"glyphicon-heart",url:"resend_email"}],this.menu_image="assets/images/pig_footprints.gif",this.isSelected=function(a){return this.selected==a},this.mouseEnter=function(a){this.selected=a},this.mouseLeave=function(){this.selected=void 0}}var t={restrict:"C",templateUrl:"app/components/menu/menu.html",controller:a,controllerAs:"menu"};return t}angular.module("accountBook").directive("menuDirective",a)}(),function(){"use strict";function a(a){function t(t,n,e,o){var s,l=a(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(a){l.type(a).pause()["delete"]()}),s=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(a){l.type(a.login).pause()["delete"]()})}),t.$on("$destroy",function(){s()})}function n(a,t){function n(){return e().then(function(){a.info("Activated Contributors View")})}function e(){return t.getContributors(10).then(function(a){return o.contributors=a,o.contributors})}var o=this;o.contributors=[],n()}var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],e}angular.module("accountBook").directive("acmeMalarkey",a),a.$inject=["malarkey"]}(),function(){"use strict";function a(a,t){function n(n){function o(a){return a.data}function s(t){a.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(e+"/contributors?per_page="+n).then(o)["catch"](s)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:e,getContributors:n};return o}angular.module("accountBook").factory("githubContributor",a),a.$inject=["$log","$http"]}(),function(){"use strict";function a(a,t,n){function e(){s(),a(function(){l.classAnimation="rubberBand"},4e3)}function o(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function s(){l.awesomeThings=t.getTec(),angular.forEach(l.awesomeThings,function(a){a.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1447644390420,l.showToastr=o,e()}angular.module("accountBook").controller("MainController",a),a.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function a(){}angular.module("accountBook").controller("SignUpController",a)}(),function(){"use strict";function a(){}angular.module("accountBook").controller("ResetPasswordController",a)}(),function(){"use strict";function a(){}angular.module("accountBook").controller("ResendEmailController",a)}(),function(){"use strict";function a(){}angular.module("accountBook").controller("LoginController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}angular.module("accountBook").run(a),a.$inject=["$log"]}(),function(){"use strict";function a(a,t){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("login",{url:"/login",templateUrl:"app/account/login.html",controller:"LoginController",controllerAs:"login"}).state("sign_up",{url:"/sign_up",templateUrl:"app/account/sign_up.html",controller:"SignUpController",controllerAs:"sign_up"}).state("reset_password",{url:"/reset_password",templateUrl:"app/account/reset_password.html",controller:"ResetPasswordController",controllerAs:"reset_password"}).state("resend_email",{url:"/resend_email",templateUrl:"app/account/resend_email.html",controller:"ResendEmailController",controllerAs:"resend_email"}).state("menu",{url:"/menu",templateUrl:"app/components/menu/menu.html",controller:"MenuController",controllerAs:"menu"}),t.otherwise("/")}angular.module("accountBook").config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("accountBook").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0,a.useStaticFilesLoader({prefix:"assets/i18n/locale-",suffix:".json"}),a.preferredLanguage("ja"),a.fallbackLanguage("en"),a.useMissingTranslationHandlerLog(),a.useLocalStorage(),a.useSanitizeValueStrategy("escapeParameters")}angular.module("accountBook").config(a),a.$inject=["$translateProvider","$logProvider","toastrConfig"]}(),angular.module("accountBook").run(["$templateCache",function(a){a.put("app/account/login.html",'<div class="col-md-3"><div class="menu-directive"></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGIN\' | translate }}</div><div class="panel-body" id="with-background"><form><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" required="" type="email"></div><div class="form-group"><label for="password">{{ \'LABELS.PASSWORD\' | translate }}</label> <input class="form-control" id="password" required="" type="password"></div><div class="checkbox"><label><input type="checkbox"> {{ \'LABELS.REMEMBER_ME\' | translate }}</label></div><button class="btn btn-default" type="submit">{{ \'BUTTONS.LOGIN\' | translate }}</button></form><hr><p><a ui-sref="login">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="login">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),a.put("app/account/resend_email.html",'<div class="col-md-3"><div class="menu-directive"></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.RESEND_EMAIL\' | translate }}</div><div class="panel-body" id="with-background"><form><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" required="" type="email"></div><button class="btn btn-default" type="submit">{{ \'BUTTONS.SEND\' | translate }}</button></form><hr><p><a ui-sref="login">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="login">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),a.put("app/account/reset_password.html",'<div class="col-md-3"><div class="menu-directive"></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.RESET_PASSWORD\' | translate }}</div><div class="panel-body" id="with-background"><form><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" required="" type="email"></div><button class="btn btn-default" type="submit">{{ \'BUTTONS.SEND\' | translate }}</button></form><hr><p><a ui-sref="login">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="login">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),a.put("app/account/sign_up.html",'<div class="col-md-3"><div class="menu-directive"></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.SIGN_UP\' | translate }}</div><div class="panel-body" id="with-background"><form><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" required="" type="email"></div><div class="form-group"><label for="password">{{ \'LABELS.PASSWORD\' | translate }}</label> <input class="form-control" id="password" required="" type="password"></div><div class="form-group"><label for="password_confirmation">{{ \'LABELS.PASSWORD_CONFIRMATION\' | translate }}</label> <input class="form-control" id="password_confirmation" required="" type="password"></div><button class="btn btn-default" type="submit">{{ \'BUTTONS.SIGN_UP\' | translate }}</button></form><hr><p><a ui-sref="login">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="login">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),a.put("app/main/main.html",'<div class="container"><div class="jumbotron text-center"><h1>\'AAAllo, \'Allo!</h1><p class="lead"><img alt="I\'m Yeoman" src="assets/images/yeoman.png"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button class="btn btn-lg btn-success" ng-click="main.showToastr()" type="button">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img alt="{{ awesomeThing.title }}" class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),a.put("app/components/menu/menu.html",'<ul class="list-group"><li class="list-group-item" ng-mouseenter="menu.mouseEnter($index)" ng-mouseleave="menu.mouseLeave($index)" ng-repeat="menu_name in ::menu.menu_names"><a ui-sref="{{::menu_name.url}}"><span class="glyphicon {{::menu_name.icon}}"></span> {{::menu_name.name}}</a> <span ng-show="menu.isSelected($index)"><img class="pull-right" ng-src="{{menu.menu_image}}"></span></li></ul>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default" role="navigation"><div class="navbar-header"><a class="navbar-brand" ui-sref="home"><img src="assets/images/pig.gif"> <span class="brand-name">{{ \'BRAND_NAME\' | translate }}</span> <span class="glyphicon glyphicon-paperclip"></span></a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a ui-sref="home"><span class="glyphicon glyphicon-home"></span> {{ \'TITLES.HOME\' | translate }}</a></li><li><a><span class="glyphicon glyphicon-stats"></span> {{ \'TITLES.DASHBOARD\' | translate }}</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="dropdown"><a aria-haspopup="" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"><span class="glyphicon glyphicon-cog"></span> {{ \'TITLES.SETTINGS\' | translate }} <span class="caret"></span></a><ul class="dropdown-menu"><li><span class="glyphicon glyphicon-tag"></span> カテゴリ</li></ul></li><li><a ui-sref="login"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGIN\' | translate }}</a></li></ul></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-ffcf2292e3.js.map
