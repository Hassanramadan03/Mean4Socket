webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/theme/pages/default/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "  <div *ngFor=\"let post of feeds\" class=\"feed-card m-portlet m-portlet--mobile\">\r\n    <div class=\"m-portlet__head\">\r\n      <div class=\"m-portlet__head-caption\">\r\n        <div class=\"feed-card-title align-items-center m-portlet__head-title\">\r\n          <!--<span class=\"m-portlet__head-icon\">-->\r\n          <!--<i class=\"la la-thumb-tack m&#45;&#45;font-success\"></i>-->\r\n          <!--</span>-->\r\n          <span class=\"round-avatar m-topbar__userpic\">\r\n\r\n            <img [src]=\"userDetails?.avatar\" class=\" m--marginless m--img-centered\" alt=\"\" />\r\n          </span>\r\n\r\n          <div class=\"title-text m-portlet__head-text m--font-success justify-content-center\">\r\n            <h3>\r\n              {{profile.username}}\r\n            </h3>\r\n            <span>{{post.created_timeView}}</span>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"m-portlet__body\">\r\n      <div class=\"body-image justify-content-center\">\r\n        <img [src]=\"post.images\">\r\n      </div>\r\n      <div class=\"body-description\">\r\n        {{post.description}}\r\n      </div>\r\n    </div>\r\n    <div class=\"m-portlet__foot\">\r\n      <div class=\"row align-items-start\">\r\n        <!--<div class=\"col-lg-6 m&#45;&#45;valign-middle\">-->\r\n        <!--Portlet footer:-->\r\n        <!--</div>-->\r\n        <div class=\"col-lg-6 m--align-left\">\r\n\r\n          <a href=\"#\" class=\"m-link m--font-bold\">\r\n            <i class=\"la la-thumbs-up\"></i> Like\r\n          </a>\r\n          <span class=\"m--margin-left-20\">\r\n\r\n          </span>\r\n          <a href=\"#\" class=\"m-link m--font-bold\">\r\n            <i class=\"la la-comment\"></i>\r\n            Comment\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/posts/posts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utilities_service__ = __webpack_require__("../../../../../src/app/shared/utilities.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsComponent = (function () {
    function PostsComponent(utilitiesService, cd, _profileService) {
        this.utilitiesService = utilitiesService;
        this.cd = cd;
        this._profileService = _profileService;
        this.toggleLoading = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent.prototype.getAllFeeds = function () {
        var _this = this;
        this.utilitiesService.setLoading(this.toggleLoading);
        this._profileService.getAllPosts()
            .subscribe(function (data) {
            console.log("data" + data);
            _this.toggleLoading = false;
            _this.utilitiesService.setLoading(_this.toggleLoading);
            _this.feeds = data.msg;
            console.log(data);
            console.log(_this.feeds);
            _this.feeds.map(function (feed) {
                feed.created_timeView = _this.utilitiesService.convertDatetoNormal(feed.created_at);
            });
            _this.cd.markForCheck();
        }, function (err) {
            console.log('failed');
            _this.cd.markForCheck();
            _this.toggleLoading = false;
            _this.utilitiesService.setLoading(_this.toggleLoading);
        });
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/theme/pages/default/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/pages/default/posts/posts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_utilities_service__["a" /* UtilitiesService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__profile_profile_service__["a" /* ProfileService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/posts/posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__posts_component__["a" /* PostsComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__posts_component__["a" /* PostsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__profile_profile_service__["a" /* ProfileService */]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-animation-slide-bottom-small\">\r\n    <div class=\"m-content\">\r\n       <p>profile works</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/pages/default/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_authentication_service__ = __webpack_require__("../../../../../src/app/auth/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utilities_service__ = __webpack_require__("../../../../../src/app/shared/utilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/feed/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(utilitiesService, feedService, _authservice, _profileService, route, cd, sanitizer, cfr) {
        this.utilitiesService = utilitiesService;
        this.feedService = feedService;
        this._authservice = _authservice;
        this._profileService = _profileService;
        this.route = route;
        this.cd = cd;
        this.sanitizer = sanitizer;
        this.cfr = cfr;
        this.toggleLoading = true;
        this.profile = {};
        this.updatedprofile = {};
        this.newUser = {};
        this.results = {};
        this.status = {};
        this.uploadedFiles = [];
        this.likes = [];
        this.allSups = [];
        this.allComments = [];
        this.allLikes = [];
        this.isDirty = false;
        this.isEditable = false;
        // this.getAllFeeds();
        this.userDetails = this._authservice.getCurentUser();
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.id = id;
            console.log("route id" + this.id);
            this.showProfile();
            this.getProfile(this.id);
        }
        else {
            this.getProfile(this.userDetails.id);
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.feed = {
            username: 'mohamed',
            createdDate: 12 / 3 / 2017,
            description: 'some text we are here and there',
            isLiked: false,
            likes: 5,
            isSubscribed: false,
        };
    };
    ProfileComponent.prototype.userProfile = function () {
    };
    ProfileComponent.prototype.currentProfile = function () {
    };
    ProfileComponent.prototype.dirtyIT = function () {
        this.isDirty = true;
    };
    ProfileComponent.prototype.getProfile = function (id) {
        var _this = this;
        this._profileService.getProfile(id).subscribe(function (data) {
            _this.profile = data;
            _this.activeTab = 1;
            _this.updatedprofile.firstname = data.firstname;
            _this.updatedprofile.lastname = data.lastname;
            _this.updatedprofile.username = data.username;
            _this.updatedprofile.description = data.result.profile_description;
            _this.results = data.result;
            _this.status = data.result.status;
            _this.image = data.result.profile_picture;
        });
    };
    ProfileComponent.prototype.showProfile = function () {
        this.isEditable = true;
        return 0;
    };
    ProfileComponent.prototype.showFeed = function () {
        this.isEditable = false;
        return 0;
    };
    ProfileComponent.prototype.getAllFeeds = function () {
        var _this = this;
        this.utilitiesService.setLoading(this.toggleLoading);
        this._profileService.getAllPosts()
            .subscribe(function (data) {
            _this.toggleLoading = false;
            _this.utilitiesService.setLoading(_this.toggleLoading);
            _this.feeds = data.msg;
            _this.feeds.map(function (feed) {
                feed.created_timeView = _this.utilitiesService.convertDatetoNormal(feed.created_at);
            });
            _this.cd.markForCheck();
        }, function (err) {
            console.log('failed');
            _this.cd.markForCheck();
            _this.toggleLoading = false;
            _this.utilitiesService.setLoading(_this.toggleLoading);
        });
    };
    ProfileComponent.prototype.setActiveTab = function (tabNum) {
        console.log(tabNum);
        this.activeTab = tabNum;
        this.cd.markForCheck();
    };
    ProfileComponent.prototype.ActiveTab = function (tabNum) {
        // console.log(tabNum)
        if (tabNum == this.activeTab) {
            return ['activeTab'];
        }
        else {
            return [];
        }
    };
    ProfileComponent.prototype.addNewUser = function (value) {
        console.log(value);
    };
    ProfileComponent.prototype.showAtView = function (event) {
        // this.uploadedFiles = [];
        console.log(event.files[0]);
        this.trustedImgUrl = this.sanitizer.bypassSecurityTrustUrl(event.files[0].objectURL.changingThisBreaksApplicationSecurity);
        this.uploadedFiles.push(event.files[0]);
    };
    ProfileComponent.prototype.updateProfile = function (value) {
        var _this = this;
        value.uploadedfrom = 'web';
        console.log(this.uploadedFiles[0]);
        value.userPhoto = this.uploadedFiles[0];
        console.log(value);
        console.log(value);
        this._profileService.editProfile(value).subscribe(function (data) {
            if (data) {
                _this.getProfile(_this.userDetails.id);
                _this.isDirty = false;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: '.m-wrapper',
            template: __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_utilities_service__["a" /* UtilitiesService */],
            __WEBPACK_IMPORTED_MODULE_5__feed_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_0__auth_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ComponentFactoryResolver */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__ = __webpack_require__("../../../../../src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feed_feed_service__ = __webpack_require__("../../../../../src/app/theme/pages/default/feed/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_posts_module__ = __webpack_require__("../../../../../src/app/theme/pages/default/posts/posts.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { PostsComponent } from '../posts/posts.component';

// import { Ng4FilesModule } from './../../../../../../node_modules/angular4-files-upload/index';
var routes = [
    {
        'path': '',
        'component': __WEBPACK_IMPORTED_MODULE_4__default_component__["a" /* DefaultComponent */],
        'children': [
            {
                'path': '',
                'component': __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
            },
        ],
    },
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__["a" /* LayoutModule */], __WEBPACK_IMPORTED_MODULE_8__posts_posts_module__["a" /* PostsModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_7__feed_feed_service__["a" /* FeedService */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/pages/default/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
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




var ProfileService = (function () {
    function ProfileService(http, apiUrlService) {
        this.http = http;
        this.apiUrlService = apiUrlService;
        this.options = this.apiUrlService.options;
    }
    ProfileService.prototype.getProfile = function (id) {
        var url = this.apiUrlService.getApiUrl().ProfileOfCUser + ("?id=" + id);
        return this.http.get(url, this.options)
            .map(function (response) { return response.json(); });
    };
    ProfileService.prototype.getAllPosts = function () {
        var url = this.apiUrlService.getApiUrl().ccPosts;
        return this.http.get(url, this.options)
            .map(function (response) { return response.json(); });
    };
    ProfileService.prototype.editProfile = function (oUser) {
        var url = this.apiUrlService.getApiUrl().UpdateProfile;
        return this.http.put(url, oUser, this.options)
            .map(function (response) { return response.json(); });
    };
    ProfileService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__shared_api_url_service__["a" /* ApiUrlService */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map