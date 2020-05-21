(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _films_films_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./films/films.component */ "./src/app/films/films.component.ts");
/* harmony import */ var _films_film_view_film_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./films/film-view/film-view.component */ "./src/app/films/film-view/film-view.component.ts");
/* harmony import */ var _films_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films/create/create.component */ "./src/app/films/create/create.component.ts");









const routes = [
    { path: '', redirectTo: 'films', pathMatch: 'full' },
    { path: 'films', component: _films_films_component__WEBPACK_IMPORTED_MODULE_4__["FilmsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'films/create', component: _films_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"] },
    { path: 'films/:flim_slug_name', component: _films_film_view_film_view_component__WEBPACK_IMPORTED_MODULE_5__["FilmViewComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'films-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: ApiUrl, filepath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filepath", function() { return filepath; });
const ApiUrl = 'http://localhost:3000/api/'; // api path to server
const filepath = "http://localhost:3000/"; //  uploaded file path to server


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _films_films_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./films/films.component */ "./src/app/films/films.component.ts");
/* harmony import */ var _films_film_view_film_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./films/film-view/film-view.component */ "./src/app/films/film-view/film-view.component.ts");
/* harmony import */ var _films_create_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./films/create/create.component */ "./src/app/films/create/create.component.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _films_films_component__WEBPACK_IMPORTED_MODULE_16__["FilmsComponent"],
        _films_film_view_film_view_component__WEBPACK_IMPORTED_MODULE_17__["FilmViewComponent"],
        _films_create_create_component__WEBPACK_IMPORTED_MODULE_18__["CreateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _films_films_component__WEBPACK_IMPORTED_MODULE_16__["FilmsComponent"],
                    _films_film_view_film_view_component__WEBPACK_IMPORTED_MODULE_17__["FilmViewComponent"],
                    _films_create_create_component__WEBPACK_IMPORTED_MODULE_18__["CreateComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"].forRoot(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                    _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn == true) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth.interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/films/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/films/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");









function CreateComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select Film Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Select a Rating. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_528_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Country. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_534_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Release Date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_539_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a ticket price. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_button_544_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_button_544_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.uploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_button_545_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Uploading..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function CreateComponent_div_546_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Image file. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateComponent_div_557_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a Film Description. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateComponent {
    constructor(films, Upload) {
        this.films = films;
        this.Upload = Upload;
        this.genre = [];
        this.invalid = false;
        this.invalidphoto = false;
        this.success = false;
        this.onUpload = false;
        this.onSubmit = false;
        this.dropdownList = ['Action', 'Thriller', 'Horror', 'Comedy', 'Drama', 'Romance', 'Sci-Fi', 'Adventure'];
        this.dropdownSettings = {
            singleSelection: false,
            itemsShowLimit: 10,
            allowSearchFilter: true
        };
    }
    ngOnInit() {
        let today = new Date();
        this.mindate = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
    }
    submit() {
        console.log('name', this.name);
        console.log('desc', this.description);
        console.log('name', this.country);
        console.log('release', this.releasedate);
        console.log('reating', this.rating);
        console.log('ticket', this.ticketprice);
        console.log('genre', this.genre);
        console.log('image', this.image);
        if (this.name == null || this.description == null || this.country == null || this.releasedate == null || this.rating == null || this.ticketprice == null || this.genre == [] || this.image == null) {
            console.log('error');
            return this.invalid = true;
        }
        this.releasedate = this.releasedate.year + '-' + this.releasedate.month + '-' + this.releasedate.day;
        let film = {
            name: this.name,
            description: this.description,
            country: this.country,
            releasedate: this.releasedate,
            ticketprice: this.ticketprice,
            rating: this.rating,
            genre: this.genre,
            photo: this.image
        };
        console.log('film', film);
        this.onSubmit = true;
        this.films.createFilm(film).subscribe(res => {
            this.onSubmit = false;
            // this.image = "";
        });
    }
    uploadImage() {
        if (this.photo == null) {
            return this.invalid = true;
        }
        this.onUpload = true;
        this.Upload.upload(this.photo).subscribe((res) => {
            if (res.success) {
                res.file = res.file.replace('/public', '');
                this.image = _app_constant__WEBPACK_IMPORTED_MODULE_1__["filepath"] + res.file;
                console.log('image', this.image);
            }
            else {
                this.uploaderror = res.message;
            }
            this.onUpload = false;
            console.log('upload', this.onUpload);
        }, err => {
            this.onUpload = false;
        });
    }
    selectImage(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.photo = file;
        }
        console.log('file', this.photo);
    }
    onItemSelect(item) {
        console.log(item);
        this.genre.push(item);
        this.genre = this.genre.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    }
    onSelectAll(items) {
        this.genre.push(items);
        this.genre = this.genre.filter(function (elem, index, self) {
            return index === self.indexOf(elem);
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 560, vars: 31, consts: [[1, "row", "mt-5"], [1, "container"], [1, "col-md-8", "item"], [1, "text-center", "my-3"], [1, "form-group"], ["for", "exampleFormControlInput1"], ["type", "text", "name", "name", "id", "exampleFormControlInput1", "placeholder", "Film name", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], [1, "invalid-feedback"], ["name", "genre", 3, "ngClass", "placeholder", "data", "ngModel", "settings", "ngModelChange", "onSelect"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "validationServerUsername"], ["name", "rating", "name", "rating", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["disabled", "", "selected", ""], ["for", "validationServer03"], ["name", "country", "name", "country", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "Afghanistan"], ["value", "\u00C5land Islands"], ["value", "Albania"], ["value", "Algeria"], ["value", "American Samoa"], ["value", "Andorra"], ["value", "Angola"], ["value", "Anguilla"], ["value", "Antarctica"], ["value", "Antigua and Barbuda"], ["value", "Argentina"], ["value", "Armenia"], ["value", "Aruba"], ["value", "Australia"], ["value", "Austria"], ["value", "Azerbaijan"], ["value", "Bahamas"], ["value", "Bahrain"], ["value", "Bangladesh"], ["value", "Barbados"], ["value", "Belarus"], ["value", "Belgium"], ["value", "Belize"], ["value", "Benin"], ["value", "Bermuda"], ["value", "Bhutan"], ["value", "Bolivia"], ["value", "Bosnia and Herzegovina"], ["value", "Botswana"], ["value", "Bouvet Island"], ["value", "Brazil"], ["value", "British Indian Ocean Territory"], ["value", "Brunei Darussalam"], ["value", "Bulgaria"], ["value", "Burkina Faso"], ["value", "Burundi"], ["value", "Cambodia"], ["value", "Cameroon"], ["value", "Canada"], ["value", "Cape Verde"], ["value", "Cayman Islands"], ["value", "Central African Republic"], ["value", "Chad"], ["value", "Chile"], ["value", "China"], ["value", "Christmas Island"], ["value", "Cocos (Keeling) Islands"], ["value", "Colombia"], ["value", "Comoros"], ["value", "Congo"], ["value", "Congo, The Democratic Republic of The"], ["value", "Cook Islands"], ["value", "Costa Rica"], ["value", "Cote D'ivoire"], ["value", "Croatia"], ["value", "Cuba"], ["value", "Cyprus"], ["value", "Czech Republic"], ["value", "Denmark"], ["value", "Djibouti"], ["value", "Dominica"], ["value", "Dominican Republic"], ["value", "Ecuador"], ["value", "Egypt"], ["value", "El Salvador"], ["value", "Equatorial Guinea"], ["value", "Eritrea"], ["value", "Estonia"], ["value", "Ethiopia"], ["value", "Falkland Islands (Malvinas)"], ["value", "Faroe Islands"], ["value", "Fiji"], ["value", "Finland"], ["value", "France"], ["value", "French Guiana"], ["value", "French Polynesia"], ["value", "French Southern Territories"], ["value", "Gabon"], ["value", "Gambia"], ["value", "Georgia"], ["value", "Germany"], ["value", "Ghana"], ["value", "Gibraltar"], ["value", "Greece"], ["value", "Greenland"], ["value", "Grenada"], ["value", "Guadeloupe"], ["value", "Guam"], ["value", "Guatemala"], ["value", "Guernsey"], ["value", "Guinea"], ["value", "Guinea-bissau"], ["value", "Guyana"], ["value", "Haiti"], ["value", "Heard Island and Mcdonald Islands"], ["value", "Holy See (Vatican City State)"], ["value", "Honduras"], ["value", "Hong Kong"], ["value", "Hungary"], ["value", "Iceland"], ["value", "India"], ["value", "Indonesia"], ["value", "Iran, Islamic Republic of"], ["value", "Iraq"], ["value", "Ireland"], ["value", "Isle of Man"], ["value", "Israel"], ["value", "Italy"], ["value", "Jamaica"], ["value", "Japan"], ["value", "Jersey"], ["value", "Jordan"], ["value", "Kazakhstan"], ["value", "Kenya"], ["value", "Kiribati"], ["value", "Korea, Democratic People's Republic of"], ["value", "Korea, Republic of"], ["value", "Kuwait"], ["value", "Kyrgyzstan"], ["value", "Lao People's Democratic Republic"], ["value", "Latvia"], ["value", "Lebanon"], ["value", "Lesotho"], ["value", "Liberia"], ["value", "Libyan Arab Jamahiriya"], ["value", "Liechtenstein"], ["value", "Lithuania"], ["value", "Luxembourg"], ["value", "Macao"], ["value", "Macedonia, The Former Yugoslav Republic of"], ["value", "Madagascar"], ["value", "Malawi"], ["value", "Malaysia"], ["value", "Maldives"], ["value", "Mali"], ["value", "Malta"], ["value", "Marshall Islands"], ["value", "Martinique"], ["value", "Mauritania"], ["value", "Mauritius"], ["value", "Mayotte"], ["value", "Mexico"], ["value", "Micronesia, Federated States of"], ["value", "Moldova, Republic of"], ["value", "Monaco"], ["value", "Mongolia"], ["value", "Montenegro"], ["value", "Montserrat"], ["value", "Morocco"], ["value", "Mozambique"], ["value", "Myanmar"], ["value", "Namibia"], ["value", "Nauru"], ["value", "Nepal"], ["value", "Netherlands"], ["value", "Netherlands Antilles"], ["value", "New Caledonia"], ["value", "New Zealand"], ["value", "Nicaragua"], ["value", "Niger"], ["value", "Nigeria"], ["value", "Niue"], ["value", "Norfolk Island"], ["value", "Northern Mariana Islands"], ["value", "Norway"], ["value", "Oman"], ["value", "Pakistan"], ["value", "Palau"], ["value", "Palestinian Territory, Occupied"], ["value", "Panama"], ["value", "Papua New Guinea"], ["value", "Paraguay"], ["value", "Peru"], ["value", "Philippines"], ["value", "Pitcairn"], ["value", "Poland"], ["value", "Portugal"], ["value", "Puerto Rico"], ["value", "Qatar"], ["value", "Reunion"], ["value", "Romania"], ["value", "Russian Federation"], ["value", "Rwanda"], ["value", "Saint Helena"], ["value", "Saint Kitts and Nevis"], ["value", "Saint Lucia"], ["value", "Saint Pierre and Miquelon"], ["value", "Saint Vincent and The Grenadines"], ["value", "Samoa"], ["value", "San Marino"], ["value", "Sao Tome and Principe"], ["value", "Saudi Arabia"], ["value", "Senegal"], ["value", "Serbia"], ["value", "Seychelles"], ["value", "Sierra Leone"], ["value", "Singapore"], ["value", "Slovakia"], ["value", "Slovenia"], ["value", "Solomon Islands"], ["value", "Somalia"], ["value", "South Africa"], ["value", "South Georgia and The South Sandwich Islands"], ["value", "Spain"], ["value", "Sri Lanka"], ["value", "Sudan"], ["value", "Suriname"], ["value", "Svalbard and Jan Mayen"], ["value", "Swaziland"], ["value", "Sweden"], ["value", "Switzerland"], ["value", "Syrian Arab Republic"], ["value", "Taiwan, Province of China"], ["value", "Tajikistan"], ["value", "Tanzania, United Republic of"], ["value", "Thailand"], ["value", "Timor-leste"], ["value", "Togo"], ["value", "Tokelau"], ["value", "Tonga"], ["value", "Trinidad and Tobago"], ["value", "Tunisia"], ["value", "Turkey"], ["value", "Turkmenistan"], ["value", "Turks and Caicos Islands"], ["value", "Tuvalu"], ["value", "Uganda"], ["value", "Ukraine"], ["value", "United Arab Emirates"], ["value", "United Kingdom"], ["value", "United States"], ["value", "United States Minor Outlying Islands"], ["value", "Uruguay"], ["value", "Uzbekistan"], ["value", "Vanuatu"], ["value", "Venezuela"], ["value", "Viet Nam"], ["value", "Virgin Islands, British"], ["value", "Virgin Islands, U.S."], ["value", "Wallis and Futuna"], ["value", "Western Sahara"], ["value", "Yemen"], ["value", "Zambia"], ["value", "Zimbabwe"], ["for", "validationServer04"], ["type", "text", "name", "release", "ngbDatepicker", "", "name", "releasedate", "placeholder", "Release Date", "required", "", 1, "form-control", 3, "ngModel", "minDate", "ngClass", "ngModelChange", "click"], ["d", "ngbDatepicker"], ["type", "number", "name", "ticket", "placeholder", "Ticket Price", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["for", "validationServer05"], ["type", "file", "name", "file", "required", "", 1, "form-control", 3, "disabled", "ngClass", "change"], ["class", "btn btn-primary mt-1", 3, "click", 4, "ngIf"], ["class", "btn btn-primary mt-1", 3, "disabled", 4, "ngIf"], ["name", "description", "minlength", "200", "rows", "4", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", "mt-1", 3, "click"], [1, "btn", "btn-primary", "mt-1", 3, "disabled"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create a New Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Film name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_9_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Provide a Movie Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Film Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ng-multiselect-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_ng_multiselect_dropdown_ngModelChange_15_listener($event) { return ctx.genre = $event; })("onSelect", function CreateComponent_Template_ng_multiselect_dropdown_onSelect_15_listener($event) { return ctx.onItemSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_div_16_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Movie Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_20_listener($event) { return ctx.rating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Movie rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateComponent_div_33_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_select_ngModelChange_37_listener($event) { return ctx.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Afghanistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00C5land Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Albania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Algeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "American Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Andorra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Angola");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Anguilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Antarctica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Antigua and Barbuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Argentina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Armenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Aruba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Austria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Azerbaijan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Bahamas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Bahrain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Bangladesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Barbados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Belarus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Belgium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Belize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Benin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Bermuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Bhutan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Bolivia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Bosnia and Herzegovina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Botswana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Bouvet Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "British Indian Ocean Territory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Brunei Darussalam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Bulgaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Burkina Faso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Burundi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Cambodia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Cameroon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Cape Verde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Cayman Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Central African Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Chad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Christmas Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Cocos (Keeling) Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Colombia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Comoros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Congo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Congo, The Democratic Republic of The");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Cook Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Costa Rica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Cote D'ivoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Croatia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Cuba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Cyprus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Czech Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Denmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Djibouti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Dominica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Dominican Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Ecuador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "El Salvador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Equatorial Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Eritrea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Estonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Ethiopia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Falkland Islands (Malvinas)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Faroe Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Fiji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Finland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "French Guiana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "French Polynesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "French Southern Territories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Gabon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Gambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Georgia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Ghana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Gibraltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Greenland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Grenada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Guadeloupe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Guam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Guatemala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Guernsey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Guinea-bissau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Guyana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Haiti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Heard Island and Mcdonald Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Holy See (Vatican City State)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Honduras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Hong Kong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Hungary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Iran, Islamic Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Iraq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Ireland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Isle of Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Israel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Jamaica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Jersey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Jordan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Kazakhstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Kiribati");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Korea, Democratic People's Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Korea, Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Kuwait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Kyrgyzstan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Lao People's Democratic Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Latvia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Lebanon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Lesotho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Liberia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Libyan Arab Jamahiriya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Liechtenstein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Lithuania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Luxembourg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Macao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Macedonia, The Former Yugoslav Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Madagascar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Malawi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Malaysia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "option", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Maldives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "option", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Mali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "option", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Malta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Marshall Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Martinique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Mauritania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Mauritius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "option", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Mayotte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "option", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Mexico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "option", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Micronesia, Federated States of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "option", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Moldova, Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "option", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Monaco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "option", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Mongolia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Montenegro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Montserrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "option", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Morocco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "option", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Mozambique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "option", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Myanmar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "option", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Namibia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "option", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Nauru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "option", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Nepal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "option", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "option", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Netherlands Antilles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "option", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "New Caledonia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "option", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "New Zealand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "option", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Nicaragua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "option", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Niger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "option", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Nigeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "option", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Niue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "option", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Norfolk Island");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "option", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Northern Mariana Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "option", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Norway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "option", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Oman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "option", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "option", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Palau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "option", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Palestinian Territory, Occupied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "option", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Panama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "option", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Papua New Guinea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "option", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Paraguay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "option", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Peru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "option", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Philippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "option", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Pitcairn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "option", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "option", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Portugal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "option", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Puerto Rico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "option", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Qatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "option", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Reunion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "option", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Romania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "option", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Russian Federation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "option", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Rwanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "option", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Saint Helena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "option", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Saint Kitts and Nevis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Saint Lucia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Saint Pierre and Miquelon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Saint Vincent and The Grenadines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Samoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "option", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "San Marino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "option", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Sao Tome and Principe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "option", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Saudi Arabia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "option", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Senegal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "option", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Serbia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "option", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Seychelles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "option", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Sierra Leone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "option", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Singapore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "option", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Slovakia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "option", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Slovenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "option", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Solomon Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "option", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Somalia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "option", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "option", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "South Georgia and The South Sandwich Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "option", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "option", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Sri Lanka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "option", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Sudan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "option", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Suriname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "option", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Svalbard and Jan Mayen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "option", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Swaziland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "option", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "option", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "option", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Syrian Arab Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "option", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Taiwan, Province of China");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "option", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Tajikistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "option", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Tanzania, United Republic of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "option", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Thailand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "option", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Timor-leste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "option", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Togo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "option", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Tokelau");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "option", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Tonga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "option", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Trinidad and Tobago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "option", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Tunisia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "option", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Turkey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "option", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Turkmenistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "option", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Turks and Caicos Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "option", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Tuvalu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "option", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "Uganda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "option", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Ukraine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "option", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "United Arab Emirates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "option", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "United Kingdom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "option", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "option", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "United States Minor Outlying Islands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "option", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Uruguay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "option", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Uzbekistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "option", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Vanuatu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "option", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Venezuela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "option", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "Viet Nam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "option", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Virgin Islands, British");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "option", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Virgin Islands, U.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "option", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Wallis and Futuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "option", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "Western Sahara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "option", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Yemen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "option", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "Zambia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "option", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "Zimbabwe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](528, CreateComponent_div_528_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "label", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "Release Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "input", 260, 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_532_listener($event) { return ctx.releasedate = $event; })("click", function CreateComponent_Template_input_click_532_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](533); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](534, CreateComponent_div_534_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "label", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Ticket Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "input", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_538_listener($event) { return ctx.ticketprice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](539, CreateComponent_div_539_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "label", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Movie Photo / Poster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "input", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_543_listener($event) { return ctx.selectImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](544, CreateComponent_button_544_Template, 2, 0, "button", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](545, CreateComponent_button_545_Template, 2, 1, "button", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](546, CreateComponent_div_546_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "label", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "(Minimum 200 characters)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "textarea", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_textarea_ngModelChange_556_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](557, CreateComponent_div_557_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "button", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_558_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name)("ngClass", ctx.name == null && ctx.invalid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.genre == null && ctx.invalid ? "is-invalid" : "")("placeholder", "Select Movie Genre")("data", ctx.dropdownList)("ngModel", ctx.genre)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.genre == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.rating == null && ctx.invalid == true ? "is-invalid" : "")("ngModel", ctx.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.rating == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.country == null && ctx.invalid == true ? "is-invalid" : "")("ngModel", ctx.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](491);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.country == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.releasedate)("minDate", ctx.mindate)("ngClass", ctx.releasedate == null && ctx.invalid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.releasedate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ticketprice)("ngClass", ctx.ticketprice == null && ctx.invalid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.ticketprice == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.onUpload)("ngClass", ctx.photo == null && ctx.invalid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.onUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.photo == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.uploaderror);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("ngClass", ctx.description == null && ctx.invalid ? "is-invalid" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid == true && ctx.description == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.onSubmit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["MultiSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: ["input[_ngcontent-%COMP%]{\n  color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZmlsbXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gIGNvbG9yOmJsYWNrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _services_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"] }, { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/films/film-view/film-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/films/film-view/film-view.component.ts ***!
  \********************************************************/
/*! exports provided: FilmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmViewComponent", function() { return FilmViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function FilmViewComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r4);
} }
function FilmViewComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmViewComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.postComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilmViewComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Posting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilmViewComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, message_r7.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("@", message_r7.user_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r7.comment, ". ");
} }
class FilmViewComponent {
    constructor(films, authService, route, location) {
        this.films = films;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.filmid = { id: 0 };
        this.film = {
            film_id: '',
            name: '',
            description: '',
            genre: [],
            releasedate: '',
            ticketprice: '',
            country: '',
            rating: '',
            photo: ''
        };
        this.comments = [];
        this.isLoggedIn = false;
        this.posting = false;
        this.filmid = this.route.getCurrentNavigation().extras.state; // collecting id from router extra parameter
    }
    ngOnInit() {
        //check authentication
        this.isLoggedIn = this.authService.loggedIn;
        console.log('logged', this.isLoggedIn);
        this.getFilm();
        console.log('film', this.filmid.id);
    }
    // get film id its id
    getFilm() {
        this.films.getFilm(this.filmid.id).subscribe((res) => {
            console.log('res', res);
            this.film = res.film;
            this.film.genre = JSON.parse(this.film.genre);
            console.log('film', this.film);
            this.comments = res.comments;
        });
    }
    postComment() {
        console.log('comments', this.comment);
        if (this.comment == null || this.comment == '') {
            return false;
        }
        this.posting = true;
        this.films.postComment(this.comment, this.film.film_id).subscribe(res => {
            this.posting = false;
            if (res.status) {
                this.getComments();
                this.comment = '';
            }
        });
    }
    back() {
        this.location.back();
    }
    getComments() {
        console.log('comments', this.comment);
        if (this.comment == null) {
            return false;
        }
        this.films.getAllComments(this.film.film_id).subscribe(res => {
            this.comments = res.comments;
        });
    }
}
FilmViewComponent.ɵfac = function FilmViewComponent_Factory(t) { return new (t || FilmViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
FilmViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilmViewComponent, selectors: [["app-film-view"]], decls: 41, vars: 12, consts: [[1, "row", "m-5"], [1, "container"], [1, "text-center", "my-2"], [1, "btn", "btn-primary", 3, "click"], [1, "col-lg-12"], [1, "text-dark"], ["max-height", "600px", "alt", "movie image", 1, "img-fluid", "p-4", 3, "src"], [1, "p-4"], [1, ""], ["class", "badge badge-warning", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "my-3"], [1, "row", "bootstrap", "snippets"], [1, "col-lg-12", "col-md-offset-2", "col-sm-12"], [1, "comment-wrapper"], [1, "panel", "panel-info"], [1, "panel-heading"], [1, "panel-body"], ["placeholder", "write a comment...", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "class", "btn btn-info pull-right", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info pull-right", "disabled", "", 4, "ngIf"], [1, "clearfix"], [1, "media-list"], ["class", "media", 4, "ngFor", "ngForOf"], [1, "badge", "badge-warning"], ["type", "button", 1, "btn", "btn-info", "pull-right", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-info", "pull-right"], [1, "media"], [1, "media-body"], [1, "text-muted", "pull-right"], [1, "text-muted"], [1, "text-success"]], template: function FilmViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movie Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmViewComponent_Template_button_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Movie Genre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FilmViewComponent_span_14_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Comment panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilmViewComponent_Template_textarea_ngModelChange_33_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FilmViewComponent_button_35_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FilmViewComponent_button_36_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FilmViewComponent_li_40_Template, 10, 5, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.film.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie Title : ", ctx.film.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.film.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie Release Date : ", ctx.film.releasedate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie Country: ", ctx.film.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie Rating : ", ctx.film.rating, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie Ticket Price : ", ctx.film.ticketprice, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description : ", ctx.film.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".comment-wrapper[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  max-height:650px;\n  overflow:auto;\n}\n\n.comment-wrapper[_ngcontent-%COMP%]   .media-list[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width:64px;\n  height:64px;\n  border:2px solid #e5e7e8;\n}\n\n.comment-wrapper[_ngcontent-%COMP%]   .media-list[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  border-bottom:1px dashed #efefef;\n  margin-bottom:25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbS12aWV3L2ZpbG0tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ZpbG1zL2ZpbG0tdmlldy9maWxtLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LXdyYXBwZXIgLnBhbmVsLWJvZHkge1xuICBtYXgtaGVpZ2h0OjY1MHB4O1xuICBvdmVyZmxvdzphdXRvO1xufVxuXG4uY29tbWVudC13cmFwcGVyIC5tZWRpYS1saXN0IC5tZWRpYSBpbWcge1xuICB3aWR0aDo2NHB4O1xuICBoZWlnaHQ6NjRweDtcbiAgYm9yZGVyOjJweCBzb2xpZCAjZTVlN2U4O1xufVxuXG4uY29tbWVudC13cmFwcGVyIC5tZWRpYS1saXN0IC5tZWRpYSB7XG4gIGJvcmRlci1ib3R0b206MXB4IGRhc2hlZCAjZWZlZmVmO1xuICBtYXJnaW4tYm90dG9tOjI1cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilmViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-film-view',
                templateUrl: './film-view.component.html',
                styleUrls: ['./film-view.component.css']
            }]
    }], function () { return [{ type: _services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/films/films.component.ts":
/*!******************************************!*\
  !*** ./src/app/films/films.component.ts ***!
  \******************************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FilmsComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r3, " ");
} }
function FilmsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FilmsComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FilmsComponent {
    constructor(filmService, route) {
        this.filmService = filmService;
        this.route = route;
        this.films = [{
                name: "",
                photo: "",
                genre: "",
                description: ""
            }];
        this.index = 0;
    }
    ngOnInit() {
        this.getAllFilms();
        console.log('index', this.index);
    }
    getAllFilms() {
        this.filmService.getAllFilms().subscribe((data) => {
            console.log('data', data);
            this.films = data.films;
            this.films.forEach(element => {
                element.genre = JSON.parse(element.genre);
            });
            console.log('fims', this.films);
        });
    }
    getDetail() {
        //pass an extra value as state with route navigate
        this.route.navigate(['films/', this.films[this.index].name], { state: { id: this.films[this.index].film_id } });
    }
    next() {
        this.index++;
        console.log('index', this.index);
    }
    prev() {
        this.index--;
    }
}
FilmsComponent.ɵfac = function FilmsComponent_Factory(t) { return new (t || FilmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FilmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilmsComponent, selectors: [["app-films"]], decls: 24, vars: 11, consts: [[1, "text-center", "mt-3"], [1, "row", "m-5"], [1, "container"], [1, "col-md-12"], [1, "card", "bg-light", "text-dark"], [1, "card-img", "img-fluid", "p-4", 3, "src", "alt"], [1, "card-body", "p-4"], [1, "card-title"], ["class", "badge badge-warning mx-1", 4, "ngFor", "ngForOf"], [1, "card-text"], [1, "btn", "btn-primary", "text-light", 3, "click"], [1, "card-button", "float-left"], ["type", "button", "class", "btn btn-primary text-light float-left m-3", 3, "click", 4, "ngIf"], [1, "badge", "badge-warning", "mx-1"], ["type", "button", 1, "btn", "btn-primary", "text-light", "float-left", "m-3", 3, "click"]], template: function FilmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Movie Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Movie Genre : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FilmsComponent_span_12_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_18_listener() { return ctx.getDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FilmsComponent_button_22_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FilmsComponent_button_23_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.films[ctx.index].photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.films[ctx.index].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Movie title : ", ctx.films[ctx.index].name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.films[ctx.index].genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description :", ctx.films[ctx.index].description.length > 100 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 7, ctx.films[ctx.index].description, 0, 100) + "..." : ctx.films[ctx.index].description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index + 1 != ctx.films.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".card-img[_ngcontent-%COMP%]{\n  min-height: 400px;\n  max-height: 700px;\n}\na[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{\n  pointer-events: all;\n  position: relative;;\n}\n.card-button[_ngcontent-%COMP%] {\n  left : 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbXMvZmlsbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZpbG1zL2ZpbG1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWd7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbn1cbmEsZGl2e1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7O1xufVxuLmNhcmQtYnV0dG9uIHtcbiAgbGVmdCA6IDgwJTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-films',
                templateUrl: './films.component.html',
                styleUrls: ['./films.component.css']
            }]
    }], function () { return [{ type: _services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.success = false;
        this.onlogin = false;
    }
    ngOnInit() {
    }
    login() {
        if (this.email == null || this.password == null) {
            this.errormessage = " Enter email and password";
            return console.error('enter email/password');
        }
        if (!this.validateEmail(this.email)) {
            this.errormessage = " Email is not Valid";
            return console.log(this.validateEmail(this.email));
        }
        this.onlogin = true;
        this.authService.login(this.email, this.password).subscribe((data) => {
            this.onlogin = false;
            console.log('data', data);
            if (data.status) {
                this.success = true;
                this.router.navigate(['/films']);
            }
            else {
                this.errormessage = data.message;
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 4, consts: [[1, "container", "h-100", "mt-5"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "mt-2"], [1, "d-flex", "justify-content-center", "form_container"], [1, "input-group", "mb-3"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", "fa-envelope-square"], ["type", "email", "name", "email", "value", "", "placeholder", "email", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], [1, "input-group", "mb-2"], [1, "fa", "fa-key"], ["type", "password", "name", "password", "value", "", "placeholder", "password", 1, "form-control", "input_pass", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customControlInline", 1, "custom-control-input"], ["for", "customControlInline", 1, "custom-control-label"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "submit", "name", "signin", 1, "btn", "login_btn", 3, "disabled", "click"], [1, "text-danger", "text-center"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/register", 1, "ml-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.onlogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errormessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".user_card[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 350px;\n  margin-top: 0;\n  margin-bottom: auto;\n  background: lightgrey;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n\n}\n\n.form_container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important;\n}\n\n.login_btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.login_container[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important;\n}\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #c0392b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDZDQUE2QztBQUMvQzs7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX2NhcmQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG4uZm9ybV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function RegisterComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registered Successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.success = false;
        this.onregister = false;
        this.errormessage = '';
    }
    ngOnInit() {
    }
    register() {
        this.errormessage = "";
        if (this.name == '' || this.email == '' || this.password == '') {
            console.log('error');
            this.errormessage = " All fields are Required";
            return false;
        }
        this.onregister = true;
        let user = {
            'name': this.name,
            'email': this.email,
            'password': this.password
        };
        this.authService.register(user).subscribe(data => {
            this.onregister = false;
            if (data.status) {
                this.success = true;
                this.name = '';
                this.email = '';
                this.password = '';
            }
            else {
                this.errormessage = data.message;
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 37, vars: 5, consts: [[1, "container", "h-100", "mt-5"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "mt-2"], [1, "d-flex", "justify-content-center", "form_container"], [1, "input-group", "mb-3"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "name", "value", "", "placeholder", "name", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-envelope-square"], ["type", "email", "name", "email", "value", "", "placeholder", "email", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-key"], ["type", "password", "name", "password", "value", "", "placeholder", "password", 1, "form-control", "input_pass", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "submit", "name", "signup", 1, "btn", "login_btn", 3, "click"], ["class", "text-success", 4, "ngIf"], [1, "text-danger"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/login", 1, "ml-2"], [1, "text-success"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_27_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_p_29_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errormessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".user_card[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 350px;\n  margin-top: 0;\n  margin-bottom: auto;\n  background: lightgrey;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px;\n\n}\n\n.form_container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important;\n}\n\n.login_btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.login_container[_ngcontent-%COMP%] {\n  padding: 0 2rem;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important;\n}\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #c0392b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUUsb0ZBQW9GO0VBQ3BGLGlGQUFpRjtFQUNqRixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDZDQUE2QztBQUMvQzs7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX2NhcmQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG4uZm9ybV9jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAycmVtO1xufVxuLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUser = {};
    }
    login(email, password) {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"] + 'auth/login', { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (result.status) {
                localStorage.setItem('access_token', result.access_token);
            }
            return result;
        }));
    }
    logout() {
        localStorage.removeItem('access_token');
    }
    register(user) {
        console.log('data', user);
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"] + 'auth/register', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => {
            return result;
        }));
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }
    getUserProfile(id) {
        let api = `${_app_constant__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"]}/user-profile/${id}`;
        return this.http.get(api, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
    get loggedIn() {
        return (localStorage.getItem('access_token') !== null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/films.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/films.service.ts ***!
  \*******************************************/
/*! exports provided: FilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsService", function() { return FilmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class FilmsService {
    constructor(http) {
        this.http = http;
    }
    createFilm(film) {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'films/create', film)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            console.log('result', result);
            if (result.success) {
                return true;
            }
        }));
    }
    getAllFilms() {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'films/getAllfilms', {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result;
        }));
    }
    getFilm(id) {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'films/getfilm', { id: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result;
        }));
    }
    postComment(comment, filmid) {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'films/comment', { comment, filmid })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result;
        }));
    }
    getAllComments(film_id) {
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'comments/getAllcomments', { film_id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            return result;
        }));
    }
}
FilmsService.ɵfac = function FilmsService_Factory(t) { return new (t || FilmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FilmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilmsService, factory: FilmsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilmsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class UploadService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
    }
    upload(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"] + 'uploadImage', formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
            console.log('result', result);
            if (result.success) {
                // localStorage.setItem('access_token', result.access_token);
                return result;
            }
        }));
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "page-footer", "font-small", "dark"], [1, "mini-footer"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "copyright-text"], ["href", "#"], [1, "go_top"], [1, "icon-arrow-up"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A9 2018 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". All rights reserved. Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shafaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: black;\n  text-align: center;\n  padding: 20px;\n}\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n text-decoration:none;\n transition:.3s ease\n}\na[_ngcontent-%COMP%]:focus {\n outline:0\n}\nimg[_ngcontent-%COMP%] {\n max-width:100%\n}\np[_ngcontent-%COMP%] {\n font-size:16px;\n line-height:30px;\n color:#898b96;\n font-weight:300\n}\na[_ngcontent-%COMP%] {\n color:#5867dd\n}\n.mini-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n margin:0;\n line-height:26px;\n font-size:15px;\n color:#999\n}\n.mini-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n color:#5867dd\n}\n.mini-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n color:#34bfa3\n}\n@media (max-width:991px) {\n .footer-menu[_ngcontent-%COMP%] {\n  padding-left:0\n }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0NBQ0Msb0JBQW9CO0NBR3BCO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDLFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDO0VBQ0M7Q0FDRDtBQUNEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbmE6Zm9jdXMsYTpob3ZlciB7XG4gdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gLXdlYmtpdC10cmFuc2l0aW9uOi4zcyBlYXNlO1xuIC1vLXRyYW5zaXRpb246LjNzIGVhc2U7XG4gdHJhbnNpdGlvbjouM3MgZWFzZVxufVxuYTpmb2N1cyB7XG4gb3V0bGluZTowXG59XG5pbWcge1xuIG1heC13aWR0aDoxMDAlXG59XG5wIHtcbiBmb250LXNpemU6MTZweDtcbiBsaW5lLWhlaWdodDozMHB4O1xuIGNvbG9yOiM4OThiOTY7XG4gZm9udC13ZWlnaHQ6MzAwXG59XG5hIHtcbiBjb2xvcjojNTg2N2RkXG59XG4ubWluaS1mb290ZXIgcCB7XG4gbWFyZ2luOjA7XG4gbGluZS1oZWlnaHQ6MjZweDtcbiBmb250LXNpemU6MTVweDtcbiBjb2xvcjojOTk5XG59XG4ubWluaS1mb290ZXIgcCBhIHtcbiBjb2xvcjojNTg2N2RkXG59XG4ubWluaS1mb290ZXIgcCBhOmhvdmVyIHtcbiBjb2xvcjojMzRiZmEzXG59XG5AbWVkaWEgKG1heC13aWR0aDo5OTFweCkge1xuIC5mb290ZXItbWVudSB7XG4gIHBhZGRpbmctbGVmdDowXG4gfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 0, consts: [[1, "bs-example"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["routerLink", "/films", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "justify-content-between"], [1, "navbar-nav"], ["routerLink", "/films", 1, "nav-item", "nav-link", "active"], [1, "form-inline"], [1, "input-group"], [1, "input-group-append"], ["type", "button", "routerLink", "films/create", 1, "btn", "btn-secondary"], [1, "fa", "fa-pencil"], ["routerLink", "/login", 1, "nav-item", "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create New Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shafaz/Code/films-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map