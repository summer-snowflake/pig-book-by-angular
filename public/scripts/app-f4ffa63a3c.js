!function(){"use strict";angular.module("accountBook",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","pascalprecht.translate","LocalStorageModule"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("accountBook").service("webDevTec",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",require:"^acmeNavbar",scope:{creationDate:"="},controller:"NavbarController",controllerAs:"vm",bindToController:!0};return e}function a(e,a,s,n,t,r){var o=this;n.$watch(function(){return s.path()},function(){o.login_status=e.getLoginStatus(),e.getCurrentUser().then(function(e){o.current_user=e})}),o.logout=function(){a.remove("access_token"),o.login_status=e.getLoginStatus(),t.success(r.instant("MESSAGES.LOGOUT")),s.path("/")}}angular.module("accountBook").controller("NavbarController",a).directive("acmeNavbar",e),a.$inject=["IndexFactory","localStorageService","$location","$scope","toastr","$translate"]}(),function(){"use strict";function e(){var e={templateUrl:"app/components/menu/menu.html",controller:"MenuController",controllerAs:"menu",bindToController:!0};return e}function a(){var e=this;e.menu_image="assets/images/pig_footprints.gif",e.isSelected=function(a){return e.selected==a},e.mouseEnter=function(a){e.selected=a},e.mouseLeave=function(){e.selected=void 0}}angular.module("accountBook").controller("MenuController",a).directive("menuDirective",e)}(),function(){"use strict";function e(e){function a(a,s,n,t){var r,o=e(s[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});s.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){o.type(e).pause()["delete"]()}),r=a.$watch("vm.contributors",function(){angular.forEach(t.contributors,function(e){o.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){r()})}function s(e,a){function s(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return a.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}var t=this;t.contributors=[],s()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:s,controllerAs:"vm"};return s.$inject=["$log","githubContributor"],n}angular.module("accountBook").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,a){function s(s){function t(e){return e.data}function r(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return s||(s=30),a.get(n+"/contributors?per_page="+s).then(t)["catch"](r)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",t={apiHost:n,getContributors:s};return t}angular.module("accountBook").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(){}angular.module("accountBook").controller("MypageController",e)}(),function(){"use strict";function e(e,a,s,n,t){function r(){l(),e(function(){i.classAnimation="rubberBand"},4e3)}function o(){s.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function l(){i.awesomeThings=a.getTec(),angular.forEach(i.awesomeThings,function(e){e.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1447644390420,i.showToastr=o,"ok"==n.search().registed&&(n.url("/login"),s.success(t.instant("MESSAGES.REGISTED"))),r()}angular.module("accountBook").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr","$location","$translate"]}(),function(){"use strict";function e(e){var a=this;e.getUsers().then(function(e){a.users=e.users})}angular.module("accountBook").controller("AdminController",e),e.$inject=["IndexFactory"]}(),function(){"use strict";function e(e,a,s){var n=this;n.clearErrors=function(){n.errors=""},n.submit=function(){var e={email:n.email,password:n.password,password_confirmation:n.password_confirmation};s.postEmailUserRegistrations(e)["catch"](function(e){n.errors=e.error_messages})}}angular.module("accountBook").controller("SignUpController",e),e.$inject=["$http","$location","IndexFactory"]}(),function(){"use strict";function e(e){var a=this;a.submit=function(){var s={email:a.email};e.postResetPassword(s)["catch"](function(e){a.errors=e.error_messages})}}angular.module("accountBook").controller("ResetPasswordController",e),e.$inject=["IndexFactory"]}(),function(){"use strict";function e(e,a){var s=this;s.submit=function(){var n={email:s.email};e.postResendEmail(n)["catch"](function(e){"Not Found"==e.error_messages?s.errors=[a.instant("MESSAGES.NOT_FOUND_EMAIL")]:s.errors=e.error_messages})}}angular.module("accountBook").controller("ResendEmailController",e),e.$inject=["IndexFactory","$translate"]}(),function(){"use strict";function e(e){var a=this;a.submit=function(){var s={email:a.email,password:a.password};e.postSession(s)["catch"](function(e){a.errors=e.error_messages})},a.clearErrors=function(){a.errors=""}}angular.module("accountBook").controller("LoginController",e),e.$inject=["IndexFactory"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("accountBook").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"admin"}).state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("login",{url:"/login",templateUrl:"app/account/login.html",controller:"LoginController",controllerAs:"login"}).state("sign_up",{url:"/sign_up",templateUrl:"app/account/sign_up.html",controller:"SignUpController",controllerAs:"sign_up"}).state("reset_password",{url:"/reset_password",templateUrl:"app/account/reset_password.html",controller:"ResetPasswordController",controllerAs:"reset_password"}).state("resend_email",{url:"/resend_email",templateUrl:"app/account/resend_email.html",controller:"ResendEmailController",controllerAs:"resend_email"}).state("menu",{url:"/menu",templateUrl:"app/components/menu/menu.html",controller:"MenuController",controllerAs:"menu"}).state("mypage",{url:"/mypage",templateUrl:"app/user/mypage.html",controller:"MypageController",controllerAs:"mypage"}),a.otherwise("/")}angular.module("accountBook").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e,a,s,n,t,r){var o="localhost"==a.host()?"http://localhost:3001/":"";return{getLoginStatus:function(){var e=n.get("access_token");return"undefined"!=typeof e&&null!=e},getCurrentUser:function(){var a=s.defer(),t=n.get("access_token");if(this.getLoginStatus()){var r={headers:{Authorization:"Token token="+t}};e.get(o+"user/",r).success(function(e){a.resolve(e)}).error(function(e){a.reject(e)})}return a.promise},postEmailUserRegistrations:function(n){var l=s.defer();return e.post(o+"email_user/registrations",n).success(function(e){l.resolve(e),r.success(t.instant("MESSAGES.SEND_MAIL")),a.path("/")}).error(function(e){"undefined"!=typeof e&&l.reject(e)}),l.promise},postSession:function(l){var i=s.defer();return e.post(o+"session",l).success(function(e){i.resolve(e),n.set("access_token",e.access_token),r.success(t.instant("MESSAGES.LOGIN")),a.path("/")}).error(function(e){i.reject(e)}),i.promise},postResendEmail:function(n){var l=s.defer();return e.patch(o+"email_user/registrations/recreate",n).success(function(e){l.resolve(e),r.success(t.instant("MESSAGES.SEND_MAIL")),a.path("/")}).error(function(e){l.reject(e)}),l.promise},postResetPassword:function(n){var l=s.defer();return e.post(o+"email_user/passwords/send_mail",n).success(function(e){l.resolve(e),r.success(t.instant("MESSAGES.SEND_MAIL")),a.path("/")}).error(function(e){l.reject(e)}),l.promise},getUsers:function(){var a=s.defer(),t=n.get("access_token");if(this.getLoginStatus()){var r={headers:{Authorization:"Token token="+t}};e.get(o+"admin/users",r).success(function(e){a.resolve(e)}).error(function(e){a.reject(e)})}return a.promise}}}angular.module("accountBook").factory("IndexFactory",e),e.$inject=["$http","$location","$q","localStorageService","$translate","toastr"]}(),function(){"use strict";angular.module("accountBook").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,a,s){a.debugEnabled(!0),s.allowHtml=!0,s.timeOut=3e3,s.positionClass="toast-top-right",s.preventDuplicates=!1,s.progressBar=!1,e.useStaticFilesLoader({prefix:"assets/i18n/locale-",suffix:".json"}),e.preferredLanguage("ja"),e.fallbackLanguage("en"),e.useMissingTranslationHandlerLog(),e.useLocalStorage(),e.useSanitizeValueStrategy("escapeParameters")}angular.module("accountBook").config(e),e.$inject=["$translateProvider","$logProvider","toastrConfig"]}(),angular.module("accountBook").run(["$templateCache",function(e){e.put("app/account/login.html",'<div class="col-md-3"><menu-directive></menu-directive></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGIN\' | translate }}</div><div class="panel-body" id="with-background"><div class="alert alert-danger" ng-show="login.errors" role="alert"><button class="close" data-dismiss="alert" ng-click="login.clearErrors()" type="button">×</button><ul ng-repeat="error in login.errors"><li>{{error}}</li></ul></div><form name="loginForm" ng-submit="login.submit()" novalidate=""><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" name="email" ng-maxlength="100" ng-model="login.email" required="" type="email"> <span class="errors" ng-messages="loginForm.email.$error" ng-show="loginForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.EMAIL\' | translate }}</div><div ng-message="email"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.EMAIL\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.EMAIL\' | translate }}</div></span></div><div class="form-group"><label for="password">{{ \'LABELS.PASSWORD\' | translate }}</label> <input class="form-control" id="password" name="password" ng-maxlength="72" ng-minlength="4" ng-model="login.password" required="" type="password"> <span class="errors" ng-messages="loginForm.password.$error" ng-show="loginForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.PASSWORD\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.PASSWORD\' | translate }}</div><div ng-message="minlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MINLENGTH.PASSWORD\' | translate }}</div></span></div><div class="checkbox"><label><input type="checkbox"> {{ \'LABELS.REMEMBER_ME\' | translate }}</label></div><button class="btn btn-default" ng-disabled="loginForm.$submitted &amp;&amp; loginForm.$invalid" type="submit">{{ \'BUTTONS.LOGIN\' | translate }}</button></form><hr><p><a ui-sref="reset_password">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="resend_email">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),e.put("app/account/resend_email.html",'<div class="col-md-3"><menu-directive></menu-directive></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.RESEND_EMAIL\' | translate }}</div><div class="panel-body" id="with-background"><div class="alert alert-danger" ng-show="resend_email.errors" role="alert"><button class="close" data-dismiss="alert" ng-click="resend_email.clearErrors()" type="button">×</button><ul ng-repeat="error in resend_email.errors"><li>{{error}}</li></ul></div><form name="resendEmailForm" ng-submit="resend_email.submit()" novalidate=""><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" name="email" ng-maxlength="100" ng-model="resend_email.email" required="" type="email"> <span class="errors" ng-messages="resendEmailForm.email.$error" ng-show="resendEmailForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.EMAIL\' | translate }}</div><div ng-message="email"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.EMAIL\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.EMAIL\' | translate }}</div></span></div><button class="btn btn-default" ng-disabled="resendEmailForm.$submitted &amp;&amp; resendEmailForm.$invalid" type="submit">{{ \'BUTTONS.SEND\' | translate }}</button></form><hr><p><a ui-sref="reset_password">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p></div></div></div>'),e.put("app/account/reset_password.html",'<div class="col-md-3"><menu-directive></menu-directive></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.RESET_PASSWORD\' | translate }}</div><div class="panel-body" id="with-background"><div class="alert alert-danger" ng-show="reset_password.errors" role="alert"><button class="close" data-dismiss="alert" ng-click="reset_password.clearErrors()" type="button">×</button><ul ng-repeat="error in reset_password.errors"><li>{{error}}</li></ul></div><form name="resetPasswordForm" ng-submit="reset_password.submit()" novalidate=""><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" name="email" ng-maxlength="100" ng-model="reset_password.email" required="" type="email"> <span class="errors" ng-messages="resetPasswordForm.email.$error" ng-show="resetPasswordForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.EMAIL\' | translate }}</div><div ng-message="email"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.EMAIL\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.EMAIL\' | translate }}</div></span></div><button class="btn btn-default" ng-disabled="resetPasswordForm.$submitted &amp;&amp; resetPasswordForm.$invalid" type="submit">{{ \'BUTTONS.SEND\' | translate }}</button></form><hr><p><a ui-sref="resend_email">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),e.put("app/account/sign_up.html",'<div class="col-md-3"><menu-directive></menu-directive></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.SIGN_UP\' | translate }}</div><div class="panel-body" id="with-background"><div class="alert alert-danger" ng-show="sign_up.errors" role="alert"><button class="close" data-dismiss="alert" ng-click="sign_up.clearErrors()" type="button">×</button><ul ng-repeat="error in sign_up.errors"><li>{{error}}</li></ul></div><form name="signUpForm" ng-submit="sign_up.submit()" novalidate=""><div class="form-group"><label for="email">{{ \'LABELS.EMAIL\' | translate }}</label> <input autofocus="" class="form-control" id="email" name="email" ng-maxlength="100" ng-model="sign_up.email" required="" type="email"> <span class="errors" ng-messages="signUpForm.email.$error" ng-show="signUpForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.EMAIL\' | translate }}</div><div ng-message="email"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.EMAIL\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.EMAIL\' | translate }}</div></span></div><div class="form-group"><label for="password">{{ \'LABELS.PASSWORD\' | translate }}</label> <input class="form-control" id="password" name="password" ng-maxlength="72" ng-minlength="4" ng-model="sign_up.password" required="" type="password"> <span class="errors" ng-messages="signUpForm.password.$error" ng-show="signUpForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.PASSWORD\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.PASSWORD\' | translate }}</div><div ng-message="minlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MINLENGTH.PASSWORD\' | translate }}</div></span></div><div class="form-group"><label for="password_confirmation">{{ \'LABELS.PASSWORD_CONFIRMATION\' | translate }}</label> <input class="form-control" id="password_confirmation" name="password_confirmation" ng-maxlength="72" ng-minlength="4" ng-model="sign_up.password_confirmation" required="" type="password"> <span class="errors" ng-messages="signUpForm.password_confirmation.$error" ng-show="signUpForm.$submitted"><div ng-message="required"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.REQUIRED.PASSWORD\' | translate }}</div><div ng-message="maxlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MAXLENGTH.PASSWORD\' | translate }}</div><div ng-message="minlength"><span class="glyphicon glyphicon-alert"></span> {{ \'ERRORS.MINLENGTH.PASSWORD\' | translate }}</div></span></div><button class="btn btn-default" ng-disabled="signUpForm.$submitted &amp;&amp; signUpForm.$invalid" type="submit">{{ \'BUTTONS.SIGN_UP\' | translate }}</button></form><hr><p><a ui-sref="reset_password">{{ \'LINKS.FORGOT_PASSWORD\' | translate }}</a></p><p><a ui-sref="resend_email">{{ \'LINKS.RESEND_EMAIL\' | translate }}</a></p></div></div></div>'),e.put("app/admin/admin.html",'<div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.ADMIN\' | translate }}</div><div class="panel-body" id="with-background"><table class="table"><tr><th></th><th>ID</th><th></th><th></th><th>{{ \'COLUMNS.EMAIL\' | translate }}</th><th>{{ \'COLUMNS.LAST_LOGIN_TIME\' | translate }}</th></tr><tr ng-repeat="user in admin.users"><td><span class="red glyphicon glyphicon-king" ng-show="user.admin"></span></td><td>{{ user.id }}</td><td><span class="label" ng-class="user.status_label_name">{{ user.status }}</span></td><td><span class="label" ng-class="user.type_label_name">{{ user.type }}</span></td><td>{{ user.email }}</td><td>{{ user.last_sign_in_at }}</td></tr></table></div></div>'),e.put("app/user/mypage.html",'<div class="col-md-3"><div class="menu-directive" menu-data="mypage.menus"></div></div><div class="col-md-9"><div class="panel panel-default"><div class="panel-heading"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.MYPAGE\' | translate }}</div><div class="panel-body" id="with-background"></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div class="jumbotron text-center"><h1>\'AAAllo, \'Allo!</h1><p class="lead"><img alt="I\'m Yeoman" src="assets/images/yeoman.png"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button class="btn btn-lg btn-success" ng-click="main.showToastr()" type="button">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img alt="{{ awesomeThing.title }}" class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default" role="navigation"><div class="navbar-header"><a class="navbar-brand" ui-sref="home"><img src="assets/images/pig.gif"> <span class="brand-name">{{ \'BRAND_NAME\' | translate }}</span> <span class="glyphicon glyphicon-paperclip"></span></a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav"><li><a ui-sref="home"><span class="glyphicon glyphicon-home"></span> {{ \'TITLES.HOME\' | translate }}</a></li><li><a><span class="glyphicon glyphicon-stats"></span> {{ \'TITLES.DASHBOARD\' | translate }}</a></li></ul><ul class="nav navbar-nav navbar-right"><li ng-show="vm.login_status &amp;&amp; vm.current_user.admin"><a ui-sref="admin"><span class="glyphicon glyphicon-king"></span> {{ \'TITLES.ADMIN\' | translate }}</a></li><li class="dropdown"><a aria-haspopup="" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"><span class="glyphicon glyphicon-cog"></span> {{ \'TITLES.SETTINGS\' | translate }} <span class="caret"></span></a><ul class="dropdown-menu"><li><span class="glyphicon glyphicon-tag"></span> カテゴリ</li></ul></li><li ng-hide="vm.login_status"><a ui-sref="login"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGIN\' | translate }}</a></li><li ng-show="vm.login_status"><a ui-sref="mypage"><span class="glyphicon glyphicon-user"></span> {{ vm.current_user.email }}</a></li><li ng-show="vm.login_status"><a ng-click="vm.logout()" ui-sref="home"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGOUT\' | translate }}</a></li></ul></div></nav>'),e.put("app/components/menu/menu.html",'<ul class="list-group"><li class="list-group-item" ng-mouseenter="menu.mouseEnter(1)" ng-mouseleave="menu.mouseLeave()"><a ui-sref="login"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.LOGIN\' | translate }}</a> <span ng-show="menu.isSelected(1)"><img class="pull-right" ng-src="{{menu.menu_image}}"></span></li><li class="list-group-item" ng-mouseenter="menu.mouseEnter(2)" ng-mouseleave="menu.mouseLeave()"><a ui-sref="sign_up"><span class="glyphicon glyphicon-heart"></span> {{ \'TITLES.SIGN_UP\' | translate }}</a> <span ng-show="menu.isSelected(2)"><img class="pull-right" ng-src="{{menu.menu_image}}"></span></li><li class="list-group-item" ng-mouseenter="menu.mouseEnter(3)" ng-mouseleave="menu.mouseLeave()"><a ui-sref="reset_password"><span class="glyphicon glyphicon-leaf"></span> {{ \'TITLES.RESET_PASSWORD\' | translate }}</a> <span ng-show="menu.isSelected(3)"><img class="pull-right" ng-src="{{menu.menu_image}}"></span></li><li class="list-group-item" ng-mouseenter="menu.mouseEnter(4)" ng-mouseleave="menu.mouseLeave()"><a ui-sref="resend_email"><span class="glyphicon glyphicon-heart"></span> {{ \'TITLES.RESEND_EMAIL\' | translate }}</a> <span ng-show="menu.isSelected(4)"><img class="pull-right" ng-src="{{menu.menu_image}}"></span></li></ul>')}]);
//# sourceMappingURL=../maps/scripts/app-f4ffa63a3c.js.map
