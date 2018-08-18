(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-view name=\"content\"></ui-view>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(token) {
        this.token = token;
        this.title = 'learning-app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/fesm5/ncstate-sat-popover.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.states */ "./src/app/app.states.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_contents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contents/dashboard/dashboard.component */ "./src/app/components/contents/dashboard/dashboard.component.ts");
/* harmony import */ var _components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_forms_recover_recover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/forms/recover/recover.component */ "./src/app/components/forms/recover/recover.component.ts");
/* harmony import */ var _components_forms_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forms/password-reset/password-reset.component */ "./src/app/components/forms/password-reset/password-reset.component.ts");
/* harmony import */ var _components_header_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/nav/nav.component */ "./src/app/components/header/nav/nav.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// INSTALLED MODULES



//PROJECT IMPORTS









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_contents_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_forms_recover_recover_component__WEBPACK_IMPORTED_MODULE_12__["RecoverComponent"],
                _components_forms_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_13__["PasswordResetComponent"],
                _components_header_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__["NavComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouterModule"].forRoot(_app_states__WEBPACK_IMPORTED_MODULE_7__["APP_STATES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_5__["SatPopoverModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var _utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/layouts.utils */ "./src/app/utils/layouts.utils.ts");
/* harmony import */ var _components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");
/* harmony import */ var _components_forms_recover_recover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forms/recover/recover.component */ "./src/app/components/forms/recover/recover.component.ts");
/* harmony import */ var _components_forms_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/password-reset/password-reset.component */ "./src/app/components/forms/password-reset/password-reset.component.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");






var HOME_STATE = [
    {
        name: 'home',
        url: '/',
        views: Object(_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]),
    }
];
var LOGIN_STATE = [
    {
        name: 'login',
        url: '/login',
        views: Object(_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]),
    }
];
var RECOVER_STATE = [
    {
        name: 'recover',
        url: '/recover',
        views: Object(_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_components_forms_recover_recover_component__WEBPACK_IMPORTED_MODULE_2__["RecoverComponent"]),
    }
];
var PASSWORD_RESET_STATE = [
    {
        name: 'password-reset',
        url: '/password-reset?token=',
        views: Object(_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(_components_forms_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_3__["PasswordResetComponent"]),
        resolve: [
            {
                token: 'reset',
                deps: [_uirouter_core__WEBPACK_IMPORTED_MODULE_4__["Transition"]],
                resolveFn: function (trans) { return null; }
            }
        ]
    }
];
var APP_STATES = {
    otherwise: '/',
    states: [].concat(HOME_STATE, LOGIN_STATE, RECOVER_STATE, PASSWORD_RESET_STATE)
};


/***/ }),

/***/ "./src/app/components/contents/dashboard/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/contents/dashboard/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contents/dashboard/dashboard.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/contents/dashboard/dashboard.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contents/dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/contents/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.authService.authenticate();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/contents/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/contents/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* .ng-invalid:not(form){\r\n    border-left: 5px solid;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border-color: #dd4b39;\r\n}\r\n\r\n.ng-valid:not(form){\r\n    border-left: 5px solid;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border-color: green;\r\n} */\r\n"

/***/ }),

/***/ "./src/app/components/forms/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrap\">  \n<app-header ></app-header>\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"form-content col-sm-4 mt-4\">\n        \n        <h3 class=\"text-center my-4\">LOGIN</h3>\n        <flash-messages></flash-messages>\n        <div class=\"col-sm-12\">\n          <form #loginForm=ngForm (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"form.email\" email required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Password\" [(ngModel)]=\"form.password\" name=\"password\" required>\n            </div> \n            <!-- <div class=\"input-group mb-3\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"my-search\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\" id=\"my-search\"><i class=\"fa fa-filter\"></i></span>\n              </div>\n            </div> -->\n            <div class=\"form-group mt-4\">\n              <a uiSref=\"recover\" class=\"float-right mt-2\">Forgot password?</a>\n              <button type=\"submit\" class=\"btn btn-primary btn-flat\" [disabled]=\"!loginForm.valid\">Login</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/forms/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, stateService, token, flash) {
        this.authService = authService;
        this.stateService = stateService;
        this.token = token;
        this.flash = flash;
        this.form = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.statusEvent = new events__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.token.get()) {
            this.stateService.go('home');
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var credits = { "email": this.form.email, "password": this.form.password };
        this.authService.loginUser(credits).
            subscribe(function (response) {
            _this.token.handle(response['access_token']);
            _this.statusEvent.emit('true');
            _this.stateService.go('home');
        }, function (error) {
            _this.flash.show(error.error.error, {});
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "statusEvent", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/forms/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/forms/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _node_modules_angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/password-reset/password-reset.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/password-reset/password-reset.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrap\">  \n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"form-content col-sm-4 mt-4\">\n          \n          <h3 class=\"text-center my-4\">RESET PASSWORD</h3>\n          \n          <div class=\"col-sm-12\">\n            <form #resetPasswordForm=ngForm (ngSubmit)=\"onSubmit()\">\n              \n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Password\" [(ngModel)]=\"form.password\" name=\"password\" required>\n              </div> \n              <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Confirm password\" name=\"confirm_password\" [(ngModel)]=\"form.password_confirmation\" required>\n                </div>\n              <div class=\"form-group mt-4\">\n                <button type=\"submit\" class=\"btn btn-primary btn-flat\" [disabled]=\"!resetPasswordForm.valid\">Change password</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/forms/password-reset/password-reset.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forms/password-reset/password-reset.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/password-reset/password-reset.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/password-reset/password-reset.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(state, http) {
        this.state = state;
        this.http = http;
        this.form = { reset_token: this.state.params.token };
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent.prototype.onSubmit = function () {
        console.log(this.form);
        this.http.changePassword(this.form)
            .subscribe(function (response) {
            localStorage.removeItem('reset_token');
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/components/forms/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.scss */ "./src/app/components/forms/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/recover/recover.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/forms/recover/recover.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrap\">  \n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"form-content col-sm-4 mt-4\">\n        \n        <h3 class=\"text-center my-4\">RECOVER ACCOUNT</h3>\n        \n        <div class=\"col-sm-12\">\n          <form #recoveryForm=ngForm (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"form.email\" email required>\n            </div>            \n            <div class=\"form-group mt-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-flat btn-sm\" [disabled]=\"!recoveryForm.valid\">\n                <i class=\"fa\" [ngClass]=\"{'fa-spinner fa-spin' : is_saving, 'fa-save': !is_saving}\"></i>\n                {{ button_text }}\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/components/forms/recover/recover.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/forms/recover/recover.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/recover/recover.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/forms/recover/recover.component.ts ***!
  \***************************************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoverComponent = /** @class */ (function () {
    function RecoverComponent(http, state) {
        this.http = http;
        this.state = state;
        this.form = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.is_saving = false;
        this.button_text = 'Send password reset link';
    }
    RecoverComponent.prototype.ngOnInit = function () {
    };
    RecoverComponent.prototype.onSubmit = function () {
        var _this = this;
        this.changeStatus();
        this.http.recoverAccount(this.form)
            .subscribe(function (response) {
            console.log(response['data']);
            _this.changeStatus();
        }, function (error) {
            _this.changeStatus();
        });
    };
    RecoverComponent.prototype.changeStatus = function () {
        if (!this.is_saving) {
            this.is_saving = true;
            this.button_text = 'Sending email';
            return;
        }
        this.is_saving = false;
        this.button_text = 'Send password reset link';
    };
    RecoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recover',
            template: __webpack_require__(/*! ./recover.component.html */ "./src/app/components/forms/recover/recover.component.html"),
            styles: [__webpack_require__(/*! ./recover.component.scss */ "./src/app/components/forms/recover/recover.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], RecoverComponent);
    return RecoverComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            \n\n        </div>\n    </div>\n  </div>\n</header>\n<nav class=\"navbar nav-inverse\">\n  <div class=\"container\">\n      <img class=\"img-fluid\" src=\"app/assets/img/logo.png\" alt=\"\">\n  </div>\n</nav>\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, token, stateService) {
        this.auth = auth;
        this.token = token;
        this.stateService = stateService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/nav/nav.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/header/nav/nav.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-responsive\" aria-controls=\"nav-responsive\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"nav-responsive\">\n    <ul *ngIf=\"is_logged_in\" class=\"navbar-nav ml-auto\">\n      \n        <li class=\"nav-item\">                        \n          <a class=\"nav-link\" href=\"#\">Students</a>\n        </li>\n        <li class=\"nav-item\">                        \n          <a class=\"nav-link\" href=\"#\">Class</a>\n        </li>\n        <li class=\"nav-item\">                        \n          <a class=\"nav-link\" href=\"#\">Reading Materials</a>\n        </li>\n        <li class=\"nav-item\">                        \n          <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Log-out</a>\n        </li>\n      </ul>        \n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/nav/nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/header/nav/nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 0 1rem; }\n"

/***/ }),

/***/ "./src/app/components/header/nav/nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/header/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(token, stateService, auth) {
        this.token = token;
        this.stateService = stateService;
        this.auth = auth;
        this.is_logged_in = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.is_logged_in = this.token.is_valid();
    };
    NavComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logoutUser()
            .subscribe(function () {
            _this.token.remove();
            _this.is_logged_in = false;
            _this.stateService.go('login');
        }, function (error) { console.log(error); });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/header/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/header/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"],
            _node_modules_uirouter_core__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/constants/urls.ts":
/*!***********************************!*\
  !*** ./src/app/constants/urls.ts ***!
  \***********************************/
/*! exports provided: LOGIN_USER, LOGOUT_USER, RECOVER_ACCOUNT, RESET_PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOVER_ACCOUNT", function() { return RECOVER_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function() { return RESET_PASSWORD; });
var LOGIN_USER = function () { return 'api/login'; };
var LOGOUT_USER = function () { return 'api/logout'; };
var RECOVER_ACCOUNT = function () { return 'api/recover'; };
var RESET_PASSWORD = function () { return 'api/reset-password'; };


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/urls */ "./src/app/constants/urls.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(stateService, http, tokenService) {
        this.stateService = stateService;
        this.http = http;
        this.tokenService = tokenService;
    }
    AuthenticationService.prototype.authenticate = function () {
        if (!this.tokenService.is_valid()) {
            this.stateService.go('login');
        }
    };
    AuthenticationService.prototype.loginUser = function (credentials) {
        return this.http.post(Object(_constants_urls__WEBPACK_IMPORTED_MODULE_3__["LOGIN_USER"])(), credentials);
    };
    AuthenticationService.prototype.logoutUser = function () {
        var token = { 'token': this.tokenService.get() };
        return this.http.post(Object(_constants_urls__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_USER"])(), token);
    };
    AuthenticationService.prototype.recoverAccount = function (email) {
        return this.http.post(Object(_constants_urls__WEBPACK_IMPORTED_MODULE_3__["RECOVER_ACCOUNT"])(), email);
    };
    AuthenticationService.prototype.changePassword = function (data) {
        return this.http.post(Object(_constants_urls__WEBPACK_IMPORTED_MODULE_3__["RESET_PASSWORD"])(), data);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenService = /** @class */ (function () {
    function TokenService() {
        this.token_name = 'token';
    }
    TokenService.prototype.set = function (token) {
        localStorage.setItem(this.token_name, token);
    };
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem(this.token_name);
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem(this.token_name);
    };
    TokenService.prototype.is_valid = function () {
        return this.get() !== null;
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/utils/layouts.utils.ts":
/*!****************************************!*\
  !*** ./src/app/utils/layouts.utils.ts ***!
  \****************************************/
/*! exports provided: ContentOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
function ContentOnly(content) {
    return {
        content: content
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Laragon\www\learn\public\ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map