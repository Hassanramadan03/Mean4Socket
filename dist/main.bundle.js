webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts"
	],
	"./pages/default/admin/admin.module": [
		"../../../../../src/app/theme/pages/default/admin/admin.module.ts",
		"admin.module"
	],
	"./pages/default/feed/feed.module": [
		"../../../../../src/app/theme/pages/default/feed/feed.module.ts",
		"common",
		"feed.module"
	],
	"./pages/default/messages/messages.module": [
		"../../../../../src/app/theme/pages/default/messages/messages.module.ts",
		"common",
		"messages.module"
	],
	"./pages/default/profile/profile.module": [
		"../../../../../src/app/theme/pages/default/profile/profile.module.ts",
		"common",
		"profile.module"
	],
	"./pages/default/settings/settings.module": [
		"../../../../../src/app/theme/pages/default/settings/settings.module.ts",
		"settings.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_directives/href-prevent-default.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/unwrap-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnwrapTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_2__auth_logout_logout_component__["a" /* LogoutComponent */] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\r\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\r\n\t<div class=\"m-blockui\">\r\n\t\t<span>\r\n\t\t\tPlease wait...\r\n\t\t</span>\r\n\t\t<span>\r\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Page -->\r\n<app-quick-sidebar></app-quick-sidebar>\r\n<app-scroll-top></app-scroll-top>\r\n<!--<app-tooltips></app-tooltips>-->\r\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__ = __webpack_require__("../../../../../src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_api_url_service__ = __webpack_require__("../../../../../src/app/shared/api-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_utilities_service__ = __webpack_require__("../../../../../src/app/shared/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__theme_theme_component__["a" /* ThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__theme_layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__theme_theme_routing_module__["a" /* ThemeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__["AuthModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_10__shared_api_url_service__["a" /* ApiUrlService */], __WEBPACK_IMPORTED_MODULE_11__shared_utilities_service__["a" /* UtilitiesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"m-alert m-alert--outline alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\r\n\t<span>{{message.text}}</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/auth/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/auth/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(_router, _authService, _alert) {
        this._router = _router;
        this._authService = _authService;
        this._alert = _alert;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (state.url === 'login' && this._authService.isLoggedIn()) {
            this._router.navigate(['/']);
        }
        return this.checkLoggedIn(state.url);
    };
    AuthGuard.prototype.checkLoggedIn = function (url) {
        if (this._authService.isLoggedIn()) {
            return true;
        }
        this._alert.error("Please login to access this page.");
        this._router.navigate(['login']);
        if (this._authService.isLoggedIn()) {
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_helpers/login-custom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCustom; });
var LoginCustom = (function () {
    function LoginCustom() {
    }
    LoginCustom.handleSignInFormSubmit = function () {
        $('#m_login_signin_submit').click(function (e) {
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.displaySignUpForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signin');
        login.addClass('m-login--signup');
        login.find('.m-login__signup').animateClass('flipInX animated');
    };
    LoginCustom.displaySignInForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--forget-password');
        login.removeClass('m-login--signup');
        try {
            $('form').data('validator').resetForm();
        }
        catch (e) {
        }
        login.addClass('m-login--signin');
        login.find('.m-login__signin').animateClass('flipInX animated');
    };
    LoginCustom.displayForgetPasswordForm = function () {
        var login = $('#m_login');
        login.removeClass('m-login--signin');
        login.removeClass('m-login--signup');
        login.addClass('m-login--forget-password');
        login.find('.m-login__forget-password').animateClass('flipInX animated');
    };
    LoginCustom.handleFormSwitch = function () {
        $('#m_login_forget_password').click(function (e) {
            e.preventDefault();
            LoginCustom.displayForgetPasswordForm();
        });
        $('#m_login_forget_password_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
        $('#m_login_signup').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignUpForm();
        });
        $('#m_login_signup_cancel').click(function (e) {
            e.preventDefault();
            LoginCustom.displaySignInForm();
        });
    };
    LoginCustom.handleSignUpFormSubmit = function () {
        $('#m_login_signup_submit').click(function (e) {
            var btn = $(this);
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    fullname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        required: true
                    },
                    agree: {
                        required: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.handleForgetPasswordFormSubmit = function () {
        $('#m_login_forget_password_submit').click(function (e) {
            var btn = $(this);
            var form = $(this).closest('form');
            form.validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                }
            });
            if (!form.valid()) {
                e.preventDefault();
                return;
            }
        });
    };
    LoginCustom.init = function () {
        LoginCustom.handleFormSwitch();
        LoginCustom.handleSignInFormSubmit();
        LoginCustom.handleSignUpFormSubmit();
        LoginCustom.handleForgetPasswordFormSubmit();
    };
    return LoginCustom;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        _router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_api_url_service__ = __webpack_require__("../../../../../src/app/shared/api-url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.loginUrl = apiUrlService.getApiUrl().login;
    }
    AuthenticationService.prototype.getCurentUser = function () {
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            return JSON.parse(localStorage.getItem('currentUser')).user;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        try {
            var theUser = JSON.parse(localStorage.getItem('currentUser'));
            if (theUser) {
                this.currentUser = theUser;
            }
        }
        catch (error) {
            return false;
        }
        return !!this.currentUser;
    };
    AuthenticationService.prototype.login = function (User) {
        var oUser = {
            body: User,
            url: this.apiUrlService.getApiUrl().login,
            headers: { 'Content-Type': 'application/json' },
            behavior: 'POST'
        };
        return this.http.post(this.apiUrlService.getApiUrl().genericMethod, oUser)
            .map(function (response) {
            console.log(response.json());
            if (response.json().status === "success") {
                localStorage.setItem('currentUser', JSON.stringify(response.json().data));
            }
            return response.json();
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__shared_api_url_service__["a" /* ApiUrlService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/auth/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_url_service__ = __webpack_require__("../../../../../src/app/shared/api-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { User } from "../_models/index";
var UserService = (function () {
    function UserService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.registerUrl = apiUrlService.getApiUrl().register;
    }
    UserService.prototype.verify = function () {
        // return this.http.get('/api/verify', this.jwt()).map((response: Response) => response.json());
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.register = function (User) {
        var oUser = {
            body: User,
            url: this.apiUrlService.getApiUrl().register,
            headers: { 'Content-Type': 'application/json' },
            behavior: 'POST'
        };
        if (oUser.headers)
            return this.http.post(this.apiUrlService.getApiUrl().genericMethod, oUser)
                .map(function (response) { return response.json(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_api_url_service__["a" /* ApiUrlService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__ = __webpack_require__("../../../../../src/app/auth/_helpers/login-custom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthComponent = (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        // this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* Helpers */].setLoading(false);
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].init();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        console.log('logging in');
        this.loading = true;
        this._authService.login(this.model)
            .subscribe(function (data) {
            console.log(data);
            if (data.status === 'success') {
                _this._router.navigate(['/feed']);
                // this._router.navigate([this.returnUrl]);
            }
            else {
                _this.model = {};
                _this.showAlert('alertSignin');
                _this._alertService.error("Maybe You Forget Email Or Password..!");
                _this.loading = false;
            }
        }, function (error) {
            _this.model = {};
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.register({ username: this.model.username, pass: this.model.pass, name: this.model.name, email: this.model.email })
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.showAlert('alertSignin');
                _this._alertService.success('Thank you. To complete your registration please check your email.', true);
                _this.loading = false;
                __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
                _this.model = {};
                _this._router.navigate(['/feed']);
            }
            else if (data.msg2) {
                var Err = '';
                var errArr = [];
                for (var i = 0; i < data.msg2.length; i++) {
                    Err += data.msg2[i].msg + '\n';
                }
                _this.model = {};
                _this.showAlert('alertSignup');
                _this._alertService.error(Err);
                _this.loading = false;
            }
            else {
                _this.model = {};
                _this.showAlert('alertSignup');
                _this._alertService.error("This Email or Username Is Already Existed..!");
                _this.loading = false;
            }
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email)
            .subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_7__helpers_login_custom__["a" /* LoginCustom */].displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_6__directives_alert_component__["a" /* AlertComponent */]);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('alertSignin', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertSignin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('alertSignup', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertSignup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('alertForgotPass', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewContainerRef */])
    ], AuthComponent.prototype, "alertForgotPass", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/auth/templates/login-2.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__ = __webpack_require__("../../../../../src/app/auth/auth-routing.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__ = __webpack_require__("../../../../../src/app/auth/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/auth/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alert_service__ = __webpack_require__("../../../../../src/app/auth/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/auth/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { fakeBackendProvider } from "./_helpers/index";
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth_routing_routing__["a" /* AuthRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["a" /* MockBackend */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(true);
        // reset login status
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/auth/logout/logout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/templates/login-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--singin m-login--2 m-login-2--skin-3\" id=\"m_login\" style=\"background-image: url(./assets/app/media/img//bg/bg-2.jpg);\">\r\n\r\n    <div class=\"m-grid__item m-grid__item--fluid\tm-login__wrapper\">\r\n        <div class=\"m-login__container\">\r\n            <div class=\"m-login__logo\">\r\n                <a href=\"#\">\r\n                    <img src=\"./assets/app/media/img//logos/logo-1.png\">\r\n                </a>\r\n            </div>\r\n            <div class=\"m-login__signin\">\r\n                <div class=\"m-login__head\">\r\n                    <h3 class=\"m-login__title\">\r\n                        Welcome, Please Sign In to start ...\r\n                    </h3>\r\n                </div>\r\n                <form (ngSubmit)=\"f.valid && signin()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\"\r\n                      autocomplete=\"off\">\r\n\r\n\r\n                     <!--fake fields are a workaround for chrome autofill getting the wrong fields-->\r\n                    <!--<input style=\"display:none\" type=\"text\" name=\"email\" placeholder=\"Email\"/>-->\r\n                    <!--<input style=\"display:none\" type=\"password\" name=\"password\" placeholder=\"password\" />-->\r\n\r\n\r\n                    <ng-template #alertSignin></ng-template>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"text\" placeholder=\"username\" name=\"username\"\r\n                               [(ngModel)]=\"model.username\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input m-login__form-input--last\" type=\"password\"\r\n                               placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" >\r\n                    </div>\r\n\r\n                    <div class=\"row m-login__form-sub\">\r\n\r\n                        <!--<div class=\"col m&#45;&#45;align-left m-login__form-left\">-->\r\n                            <!--<label class=\"m-checkbox  m-checkbox&#45;&#45;light\">-->\r\n                                <!--<input type=\"checkbox\" name=\"remember\" [(ngModel)]=\"model.remember\" #remember=\"ngModel\">-->\r\n                                <!--Remember me-->\r\n                                <!--<span></span>-->\r\n                            <!--</label>-->\r\n                        <!--</div>-->\r\n\r\n                        <div class=\"col m--align-right m-login__form-right\">\r\n                            <a href=\"javascript:;\" id=\"m_login_forget_password\" class=\"m-link\">\r\n                                Forget Password ?\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-login__form-action\">\r\n                        <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\"\r\n                                id=\"m_login_signin_submit\"\r\n                                class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary\">\r\n                            Sign In\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"m-login__signup\">\r\n                <div class=\"m-login__head\">\r\n                    <h3 class=\"m-login__title\">\r\n                        Sign Up\r\n                    </h3>\r\n                    <div class=\"m-login__desc\">\r\n                        Enter your details to create your account:\r\n                    </div>\r\n                </div>\r\n                <form (ngSubmit)=\"f.form.valid && signup()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                    <ng-template #alertSignup></ng-template>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"text\" placeholder=\"name\" name=\"name\"\r\n                               [(ngModel)]=\"model.name\" #name=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"text\" placeholder=\"username\" name=\"username\"\r\n                               [(ngModel)]=\"model.username\" #username=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\"\r\n                               [(ngModel)]=\"model.email\" #email=\"ngModel\" >\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"password\" placeholder=\"Password\" name=\"pass\"\r\n                               [(ngModel)]=\"model.pass\" #pass=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input m-login__form-input--last\" type=\"password\"\r\n                               placeholder=\"Confirm Password\" name=\"rpassword\" [(ngModel)]=\"model.rpassword\"\r\n                               #rpassword=\"ngModel\">\r\n                    </div>\r\n                    <div class=\"row form-group m-form__group m-login__form-sub\">\r\n                        <div class=\"col m--align-left\">\r\n                            <label class=\"m-checkbox m-checkbox--light\">\r\n                                <input type=\"checkbox\" name=\"agree\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">\r\n                                I Agree the\r\n                                <a href=\"#\" class=\"m-link m-link--focus\">\r\n                                    terms and conditions\r\n                                </a>\r\n                                .\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"m-form__help\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-login__form-action\">\r\n                        <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\"\r\n                                id=\"m_login_signup_submit\"\r\n                                class=\"btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary\">\r\n                            Sign Up\r\n                        </button>\r\n                        &nbsp;&nbsp;\r\n                        <button [disabled]=\"loading\" id=\"m_login_signup_cancel\"\r\n                                class=\"btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn\">\r\n                            Cancel\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"m-login__forget-password\">\r\n                <div class=\"m-login__head\">\r\n                    <h3 class=\"m-login__title\">\r\n                        Forgotten Password ?\r\n                    </h3>\r\n                    <div class=\"m-login__desc\">\r\n                        Enter your email to reset your password:\r\n                    </div>\r\n                </div>\r\n                <form (ngSubmit)=\"f.form.valid && forgotPass()\" #f=\"ngForm\" class=\"m-login__form m-form\" action=\"\">\r\n                    <ng-template #alertForgotPass></ng-template>\r\n                    <div class=\"form-group m-form__group\">\r\n                        <input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\"\r\n                               [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"m_email\" autocomplete=\"off\">\r\n                    </div>\r\n                    <div class=\"m-login__form-action\">\r\n                        <button [disabled]=\"loading\" [ngClass]=\"{'m-loader m-loader--right m-loader--light': loading}\"\r\n                                id=\"m_login_forget_password_submit\"\r\n                                class=\"btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary\">\r\n                            Request\r\n                        </button>\r\n                        &nbsp;&nbsp;\r\n                        <button [disabled]=\"loading\" id=\"m_login_forget_password_cancel\"\r\n                                class=\"btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn\">\r\n                            Cancel\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"m-login__account\">\r\n\t\t\t\t<span class=\"m-login__account-msg\">\r\n\t\t\t\t\tDon't have an account yet ?\r\n\t\t\t\t</span>\r\n                &nbsp;&nbsp;\r\n                <a href=\"javascript:;\" id=\"m_login_signup\" (click)='model={}' class=\"m-link m-link&#45;&#45;light m-login__account-link\">\r\n                    Sign Up\r\n                </a>\r\n             </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](src, function (k, s) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__breadcrumbs');
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__(ul).length === 0) {
            ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).find('li:not(:first-child)').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](breadcrumbs, function (k, v) {
            var li = __WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<span/>').addClass('m-nav__link-text').text(v.text)));
            __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = __WEBPACK_IMPORTED_MODULE_0_jquery__('body');
        if (enable) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).addClass('m-page--loading-non-block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "../../../../../src/app/shared/api-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiUrlService = (function () {
    function ApiUrlService() {
        this.baseUrl = 'http://localhost:8080/genericMiddleware/';
        this.serverUrl = 'http://41.39.63.112:3000/api/v1/';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            this.authToken = currentUser.authToken;
            this.options = {
                'Content-Type': 'application/json',
                'X-Auth-Token': currentUser.authToken,
                'X-User-Id': currentUser.userId
            };
        }
        console.log(currentUser);
    }
    ApiUrlService.prototype.getApiUrl = function () {
        return {
            createChannel: this.serverUrl + "channels.create",
            login: this.serverUrl + "login",
            register: this.serverUrl + "users.register",
            channelsList: this.serverUrl + 'channels.list',
            groupsList: this.serverUrl + 'groups.list',
            usersList: this.serverUrl + 'users.list',
            inviteUser: this.serverUrl + 'groups.invite',
            genericMethod: this.baseUrl + 'genericMethod',
            //unused now 
            ProfileOfCUser: this.baseUrl + "user/profile",
            ccPosts: this.baseUrl + "contentcreator/posts",
            toggleLike: this.baseUrl + "user/toggle_like",
            getComments: this.baseUrl + "user/post_comments/",
            postComment: this.baseUrl + "user/comment",
            getProfileOfCC: this.baseUrl + "user/profile",
            UpdateProfile: this.baseUrl + 'user/profile/edit',
            updateComment: this.baseUrl + 'user/edit_comment',
            getAllTiers: this.baseUrl + 'ContentCreator/tiers',
            allSups: this.baseUrl + 'user/subscriptions',
            postLikes: this.baseUrl + 'user/post_likes/',
            removePost: this.baseUrl + 'contentcreator/remove_post',
            editPost: this.baseUrl + 'contentcreator/edit_post'
        };
    };
    ApiUrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiUrlService);
    return ApiUrlService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utilities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilitiesService = (function () {
    function UtilitiesService(_script) {
        this._script = _script;
    }
    UtilitiesService.prototype.setLoading = function (value) {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(value);
        });
    };
    UtilitiesService.prototype.convertDatetoNormal = function (date) {
        var formatedDate;
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        date = new Date("" + date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var currentYear = new Date().getFullYear();
        var dayTime;
        if (day < 10) {
            day = '0' + day;
        }
        if (hour > 12) {
            hour = hour - 12;
            dayTime = 'pm';
        }
        else {
            dayTime = 'am';
        }
        if (currentYear == year) {
            formatedDate = day + " " + monthNames[month - 1] + " " + hour + ":" + minutes + " " + dayTime;
        }
        else {
            formatedDate = day + " " + monthNames[month - 1] + " " + year;
        }
        //console.log(formatedDate);
        return formatedDate;
    };
    UtilitiesService.prototype.autoHeightTextarea = function (e, item) {
        // console.log(e.srcElement.id);
        // console.log('asdasdasd');
        var val = document.getElementById("" + e.srcElement.id).scrollHeight;
        // console.log(val);
        var h = document.getElementById("" + e.srcElement.id).offsetHeight;
        var cal = Number(h) - 2;
        if (val > cal) {
            h = h + 50;
            return item.textAreaHeight = { height: h + 'px' };
        }
        // console.log(h)
    };
    UtilitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], UtilitiesService);
    return UtilitiesService;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\r\n    <i class=\"la la-close\"></i>\r\n</button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">\r\n    <!-- BEGIN: Aside Menu -->\r\n    <div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\"\r\n         data-menu-vertical=\"true\" data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\">\r\n        <ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\r\n            <li  class=\"m-menu__item \"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: false }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/admin/dashboard\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n                    <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t\t\t</span>\r\n                            <!--<span class=\"m-menu__link-badge\">-->\r\n                            <!--<span class=\"m-badge m-badge&#45;&#45;danger\">-->\r\n                            <!--2-->\r\n                            <!--</span>-->\r\n                            <!--</span>-->\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n                </a>\r\n            </li>\r\n\r\n            <li  class=\"m-menu__section\">\r\n                <h4 class=\"m-menu__section-text\">\r\n                    Users Management\r\n                </h4>\r\n                <i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n            </li>\r\n            <li  class=\"m-menu__item\"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/feed\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon fa fa-users\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\n            Channels\r\n            </span>\r\n                </a>\r\n            </li>\r\n            <li  class=\"m-menu__item\"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/admin/content-creators\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon fa fa-user-circle-o\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\nContent Creators\r\n                    </span>\r\n                </a>\r\n            </li>\r\n\r\n            <li  class=\"m-menu__item\"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/admin/content-creators-managers\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon fa fa-user-circle-o\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\nContent Creators Manager\r\n                    </span>\r\n                </a>\r\n            </li>\r\n\r\n            <li  class=\"m-menu__item\"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/admin/content-creators-managers\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon la \tla-user-secret\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\n            Admins\r\n            </span>\r\n                </a>\r\n            </li>\r\n\r\n\r\n            <li  class=\"m-menu__item  m-menu__item--submenu\"\r\n                routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\"\r\n                data-menu-submenu-toggle=\"hover\">\r\n                <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                    <i class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t</span>\r\n                    <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                </a>\r\n                <div class=\"m-menu__submenu\" >\r\n                    <span class=\"m-menu__arrow\"></span>\r\n                    <ul class=\"m-menu__subnav\">\r\n                        <li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item--active\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/tierGrowth\" class=\"m-menu__link\">\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tTier Growth\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/engagement\" class=\"m-menu__link\">\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tEngagement\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/usersList\" class=\"m-menu__link\">\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tUser List\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/refund\" class=\"m-menu__link\">\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tRefund Summary\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n\r\n            <li class=\"m-menu__section\">\r\n                <h4 class=\"m-menu__section-text\">\r\n                    Preferences\r\n                </h4>\r\n                <i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n            </li>\r\n            <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                aria-haspopup=\"true\">\r\n                <a routerLink=\"/settings\" class=\"m-menu__link\">\r\n                    <i class=\"m-menu__link-icon flaticon-settings\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\n            Settings\r\n            </span>\r\n                </a>\r\n            </li>\r\n\r\n            <!--<li class=\"m-menu__item  m-menu__item&#45;&#45;submenu\" routerLinkActive=\"m-menu__item&#45;&#45;active\"-->\r\n            <!--routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\" data-menu-submenu-toggle=\"hover\">-->\r\n            <!--<a href=\"#\" class=\"m-menu__link m-menu__toggle\">-->\r\n            <!--<i class=\"m-menu__link-icon flaticon-settings\"></i>-->\r\n            <!--<span class=\"m-menu__link-text\">-->\r\n            <!--Users Management-->\r\n            <!--</span>-->\r\n            <!--<i class=\"m-menu__ver-arrow la la-angle-right\"></i>-->\r\n            <!--</a>-->\r\n            <!--<div class=\"m-menu__submenu\">-->\r\n            <!--<span class=\"m-menu__arrow\"></span>-->\r\n            <!--<ul class=\"m-menu__subnav\">-->\r\n            <!--<li class=\"m-menu__item  m-menu__item&#45;&#45;parent\" routerLinkActive=\"m-menu__item&#45;&#45;active\"-->\r\n            <!--routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">-->\r\n            <!--<a href=\"#\" class=\"m-menu__link\">-->\r\n            <!--<span class=\"m-menu__link-text\">-->\r\n            <!--Admins-->\r\n            <!--</span>-->\r\n            <!--</a>-->\r\n            <!--</li>-->\r\n            <!--<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"-->\r\n            <!--routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">-->\r\n            <!--<a routerLink=\"/angular/primeng/input\" class=\"m-menu__link\">-->\r\n            <!--<i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">-->\r\n            <!--<span></span>-->\r\n            <!--</i>-->\r\n            <!--<span class=\"m-menu__link-text\">-->\r\n            <!--Content Creator-->\r\n            <!--</span>-->\r\n            <!--</a>-->\r\n            <!--</li>-->\r\n            <!--<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"-->\r\n            <!--routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">-->\r\n            <!--<a routerLink=\"/angular/primeng/button\" class=\"m-menu__link\">-->\r\n            <!--<i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">-->\r\n            <!--<span></span>-->\r\n            <!--</i>-->\r\n            <!--<span class=\"m-menu__link-text\">-->\r\n            <!--Content Creator Managers-->\r\n            <!--</span>-->\r\n            <!--</a>-->\r\n            <!--</li>-->\r\n            <!--<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item&#45;&#45;active\"-->\r\n            <!--routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">-->\r\n            <!--<a routerLink=\"/angular/primeng/panel\" class=\"m-menu__link\">-->\r\n            <!--<i class=\"m-menu__link-bullet m-menu__link-bullet&#45;&#45;dot\">-->\r\n            <!--<span></span>-->\r\n            <!--</i>-->\r\n            <!--<span class=\"m-menu__link-text\">-->\r\n            <!--Panel-->\r\n            <!--</span>-->\r\n            <!--</a>-->\r\n            <!--</li>-->\r\n            <!--</ul>-->\r\n            <!--</div>-->\r\n            <!--</li>-->\r\n\r\n        </ul>\r\n    </div>\r\n    <!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html body .m-aside-menu.m-aside-menu--skin-dark .m-menu__nav > .m-menu__section .m-menu__section-text {\n  color: #999; }\n\nhtml body .m-aside-left.m-aside-left--skin-dark {\n  background-color: #2c2e3e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Helpers} from '../../../helpers';

var AsideNavComponent = (function () {
    function AsideNavComponent(authService) {
        this.authService = authService;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
    }
    AsideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userDetails = this.authService.getCurentUser();
        this.socket.on('numberOfOnlineUsers', function (numberOfOnlineUsers) {
            _this.numberOfOnlineUsers = numberOfOnlineUsers;
            console.log(_this.numberOfOnlineUsers);
        });
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
        var menu = mLayout.getAsideMenu();
        var item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        $(menu).data('menu').setActiveItem(item);
    };
    AsideNavComponent.prototype.getNotification = function () {
    };
    AsideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-aside-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__["a" /* AuthenticationService */]])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\r\n<!-- <footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\r\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\r\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\r\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\r\n\t\t\t\t<span class=\"m-footer__copyright\">\r\n\t\t\t\t\t2017 &copy; Metronic theme by\r\n\t\t\t\t\t<a href=\"#\" class=\"m-link\">\r\n\t\t\t\t\t\tKeenthemes\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\r\n\t\t\t\t<ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tAbout\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\"  class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tPrivacy\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tT&C\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tPurchase\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link\" data-toggle=\"m-tooltip\" title=\"Support Center\" data-placement=\"left\">\r\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</footer> -->\r\n<!-- end::Footer -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-footer",
            template: __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\r\n<header class=\"m-grid__item    m-header\" data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\">\r\n    <div class=\"m-container m-container--fluid m-container--full-height\">\r\n        <div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n            <!-- BEGIN: Brand -->\r\n            <div class=\"m-stack__item m-brand  m-brand--skin-dark\">\r\n                <div class=\"m-stack m-stack--ver m-stack--general\">\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n                        <a routerLink=\"/index\" class=\"m-brand__logo-wrapper\">\r\n                            <img alt=\"\" src=\"./assets/demo/default/media/img/logo/logo_default_dark.png\"/>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n                        <!-- BEGIN: Left Aside Minimize Toggle -->\r\n                        <a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->\r\n                        <!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n                        <a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->\r\n                        <!-- BEGIN: Responsive Header Menu Toggler -->\r\n                        <a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\"\r\n                           class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>\r\n                        <!-- END -->                                    <!-- BEGIN: Topbar Toggler -->\r\n                        <a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\"\r\n                           class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n                            <i class=\"flaticon-more\"></i>\r\n                        </a>\r\n                        <!-- BEGIN: Topbar Toggler -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END: Brand -->\r\n            <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n                <!-- BEGIN: Horizontal Menu -->\r\n                <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\"\r\n                        id=\"m_aside_header_menu_mobile_close_btn\">\r\n                    <i class=\"la la-close\"></i>\r\n                </button>\r\n                <div id=\"m_header_menu\"\r\n                     class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\">\r\n                    <ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\r\n\r\n                        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\" routerLink=\"/feed\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-paper-plane\"></i>\r\n                                <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tHome\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n                                <!--<i class=\"m-menu__hor-arrow la la-angle-down\"></i>-->\r\n                                <!--<i class=\"m-menu__ver-arrow la la-angle-right\"></i>-->\r\n                            </a>\r\n\r\n                        </li>\r\n\r\n                        <li [routerLink]=\"['/']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" \r\n                            class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-profile-1\"></i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    {{userDetails}}\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/messages\" class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\r\n                            data-menu-submenu-toggle=\"click\" data-redirect=\"true\" aria-haspopup=\"true\">\r\n\r\n                            <a href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon flaticon-chat-1\"></i>\r\n                                <span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n                                <!--<i class=\"m-menu__hor-arrow la la-angle-down\"></i>-->\r\n                                <!--<i class=\"m-menu__ver-arrow la la-angle-right\"></i>-->\r\n                            </a>\r\n\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <!-- END: Horizontal Menu -->                                <!-- BEGIN: Topbar -->\r\n                <div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n                    <div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n                        <ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n                            <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\r\n                                data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\"\r\n                                data-search-type=\"dropdown\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header\">\r\n                                            <form class=\"m-list-search__form\">\r\n                                                <div class=\"m-list-search__form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\"\r\n                                                               name=\"q\" class=\"m-list-search__form-input\" value=\"\"\r\n                                                               placeholder=\"Search...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    <span class=\"m-list-search__form-icon-close\"\r\n                                                          id=\"m_quicksearch_close\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\"\r\n                                                 data-max-height=\"300\" data-mobile-max-height=\"200\">\r\n                                                <div class=\"m-dropdown__content\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\"\r\n                                data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\r\n                                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n                                    <span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\"\r\n                                                    role=\"tablist\">\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n                                                            Alerts\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_events\" role=\"tab\">\r\n                                                            Events\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_logs\" role=\"tab\">\r\n                                                            Logs\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                                <div class=\"tab-content\">\r\n                                                    <div class=\"tab-pane active\" id=\"topbar_notifications_notifications\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" data-scrollable=\"true\"\r\n                                                             data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_events\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" m-scrollabledata-scrollable=\"true\"\r\n                                                             data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New order received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New invoice received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production server up\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            New order received\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            System shutdown\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production server down\r\n                                                                        </a>\r\n                                                                        <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_logs\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-stack m-stack--ver m-stack--general\"\r\n                                                             style=\"min-height: 180px;\">\r\n                                                            <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li \r\n                                class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n                                data-dropdown-toggle=\"click\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n                                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\r\n                                    <span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-line-graph\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            <span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\"\r\n                                                     data-mobile-max-height=\"200\">\r\n                                                    <div class=\"m-nav-grid m-nav-grid--skin-light\">\r\n                                                        <div class=\"m-nav-grid__row\">\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-file\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-time\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                        </div>\r\n                                                        <div class=\"m-nav-grid__row\">\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-folder\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                            <a href=\"#\" class=\"m-nav-grid__item\">\r\n                                                                <i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\r\n                                                                <span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                            </a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n                                data-dropdown-toggle=\"click\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"round-avatar round-avatar-header m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"userDetails?.avatar\"\r\n                                             class=\" m--marginless m--img-centered\" alt=\"\"/>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                    <!--<span class=\"m-topbar__username m&#45;&#45;hide\">-->\r\n\t\t\t\t\t\t\t\t\t\t<!--Nick-->\r\n\t\t\t\t\t\t\t\t\t<!--</span>-->\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n                                            <div class=\"m-card-user m-card-user--skin-dark\">\r\n                                                <div class=\"m-card-user__pic\">\r\n                                                    <img [src]=\"userDetails?.avatar\"\r\n                                                         class=\"m--img-rounded m--marginless\" alt=\"\"/>\r\n                                                </div>\r\n                                                <div class=\"m-card-user__details\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{userDetails}} {{userDetails}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav m-nav--skin-light\">\r\n                                                    <li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/header/profile\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a\r\n                                                                class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\r\n                                                                routerLink=\"/login\" (click)=\"logOut()\">\r\n                                                            Logout\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li\r\n                                id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\r\n                                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <!-- END: Topbar -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- END: Header -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.m-card-user__email.m--font-weight-300 {\n  color: white !important; }\n\nul.m-menu__nav.m-menu__nav--submenu-arrow li.m-menu__item.m-menu__item--submenu.m-menu__item--rel {\n  border-bottom: 2px solid white;\n  transition: 0.5s all; }\n  ul.m-menu__nav.m-menu__nav--submenu-arrow li.m-menu__item.m-menu__item--submenu.m-menu__item--rel span:last-child {\n    transition: 0.5s all; }\n  ul.m-menu__nav.m-menu__nav--submenu-arrow li.m-menu__item.m-menu__item--submenu.m-menu__item--rel.active {\n    border-bottom: 2px solid #716aca;\n    transition: 0.5s all;\n    padding-right: auto5px;\n    padding-left: auto5px; }\n    ul.m-menu__nav.m-menu__nav--submenu-arrow li.m-menu__item.m-menu__item--submenu.m-menu__item--rel.active * {\n      color: #716aca; }\n    ul.m-menu__nav.m-menu__nav--submenu-arrow li.m-menu__item.m-menu__item--submenu.m-menu__item--rel.active .m-badge.m-badge--danger {\n      color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderNavComponent = (function () {
    function HeaderNavComponent(authService, _router) {
        this.authService = authService;
        this._router = _router;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.userDetails = this.authService.getCurentUser();
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent.prototype.logOut = function () {
        this.authService.logout();
        console.log('log out');
        this._router.navigate(['login']);
    };
    HeaderNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-header-nav",
            template: __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__ = __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__ = __webpack_require__("../../../../../src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__ = __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__ = __webpack_require__("../../../../../src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__ = __webpack_require__("../../../../../src/app/_directives/unwrap-tag.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_unwrap_tag_directive__["a" /* UnwrapTagDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_3__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_4__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quick_sidebar_quick_sidebar_component__["a" /* QuickSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["e" /* RouterModule */],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/layouts/layout/layout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\r\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\r\n    <div class=\"m-quick-sidebar__content m--hide\">\r\n\t\t<span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\">\r\n\t\t\t<i class=\"la la-close\"></i>\r\n\t\t</span>\r\n        <ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n            <li class=\"nav-item m-tabs__item\">\r\n                <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_messenger\"\r\n                   role=\"tab\">\r\n                    \"Subscriber Name\"\r\n                    <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item m-tabs__item\">\r\n                <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_quick_sidebar_tabs_settings\"\r\n                   role=\"tab\">\r\n                    Subscribers\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n            <div class=\"tab-pane active m-scrollable\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\r\n                <div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\r\n                    <div class=\"m-messenger__messages\">\r\n                        <div class=\"m-messenger__message m-messenger__message--in\">\r\n                            <div class=\"m-messenger__message-pic\">\r\n                                <img [src]=\"userDetails?.avatar\" alt=\"\"/>\r\n                            </div>\r\n                            <div class=\"m-messenger__message-body\">\r\n                                <div class=\"m-messenger__message-arrow\"></div>\r\n                                <div class=\"m-messenger__message-content\">\r\n                                    <div class=\"m-messenger__message-username\">\r\n                                        Megan wrote\r\n                                    </div>\r\n                                    <div class=\"m-messenger__message-text\">\r\n                                        Hi Bob. What time will be the meeting ?\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"m-messenger__message m-messenger__message--out\">\r\n                            <div class=\"m-messenger__message-body\">\r\n                                <div class=\"m-messenger__message-arrow\"></div>\r\n                                <div class=\"m-messenger__message-content\">\r\n                                    <div class=\"m-messenger__message-text\">\r\n                                        Hi Megan. It's at 2.30PM\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"m-messenger__seperator\"></div>\r\n                    <div class=\"m-messenger__form\">\r\n                        <div class=\"m-messenger__form-controls\">\r\n                            <input type=\"text\" name=\"\" placeholder=\"Type here...\" class=\"m-messenger__form-input\">\r\n                        </div>\r\n                        <div class=\"m-messenger__form-tools\">\r\n                            <a href=\"\" class=\"m-messenger__form-attachment\">\r\n                                <i class=\"la la-paperclip\"></i>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\r\n                <em>List of Subscribers will here</em>\r\n            </div>\r\n            <!--<div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">-->\r\n            <!--<div class=\"m-list-settings\">-->\r\n            <!--<div class=\"m-list-settings__group\">-->\r\n            <!--<div class=\"m-list-settings__heading\">-->\r\n            <!--General Settings-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Email Notifications-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" checked=\"checked\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Site Tracking-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--SMS Alerts-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Backup Storage-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Audit Logs-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" checked=\"checked\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__group\">-->\r\n            <!--<div class=\"m-list-settings__heading\">-->\r\n            <!--System Settings-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--System Logs-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Error Reporting-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Applications Logs-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Backup Servers-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" checked=\"checked\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"m-list-settings__item\">-->\r\n            <!--<span class=\"m-list-settings__item-label\">-->\r\n            <!--Audit Logs-->\r\n            <!--</span>-->\r\n            <!--<span class=\"m-list-settings__item-control\">-->\r\n            <!--<span class=\"m-switch m-switch&#45;&#45;outline m-switch&#45;&#45;icon-check m-switch&#45;&#45;brand\">-->\r\n            <!--<label>-->\r\n            <!--<input type=\"checkbox\" name=\"\">-->\r\n            <!--<span></span>-->\r\n            <!--</label>-->\r\n            <!--</span>-->\r\n            <!--</span>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <div class=\"tab-pane  m-scrollable\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\r\n                <div class=\"m-list-timeline\">\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\">\r\n                            System Logs\r\n                        </div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    12 new users registered\r\n                                    <span class=\"m-badge m-badge--warning m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\timportant\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System shutdown\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New invoice received\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Database overloaded 89%\r\n                                    <span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tresolved\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System error\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server down\r\n                                    <span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server up\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\">\r\n                            Applications Logs\r\n                        </div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New order received\r\n                                    <span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    12 new users registered\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System shutdown\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New invoices received\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Database overloaded 89%\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System error\r\n                                    <span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t</span>\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server down\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\">\r\n                            Server Logs\r\n                        </div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server up\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New order received\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    12 new users registered\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System shutdown\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New invoice received\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Database overloaded 89%\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    System error\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server down\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    Production server up\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                            <div class=\"m-list-timeline__item\">\r\n                                <span class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span>\r\n                                <a href=\"\" class=\"m-list-timeline__text\">\r\n                                    New order received\r\n                                </a>\r\n                                <span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t1117 hrs\r\n\t\t\t\t\t\t\t\t</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- end::Quick Sidebar -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickSidebarComponent = (function () {
    function QuickSidebarComponent(authService) {
        this.authService = authService;
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
        this.userDetails = this.authService.getCurentUser();
    };
    QuickSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-quick-sidebar",
            template: __webpack_require__("../../../../../src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_services_authentication_service__["a" /* AuthenticationService */]])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\r\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\r\n\t<i class=\"la la-arrow-up\"></i>\r\n</div>\r\n<!-- end::Scroll Top -->\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-scroll-top",
            template: __webpack_require__("../../../../../src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("../../../../../src/app/theme/pages/default/default.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_component__ = __webpack_require__("../../../../../src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guards_auth_guard__ = __webpack_require__("../../../../../src/app/auth/_guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        'path': '',
        'component': __WEBPACK_IMPORTED_MODULE_1__theme_component__["a" /* ThemeComponent */],
        'canActivate': [__WEBPACK_IMPORTED_MODULE_3__auth_guards_auth_guard__["a" /* AuthGuard */]],
        'children': [
            {
                'path': 'feed',
                'loadChildren': './pages/default/feed/feed.module#FeedModule',
            },
            {
                'path': 'messages',
                'loadChildren': './pages/default/messages/messages.module#MessagesModule',
            },
            {
                'path': 'settings',
                'loadChildren': './pages/default/settings/settings.module#SettingsModule',
            },
            {
                'path': 'admin',
                'loadChildren': './pages/default/admin/admin.module#AdminModule',
            },
            {
                'path': ':userName',
                'loadChildren': './pages/default/profile/profile.module#ProfileModule',
            },
            {
                'path': 'userprofile/:id',
                'loadChildren': './pages/default/profile/profile.module#ProfileModule',
            },
            {
                'path': '',
                'redirectTo': 'feed',
                'pathMatch': 'full',
            },
        ],
    },
    {
        'path': '**',
        'redirectTo': 'feed',
        'pathMatch': 'full',
    },
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]],
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\r\n<!-- begin::Body -->\r\n<router-outlet></router-outlet>\r\n<!-- end:: Body -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            // optional js to be loaded once
            _this._script.load('head', 'assets/vendors/custom/fullcalendar/fullcalendar.bundle.js');
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // init required js
                mApp.init();
                mUtil.init();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("../../../../../src/app/theme/theme.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map