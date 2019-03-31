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

/***/ "./src/app/Components/create-post/create-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/create-post/create-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-post-text\r\n{\r\n    width:100%;\r\n    font-size: 20px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n.post-content{\r\n    font-size: 20px;\r\n    margin-bottom:0; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcG9zdC10ZXh0XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnBvc3QtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/create-post/create-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/create-post/create-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"post-card\">\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n  <mat-card-content class=\"post-content\">\n    <mat-form-field class=\"my-post-text\">\n      <textarea matInput placeholder=\"My Post\" rows=\"7\" [(ngModel)]=\"content\"></textarea>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>Add Photo</button>\n    <button (click)=\"createPost(content)\" [disabled]=\"!content||content.trim()==''\" mat-button>POST</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/Components/create-post/create-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/create-post/create-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent() {
        this.createdPost = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.content = "";
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent.prototype.createPost = function (post) {
        this.createdPost.emit(post);
        this.content = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreatePostComponent.prototype, "createdPost", void 0);
    CreatePostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/Components/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/Components/create-post/create-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/Components/dialog/dialog.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/dialog/dialog.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/dialog/dialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/dialog/dialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p>{{data.content}}</p>\n  <!-- <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field> -->\n</div>\n<div mat-dialog-actions>\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button> -->\n  <!-- <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button> -->\n  <button mat-button (click)=\"onNoClick()\">OK</button>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/Components/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/Components/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    height: 70px;\r\n    margin: 0;\r\n    width: 100%;\r\n    border-bottom: 1px solid #cccccc;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 999;\r\n    background: white;\r\n}\r\n.home-app-title\r\n{\r\n    color: #030558;\r\n    font-size: 20px;\r\n    margin-top: 25px;\r\n    padding-left: 20px;\r\n}\r\n.user-profile\r\n{\r\n    display: inline-block;\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 10px;\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLE1BQU07SUFDTixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5ob21lLWFwcC10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogIzAzMDU1ODtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnVzZXItcHJvZmlsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3 class=\"home-app-title\">Student Portal</h3>\n  <button mat-button [matMenuTriggerFor]=\"menu\" class=\"user-profile\"><mat-icon>account_circle</mat-icon><span>{{userData.firstName}} {{userData.lastName}}</span></button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <mat-icon>person_outline</mat-icon>\n      <span>Profile</span>\n    </button>\n    <button (click)=\"doLogout()\" mat-menu-item>\n      <mat-icon>power_settings_new</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</div>"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userData = this.dataService.userData;
    };
    HeaderComponent.prototype.doLogout = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-header-image {\r\n    background-image: url('/assets/user.jpg');\r\n    background-size: cover;\r\n}\r\n.post-card {\r\n    max-width: 100%;\r\n    margin: 40px 0;\r\n    box-shadow: 15px 5px 10px #cccccc;\r\n  }\r\n.post-content{\r\n    font-size: 20px;\r\n}\r\n.my-post-text\r\n{\r\n    width:100%;\r\n    font-size: 20px;\r\n    padding-bottom: 0;\r\n}\r\n.post-content{\r\n    font-size: 20px;\r\n    margin-bottom:0; \r\n}\r\n.likes-container{\r\n    font-size: 12px;\r\n}\r\n.likes-span{\r\n    margin-right:10px;\r\n    cursor: pointer;\r\n}\r\n.thumb-up-icon\r\n{\r\n    font-size: 16px;\r\n}\r\n.comment-field\r\n{\r\n    width: 90%;\r\n    margin-left: 2.5%\r\n}\r\n.comment-name\r\n{\r\n    font-size: 13px;\r\n    color:#555555\r\n}\r\n.comment-content\r\n{\r\n    font-size: 16px;\r\n    color:#000000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUNBQWlDO0VBQ25DO0FBQ0Y7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxVQUFVO0lBQ1Y7QUFDSjtBQUNBOztJQUVJLGVBQWU7SUFDZjtBQUNKO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91c2VyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucG9zdC1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgYm94LXNoYWRvdzogMTVweCA1cHggMTBweCAjY2NjY2NjO1xyXG4gIH1cclxuLnBvc3QtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ubXktcG9zdC10ZXh0XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnBvc3QtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MDsgXHJcbn1cclxuLmxpa2VzLWNvbnRhaW5lcntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubGlrZXMtc3BhbntcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50aHVtYi11cC1pY29uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29tbWVudC1maWVsZFxyXG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSVcclxufVxyXG4uY29tbWVudC1uYW1lXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiM1NTU1NTVcclxufVxyXG4uY29tbWVudC1jb250ZW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"post-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"post-header-image\"></div>\n    <mat-card-title>{{post.createrName}}</mat-card-title>\n    <mat-card-subtitle>{{post.createdOn}}</mat-card-subtitle>\n  </mat-card-header>\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n  <mat-card-content class=\"post-content\" *ngIf=\"!editing\">\n    <p>\n      {{post.content}}\n    </p>\n    <div class=\"likes-container\">\n      <span class=\"likes-span\" *ngIf=\"post.likes\">{{post.likes.length}} likes </span>\n      <span class=\"likes-span\" *ngIf=\"post.comments\" (click)=\"toggleComments()\">{{post.comments.length}} comments</span>\n    </div>\n  </mat-card-content>\n  <mat-card-actions *ngIf=\"!editing\">\n    <button mat-button (click)=\"toggleLike()\" *ngIf=\"!myPost\">\n      <mat-icon color=\"primary\" class=\"thumb-up-icon\" *ngIf=\"liked\">\n        thumb_up\n      </mat-icon>\n      <mat-icon class=\"thumb-up-icon\" *ngIf=\"!liked\">\n        thumb_up\n      </mat-icon>\n    </button>\n    <button mat-button (click)=\"toggleComments()\" *ngIf=\"!myPost\">Comments</button>\n    <button mat-button (click)=\"editPost()\" *ngIf=\"myPost\">Edit</button>\n    <button mat-button (click)=\"deletePost()\" *ngIf=\"myPost\">Delete</button>\n  </mat-card-actions>\n  <mat-card-content *ngIf=\"editing\" class=\"post-content\">\n    <mat-form-field class=\"my-post-text\">\n      <textarea matInput placeholder=\"My Post\" rows=\"7\" [(ngModel)]=\"content\"></textarea>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions *ngIf=\"editing\">\n    <button mat-button (click)=\"cancelEdit()\">Cancel</button>\n    <button (click)=\"updatePost(content)\" [disabled]=\"!content||content.trim()==''\" mat-button>Edit</button>\n  </mat-card-actions>\n  <mat-form-field class=\"my-post-text comment-field\" *ngIf=\"showComments\">\n    <textarea matInput placeholder=\"My Comment\" rows=\"5\" [(ngModel)]=\"commentText\"></textarea>\n  </mat-form-field>\n  <mat-card-actions class=\"comment-field\" *ngIf=\"showComments\" align=\"right\">\n      <button (click)=\"addComment()\" [disabled]=\"!commentText||commentText.trim()==''\" mat-raised-button color=\"primary\">post</button>\n    </mat-card-actions>\n  <mat-card class=\"comment-card\" *ngIf=\"showComments&&post.comments&&post.comments.length>0\">\n    <mat-card-header *ngFor=\"let comment of post.comments\">\n        <div mat-card-avatar class=\"post-header-image\"></div>\n        <mat-card-title class=\"comment-name\">{{comment.name}}</mat-card-title>\n        <mat-card-subtitle class=\"comment-content\">{{comment.comment}}</mat-card-subtitle>\n    </mat-card-header>\n  </mat-card>\n</mat-card>"

/***/ }),

/***/ "./src/app/Components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(httpService, dataService) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.like = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.comment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PostComponent.prototype.ngOnInit = function () {
        this.content = this.post.content;
        this.findIfLiked();
    };
    PostComponent.prototype.deletePost = function () {
        this.delete.emit(this.post);
    };
    PostComponent.prototype.editPost = function () {
        this.editing = true;
    };
    PostComponent.prototype.cancelEdit = function () {
        this.editing = false;
    };
    PostComponent.prototype.updatePost = function () {
        var data = {
            post: this.post,
            content: this.content
        };
        this.edit.emit(data);
    };
    PostComponent.prototype.addComment = function () {
        var data = {
            "post": this.post,
            "comment": this.commentText
        };
        this.comment.emit(data);
    };
    PostComponent.prototype.findIfLiked = function () {
        if (this.post.likes && this.post.likes.length != 0) {
            var likes = this.post.likes;
            for (var i = 0; i < likes.length; i++) {
                if (likes[i].email == this.dataService.userData.email) {
                    this.liked = true;
                    return;
                }
            }
        }
    };
    PostComponent.prototype.toggleLike = function () {
        var data = {
            "post": this.post,
            "liked": !this.liked,
        };
        this.like.emit(data);
    };
    PostComponent.prototype.toggleComments = function () {
        this.showComments = !this.showComments;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PostComponent.prototype, "myPost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "edit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "like", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "comment", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/Components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/Components/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home-page/academics-page/academics-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/home-page/academics-page/academics-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content-container{\r\n    padding: 20px;\r\n}\r\n.app-stretched-tab\r\n{\r\n    width: 100%;\r\n}\r\n.no-posts\r\n{\r\n    text-align: center;\r\n    color: #555555;\r\n    padding: 100px;\r\n}\r\n.home-spinner\r\n{\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2FjYWRlbWljcy1wYWdlL2FjYWRlbWljcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXBhZ2UvYWNhZGVtaWNzLXBhZ2UvYWNhZGVtaWNzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uYXBwLXN0cmV0Y2hlZC10YWJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLXBvc3RzXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLmhvbWUtc3Bpbm5lclxyXG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/home-page/academics-page/academics-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/home-page/academics-page/academics-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-content-container\">\n  <mat-tab-group mat-stretch-tabs class=\"app-stretched-tabs mat-elevation-z4\" (selectedTabChange)=\"getPosts()\">\n    <mat-tab label=\"All Posts\">\n      <div *ngIf=\"(posts && posts.length>=1)&&!loading\">\n        <div *ngFor=\"let post of posts;i as index\">\n          <app-post id='i' [post]=\"post\" (like)=\"onPostLiked($event)\" (comment)=\"onPostCommented($event)\"></app-post>\n        </div>\n      </div>\n      <div *ngIf=\"(!posts||posts.length==0)&&!loading\">\n        <h2 class=\"no-posts\">\n          No Posts available. Please create a post.\n        </h2>\n      </div>\n      <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n    </mat-tab>\n    <mat-tab label=\"My Posts\">\n      <div *ngIf=\"(myPosts && myPosts.length>=1)&&!loading\">\n        <div *ngFor=\"let post of myPosts;i as index\">\n          <app-post id='i' [post]=\"post\" myPost=\"true\" (delete)=\"onDeletePost($event)\" (edit)=\"onEditPost($event)\"></app-post>\n        </div>\n      </div>\n      <div *ngIf=\"(!myPosts||myPosts.length==0)&&!loading\">\n        <h2 class=\"no-posts\">\n          No Posts available. Please create a post.\n        </h2>\n      </div>\n      <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n    </mat-tab>\n    <mat-tab label=\"Create new post\">\n      <app-create-post *ngIf=\"!loading\" (createdPost)=\"onPostCreated($event)\"></app-create-post>\n      <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/Pages/home-page/academics-page/academics-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Pages/home-page/academics-page/academics-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: AcademicsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPageComponent", function() { return AcademicsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");





var AcademicsPageComponent = /** @class */ (function () {
    function AcademicsPageComponent(http, dataService, dialogService) {
        this.http = http;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    AcademicsPageComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    AcademicsPageComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.http.getPosts('academics').subscribe(function (posts) {
            _this.posts = posts;
            _this.myPosts = [];
            _this.getMyPosts(posts);
            _this.loading = false;
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
        });
    };
    AcademicsPageComponent.prototype.onPostCreated = function (post) {
        var _this = this;
        this.loading = true;
        this.http.getPosts('academics').subscribe(function (posts) {
            var newPost = {
                "createdBy": _this.dataService.userData.email,
                "createrName": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                "createdOn": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                "content": post,
                "image": null,
                "likes": 0,
                "comments": []
            };
            if (posts == null || posts == undefined) {
                posts = [];
            }
            posts.unshift(newPost);
            _this.http.setPosts('academics', posts).subscribe(function () {
                _this.dialogService.openDialog("Success", "Post created successfully");
                _this.loading = false;
            }, function (error) {
                _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            });
        });
    };
    AcademicsPageComponent.prototype.getMyPosts = function (posts) {
        if (posts && posts.length > 0) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].createdBy == this.dataService.userData.email) {
                    if (!this.myPosts) {
                        this.myPosts = [];
                    }
                    this.myPosts.push(posts[i]);
                }
            }
        }
    };
    AcademicsPageComponent.prototype.onDeletePost = function (post) {
        var _this = this;
        this.http.getPosts('academics').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(post)) {
                        posts.splice(i, 1);
                        _this.updatePosts(posts, "Post deleted successfully");
                        return;
                    }
                }
            }
        });
    };
    AcademicsPageComponent.prototype.onEditPost = function (data) {
        var _this = this;
        this.http.getPosts('academics').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        posts[i].content = data.content;
                        _this.updatePosts(posts, "Post edited successfully");
                        return;
                    }
                }
            }
        });
    };
    AcademicsPageComponent.prototype.onPostCommented = function (data) {
        var _this = this;
        this.http.getPosts('academics').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        if (!posts[i].comments) {
                            posts[i].comments = [];
                        }
                        var comment = {
                            "name": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                            "comment": data.comment,
                            "email": _this.dataService.userData.email
                        };
                        posts[i].comments.unshift(comment);
                        _this.updatePosts(posts, "Comment added successfully");
                        return;
                    }
                }
            }
        });
    };
    AcademicsPageComponent.prototype.onPostLiked = function (data) {
        var _this = this;
        this.http.getPosts('academics').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        var likes;
                        if (posts[i].likes) {
                            likes = posts[i].likes;
                            var liked = false;
                            for (var j = 0; j < likes.length; j++) {
                                if (likes[j].email == _this.dataService.userData.email) {
                                    likes.splice(j, 1);
                                    liked = true;
                                    posts[i].likes = likes;
                                    _this.updatePosts(posts, "Post unliked successfully");
                                }
                            }
                            if (!liked) {
                                var like = {
                                    email: _this.dataService.userData.email,
                                    name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                                };
                                likes.unshift(like);
                                posts[i].likes = likes;
                                _this.updatePosts(posts, "Post liked successfully");
                            }
                        }
                        else {
                            likes = [];
                            var like = {
                                email: _this.dataService.userData.email,
                                name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                            };
                            likes.unshift(like);
                            posts[i].likes = likes;
                            _this.updatePosts(posts, "Post liked successfully");
                        }
                        return;
                    }
                }
            }
        });
    };
    AcademicsPageComponent.prototype.updatePosts = function (posts, message) {
        var _this = this;
        this.loading = true;
        this.http.setPosts('academics', posts).subscribe(function () {
            _this.dialogService.openDialog("Success", message);
            _this.loading = false;
            _this.getPosts();
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            _this.loading = false;
        });
    };
    AcademicsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academics-page',
            template: __webpack_require__(/*! ./academics-page.component.html */ "./src/app/Pages/home-page/academics-page/academics-page.component.html"),
            styles: [__webpack_require__(/*! ./academics-page.component.css */ "./src/app/Pages/home-page/academics-page/academics-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], AcademicsPageComponent);
    return AcademicsPageComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home-page/careers-page/careers-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Pages/home-page/careers-page/careers-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content-container{\r\n    padding: 20px;\r\n}\r\n.app-stretched-tab\r\n{\r\n    width: 100%;\r\n}\r\n.no-posts\r\n{\r\n    text-align: center;\r\n    color: #555555;\r\n    padding: 100px;\r\n}\r\n.home-spinner\r\n{\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2NhcmVlcnMtcGFnZS9jYXJlZXJzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtcGFnZS9jYXJlZXJzLXBhZ2UvY2FyZWVycy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250ZW50LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmFwcC1zdHJldGNoZWQtdGFiXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uby1wb3N0c1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcbi5ob21lLXNwaW5uZXJcclxue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/home-page/careers-page/careers-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Pages/home-page/careers-page/careers-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-content-container\">\n    <mat-tab-group mat-stretch-tabs class=\"app-stretched-tabs mat-elevation-z4\" (selectedTabChange)=\"getPosts()\">\n      <mat-tab label=\"All Posts\">\n        <div *ngIf=\"(posts && posts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of posts;i as index\">\n            <app-post id='i' [post]=\"post\" (like)=\"onPostLiked($event)\" (comment)=\"onPostCommented($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!posts||posts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"My Posts\">\n        <div *ngIf=\"(myPosts && myPosts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of myPosts;i as index\">\n            <app-post id='i' [post]=\"post\" myPost=\"true\" (delete)=\"onDeletePost($event)\" (edit)=\"onEditPost($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!myPosts||myPosts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"Create new post\">\n        <app-create-post *ngIf=\"!loading\" (createdPost)=\"onPostCreated($event)\"></app-create-post>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n    </mat-tab-group>\n  </div>"

/***/ }),

/***/ "./src/app/Pages/home-page/careers-page/careers-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Pages/home-page/careers-page/careers-page.component.ts ***!
  \************************************************************************/
/*! exports provided: CareersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersPageComponent", function() { return CareersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");





var CareersPageComponent = /** @class */ (function () {
    function CareersPageComponent(http, dataService, dialogService) {
        this.http = http;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    CareersPageComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    CareersPageComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.http.getPosts('careers').subscribe(function (posts) {
            _this.posts = posts;
            _this.myPosts = [];
            _this.getMyPosts(posts);
            _this.loading = false;
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
        });
    };
    CareersPageComponent.prototype.onPostCreated = function (post) {
        var _this = this;
        this.loading = true;
        this.http.getPosts('careers').subscribe(function (posts) {
            var newPost = {
                "createdBy": _this.dataService.userData.email,
                "createrName": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                "createdOn": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                "content": post,
                "image": null,
                "likes": 0,
                "comments": []
            };
            if (posts == null || posts == undefined) {
                posts = [];
            }
            posts.unshift(newPost);
            _this.http.setPosts('careers', posts).subscribe(function () {
                _this.dialogService.openDialog("Success", "Post created successfully");
                _this.loading = false;
            }, function (error) {
                _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            });
        });
    };
    CareersPageComponent.prototype.getMyPosts = function (posts) {
        if (posts && posts.length > 0) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].createdBy == this.dataService.userData.email) {
                    if (!this.myPosts) {
                        this.myPosts = [];
                    }
                    this.myPosts.push(posts[i]);
                }
            }
        }
    };
    CareersPageComponent.prototype.onDeletePost = function (post) {
        var _this = this;
        this.http.getPosts('careers').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(post)) {
                        posts.splice(i, 1);
                        _this.updatePosts(posts, "Post deleted successfully");
                        return;
                    }
                }
            }
        });
    };
    CareersPageComponent.prototype.onEditPost = function (data) {
        var _this = this;
        this.http.getPosts('careers').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        posts[i].content = data.content;
                        _this.updatePosts(posts, "Post edited successfully");
                        return;
                    }
                }
            }
        });
    };
    CareersPageComponent.prototype.onPostCommented = function (data) {
        var _this = this;
        this.http.getPosts('careers').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        if (!posts[i].comments) {
                            posts[i].comments = [];
                        }
                        var comment = {
                            "name": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                            "comment": data.comment,
                            "email": _this.dataService.userData.email
                        };
                        posts[i].comments.unshift(comment);
                        _this.updatePosts(posts, "Comment added successfully");
                        return;
                    }
                }
            }
        });
    };
    CareersPageComponent.prototype.onPostLiked = function (data) {
        var _this = this;
        this.http.getPosts('careers').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        var likes;
                        if (posts[i].likes) {
                            likes = posts[i].likes;
                            var liked = false;
                            for (var j = 0; j < likes.length; j++) {
                                if (likes[j].email == _this.dataService.userData.email) {
                                    likes.splice(j, 1);
                                    liked = true;
                                    posts[i].likes = likes;
                                    _this.updatePosts(posts, "Post unliked successfully");
                                }
                            }
                            if (!liked) {
                                var like = {
                                    email: _this.dataService.userData.email,
                                    name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                                };
                                likes.unshift(like);
                                posts[i].likes = likes;
                                _this.updatePosts(posts, "Post liked successfully");
                            }
                        }
                        else {
                            likes = [];
                            var like = {
                                email: _this.dataService.userData.email,
                                name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                            };
                            likes.unshift(like);
                            posts[i].likes = likes;
                            _this.updatePosts(posts, "Post liked successfully");
                        }
                        return;
                    }
                }
            }
        });
    };
    CareersPageComponent.prototype.updatePosts = function (posts, message) {
        var _this = this;
        this.loading = true;
        this.http.setPosts('careers', posts).subscribe(function () {
            _this.dialogService.openDialog("Success", message);
            _this.loading = false;
            _this.getPosts();
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            _this.loading = false;
        });
    };
    CareersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers-page',
            template: __webpack_require__(/*! ./careers-page.component.html */ "./src/app/Pages/home-page/careers-page/careers-page.component.html"),
            styles: [__webpack_require__(/*! ./careers-page.component.css */ "./src/app/Pages/home-page/careers-page/careers-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], CareersPageComponent);
    return CareersPageComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-menu\r\n{\r\n    position: fixed;\r\n    left:0;\r\n    width: 250px;\r\n    box-shadow: 5px 10px 18px #888888;\r\n    height: 100%; \r\n    top:70px;\r\n}\r\n.side-menu-item\r\n{\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    border-bottom: 1px solid #cccc;\r\n    padding: 20px 0 !important;\r\n}\r\n.side-menu-item:hover{\r\n    box-shadow: 5px 10px 18px #888888;\r\n}\r\n.selected{\r\n    background: #030558;\r\n    color:white;\r\n    font-weight: bold;\r\n}\r\n.content{\r\n    margin-top:70px;\r\n    margin-left:250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osUUFBUTtBQUNaO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbWVudVxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM4ODg4ODg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgdG9wOjcwcHg7XHJcbn1cclxuLnNpZGUtbWVudS1pdGVtXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjYztcclxuICAgIHBhZGRpbmc6IDIwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlLW1lbnUtaXRlbTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODg4ODtcclxufVxyXG4uc2VsZWN0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMwNTU4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6NzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjI1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"side-menu\">\n  <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\" class=\"side-menu-item\" [ngClass]=\"{'selected': selected=='academics'}\" (click)=\"changeSelected('academics')\">Academics</mat-list-item>\n      <mat-list-item role=\"listitem\" class=\"side-menu-item\" [ngClass]=\"{'selected':  selected=='careers'}\" (click)=\"changeSelected('careers')\">Career Posting</mat-list-item>\n      <mat-list-item role=\"listitem\" class=\"side-menu-item\" [ngClass]=\"{'selected':  selected=='immigration'}\" (click)=\"changeSelected('immigration')\">Immigration</mat-list-item>\n      <mat-list-item role=\"listitem\" class=\"side-menu-item\" [ngClass]=\"{'selected':  selected=='social'}\" (click)=\"changeSelected('social')\">Social</mat-list-item>\n  </mat-list>\n</div>\n<div class=\"content\" class=\"content\">\n    <router-outlet ></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/Pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.selected = "academics";
    };
    HomePageComponent.prototype.changeSelected = function (selected) {
        if (this.selected != selected) {
            this.selected = selected;
            this.router.navigate(['/home/' + selected]);
        }
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/Pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/Pages/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home-page/immigration/immigration.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/home-page/immigration/immigration.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content-container{\r\n    padding: 20px;\r\n}\r\n.app-stretched-tab\r\n{\r\n    width: 100%;\r\n}\r\n.no-posts\r\n{\r\n    text-align: center;\r\n    color: #555555;\r\n    padding: 100px;\r\n}\r\n.home-spinner\r\n{\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL2ltbWlncmF0aW9uL2ltbWlncmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXBhZ2UvaW1taWdyYXRpb24vaW1taWdyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uYXBwLXN0cmV0Y2hlZC10YWJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLXBvc3RzXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLmhvbWUtc3Bpbm5lclxyXG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Pages/home-page/immigration/immigration.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Pages/home-page/immigration/immigration.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-content-container\">\n    <mat-tab-group mat-stretch-tabs class=\"app-stretched-tabs mat-elevation-z4\" (selectedTabChange)=\"getPosts()\">\n      <mat-tab label=\"All Posts\">\n        <div *ngIf=\"(posts && posts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of posts;i as index\">\n            <app-post id='i' [post]=\"post\" (like)=\"onPostLiked($event)\" (comment)=\"onPostCommented($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!posts||posts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"My Posts\">\n        <div *ngIf=\"(myPosts && myPosts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of myPosts;i as index\">\n            <app-post id='i' [post]=\"post\" myPost=\"true\" (delete)=\"onDeletePost($event)\" (edit)=\"onEditPost($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!myPosts||myPosts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"Create new post\">\n        <app-create-post *ngIf=\"!loading\" (createdPost)=\"onPostCreated($event)\"></app-create-post>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n    </mat-tab-group>\n  </div>"

/***/ }),

/***/ "./src/app/Pages/home-page/immigration/immigration.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Pages/home-page/immigration/immigration.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImmigrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmigrationComponent", function() { return ImmigrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");





var ImmigrationComponent = /** @class */ (function () {
    function ImmigrationComponent(http, dataService, dialogService) {
        this.http = http;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    ImmigrationComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ImmigrationComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.http.getPosts('immigration').subscribe(function (posts) {
            _this.posts = posts;
            _this.myPosts = [];
            _this.getMyPosts(posts);
            _this.loading = false;
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
        });
    };
    ImmigrationComponent.prototype.onPostCreated = function (post) {
        var _this = this;
        this.loading = true;
        this.http.getPosts('immigration').subscribe(function (posts) {
            var newPost = {
                "createdBy": _this.dataService.userData.email,
                "createrName": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                "createdOn": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                "content": post,
                "image": null,
                "likes": 0,
                "comments": []
            };
            if (posts == null || posts == undefined) {
                posts = [];
            }
            posts.unshift(newPost);
            _this.http.setPosts('immigration', posts).subscribe(function () {
                _this.dialogService.openDialog("Success", "Post created successfully");
                _this.loading = false;
            }, function (error) {
                _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            });
        });
    };
    ImmigrationComponent.prototype.getMyPosts = function (posts) {
        if (posts && posts.length > 0) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].createdBy == this.dataService.userData.email) {
                    if (!this.myPosts) {
                        this.myPosts = [];
                    }
                    this.myPosts.push(posts[i]);
                }
            }
        }
    };
    ImmigrationComponent.prototype.onDeletePost = function (post) {
        var _this = this;
        this.http.getPosts('immigration').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(post)) {
                        posts.splice(i, 1);
                        _this.updatePosts(posts, "Post deleted successfully");
                        return;
                    }
                }
            }
        });
    };
    ImmigrationComponent.prototype.onEditPost = function (data) {
        var _this = this;
        this.http.getPosts('immigration').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        posts[i].content = data.content;
                        _this.updatePosts(posts, "Post edited successfully");
                        return;
                    }
                }
            }
        });
    };
    ImmigrationComponent.prototype.onPostCommented = function (data) {
        var _this = this;
        this.http.getPosts('immigration').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        if (!posts[i].comments) {
                            posts[i].comments = [];
                        }
                        var comment = {
                            "name": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                            "comment": data.comment,
                            "email": _this.dataService.userData.email
                        };
                        posts[i].comments.unshift(comment);
                        _this.updatePosts(posts, "Comment added successfully");
                        return;
                    }
                }
            }
        });
    };
    ImmigrationComponent.prototype.onPostLiked = function (data) {
        var _this = this;
        this.http.getPosts('immigration').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        var likes;
                        if (posts[i].likes) {
                            likes = posts[i].likes;
                            var liked = false;
                            for (var j = 0; j < likes.length; j++) {
                                if (likes[j].email == _this.dataService.userData.email) {
                                    likes.splice(j, 1);
                                    liked = true;
                                    posts[i].likes = likes;
                                    _this.updatePosts(posts, "Post unliked successfully");
                                }
                            }
                            if (!liked) {
                                var like = {
                                    email: _this.dataService.userData.email,
                                    name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                                };
                                likes.unshift(like);
                                posts[i].likes = likes;
                                _this.updatePosts(posts, "Post liked successfully");
                            }
                        }
                        else {
                            likes = [];
                            var like = {
                                email: _this.dataService.userData.email,
                                name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                            };
                            likes.unshift(like);
                            posts[i].likes = likes;
                            _this.updatePosts(posts, "Post liked successfully");
                        }
                        return;
                    }
                }
            }
        });
    };
    ImmigrationComponent.prototype.updatePosts = function (posts, message) {
        var _this = this;
        this.loading = true;
        this.http.setPosts('immigration', posts).subscribe(function () {
            _this.dialogService.openDialog("Success", message);
            _this.loading = false;
            _this.getPosts();
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            _this.loading = false;
        });
    };
    ImmigrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-immigration',
            template: __webpack_require__(/*! ./immigration.component.html */ "./src/app/Pages/home-page/immigration/immigration.component.html"),
            styles: [__webpack_require__(/*! ./immigration.component.css */ "./src/app/Pages/home-page/immigration/immigration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], ImmigrationComponent);
    return ImmigrationComponent;
}());



/***/ }),

/***/ "./src/app/Pages/home-page/social/social.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Pages/home-page/social/social.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content-container{\r\n    padding: 20px;\r\n}\r\n.app-stretched-tab\r\n{\r\n    width: 100%;\r\n}\r\n.no-posts\r\n{\r\n    text-align: center;\r\n    color: #555555;\r\n    padding: 100px;\r\n}\r\n.home-spinner\r\n{\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS1wYWdlL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtcGFnZS9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250ZW50LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmFwcC1zdHJldGNoZWQtdGFiXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uby1wb3N0c1xyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIHBhZGRpbmc6IDEwMHB4O1xyXG59XHJcbi5ob21lLXNwaW5uZXJcclxue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Pages/home-page/social/social.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Pages/home-page/social/social.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-content-container\">\n    <mat-tab-group mat-stretch-tabs class=\"app-stretched-tabs mat-elevation-z4\" (selectedTabChange)=\"getPosts()\">\n      <mat-tab label=\"All Posts\">\n        <div *ngIf=\"(posts && posts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of posts;i as index\">\n            <app-post id='i' [post]=\"post\" (like)=\"onPostLiked($event)\" (comment)=\"onPostCommented($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!posts||posts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"My Posts\">\n        <div *ngIf=\"(myPosts && myPosts.length>=1)&&!loading\">\n          <div *ngFor=\"let post of myPosts;i as index\">\n            <app-post id='i' [post]=\"post\" myPost=\"true\" (delete)=\"onDeletePost($event)\" (edit)=\"onEditPost($event)\"></app-post>\n          </div>\n        </div>\n        <div *ngIf=\"(!myPosts||myPosts.length==0)&&!loading\">\n          <h2 class=\"no-posts\">\n            No Posts available. Please create a post.\n          </h2>\n        </div>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n      <mat-tab label=\"Create new post\">\n        <app-create-post *ngIf=\"!loading\" (createdPost)=\"onPostCreated($event)\"></app-create-post>\n        <mat-spinner *ngIf=\"loading\" class=\"home-spinner\"></mat-spinner>\n      </mat-tab>\n    </mat-tab-group>\n  </div>"

/***/ }),

/***/ "./src/app/Pages/home-page/social/social.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Pages/home-page/social/social.component.ts ***!
  \************************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");





var SocialComponent = /** @class */ (function () {
    function SocialComponent(http, dataService, dialogService) {
        this.http = http;
        this.dataService = dataService;
        this.dialogService = dialogService;
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    SocialComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.http.getPosts('social').subscribe(function (posts) {
            _this.posts = posts;
            _this.myPosts = [];
            _this.getMyPosts(posts);
            _this.loading = false;
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
        });
    };
    SocialComponent.prototype.onPostCreated = function (post) {
        var _this = this;
        this.loading = true;
        this.http.getPosts('social').subscribe(function (posts) {
            var newPost = {
                "createdBy": _this.dataService.userData.email,
                "createrName": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                "createdOn": new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                "content": post,
                "image": null,
                "likes": 0,
                "comments": []
            };
            if (posts == null || posts == undefined) {
                posts = [];
            }
            posts.unshift(newPost);
            _this.http.setPosts('social', posts).subscribe(function () {
                _this.dialogService.openDialog("Success", "Post created successfully");
                _this.loading = false;
            }, function (error) {
                _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            });
        });
    };
    SocialComponent.prototype.getMyPosts = function (posts) {
        if (posts && posts.length > 0) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].createdBy == this.dataService.userData.email) {
                    if (!this.myPosts) {
                        this.myPosts = [];
                    }
                    this.myPosts.push(posts[i]);
                }
            }
        }
    };
    SocialComponent.prototype.onDeletePost = function (post) {
        var _this = this;
        this.http.getPosts('social').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(post)) {
                        posts.splice(i, 1);
                        _this.updatePosts(posts, "Post deleted successfully");
                        return;
                    }
                }
            }
        });
    };
    SocialComponent.prototype.onEditPost = function (data) {
        var _this = this;
        this.http.getPosts('social').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        posts[i].content = data.content;
                        _this.updatePosts(posts, "Post edited successfully");
                        return;
                    }
                }
            }
        });
    };
    SocialComponent.prototype.onPostCommented = function (data) {
        var _this = this;
        this.http.getPosts('social').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        if (!posts[i].comments) {
                            posts[i].comments = [];
                        }
                        var comment = {
                            "name": _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName,
                            "comment": data.comment,
                            "email": _this.dataService.userData.email
                        };
                        posts[i].comments.unshift(comment);
                        _this.updatePosts(posts, "Comment added successfully");
                        return;
                    }
                }
            }
        });
    };
    SocialComponent.prototype.onPostLiked = function (data) {
        var _this = this;
        this.http.getPosts('social').subscribe(function (posts) {
            if (posts) {
                for (var i = 0; i < posts.length; i++) {
                    if (JSON.stringify(posts[i]) == JSON.stringify(data.post)) {
                        var likes;
                        if (posts[i].likes) {
                            likes = posts[i].likes;
                            var liked = false;
                            for (var j = 0; j < likes.length; j++) {
                                if (likes[j].email == _this.dataService.userData.email) {
                                    likes.splice(j, 1);
                                    liked = true;
                                    posts[i].likes = likes;
                                    _this.updatePosts(posts, "Post unliked successfully");
                                }
                            }
                            if (!liked) {
                                var like = {
                                    email: _this.dataService.userData.email,
                                    name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                                };
                                likes.unshift(like);
                                posts[i].likes = likes;
                                _this.updatePosts(posts, "Post liked successfully");
                            }
                        }
                        else {
                            likes = [];
                            var like = {
                                email: _this.dataService.userData.email,
                                name: _this.dataService.userData.firstName + " " + _this.dataService.userData.lastName
                            };
                            likes.unshift(like);
                            posts[i].likes = likes;
                            _this.updatePosts(posts, "Post liked successfully");
                        }
                        return;
                    }
                }
            }
        });
    };
    SocialComponent.prototype.updatePosts = function (posts, message) {
        var _this = this;
        this.loading = true;
        this.http.setPosts('social', posts).subscribe(function () {
            _this.dialogService.openDialog("Success", message);
            _this.loading = false;
            _this.getPosts();
        }, function (error) {
            _this.dialogService.openDialog("Failure", "Failed to contact server please try again");
            _this.loading = false;
        });
    };
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/Pages/home-page/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/Pages/home-page/social/social.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n.login-form-item {\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n  \r\n.login-container{\r\n    width: 500px;\r\n    position: absolute;\r\n    top: 200px;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    border: 1px solid #3333;\r\n    padding: 50px;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.login-app-title\r\n{\r\n    color: #030558;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n.login-title\r\n{\r\n    color:#555555;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n    padding-bottom: 30px;\r\n}\r\n  \r\n.login-button\r\n{\r\n    font-size: 20px;\r\n    padding:5px 0px;\r\n    margin-top: 20px;\r\n}\r\n  \r\n.login-button-right\r\n{\r\n    float: right;\r\n    padding:5px 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7O0lBRUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUNBOztJQUVJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4ubG9naW4tZm9ybS1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzM7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ubG9naW4tYXBwLXRpdGxlXHJcbntcclxuICAgIGNvbG9yOiAjMDMwNTU4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxvZ2luLXRpdGxlXHJcbntcclxuICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmxvZ2luLWJ1dHRvblxyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nOjVweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5sb2dpbi1idXR0b24tcmlnaHRcclxue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzo1cHggMjBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/Pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <h3 class=\"login-app-title\">Student Portal</h3>\n  <div class=\"login-title\">Sign in</div>\n    <form class=\"login-form\" [formGroup]=\"loginForm\">\n        <mat-form-field class=\"login-form-item\">\n          <input type=\"text\" matInput placeholder=\"Email\" formControlName=\"email\">\n          <mat-error *ngIf=\"loginForm.controls.email.invalid\">Invalid</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"login-form-item\">\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n            <mat-error *ngIf=\"loginForm.controls.password.invalid\">Invalid</mat-error>\n        </mat-form-field>\n        <div>\n            <button mat-button color=\"primary\" class=\"login-button\" (click)=\"doRegister(event)\">Create account</button>\n            <button mat-raised-button color=\"primary\" class=\"login-button login-button-right\" (click)=\"doLogin(event)\" [disabled]=\"!loginForm.valid\">Login</button>\n        </div>\n      </form>\n</div>"

/***/ }),

/***/ "./src/app/Pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, httpService, dataService, dialog) {
        this.router = router;
        this.httpService = httpService;
        this.dataService = dataService;
        this.dialog = dialog;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)])
        });
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.doLogin = function (event) {
        var _this = this;
        this.dataService.showSpinner();
        var user = {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        };
        this.httpService.getUsers().subscribe(function (users) {
            _this.dataService.hideSpinner();
            if (_this.isValidUser(users, user)) {
                console.log("Login successful");
                _this.router.navigate(["home"]);
            }
            else {
                _this.dialog.openDialog('Login Failed', 'Invalid username or password');
            }
        }, function (error) {
            _this.dataService.hideSpinner();
            console.log(error);
        });
    };
    LoginPageComponent.prototype.doRegister = function (event) {
        this.router.navigate(["/register"]);
    };
    LoginPageComponent.prototype.isValidUser = function (users, user) {
        if (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == user.email && users[i].password == user.password) {
                    this.dataService.setUserData(users[i]);
                    return true;
                }
            }
        }
        return false;
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/Pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/Pages/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/Pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n  }\r\n  \r\n.login-form-item {\r\n    width: 100%;\r\n    font-size: 20px;\r\n}\r\n  \r\n.register-container{\r\n    width: 700px;\r\n    position: absolute;\r\n    top: 100px;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    border: 1px solid #3333;\r\n    padding: 50px;\r\n    border-radius: 10px;\r\n}\r\n  \r\n.login-app-title\r\n{\r\n    color: #030558;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n  \r\n.login-title\r\n{\r\n    color:#555555;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    margin-top: 0;\r\n    padding-bottom: 30px;\r\n}\r\n  \r\n.login-button\r\n{\r\n    font-size: 20px;\r\n    padding:5px 0px;\r\n    margin-top: 20px;\r\n}\r\n  \r\n.login-button-right\r\n{\r\n    float: right;\r\n    padding:5px 20px;\r\n}\r\n  \r\n.item-half-size\r\n{\r\n    width: 47.5%;\r\n}\r\n  \r\n.margin-right-five-percent\r\n{\r\n    margin-right: 5%;\r\n}\r\n  \r\n.register-radio-button{\r\n    margin :30px 50px 10px 0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVGO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBQ0E7O0lBRUksZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmxvZ2luLWZvcm0taXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucmVnaXN0ZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmxvZ2luLWFwcC10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogIzAzMDU1ODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5sb2dpbi10aXRsZVxyXG57XHJcbiAgICBjb2xvcjojNTU1NTU1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5sb2dpbi1idXR0b25cclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzo1cHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubG9naW4tYnV0dG9uLXJpZ2h0XHJcbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6NXB4IDIwcHg7XHJcbn1cclxuLml0ZW0taGFsZi1zaXplXHJcbntcclxuICAgIHdpZHRoOiA0Ny41JTtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LWZpdmUtcGVyY2VudFxyXG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5yZWdpc3Rlci1yYWRpby1idXR0b257XHJcbiAgICBtYXJnaW4gOjMwcHggNTBweCAxMHB4IDBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/Pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <h3 class=\"login-app-title\">Student Portal</h3>\n  <div class=\"login-title\">Create new account</div>\n  <form class=\"login-form\" [formGroup]=\"profileForm\">\n    <mat-form-field class=\"login-form-item item-half-size margin-right-five-percent\">\n      <mat-select placeholder=\"Title\" formControlName=\"title\" required>\n        <mat-option *ngFor=\"let title of titles\" [value]=\"title\">\n          {{title}}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"profileForm.controls.title.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item item-half-size\">\n      <input type=\"text\" matInput placeholder=\"First Name\" formControlName=\"firstName\" required>\n      <mat-error *ngIf=\"profileForm.controls.firstName.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item item-half-size margin-right-five-percent\">\n      <input type=\"text\" matInput placeholder=\"Middle Name\" formControlName=\"middleName\">\n      <mat-error *ngIf=\"profileForm.controls.middleName.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item item-half-size\">\n      <input type=\"text\" matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\n      <mat-error *ngIf=\"profileForm.controls.lastName.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item\">\n      <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\" required>\n      <mat-error *ngIf=\"profileForm.controls.email.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item item-half-size margin-right-five-percent\">\n      <input type=\"password\" matInput placeholder=\"Password\"  formControlName=\"password\" required>\n      <mat-error *ngIf=\"profileForm.controls.password.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"login-form-item item-half-size\">\n      <input type=\"password\" matInput placeholder=\"Confirm Password\"  formControlName=\"confirmPassword\" required>\n      <mat-error *ngIf=\"profileForm.controls.confirmPassword.invalid\">Invalid</mat-error>\n    </mat-form-field>\n    <div class=\"login-form-item\">\n      <mat-radio-group formControlName=\"type\" required>\n        <mat-radio-button class=\"register-radio-button\" value=\"Alumni\">Alumni</mat-radio-button>\n        <mat-radio-button value=\"register-radio-button\" value=\"Current\">Current</mat-radio-button>\n        <mat-error *ngIf=\"profileForm.controls.type.invalid\">Invalid</mat-error>\n      </mat-radio-group>\n    </div>\n    <div>\n      <button mat-button color=\"primary\" class=\"login-button\" (click)=\"doLogin(event)\">Sign in instead</button>\n      <button mat-raised-button color=\"primary\" class=\"login-button login-button-right\" (click)=\"doRegister(event)\" [disabled]=\"!profileForm.valid\" >Register</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/Pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/dialog.service */ "./src/app/Services/dialog.service.ts");







var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(router, httpService, dataService, dialogService) {
        this.router = router;
        this.httpService = httpService;
        this.dataService = dataService;
        this.dialogService = dialogService;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]),
            middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(45)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.titles = ["Mr", "Mrs", "Miss"];
    };
    RegisterPageComponent.prototype.doRegister = function (event) {
        var _this = this;
        if (this.profileForm.controls.password.value != this.profileForm.controls.confirmPassword.value) {
            this.dialogService.openDialog("Invalid Form", "Passwords does not match");
            return false;
        }
        this.dataService.showSpinner();
        console.log(this.profileForm);
        var regData = {
            email: this.profileForm.controls.email.value,
            password: this.profileForm.controls.password.value,
            firstName: this.profileForm.controls.firstName.value,
            middleName: this.profileForm.controls.middleName.value,
            lastName: this.profileForm.controls.lastName.value,
            title: this.profileForm.controls.title.value,
            type: this.profileForm.controls.type.value,
        };
        this.httpService.getUsers().subscribe(function (users) {
            var userExist = _this.isUserExist(users, regData.email);
            if (userExist) {
                _this.dataService.hideSpinner();
                _this.dialogService.openDialog("User exist", "User with the given mail id already exist");
            }
            else {
                _this.httpService.saveUser(users, regData).subscribe(function (data) {
                    _this.dataService.hideSpinner();
                    _this.dataService.setUserData(regData);
                    _this.router.navigate(["home"]);
                }, function (error) {
                    _this.dataService.hideSpinner();
                    _this.dialogService.openDialog("Error", "Failed to connect to server");
                });
            }
        }, function (error) {
            _this.dataService.hideSpinner();
            _this.dialogService.openDialog("Error", "Failed to connect to server");
        });
    };
    RegisterPageComponent.prototype.doLogin = function (event) {
        this.router.navigate(["login"]);
    };
    RegisterPageComponent.prototype.isRegFormValid = function () {
        return false;
    };
    RegisterPageComponent.prototype.isUserExist = function (users, email) {
        if (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[0].email == email) {
                    return true;
                }
            }
        }
        return false;
    };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/Pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/Pages/register-page/register-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_Services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            src_app_Services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/Services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.spinnerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.spinnerStstusEmitter = this.spinnerStatus.asObservable();
        this.userData = {};
        if (localStorage.getItem("userData")) {
            this.userData = JSON.parse(localStorage.getItem("userData"));
        }
    }
    DataService.prototype.showSpinner = function () {
        this.spinnerStatus.next(true);
    };
    DataService.prototype.hideSpinner = function () {
        this.spinnerStatus.next(false);
    };
    DataService.prototype.setUserData = function (data) {
        this.userData = data;
        localStorage.setItem("userData", JSON.stringify(data));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/Services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_Components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Components/dialog/dialog.component */ "./src/app/Components/dialog/dialog.component.ts");




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openDialog = function (title, content) {
        var dialogRef = this.dialog.open(src_app_Components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            width: '500px',
            data: { title: title, content: content }
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/Services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getUsers = function () {
        return this.http.get('https://socialize-9f6e4.firebaseio.com/users/.json');
    };
    HttpService.prototype.saveUser = function (users, user) {
        if (users == null || users == undefined) {
            users = [];
        }
        users.push(user);
        return this.http.put('https://socialize-9f6e4.firebaseio.com/users/.json', users);
    };
    HttpService.prototype.getPosts = function (type) {
        return this.http.get('https://socialize-9f6e4.firebaseio.com/posts/' + type + '/.json');
    };
    HttpService.prototype.setPosts = function (type, posts) {
        return this.http.put('https://socialize-9f6e4.firebaseio.com/posts/' + type + '/.json', posts);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _Pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pages/login-page/login-page.component */ "./src/app/Pages/login-page/login-page.component.ts");
/* harmony import */ var _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Pages/home-page/home-page.component */ "./src/app/Pages/home-page/home-page.component.ts");
/* harmony import */ var _Pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Pages/register-page/register-page.component */ "./src/app/Pages/register-page/register-page.component.ts");
/* harmony import */ var _Pages_home_page_academics_page_academics_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Pages/home-page/academics-page/academics-page.component */ "./src/app/Pages/home-page/academics-page/academics-page.component.ts");
/* harmony import */ var _Pages_home_page_careers_page_careers_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Pages/home-page/careers-page/careers-page.component */ "./src/app/Pages/home-page/careers-page/careers-page.component.ts");
/* harmony import */ var _Pages_home_page_immigration_immigration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Pages/home-page/immigration/immigration.component */ "./src/app/Pages/home-page/immigration/immigration.component.ts");
/* harmony import */ var _Pages_home_page_social_social_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Pages/home-page/social/social.component */ "./src/app/Pages/home-page/social/social.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_post_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/post/post.component */ "./src/app/Components/post/post.component.ts");
/* harmony import */ var _Components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/create-post/create-post.component */ "./src/app/Components/create-post/create-post.component.ts");
/* harmony import */ var _Components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/dialog/dialog.component */ "./src/app/Components/dialog/dialog.component.ts");




























var routes = [
    { path: 'login', component: _Pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__["LoginPageComponent"] },
    { path: 'register', component: _Pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_19__["RegisterPageComponent"] },
    { path: 'home', component: _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__["HomePageComponent"],
        children: [
            { path: '', redirectTo: 'academics', pathMatch: 'full' },
            { path: 'academics', component: _Pages_home_page_academics_page_academics_page_component__WEBPACK_IMPORTED_MODULE_20__["AcademicsPageComponent"] },
            { path: 'careers', component: _Pages_home_page_careers_page_careers_page_component__WEBPACK_IMPORTED_MODULE_21__["CareersPageComponent"] },
            { path: 'immigration', component: _Pages_home_page_immigration_immigration_component__WEBPACK_IMPORTED_MODULE_22__["ImmigrationComponent"] },
            { path: 'social', component: _Pages_home_page_social_social_component__WEBPACK_IMPORTED_MODULE_23__["SocialComponent"] }
        ] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__["LoginPageComponent"],
                _Pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__["HomePageComponent"],
                _Pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_19__["RegisterPageComponent"],
                _Pages_home_page_academics_page_academics_page_component__WEBPACK_IMPORTED_MODULE_20__["AcademicsPageComponent"],
                _Pages_home_page_careers_page_careers_page_component__WEBPACK_IMPORTED_MODULE_21__["CareersPageComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                _Components_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"],
                _Components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_26__["CreatePostComponent"],
                _Pages_home_page_immigration_immigration_component__WEBPACK_IMPORTED_MODULE_22__["ImmigrationComponent"],
                _Pages_home_page_social_social_component__WEBPACK_IMPORTED_MODULE_23__["SocialComponent"],
                _Components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]
            ],
            entryComponents: [
                _Components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DialogComponent"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-spinner{\n    position: fixed;\n    top:0;\n    bottom:0;\n    right:0;\n    left:0;\n    background-color: rgba(0,0,0,0.5);\n    margin:auto;\n}\n.app-spin-icon{\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin:auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsS0FBSztJQUNMLFFBQVE7SUFDUixPQUFPO0lBQ1AsTUFBTTtJQUNOLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNwaW5uZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OjA7XG4gICAgbGVmdDowO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBtYXJnaW46YXV0bztcbn1cbi5hcHAtc3Bpbi1pY29ue1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOmF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<div  *ngIf=\"showSpinner\" class=\"app-spinner\">\n    <mat-spinner class=\"app-spin-icon\"></mat-spinner>\n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.title = 'Socialize';
        this.dataService.spinnerStstusEmitter.subscribe(function (data) {
            if (data) {
                _this.showSpinner = true;
            }
            else {
                _this.showSpinner = false;
            }
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chandanapriya/Documents/finalproject/StudentPortalFinal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map