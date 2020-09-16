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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div id=\"app\">\r\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <a href=\"#\" class=\"navbar-brand\">SENSCHOOL</a>\r\n    <ul class=\"navbar-nav mr-auto\" routerLinkActive=\"active\">\r\n      <li class=\"nav-item\">\r\n        <a href=\"/home\" class=\"nav-link\" routerLink=\"home\">Home </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href=\"/formulaire\" class=\"nav-link\" routerLink=\"home\">formulaire </a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showAdminBoard\">\r\n        <a href=\"/admin\" class=\"nav-link\" routerLink=\"admin\">Admin Board</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"showModeratorBoard\">\r\n        <a href=\"/mod\" class=\"nav-link\" routerLink=\"mod\">Moderator Board</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href=\"/user\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"user\">User</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\r\n      <li class=\"nav-item\">\r\n        <a href=\"/register\" class=\"nav-link\" routerLink=\"register\">Sign Up</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href=\"/login\" class=\"nav-link\" routerLink=\"login\">Login</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\r\n      <li class=\"nav-item\">\r\n        <a href=\"/profile\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n-->\r\n<div *ngIf=\"hiddenlogin\" id=\"main\" class=\"animate__animated animate__backInUp\">\r\n\r\n  <!-----------------------------------------------------------------+\r\n \".navbar\" Helper Classes:\r\n-------------------------------------------------------------------+\r\n * Positioning Classes:\r\n  '.navbar-static-top' - Static top positioned navbar\r\n  '.navbar-static-top' - Fixed top positioned navbar\r\n\r\n * Available Skin Classes:\r\n   .bg-dark    .bg-primary   .bg-success\r\n   .bg-info    .bg-warning   .bg-danger\r\n   .bg-alert   .bg-system\r\n-------------------------------------------------------------------+\r\nExample: <header class=\"navbar navbar-fixed-top bg-primary\">\r\nResults: Fixed top navbar with blue background\r\n------------------------------------------------------------------->\r\n\r\n  <!-- Start: Header -->\r\n  <header class=\"navbar navbar-fixed-top navbar-shadow bg-success\">\r\n    <div class=\"navbar-branding\">\r\n      <a class=\"navbar-brand\">\r\n        <b>SUNUMARKET</b>\r\n      </a>\r\n      <span id=\"toggle_sidemenu_l\" class=\"ad ad-lines\"></span>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"hidden-xs\">\r\n        <a class=\"request-fullscreen toggle-active\">\r\n          <span class=\"ad ad-screen-full fs18\"></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"dropdown menu-merge\">\r\n        <a href=\"#\" class=\"dropdown-toggle fw600 p15\" data-toggle=\"dropdown\">\r\n          <img [src]=\"this.user.photo!=null?sanitizer.bypassSecurityTrustUrl(this.user.photo):avatar\"\r\n            style=\"height: 35px;width: 40px; border-radius: 50%;\" />\r\n          <span class=\"hidden-xs pl15\">{{this.user.prenom}} {{this.user.nom}}</span>\r\n          <span class=\"hidden-xs pl15\">{{this.user.role}}</span>\r\n          <span class=\"caret caret-tp hidden-xs\"></span>\r\n        </a>\r\n        <ul class=\"dropdown-menu list-group dropdown-persist w250\" role=\"menu\">\r\n          <!-- <li class=\"list-group-item\">\r\n            <a href=\"#\" class=\"animated animated-short fadeInUp\">\r\n              <span class=\"fa fa-gear\"></span> Settings </a>\r\n          </li>-->\r\n          <li class=\"dropdown-footer\">\r\n            <a (click)=\"logout()\" class=\"\">\r\n              <span class=\"fa fa-power-off pr5\"></span> Logout </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </header>\r\n  <!-- End: Header -->\r\n\r\n  <!-----------------------------------------------------------------+\r\n \"#sidebar_left\" Helper Classes:\r\n-------------------------------------------------------------------+\r\n * Positioning Classes:\r\n  '.affix' - Sets Sidebar Left to the fixed position\r\n\r\n * Available Skin Classes:\r\n   .sidebar-dark (default no class needed)\r\n   .sidebar-light\r\n   .sidebar-light.light\r\n-------------------------------------------------------------------+\r\n Example: <aside id=\"sidebar_left\" class=\"affix sidebar-light\">\r\n Results: Fixed Left Sidebar with light/white background\r\n------------------------------------------------------------------->\r\n\r\n  <!-- Start: Sidebar -->\r\n  <aside id=\"sidebar_left\" class=\"nano nano-light affix\">\r\n\r\n    <!-- Start: Sidebar Left Content -->\r\n    <div class=\"sidebar-left-content nano-content\">\r\n\r\n      <!-- Start: Sidebar Header -->\r\n      <header class=\"sidebar-header\">\r\n\r\n        <!-- Sidebar Widget - Author -->\r\n        <div class=\"sidebar-widget author-widget\">\r\n          <div class=\"media\">\r\n            <a class=\"media-left\">\r\n              <img [src]=\"this.user.photo!=null?sanitizer.bypassSecurityTrustUrl(this.user.photo):avatar\"\r\n                style=\"height: 45px;width: 45px; border-radius: 50%;\" class=\" img-responsive\" />\r\n            </a>\r\n            <div class=\"media-body\">\r\n              <p></p>\r\n              <div class=\"media-author\">{{this.user.prenom}} {{this.user.nom}}</div>\r\n              <span class=\"hidden-xs pl15\">{{this.user.role}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Sidebar Widget - Menu (slidedown) -->\r\n        <div class=\"sidebar-widget menu-widget\">\r\n          <div class=\"row text-center mbn\">\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"dashboard.html\" class=\"text-primary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Dashboard\">\r\n                <span class=\"glyphicon glyphicon-home\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"pages_messages.html\" class=\"text-info\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Messages\">\r\n                <span class=\"glyphicon glyphicon-inbox\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"pages_profile.html\" class=\"text-alert\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tasks\">\r\n                <span class=\"glyphicon glyphicon-bell\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"pages_timeline.html\" class=\"text-system\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Activity\">\r\n                <span class=\"fa fa-desktop\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"pages_profile.html\" class=\"text-danger\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Settings\">\r\n                <span class=\"fa fa-gears\"></span>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n              <a href=\"pages_gallery.html\" class=\"text-warning\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                title=\"Cron Jobs\">\r\n                <span class=\"fa fa-flask\"></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Sidebar Widget - Search (hidden) -->\r\n        <div class=\"sidebar-widget search-widget hidden\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </span>\r\n            <input type=\"text\" id=\"sidebar-search\" class=\"form-control\" placeholder=\"Search...\">\r\n          </div>\r\n        </div>\r\n\r\n      </header>\r\n      <!-- End: Sidebar Header -->\r\n\r\n      <!-- Start: Sidebar Menu -->\r\n\r\n      <ul class=\"nav sidebar-menu\">\r\n        <li class=\"sidebar-label pt15\">Ressources</li>\r\n        <li>\r\n          <a class=\"accordion-toggle\" href=\"#\">\r\n            <span class=\"fa fa-columns\"></span>\r\n            <span class=\"sidebar-title\">Ressources</span>\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"nav sub-nav\">\r\n            <li>\r\n              <a class=\"accordion-toggle\" routerLink=\"user\">\r\n                <span class=\"fa fa fa-arrows-h\"></span>Utilisateurs\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"accordion-toggle\" routerLink=\"client\">\r\n                <span class=\"fa fa-arrows-v\"></span>Client\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"categorie\">\r\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span>Catégorie</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"marque\">\r\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span>Marque</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a routerLink=\"produit\">\r\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span>Produit</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"sidebar-label pt15\">Statistique</li>\r\n        <li class=\"active\">\r\n          <a routerLink=\"statistique\">\r\n            <span class=\"fa fa-bitcoin\"></span>\r\n            <span class=\"sidebar-title\">Mes statistiques</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"sidebar-label pt15\">Gestion des commandes </li>\r\n        <li>\r\n          <a class=\"accordion-toggle\" href=\"#\">\r\n            <span class=\"fa fa-columns\"></span>\r\n            <span class=\"sidebar-title\">Commande</span>\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"nav sub-nav\">\r\n\r\n            <li>\r\n              <a class=\"accordion-toggle\" routerLink=\"gestion-commande\">\r\n                <span class=\"fa fa fa-arrows-h\"></span>Gestion Commande\r\n              </a>\r\n\r\n            </li>\r\n\r\n            <li>\r\n              <a class=\"accordion-toggle\" routerLink=\"commande\">\r\n                <span class=\"fa fa-arrows-v\"></span> Liste Commande\r\n              </a>\r\n\r\n            </li>\r\n\r\n            <li>\r\n              <a class=\"accordion-toggle\" routerLink=\"listecommandeencours\">\r\n                <span class=\"fa fa-arrows-v\"></span>Commande en cours\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n      <!-- End: Sidebar Menu -->\r\n\r\n      <!-- Start: Sidebar Collapse Button -->\r\n      <div class=\"sidebar-toggle-mini\">\r\n        <a href=\"#\">\r\n          <span class=\"fa fa-sign-out\"></span>\r\n        </a>\r\n      </div>\r\n      <!-- End: Sidebar Collapse Button -->\r\n\r\n    </div>\r\n    <!-- End: Sidebar Left Content -->\r\n\r\n  </aside>\r\n  <!-- End: Sidebar Left -->\r\n\r\n  <!-- Start: Content-Wrapper -->\r\n  <section id=\"content_wrapper\">\r\n\r\n\r\n\r\n    <!-- Start: Topbar-Dropdown -->\r\n    <div id=\"topbar-dropmenu\" class=\"alt\">\r\n      <div class=\"topbar-menu row\">\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-primary light\">\r\n            <span class=\"glyphicon glyphicon-inbox text-muted\"></span>\r\n            <span class=\"metro-title\">Messages</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-info light\">\r\n            <span class=\"glyphicon glyphicon-user text-muted\"></span>\r\n            <span class=\"metro-title\">Users</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-success light\">\r\n            <span class=\"glyphicon glyphicon-headphones text-muted\"></span>\r\n            <span class=\"metro-title\">Support</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-system light\">\r\n            <span class=\"glyphicon glyphicon-facetime-video text-muted\"></span>\r\n            <span class=\"metro-title\">Videos</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-warning light\">\r\n            <span class=\"fa fa-gears text-muted\"></span>\r\n            <span class=\"metro-title\">Settings</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-4 col-sm-2\">\r\n          <a href=\"#\" class=\"metro-tile bg-alert light\">\r\n            <span class=\"glyphicon glyphicon-picture text-muted\"></span>\r\n            <span class=\"metro-title\">Pictures</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End: Topbar-Dropdown -->\r\n\r\n    <!-- Start: Topbar -->\r\n\r\n    <!-- End: Topbar -->\r\n\r\n    <!-- Begin: Content -->\r\n    <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n      <!-- begin: .tray-center -->\r\n      <div class=\"tray tray-center\">\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n      </div>\r\n      <!-- end: .tray-center -->\r\n\r\n      <!-- begin: .tray-right -->\r\n      <aside class=\"tray tray-right tray270 pn hidden\" data-tray-height=\"match\">\r\n\r\n        <!-- store activity timeline -->\r\n        <ol class=\"timeline-list pl5 mt5\">\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Michael</b> Added a new item to his store:\r\n              <a href=\"#\">Ipod</a>\r\n            </div>\r\n            <div class=\"timeline-date\">1:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Sara</b> Added a new item to his store:\r\n              <a href=\"#\">Notebook</a>\r\n            </div>\r\n            <div class=\"timeline-date\">3:05am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-success\">\r\n              <span class=\"fa fa-usd\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Admin</b> created a new invoice for:\r\n              <a href=\"#\">Software</a>\r\n            </div>\r\n            <div class=\"timeline-date\">4:15am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-warning\">\r\n              <span class=\"fa fa-pencil\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Laura</b> edited her work experience</div>\r\n            <div class=\"timeline-date\">5:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-success\">\r\n              <span class=\"fa fa-usd\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Admin</b> created a new invoice for:\r\n              <a href=\"#\">Apple Inc.</a>\r\n            </div>\r\n            <div class=\"timeline-date\">7:45am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Michael</b> Added a new item to his store:\r\n              <a href=\"#\">Ipod</a>\r\n            </div>\r\n            <div class=\"timeline-date\">8:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Sara</b> Added a new item to his store:\r\n              <a href=\"#\">Watch</a>\r\n            </div>\r\n            <div class=\"timeline-date\">9:35am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-system\">\r\n              <span class=\"fa fa-fire\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Admin</b> created a new invoice for:\r\n              <a href=\"#\">Software</a>\r\n            </div>\r\n            <div class=\"timeline-date\">4:15am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-warning\">\r\n              <span class=\"fa fa-pencil\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Laura</b> edited her work experience</div>\r\n            <div class=\"timeline-date\">5:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-success\">\r\n              <span class=\"fa fa-usd\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Admin</b> created a new invoice for:\r\n              <a href=\"#\">Software</a>\r\n            </div>\r\n            <div class=\"timeline-date\">4:15am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-warning\">\r\n              <span class=\"fa fa-pencil\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Laura</b> edited her work experience</div>\r\n            <div class=\"timeline-date\">5:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-success\">\r\n              <span class=\"fa fa-usd\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Admin</b> created a new invoice for:\r\n              <a href=\"#\">Apple Inc.</a>\r\n            </div>\r\n            <div class=\"timeline-date\">7:45am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Michael</b> Added a new item to his store:\r\n              <a href=\"#\">Ipod</a>\r\n            </div>\r\n            <div class=\"timeline-date\">8:25am</div>\r\n          </li>\r\n          <li class=\"timeline-item\">\r\n            <div class=\"timeline-icon bg-dark light\">\r\n              <span class=\"fa fa-tags\"></span>\r\n            </div>\r\n            <div class=\"timeline-desc\">\r\n              <b>Sara</b> Added a new item to his store:\r\n              <a href=\"#\">Watch</a>\r\n            </div>\r\n            <div class=\"timeline-date\">9:35am</div>\r\n          </li>\r\n        </ol>\r\n\r\n      </aside>\r\n      <!-- end: .tray-right -->\r\n\r\n    </section>\r\n    <!-- End: Content -->\r\n\r\n    <!-- Begin: Page Footer -->\r\n    <footer id=\"content-footer\" class=\"affix\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <span class=\"footer-legal\">© {{DateNow}} NLD SOFTWARE</span>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n    <!-- End: Page Footer -->\r\n\r\n  </section>\r\n  <!-- End: Content-Wrapper -->\r\n\r\n\r\n  <div md-color-picker ng-model=\"valueObj\"></div>\r\n</div>\r\n\r\n\r\n<body *ngIf=\"!hiddenlogin\">\r\n  <div class=\"dust-paarticle\">\r\n\r\n    <svg width=\"100%\" id=\"dust-paarticle\" height=\"100%\" viewBox=\"0 0 885 455\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path d=\"M678.1 394.1C679.923 394.1 681.4 392.622 681.4 390.8C681.4 388.977 679.923 387.5 678.1 387.5C676.277 387.5 674.8 388.977 674.8 390.8C674.8 392.622 676.277 394.1 678.1 394.1Z\" stroke=\"#F4CD39\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path opacity=\"0.46\" d=\"M880.3 342.9C882.123 342.9 883.6 341.423 883.6 339.6C883.6 337.777 882.123 336.3 880.3 336.3C878.477 336.3 877 337.777 877 339.6C877 341.423 878.477 342.9 880.3 342.9Z\" stroke=\"#F4CD39\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path opacity=\"0.46\" d=\"M282.2 7.69997C284.023 7.69997 285.5 6.2225 285.5 4.39996C285.5 2.57742 284.023 1.09998 282.2 1.09998C280.377 1.09998 278.9 2.57742 278.9 4.39996C278.9 6.2225 280.377 7.69997 282.2 7.69997Z\" stroke=\"#F4CD39\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M598.3 207.8C601.061 207.8 603.3 205.561 603.3 202.8C603.3 200.039 601.061 197.8 598.3 197.8C595.539 197.8 593.3 200.039 593.3 202.8C593.3 205.561 595.539 207.8 598.3 207.8Z\" stroke=\"#FDB130\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M48.7 442.7C50.4121 442.7 51.8 441.312 51.8 439.6C51.8 437.888 50.4121 436.5 48.7 436.5C46.9879 436.5 45.6 437.888 45.6 439.6C45.6 441.312 46.9879 442.7 48.7 442.7Z\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M489.7 311.7C491.909 311.7 493.7 309.909 493.7 307.7C493.7 305.491 491.909 303.7 489.7 303.7C487.491 303.7 485.7 305.491 485.7 307.7C485.7 309.909 487.491 311.7 489.7 311.7Z\" stroke=\"#1DB7C2\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M373.8 225C375.623 225 377.1 223.523 377.1 221.7C377.1 219.877 375.623 218.4 373.8 218.4C371.977 218.4 370.5 219.877 370.5 221.7C370.5 223.523 371.977 225 373.8 225Z\" stroke=\"#FDB130\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M844.1 453.7C846.309 453.7 848.1 451.909 848.1 449.7C848.1 447.491 846.309 445.7 844.1 445.7C841.891 445.7 840.1 447.491 840.1 449.7C840.1 451.909 841.891 453.7 844.1 453.7Z\" stroke=\"#1DB7C2\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M151 254.6C152.16 254.6 153.1 253.66 153.1 252.5C153.1 251.34 152.16 250.4 151 250.4C149.84 250.4 148.9 251.34 148.9 252.5C148.9 253.66 149.84 254.6 151 254.6Z\" stroke=\"#FDB130\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M3.6 315.9C4.7598 315.9 5.7 314.96 5.7 313.8C5.7 312.64 4.7598 311.7 3.6 311.7C2.4402 311.7 1.5 312.64 1.5 313.8C1.5 314.96 2.4402 315.9 3.6 315.9Z\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M768.2 366.7H775.5\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M771.8 363.1V370.4\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <g opacity=\"0.6\">\r\n    <path opacity=\"0.6\" d=\"M696.4 40.5H703.8\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path opacity=\"0.6\" d=\"M700.1 36.8V44.2\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    <path d=\"M630.3 284.1H636\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M633.2 281.2V286.9\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M414.9 104.5H420.6\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M417.8 101.7V107.3\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M203.7 290.8H211.5\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M207.6 286.9V294.6\" stroke=\"#E03F8D\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M165.9 402.7H176.2\" stroke=\"#1DB7C2\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M171 397.5V407.9\" stroke=\"#1DB7C2\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M252.1 346.8C253.2 345.3 254.8 346.4 255.9 344.9C257 343.4 255.4 342.2 256.5 340.7C257.6 339.2 259.2 340.3 260.3 338.8C261.4 337.3 259.8 336.1 260.9 334.5C262 333 263.6 334.1 264.7 332.6\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <g opacity=\"0.4\">\r\n    <path opacity=\"0.4\" d=\"M36.3 391.2C35.7 389.4 37.5 388.7 36.9 387C36.3 385.2 34.4 385.9 33.7 384.1C33.1 382.3 34.9 381.6 34.3 379.9C33.7 378.1 31.8 378.8 31.1 377C30.5 375.2 32.3 374.5 31.7 372.8\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    <path d=\"M732.3 292.1C730.6 291.2 731.5 289.5 729.8 288.6C728.1 287.7 727.2 289.5 725.5 288.7C723.8 287.8 724.7 286.1 723 285.2C721.3 284.3 720.4 286.1 718.7 285.3C717 284.4 717.9 282.7 716.2 281.8\" stroke=\"white\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <g opacity=\"0.53\">\r\n    <path opacity=\"0.53\" d=\"M282.7 439.7C281.5 440.4 280.5 438.7 279.3 439.4C278.1 440.1 279.1 441.8 278 442.5C276.8 443.2 275.8 441.5 274.6 442.2C273.4 442.9 274.4 444.6 273.3 445.3C272.2 446 271.1 444.3 269.9 445\" stroke=\"#1DB7C2\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    <path d=\"M819.6 253.6C821.4 253 822 255 823.8 254.4C825.6 253.8 825 251.9 826.8 251.4C828.6 250.8 829.2 252.8 831 252.2C832.8 251.6 832.2 249.7 834 249.2C835.8 248.7 836.4 250.6 838.2 250\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path d=\"M487.9 207.4C489.7 206.8 490.3 208.8 492.1 208.2C493.9 207.6 493.3 205.7 495.1 205.2C496.9 204.6 497.5 206.6 499.3 206C501.1 205.4 500.5 203.5 502.3 203C504.1 202.5 504.7 204.4 506.5 203.8\" stroke=\"#9E3FB7\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n\r\n      </div>\r\n\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3\">\r\n          <div class=\"col-sm-5 authfy-panel-left\">\r\n            <div class=\"brand-col\">\r\n              <div class=\"headline\">\r\n                <!-- brand-logo start -->\r\n                <div class=\"brand-logo\">\r\n                  <img src=\"assets/img/logos/Logo Sunumarket.png\" width=\"240\" alt=\"brand-logo\">\r\n                </div><!-- ./brand-logo -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-7 authfy-panel-right\">\r\n            <!-- authfy-login start -->\r\n            <div class=\"authfy-login\">\r\n              <!-- panel-login start -->\r\n              <div class=\"authfy-panel panel-login text-center active\">\r\n                <div class=\"authfy-heading\">\r\n                  <h3 class=\"auth-title\">Bonjour, bon retour connectez-vous</h3>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-12\">\r\n                    <form\r\n                    name=\"form\"\r\n                    (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n                    #f=\"ngForm\"\r\n                    novalidate\r\n                    class=\"loginForm\">\r\n                      <div class=\"form-group\">\r\n                        <input name=\"username\"\r\n                        [(ngModel)]=\"form.username\"\r\n                        required\r\n                        #username=\"ngModel\" type=\"text\" class=\"form-control email\" placeholder=\"Enter votre login\">\r\n                          <div\r\n                            class=\"alert alert-danger\"\r\n                            role=\"alert\"\r\n                            *ngIf=\"f.submitted && username.invalid\">\r\n                            Login obligatoire!\r\n                        </div>\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"pwdMask\">\r\n                          <input name=\"password\"\r\n                          [(ngModel)]=\"form.password\"\r\n                          required\r\n                          minlength=\"2\"\r\n                          #password=\"ngModel\" type=\"password\" class=\"form-control password\" placeholder=\"Entrer votre mot de passe\">\r\n                          <!-- <span class=\"fa fa-eye-slash pwd-toggle\"></span> -->\r\n                        </div>\r\n                        <div\r\n                          class=\"alert alert-danger\"\r\n                          role=\"alert\"\r\n                          *ngIf=\"f.submitted && password.invalid\">\r\n                          <div *ngIf=\"password.errors.required\">Mot de passe obligatoire !</div>\r\n                          <div *ngIf=\"password.errors.minlength\">\r\n                            Le mot de passe doit contenir au moins 6 caractères\r\n                        </div>\r\n                      </div>\r\n                      </div>\r\n                      <!-- start remember-row -->\r\n                      <div class=\"row remember-row\">\r\n                        <div class=\"col-xs-6 col-sm-6\">\r\n                          <label class=\"checkbox text-left\">\r\n                            <input type=\"checkbox\" value=\"remember-me\">\r\n                            <span class=\"label-text\">Se souvenir</span>\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-sm-6\">\r\n                          <p class=\"forgotPwd\">\r\n                            <a class=\"lnk-toggler\" data-panel=\".panel-forgot\">Mot de passe oublié?</a>\r\n                          </p>\r\n                        </div>\r\n                      </div> <!-- ./remember-row -->\r\n                      <div class=\"form-group\">\r\n                        <!-- <a target=\"_blank\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Se Connecter</a> -->\r\n                        <button type=\"submit\" class=\"btn btn-lg btn-primary animate__animated animate__bounce animate__infinite\">Se Connecter</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div> <!-- ./panel-login -->\r\n\r\n              <!-- panel-forget start -->\r\n              <div class=\"authfy-panel panel-forgot\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-12 col-sm-12\">\r\n                    <div class=\"authfy-heading\">\r\n                      <h3 class=\"auth-title\">Recover your password</h3>\r\n                      <p>Fill in your e-mail address below and we will send you an email with further instructions.</p>\r\n                    </div>\r\n                    <form name=\"forgetForm\" class=\"forgetForm\" action=\"#\" method=\"POST\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" name=\"username\" placeholder=\"Email address\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Recover your password</button>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <a class=\"lnk-toggler\" data-panel=\".panel-login\" href=\"#\">Already have an account?</a>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <a class=\"lnk-toggler\" data-panel=\".panel-signup\" href=\"#\">Don’t have an account?</a>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div> <!-- ./panel-forgot -->\r\n            </div> <!-- ./authfy-login -->\r\n          </div>\r\n        </div>\r\n      </div> <!-- ./row -->\r\n    </div>\r\n\r\n    <div id=\"snell\">\r\n\r\n\r\n    <svg width=\"100%\" height=\"100\" viewBox=\"0 0 328 265\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <g id=\"XMLID5\">\r\n      <g id=\"eye2\">\r\n\r\n    <g id=\"XMLID67\">\r\n    <path id=\"Vector\" d=\"M45.7 128.6C40.6 128.2 35.5 127.8 30.4 127.4C33 107.8 31.8 88.1 27.2 69.3C30.8 68.3 34.4 67.2 38 66.1C44.4 85.9 47.1 107.1 45.7 128.6Z\" fill=\"#AAD543\"/>\r\n    </g>\r\n    <g id=\"XMLID65\" opacity=\"0.49\">\r\n    <path id=\"Vector_2\" opacity=\"0.49\" d=\"M45.7 128.6C40.6 128.2 35.5 127.8 30.4 127.4C33 107.8 31.8 88.1 27.2 69.3C30.8 68.3 34.4 67.2 38 66.1C44.4 85.9 47.1 107.1 45.7 128.6Z\" fill=\"#AAD543\"/>\r\n    </g>\r\n    <g id=\"XMLID63\">\r\n    <path id=\"Vector_3\" d=\"M45.7 128.6C40.6 128.2 35.5 127.8 30.4 127.4C33 107.8 31.8 88.1 27.2 69.3C30.8 68.3 34.4 67.2 38 66.1C44.4 85.9 47.1 107.1 45.7 128.6Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n         <g id=\"XMLID44\">\r\n    <g id=\"XMLID 49\">\r\n    <path id=\"XMLID 51\" d=\"M27.5 77.8C40.9205 77.8 51.8 66.9205 51.8 53.5C51.8 40.0795 40.9205 29.2 27.5 29.2C14.0795 29.2 3.20001 40.0795 3.20001 53.5C3.20001 66.9205 14.0795 77.8 27.5 77.8Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID 50\" d=\"M27.5 77.8C40.9205 77.8 51.8 66.9205 51.8 53.5C51.8 40.0795 40.9205 29.2 27.5 29.2C14.0795 29.2 3.20001 40.0795 3.20001 53.5C3.20001 66.9205 14.0795 77.8 27.5 77.8Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    <g id=\"XMLID45\">\r\n    <path id=\"XMLID 48\" d=\"M24.9 77.3C35.8905 77.3 44.8 68.3905 44.8 57.4C44.8 46.4095 35.8905 37.5 24.9 37.5C13.9095 37.5 5 46.4095 5 57.4C5 68.3905 13.9095 77.3 24.9 77.3Z\" fill=\"white\"/>\r\n    <path id=\"XMLID 47\" d=\"M19.6 67.7C23.6869 67.7 27 64.3869 27 60.3C27 56.2131 23.6869 52.9 19.6 52.9C15.5131 52.9 12.2 56.2131 12.2 60.3C12.2 64.3869 15.5131 67.7 19.6 67.7Z\" fill=\"#2A2A2A\"/>\r\n    <path id=\"XMLID 46\" d=\"M24.9 77.3C35.8905 77.3 44.8 68.3905 44.8 57.4C44.8 46.4095 35.8905 37.5 24.9 37.5C13.9095 37.5 5 46.4095 5 57.4C5 68.3905 13.9095 77.3 24.9 77.3Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    </g>\r\n        </g>\r\n    <path id=\"XMLID 62\" d=\"M281.2 222.7L137.6 207.5C115.1 205.3 98 186.4 98 163.8L95.7 145.4C92.5 118.3 72.3 109.4 52 109.4C23 109.4 18.5 129.1 17.9 166.3C20 167.2 22.2 167.3 25.7 167.5C26.6 178.8 21.9 189 18 195.6C20.5 233.5 44 261.3 77.8 261.3H294.6C300 261.3 308.8 260.5 316.3 259.7C323.8 258.9 327.6 250.2 323 244.2C315.2 234.1 307.2 227.3 281.2 222.7Z\" fill=\"white\"/>\r\n    <path id=\"XMLID 61\" d=\"M281.2 222.7L137.6 207.5C115.1 205.3 98 186.4 98 163.8L95.7 145.4C92.5 118.3 72.3 109.4 52 109.4C23 109.4 18.5 129.1 17.9 166.3C20 167.2 22.2 167.3 25.7 167.5C26.6 178.8 21.9 189 18 195.6C20.5 233.5 44 261.3 77.8 261.3H294.6C300 261.3 308.8 260.5 316.3 259.7C323.8 258.9 327.6 250.2 323 244.2C315.2 234.1 307.2 227.3 281.2 222.7Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID 60\" d=\"M321.5 242.3C321.5 251.6 302.5 252.7 297.4 252.7L82.8 249.1C61.5 249.1 46.8 243.5 32.9 226.5C29.1 221.8 21.3 206.9 19 198.4C22.8 240.7 51.2 261.5 77.7 261.5H294.5C299.9 261.5 306.5 260.7 314 259.9C320.7 259.1 327.9 250.7 321.5 242.3Z\" fill=\"#8EC42B\"/>\r\n    <path id=\"XMLID 59\" d=\"M323.8 241.4C316.1 231.3 307.3 227.3 281.5 222.8C281.4 222.8 281.3 222.8 281.1 222.7L137.7 207.5C115.3 205.4 98.2 186.6 98.1 164.1C98.1 163.9 98.1 163.8 98.1 163.6L95.8 145.4C92.6 118.3 72.4 109.4 52.1 109.4C48.8 109.4 45.8 109.7 43.1 110.2C37.4 111.3 37.7 111.9 32 114.7C25.3 118.1 19.7 140.3 19.7 140.4C20.5 158.8 20.5 123.1 39.4 118.1C61.2 112.3 81.3 119.9 85 145.9C85 145.9 87.5 170.2 88.4 176.3C91.7 198.5 109.9 214.2 132.3 216.4L273.4 233C273.5 233 269.6 229 269.7 229C295.5 233.6 322.2 236.5 323.8 249.1C323.8 249.3 321 253.5 321.1 253.7C322.3 254.9 322.2 255.2 323.8 252.1C325.5 248.9 326.2 244.6 323.8 241.4Z\" fill=\"#C6E65B\"/>\r\n    <path id=\"XMLID 58\" d=\"M281.2 222.7L137.6 207.5C115.1 205.3 98 186.4 98 163.8L95.7 145.4C92.5 118.3 72.3 109.4 52 109.4C23 109.4 18.5 129.1 17.9 166.3C20 167.2 22.2 167.3 25.7 167.5C26.6 178.8 21.9 189 18 195.6C20.5 233.5 44 261.3 77.8 261.3H294.6C300 261.3 312.1 260.2 318.3 256C325.9 250.8 326.1 243.2 320.8 237.9C313.3 230.4 307.2 227.3 281.2 222.7Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path id=\"XMLID 57\" d=\"M17.9 166.4C17.9 166.4 24.8 170.3 48.1 164C48.3 172.6 35.3 193.6 18.1 195.7C19.1 193.9 25.2 182.2 25.7 174C25.7 172.5 26.3 168.6 25.8 167.6C20.6 167.6 17.9 166.4 17.9 166.4Z\" fill=\"#2A2A2A\"/>\r\n    <path id=\"XMLID 56\" d=\"M17.9 166.4C17.9 166.4 24.8 170.3 48.1 164C48.3 172.6 35.3 193.6 18.1 195.7C19.1 193.9 25.2 182.2 25.7 174C25.7 172.5 26.3 168.6 25.8 167.6C20.6 167.6 17.9 166.4 17.9 166.4Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <path id=\"XMLID 55\" d=\"M45.3 158.8C45.6 159.1 50.4 163.7 51.7 168.5\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n      <g id=\"eye1\">\r\n    <path id=\"XMLID54\" d=\"M77.2 129.2C71.8 128.8 66.5 128.3 61.1 127.9C64.5 100.5 62.6 73 55.9 46.9C59.7 45.8 63.5 44.7 67.3 43.6C75.7 70.7 79.3 99.7 77.2 129.2Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID53\" d=\"M67.3 43.6C64.8 44.3 62.4 45 59.9 45.8C63.3 54.9 62.3 78.3 64 78.1C65.7 77.9 69.2 76.8 69.6 78.4C72.7 92.9 74.4 108.5 74.4 126.8C76.8 127 74.8 129.1 77.2 129.3C79.3 99.7 75.7 70.7 67.3 43.6Z\" fill=\"#8EC42B\"/>\r\n        <g id=\"XMLID 36\">\r\n    <g id=\"XMLID 41\">\r\n    <path id=\"XMLID 43\" d=\"M66.5 69.4C84.6149 69.4 99.3 54.7149 99.3 36.6C99.3 18.4851 84.6149 3.79999 66.5 3.79999C48.3851 3.79999 33.7 18.4851 33.7 36.6C33.7 54.7149 48.3851 69.4 66.5 69.4Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID 42\" d=\"M66.5 69.4C84.6149 69.4 99.3 54.7149 99.3 36.6C99.3 18.4851 84.6149 3.79999 66.5 3.79999C48.3851 3.79999 33.7 18.4851 33.7 36.6C33.7 54.7149 48.3851 69.4 66.5 69.4Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    <g id=\"XMLID 37\">\r\n    <path id=\"XMLID 40\" d=\"M62.9 68.7C77.7565 68.7 89.8 56.6564 89.8 41.8C89.8 26.9435 77.7565 14.9 62.9 14.9C48.0435 14.9 36 26.9435 36 41.8C36 56.6564 48.0435 68.7 62.9 68.7Z\" fill=\"white\"/>\r\n    <path id=\"XMLID 39\" d=\"M55.7 55.6C61.1676 55.6 65.6 51.1676 65.6 45.7C65.6 40.2324 61.1676 35.8 55.7 35.8C50.2324 35.8 45.8 40.2324 45.8 45.7C45.8 51.1676 50.2324 55.6 55.7 55.6Z\" fill=\"#2A2A2A\"/>\r\n    <path id=\"XMLID 38\" d=\"M62.9 68.7C77.7565 68.7 89.8 56.6564 89.8 41.8C89.8 26.9435 77.7565 14.9 62.9 14.9C48.0435 14.9 36 26.9435 36 41.8C36 56.6564 48.0435 68.7 62.9 68.7Z\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </g>\r\n    </g>\r\n        </g>\r\n\r\n\r\n    <path id=\"XMLID 34\" d=\"M148.8 226.4C132.9 224.2 117.4 198.3 117.4 163.9C117.4 109.1 160.1 68.6 212.7 68.6C265.3 68.6 308 111.3 308 164C308 216.7 265.3 259.3 212.7 259.3C186.4 259.3 148.9 247.2 142.7 207.9C136.5 168.6 161 131.3 204 128.8C231.9 127.2 257.2 150 257.2 177.9C257.2 205.8 233.9 226.6 212.7 226.6C191.7 226.6 180.5 213.6 180.5 198C180.5 182.4 191.1 171.8 206.7 171.8C217.1 171.8 222.5 181.7 222.1 189.3\" fill=\"#EE368C\"/>\r\n    <path id=\"XMLID 33\" d=\"M191.7 221.3C191.7 221.3 233.3 233.3 256.9 183.6C250.5 202.6 248.3 212.7 230.4 222.1C209.5 226.5 211.3 228.7 191.7 221.3Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 25\" d=\"M284.2 101.7C295.9 117.5 303.7 133 305.1 149.5C310.3 212.8 248.7 256.3 198.2 251C176.7 248.8 164.2 240.5 148.9 226.4L132.3 215.1C127.3 214.4 130.5 209.6 126 204.8C132 217.2 140.4 225.2 148.9 226.3C162 251 191.2 259.2 212.8 259.2C265.4 259.2 308.1 216.5 308.1 163.9C308 141.8 300.8 118.3 284.2 101.7Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 24\" opacity=\"0.39\" d=\"M122.8 172.6C122.8 117.8 165.5 77.3 218.1 77.3C250.2 77.3 278.7 93.2 295.9 117.6C279.6 88.4 248.4 68.7 212.6 68.7C160 68.7 117.3 109.2 117.3 164C117.3 185.8 123.5 204.1 132.1 215.2C126.5 204.2 122.8 189.4 122.8 172.6Z\" fill=\"#FFFFFB\"/>\r\n    <path id=\"XMLID 23\" opacity=\"0.39\" d=\"M150.2 229C149.7 228.2 149.2 227.3 148.7 226.4L149.2 226.2C148.3 223.3 147.6 220.3 147.1 217.1C140.9 177.8 165.4 140.5 208.4 138C227.3 136.9 245 147 254.4 162.3C247.2 142 226.4 127.5 203.9 128.8C160.9 131.2 136.4 168.6 142.6 207.9C143.7 214.9 145.8 221.1 148.7 226.5\" fill=\"#FFFFFB\"/>\r\n    <path id=\"XMLID 229\" opacity=\"0.39\" d=\"M182.6 209.3C181.1 205.8 180.4 202 180.4 198C180.4 182.4 191 171.8 206.6 171.8C213.9 171.8 218.7 174.7 220.8 180.2C218.4 178.2 213.8 176.6 210 176.6C190 176.6 183.6 191.2 183.6 206.9C183.6 207.9 183.8 208.4 183.9 209.3H182.6V209.3Z\" fill=\"#FFFFFB\"/>\r\n    <path id=\"XMLID 228\" d=\"M148.8 226.4C132.9 224.2 117.4 198.3 117.4 163.9C117.4 109.1 160.1 68.6 212.7 68.6C265.3 68.6 308 111.3 308 164C308 216.7 265.3 259.3 212.7 259.3C186.4 259.3 148.9 247.2 142.7 207.9C136.5 168.6 161 131.3 204 128.8C231.9 127.2 257.2 150 257.2 177.9C257.2 205.8 233.9 226.6 212.7 226.6C191.7 226.6 180.5 213.6 180.5 198C180.5 182.4 191.1 170.7 206.7 171.8C220.9 172.8 225.6 185.4 222.1 190.9\" stroke=\"#2A2A2A\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    <g id=\"XMLID 18\">\r\n    <path id=\"XMLID 21\" opacity=\"0.49\" d=\"M67.8759 140.436C69.4004 139.945 69.9781 137.502 69.1661 134.979C68.3541 132.455 66.46 130.807 64.9354 131.298C63.4108 131.788 62.8331 134.232 63.6451 136.755C64.4571 139.279 66.3513 140.927 67.8759 140.436Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID 20\" opacity=\"0.49\" d=\"M73.7492 158.634C75.2738 158.143 75.8515 155.7 75.0395 153.176C74.2275 150.653 72.3333 149.005 70.8088 149.496C69.2842 149.986 68.7065 152.43 69.5185 154.953C70.3305 157.476 72.2247 159.124 73.7492 158.634Z\" fill=\"#AAD543\"/>\r\n    <g id=\"XMLID 223\">\r\n    <path id=\"XMLID 19\" opacity=\"0.49\" d=\"M67.365 150.646C68.8896 150.155 69.4672 147.712 68.6552 145.188C67.8433 142.665 65.9491 141.017 64.4245 141.508C62.8999 141.998 62.3222 144.442 63.1342 146.965C63.9462 149.488 65.8404 151.136 67.365 150.646Z\" fill=\"#AAD543\"/>\r\n    <path id=\"XMLID 224\" opacity=\"0.49\" d=\"M74.2601 148.424C75.7847 147.933 76.3624 145.49 75.5504 142.967C74.7384 140.443 72.8442 138.795 71.3196 139.286C69.795 139.776 69.2174 142.22 70.0294 144.743C70.8414 147.267 72.7355 148.915 74.2601 148.424Z\" fill=\"#AAD543\"/>\r\n    </g>\r\n    </g>\r\n    <g id=\"Group\">\r\n    <path id=\"XMLID 32\" opacity=\"0.29\" d=\"M247.2 170.2C251.453 170.2 254.9 166.753 254.9 162.5C254.9 158.247 251.453 154.8 247.2 154.8C242.947 154.8 239.5 158.247 239.5 162.5C239.5 166.753 242.947 170.2 247.2 170.2Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 31\" opacity=\"0.29\" d=\"M277.9 114.3C282.594 114.3 286.4 110.494 286.4 105.8C286.4 101.106 282.594 97.3 277.9 97.3C273.206 97.3 269.4 101.106 269.4 105.8C269.4 110.494 273.206 114.3 277.9 114.3Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 30\" opacity=\"0.29\" d=\"M151.8 225.7C154.23 225.7 156.2 223.73 156.2 221.3C156.2 218.87 154.23 216.9 151.8 216.9C149.37 216.9 147.4 218.87 147.4 221.3C147.4 223.73 149.37 225.7 151.8 225.7Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 29\" opacity=\"0.29\" d=\"M172.4 203.9C174.167 203.9 175.6 202.467 175.6 200.7C175.6 198.933 174.167 197.5 172.4 197.5C170.633 197.5 169.2 198.933 169.2 200.7C169.2 202.467 170.633 203.9 172.4 203.9Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 28\" opacity=\"0.29\" d=\"M130.5 170.3C131.715 170.3 132.7 169.315 132.7 168.1C132.7 166.885 131.715 165.9 130.5 165.9C129.285 165.9 128.3 166.885 128.3 168.1C128.3 169.315 129.285 170.3 130.5 170.3Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 27\" opacity=\"0.29\" d=\"M142.7 146.1C143.252 146.1 143.7 145.652 143.7 145.1C143.7 144.548 143.252 144.1 142.7 144.1C142.148 144.1 141.7 144.548 141.7 145.1C141.7 145.652 142.148 146.1 142.7 146.1Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 26\" opacity=\"0.29\" d=\"M188.4 154.1C190.167 154.1 191.6 152.667 191.6 150.9C191.6 149.133 190.167 147.7 188.4 147.7C186.633 147.7 185.2 149.133 185.2 150.9C185.2 152.667 186.633 154.1 188.4 154.1Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 11\" opacity=\"0.29\" d=\"M161.7 114C163.964 114 165.8 112.164 165.8 109.9C165.8 107.636 163.964 105.8 161.7 105.8C159.436 105.8 157.6 107.636 157.6 109.9C157.6 112.164 159.436 114 161.7 114Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 10\" opacity=\"0.29\" d=\"M237.4 131.2C239.664 131.2 241.5 129.364 241.5 127.1C241.5 124.836 239.664 123 237.4 123C235.136 123 233.3 124.836 233.3 127.1C233.3 129.364 235.136 131.2 237.4 131.2Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 9\" opacity=\"0.29\" d=\"M212.7 92.3C215.958 92.3 218.6 89.6585 218.6 86.4C218.6 83.1415 215.958 80.5 212.7 80.5C209.442 80.5 206.8 83.1415 206.8 86.4C206.8 89.6585 209.442 92.3 212.7 92.3Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 8\" opacity=\"0.29\" d=\"M269.4 183.6C272.659 183.6 275.3 180.958 275.3 177.7C275.3 174.442 272.659 171.8 269.4 171.8C266.142 171.8 263.5 174.442 263.5 177.7C263.5 180.958 266.142 183.6 269.4 183.6Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 7\" opacity=\"0.29\" d=\"M291 148.7C293.651 148.7 295.8 146.551 295.8 143.9C295.8 141.249 293.651 139.1 291 139.1C288.349 139.1 286.2 141.249 286.2 143.9C286.2 146.551 288.349 148.7 291 148.7Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 6\" opacity=\"0.29\" d=\"M207.2 242.9C209.188 242.9 210.8 241.288 210.8 239.3C210.8 237.312 209.188 235.7 207.2 235.7C205.212 235.7 203.6 237.312 203.6 239.3C203.6 241.288 205.212 242.9 207.2 242.9Z\" fill=\"#E41B64\"/>\r\n    <path id=\"XMLID 202\" opacity=\"0.29\" d=\"M252.7 228.5C253.694 228.5 254.5 227.694 254.5 226.7C254.5 225.706 253.694 224.9 252.7 224.9C251.706 224.9 250.9 225.706 250.9 226.7C250.9 227.694 251.706 228.5 252.7 228.5Z\" fill=\"#E41B64\"/>\r\n    </g>\r\n    </g>\r\n    </svg>\r\n\r\n\r\n      </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-admin works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-moderator works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-user works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/CategorieUpdate.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/CategorieUpdate.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<section id=\"content\" class=\"table-layout animated fadeIn\"   >\r\n\r\n  <!-- begin: .tray-center -->\r\n  <div class=\"tray tray-center col-md-12\" >\r\n\r\n    <div class=\"mw1400 center-block\">\r\n\r\n      <!-- Begin: Content Header -->\r\n      <div class=\"content-header\">\r\n\r\n      </div>\r\n\r\n      <!-- Begin: Admin Form -->\r\n      <div class=\"admin-form\" >\r\n\r\n        <div class=\"panel heading-border\">\r\n          <div class=\"panel-body bg-light\">\r\n\r\n\r\n\r\n            <div class=\"section-divider mb40\" id=\"spy1\">\r\n              <span>Créer ou Modifier Catégorie</span>\r\n            </div>\r\n            <form name=\"editForm\" role=\"form\"  (ngSubmit)=\"insertData()\"  #editForm=\"ngForm\" >\r\n\r\n              <div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group col-md-6 center-block\">\r\n                    <label class=\"form-control-label\"  for=\"field_libelleModule\">Libelle </label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input type=\"text\" class=\"gui-input\" name=\"libelleModule\" #code=\"ngModel\" id=\"field_libelleModule\"  required=\"required\"\r\n                               placeholder=\"nom\" [(ngModel)]=\"vetement.libelle\" />\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \"  class=\"form-text text-danger\"\r\n                        >\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--<div class=\"row\">\r\n                  <div class=\" col-md-6 center-block\">\r\n                    <label class=\"form-control-label\"  for=\"field_logoModule\">Logo </label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input type=\"text\" class=\"gui-input\" name=\"logoModule\" id=\"field_logoModule\"  required=\"required\"\r\n                               placeholder=\"Ninea de L'ecole\" />\r\n                        <label for=\"field_logoModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                      </label>\r\n                      <small class=\"form-text text-danger\"\r\n                             >\r\n                        Ce champ est obligatoire\r\n                      </small>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n\r\n                  <div class=\"form-group col-md-6 center-block\">\r\n                    <label class=\"form-control-label\" for=\"field_rang\">Rang</label>\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input type=\"number\" class=\"gui-input\" name=\"rang\" id=\"field_rang\"\r\n                                 placeholder=\"Ninea de L'ecole\" />\r\n                        <label for=\"field_rang\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>-->\r\n                <!--<div class=\"row\">\r\n                  <div class=\"form-group col-md-6 center-block\">-->\r\n\r\n                <!--<div *ngFor=\"let site of this.sites\">\r\n                    <label class=\"option\">\r\n                        <input type=\"checkbox\" (change)=\"changeEtatSite(site)\" name=\"checked\" [checked]=\"this.site.selectedSite\" value=\"checked\" checked>\r\n                        <span class=\"checkbox\"></span>{{this.site.codeSite}}</label>\r\n\r\n                </div>-->\r\n\r\n\r\n                <!--  </div>\r\n                </div>-->\r\n                <!--  <div class=\"row\">\r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                      <label class=\"form-control-label\"  for=\"field_rang\">Etat</label>\r\n                      <label class=\"switch block mt15\">\r\n                        <input type=\"checkbox\"   name=\"tools\" id=\"t2\" value=\"reports\">\r\n                        <label for=\"t2\" data-on=\"Oui\" data-off=\"Non\"></label>\r\n\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>-->\r\n                <div class=\"row\">\r\n                  <div style=\"float: right;\">\r\n                    <button  type=\"submit\" id=\"save-entity\"  class=\"btn btn-primary\" [disabled]=\"editForm.form.invalid\">\r\n                      &nbsp;<span >{{this.vetement.id?'Update':'Save'}}</span>\r\n                    </button>\r\n                    <button type=\"button\" id=\"cancel-save\" class=\"btn btn-danger\"  (click)=\"precedentPage()\" >\r\n                      &nbsp;<span >Annuler</span>\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!--\r\n                <div class=\"form-group\">\r\n                    <label jhiTranslate=\"isiarchivageApp.module.site\" for=\"field_site\">Site</label>\r\n                    <select class=\"form-control\" id=\"field_site\" multiple name=\"site\" [(ngModel)]=\"module.sites\">\r\n                        <option [ngValue]=\"getSelected(module.sites, siteOption)\" *ngFor=\"let siteOption of sites; trackBy: trackSiteById\">{{siteOption.id}}</option>\r\n                    </select>\r\n                </div>-->\r\n              </div>\r\n\r\n            </form>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/categorie.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/categorie.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 id=\"page-heading\">\r\n\r\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/categorieUpdate\">\r\n\r\n      <span>\r\n        Nouvelle Categorie\r\n      </span>\r\n    </button>\r\n  </h2>\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des Categories</span>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Libelle </span></th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let p of this.typevetements | paginate: { itemsPerPage: 5, currentPage: p}\">\r\n                      <td>{{p.libelle}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n\r\n                          <span (click)=\"deleteSupprimer(p.id)\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                            delete\r\n                            </span>\r\n                            <span routerLink=\"/categorieUpdate/{{p.id}}\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                              create\r\n                              </span>\r\n\r\n                          <!--   <button type=\"submit\"\r\n                                     [routerLink]=\"['/', 'profil', { outlets: { popup: profil.id + '/delete'} }]\"\r\n                                     replaceUrl=\"true\"\r\n                                     queryParamsHandling=\"merge\"\r\n                                     class=\"btn btn-danger btn-sm\">\r\n                                 <fa-icon [icon]=\"'times'\"></fa-icon>\r\n                                 <span class=\"d-none d-md-inline\" jhiTranslate=\"entity.action.delete\">Delete</span>\r\n                             </button>-->\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\r\n                previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n\r\n              </pagination-controls>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\r\n  <h2 id=\"page-heading\">\r\n\r\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/clientUpdate\">\r\n\r\n      <span>\r\n        Nouveau Client\r\n      </span>\r\n    </button>\r\n  </h2>\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des clients</span>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <ng-select [items]=\"items\" bindLabel=\"name\" placeholder=\"Select item\" appendTo=\"body\"\r\n                    (change)=\"getValues()\" [(ngModel)]=\"selected\">\r\n                  </ng-select>\r\n                </div>\r\n                <div *ngIf=\"!showsearchType\" class=\"col-md-6\">\r\n                  <div class=\"section\">\r\n                    <div class=\"smart-widget sm-right smr-50\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input [(ngModel)]=\"searchTerm\" (ngModelChange)=\"searchChanged()\" type=\"text\" name=\"sub\"\r\n                          id=\"sub\" class=\"gui-input\" placeholder=\"Rechercher par telephone\">\r\n                        <label for=\"s\" class=\"field-icon\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </label>\r\n                      </label>\r\n                    </div>\r\n                    <!-- end .smart-widget section -->\r\n                  </div>\r\n                  <!-- end section -->\r\n\r\n                </div>\r\n\r\n                <div *ngIf=\"showsearchType\" class=\"col-md-6\">\r\n                  <div class=\"section\">\r\n                    <div class=\"smart-widget sm-right smr-50\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input [(ngModel)]=\"searchTerm2\" (ngModelChange)=\"searchEmail()\" type=\"text\" name=\"sub\" id=\"sub\"\r\n                          class=\"gui-input\" placeholder=\"Rechercher par email\">\r\n                        <label for=\"s\" class=\"field-icon\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </label>\r\n                      </label>\r\n                    </div>\r\n                    <!-- end .smart-widget section -->\r\n                  </div>\r\n                  <!-- end section -->\r\n\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n\r\n                  <tbody>\r\n\r\n\r\n                    <div class=\"col-sm-4 col-xl-3\"\r\n                      *ngFor=\"let p of this.filterItems | paginate: { itemsPerPage: 6, currentPage: p};let i=index\">\r\n                      <div class=\"panel panel-tile text-center br-a br-grey\">\r\n                        <div class=\"panel-body\">\r\n                          <a>\r\n                            <img [src]=\"p.user.photo?sanitizer.bypassSecurityTrustUrl(p.user.photo):avatar\"\r\n                              style=\"max-height: 120px;\" alt=\"client image\" />\r\n\r\n                          </a>\r\n                          <br>\r\n                          <br>\r\n                          <ul class=\"list-group list-group-flush\">\r\n                            <li class=\"list-group-item\"><b>Nom:</b> {{p.user.nom}}</li>\r\n                            <li class=\"list-group-item\"><b>Prénom:</b> {{p.user.prenom}}</li>\r\n                            <li class=\"list-group-item\"><b>Tel:</b> {{p.tel}}</li>\r\n                            <li class=\"list-group-item\"><b>Adresse:</b> {{p.adresses.region}}</li>\r\n                            <!--  <li class=\"list-group-item\"><span class=\"label label-rounded label-danger\"   (click)=\"deleteSupprimer(p.id)\" >Supprimer</span></li>-->\r\n                          </ul>\r\n                        </div>\r\n                        <div class=\"panel-footer br-t p12\">\r\n                          <span class=\"fs11\">\r\n                            <!-- <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-primary\"\r\n                              routerLink=\"/commandeUpdate/{{p.id}}\">Commande</span> -->\r\n                            <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\r\n                              routerLink=\"/clientUpdate/{{p.id}}\">Editer</span>\r\n                            <!-- <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-danger\"\r\n                              (click)=\"delete(p.id)\">Supprimer</span> -->\r\n\r\n\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"clearfix\">\r\n                  <ul class=\"pagination\">\r\n                    <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\"\r\n                      responsive=\"true\" previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n\r\n                    </pagination-controls>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/clientUpdate.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/clientUpdate.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n  <div class=\"card card-container\">\r\n    <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 center-block\">\r\n          <div class=\"fileupload fileupload-new admin-form\" data-provides=\"fileupload\">\r\n            <div class=\"fileupload-preview thumbnail mb5\">\r\n              <img [src]=\"this.user.photo?sanitizer.bypassSecurityTrustUrl(this.client.user.photo):avatar\" />\r\n            </div>\r\n            <span class=\"button btn-system btn-file btn-block ph5\">\r\n              <span class=\"fileupload-new\">Ajouter Photo</span>\r\n              <span class=\"fileupload-exists\">Changer Photo</span>\r\n              <input type=\"file\" id=\"file_document1\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    <br>\r\n    <br>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n       \r\n            <label for=\"nom\">Nom</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"nom\" [(ngModel)]=\"form.nom\" required #nom=\"ngModel\" />\r\n            <div class=\"alert-danger\" *ngIf=\"f.submitted && nom.invalid\">\r\n              <div *ngIf=\"nom.errors.required\">*Nom obligatoire</div>\r\n            </div>\r\n       </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n         \r\n              <label for=\"prenom\">Prénom</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"prenom\" [(ngModel)]=\"form.prenom\" required #prenom=\"ngModel\" />\r\n              <div class=\"alert-danger\" *ngIf=\"f.submitted && prenom.invalid\">\r\n                <div *ngIf=\"prenom.errors.required\">*Prénom obligatoire</div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n         \r\n        <label for=\"username\">Login</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required minlength=\"3\"\r\n          maxlength=\"20\" #username=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n          <div *ngIf=\"username.errors.required\">Login obligatoire</div>\r\n          <div *ngIf=\"username.errors.minlength\">\r\n            La taille du username doit être supérieur à 3 caractères!\r\n          </div>\r\n          <div *ngIf=\"username.errors.maxlength\">\r\n            La taille du username doit être inférieur à 20 caractères!\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n          \r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" required email\r\n          #email=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n          <div *ngIf=\"email.errors.required\">Email is required</div>\r\n          <div *ngIf=\"email.errors.email\">\r\n            Veuillez entrer une adresse email valide !\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        \r\n        <label for=\"text\">Cni</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"cni\" [(ngModel)]=\"form.cni\" required cni #cni=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && cni.invalid\">\r\n          <div *ngIf=\"cni.errors.required\">Cni is required</div>\r\n          <div *ngIf=\"cni.errors.cni\">\r\n            Veuillez entrer un identifiant valide !\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n         \r\n        <label for=\"tel\">Tel</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"cni\" [(ngModel)]=\"form.tel\" required tel #tel=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && tel.invalid\">\r\n          <div *ngIf=\"tel.errors.required\">Telephine is required</div>\r\n          <div *ngIf=\"tel.errors.tel\">\r\n            Veuillez entrer un telephone valide !\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        \r\n        <label for=\"tel\">Sexe</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"sexe\" [(ngModel)]=\"form.sexe\" required sexe #sexe=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && sexe.invalid\">\r\n          <div *ngIf=\"sexe.errors.required\">Sexe is required</div>\r\n          <div *ngIf=\"sexe.errors.sexe\">\r\n            Masculin/Feminin!\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\" *ngFor=\"let adresse of tabaddresss; let i = index;\">\r\n       \r\n         <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n            <label for=\"region\">Region</label>\r\n            <ng-select [items]=\"Regions\" bindLabel=\"name\" name=\"region\" placeholder=\"Selectionner region\" \r\n            appendTo=\"body\" (change)=\"getValues()\" [(ngModel)]=\"tabaddresss[i].region\" [ngModelOptions]=\"{standalone: true}\" required  #region=\"ngModel\">\r\n          </ng-select>\r\n           <!--  <input type=\"region\" class=\"form-control\" name=\"region\" [(ngModel)]=\"tabaddresss[i].region\" [ngModelOptions]=\"{standalone: true}\" required REGION\r\n              #region=\"ngModel\" /> -->\r\n            <div class=\"alert-danger\" *ngIf=\"f.submitted && region.invalid\">\r\n              <div *ngIf=\"region.errors.required\">Email is required</div>\r\n              <div *ngIf=\"region.errors.region\">\r\n                Veuillez entrer une adresse  valide !\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n          <div class=\"form-group\">\r\n             \r\n            <label for=\"ville\">Ville</label>\r\n            <input type=\"ville\" class=\"form-control\" name=\"ville\" [(ngModel)]=\"tabaddresss[i].ville\" [ngModelOptions]=\"{standalone: true}\" required email\r\n              #ville=\"ngModel\" />\r\n            <div class=\"alert-danger\" *ngIf=\"f.submitted && ville.invalid\">\r\n              <div *ngIf=\"ville.errors.required\">Ville is required</div>\r\n              <div *ngIf=\"ville.errors.ville\">\r\n                Veuillez entrer une adresse valide !\r\n              </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n              <div class=\"form-group\">\r\n                 \r\n                <label for=\"libelle\">Libelle</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"libelle\" [(ngModel)]=\"tabaddresss[i].libelle\" [ngModelOptions]=\"{standalone: true}\" required libelle\r\n                  #libelle=\"ngModel\" />\r\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && libelle.invalid\">\r\n                  <div *ngIf=\"libelle.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"libelle.errors.libelle\">\r\n                    Veuillez entrer une adresse  valide !\r\n                  </div>\r\n                </div>\r\n              </div>    \r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\" form-check>\r\n                <label class=\"switch block mt15\">\r\n                  <input type=\"checkbox\"    [(ngModel)]=\"tabaddresss[i].encours\" [ngModelOptions]=\"{standalone: true}\" required encours\r\n                  #encours=\"ngModel\" value=\"false\">\r\n                  <label for=\"encours\" data-on=\"Actif\" data-off=\"Inactif\"></label>\r\n                  <span>ENCOURS</span>\r\n              </label>\r\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && encours.invalid\">\r\n                  <div *ngIf=\"encours.errors.required\">Encours is required</div>\r\n                  <div *ngIf=\"encours.errors.encours\">\r\n                    Veuillez entrer une adresse  valide !\r\n                  </div>\r\n                </div>\r\n              </div>    \r\n            </div>\r\n            \r\n            <div class=\"col-md-1\" (click)=\"addRow(i)\"> <i class=\"fa fa-plus fa-2x\"></i> </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary btn-block\">{{this.client.id?'Modifier':'Enregister'}}</button>\r\n      </div>\r\n\r\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n        Inscription échouée!<br />{{ errorMessage }}\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commande.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commande.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\n  <app-loading-spinner *ngIf=\"showSpinnerMail\"></app-loading-spinner>\n  <br /> <br />\n\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\n\n    <!-- begin: .tray-center -->\n    <div class=\"tray tray-center col-md-12\">\n\n      <div class=\"mw1400 center-block\">\n\n        <!-- Begin: Content Header -->\n        <div class=\"content-header\">\n\n        </div>\n\n        <!-- Begin: Admin Form -->\n        <div class=\"admin-form\">\n\n          <div class=\"panel heading-border\">\n            <div class=\"panel-body bg-light\">\n\n              <div class=\"section-divider mb40\" id=\"spy1\">\n                <span>Liste des Commandes</span>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"section\">\n                  <label class=\"field prepend-icon\">\n                    <input type=\"text\" class=\"gui-input\" name=\"matricule\" id=\"field_codeEcole\" [(ngModel)]=\"this.mot\"\n                      placeholder=\"Barre de recherche \" />\n                    <label for=\"field_codeEcole\" class=\"field-icon\">\n                      <i class=\"fa fa-search\"></i>\n                    </label>\n                  </label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <ng-select [items]=\"items\" bindLabel=\"libelle\" placeholder=\"Filter par état\" appendTo=\"body\"\n                    (change)=\"getValues()\" [(ngModel)]=\"selected\">\n                  </ng-select>\n                </div>\n\n              </div>\n\n\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th class=\"\">Numero Commande</th>\n                      <th class=\"\">Date Commande</th>\n                      <th class=\"\">Date Livraison</th>\n                      <th class=\"\">Nom & Prenom Client</th>\n                      <th class=\"\">Tel Client</th>\n                      <th class=\"\">Etat</th>\n                      <th class=\"text-right\">Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let c of this.filterItems |commande:this.mot | paginate: { itemsPerPage: 5, currentPage: p}\">\n                      <td>{{c.numero}}</td>\n                      <td>{{c.dateCom}}</td>\n                      <td>{{c.dateLivFormat}}</td>\n                      <td>{{c.client.user.nom}} {{c.client.user.prenom}}</td>\n                      <td>{{c.client.tel}}</td>\n                      <td>{{c.etat}}</td>\n                      <td class=\"text-right\">\n                        <div class=\"btn-group flex-btn-group-container\">\n                          <!--<button id=\"btnEtat\" type=\"button\" class=\"btn btn-success br2 btn-xs fs12 dropdown-toggle\"\n                            data-toggle=\"dropdown\" aria-expanded=\"false\">Etat\n                            <span class=\"caret ml5\"></span>\n                          </button>\n                          <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li>\n                              <a>Terminé</a>\n                            </li>\n                            <li>\n                              <a>En cours</a>\n                            </li>\n                          </ul>-->\n\n                            <span routerLink=\"/detailscommande/{{c.id}}\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\n                              visibility\n                              </span>\n                              <span routerLink=\"/commandeUpdate/{{c.id}}\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\n                                create\n                                </span>\n\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"clearfix\">\n                  <ul class=\"pagination\">\n                    <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\"\n                      responsive=\"true\" previousLabel=\"Précédent\" nextLabel=\"Suivant\">\n                    </pagination-controls>\n                  </ul>\n                </div>\n              </div>\n\n\n\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </section>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commandeUpdate.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commandeUpdate.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-3\">\r\n\r\n  <div class=\"admin-form\">\r\n\r\n    <div class=\"panel heading-border \">\r\n      <div class=\"panel-body bg-light\">\r\n\r\n        <div class=\"section-divider mb40\" id=\"spy1\">\r\n          <span>Infos Client</span>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-8\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Numéro Téléphone</label>\r\n\r\n            <div class=\"section\">\r\n              <label class=\"field prepend-icon\">\r\n                <input type=\"text\" class=\"gui-input\" name=\"tel\" id=\"field_libelleModule\" #tel=\"ngModel\"\r\n                  [(ngModel)]=\"this.telInput\" placeholder=\"Taper numéro!\" />\r\n                <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                  <i class=\"fa fa-user\"></i>\r\n                </label>\r\n                <small [class.hidden]=\"tel.valid && tel.touched\" class=\"form-text text-danger\">\r\n                  Ce champ est obligatoire\r\n                </small>\r\n\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-4\">\r\n\r\n            <div class=\"section\">\r\n              <a (click)=\"getClientDataByTel()\" id=\"btnsearch\" class=\"btn btn-system\">Valider</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"showinfosClient\">\r\n          <a>\r\n            <img id=\"ClientPhoto\"\r\n              [src]=\"this.clientData.user.photo?sanitizer.bypassSecurityTrustUrl(this.clientData.user.photo):avatar\" />\r\n          </a>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-12\">\r\n              <label class=\"form-control-label\" for=\"field_libelleModule\">Nom</label>\r\n\r\n              <div class=\"section\">\r\n                <label class=\"field prepend-icon\">\r\n                  <input type=\"text\" class=\"gui-input\" name=\"nom\" id=\"field_libelleModule\" required=\"required\"\r\n                    placeholder=\"Nom client\" value={{this.clientData.user.nom}} readonly />\r\n                  <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                    <i class=\"fa fa-user\"></i>\r\n                  </label>\r\n\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n              <label class=\"form-control-label\" for=\"field_libelleModule\">Prenom </label>\r\n\r\n              <div class=\"section\">\r\n                <label class=\"field prepend-icon\">\r\n                  <input type=\"text\" class=\"gui-input\" name=\"prenom\" id=\"field_libelleModule\" required=\"required\"\r\n                    placeholder=\"Prénom client\" value={{this.clientData.user.prenom}} readonly />\r\n                  <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                    <i class=\"fa fa-user\"></i>\r\n                  </label>\r\n\r\n\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-4\">\r\n\r\n  <div class=\"admin-form\">\r\n\r\n    <div class=\"panel heading-border\">\r\n      <div class=\"panel-body bg-light\">\r\n\r\n        <div class=\"section-divider mb40\" id=\"spy1\">\r\n          <span>Infos Commande</span>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Date Livraison </label>\r\n\r\n            <div class=\"section\">\r\n              <label class=\"field prepend-icon\">\r\n                <input type=\"date\" class=\"gui-input\" name=\"nom\" id=\"field_libelleModule\" #date=\"ngModel\"\r\n                  [class.invalid]=\"!date.valid && date.touched\" required=\"required\" placeholder=\"Date Livraison\"\r\n                  [(ngModel)]=\"this.commande.dateLiv\" />\r\n                <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                  <i class=\"fa fa-calendar\"></i>\r\n                </label>\r\n                <small [class.hidden]=\"date.valid && date.touched\" class=\"form-text text-danger\">\r\n                  Ce champ est obligatoire\r\n                </small>\r\n\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"onTel\">\r\n\r\n          <!--Produit-->\r\n          <div>\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"form-control-label\" for=\"field_libelleModule\">Catégorie </label>\r\n                <ng-select [items]=\"items\" bindLabel=\"libelle\" placeholder=\"Selectionner\" appendTo=\"body\"\r\n                  (change)=\"getValues()\" [(ngModel)]=\"selected\">\r\n                  <!--[(ngModel)]=\"this.commande.telephone ? selectedUpdate : selected\"-->\r\n                </ng-select>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"form-control-label\" for=\"field_libelleModule\">Produit </label>\r\n                <ng-select [items]=\"items2\" bindLabel=\"libelle\" placeholder=\"Selectionner\" appendTo=\"body\"\r\n                  (change)=\"getValues2()\" [(ngModel)]=\"selected2\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <label class=\"form-control-label\" for=\"field_libelleModule\">Quantité</label>\r\n\r\n                <div class=\"section\">\r\n                  <label class=\"field prepend-icon\">\r\n                    <input type=\"number\" min=\"1\" max=\"{{this.selected2.quantite}}\" class=\"gui-input\" name=\"nom\"\r\n                      id=\"field_libelleModule\" #nombre=\"ngModel\" [class.invalid]=\"!nombre.valid && !nombre.touched\"\r\n                      required=\"required\" placeholder=\"Quantité\" [(ngModel)]=\"this.detailcommande.qte\" />\r\n                    <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                      <i class=\"fa fa-sort-numeric-desc\"></i>\r\n                    </label>\r\n                    <small [class.hidden]=\"nombre.valid && nombre.touched\" class=\"form-text text-danger\">\r\n                      Ce champ est obligatoire\r\n                    </small>\r\n\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-6\">\r\n                <a>\r\n                  <img\r\n                    [src]=\"this.selected2.image!=null?sanitizer.bypassSecurityTrustUrl(this.selected2.image):productEmpty\"\r\n                    style=\"height: 110px;width: 130px;\" />\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--END Produit-->\r\n\r\n          <div class=\"row\">\r\n\r\n            <div class=\"form-group col-md-6\">\r\n              <label class=\"form-control-label\" for=\"field_libelleModule\">Prix (FCFA)</label>\r\n\r\n              <div *ngIf=\"havePrix\" class=\"section\">\r\n                <label class=\"field prepend-icon\">\r\n                  <input type=\"text\" class=\"gui-input\" name=\"prix\" id=\"field_libelleModule\" #prix=\"ngModel\"\r\n                    [class.invalid]=\"!prix.valid\" required=\"required\" placeholder=\"Prix\"\r\n                    [(ngModel)]=\"this.selected2.prixUnitaire\" readonly />\r\n                  <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                    <i class=\"fa fa-tag\"></i>\r\n                  </label>\r\n                  <small [class.hidden]=\"prix.valid\" class=\"form-text text-danger\">\r\n                    Ce champ est obligatoire\r\n                  </small>\r\n\r\n                </label>\r\n              </div>\r\n\r\n              <div *ngIf=\"!havePrix\" class=\"section\">\r\n                <label class=\"field prepend-icon\">\r\n                  <input type=\"text\" class=\"gui-input\" name=\"prix\" id=\"field_libelleModule\" required=\"required\"\r\n                    placeholder=\"Prix\" readonly>\r\n                  <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                    <i class=\"fa fa-tag\"></i>\r\n                  </label>\r\n\r\n\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"section\">\r\n                <label for=\"details\" class=\"field-label\">Commentaire</label>\r\n                <label for=\"details\" class=\"field\">\r\n                  <textarea class=\"gui-textarea\" id=\"details\" name=\"details\"\r\n                    [(ngModel)]=\"this.detailcommande.commentaire\"></textarea>\r\n                  <span class=\"input-footer\">\r\n                    <strong>Notice:</strong>300 mots au maximum.</span>\r\n                </label>\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div style=\"float: right;\">\r\n                <button *ngIf=\"!showAddBtn\" (click)=\"AddCommandeOnTab()\" id=\"AddBtn\" type=\"button\"\r\n                  class=\"btn btn-success\">\r\n                  &nbsp;<span>Ajouter</span>\r\n                </button>\r\n\r\n                <button *ngIf=\"showAddBtn\" (click)=\"insertDetailCommande()\" id=\"UpdateBtn\" type=\"button\"\r\n                  class=\"btn btn-primary\">\r\n                  &nbsp;<span>Inserer</span>\r\n                </button>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-md-5\">\r\n\r\n  <div class=\"admin-form\">\r\n\r\n    <div class=\"panel heading-border\">\r\n      <div class=\"panel-body bg-light\">\r\n\r\n        <div class=\"section-divider mb40\" id=\"spy1\">\r\n          <span>Tableau Commande</span>\r\n        </div>\r\n\r\n\r\n        <div class=\"panel-body pn\">\r\n          <td class=\"table-responsive\">\r\n            <table class=\"table admin-form theme-warning tc-checkbox-1 fs13\">\r\n              <thead>\r\n                <tr class=\"bg-light\">\r\n                  <th class=\"\">Produit</th>\r\n                  <th class=\"\">Image</th>\r\n                  <th class=\"\">Catégorie</th>\r\n                  <th class=\"\">Quantité</th>\r\n                  <th class=\"\">Prix Unitaire</th>\r\n                  <th>{{this.commande.id?'Actions':''}}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let c of tabCommande\">\r\n                  <td class=\"w100\">\r\n                    {{c.produit}}\r\n                  </td>\r\n                  <td><img [src]=\"c.image!=null?sanitizer.bypassSecurityTrustUrl(c.image):productEmpty\"\r\n                      style=\"height: 60px;width: 80px;\" /></td>\r\n                  <td class=\"\">{{c.categorie}}</td>\r\n                  <td class=\"\">{{c.qte}}</td>\r\n                  <td class=\"\">{{c.prix}}</td>\r\n                  <td>\r\n                    <!--<span (click)=\"ChargeDataForUpdate({record: c})\" style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\r\n                        >{{this.commande.telephone?'Editer':''}}</span>-->\r\n                    <span (click)=\"AlertDeleteDetailsCommande(c.IdDetailCommande)\"\r\n                      class=\"label label-rounded label-danger\">{{this.commande.id?'Supprimer':''}}</span>\r\n                  </td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <p></p>\r\n        <div class=\"row col-md-6\" style=\"float: right;\">\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Réduction</label>\r\n            <label class=\"field prepend-icon\">\r\n              <input type=\"number\" min=\"0\" max=\"{{this.montantTotal}}\" class=\"gui-input\" name=\"nom\"\r\n                id=\"field_libelleModule\" required=\"required\" placeholder=\"Réduction\" [(ngModel)]=\"this.reduction\"\r\n                (ngModelChange)=\"AddReduction()\" />\r\n              <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                <i class=\"fa fa-tag\"></i>\r\n              </label>\r\n\r\n            </label>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Montant Avance</label>\r\n\r\n\r\n            <label class=\"field prepend-icon\">\r\n              <input type=\"text\" class=\"gui-input\" name=\"nom\" id=\"field_libelleModule\" required=\"required\"\r\n                placeholder=\"Avance\" [(ngModel)]=\"this.commande.avance\" readonly />\r\n              <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                <i class=\"fa fa-tag\"></i>\r\n              </label>\r\n\r\n            </label>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Net à payer </label>\r\n\r\n            <label class=\"field prepend-icon\">\r\n              <input type=\"number\" class=\"gui-input\" name=\"nom\" id=\"field_libelleModule\" required=\"required\"\r\n                placeholder=\"Montant à payer\" [(ngModel)]=\"this.montantNetaPayer\" readonly />\r\n              <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                <i class=\"fa fa-price\"></i>\r\n              </label>\r\n\r\n            </label>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label class=\"form-control-label\" for=\"field_libelleModule\">Montant Total </label>\r\n\r\n            <label class=\"field prepend-icon\">\r\n              <input type=\"text\" class=\"gui-input\" name=\"nom\" id=\"field_libelleModule\" required=\"required\"\r\n                placeholder=\"Total\" [(ngModel)]=\"this.montantTotal\" readonly />\r\n              <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                <i class=\"fa fa-user\"></i>\r\n              </label>\r\n\r\n            </label>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row col-md-12\">\r\n          <div style=\"float: left;\">\r\n            <button (click)=\"insertData()\" type=\"button\" style=\"margin-right: 10px\" class=\"btn btn-success\">\r\n              &nbsp;<span>{{this.commande.id?'Modifier':'Enregistrer'}}</span>\r\n            </button>\r\n            <button type=\"button\" id=\"cancel-save\" class=\"btn btn-danger\" (click)=\"precedentPage()\">\r\n              &nbsp;<span>Annuler</span>\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-commande/details-commande.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details-commande/details-commande.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel\">\r\n  <ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">Envoi en cours...</p>\r\n</ngx-spinner>\r\n  <div class=\"panel-heading\">\r\n    <span *ngIf=\"this.commande\" class=\"panel-title\">\r\n        <span class=\"glyphicon glyphicon-hand-down\"></span>Détails Commande N°{{this.commande.numero}}</span>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <ul class=\"nav nav-pills mb20 pull-right\">\r\n      <li class=\"active\">\r\n        <a href=\"#tab17_1\" data-toggle=\"tab\">Frais commande</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#tab17_2\" data-toggle=\"tab\">Articles</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#tab17_3\" data-toggle=\"tab\">Factures</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"tab-content br-n pn\">\r\n      <div id=\"tab17_1\" class=\"tab-pane active\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <img src=\"assets/img/stock/3.jpg\" class=\"img-responsive thumbnail mr25\">\r\n            <h3>Client: <span style=\"color: darkorange;\">{{this.commande.client.user.prenom}} {{this.commande.client.user.nom}}</span></h3>\r\n            <h3>Tel: <span style=\"color: crimson;\">{{this.commande.client.tel}}</span></h3>\r\n            <h3>Email: <span style=\"color: darkorange;\">{{this.commande.client.user.email}}</span></h3>\r\n          </div>\r\n          <div class=\"col-md-8\">\r\n            <ul>\r\n              <li *ngIf=\"this.commande\">Montant Total: <h3>{{this.commande.montant | number: '1.2-2'}} FCFA</h3></li>\r\n              <br>\r\n              <li *ngIf=\"this.commande\">Montant Avance: <h4>{{this.commande.avance == null?0:this.commande.avance | number: '1.2-2'}} FCFA</h4></li>\r\n              <li>Montant Restant: <h4>{{this.restant == null?0:this.restant | number: '1.2-2'}} FCFA</h4></li>\r\n              <li *ngIf=\"this.commande.shippingAddress != null\">Adresse de livraision: <h4 style=\"color: crimson;\">{{this.commande.shippingAddress.region}}, {{this.commande.shippingAddress.libelle}}</h4></li>\r\n              <li>Montant livraision: <h4 style=\"color: rgba(48, 168, 18, 0.986);\">2000 FCFA</h4></li>\r\n              </ul>\r\n          </div>\r\n          <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\">\r\n            <button *ngIf=\"this.commande.montant == this.commande.avance\" mat-raised-button class=\"btnEtat\"><span>Paiement complet</span></button>\r\n            <button *ngIf=\"this.commande.montant != this.commande.avance\" mat-raised-button class=\"btnEtat2\"><span>Paiement incomplet</span></button>\r\n\r\n            <button (click)=\"openPaymentDialog(this.commande)\" *ngIf=\"this.commande.montant != this.commande.avance\" mat-raised-button class=\"btnEtat\"><span>Payer restant</span></button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"tab17_2\" class=\"tab-pane\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\" *ngFor=\"let item of this.detailcommande\">\r\n            <img style=\"width: 250px; height: 200px;\" [src]=\"item.produit.image?sanitizer.bypassSecurityTrustUrl(item.produit.image):productEmpty\" class=\"img-responsive thumbnail mr25\">\r\n            <h2 style=\"font-size: medium;\">{{item.produit.libelle}}</h2>\r\n            <h3 style=\"color: chartreuse;\">Prix: {{item.produit == null?0:item.produit.prixUnitaire | number: '1.2-2'}} FCFA</h3>\r\n            <h3>Quantité: {{item.qte}}</h3>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div id=\"tab17_3\" class=\"tab-pane\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\" *ngFor=\"let item of this.factures\">\r\n            <img style=\"width: 250px; height: 200px;\" src=\"assets/img/stock/6.png\" class=\"img-responsive thumbnail mr25\">\r\n            <h2 style=\"font-size: medium;\">Type Paiment: {{item.paiement.type}}</h2>\r\n            <h2><strong>Montant: <span style=\"color: green;\">{{item.paiement.montant | number: '1.2-2'}} FCFA</span></strong></h2>\r\n            <h3 style=\"color: teal;\">Date Paiement: {{item.dateFact}}</h3>\r\n            <button id=\"btnSendFacture\" mat-raised-button color=\"primary\" (click)=\"SendFactureAvanceByMail(item.id)\">Envoyer Facture</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/FormulaireUpdate.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/FormulaireUpdate.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\r\n<!--<div class=\"card m-3\">\r\n    <h5 class=\"card-header\">Angular 8 Reactive Form Validation</h5>\r\n    <div class=\"card-body\">\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                    <label>Title</label>\r\n                    <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                        <option value=\"\"></option>\r\n                        <option value=\"Mr\">Mr</option>\r\n                        <option value=\"Mrs\">Mrs</option>\r\n                        <option value=\"Miss\">Miss</option>\r\n                        <option value=\"Ms\">Ms</option>\r\n                    </select>\r\n                    <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.title.errors.required\" class=\"danger\">Title is required</div>\r\n                    </div>\r\n                </div>-->\r\n\r\n           \r\n               <!-- <div class=\"form-group col-5\">\r\n                    <label>Telephone</label>\r\n                    <input type=\"text\" formControlName=\"tel\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.tel.errors }\" />\r\n                    <div *ngIf=\"submitted && f.tel.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\" f.tel.errors.required\">tel is required</div>\r\n                        <div *ngIf=\"f.tel.errors.numericAllowed\">format number</div>\r\n                      \r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-5\">\r\n                    <label>Last Name</label>\r\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n           <!--<div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n                    <label>Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                    </div>\r\n                </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col\">\r\n                    <label>Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col\">\r\n                    <label>Confirm Password</label>\r\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group form-check\">\r\n                <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n                <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\r\n                <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback\">Accept Ts & Cs is required</div>\r\n            </div>-->\r\n          <!-- <div class=\"text-center\">\r\n                <button class=\"btn btn-primary mr-1\" >Register</button>\r\n                <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>-->\r\n\r\n\r\n<section id=\"content\" class=\"table-layout animated fadeIn\"   >\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\" >\r\n  \r\n      <div class=\"mw1400 center-block\">\r\n  \r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n  \r\n        </div>\r\n  \r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\" >\r\n  \r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n  \r\n  \r\n  \r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Créer ou Modifier Couleur</span>\r\n              </div>\r\n              \r\n              <form [formGroup]=\"registerForm\"  >\r\n  \r\n                <div>\r\n        \r\n                <div class=\"row\">\r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                        <label class=\"form-control-label\"  for=\"field_libelleModule\">Date</label>\r\n    \r\n                        <div class=\"section\">\r\n                          <label class=\"field prepend-icon\">\r\n                             \r\n                              <input type=\"date\" formControlName=\"date\" class=\"gui-input\" [ngClass]=\"{ 'is-invalid': submitted && f.date.errors }\" />\r\n                              <div *ngIf=\"submitted && f.date.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.date.errors.required\" class=\"danger\">date is required</div>\r\n                              </div>\r\n                            \r\n                            \r\n    \r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n\r\n                </div>\r\n                  <div class=\"row\">\r\n                  \r\n  \r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                        <label>Email</label>\r\n                        <input type=\"text\" formControlName=\"email\" class=\"gui-input\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\" class=\"danger\">Email is required</div>\r\n                            <div *ngIf=\"f.email.errors.email\" class=\"danger\">Email must be a valid email address</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" formControlName=\"password\" class=\"gui-input\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.password.errors.required\" class=\"danger\">Password is required</div>\r\n                                <div *ngIf=\"f.password.errors.minlength\" class=\"danger\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                        </div>\r\n  \r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                      <label class=\"form-control-label\"  for=\"field_libelleModule\">First Name </label>\r\n  \r\n                      <div class=\"section\">\r\n                        <label class=\"field prepend-icon\">\r\n                           \r\n                            <input type=\"text\" formControlName=\"firstname\" class=\"gui-input\" [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" />\r\n                            <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.firstname.errors.required\" class=\"danger\">First Name is required</div>\r\n                            </div>\r\n                          <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                          </label>\r\n                          \r\n  \r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                        <label>Title</label>\r\n                        <select formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                            <option value=\"\"></option>\r\n                            <option value=\"Mr\">Mr</option>\r\n                            <option value=\"Mrs\">Mrs</option>\r\n                            <option value=\"Miss\">Miss</option>\r\n                            <option value=\"Ms\">Ms</option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.title.errors.required\" class=\"danger\">Title is required</div>\r\n                        </div>\r\n                    </div>\r\n  \r\n                  </div>\r\n                <div class=\"form-group col-md-6 center-block form-check\">\r\n                    <input type=\"checkbox\" formControlName=\"acceptTerms\" id=\"acceptTerms\" class=\"form-check-input\" [ngClass]=\"{ 'is-invalid': submitted && f.acceptTerms.errors }\" />\r\n                    <label for=\"acceptTerms\" class=\"form-check-label\">Accept Terms & Conditions</label>\r\n                    <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"invalid-feedback danger\">Accept Ts & Cs is required</div>\r\n                </div>\r\n              \r\n                  <div class=\"row\">\r\n                    <div style=\"float: right;\">\r\n                        <div class=\"text-center\">\r\n                            <button class=\"btn btn-primary mr-1\" (click)=\"onSubmit()\" >Register</button>\r\n                            <button class=\"btn btn-danger\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n                </div>\r\n  \r\n              </form>\r\n  \r\n  \r\n  \r\n  \r\n            </div>\r\n  \r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/formulaire.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/formulaire.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 id=\"page-heading\">\r\n\r\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/formulaireUpdate\">\r\n\r\n      <span>\r\n        Nouvelle Personne\r\n      </span>\r\n    </button>\r\n  </h2>\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des personnes</span>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Libelle </span></th>\r\n                      <th><span>Etiquette </span></th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let p of this.personnes | paginate: { itemsPerPage: 5, currentPage: p}\">\r\n                      <td>{{p.title}}</td>\r\n                      <td>{{p.firstname}}</td>\r\n\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n                          <span style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-primary\">Voir</span>\r\n                          <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\r\n                            routerLink=\"/formulaireUpdate/{{p.id}}\">Editer</span>\r\n                          <span class=\"label label-rounded label-danger\"\r\n                            (click)=\"deleteSupprimer(p.id)\">Supprimer</span>\r\n\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\r\n                  previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n\r\n                </pagination-controls>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-commande/gestion-commande.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-commande/gestion-commande.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 id=\"page-heading\">\r\n  <app-loading-spinner *ngIf=\"showSpinnerMail\"></app-loading-spinner>\r\n  <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n    class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/commandeUpdate\">\r\n\r\n    <span>\r\n      Nouvelle Commande\r\n    </span>\r\n  </button>\r\n</h2>\r\n\r\n<br />\r\n<br />\r\n<br />\r\n<!-- Start Widget -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 col-lg-3\">\r\n    <div class=\"mini-stat clearfix bx-shadow \" style=\"background-color: rgb(30, 210, 84);\">\r\n      <span class=\"mini-stat-icon\"><i class=\"ion-cash\"></i></span>\r\n      <div class=\"mini-stat-info text-right\">\r\n        <h5>{{this.TotalVenteBoutique | number: '1.2-2'}} FCFA</h5>\r\n      </div>\r\n      <div class=\"mini-stat-info text-right\">\r\n\r\n      </div>\r\n      <div class=\"tiles-progress\">\r\n        <div class=\"m-t-20\">\r\n          <h5 class=\"text-uppercase text-white m-0\">Total vente boutique</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-sm-6 col-lg-3\">\r\n    <div class=\"mini-stat clearfix  bx-shadow\" style=\"background-color: rgb(255, 53, 53);\">\r\n      <span class=\"mini-stat-icon\"><i class=\"ion-model-s\"></i></span>\r\n      <div class=\"mini-stat-info text-right\">\r\n        <span class=\"counter\">{{this.NbrCommandeALivrer}}</span>\r\n\r\n      </div>\r\n      <div class=\"tiles-progress\">\r\n        <div class=\"m-t-20\">\r\n          <h5 class=\"text-uppercase text-white m-0\">Commande à livrer</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-lg-3\">\r\n    <div class=\"mini-stat clearfix bx-shadow\" style=\"background-color: rgb(165, 42, 99);\">\r\n      <span class=\"mini-stat-icon\"><i class=\"ion-ios7-cart\"></i></span>\r\n      <div class=\"mini-stat-info text-right\">\r\n        <span class=\"counter\">{{this.NbrTotalCommande}}</span>\r\n      </div>\r\n      <div class=\"tiles-progress\">\r\n        <div class=\"m-t-20\">\r\n          <h5 class=\"text-uppercase text-white m-0\">Nombre Total Commande</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6 col-lg-3\">\r\n    <div class=\"mini-stat clearfix bg-primary bx-shadow\">\r\n      <span class=\"mini-stat-icon\"><i class=\"ion-android-contacts\"></i></span>\r\n      <div class=\"mini-stat-info text-right\">\r\n        <span class=\"counter\">{{this.nbrClient}}</span>\r\n      </div>\r\n      <div class=\"tiles-progress\">\r\n        <div class=\"m-t-20\">\r\n          <h5 class=\"text-uppercase text-white m-0\">Nombre de Client</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div> <!-- end row -->\r\n\r\n<!-- Begin: Content -->\r\n<section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n  <!-- begin: .tray-center -->\r\n  <div class=\"tray tray-center\">\r\n    <div class=\"panel mb25 mt5\">\r\n      <div class=\"panel-heading\">\r\n        <span class=\"panel-title hidden-xs\"> Gestion Commande</span>\r\n        <ul class=\"nav panel-tabs-border panel-tabs\">\r\n          <li class=\"active\">\r\n            <a href=\"#tab1_1\" data-toggle=\"tab\">Commande du jour</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#tab1_2\" data-toggle=\"tab\">Commande passée</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#tab1_3\" data-toggle=\"tab\">Commande Future</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#tab1_4\" data-toggle=\"tab\">Delai Livraison Commande</a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n      <div class=\"panel-body p20 pb10\">\r\n        <div class=\"tab-content pn br-n admin-form\">\r\n          <div id=\"tab1_1\" class=\"tab-pane active\">\r\n\r\n            <div class=\"panel-body pn\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table admin-form theme-warning tc-checkbox-1 fs13\">\r\n                  <thead>\r\n                    <tr class=\"bg-light\">\r\n                      <th class=\"text-center\">Select</th>\r\n                      <th class=\"\">Numero Commande</th>\r\n                      <th class=\"\">Date Commande</th>\r\n                      <th class=\"\">Date Livraison</th>\r\n                      <th class=\"\">Nom & Prenom Client</th>\r\n                      <th class=\"\">Tel Client</th>\r\n                      <th class=\"\">Etat</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let cn of commandesNow\">\r\n                      <td class=\"text-center\">\r\n                        <label class=\"option block mn\">\r\n                          <input type=\"checkbox\" name=\"mobileos\" value=\"FR\" (click)=\"GetPhoneNumber({record: cn})\">\r\n                          <span class=\"checkbox mn\"></span>\r\n                        </label>\r\n                      </td>\r\n                      <td class=\"w100\">\r\n                        {{cn.numero}}\r\n                      </td>\r\n                      <td class=\"\">{{cn.dateCom}}</td>\r\n                      <td class=\"\">{{cn.dateLiv}}</td>\r\n                      <td class=\"\">{{cn.client.user.nom}} {{cn.client.user.prenom}} </td>\r\n                      <td class=\"\">{{cn.client.tel}}</td>\r\n                      <td>\r\n                        {{cn.etat}}\r\n                      </td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n\r\n                          <span (click)=\"UpadteEtat(cn.id,cn)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-success\">Non Terminé</span>\r\n                          <span (click)=\"UpadteEtatLivre(cn.id,cn)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-primary\">Livré</span>\r\n                          <!-- <span (click)=\"getUpdateCommandePayer(cn.id)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded \" style=\"background-color: darksalmon;\">Payer</span> -->\r\n                          <!--<ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li>\r\n                              <a>Terminé</a>\r\n                            </li>\r\n                            <li>\r\n                              <a>Livré</a>\r\n                            </li>\r\n\r\n                          </ul>-->\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"section\">\r\n                    <label for=\"details\" class=\"field-label\"><strong>Message</strong></label>\r\n                    <label for=\"details\" class=\"field\">\r\n                      <textarea class=\"gui-textarea\" id=\"details\" name=\"details\"\r\n                        [(ngModel)]=\"commande.details_commandes\"></textarea>\r\n                      <span class=\"input-footer\">\r\n                        <strong>Notice:</strong>300 mots au maximum.</span>\r\n                    </label>\r\n                  </div>\r\n\r\n                  <div style=\"float: left;\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"SendEmail()\">\r\n                      &nbsp;<span>Envoyer Mail</span>\r\n                    </button>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <div id=\"tab1_2\" class=\"tab-pane\">\r\n            <div class=\"panel-body pn\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table admin-form theme-warning tc-checkbox-1 fs13\">\r\n                  <thead>\r\n                    <tr class=\"bg-light\">\r\n                      <th class=\"text-center\">Select</th>\r\n                      <th class=\"\">Numero Commande</th>\r\n                      <th class=\"\">Date Commande</th>\r\n                      <th class=\"\">Date Livraison</th>\r\n                      <th class=\"\">Nom & Prenom Client</th>\r\n                      <th class=\"\">Tel Client</th>\r\n                      <th class=\"\">Etat</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let cp of commandesPast\">\r\n                      <td class=\"text-center\">\r\n                        <label class=\"option block mn\">\r\n                          <input type=\"checkbox\" name=\"mobileos\" value=\"FR\" (click)=\"GetPhoneNumber({record: cp})\">\r\n                          <span class=\"checkbox mn\"></span>\r\n                        </label>\r\n                      </td>\r\n                      <td class=\"w100\">\r\n                        {{cp.numero}}\r\n                      </td>\r\n                      <td class=\"\">{{cp.dateCom}}</td>\r\n                      <td class=\"\">{{cp.dateLiv}}</td>\r\n                      <td class=\"\">{{cp.client.user.nom}} {{cp.client.user.prenom}} </td>\r\n                      <td class=\"\">{{cp.client.tel}}</td>\r\n                      <td class=\"\">{{cp.etat}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n\r\n                          <span (click)=\"UpadteEtat(cp.id,cp)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-success\">Non Terminé</span>\r\n                          <span (click)=\"UpadteEtatLivre(cp.id,cp)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-primary\">Livré</span>\r\n                          <!-- <span (click)=\"getUpdateCommandePayer(cp.id)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded \" style=\"background-color: darksalmon;\">Payer</span> -->\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"section\">\r\n                    <label for=\"details\" class=\"field-label\"><strong>Message</strong></label>\r\n                    <label for=\"details\" class=\"field\">\r\n                      <textarea class=\"gui-textarea\" id=\"details\" name=\"details\"\r\n                        [(ngModel)]=\"commande.details_commandes\"></textarea>\r\n                      <span class=\"input-footer\">\r\n                        <strong>Notice:</strong>300 mots au maximum.</span>\r\n                    </label>\r\n                  </div>\r\n\r\n                  <div style=\"float: left;\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"SendEmailPast()\">\r\n                      &nbsp;<span>Envoyer Mail</span>\r\n                    </button>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n          <div id=\"tab1_3\" class=\"tab-pane\">\r\n            <div class=\"panel-body pn\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table admin-form theme-warning tc-checkbox-1 fs13\">\r\n                  <thead>\r\n                    <tr class=\"bg-light\">\r\n                      <th class=\"text-center\">Select</th>\r\n                      <th class=\"\">Numero Commande</th>\r\n                      <th class=\"\">Date Commande</th>\r\n                      <th class=\"\">Date Livraison</th>\r\n                      <th class=\"\">Nom & Prenom Client</th>\r\n                      <th class=\"\">Tel Client</th>\r\n                      <th class=\"\">Etat</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let cf of this.commandesFuture\">\r\n                      <td class=\"text-center\">\r\n                        <label class=\"option block mn\">\r\n                          <input type=\"checkbox\" name=\"mobileos\" value=\"FR\" (click)=\"GetPhoneNumber({record: cf})\">\r\n                          <span class=\"checkbox mn\"></span>\r\n                        </label>\r\n                      </td>\r\n                      <td class=\"w100\">\r\n                        {{cf.numero}}\r\n                      </td>\r\n                      <td class=\"\">{{cf.dateCom}}</td>\r\n                      <td class=\"\">{{cf.dateLiv}}</td>\r\n                      <td class=\"\">{{cf.client.user.nom}} {{cf.client.user.prenom}} </td>\r\n                      <td class=\"\">{{cf.client.tel}}</td>\r\n                      <td class=\"\">{{cf.etat}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n                          <span (click)=\"UpadteEtat(cf.id)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-success\">Non Terminé</span>\r\n                          <span (click)=\"UpadteEtatLivre(cf.id)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-primary\">Livré</span>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n              <!-- <div class=\"row\">\r\n\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"section\">\r\n                    <label for=\"details\" class=\"field-label\"><strong>Message</strong></label>\r\n                    <label for=\"details\" class=\"field\">\r\n                      <textarea class=\"gui-textarea\" id=\"details\" name=\"details\"\r\n                        [(ngModel)]=\"commande.details_commandes\"></textarea>\r\n                      <span class=\"input-footer\">\r\n                        <strong>Notice:</strong>300 mots au maximum.</span>\r\n                    </label>\r\n                  </div>\r\n\r\n                  <div style=\"float: left;\">\r\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"SendEmailFuture()\">\r\n                      &nbsp;<span>Envoyer Mail</span>\r\n                    </button>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n          <div id=\"tab1_4\" class=\"tab-pane\">\r\n            <div class=\"panel-body pn\">\r\n              <div class=\"table-responsive\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <h2>Délai livraison en jours</h2>\r\n                    <ng-select [items]=\"items\" bindLabel=\"libelle\" placeholder=\"Filter par jours\" appendTo=\"body\"\r\n                      (change)=\"getValues()\" [(ngModel)]=\"selected\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n                </div>\r\n                <table class=\"table admin-form theme-warning tc-checkbox-1 fs13\">\r\n                  <thead>\r\n                    <tr class=\"bg-light\">\r\n                      <th class=\"\">Numero Commande</th>\r\n                      <th class=\"\">Date Commande</th>\r\n                      <th class=\"\">Date Livraison</th>\r\n                      <th class=\"\">Nom & Prenom Client</th>\r\n                      <th class=\"\">Tel Client</th>\r\n                      <th class=\"\">Etat</th>\r\n                      <th class=\"\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let cf of this.commandesByDays\">\r\n                      <td class=\"w100\">\r\n                        {{cf.numero}}\r\n                      </td>\r\n                      <td class=\"\">{{cf.dateCom}}</td>\r\n                      <td class=\"\">{{cf.dateLiv}}</td>\r\n                      <td class=\"\">{{cf.client.user.nom}} {{cf.client.user.prenom}} </td>\r\n                      <td class=\"\">{{cf.client.tel}}</td>\r\n                      <td class=\"\">{{cf.etat}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n                          <span style=\"margin-right: 10px\"><button (click)=\"UpadteEtat(cf.id,cf)\" id=\"btnEtat\"\r\n                              type=\"button\" class=\"btn btn-success br2 btn-xs fs12 dropdown-toggle\">Terminé\r\n                            </button></span>\r\n                          <!-- <span (click)=\"getUpdateCommandePayer(cf.id)\" style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded \" style=\"background-color: darksalmon;\">Payer</span> -->\r\n\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <header class=\"jumbotron\">\r\n      <p>{{ content }}</p>\r\n    </header>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listecommandeencours/listecommandeencours.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listecommandeencours/listecommandeencours.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des Commandes</span>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"\">Numero Commande</th>\r\n                      <th class=\"\">Date Commande</th>\r\n                      <th class=\"\">Date Livraison</th>\r\n                      <th class=\"\">Nom & Prenom Client</th>\r\n                      <th class=\"\">Tel Client</th>\r\n                      <th class=\"\">Etat</th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let c of commandes | paginate: { itemsPerPage: 5, currentPage: p}\">\r\n                      <td>{{c.numero}}</td>\r\n                      <td>{{c.dateCom}}</td>\r\n                      <td>{{c.dateLiv}}</td>\r\n                      <td>{{c.client.user.nom}} {{c.client.user.prenom}}</td>\r\n                      <td>{{c.client.tel}}</td>\r\n                      <td>{{c.etat}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n                            <span style=\"margin-right: 10px\"><button (click)=\"UpadteEtatEnCours(c.id,c)\" id=\"btnEtat\" type=\"button\" class=\"btn btn-success br2 btn-xs fs12 dropdown-toggle\"\r\n                            >Terminé\r\n                            </button></span>\r\n                          <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\r\n                            routerLink=\"/commandeUpdate/{{c.id}}\">Editer</span>\r\n                          <!--<span class=\"label label-rounded label-danger\" (click)=\"deleteSupprimer(c.commande_id)\">Supprimer</span>\r\n                          <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li>\r\n                              <a>Terminé</a>\r\n                            </li>\r\n                            <li>\r\n                              <a>En cours</a>\r\n                            </li>\r\n                          </ul>\r\n                          <span style=\"margin-right: 10px\" type=\"button\"\r\n                            class=\"label label-rounded label-primary\">Voir</span>\r\n                          <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\r\n                            routerLink=\"/commandeUpdate/{{c.telephone}}/{{c.commande_id}}\">Editer</span>\r\n                          <span class=\"label label-rounded label-danger\">Supprimer</span>-->\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"clearfix\">\r\n                  <ul class=\"pagination\">\r\n                    <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\"\r\n                      responsive=\"true\" previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n                    </pagination-controls>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-screen-wrapper\">\r\n  <div class=\"loading-screen-icon\">\r\n    <div class=\"blobs\">\r\n      <div class=\"blob-center\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n      <div class=\"blob\"></div>\r\n    </div>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\r\n      <defs>\r\n        <filter id=\"goo\">\r\n          <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\" />\r\n          <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" />\r\n          <feBlend in=\"SourceGraphic\" in2=\"goo\" />\r\n        </filter>\r\n      </defs>\r\n    </svg>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n    <div class=\"card card-container\">\r\n      <img\r\n        id=\"profile-img\"\r\n        src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\r\n        class=\"profile-img-card\"\r\n      />\r\n      <form\r\n        *ngIf=\"!isLoggedIn\"\r\n        name=\"form\"\r\n        (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n        #f=\"ngForm\"\r\n        novalidate\r\n      >\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Login</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            [(ngModel)]=\"form.username\"\r\n            required\r\n            #username=\"ngModel\"\r\n          />\r\n          <div\r\n            class=\"alert alert-danger\"\r\n            role=\"alert\"\r\n            *ngIf=\"f.submitted && username.invalid\"\r\n          >\r\n            Username is required!\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            [(ngModel)]=\"form.password\"\r\n            required\r\n            minlength=\"2\"\r\n            #password=\"ngModel\"\r\n          />\r\n          <div\r\n            class=\"alert alert-danger\"\r\n            role=\"alert\"\r\n            *ngIf=\"f.submitted && password.invalid\"\r\n          >\r\n            <div *ngIf=\"password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"password.errors.minlength\">\r\n              Password must be at least 6 characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary btn-block\">\r\n            Login\r\n          </button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div\r\n            class=\"alert alert-danger\"\r\n            role=\"alert\"\r\n            *ngIf=\"f.submitted && isLoginFailed\"\r\n          >\r\n            Login failed: {{ errorMessage }}\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\r\n        Logged in as {{ roles }}.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque-update/marque-update.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque-update/marque-update.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<section id=\"content\" class=\"table-layout animated fadeIn\"   >\r\n\r\n  <!-- begin: .tray-center -->\r\n  <div class=\"tray tray-center col-md-12\" >\r\n\r\n    <div class=\"mw1400 center-block\">\r\n\r\n      <!-- Begin: Content Header -->\r\n      <div class=\"content-header\">\r\n\r\n      </div>\r\n\r\n      <!-- Begin: Admin Form -->\r\n      <div class=\"admin-form\" >\r\n\r\n        <div class=\"panel heading-border\">\r\n          <div class=\"panel-body bg-light\">\r\n\r\n\r\n\r\n            <div class=\"section-divider mb40\" id=\"spy1\">\r\n              <span>Créer ou Modifier Marque</span>\r\n            </div>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n              <div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"nom\">Libelle Marque</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"marqueLib\" [(ngModel)]=\"form.marqueLib\" required #marqueLib=\"ngModel\" />\r\n                  <div class=\"alert-danger\" *ngIf=\"f.submitted && marqueLib.invalid\">\r\n                    <div *ngIf=\"marqueLib.errors.required\">*Libelle obligatoire</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div style=\"float: right;\">\r\n                    <button class=\"btn btn-primary\">\r\n                      &nbsp;<span >{{this.marque.id?'Modifier':'Enregistrer'}}</span>\r\n                    </button>\r\n                    <button type=\"button\" id=\"cancel-save\" class=\"btn btn-danger\"  (click)=\"retour()\" >\r\n                      &nbsp;<span >Annuler</span>\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </form>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 id=\"page-heading\">\r\n\r\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/marqueUpdate\">\r\n\r\n      <span>\r\n        Nouvelle Marque\r\n      </span>\r\n    </button>\r\n  </h2>\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des Marques</span>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Libelle </span></th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let p of this.marques | paginate: { itemsPerPage: 5, currentPage: p}\">\r\n                      <td>{{p.marqueLib}}</td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n\r\n                          <span (click)=\"deleteSupprimer(p.id)\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                            delete\r\n                            </span>\r\n                            <span routerLink=\"/marqueUpdate/{{p.id}}\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                              create\r\n                              </span>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\r\n                previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n\r\n              </pagination-controls>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"close-btn-outer\">\r\n  <button  mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n<div class=\"header-title\">\r\n\r\n  <h2>Paiement Commande</h2>\r\n</div>\r\n\r\n<mat-card class=\"example-card\">\r\n<mat-card-header>\r\n  <div mat-card-avatar class=\"example-header-image\"><img mat-card-avatar src=\"assets/images/avatars/cartpay.png\" alt=\"adress\"></div>\r\n  <mat-card-title>Paiement Restant</mat-card-title>\r\n</mat-card-header>\r\n<mat-card-content>\r\n  <div class=\"paymentFinal\">\r\n\r\n    <mat-form-field class=\"w-100\">\r\n      <input type=\"number\" min=\"0\"  matInput placeholder=\"Montant Avance\" (ngModelChange)=\"getRestant()\" [(ngModel)]=\"this.NewAvance\" required>\r\n      <mat-error *ngIf=\"this.NewAvance == null\">Montant obliagtoire</mat-error>\r\n    </mat-form-field>\r\n    <br>\r\n              <br>\r\n              <ul>\r\n                <li>Montant Total: <span>{{this.TotalCommande | number: '1.2-2'}} FCFA</span></li>\r\n                <li>Montant Restant: <span>{{this.restant == null?0:this.restant | number: '1.2-2'}} FCFA</span></li>\r\n              </ul>\r\n  </div>\r\n\r\n  <div >\r\n</div>\r\n<br>\r\n<br>\r\n<ul>\r\n  <!-- <li *ngIf=\"!showPaymentMode\">Montant Total: <span>{{this.TotalCommande | number: '1.2-2'}} FCFA</span></li>\r\n  <li *ngIf=\"showPaymentMode\">Montant Total: <span>{{this.TotalCommande | number: '1.2-2'}} FCFA</span></li>\r\n  <li *ngIf=\"showPaymentMode\">Montant Avance: <span>{{this.avance == null?0:this.avance | number: '1.2-2'}} FCFA</span></li>\r\n  <li *ngIf=\"showPaymentMode\">Montant Restant: <span>{{this.restant == null?0:this.restant | number: '1.2-2'}} FCFA</span></li> -->\r\n</ul>\r\n\r\n</mat-card-content>\r\n<mat-card-actions>\r\n  <button (click)=\"PayAvance()\" mat-raised-button color=\"primary\">Payer</button>\r\n</mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 id=\"page-heading\">\r\n\r\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\r\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/produitUpdate\">\r\n\r\n      <span>\r\n        Nouveau Produit\r\n      </span>\r\n    </button>\r\n  </h2>\r\n  <br /> <br />\r\n\r\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n    <!-- begin: .tray-center -->\r\n    <div class=\"tray tray-center col-md-12\">\r\n\r\n      <div class=\"mw1400 center-block\">\r\n\r\n        <!-- Begin: Content Header -->\r\n        <div class=\"content-header\">\r\n\r\n        </div>\r\n\r\n        <!-- Begin: Admin Form -->\r\n        <div class=\"admin-form\">\r\n\r\n          <div class=\"panel heading-border\">\r\n            <div class=\"panel-body bg-light\">\r\n\r\n              <div class=\"section-divider mb40\" id=\"spy1\">\r\n                <span>Liste des Produits</span>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th><span>Désignation </span></th>\r\n                      <th><span>Produit</span> </th>\r\n                      <th><span>Categorie</span> </th>\r\n                      <th><span>Quantite</span> </th>\r\n                      <th><span>Entrée/Sortie</span> </th>\r\n                      <th class=\"text-right\">Actions</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let p of this.produits| paginate: { itemsPerPage: 5, currentPage: p}\">\r\n                      <td style=\"font-size: 15px; width: 200px; color: dodgerblue;\">{{p.libelle}}</td>\r\n                      <td><img [src]=\"p.image?sanitizer.bypassSecurityTrustUrl(p.image):productEmpty\"\r\n                          style=\"height: 60px;width: 80px;\" />\r\n\r\n                        </td>\r\n                      <td>{{p.categorie.libelle}}</td>\r\n                      <td>{{p.quantite}}</td>\r\n                      <td><span style=\"margin-right: 10px;cursor: pointer;\" type=\"button\" class=\"label label-rounded label-primary\"\r\n                          routerLink=\"/produitStock/{{p.id}}\">Stock</span></td>\r\n                      <td class=\"text-right\">\r\n                        <div class=\"btn-group flex-btn-group-container\">\r\n                          <span (click)=\"deleteSupprimer(p.id)\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                            delete\r\n                            </span>\r\n                            <span routerLink=\"/produitUpdate/{{p.id}}\" style=\"margin-right: 10px; cursor: pointer;\" class=\"material-icons\">\r\n                              create\r\n                              </span>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                          <!--   <button type=\"submit\"\r\n                                     [routerLink]=\"['/', 'profil', { outlets: { popup: profil.id + '/delete'} }]\"\r\n                                     replaceUrl=\"true\"\r\n                                     queryParamsHandling=\"merge\"\r\n                                     class=\"btn btn-danger btn-sm\">\r\n                                 <fa-icon [icon]=\"'times'\"></fa-icon>\r\n                                 <span class=\"d-none d-md-inline\" jhiTranslate=\"entity.action.delete\">Delete</span>\r\n                             </button>-->\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\r\n                  previousLabel=\"Précédent\" nextLabel=\"Suivant\">\r\n\r\n                </pagination-controls>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitStock.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitStock.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<section id=\"content\" class=\"table-layout animated fadeIn\"   >\r\n\r\n  <!-- begin: .tray-center -->\r\n  <div class=\"tray tray-center col-md-12\" >\r\n\r\n    <div class=\"mw1400 center-block\">\r\n\r\n      <!-- Begin: Content Header -->\r\n      <div class=\"content-header\">\r\n\r\n      </div>\r\n\r\n      <!-- Begin: Admin Form -->\r\n      <div class=\"admin-form\" >\r\n\r\n        <div class=\"panel heading-border\">\r\n          <div class=\"panel-body bg-light\">\r\n\r\n\r\n\r\n            <div class=\"section-divider mb40\" id=\"spy1\">\r\n              <span>Créer ou Modifier Stock</span>\r\n            </div>\r\n            <!--    <div class=\"panel-body p20 pb10\">\r\n                  <div class=\"tab-content pn br-n admin-form\">\r\n                    <div id=\"tab1_1\" class=\"tab-pane active\">\r\n\r\n                      <div class=\"section row mbn\">\r\n                        <div class=\"col-md-4\">\r\n                          <div class=\"fileupload fileupload-new admin-form\" data-provides=\"fileupload\">\r\n                            <div class=\"fileupload-preview thumbnail mb20\">\r\n                              <img alt=\"holder\">\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-7 pr5\">\r\n                                <input type=\"text\" name=\"name2\" id=\"name2\" class=\"text-center event-name gui-input br-light bg-light\" placeholder=\"Img Keywords\">\r\n                                <label for=\"name2\" class=\"field-icon\"></label>\r\n                              </div>\r\n\r\n                              <div class=\"col-xs-5\">\r\n                                <span class=\"button btn-system btn-file btn-block\">\r\n                                  <span class=\"fileupload-new\">Select</span>\r\n                                  <span class=\"fileupload-exists\">Change</span>\r\n                                  <input type=\"file\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>-->\r\n            <div class=\"row\">\r\n\r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-control-label\" style=\"margin-left: 28px;\">Type opération</label>\r\n            <ng-select [items]=\"this.items\"\r\n                       bindLabel=\"libelle\"\r\n                       placeholder=\"Select item\"\r\n                       appendTo=\"body\"\r\n                       style=\"width: 350px; margin-left: 28px;\"\r\n                       (change)=\"getValues()\"\r\n                       [(ngModel)]=\"this.selected\">\r\n            </ng-select>\r\n          </div>\r\n\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group col-md-12 center-block\">\r\n                  <label class=\"form-control-label\">Produit</label>\r\n\r\n                  <div class=\"section\">\r\n\r\n                    <input disabled style=\"color: chartreuse;\" type=\"text\" class=\"gui-input\" name=\"etTissu\"  required=\"required\" [(ngModel)]=\"this.tissu.libelle\"\r\n                    />\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group col-md-12 center-block\">\r\n                  <label class=\"form-control-label\">Catégorie</label>\r\n\r\n                  <div class=\"section\">\r\n\r\n                    <input disabled style=\"color: crimson;\" type=\"text\" class=\"gui-input\" name=\"etTissu\"  required=\"required\" [(ngModel)]=\"this.tissu.categorie.libelle\"                    />\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group col-md-12 center-block\">\r\n                  <label class=\"form-control-label\"  >Quantite Stock</label>\r\n\r\n                  <div class=\"section\">\r\n\r\n                    <input disabled style=\"color: rgb(255, 0, 51);\" type=\"text\" class=\"gui-input\" name=\"etQS\"   required=\"required\" [(ngModel)]=\"this.stock.qteStock\"\r\n                    />\r\n\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group col-md-12 center-block\">\r\n                  <label class=\"form-control-label\">Nouvelle Quantite </label>\r\n\r\n                  <div class=\"section\">\r\n\r\n                    <input (change)=\"cool()\"  type=\"text\" class=\"gui-input\" name=\"etq\" id=\"field_etModuleq\"  required=\"required\" [(ngModel)]=\"this.qte\"\r\n                     placeholder=\"Entrer la quantité\"/>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-6\">\r\n                <div class=\"form-group col-md-12 center-block\">\r\n                  <label class=\"form-control-label\"  >Quantite Final </label>\r\n\r\n                  <div class=\"section\">\r\n\r\n                    <input readonly type=\"text\" class=\"gui-input\" name=\"etQF\" id=\"etQF\"  required=\"required\" [(ngModel)]=\"this.qteTotal\"\r\n                    />\r\n\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n            <form name=\"editForm\" role=\"form\"  (ngSubmit)=\"insertData()\" >\r\n\r\n              <div>\r\n\r\n                <div class=\"row\">\r\n                  <!--<div class=\"form-group col-md-4\" [hidden]=\"!module.id\">\r\n                      <label for=\"id\" jhiTranslate=\"global.field.id\">ID</label>\r\n\r\n                      <div class=\"section\">\r\n                          <label class=\"field prepend-icon\">\r\n                              <input type=\"text\" class=\"gui-input\"   name=\"nineaSite\" id=\"id\" name=\"id\"\r\n                                     [(ngModel)]=\"module.id\"  placeholder=\"Ninea de L'ecole\" />\r\n                              <label for=\"id\" class=\"field-icon\">\r\n                                  <i class=\"fa fa-user\"></i>\r\n                              </label>\r\n                          </label>\r\n                      </div>\r\n                  </div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <!--<div class=\"row\">\r\n                  <div class=\" col-md-6 center-block\">\r\n                    <label class=\"form-control-label\"  for=\"field_logoModule\">Logo </label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input type=\"text\" class=\"gui-input\" name=\"logoModule\" id=\"field_logoModule\"  required=\"required\"\r\n                               placeholder=\"Ninea de L'ecole\" />\r\n                        <label for=\"field_logoModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                      </label>\r\n                      <small class=\"form-text text-danger\"\r\n                             >\r\n                        Ce champ est obligatoire\r\n                      </small>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n\r\n                  <div class=\"form-group col-md-6 center-block\">\r\n                    <label class=\"form-control-label\" for=\"field_rang\">Rang</label>\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input type=\"number\" class=\"gui-input\" name=\"rang\" id=\"field_rang\"\r\n                                 placeholder=\"Ninea de L'ecole\" />\r\n                        <label for=\"field_rang\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>-->\r\n                <!--<div class=\"row\">\r\n                  <div class=\"form-group col-md-6 center-block\">-->\r\n\r\n                <!--<div *ngFor=\"let site of this.sites\">\r\n                    <label class=\"option\">\r\n                        <input type=\"checkbox\" (change)=\"changeEtatSite(site)\" name=\"checked\" [checked]=\"this.site.selectedSite\" value=\"checked\" checked>\r\n                        <span class=\"checkbox\"></span>{{this.site.codeSite}}</label>\r\n\r\n                </div>-->\r\n\r\n\r\n                <!--  </div>\r\n                </div>-->\r\n                <!--  <div class=\"row\">\r\n                    <div class=\"form-group col-md-6 center-block\">\r\n                      <label class=\"form-control-label\"  for=\"field_rang\">Etat</label>\r\n                      <label class=\"switch block mt15\">\r\n                        <input type=\"checkbox\"   name=\"tools\" id=\"t2\" value=\"reports\">\r\n                        <label for=\"t2\" data-on=\"Oui\" data-off=\"Non\"></label>\r\n\r\n                      </label>\r\n\r\n                    </div>\r\n                  </div>-->\r\n                <div class=\"row\">\r\n                  <div style=\"float: right;\">\r\n                    <button  type=\"submit\" id=\"save-entity\"  class=\"btn btn-primary\">\r\n                      &nbsp;<span >{{this.tissu.id?'Update':'Save'}}</span>\r\n                    </button>\r\n                    <button type=\"button\" id=\"cancel-save\" class=\"btn btn-danger\"  (click)=\"precedentPage()\" >\r\n                      &nbsp;<span >Annuler</span>\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!--\r\n                <div class=\"form-group\">\r\n                    <label jhiTranslate=\"isiarchivageApp.module.site\" for=\"field_site\">Site</label>\r\n                    <select class=\"form-control\" id=\"field_site\" multiple name=\"site\" [(ngModel)]=\"module.sites\">\r\n                        <option [ngValue]=\"getSelected(module.sites, siteOption)\" *ngFor=\"let siteOption of sites; trackBy: trackSiteById\">{{siteOption.id}}</option>\r\n                    </select>\r\n                </div>-->\r\n              </div>\r\n\r\n            </form>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitUpdate.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitUpdate.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"content\" class=\"table-layout animated fadeIn\">\r\n\r\n  <!-- begin: .tray-center -->\r\n  <div class=\"tray tray-center col-md-12\">\r\n\r\n    <div class=\"mw1400 center-block\">\r\n\r\n      <!-- Begin: Content Header -->\r\n      <div class=\"content-header\">\r\n\r\n      </div>\r\n\r\n      <!-- Begin: Admin Form -->\r\n      <div class=\"admin-form\">\r\n\r\n        <div class=\"panel heading-border\">\r\n          <div class=\"panel-body bg-light\">\r\n\r\n\r\n\r\n            <div class=\"section-divider mb40\" id=\"spy1\">\r\n              <span>Créer ou Modifier Produit</span>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-1 \"></div>\r\n              <div class=\"col-md-2 \" *ngFor=\"let p of this.images;let i=index\">\r\n                <div class=\"fileupload fileupload-new admin-form\" data-provides=\"fileupload\">\r\n                  <div class=\"fileupload-preview thumbnail mb15\">\r\n\r\n                    <img style=\"height: 160px;width: 180px;\" [src]=\"p.image!=null?p.image:productEmpty\" />\r\n                    <!--<img\r\n                      [src]=\"this.collection.image?sanitizer.bypassSecurityTrustUrl(this.collection.image):productEmpty\" />\r\n -->\r\n                  </div>\r\n                  <span class=\"button btn-system btn-file btn-block ph5\">\r\n                    <span class=\"fileupload-new\">Change</span>\r\n                    <span class=\"fileupload-exists\">Change</span>\r\n                    <input type=\"file\" id=\"file_document1\" (change)=\"setFileData($event,p)\" accept=\"image/*\" />\r\n\r\n\r\n                    <!--   <input type=\"file\" id=\"file_document1\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\r\n                 -->\r\n                  </span>\r\n                </div>\r\n                <small class=\"form-text text-danger\" *ngIf=\"i==0\">\r\n                  **Image par defaut**\r\n                </small>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <br>\r\n\r\n            </div>\r\n\r\n            <div class=\"row col-md-12 \" style=\"height: 100px;\">\r\n            </div>\r\n            <div class=\"row col-md-6 \">\r\n              <div class=\"form-group  center-block\">\r\n                <label class=\"form-control-label\" for=\"field_libelleModule\">Categorie</label>\r\n                <ng-select [items]=\"items\" bindLabel=\"libelle\" placeholder=\"Selectionner\" appendTo=\"body\"\r\n                  (change)=\"getValues()\" [(ngModel)]=\"selected\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row col-md-6 \">\r\n              <div class=\"form-group  center-block\">\r\n                <label class=\"form-control-label\" for=\"field_libelleModule\">Marque</label>\r\n                <ng-select [items]=\"items2\" bindLabel=\"marqueLib\" placeholder=\"Selectionner\" appendTo=\"body\"\r\n                  (change)=\"getValues2()\" [(ngModel)]=\"selected2\">\r\n                </ng-select>\r\n              </div>\r\n            </div>\r\n\r\n            <form name=\"editForm\" role=\"form\" (ngSubmit)=\"insertData()\" #editForm=\"ngForm\">\r\n\r\n\r\n              <div>\r\n\r\n                <div class=\"row\">\r\n\r\n                  <div class=\"form-group col-md-6 \">\r\n                    <label class=\"form-control-label\" for=\"field_libelleModule\">Designation </label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input #code=\"ngModel\" type=\"text\" class=\"gui-input\" name=\"libelleModule\"\r\n                          id=\"field_libelleModule\" required=\"required\" placeholder=\"Nom de la collection\"\r\n                          [(ngModel)]=\"collection.libelle\" />\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \" class=\"form-text text-danger\">\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group col-md-6 \">\r\n                    <label class=\"form-control-label\" for=\"field_libelleModule\">Prix Unitaire</label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input #code=\"ngModel\" type=\"text\" class=\"gui-input\" name=\"prixUnitaire\"\r\n                          id=\"field_libelleModule\" required=\"required\" placeholder=\"Prix Unitaire\"\r\n                          [(ngModel)]=\"collection.prixUnitaire\" (ngModelChange)=\"pourcentage()\" />\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \" class=\"form-text text-danger\">\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-6 \">\r\n                    <label class=\"form-control-label\" for=\"field_libelleModule\">Pourcentage Promotion %</label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input [disabled]=\"collection.prixUnitaire==0\" #code=\"ngModel\" type=\"text\" class=\"gui-input\"\r\n                          name=\"promo\" id=\"field_libelleModule\" required=\"required\" placeholder=\"Prix Unitaire\"\r\n                          [(ngModel)]=\"collection.promo\" (ngModelChange)=\"pourcentage()\" />\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \" class=\"form-text text-danger\">\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-6 \">\r\n                    <label class=\"form-control-label\" for=\"field_libelleModule\">Prix Promotion</label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <input readonly #code=\"ngModel\" type=\"text\" class=\"gui-input\" name=\"prixpromo\"\r\n                          id=\"field_libelleModule\" required=\"required\" placeholder=\"Prix Unitaire\"\r\n                          [(ngModel)]=\"collection.prixpromo\" />\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \" class=\"form-text text-danger\">\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-6\">\r\n                    <label class=\"form-control-label\" for=\"field_libelleModule\">Description</label>\r\n\r\n                    <div class=\"section\">\r\n                      <label class=\"field prepend-icon\">\r\n                        <textarea [(ngModel)]=\"collection.description\" class=\"gui-textarea\" name=\"description\"\r\n                          placeholder=\"Description du produit\"></textarea>\r\n                        <label for=\"field_libelleModule\" class=\"field-icon\">\r\n                          <i class=\"fa fa-user\"></i>\r\n                        </label>\r\n                        <small [class.hidden]=\"code.valid ||code.untouched \" class=\"form-text text-danger\">\r\n                          Ce champ est obligatoire\r\n                        </small>\r\n\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div style=\"float: right;\">\r\n                    <button type=\"submit\" id=\"save-entity\" class=\"btn btn-primary\" [disabled]=\"editForm.form.invalid\">\r\n                      &nbsp;<span>{{this.collection.id?'Update':'Save'}}</span>\r\n                    </button>\r\n                    <button type=\"button\" id=\"cancel-save\" class=\"btn btn-danger\" (click)=\"precedentPage()\">\r\n                      &nbsp;<span>Annuler</span>\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!--\r\n                <div class=\"form-group\">\r\n                    <label jhiTranslate=\"isiarchivageApp.module.site\" for=\"field_site\">Site</label>\r\n                    <select class=\"form-control\" id=\"field_site\" multiple name=\"site\" [(ngModel)]=\"module.sites\">\r\n                        <option [ngValue]=\"getSelected(module.sites, siteOption)\" *ngFor=\"let siteOption of sites; trackBy: trackSiteById\">{{siteOption.id}}</option>\r\n                    </select>\r\n                </div>-->\r\n              </div>\r\n\r\n            </form>\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n    <div class=\"card card-container\">\r\n      <img\r\n        id=\"profile-img\"\r\n        src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\r\n        class=\"profile-img-card\"\r\n      />\r\n      <form\r\n        *ngIf=\"!isSuccessful\"\r\n        name=\"form\"\r\n        (ngSubmit)=\"f.form.valid && onSubmit()\"\r\n        #f=\"ngForm\"\r\n        novalidate\r\n      >\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            [(ngModel)]=\"form.username\"\r\n            required\r\n            minlength=\"3\"\r\n            maxlength=\"20\"\r\n            #username=\"ngModel\"\r\n          />\r\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n            <div *ngIf=\"username.errors.required\">Username is required</div>\r\n            <div *ngIf=\"username.errors.minlength\">\r\n              Username must be at least 3 characters\r\n            </div>\r\n            <div *ngIf=\"username.errors.maxlength\">\r\n              Username must be at most 20 characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <span>Roles</span>\r\n          <ng-select [items]=\"items\"\r\n          bindLabel=\"name\"\r\n          name=\"role\"\r\n          placeholder=\"Selectionner roles\"\r\n          multiple=\"true\"\r\n          appendTo=\"body\"\r\n          (change)=\"getValues()\"\r\n          [(ngModel)]=\"form.role\"\r\n          required\r\n          #role=\"ngModel\">\r\n        </ng-select>\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && role.invalid\">\r\n          <div *ngIf=\"role.errors.required\">Role is required</div>\r\n        </div>\r\n      </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input\r\n            type=\"email\"\r\n            class=\"form-control\"\r\n            name=\"email\"\r\n            [(ngModel)]=\"form.email\"\r\n            required\r\n            email\r\n            #email=\"ngModel\"\r\n          />\r\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n            <div *ngIf=\"email.errors.required\">Email is required</div>\r\n            <div *ngIf=\"email.errors.email\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            [(ngModel)]=\"form.password\"\r\n            required\r\n            minlength=\"6\"\r\n            #password=\"ngModel\"\r\n          />\r\n          <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n            <div *ngIf=\"password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"password.errors.minlength\">\r\n              Password must be at least 6 characters\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary btn-block\">Sign Up</button>\r\n        </div>\r\n\r\n        <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n          Signup failed!<br />{{ errorMessage }}\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\r\n        Your registration is successful!\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistique/statistique.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistique/statistique.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <!--<ng-select   [items]=\"this.itemtissu2\"\r\n                 bindLabel=\"libelle\"\r\n\r\n                 appendTo=\"body\"\r\n                 (change)=\"getValuesTissu2()\"\r\n                 [(ngModel)]=\"this.selectedTissu2\">\r\n    </ng-select>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button class=\"btn btn-default\" (click)=\"getclientpluscommander()\">Default Page</button>\r\n    </div>-->\r\n\r\n   <!-- <highcharts-chart\r\n      [Highcharts]=\"Highcharts\"\r\n      [options]=\"options\"\r\n\r\n      style=\"width: 100%; height: 400px; display: block;\"\r\n    ></highcharts-chart> -->\r\n\r\n\r\n\r\n    <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"options1\"\r\n\r\n    style=\"width: 1200px; height: 600px; display: block;\"\r\n  ></highcharts-chart>\r\n  <br>\r\n  <div class=\"stats\">\r\n    <highcharts-chart\r\n      [Highcharts]=\"Highcharts\"\r\n      [options]=\"options2\"\r\n\r\n      style=\"width: 600px; height: 600px;display: block;\"\r\n    ></highcharts-chart>\r\n      <highcharts-chart\r\n      [Highcharts]=\"Highcharts\"\r\n      [options]=\"options1\"\r\n\r\n      style=\"width: 600px; height: 600px;margin-left: 200px;display: block;\"\r\n    ></highcharts-chart>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2 id=\"page-heading\">\n\n    <button style=\"float: right;margin-right: 20px\" id=\"jh-create-entity\"\n      class=\"btn btn-primary float-right jh-create-entity create-profil\" routerLink=\"/userUpdate\">\n\n      <span>\n        Nouveau Utilisateur\n      </span>\n    </button>\n  </h2>\n  <br /> <br />\n\n  <section id=\"content\" class=\"table-layout animated fadeIn\">\n\n    <!-- begin: .tray-center -->\n    <div class=\"tray tray-center col-md-12\">\n\n      <div class=\"mw1400 center-block\">\n\n        <!-- Begin: Content Header -->\n        <div class=\"content-header\">\n\n        </div>\n\n        <!-- Begin: Admin Form -->\n        <div class=\"admin-form\">\n\n          <div class=\"panel heading-border\">\n            <div class=\"panel-body bg-light\">\n\n              <div class=\"section-divider mb40\" id=\"spy1\">\n                <span>Liste des utilisateurs</span>\n              </div>\n              <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                  <thead>\n                    <tr>\n                      <th><span>Photo </span></th>\n                      <th><span>Nom </span></th>\n                      <th><span>Prenom </span></th>\n                      <th><span>Login </span></th>\n                      <th><span>Profil </span></th>\n                      <th class=\"text-right\">Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let p of this.users | paginate: { itemsPerPage: 5, currentPage: p}\">\n                      <td><img [src]=\"p.photo!=null?sanitizer.bypassSecurityTrustUrl(p.photo):avatar\"\n                          style=\"height: 40px;width: 40px; border-radius: 50%;\" /></td>\n                      <td>{{p.nom}}</td>\n                      <td>{{p.prenom}}</td>\n                      <td>{{p.username}}</td>\n                      <td>{{p.role}}</td>\n                      <td class=\"text-right\">\n                        <div class=\"btn-group flex-btn-group-container\">\n                          <span style=\"margin-right: 10px\" type=\"button\"\n                            class=\"label label-rounded label-primary\">Voir</span>\n                          <span style=\"margin-right: 10px\" type=\"button\" class=\"label label-rounded label-warning\"\n                            routerLink=\"/userUpdate/{{p.id}}\">Editer</span>\n                          <span class=\"label label-rounded label-danger\" (click)=\"deleteUser(p.id)\">Supprimer</span>\n\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <pagination-controls (pageChange)=\"p = $event\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\"\n                  previousLabel=\"Précédent\" nextLabel=\"Suivant\">\n\n                </pagination-controls>\n              </div>\n\n\n\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userUpdate.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/userUpdate.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\r\n  <div class=\"card card-container\">\r\n    <form *ngIf=\"!isSuccessful\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 center-block\">\r\n          <div class=\"fileupload fileupload-new admin-form\" data-provides=\"fileupload\">\r\n            <div class=\"fileupload-preview thumbnail mb5\">\r\n              <img [src]=\"this.user.photo?sanitizer.bypassSecurityTrustUrl(this.user.photo):avatar\" />\r\n            </div>\r\n            <span class=\"button btn-system btn-file btn-block ph5\">\r\n              <span class=\"fileupload-new\">Ajouter Photo</span>\r\n              <span class=\"fileupload-exists\">Changer Photo</span>\r\n              <input type=\"file\" id=\"file_document1\" (change)=\"onImageChange($event)\" accept=\"image/*\" />\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"nom\">Nom</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"nom\" [(ngModel)]=\"form.nom\" required #nom=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && nom.invalid\">\r\n          <div *ngIf=\"nom.errors.required\">*Nom obligatoire</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"prenom\">Prénom</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"prenom\" [(ngModel)]=\"form.prenom\" required #prenom=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && prenom.invalid\">\r\n          <div *ngIf=\"prenom.errors.required\">*Prénom obligatoire</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Login</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" required minlength=\"3\"\r\n          maxlength=\"20\" #username=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\r\n          <div *ngIf=\"username.errors.required\">Login obligatoire</div>\r\n          <div *ngIf=\"username.errors.minlength\">\r\n            La taille du username doit être supérieur à 3 caractères!\r\n          </div>\r\n          <div *ngIf=\"username.errors.maxlength\">\r\n            La taille du username doit être inférieur à 20 caractères!\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <span>Roles</span>\r\n        <ng-select [items]=\"items\" bindLabel=\"name\" name=\"role\" placeholder=\"Selectionner roles\" multiple=\"true\"\r\n          appendTo=\"body\" (change)=\"getValues()\" [(ngModel)]=\"form.role\" required #role=\"ngModel\">\r\n        </ng-select>\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && role.invalid\">\r\n          <div *ngIf=\"role.errors.required\">Role is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" required email\r\n          #email=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\r\n          <div *ngIf=\"email.errors.required\">Email is required</div>\r\n          <div *ngIf=\"email.errors.email\">\r\n            Veuillez entrer une adresse email valide !\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--<div *ngIf=\"!update\" class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" required minlength=\"6\"\r\n          #password=\"ngModel\" />\r\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\r\n          <div *ngIf=\"password.errors.required\">Password is required</div>\r\n          <div *ngIf=\"password.errors.minlength\">\r\n            La taille du mot de passe doit être compris entre 6 et 40!\r\n          </div>\r\n        </div>\r\n      </div>-->\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary btn-block\">{{this.user.id?'Modifier':'Enregister'}}</button>\r\n      </div>\r\n\r\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\r\n        Inscription échouée!<br />{{ errorMessage }}\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/Adresse.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/Adresse.service.ts ***!
  \**********************************************/
/*! exports provided: AdresseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdresseService", function() { return AdresseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AdresseService = class AdresseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse/" + id, data);
    }
    getAllAdresseByClient(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "adresse/findadressebyIdclient/" + id);
    }
};
AdresseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdresseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AdresseService);



/***/ }),

/***/ "./src/app/_services/Categorie.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/Categorie.service.ts ***!
  \************************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CategorieService = class CategorieService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "categorie");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "categorie", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "categorie/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "categorie/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "categorie/" + id, data);
    }
};
CategorieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategorieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CategorieService);



/***/ }),

/***/ "./src/app/_services/Image.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/Image.service.ts ***!
  \********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ImageService = class ImageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image");
    }
    insertData(data) {
        console.log(data);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image/" + id, data);
    }
    getAllImage(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "image/findimagebyIdproduit/" + id);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ImageService);



/***/ }),

/***/ "./src/app/_services/Produit.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/Produit.service.ts ***!
  \**********************************************/
/*! exports provided: ProduitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitService", function() { return ProduitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProduitService = class ProduitService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produit");
    }
    insertData(data) {
        console.log(data);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produit", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produit/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produit/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produit/" + id, data);
    }
    maxproduit() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "maxproduit");
    }
    getProduitByCategorie(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "produitByCategorie/" + id);
    }
    dixclient() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "dixclient");
    }
    dixproduitvendus() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "dixproduitvendus");
    }
    nombreachat() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "nombreachat");
    }
};
ProduitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProduitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ProduitService);



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const AUTH_API = "http://localhost:8080/api/auth/";
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" }),
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "api/auth/" + "signin", {
            username: credentials.username,
            password: credentials.password,
        }, httpOptions);
    }
    register(user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "api/auth/" + "signup", user, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/client.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/client.service.ts ***!
  \*********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ClientService = class ClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "client");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "client", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "client/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "client/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "client/" + id, data);
    }
    getClientByTel(tel) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "clientByTel/" + tel);
    }
    getNombreClient() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "NombreClient");
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ClientService);



/***/ }),

/***/ "./src/app/_services/commande.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/commande.service.ts ***!
  \***********************************************/
/*! exports provided: CommandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeService", function() { return CommandeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CommandeService = class CommandeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/" + id, data);
    }
    GetCommandeEncours() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    updateEtatCommandeEncours(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/updateCommandeEncours/" + id);
    }
    updateEtatCommandeLivre(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/updateCommandeEtatLivre/" + id);
    }
    updateEtatCommande(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/updateCommandeEtatNonTermine/" + id);
    }
    getCommandeDateNow() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/getCommandeNow");
    }
    GetNombreCommandeDateNow() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    GetNombreCommandePasser() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    getCommandeDatePast() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/getCommandePast");
    }
    getCommandeDateFuture() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/getCommandeFutur");
    }
    SendMail(data) {
        console.log(data);
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    GetNombreClient() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    GetMontantTotal() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    GetMontantTotalVente() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    GetDelaiCommandeByDay(jour) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/AlertCommandeDate/" + jour);
    }
    updateEtatCommandeEncour(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "commande/Encours");
    }
    UpdateAvance(id, Newavance) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "UpdateAvanceCommande/" + id + "/" + Newavance);
    }
};
CommandeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommandeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CommandeService);



/***/ }),

/***/ "./src/app/_services/detailscommande.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/detailscommande.service.ts ***!
  \******************************************************/
/*! exports provided: DetailscommandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailscommandeService", function() { return DetailscommandeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let DetailscommandeService = class DetailscommandeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "detail_commande");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "detail_commande", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "detail_commande/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "detail_commande/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "detail_commande/" + id, data);
    }
};
DetailscommandeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetailscommandeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DetailscommandeService);



/***/ }),

/***/ "./src/app/_services/facture.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/facture.service.ts ***!
  \**********************************************/
/*! exports provided: FactureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactureService", function() { return FactureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let FactureService = class FactureService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "facture");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "facture", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "facture/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "facture/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "facture/" + id, data);
    }
    sendFactureByMail(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "sendFactureByMail/" + id);
    }
    sendFactureAvanceByMail(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Localurl + "sendFactureAvanceByMail/" + id, { responseType: "text" });
    }
};
FactureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FactureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], FactureService);



/***/ }),

/***/ "./src/app/_services/marque.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/marque.service.ts ***!
  \*********************************************/
/*! exports provided: MarqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueService", function() { return MarqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MarqueService = class MarqueService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "marque");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "marque", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "marque/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "marque/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "marque/" + id, data);
    }
};
MarqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MarqueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MarqueService);



/***/ }),

/***/ "./src/app/_services/paiement.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/paiement.service.ts ***!
  \***********************************************/
/*! exports provided: PaiementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaiementService", function() { return PaiementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PaiementService = class PaiementService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "paiement");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "paiement", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "paiement/" + id);
    }
    getOneData(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "paiement/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "paiement/" + id, data);
    }
};
PaiementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PaiementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PaiementService);



/***/ }),

/***/ "./src/app/_services/personne.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/personne.service.ts ***!
  \***********************************************/
/*! exports provided: PersonneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonneService", function() { return PersonneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/_services/token-storage.service.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let PersonneService = class PersonneService {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.resourceUrl = 'http://localhost:8080/pers';
    }
    getAll() {
        return this.http.get(this.resourceUrl);
    }
    insert(data) {
        return this.http.post(this.resourceUrl, data);
    }
    delete(id) {
        return this.http.delete(this.resourceUrl + '/' + id);
    }
    getOne(id) {
        return this.http.get(this.resourceUrl + '/' + id);
    }
    update(id, data) {
        return this.http.put(this.resourceUrl + '/' + id, data);
    }
};
PersonneService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
PersonneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PersonneService);



/***/ }),

/***/ "./src/app/_services/role.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/role.service.ts ***!
  \*******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let RoleService = class RoleService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "role");
    }
    insert(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "role", data);
    }
    delete(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "role" + "/" + id);
    }
    getOne(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "role" + "/" + id);
    }
    update(id, data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "role" + "/" + id, data);
    }
};
RoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], RoleService);



/***/ }),

/***/ "./src/app/_services/stock.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/stock.service.ts ***!
  \********************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let StockService = class StockService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getData() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "stock");
    }
    insertData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "stock", data);
    }
    deleteData(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "stock/" + id);
    }
    getOneStock(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "stock/findstockbyIdproduit/" + id);
    }
    updateData(id, data) {
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "stock/" + id, data);
    }
};
StockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], StockService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const API_URL = "http://localhost:8080/api/test/";
const API_URL2 = "http://localhost:8080/user";
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getPublicContent() {
        return this.http.get(API_URL + "all", { responseType: "text" });
    }
    getUserBoard() {
        return this.http.get(API_URL + "user", { responseType: "text" });
    }
    getModeratorBoard() {
        return this.http.get(API_URL + "mod", { responseType: "text" });
    }
    getAdminBoard() {
        return this.http.get(API_URL + "admin", { responseType: "text" });
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "user");
    }
    insert(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "user", data);
    }
    delete(id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "user" + "/" + id);
    }
    getOne(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "user" + "/" + id);
    }
    update(id, data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Localurl + "user" + "/" + id, data);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserService);



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
/* harmony import */ var _commande_commandeUpdate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commande/commandeUpdate.component */ "./src/app/commande/commandeUpdate.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _formulaire_formulaireUpdate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formulaire/formulaireUpdate.component */ "./src/app/formulaire/formulaireUpdate.component.ts");
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulaire/formulaire.component */ "./src/app/formulaire/formulaire.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_userUpdate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/userUpdate.component */ "./src/app/user/userUpdate.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _gestion_commande_gestion_commande_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gestion-commande/gestion-commande.component */ "./src/app/gestion-commande/gestion-commande.component.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/produit/produit.component.ts");
/* harmony import */ var _produit_produitUpdate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./produit/produitUpdate.component */ "./src/app/produit/produitUpdate.component.ts");
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categorie/categorie.component */ "./src/app/categorie/categorie.component.ts");
/* harmony import */ var _categorie_categorieUpdate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categorie/categorieUpdate.component */ "./src/app/categorie/categorieUpdate.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _client_clientUpdate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./client/clientUpdate.component */ "./src/app/client/clientUpdate.component.ts");
/* harmony import */ var _commande_commande_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./commande/commande.component */ "./src/app/commande/commande.component.ts");
/* harmony import */ var _produit_produitStock_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./produit/produitStock.component */ "./src/app/produit/produitStock.component.ts");
/* harmony import */ var _listecommandeencours_listecommandeencours_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listecommandeencours/listecommandeencours.component */ "./src/app/listecommandeencours/listecommandeencours.component.ts");
/* harmony import */ var _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./statistique/statistique.component */ "./src/app/statistique/statistique.component.ts");
/* harmony import */ var _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./details-commande/details-commande.component */ "./src/app/details-commande/details-commande.component.ts");
/* harmony import */ var _marque_marque_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./marque/marque.component */ "./src/app/marque/marque.component.ts");
/* harmony import */ var _marque_marque_update_marque_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marque/marque-update/marque-update.component */ "./src/app/marque/marque-update/marque-update.component.ts");





























const routes = [
    { path: "", redirectTo: "gestion-commande", pathMatch: "full" },
    { path: "LoadingSpinner", component: _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__["LoadingSpinnerComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "produit", component: _produit_produit_component__WEBPACK_IMPORTED_MODULE_16__["ProduitComponent"] },
    { path: "produitUpdate/:id", component: _produit_produitUpdate_component__WEBPACK_IMPORTED_MODULE_17__["ProduitUpdateComponent"] },
    { path: "produitUpdate", component: _produit_produitUpdate_component__WEBPACK_IMPORTED_MODULE_17__["ProduitUpdateComponent"] },
    { path: "produitStock/:id", component: _produit_produitStock_component__WEBPACK_IMPORTED_MODULE_23__["ProduitStockComponent"] },
    { path: "categorie", component: _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_18__["CategorieComponent"] },
    { path: "categorieUpdate/:id", component: _categorie_categorieUpdate_component__WEBPACK_IMPORTED_MODULE_19__["CategorieUpdateComponent"] },
    { path: "categorieUpdate", component: _categorie_categorieUpdate_component__WEBPACK_IMPORTED_MODULE_19__["CategorieUpdateComponent"] },
    { path: "marque", component: _marque_marque_component__WEBPACK_IMPORTED_MODULE_27__["MarqueComponent"] },
    { path: "marqueUpdate/:id", component: _marque_marque_update_marque_update_component__WEBPACK_IMPORTED_MODULE_28__["MarqueUpdateComponent"] },
    { path: "marqueUpdate", component: _marque_marque_update_marque_update_component__WEBPACK_IMPORTED_MODULE_28__["MarqueUpdateComponent"] },
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"] },
    { path: "userUpdate/:id", component: _user_userUpdate_component__WEBPACK_IMPORTED_MODULE_13__["UserUpdateComponent"] },
    { path: "userUpdate", component: _user_userUpdate_component__WEBPACK_IMPORTED_MODULE_13__["UserUpdateComponent"] },
    { path: "client", component: _client_client_component__WEBPACK_IMPORTED_MODULE_20__["ClientComponent"] },
    { path: "clientUpdate/:id", component: _client_clientUpdate_component__WEBPACK_IMPORTED_MODULE_21__["ClientUpdateComponent"] },
    { path: "clientUpdate", component: _client_clientUpdate_component__WEBPACK_IMPORTED_MODULE_21__["ClientUpdateComponent"] },
    { path: "formulaire", component: _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_11__["FormulaireComponent"] },
    { path: "formulaireUpdate/:id", component: _formulaire_formulaireUpdate_component__WEBPACK_IMPORTED_MODULE_10__["FormulaireUpdateComponent"] },
    { path: "formulaireUpdate", component: _formulaire_formulaireUpdate_component__WEBPACK_IMPORTED_MODULE_10__["FormulaireUpdateComponent"] },
    { path: "gestion-commande", component: _gestion_commande_gestion_commande_component__WEBPACK_IMPORTED_MODULE_15__["GestionCommandeComponent"] },
    { path: "commande", component: _commande_commande_component__WEBPACK_IMPORTED_MODULE_22__["CommandeComponent"] },
    { path: "commandeUpdate/:id", component: _commande_commandeUpdate_component__WEBPACK_IMPORTED_MODULE_1__["CommandeUpdateComponent"] },
    { path: "commandeUpdate", component: _commande_commandeUpdate_component__WEBPACK_IMPORTED_MODULE_1__["CommandeUpdateComponent"] },
    { path: "listecommandeencours", component: _listecommandeencours_listecommandeencours_component__WEBPACK_IMPORTED_MODULE_24__["ListecommandeencoursComponent"] },
    { path: "detailscommande/:id", component: _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_26__["DetailsCommandeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "user", component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__["BoardUserComponent"] },
    { path: "mod", component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__["BoardModeratorComponent"] },
    { path: "admin", component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"] },
    { path: "statistique", component: _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_25__["StatistiqueComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700,900\");\n@charset \"UTF-8\";\n* {\n  margin: auto;\n  padding: auto;\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .col-sm-4 {\n    max-width: 100%;\n    -webkit-box-flex: 1;\n            flex: auto;\n  }\n\n  .authfy-panel-left, .authfy-panel-right {\n    float: left;\n  }\n}\n@media (min-width: 320px) and (max-width: 375px) {\n  body {\n    background-size: cover;\n  }\n}\nbody, html {\n  background-color: #f0f2f5;\n  background-image: url(\"https://1.bp.blogspot.com/-fd1WXKk-TAc/XyqfngP4PiI/AAAAAAAAVMw/umQz3tkxtg43uPIy8W5og6gAkpCfjaTvACLcBGAsYHQ/w1563-h1563/bg-snell.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 100%;\n  height: 100vh;\n  text-rendering: optimizeLegibility;\n}\n.dust-paarticle {\n  position: absolute;\n  width: 100%;\n}\n#snell {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n#eye1 {\n  -webkit-animation: swing ease-in-out 0.6s infinite alternate;\n          animation: swing ease-in-out 0.6s infinite alternate;\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom;\n  transform-box: fill-box;\n  left: calc(52% - .0rem);\n}\n#eye2 {\n  -webkit-animation: swing ease-in-out 0.5s infinite alternate;\n          animation: swing ease-in-out 0.5s infinite alternate;\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom;\n  transform-box: fill-box;\n  left: calc(40% - .0rem);\n}\n#dust-paarticle path {\n  transform-box: fill-box;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n}\n/*************swing************/\n@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotate(8deg);\n            transform: rotate(8deg);\n  }\n  100% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg);\n  }\n}\n@keyframes swing {\n  0% {\n    -webkit-transform: rotate(8deg);\n            transform: rotate(8deg);\n  }\n  100% {\n    -webkit-transform: rotate(-8deg);\n            transform: rotate(-8deg);\n  }\n}\n.position-set {\n  position: absolute;\n  top: 5%;\n}\n/*--------------------*/\n/* 02. Common CSS */\n/*--------------------*/\nbody {\n  font-family: \"Titillium Web\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #44525f;\n}\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: #2d385e;\n}\na:focus {\n  outline: none;\n  text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Titillium Web\", sans-serif;\n  color: #2d385e;\n}\na,\na:hover,\na:focus {\n  color: #4f77ff;\n}\n.btn-primary {\n  background-color: #4f77ff;\n  border-color: #4f77ff;\n}\n.btn-primary:hover,\n.btn-primary:active:hover,\n.btn-primary:focus,\n.btn-primary:active:focus,\n.btn-primary:active,\n.btn-primary.active {\n  background-color: #486ff2;\n  border-color: #486ff2;\n}\n.authfy-login .btn.btn-lg {\n  border-radius: 3px;\n  box-shadow: 0px 2px 3px #9c9c9c;\n}\n.brand-logo {\n  margin-top: 0px;\n  margin-bottom: 35px;\n}\n/*--------------------*/\n/* 03. Section Panel UI CSS */\n/*--------------------*/\n.authfy-container {\n  margin-top: 97px;\n  margin-bottom: 97px;\n}\n.authfy-panel-left {\n  background-color: rgba(12, 14, 33, 0.92);\n  color: #ffffff;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  box-shadow: 0px 3px 6px #1d2030;\n}\n.authfy-panel-right {\n  background-color: #ffffff;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  box-shadow: 0px 2px 6px 0px #1d2030;\n}\n.authfy-login,\n.authfy-panel-left .brand-col {\n  height: 460px;\n}\n.authfy-panel-left .brand-col {\n  display: table;\n  width: 100%;\n  padding: 25px;\n}\n.authfy-panel-left .brand-col .headline {\n  display: table-cell;\n  vertical-align: middle;\n}\n.authfy-panel-left .brand-col .headline h1,\n.authfy-panel-left .brand-col .headline h2,\n.authfy-panel-left .brand-col .headline h3 {\n  color: #fff;\n  font-size: 48px;\n  font-weight: 700;\n}\n.authfy-login {\n  position: relative;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.authfy-panel {\n  padding: 20px 30px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  opacity: 0;\n  transform: translateX(-100%);\n  -webkit-transform: translateX(-100%);\n}\n.authfy-panel .authfy-heading {\n  margin-bottom: 30px;\n}\n.authfy-login .auth-title {\n  font-weight: 700;\n}\n.authfy-login .authfy-panel.active {\n  opacity: 1;\n  transform: translateX(0);\n  -webkit-transform: translateX(0);\n}\n.brand-col .social-buttons a {\n  color: #ffffff;\n  margin-top: 15px;\n}\n.brand-col .social-buttons a:hover {\n  color: white;\n  opacity: 0.9;\n}\n.brand-col .social-buttons .btn-facebook {\n  background: #3b5998;\n}\n.brand-col .social-buttons .btn-twitter {\n  background: #00aced;\n}\n.brand-col .social-buttons .btn-google {\n  background: #c32f10;\n}\n.brand-col .social-buttons a > span {\n  padding-left: 5px;\n}\n.panel-login {\n  margin-top: 20px;\n}\n.panel-login .remember-row {\n  margin-bottom: 10px;\n}\n.panel-login .remember-row label {\n  font-weight: normal;\n  position: relative;\n  cursor: pointer;\n  color: #666;\n  padding-left: 24px;\n}\n.authfy-login .forgotPwd {\n  text-align: right;\n  margin-top: 10px;\n}\n.panel-login .form-control,\n.panel-signup .form-control,\n.panel-forgot .form-control {\n  background-color: #fff;\n  color: #333333;\n  font-size: 18px;\n  height: 50px;\n  margin-bottom: 20px;\n  padding: 12px 22px;\n  border-radius: 3px;\n  border: solid 1px #bcc2ce;\n  outline: none;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.1);\n}\n.authfy-panel.panel-forgot {\n  padding-top: 40px;\n}\n.panel-login .form-control:focus,\n.panel-signup .form-control:focus,\n.panel-forgot .form-control:focus {\n  border-color: #4f77ff;\n  z-index: 2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.pwdMask {\n  position: relative;\n}\n.pwdMask .pwd-toggle {\n  color: #cccccc;\n  position: absolute;\n  z-index: 2;\n}\n.panel-login .pwdMask .pwd-toggle,\n.panel-signup .pwdMask .pwd-toggle {\n  top: 15px;\n  right: 15px;\n}\n.pwdMask .pwd-toggle:hover,\n.pwdMask .pwd-toggle:focus {\n  cursor: pointer;\n}\n.pwdMask .pwd-toggle:hover,\n.pwdMask .pwd-toggle:focus,\n.pwdMask .pwd-toggle.fa-eye {\n  color: #4f77ff;\n}\n.panel-signup .term-policy a {\n  text-decoration: underline;\n}\n/*--------------------*/\n/* 04. Check box UI CSS */\n/*--------------------*/\n.checkbox input[type=checkbox] {\n  position: absolute;\n  right: 9000px;\n}\n.checkbox input[type=checkbox] + .label-text:before,\n.checkbox input[type=checkbox] + .label-text:after {\n  font-size: 11px;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  padding: 2px;\n  margin-left: 0;\n  position: absolute;\n  top: 2px;\n  left: 0;\n}\n.checkbox input[type=checkbox] + .label-text:before {\n  content: \"\";\n  background-color: #ffffff;\n  border: 1px solid #ced4da;\n  border-radius: 3px;\n  cursor: pointer;\n  -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n  transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\n}\n.checkbox input[type=checkbox] + .label-text:after {\n  background-color: #4f77ff;\n  color: #ffffff;\n  border-radius: 2px;\n  border-color: #4f77ff;\n  line-height: 1.4;\n}\n.checkbox input[type=checkbox] {\n  opacity: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.checkbox input[type=checkbox]:focus + .label-text:before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.checkbox input[type=checkbox]:checked + .label-text:after {\n  font-family: \"FontAwesome\";\n  content: \"\";\n}\n/*--------------------*/\n/* 05. Responsive CSS */\n/*--------------------*/\n@media (min-width: 768px) {\n  .authfy-panel {\n    padding: 20px;\n  }\n}\n@media (max-width: 767px) {\n  .authfy-panel-left,\n.authfy-panel-right {\n    box-shadow: none;\n  }\n\n  .authfy-panel-left {\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n\n  .authfy-panel-right {\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n\n  .authfy-panel-left .brand-col {\n    height: 300px;\n    text-align: center;\n  }\n\n  .term-policy {\n    font-size: 75%;\n  }\n}\n@media (min-width: 320px) and (max-width: 375px) {\n  body {\n    background-size: cover;\n  }\n\n  .authfy-login .authfy-panel {\n    padding: 20px;\n  }\n\n  .panel-login .remember-row {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n}\n@media (max-width: 320px) {\n  .authfy-login {\n    height: 480px;\n  }\n\n  .authfy-heading p {\n    font-size: 14px;\n  }\n\n  .remember-row .col-sm-6 {\n    width: 100%;\n  }\n\n  .authfy-login .forgotPwd {\n    text-align: left;\n    margin-top: 0px;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {\n    float: left;\n  }\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXE5MRCBTT0ZUV0FSRVxcc3VudW1hcmtldEZyb250L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBcUZTLHdGQUFBO0FDckZULGdCQUFnQjtBREFoQjtFQUVFLFlBQUE7RUFDQSxhQUFBO0FDRUY7QURDQTtFQUVFO0lBRUcsZUFBQTtJQUNHLG1CQUFBO1lBQUEsVUFBQTtFQ0FOOztFREVBO0lBQ0UsV0FBQTtFQ0NGO0FBQ0Y7QURHQTtFQUVFO0lBQ00sc0JBQUE7RUNGTjtBQUNGO0FES0E7RUFDSSx5QkFBQTtFQUNBLDRKQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FDSEo7QURNQTtFQUVFLGtCQUFBO0VBQ0UsV0FBQTtBQ0pKO0FET0E7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDTEY7QURRQTtFQUVBLDREQUFBO1VBQUEsb0RBQUE7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ05KO0FEU0E7RUFFQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNQSjtBRFdBO0VBRUUsdUJBQUE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDVEo7QURZQSwrQkFBQTtBQUNBO0VBQ0k7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDUlA7RURTRTtJQUFPLGdDQUFBO1lBQUEsd0JBQUE7RUNOVDtBQUNGO0FER0E7RUFDSTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUNSUDtFRFNFO0lBQU8sZ0NBQUE7WUFBQSx3QkFBQTtFQ05UO0FBQ0Y7QURTQTtFQUVBLGtCQUFBO0VBQ0UsT0FBQTtBQ1JGO0FEYUEsdUJBQUE7QUFDQSxtQkFBQTtBQUNBLHVCQUFBO0FBR0E7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNaRjtBRGVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1pGO0FEZUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNaRjtBRGdCQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ2JGO0FEZ0JBOzs7Ozs7RUFNRSx3Q0FBQTtFQUNBLGNBQUE7QUNiRjtBRGdCQTs7O0VBR0UsY0FBQTtBQ2JGO0FEZ0JBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ2JGO0FEZ0JBOzs7Ozs7RUFNRSx5QkFBQTtFQUNBLHFCQUFBO0FDYkY7QURnQkE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNiRjtBRGdCQSx1QkFBQTtBQUNBLDZCQUFBO0FBQ0EsdUJBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNkRjtBRGlCQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFFQSwrQkFBQTtBQ2RGO0FEaUJBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBRUEsbUNBQUE7QUNkRjtBRGlCQTs7RUFFRSxhQUFBO0FDZEY7QURnQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNiRjtBRGdCQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUNiRjtBRGdCQTs7O0VBR0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2JGO0FEZ0JBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDYkY7QURnQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQ2JGO0FEZ0JBO0VBQ0UsbUJBQUE7QUNiRjtBRGdCQTtFQUNFLGdCQUFBO0FDYkY7QURnQkE7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDRCxnQ0FBQTtBQ2JEO0FEZ0JBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDYkY7QURnQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ2JGO0FEZ0JBO0VBQTBDLG1CQUFBO0FDWjFDO0FEYUE7RUFBeUMsbUJBQUE7QUNUekM7QURVQTtFQUF3QyxtQkFBQTtBQ054QztBRFFBO0VBQ0UsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7OztFQUdFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsd0VBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7QUNMRjtBRFFBOzs7RUFHRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBRUEsa0ZBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0xGO0FEUUE7O0VBRUUsU0FBQTtFQUNBLFdBQUE7QUNMRjtBRFFBOztFQUVFLGVBQUE7QUNMRjtBRFFBOzs7RUFHRSxjQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0FDTEY7QURRQSx1QkFBQTtBQUNBLHlCQUFBO0FBQ0EsdUJBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ05GO0FEU0E7O0VBRUUsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNORjtBRFNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxRUFBQTtFQUNBLDZEQUFBO0FDTkY7QURTQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ05GO0FEU0E7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNORjtBRFFBO0VBQ0Usb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FDTEY7QURPQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0EsdUJBQUE7QUFDQSx1QkFBQTtBQUNBLHVCQUFBO0FBRUE7RUFFSTtJQUNFLGFBQUE7RUNOSjtBQUNGO0FEV0E7RUFFSTs7SUFFRSxnQkFBQTtFQ1ZKOztFRGFFO0lBQ0UsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLDhCQUFBO0lBQ0EsK0JBQUE7RUNWSjs7RURhRTtJQUNFLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSw4QkFBQTtJQUNBLCtCQUFBO0VDVko7O0VEYUU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUNWSjs7RURhRTtJQUNFLGNBQUE7RUNWSjtBQUNGO0FEYUE7RUFFRTtJQUNNLHNCQUFBO0VDWk47O0VEY0U7SUFDRSxhQUFBO0VDWEo7O0VEY0U7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUNYSjtBQUNGO0FEY0E7RUFDSTtJQUNFLGFBQUE7RUNaSjs7RURjRTtJQUNFLGVBQUE7RUNYSjs7RURjRTtJQUNFLFdBQUE7RUNYSjs7RURjRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQ1hKO0FBQ0Y7QURlQTtFQUVBO0lBQ0ksZ0JBQUE7RUNkRjs7RURnQkE7SUFDRSxVQUFBO0VDYkY7O0VEZUE7SUFDRSxXQUFBO0VDWkY7QUFDRjtBRGtCQTtFQUVBO0lBQ0ksV0FBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxyXG57XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZzphdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweClcclxue1xyXG4gIC5jb2wtc20tNFxyXG4gIHtcclxuICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleDogYXV0bztcclxuICB9XHJcbiAgLmF1dGhmeS1wYW5lbC1sZWZ0LCAuYXV0aGZ5LXBhbmVsLXJpZ2h0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG5cclxuICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSwgaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly8xLmJwLmJsb2dzcG90LmNvbS8tZmQxV1hLay1UQWMvWHlxZm5nUDRQaUkvQUFBQUFBQUFWTXcvdW1RejN0a3h0ZzQzdVBJeThXNW9nNmdBa3BDZmphVHZBQ0xjQkdBc1lIUS93MTU2My1oMTU2My9iZy1zbmVsbC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxufVxyXG5cclxuLmR1c3QtcGFhcnRpY2xlXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3NuZWxsXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4jZXllMVxyXG57XHJcbmFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgbGVmdDogY2FsYyg1MiUgLSAuMHJlbSk7XHJcbn1cclxuXHJcbiNleWUyXHJcbntcclxuYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICBsZWZ0OiBjYWxjKDQwJSAtIC4wcmVtKTtcclxufVxyXG5cclxuXHJcbiNkdXN0LXBhYXJ0aWNsZSBwYXRoXHJcbntcclxuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKipzd2luZyoqKioqKioqKioqKi9cclxuQGtleWZyYW1lcyBzd2luZyB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDhkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpOyB9XHJcbn1cclxuXHJcblxyXG4ucG9zaXRpb24tc2V0XHJcbntcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjUlO1xyXG59XHJcblxyXG5cdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYjozMDAsNDAwLDYwMCw3MDAsOTAwJyk7XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogMDIuIENvbW1vbiBDU1MgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzQ0NTI1ZjtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzJkMzg1ZTtcclxuXHJcbn1cclxuXHJcbmE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2e1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyZDM4NWU7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjNGY3N2ZmO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Zjc3ZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGY3N2ZmO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTphY3RpdmU6aG92ZXIsXHJcbi5idG4tcHJpbWFyeTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpmb2N1cyxcclxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcclxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NmZmMjtcclxuICBib3JkZXItY29sb3I6ICM0ODZmZjI7XHJcbn1cclxuXHJcbi5hdXRoZnktbG9naW4gLmJ0bi5idG4tbGcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAjOWM5YzljO1xyXG59XHJcblxyXG4uYnJhbmQtbG9nbyB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAwMy4gU2VjdGlvbiBQYW5lbCBVSSBDU1MgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uYXV0aGZ5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogOTdweDtcclxuICBtYXJnaW4tYm90dG9tOiA5N3B4O1xyXG59XHJcblxyXG4uYXV0aGZ5LXBhbmVsLWxlZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiAxNCAzMyAvIDkyJSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMxZDIwMzA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzFkMjAzMDtcclxufVxyXG5cclxuLmF1dGhmeS1wYW5lbC1yaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggIzFkMjAzMDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggIzFkMjAzMDtcclxufVxyXG5cclxuLmF1dGhmeS1sb2dpbixcclxuLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wge1xyXG4gIGhlaWdodDogNDYwcHg7XHJcbn1cclxuLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYXV0aGZ5LXBhbmVsLWxlZnQgLmJyYW5kLWNvbCAuaGVhZGxpbmUgaDEsXHJcbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSBoMixcclxuLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wgLmhlYWRsaW5lIGgzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmF1dGhmeS1sb2dpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hdXRoZnktcGFuZWwge1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4uYXV0aGZ5LXBhbmVsIC5hdXRoZnktaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmF1dGhmeS1sb2dpbiAuYXV0aC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmF1dGhmeS1sb2dpbiAuYXV0aGZ5LXBhbmVsLmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgYSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgLmJ0bi1mYWNlYm9vayB7YmFja2dyb3VuZDogIzNiNTk5ODt9XHJcbi5icmFuZC1jb2wgLnNvY2lhbC1idXR0b25zIC5idG4tdHdpdHRlciB7YmFja2dyb3VuZDogIzAwYWNlZDt9XHJcbi5icmFuZC1jb2wgLnNvY2lhbC1idXR0b25zIC5idG4tZ29vZ2xlIHtiYWNrZ3JvdW5kOiAjYzMyZjEwO31cclxuXHJcbi5icmFuZC1jb2wgLnNvY2lhbC1idXR0b25zIGEgPiBzcGFuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnBhbmVsLWxvZ2luIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucGFuZWwtbG9naW4gLnJlbWVtYmVyLXJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWxvZ2luIC5yZW1lbWJlci1yb3cgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzY2NjtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5hdXRoZnktbG9naW4gLmZvcmdvdFB3ZCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBhbmVsLWxvZ2luIC5mb3JtLWNvbnRyb2wsXHJcbi5wYW5lbC1zaWdudXAgLmZvcm0tY29udHJvbCxcclxuLnBhbmVsLWZvcmdvdCAuZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAxMnB4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNiY2MyY2U7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsMC4xKSwwIDAgMnB4IDAgcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsMC4xKSwwIDAgMnB4IDAgcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uYXV0aGZ5LXBhbmVsLnBhbmVsLWZvcmdvdCB7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5wYW5lbC1sb2dpbiAuZm9ybS1jb250cm9sOmZvY3VzLFxyXG4ucGFuZWwtc2lnbnVwIC5mb3JtLWNvbnRyb2w6Zm9jdXMsXHJcbi5wYW5lbC1mb3Jnb3QgLmZvcm0tY29udHJvbDpmb2N1cyAge1xyXG4gIGJvcmRlci1jb2xvcjogIzRmNzdmZjtcclxuICB6LWluZGV4OiAyO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbn1cclxuXHJcbi5wd2RNYXNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wd2RNYXNrIC5wd2QtdG9nZ2xlIHtcclxuICBjb2xvcjogI2NjY2NjYztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBhbmVsLWxvZ2luIC5wd2RNYXNrIC5wd2QtdG9nZ2xlLFxyXG4ucGFuZWwtc2lnbnVwIC5wd2RNYXNrIC5wd2QtdG9nZ2xlIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5wd2RNYXNrIC5wd2QtdG9nZ2xlOmhvdmVyLFxyXG4ucHdkTWFzayAucHdkLXRvZ2dsZTpmb2N1cyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHdkTWFzayAucHdkLXRvZ2dsZTpob3ZlcixcclxuLnB3ZE1hc2sgLnB3ZC10b2dnbGU6Zm9jdXMsXHJcbi5wd2RNYXNrIC5wd2QtdG9nZ2xlLmZhLWV5ZSB7XHJcbiAgY29sb3I6ICM0Zjc3ZmY7XHJcbn1cclxuXHJcbi5wYW5lbC1zaWdudXAgLnRlcm0tcG9saWN5IGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogMDQuIENoZWNrIGJveCBVSSBDU1MgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDkwMDBweDtcclxufVxyXG5cclxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIC5sYWJlbC10ZXh0OmJlZm9yZSxcclxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIC5sYWJlbC10ZXh0OmFmdGVyIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGhlaWdodDogMTdweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyAubGFiZWwtdGV4dDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC4xNXMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyAubGFiZWwtdGV4dDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzdmZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGY3N2ZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpmb2N1cyArIC5sYWJlbC10ZXh0OmJlZm9yZSB7XHJcbiAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XHJcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG59XHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC5sYWJlbC10ZXh0OmFmdGVyIHtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAwNS4gUmVzcG9uc2l2ZSBDU1MgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAuYXV0aGZ5LXBhbmVsIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuYXV0aGZ5LXBhbmVsLWxlZnQsXHJcbiAgICAuYXV0aGZ5LXBhbmVsLXJpZ2h0IHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aGZ5LXBhbmVsLWxlZnQge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aGZ5LXBhbmVsLXJpZ2h0IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wge1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlcm0tcG9saWN5IHtcclxuICAgICAgZm9udC1zaXplOiA3NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcblxyXG4gIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gICAgLmF1dGhmeS1sb2dpbiAuYXV0aGZ5LXBhbmVsIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFuZWwtbG9naW4gLnJlbWVtYmVyLXJvdyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAuYXV0aGZ5LWxvZ2luIHtcclxuICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgIH1cclxuICAgIC5hdXRoZnktaGVhZGluZyBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yZW1lbWJlci1yb3cgLmNvbC1zbS02IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhmeS1sb2dpbiAuZm9yZ290UHdkIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweClcclxue1xyXG4uY29sLWxnLW9mZnNldC0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuICAuY29sLWxnLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4gIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KVxyXG57XHJcbi5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LCAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxufVxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UaXRpbGxpdW0rV2ViOjMwMCw0MDAsNjAwLDcwMCw5MDBcIik7XG4qIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29sLXNtLTQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiBhdXRvO1xuICB9XG5cbiAgLmF1dGhmeS1wYW5lbC1sZWZ0LCAuYXV0aGZ5LXBhbmVsLXJpZ2h0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxufVxuYm9keSwgaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLWZkMVdYS2stVEFjL1h5cWZuZ1A0UGlJL0FBQUFBQUFBVk13L3VtUXozdGt4dGc0M3VQSXk4VzVvZzZnQWtwQ2ZqYVR2QUNMY0JHQXNZSFEvdzE1NjMtaDE1NjMvYmctc25lbGwucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4uZHVzdC1wYWFydGljbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc25lbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNleWUxIHtcbiAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgbGVmdDogY2FsYyg1MiUgLSAuMHJlbSk7XG59XG5cbiNleWUyIHtcbiAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAwLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbiAgbGVmdDogY2FsYyg0MCUgLSAuMHJlbSk7XG59XG5cbiNkdXN0LXBhYXJ0aWNsZSBwYXRoIHtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLyoqKioqKioqKioqKipzd2luZyoqKioqKioqKioqKi9cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpO1xuICB9XG59XG4ucG9zaXRpb24tc2V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIDAyLiBDb21tb24gQ1NTICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJUaXRpbGxpdW0gV2ViXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM0NDUyNWY7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJkMzg1ZTtcbn1cblxuYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1mYW1pbHk6IFwiVGl0aWxsaXVtIFdlYlwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzJkMzg1ZTtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6ICM0Zjc3ZmY7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Zjc3ZmY7XG4gIGJvcmRlci1jb2xvcjogIzRmNzdmZjtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmFjdGl2ZTpob3Zlcixcbi5idG4tcHJpbWFyeTpmb2N1cyxcbi5idG4tcHJpbWFyeTphY3RpdmU6Zm9jdXMsXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODZmZjI7XG4gIGJvcmRlci1jb2xvcjogIzQ4NmZmMjtcbn1cblxuLmF1dGhmeS1sb2dpbiAuYnRuLmJ0bi1sZyB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggIzljOWM5Yztcbn1cblxuLmJyYW5kLWxvZ28ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogMDMuIFNlY3Rpb24gUGFuZWwgVUkgQ1NTICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5hdXRoZnktY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogOTdweDtcbiAgbWFyZ2luLWJvdHRvbTogOTdweDtcbn1cblxuLmF1dGhmeS1wYW5lbC1sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTQsIDMzLCAwLjkyKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMxZDIwMzA7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMxZDIwMzA7XG59XG5cbi5hdXRoZnktcGFuZWwtcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNnB4IDBweCAjMWQyMDMwO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAwcHggIzFkMjAzMDtcbn1cblxuLmF1dGhmeS1sb2dpbixcbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIHtcbiAgaGVpZ2h0OiA0NjBweDtcbn1cblxuLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSBoMSxcbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSBoMixcbi5hdXRoZnktcGFuZWwtbGVmdCAuYnJhbmQtY29sIC5oZWFkbGluZSBoMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hdXRoZnktbG9naW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmF1dGhmeS1wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmF1dGhmeS1wYW5lbCAuYXV0aGZ5LWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYXV0aGZ5LWxvZ2luIC5hdXRoLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmF1dGhmeS1sb2dpbiAuYXV0aGZ5LXBhbmVsLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5icmFuZC1jb2wgLnNvY2lhbC1idXR0b25zIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYnJhbmQtY29sIC5zb2NpYWwtYnV0dG9ucyAuYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cblxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgLmJ0bi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzAwYWNlZDtcbn1cblxuLmJyYW5kLWNvbCAuc29jaWFsLWJ1dHRvbnMgLmJ0bi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjYzMyZjEwO1xufVxuXG4uYnJhbmQtY29sIC5zb2NpYWwtYnV0dG9ucyBhID4gc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ucGFuZWwtbG9naW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGFuZWwtbG9naW4gLnJlbWVtYmVyLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYW5lbC1sb2dpbiAucmVtZW1iZXItcm93IGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5hdXRoZnktbG9naW4gLmZvcmdvdFB3ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGFuZWwtbG9naW4gLmZvcm0tY29udHJvbCxcbi5wYW5lbC1zaWdudXAgLmZvcm0tY29udHJvbCxcbi5wYW5lbC1mb3Jnb3QgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMTJweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiY2MyY2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hdXRoZnktcGFuZWwucGFuZWwtZm9yZ290IHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wYW5lbC1sb2dpbiAuZm9ybS1jb250cm9sOmZvY3VzLFxuLnBhbmVsLXNpZ251cCAuZm9ybS1jb250cm9sOmZvY3VzLFxuLnBhbmVsLWZvcmdvdCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGY3N2ZmO1xuICB6LWluZGV4OiAyO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNik7XG59XG5cbi5wd2RNYXNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHdkTWFzayAucHdkLXRvZ2dsZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wYW5lbC1sb2dpbiAucHdkTWFzayAucHdkLXRvZ2dsZSxcbi5wYW5lbC1zaWdudXAgLnB3ZE1hc2sgLnB3ZC10b2dnbGUge1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucHdkTWFzayAucHdkLXRvZ2dsZTpob3Zlcixcbi5wd2RNYXNrIC5wd2QtdG9nZ2xlOmZvY3VzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHdkTWFzayAucHdkLXRvZ2dsZTpob3Zlcixcbi5wd2RNYXNrIC5wd2QtdG9nZ2xlOmZvY3VzLFxuLnB3ZE1hc2sgLnB3ZC10b2dnbGUuZmEtZXllIHtcbiAgY29sb3I6ICM0Zjc3ZmY7XG59XG5cbi5wYW5lbC1zaWdudXAgLnRlcm0tcG9saWN5IGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAwNC4gQ2hlY2sgYm94IFVJIENTUyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5MDAwcHg7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5sYWJlbC10ZXh0OmJlZm9yZSxcbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5sYWJlbC10ZXh0OmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDA7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5sYWJlbC10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlLWluLW91dCwgY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5sYWJlbC10ZXh0OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNzdmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjNGY3N2ZmO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cyArIC5sYWJlbC10ZXh0OmJlZm9yZSB7XG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5sYWJlbC10ZXh0OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvgIxcIjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAwNS4gUmVzcG9uc2l2ZSBDU1MgKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hdXRoZnktcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYXV0aGZ5LXBhbmVsLWxlZnQsXG4uYXV0aGZ5LXBhbmVsLXJpZ2h0IHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLmF1dGhmeS1wYW5lbC1sZWZ0IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgfVxuXG4gIC5hdXRoZnktcGFuZWwtcmlnaHQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICB9XG5cbiAgLmF1dGhmeS1wYW5lbC1sZWZ0IC5icmFuZC1jb2wge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRlcm0tcG9saWN5IHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5hdXRoZnktbG9naW4gLmF1dGhmeS1wYW5lbCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5wYW5lbC1sb2dpbiAucmVtZW1iZXItcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5hdXRoZnktbG9naW4ge1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cblxuICAuYXV0aGZ5LWhlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnJlbWVtYmVyLXJvdyAuY29sLXNtLTYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmF1dGhmeS1sb2dpbiAuZm9yZ290UHdkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLWxnLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG5cbiAgLmNvbC1sZy02IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC1sZy0xLCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLTIsIC5jb2wtbGctMywgLmNvbC1sZy00LCAuY29sLWxnLTUsIC5jb2wtbGctNiwgLmNvbC1sZy03LCAuY29sLWxnLTgsIC5jb2wtbGctOSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AppComponent = class AppComponent {
    constructor(tokenStorageService, authService, sanitizer) {
        this.tokenStorageService = tokenStorageService;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
        this.avatar = "assets/img/avatars/user.png";
        this.hidden = false;
        this.hiddenlogin = false;
        this.form = {};
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
        this.DateNow = new Date().getFullYear();
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            this.hiddenlogin = true;
            this.user = this.tokenStorageService.getUser();
            this.user.role = [];
            for (let r of this.user.roles) {
                if (r.name == "ROLE_ADMIN") {
                    this.user.role.push("Admin");
                }
                if (r.name == "ROLE_MODERATOR") {
                    this.user.role.push("Modérateur");
                }
            }
            //this.roles = user.roles;
            //this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
            //this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");
            //this.username = user.username;
        }
    }
    ShowAppAfterLogin() {
        this.hidden = !this.hidden;
    }
    ShowLoggin() {
        this.hiddenlogin = !this.hiddenlogin;
    }
    onSubmit() {
        console.log(this.form);
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorageService.saveToken(data.accessToken);
            this.tokenStorageService.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorageService.getUser().roles;
            this.reloadPage();
        }, err => {
            //this.errorMessage = err.error.message;
            //this.isLoginFailed = true;
            this.AlertLogin();
        });
    }
    reloadPage() {
        window.location.reload();
        //this.hidden = true;
        this.hiddenlogin = true;
        //this.ShowLoggin();
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
        this.hiddenlogin = false;
        //this.ShowLoggin();
    }
    AlertLogin() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({ title: 'Login ou mot de passe incorrect Veuillez réessayer !!!!' }).then(result => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _commande_commandeUpdate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commande/commandeUpdate.component */ "./src/app/commande/commandeUpdate.component.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _formulaire_formulaireUpdate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formulaire/formulaireUpdate.component */ "./src/app/formulaire/formulaireUpdate.component.ts");
/* harmony import */ var _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formulaire/formulaire.component */ "./src/app/formulaire/formulaire.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_userUpdate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/userUpdate.component */ "./src/app/user/userUpdate.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _pipes_classe_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/classe.pipe */ "./src/app/pipes/classe.pipe.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _gestion_commande_gestion_commande_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gestion-commande/gestion-commande.component */ "./src/app/gestion-commande/gestion-commande.component.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/produit/produit.component.ts");
/* harmony import */ var _categorie_categorieUpdate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./categorie/categorieUpdate.component */ "./src/app/categorie/categorieUpdate.component.ts");
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./categorie/categorie.component */ "./src/app/categorie/categorie.component.ts");
/* harmony import */ var _produit_produitUpdate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./produit/produitUpdate.component */ "./src/app/produit/produitUpdate.component.ts");
/* harmony import */ var _produit_produitStock_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./produit/produitStock.component */ "./src/app/produit/produitStock.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _client_clientUpdate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./client/clientUpdate.component */ "./src/app/client/clientUpdate.component.ts");
/* harmony import */ var _commande_commande_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./commande/commande.component */ "./src/app/commande/commande.component.ts");
/* harmony import */ var _listecommandeencours_listecommandeencours_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./listecommandeencours/listecommandeencours.component */ "./src/app/listecommandeencours/listecommandeencours.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./statistique/statistique.component */ "./src/app/statistique/statistique.component.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/fesm2015/ngx-lottie.js");
/* harmony import */ var _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./details-commande/details-commande.component */ "./src/app/details-commande/details-commande.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _pipes_commande_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/commande.pipe */ "./src/app/pipes/commande.pipe.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _marque_marque_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./marque/marque.component */ "./src/app/marque/marque.component.ts");
/* harmony import */ var _marque_marque_update_marque_update_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./marque/marque-update/marque-update.component */ "./src/app/marque/marque-update/marque-update.component.ts");














































function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(null, /*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js", 7));
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_12__["BoardAdminComponent"],
            _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_13__["BoardModeratorComponent"],
            _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_14__["BoardUserComponent"],
            _formulaire_formulaireUpdate_component__WEBPACK_IMPORTED_MODULE_16__["FormulaireUpdateComponent"],
            _formulaire_formulaire_component__WEBPACK_IMPORTED_MODULE_17__["FormulaireComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
            _user_userUpdate_component__WEBPACK_IMPORTED_MODULE_21__["UserUpdateComponent"],
            _client_client_component__WEBPACK_IMPORTED_MODULE_32__["ClientComponent"],
            _client_clientUpdate_component__WEBPACK_IMPORTED_MODULE_33__["ClientUpdateComponent"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__["LoadingSpinnerComponent"],
            _pipes_classe_pipe__WEBPACK_IMPORTED_MODULE_24__["ClassePipe"],
            _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_29__["CategorieComponent"],
            _categorie_categorieUpdate_component__WEBPACK_IMPORTED_MODULE_28__["CategorieUpdateComponent"],
            _produit_produit_component__WEBPACK_IMPORTED_MODULE_27__["ProduitComponent"],
            _produit_produitUpdate_component__WEBPACK_IMPORTED_MODULE_30__["ProduitUpdateComponent"],
            _gestion_commande_gestion_commande_component__WEBPACK_IMPORTED_MODULE_26__["GestionCommandeComponent"],
            _commande_commande_component__WEBPACK_IMPORTED_MODULE_34__["CommandeComponent"],
            _commande_commandeUpdate_component__WEBPACK_IMPORTED_MODULE_1__["CommandeUpdateComponent"],
            _listecommandeencours_listecommandeencours_component__WEBPACK_IMPORTED_MODULE_35__["ListecommandeencoursComponent"],
            _produit_produitStock_component__WEBPACK_IMPORTED_MODULE_31__["ProduitStockComponent"],
            _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_38__["StatistiqueComponent"],
            _details_commande_details_commande_component__WEBPACK_IMPORTED_MODULE_40__["DetailsCommandeComponent"],
            _pipes_commande_pipe__WEBPACK_IMPORTED_MODULE_42__["CommandePipe"],
            _payment_payment_component__WEBPACK_IMPORTED_MODULE_43__["PaymentComponent"],
            _marque_marque_component__WEBPACK_IMPORTED_MODULE_44__["MarqueComponent"],
            _marque_marque_update_marque_update_component__WEBPACK_IMPORTED_MODULE_45__["MarqueUpdateComponent"],
        ],
        imports: [
            ngx_lottie__WEBPACK_IMPORTED_MODULE_39__["LottieModule"].forRoot({ player: playerFactory }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_2__["Ng2ImgMaxModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_23__["DemoMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_41__["NgxSpinnerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_36__["CommonModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_37__["HighchartsChartModule"],
        ],
        entryComponents: [_payment_payment_component__WEBPACK_IMPORTED_MODULE_43__["PaymentComponent"]],
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_15__["authInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardAdminComponent = class BoardAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")).default]
    })
], BoardAdminComponent);



/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardModeratorComponent = class BoardModeratorComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-moderator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-moderator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-moderator.component.css */ "./src/app/board-moderator/board-moderator.component.css")).default]
    })
], BoardModeratorComponent);



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardUserComponent = class BoardUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")).default]
    })
], BoardUserComponent);



/***/ }),

/***/ "./src/app/categorie/categorie.component.css":
/*!***************************************************!*\
  !*** ./src/app/categorie/categorie.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS9jYXRlZ29yaWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/categorie/categorie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/categorie/categorie.component.ts ***!
  \**************************************************/
/*! exports provided: CategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieComponent", function() { return CategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Categorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/Categorie.service */ "./src/app/_services/Categorie.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let CategorieComponent = class CategorieComponent {
    constructor(typevetementservice) {
        this.typevetementservice = typevetementservice;
        this.p = 1;
    }
    ngOnInit() {
        this.LoadTable();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadTable() {
        this.typevetementservice.getData().subscribe((data) => {
            console.log(data);
            this.typevetements = data;
            console.log(this.typevetements);
        });
    }
    delete(id) {
        this.typevetementservice.deleteData(id).subscribe(() => {
            this.LoadTable();
        });
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Suppression',
            text: "Êtes-vous sûr de vouloir supprimer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer!',
            cancelButtonText: 'Non, annuler !'
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Supprimé!', 'Supprimé avec succès', 'success');
            }
            else {
            }
        });
    }
};
CategorieComponent.ctorParameters = () => [
    { type: _services_Categorie_service__WEBPACK_IMPORTED_MODULE_2__["CategorieService"] }
];
CategorieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-categorie",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/categorie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categorie.component.css */ "./src/app/categorie/categorie.component.css")).default]
    })
], CategorieComponent);



/***/ }),

/***/ "./src/app/categorie/categorieUpdate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/categorie/categorieUpdate.component.ts ***!
  \********************************************************/
/*! exports provided: CategorieUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieUpdateComponent", function() { return CategorieUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_Categorie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Categorie.model */ "./src/app/models/Categorie.model.ts");
/* harmony import */ var _services_Categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/Categorie.service */ "./src/app/_services/Categorie.service.ts");





let CategorieUpdateComponent = class CategorieUpdateComponent {
    constructor(vetementservice, route) {
        this.vetementservice = vetementservice;
        this.route = route;
    }
    ngOnInit() {
        const comp = this;
        if (!this.route.snapshot.paramMap.get("id")) {
            this.vetement = new _models_Categorie_model__WEBPACK_IMPORTED_MODULE_3__["Categorie"]();
        }
        else {
            this.vetementservice
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                this.vetement = data;
                console.log(data);
            });
        }
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    insertData() {
        if (this.route.snapshot.paramMap.get("id")) {
            this.vetementservice
                .updateData(this.route.snapshot.paramMap.get("id"), this.vetement)
                .subscribe(() => {
                console.log("Update avec succes");
                window.history.back();
            });
        }
        else {
            this.vetement.id = null;
            this.vetementservice.insertData(this.vetement).subscribe(() => {
                window.history.back();
            }, () => {
                console.log("false");
            });
        }
    }
    precedentPage() {
        window.history.back();
    }
};
CategorieUpdateComponent.ctorParameters = () => [
    { type: _services_Categorie_service__WEBPACK_IMPORTED_MODULE_4__["CategorieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CategorieUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-type-vetementUpdate",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./CategorieUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie/CategorieUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categorie.component.css */ "./src/app/categorie/categorie.component.css")).default]
    })
], CategorieUpdateComponent);



/***/ }),

/***/ "./src/app/client/client.component.css":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-invalid {\r\n  border-color: #E63F24;\r\n}\r\n\r\n.danger {\r\n  color: #E63F24;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.span {\r\n\r\n  pointer-events: none;\r\n  display: none;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6ICNFNjNGMjQ7XHJcbn1cclxuXHJcbi5kYW5nZXIge1xyXG4gIGNvbG9yOiAjRTYzRjI0O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGFuIHtcclxuXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let ClientComponent = class ClientComponent {
    constructor(clientservice, mesureservice, sanitizer) {
        this.clientservice = clientservice;
        this.mesureservice = mesureservice;
        this.sanitizer = sanitizer;
        this.p = 1;
        this.avatar = "assets/img/avatars/user.png";
        this.items = [
            { id: 1, name: "Tel" },
            { id: 2, name: "Email" },
        ];
        this.selected = { id: 1, name: "Tel" };
        this.showsearchType = false;
        this.showSpinner = true;
    }
    getValues() {
        console.log(this.selected);
        console.log(this.selected.name);
        if ((this.selected.name = "Email")) {
            this.showsearchType = !this.showsearchType;
        }
        else {
            this.showsearchType = !this.showsearchType;
        }
    }
    ngOnInit() {
        this.LoadTable();
        // this.getAllProfil();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadTable() {
        this.clientservice.getData().subscribe((data) => {
            this.clients = data;
            this.filterItems = this.clients;
            this.showSpinner = false;
        });
    }
    delete(id) {
        this.clientservice.deleteData(id).subscribe(() => {
            this.LoadTable();
        });
    }
    /* getAllProfil(){
      this.mesureservice.getData().subscribe(
        (data:MesureModel[])=>{
          this.mesures=data;
  
        }
      )
    } */
    setFileData($event, d) {
        this.getBase64($event, d);
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Etes-vous sûre de vouloir supprimer?",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
        /* Swal.fire({
           title: 'Êtes-vous sûr de vouloir supprimer.',
           text: "A revoir ...",
           type: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
           if (result.value) {
             this.delete(id);
             Swal.fire(
               'Supprimé!',
               'Supprimé avec succès',
               'success'
             )
           }else {
    
           }
         })*/
    }
    getBase64(event, client) {
        let me = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            client.photo = reader.result;
            console.log(client);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }
    searchChanged() {
        this.filterItems = this.clients.filter((item) => {
            return item.tel.indexOf(this.searchTerm) > -1;
        });
    }
    searchEmail() {
        this.filterItems = this.clients.filter((item) => {
            return (item.user.email.toLowerCase().indexOf(this.searchTerm2.toLowerCase()) >
                -1);
        });
    }
};
ClientComponent.ctorParameters = () => [
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-client",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.css */ "./src/app/client/client.component.css")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/client/clientUpdate.component.css":
/*!***************************************************!*\
  !*** ./src/app/client/clientUpdate.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnRVcGRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/client/clientUpdate.component.ts":
/*!**************************************************!*\
  !*** ./src/app/client/clientUpdate.component.ts ***!
  \**************************************************/
/*! exports provided: ClientUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientUpdateComponent", function() { return ClientUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/role.service */ "./src/app/_services/role.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _models_client_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/client.model */ "./src/app/models/client.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_Adresse_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_services/Adresse.service */ "./src/app/_services/Adresse.service.ts");
/* harmony import */ var _models_Adresse_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/Adresse.model */ "./src/app/models/Adresse.model.ts");














let ClientUpdateComponent = class ClientUpdateComponent {
    constructor(formBuilder, authService, userService, clientService, adresseService, roleService, route, ng2ImgMax, sanitizer) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.clientService = clientService;
        this.adresseService = adresseService;
        this.roleService = roleService;
        this.route = route;
        this.ng2ImgMax = ng2ImgMax;
        this.sanitizer = sanitizer;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = "";
        this.items = ["Admin", "Modérateur", "Utilisateur"];
        this.Regions = ["Dakar", "Thies", "Kaolack", "Fatick", "TAMBA", "KAFFRINE", "KEDOUGOU", "PODOR", "MATAM", "DIOURBEL", "SAINT LOUIS", "KOLDA", "ZIGUINCHOR"];
        this.update = false;
        this.avatar = "assets/img/avatars/user.png";
        this.ROLE = ["Utilisateur"];
    }
    ngOnInit() {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.client = new _models_client_model__WEBPACK_IMPORTED_MODULE_8__["Client"]();
        this.adresse = new _models_Adresse_model__WEBPACK_IMPORTED_MODULE_13__["Adresse"]();
        this.tabaddresss = [];
        this.tabaddresss.push(this.adresse);
        if (this.route.snapshot.paramMap.get("id")) {
            this.loadRoles();
            this.update = true;
            this.clientService
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                this.client = data;
                console.log(this.client);
                this.tabaddresss = this.client.adresses;
                this.client.user.role = [];
                for (let r of this.client.user.roles) {
                    if (r.name == "ROLE_USER") {
                        this.client.user.role.push("Utilisateur");
                    }
                }
                //console.log("Photo", this.user.photo);
                this.photoUpdate = this.client.user.photo;
                this.updateForm(this.client);
            });
        }
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    addRow(index) {
        this.adresse = new _models_Adresse_model__WEBPACK_IMPORTED_MODULE_13__["Adresse"]();
        this.tabaddresss.push(this.adresse);
        console.log(this.tabaddresss);
        return true;
    }
    getValues() {
        console.log("Select roles", this.form.roles);
    }
    loadRoles() {
        this.roleService.getAll().subscribe((data) => {
            this.roles = data;
            console.log("Roles", this.roles);
        });
    }
    updateForm(client) {
        this.form.id = client.id;
        this.form.nom = client.user.nom;
        this.form.prenom = client.user.prenom;
        this.form.tel = client.tel;
        this.form.sexe = client.sexe;
        this.form.cni = client.cni;
        this.form.username = client.user.username;
        this.form.role = client.user.role;
        this.form.email = client.user.email;
        this.form.password = client.user.password;
        this.form.etat = client.etat;
        this.form.photo = client.user.photo;
        this.form.roles = client.user.roles;
    }
    onSubmit() {
        if (this.user.id != null) {
            console.log("Form", this.form);
            this.client = this.form;
            this.user = this.client.user;
            this.user.roles = [];
            for (let r of this.form.role) {
                if (r == "Utilisateur") {
                    for (let b of this.roles) {
                        if (b.name == "ROLE_USER") {
                            this.user.roles.push(b);
                        }
                    }
                }
            }
            if (this.photo == null) {
                this.user.photo = this.photoUpdate;
            }
            else {
                this.user.photo = this.photo;
            }
            // this.userService.update(this.user.id, this.user).subscribe((data) => {
            //   console.log("Updated man!!");
            //   //console.log(data);
            //   this.retour();
            // });
        }
        else {
            this.form.etat = true;
            //console.log("Form", this.form);
            this.client.cni = this.form.cni;
            this.client.tel = this.form.tel;
            this.client.sexe = this.form.sexe;
            this.client.etat = this.form.etat;
            this.user.email = this.form.email;
            this.user.password = "passer";
            this.user.username = this.form.username;
            this.user.role = this.ROLE;
            this.user.nom = this.form.nom;
            this.user.prenom = this.form.prenom;
            this.user.etat = true;
            //this.user.photo = this.photo;
            console.log("Client", this.client);
            console.log("User", this.user);
            console.log("Adresse", this.adresse);
            console.log("Photo", this.photo);
            this.authService.register(this.user).subscribe((userCreated) => {
                console.log("User Inserted man!!");
                console.log("Inserted user object", userCreated);
                //On verifie si le user a bien été crée
                if (userCreated) {
                    /**         Ajout Client     **/
                    this.client.user = userCreated;
                    console.log("user give to client ", this.client);
                    this.clientService.insertData(this.client).subscribe((clientCreated) => {
                        for (let a of this.tabaddresss) {
                            a.client = clientCreated;
                            // console.log(clientCreated);
                            this.adresseService.insertData(a).subscribe((data) => {
                                console.log(data);
                                this.retour();
                            }, (err) => { });
                        }
                        // this.retour();
                    }, (err) => { });
                }
            }, (err) => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            });
        }
    }
    retour() {
        window.history.back();
    }
    onImageChange(event) {
        let image = event.target.files[0];
        this.ng2ImgMax.resizeImage(image, 140, 140).subscribe((result) => {
            this.uploadedImage = new File([result], result.name);
            //this.onImageChange2(this.uploadedImage);
            this.getImagePreview(this.uploadedImage);
            //this.getBase642(this.uploadedImage);
        }, (error) => {
            console.log("😢 Oh no!", error);
        });
    }
    getImagePreview(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const imagePreview = reader.result;
            this.imagePreview2 = imagePreview;
            this.user.photo = imagePreview;
            this.photo = imagePreview;
            console.log("Image resize base64", reader.result);
            console.log("Image lenght", this.imagePreview2.length);
        };
    }
};
ClientUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
    { type: _services_Adresse_service__WEBPACK_IMPORTED_MODULE_12__["AdresseService"] },
    { type: _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_10__["Ng2ImgMaxService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
];
ClientUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clientUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/client/clientUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clientUpdate.component.css */ "./src/app/client/clientUpdate.component.css")).default]
    })
], ClientUpdateComponent);



/***/ }),

/***/ "./src/app/commande/commande.component.css":
/*!*************************************************!*\
  !*** ./src/app/commande/commande.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlL2NvbW1hbmRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/commande/commande.component.ts":
/*!************************************************!*\
  !*** ./src/app/commande/commande.component.ts ***!
  \************************************************/
/*! exports provided: CommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeComponent", function() { return CommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");



let CommandeComponent = class CommandeComponent {
    constructor(commandeService) {
        this.commandeService = commandeService;
        this.p = 1;
        this.showSpinner = true;
        this.showSpinnerMail = false;
        this.items = [
            { id: 1, libelle: "Terminé" },
            { id: 2, libelle: "En cours" },
            { id: 3, libelle: "Livré" },
        ];
    }
    ngOnInit() {
        this.LoadAllCommande();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    getValues() {
        console.log(this.selected);
        if (this.selected == null) {
            this.LoadAllCommande();
        }
        else {
            this.FilterEtatCommande();
        }
    }
    LoadAllCommande() {
        this.commandeService.getData().subscribe((data) => {
            this.commandes = data;
            this.filterItems = this.commandes;
            this.showSpinner = false;
        });
    }
    FilterEtatCommande() {
        this.filterItems = this.commandes.filter((item) => {
            return item.etat.indexOf(this.selected.libelle) > -1;
        });
    }
};
CommandeComponent.ctorParameters = () => [
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_2__["CommandeService"] }
];
CommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-commande",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commande.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commande.component.css */ "./src/app/commande/commande.component.css")).default]
    })
], CommandeComponent);



/***/ }),

/***/ "./src/app/commande/commandeUpdate.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commande/commandeUpdate.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#btnsearch {\r\n  margin-top: 20px !important;\r\n  font-size: 10px !important;\r\n}\r\n\r\n#AddBtn {\r\n  margin-top: 70px !important;\r\n  margin-left: -65px !important;\r\n  font-size: 10px !important;\r\n}\r\n\r\n#UpdateBtn {\r\n  margin-top: 70px !important;\r\n  margin-left: -65px !important;\r\n  font-size: 10px !important;\r\n}\r\n\r\n#btnEtat {\r\n  margin-left: -55px !important;\r\n}\r\n\r\n#cardMesure {\r\n  height: 600px !important;\r\n}\r\n\r\nimg {\r\n  border-radius: 12px;\r\n  /*transition: all 100ms ease-in-out;*/\r\n}\r\n\r\nimg:hover {\r\n  -webkit-transform: rotate(10deg);\r\n          transform: rotate(10deg);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWFuZGUvY29tbWFuZGVVcGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21tYW5kZS9jb21tYW5kZVVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J0bnNlYXJjaCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jQWRkQnRuIHtcclxuICBtYXJnaW4tdG9wOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC02NXB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNVcGRhdGVCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDcwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTY1cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2J0bkV0YXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jY2FyZE1lc3VyZSB7XHJcbiAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgLyp0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbi1vdXQ7Ki9cclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/commande/commandeUpdate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commande/commandeUpdate.component.ts ***!
  \******************************************************/
/*! exports provided: CommandeUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeUpdateComponent", function() { return CommandeUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_facture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/facture.service */ "./src/app/_services/facture.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/client.service */ "./src/app/_services/client.service.ts");
/* harmony import */ var _models_Commande_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Commande.model */ "./src/app/models/Commande.model.ts");
/* harmony import */ var _models_DetailCommande_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/DetailCommande.model */ "./src/app/models/DetailCommande.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_Categorie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/Categorie.service */ "./src/app/_services/Categorie.service.ts");
/* harmony import */ var _models_Categorie_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/Categorie.model */ "./src/app/models/Categorie.model.ts");
/* harmony import */ var _services_Produit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_services/Produit.service */ "./src/app/_services/Produit.service.ts");
/* harmony import */ var _models_Produit_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/Produit.model */ "./src/app/models/Produit.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");
/* harmony import */ var _services_detailscommande_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_services/detailscommande.service */ "./src/app/_services/detailscommande.service.ts");
/* harmony import */ var _models_Adresse_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/Adresse.model */ "./src/app/models/Adresse.model.ts");
/* harmony import */ var _services_Adresse_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_services/Adresse.service */ "./src/app/_services/Adresse.service.ts");
/* harmony import */ var _models_Paiement_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../models/Paiement.model */ "./src/app/models/Paiement.model.ts");
/* harmony import */ var _models_Facture_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../models/Facture.model */ "./src/app/models/Facture.model.ts");
/* harmony import */ var _services_paiement_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../_services/paiement.service */ "./src/app/_services/paiement.service.ts");




















let CommandeUpdateComponent = class CommandeUpdateComponent {
    constructor(clientService, categorieService, produitService, commandeService, detailscommandeService, factureService, paiementService, sanitizer, route, adresseService) {
        this.clientService = clientService;
        this.categorieService = categorieService;
        this.produitService = produitService;
        this.commandeService = commandeService;
        this.detailscommandeService = detailscommandeService;
        this.factureService = factureService;
        this.paiementService = paiementService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.adresseService = adresseService;
        this.showinfosClient = false;
        this.showAddBtn = false;
        this.havePrix = false;
        this.LastItemOfTabCommand = false;
        this.items = [];
        this.adresses = [];
        this.items2 = [];
        this.avatar = "assets/img/avatars/user.png";
        this.productEmpty = "assets/img/avatars/emptyProduit.jfif";
        this.tabCommande = [];
        this.montantTotalTemp = 0;
        this.montantTotalTempUpdate = 0;
        this.reductionUpdate = 0;
        this.commandeCreatedId = 0;
        this.LivraisonAmount = 2000;
        this.avance = null;
    }
    ngOnInit() {
        if (!this.route.snapshot.paramMap.get("id")) {
            this.commande = new _models_Commande_model__WEBPACK_IMPORTED_MODULE_5__["Commande"]();
            this.paiement = new _models_Paiement_model__WEBPACK_IMPORTED_MODULE_17__["Paiement"]();
            this.facture = new _models_Facture_model__WEBPACK_IMPORTED_MODULE_18__["Facture"]();
            this.detailcommande = new _models_DetailCommande_model__WEBPACK_IMPORTED_MODULE_6__["DetailCommande"]();
            this.selected2 = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_11__["Produit"]();
            this.LoadCategorieSelect();
            this.montantTotal = null;
        }
        else {
            this.showAddBtn = !this.showAddBtn;
            //this.commande = new Commande();
            this.detailcommande = new _models_DetailCommande_model__WEBPACK_IMPORTED_MODULE_6__["DetailCommande"]();
            this.adresse = new _models_Adresse_model__WEBPACK_IMPORTED_MODULE_15__["Adresse"]();
            this.selected2 = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_11__["Produit"]();
            this.selected = new _models_Categorie_model__WEBPACK_IMPORTED_MODULE_9__["Categorie"]();
            this.LoadCategorieSelect();
            this.commandeService
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((CommandeData) => {
                console.log(CommandeData);
                this.commande = CommandeData;
                this.CommandeUpdate = CommandeData;
                this.clientData = this.commande.client;
                this.telInput = this.commande.client.tel;
                this.montantTotal = this.commande.montant;
                if (this.commande.reduction != null) {
                    this.montantNetaPayer =
                        this.commande.montant - this.commande.reduction;
                    this.reduction = this.commande.reduction;
                }
                else {
                    this.montantNetaPayer = this.commande.montant;
                }
                this.showinfosClient = true;
                this.LoadTabDetailsCommande(CommandeData);
                this.adresseService
                    .getAllAdresseByClient(this.clientData.id)
                    .subscribe((data) => {
                    this.adresses = data;
                    console.log("Adresses Client", this.adresses);
                });
            });
        }
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    getClientDataByTel() {
        this.clientService
            .getClientByTel(this.telInput)
            .subscribe((data) => {
            this.clientData = data;
            console.log(this.clientData);
            this.showinfosClient = true;
        });
    }
    LoadCategorieSelect() {
        this.categorieService.getData().subscribe((data) => {
            this.categories = data;
            this.items = this.categories;
        });
    }
    LoadProduitSelectByCategorie(id) {
        this.produitService
            .getProduitByCategorie(id)
            .subscribe((data) => {
            this.produits = data;
            this.items2 = this.produits;
            //console.log(this.items2);
        });
    }
    getValues() {
        console.log(this.selected);
        //console.log(this.selected.id);
        this.selected2 = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_11__["Produit"]();
        this.LoadProduitSelectByCategorie(this.selected.id);
    }
    getValues2() {
        console.log(this.selected2);
        this.havePrix = true;
    }
    /**Cette fonction permet d'ajouter une réduction à la commande */
    AddReduction() {
        console.log(this.reduction);
        //this.montantTotal = 0;
        //this.montantNetaPayer = 0;
        if (this.reduction) {
            // Cas update sinon ajout
            this.montantTotal = 0;
            this.montantNetaPayer = 0;
            if (this.route.snapshot.paramMap.get("id")) {
                for (let c of this.tabCommande) {
                    this.montantTotal += c.qte * c.prix;
                }
                console.log("Have Reduct Montant somme prix cas update", this.montantTotal);
                this.montantNetaPayer = this.montantTotal - this.reduction;
                //this.commande.avance = (this.montantTotal * 60) / 100;
            }
            else {
                for (let c of this.tabCommande) {
                    this.montantTotal += c.qte * c.prix;
                }
                this.montantNetaPayer = this.montantTotal - this.reduction;
                //this.commande.avance = (this.montantTotal * 60) / 100;
            }
        }
        else {
            // Cas update sinon ajout
            this.montantTotal = 0;
            this.montantNetaPayer = 0;
            if (this.route.snapshot.paramMap.get("id")) {
                for (let c of this.tabCommande) {
                    this.montantTotal += c.qte * c.prix;
                }
                console.log("Doesn't have reduct Montant somme prix cas update", this.montantTotal);
                this.montantTotalTemp = this.montantTotal;
                this.montantNetaPayer = this.montantTotal;
                //this.commande.avance = (this.montantTotal * 60) / 100;
            }
            else {
                for (let c of this.tabCommande) {
                    this.montantTotal += c.qte * c.prix;
                }
                //this.montantTotal = this.montantTotalTemp;
                this.montantNetaPayer = this.montantTotal;
                //this.montantNetaPayer = this.montantTotalTempUpdate;
                //this.commande.avance = (this.montantTotal * 60) / 100;
            }
        }
    }
    /**End AddReduction */
    /**
     * Cette fonction permet d'ajouter une commande dans le tableau de commande
     */
    AddCommandeOnTab() {
        this.tabCommande.push({
            produit: this.selected2.libelle,
            image: this.selected2.image,
            categorie: this.selected.libelle,
            commentaire: this.detailcommande.commentaire,
            qte: this.detailcommande.qte,
            prix: this.selected2.prixUnitaire,
            produitObject: this.selected2,
        });
        this.montantTotal = 0;
        this.montantNetaPayer = 0;
        for (let c of this.tabCommande) {
            this.montantTotal += c.qte * c.prix;
        }
        this.montantTotalTempUpdate = this.montantTotal;
        //this.montantNetaPayer = this.montantTotal;
        this.clearChamp();
        // Cas Udpdate
        if (this.reduction) {
            this.montantNetaPayer = this.montantTotal - this.reduction;
            //this.commande.avance = (this.montantTotal * 60) / 100;
        }
        else {
            this.montantTotal = this.montantTotalTempUpdate;
            this.montantNetaPayer = this.montantTotal;
            //this.commande.avance = (this.montantTotal * 60) / 100;
        }
    }
    /**End AddCommandeOnTab */
    /**Cette fonction permet de vider les champs
     * après l'appel de la fonction AddCommandeOnTab
     */
    clearChamp() {
        this.detailcommande.commentaire = "";
        this.detailcommande.qte = 0;
        this.selected = new _models_Categorie_model__WEBPACK_IMPORTED_MODULE_9__["Categorie"]();
        this.selected2 = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_11__["Produit"]();
    }
    /**End clearChamp */
    /**La première LoadTabCommandeOnUpdate fonction permet de charger la commande
     * puis de le passer à la deuxième fonction
     * LoadTabDetailsCommande qui
     * permet de charger les détails de la commande
     * d'un client dans le tableau de commande
     * lors de l'update tout en recalculant
     * le montantTotal,le montantNetàpayer avec la reduction
     */
    LoadTabCommandeOnUpdate() {
        this.tabCommande.length = 0;
        this.commandeService
            .getOneData(this.route.snapshot.paramMap.get("id"))
            .subscribe((CommandeData) => {
            console.log(CommandeData);
            this.commande = CommandeData;
            this.LoadTabDetailsCommande(CommandeData);
        });
    }
    LoadTabDetailsCommande(DataCommande) {
        console.log(DataCommande);
        for (let details of DataCommande.details_commandes) {
            this.tabCommande.push({
                produit: details.produit.libelle,
                image: details.produit.image,
                categorie: details.produit.categorie.libelle,
                commentaire: details.commentaire,
                qte: details.qte,
                prix: details.produit.prixUnitaire,
                produitObject: details.produit,
                IdDetailCommande: details.id,
            });
        }
        //this.montantTotal = DataCommande.montant;
        this.montantTotal = 0;
        for (let c of this.tabCommande) {
            this.montantTotal += c.qte * c.prix;
        }
        this.montantTotalTempUpdate = this.montantTotal;
        //this.montantNetaPayer = this.montantTotal;
        this.clearChamp();
        // Cas Udpdate
        if (this.reduction) {
            this.montantNetaPayer = this.montantTotal - this.reduction;
            //this.commande.avance = (this.montantTotal * 60) / 100;
        }
        else {
            //New Change
            this.montantTva = ((this.montantTotalTempUpdate + this.LivraisonAmount) / 100) * 18;
            this.montantTotal = this.montantTotalTempUpdate + this.LivraisonAmount + this.montantTva;
            this.montantNetaPayer = this.montantTotal - this.CommandeUpdate.avance;
            //Last Change
            //this.montantTotal = this.montantTotalTempUpdate;
            // this.montantNetaPayer = this.montantTotal
        }
    }
    /**End LoadTabCommande */
    /**Cette fonction insertDetailCommande permet d'insérer
     * de nouveaux produits dans la commande en
     * cours lors de l'update d'une commande
     */
    insertDetailCommande() {
        this.detailcommande.produit = this.selected2;
        this.detailcommande.commande = this.CommandeUpdate;
        //this.detailcommande.commande =
        console.log("InsertingDetailCommande", this.detailcommande);
        this.detailscommandeService
            .insertData(this.detailcommande)
            .subscribe((DetailCommandeCreated) => {
            console.log("DetailCommandeCreated", DetailCommandeCreated);
            this.LoadTabCommandeOnUpdate();
            this.clearChamp();
        });
    }
    /**End insertDetailCommande */
    /**Cette fonction deleteDetailCommande permet
     * de supprimer ce détails(produits) de
     * la commande
     */
    deleteDetailCommande(id) {
        this.detailscommandeService.deleteData(id).subscribe(() => {
            console.log("Détails supprimer de la commande");
            this.LoadTabCommandeOnUpdate();
        });
    }
    /**End insertDetailCommande */
    /**Cette fonction insertData permet d'insérer
     * une commande avec ses détails et
     * de faire aussi l'update d'une commande
     */
    insertData() {
        if (this.route.snapshot.paramMap.get("id")) {
            const date = new Date(this.commande.dateLiv).toLocaleDateString();
            this.commande.dateLivFormat = date;
            this.montantTva = ((this.montantTotal + this.LivraisonAmount) / 100) * 18;
            this.commande.montant = this.montantTotal + this.LivraisonAmount + this.montantTva;
            //this.commande.montant = this.montantTotal;
            this.commande.reduction = this.reduction;
            if (this.avance == null) {
                this.commande.avance = this.commande.montant;
                this.paiement.datePaiement = new Date();
                this.paiement.type = 'Complet';
                this.paiement.montant = this.commande.montant;
            }
            else {
                this.commande.avance = this.avance;
                this.paiement.datePaiement = new Date();
                this.paiement.type = 'Avance';
                this.paiement.montant = this.avance;
            }
            // for(let c of this.adresses){
            //   this.clientData.adresses = [];
            //   c.client = this.clientData;
            // }
            // console.log("Adresses", this.adresses);
            // this.commande.client.adresses = [];
            // this.commande.client.adresses = this.adresses;
            // console.log("Client", this.commande.client);
            this.commande.client.adresses = [];
            this.commandeService
                .updateData(this.route.snapshot.paramMap.get("id"), this.commande)
                .subscribe(() => {
                console.log("Update avec succes");
                for (let a of this.adresses) {
                    console.log(a);
                    this.adresse = a;
                    this.adresse.client = this.clientData;
                    console.log('Updating Adresse', this.adresse);
                    this.adresseService.updateData(this.adresse.id, this.adresse).subscribe((data) => {
                        console.log('Updated Adresse', data);
                    });
                }
                window.history.back();
            });
        }
        else {
            this.commande.id = null;
            this.commande.client = this.clientData;
            const date = new Date(this.commande.dateLiv).toLocaleDateString();
            this.commande.dateLivFormat = date;
            this.montantTva = ((this.montantTotal + this.LivraisonAmount) / 100) * 18;
            this.commande.montant = this.montantTotal + this.LivraisonAmount + this.montantTva;
            //this.commande.montant = this.montantTotal;
            if (this.reduction == null) {
                this.commande.reduction = 0.0;
            }
            else {
                this.commande.reduction = this.reduction;
            }
            this.commande.avance = 0.0;
            this.commande.etat = "En cours";
            console.log("Commande", this.commande);
            this.commandeService
                .insertData(this.commande)
                .subscribe((commandeCreated) => {
                console.log("CommandeCreated", commandeCreated);
                if (commandeCreated) {
                    this.commandeCreatedId = commandeCreated.id;
                    /*for (let c of this.tabCommande) {
                      this.detailcommande.produit = c.produitObject;
                      this.detailcommande.commande = commandeCreated;
                      this.detailcommande.qte = c.qte;
                      this.detailcommande.commentaire = c.commentaire;
                      this.detailscommandeService
                        .insertData(this.detailcommande)
                        .subscribe((DetailCommandeCreated) => {
                          console.log("DetailCommandeCreated", DetailCommandeCreated);
                        });
                      if ((i + 1) == this.tabCommande.length - 1) {
                        console.log("Dernier élément tab");
                      }
                      //console.log("Object", c);
                      // console.log("Pop Command", );
                    }*/
                    let completedCount = 0;
                    for (var i = 0; i < this.tabCommande.length; i++) {
                        this.detailcommande.produit = this.tabCommande[i].produitObject;
                        this.detailcommande.commande = commandeCreated;
                        this.detailcommande.qte = this.tabCommande[i].qte;
                        this.detailcommande.commentaire = this.tabCommande[i].commentaire;
                        this.detailscommandeService
                            .insertData(this.detailcommande)
                            .subscribe((DetailCommandeCreated) => {
                            console.log("DetailCommandeCreated", DetailCommandeCreated);
                        });
                        completedCount += 1;
                        // Do something if is the last iteration of the array
                        /*if (i + 1 == this.tabCommande.length) {
                          this.LastItemOfTabCommand = true;
                          console.log(
                            "Last iteration with item : " +
                              this.tabCommande[i].produitObject.libelle
                          );
                        }*/
                        if (completedCount === this.tabCommande.length) {
                            console.log("Boucle Complete");
                            console.log("Commande Id", this.commandeCreatedId);
                            this.paiementService
                                .insertData(this.paiement)
                                .subscribe((paiementCreated) => {
                                console.log("paiementCreated", paiementCreated);
                                if (paiementCreated) {
                                    //Creation Facture
                                    this.facture.dateFact = new Date();
                                    this.facture.commande = commandeCreated;
                                    //this.facture.numero = '1';
                                    this.facture.paiement = paiementCreated;
                                    console.log("InsertedFacture", this.facture);
                                    this.factureService
                                        .insertData(this.facture)
                                        .subscribe((factureCreated) => {
                                        console.log("factureCreated", factureCreated);
                                        //this.spinner.hide();
                                        //localStorage.removeItem("cartItem");
                                        window.history.back();
                                        /*this.router.navigateByUrl('/pages/order/'+commandeCreated.numero)
                                        .then(() => {
                                          window.location.reload();
                                        });*/
                                    });
                                }
                            });
                        }
                    }
                }
            });
        }
    }
    fetchData() {
        const promise = this.produitService.getData().toPromise();
        console.log(promise);
        promise
            .then((data) => {
            console.log("Promise resolved with: " + JSON.stringify(data));
        })
            .catch((error) => {
            console.log("Promise rejected with " + JSON.stringify(error));
        });
    }
    precedentPage() {
        window.history.back();
    }
    AlertNumberNotFound() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ title: "Ce numéro n'existe pas veuillez réessayer !!!" }).then((result) => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    CommandeAnnuler() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ title: "Commande annuler avec succés" }).then((result) => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    AlertDeleteDetailsCommande(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Êtes-vous sûr de vouloir supprimer ce produit de la commande?",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.deleteDetailCommande(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
};
CommandeUpdateComponent.ctorParameters = () => [
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] },
    { type: _services_Categorie_service__WEBPACK_IMPORTED_MODULE_8__["CategorieService"] },
    { type: _services_Produit_service__WEBPACK_IMPORTED_MODULE_10__["ProduitService"] },
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_13__["CommandeService"] },
    { type: _services_detailscommande_service__WEBPACK_IMPORTED_MODULE_14__["DetailscommandeService"] },
    { type: _services_facture_service__WEBPACK_IMPORTED_MODULE_1__["FactureService"] },
    { type: _services_paiement_service__WEBPACK_IMPORTED_MODULE_19__["PaiementService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _services_Adresse_service__WEBPACK_IMPORTED_MODULE_16__["AdresseService"] }
];
CommandeUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-commandeUpdate",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commandeUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/commande/commandeUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commandeUpdate.component.css */ "./src/app/commande/commandeUpdate.component.css")).default]
    })
], CommandeUpdateComponent);



/***/ }),

/***/ "./src/app/details-commande/details-commande.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/details-commande/details-commande.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnEtat {\n  background-color: #4CAF50;\n  margin-left: 285px;\n}\n.btnEtat span {\n  text-transform: uppercase;\n  color: white;\n}\n.btnEtat2 {\n  background-color: #d12b2b;\n  margin-left: 285px;\n}\n.btnEtat2 span {\n  text-transform: uppercase;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1jb21tYW5kZS9FOlxcTkxEIFNPRlRXQVJFXFxzdW51bWFya2V0RnJvbnQvc3JjXFxhcHBcXGRldGFpbHMtY29tbWFuZGVcXGRldGFpbHMtY29tbWFuZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMtY29tbWFuZGUvZGV0YWlscy1jb21tYW5kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRUo7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzLWNvbW1hbmRlL2RldGFpbHMtY29tbWFuZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuRXRhdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyODVweDtcclxuICAmIHNwYW57XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bkV0YXQye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTJiMmI7XHJcbiAgbWFyZ2luLWxlZnQ6IDI4NXB4O1xyXG4gICYgc3BhbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIi5idG5FdGF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgbWFyZ2luLWxlZnQ6IDI4NXB4O1xufVxuLmJ0bkV0YXQgc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bkV0YXQyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMmIyYjtcbiAgbWFyZ2luLWxlZnQ6IDI4NXB4O1xufVxuLmJ0bkV0YXQyIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/details-commande/details-commande.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/details-commande/details-commande.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCommandeComponent", function() { return DetailsCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");
/* harmony import */ var _services_detailscommande_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/detailscommande.service */ "./src/app/_services/detailscommande.service.ts");
/* harmony import */ var _services_facture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/facture.service */ "./src/app/_services/facture.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");











let DetailsCommandeComponent = class DetailsCommandeComponent {
    constructor(route, commandeService, sanitizer, dialog, detailscommandeService, spinner, factureService) {
        this.route = route;
        this.commandeService = commandeService;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.detailscommandeService = detailscommandeService;
        this.spinner = spinner;
        this.factureService = factureService;
        this.onOpenPaymentDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.detailcommande = [];
        this.factures = [];
        this.restant = null;
        this.productEmpty = "assets/img/avatars/emptyProduit.jfif";
    }
    ngOnInit() {
        if (this.route.snapshot.paramMap.get("id")) {
            this.commandeService
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((CommandeData) => {
                console.log(CommandeData);
                this.commande = CommandeData;
                this.restant = this.commande.montant - this.commande.avance;
                this.factures = this.commande.factures;
                this.detailcommande = this.commande.details_commandes;
            });
        }
    }
    SendFactureAvanceByMail(idFacture) {
        console.log(idFacture);
        this.spinner.show();
        this.factureService.sendFactureAvanceByMail(idFacture)
            .subscribe(message => {
            console.log(message);
            this.spinner.hide();
            this.AlertFactureSend();
        }, err => {
            this.spinner.hide();
            this.AlertSendFail();
        });
    }
    AlertFactureSend() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Facture envoyée avec succès !',
            footer: 'Consultez votre adresse email.',
            showConfirmButton: false,
            timer: 2000
        });
    }
    AlertSendFail() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({ title: 'Facture non envoyée vérifier votre connexion internet puis réessayer!!' }).then(result => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    openPaymentDialog(command) {
        let dialogRef = this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_9__["PaymentComponent"], {
            data: command,
            panelClass: 'payment-dialog',
        });
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(message => {
            if (message) {
                console.log(message);
                //this.getDetailsCommande();
                //this.router.navigate(['/products', product.id, product.name]);
            }
        });
    }
};
DetailsCommandeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_3__["CommandeService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _services_detailscommande_service__WEBPACK_IMPORTED_MODULE_4__["DetailscommandeService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
    { type: _services_facture_service__WEBPACK_IMPORTED_MODULE_5__["FactureService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DetailsCommandeComponent.prototype, "onOpenPaymentDialog", void 0);
DetailsCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-commande',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-commande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details-commande/details-commande.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-commande.component.scss */ "./src/app/details-commande/details-commande.component.scss")).default]
    })
], DetailsCommandeComponent);



/***/ }),

/***/ "./src/app/formulaire/formulaire.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulaire/formulaire.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-invalid{\r\n    border-color: #E63F24;\r\n}\r\n.danger{\r\n   color: #E63F24;\r\n}\r\n.hidden{\r\n    visibility: hidden;\r\n}\r\n.span{\r\n\r\n        pointer-events: none;\r\n    display: none;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYWlyZS9mb3JtdWxhaXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtHQUNHLGNBQWM7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztRQUVRLG9CQUFvQjtJQUN4QixhQUFhOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFpcmUvZm9ybXVsYWlyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWludmFsaWR7XHJcbiAgICBib3JkZXItY29sb3I6ICNFNjNGMjQ7XHJcbn1cclxuLmRhbmdlcntcclxuICAgY29sb3I6ICNFNjNGMjQ7XHJcbn1cclxuLmhpZGRlbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uc3BhbntcclxuXHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/formulaire/formulaire.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulaire/formulaire.component.ts ***!
  \****************************************************/
/*! exports provided: FormulaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireComponent", function() { return FormulaireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_personne_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/personne.service */ "./src/app/_services/personne.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let FormulaireComponent = class FormulaireComponent {
    constructor(formBuilder, personneservice) {
        this.formBuilder = formBuilder;
        this.personneservice = personneservice;
        this.submitted = false;
    }
    ngOnInit() {
        this.loadTable();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-primary");
            Panel.addClass("panel-primary");
            pageHeader.addClass("text-primary");
            buttons.removeClass().addClass("button btn-primary");
        }, 800);
        //////
    }
    loadTable() {
        this.personneservice.getAll().subscribe((data) => {
            this.personnes = data;
        });
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Êtes-vous sûr de vouloir supprimer?",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    delete(id) {
        this.personneservice.delete(id).subscribe(() => {
            this.loadTable();
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        // display form values on success
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4));
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
};
FormulaireComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_personne_service__WEBPACK_IMPORTED_MODULE_3__["PersonneService"] }
];
FormulaireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-formulaire",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formulaire.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/formulaire.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formulaire.component.css */ "./src/app/formulaire/formulaire.component.css")).default]
    })
], FormulaireComponent);



/***/ }),

/***/ "./src/app/formulaire/formulaireUpdate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/formulaire/formulaireUpdate.component.ts ***!
  \**********************************************************/
/*! exports provided: FormulaireUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaireUpdateComponent", function() { return FormulaireUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _models_personne_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/personne.model */ "./src/app/models/personne.model.ts");
/* harmony import */ var _services_personne_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/personne.service */ "./src/app/_services/personne.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FormulaireUpdateComponent = class FormulaireUpdateComponent {
    constructor(formBuilder, personneservice, route) {
        this.formBuilder = formBuilder;
        this.personneservice = personneservice;
        this.route = route;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            id: [undefined],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    ngOnInit() {
        if (this.route.snapshot.paramMap.get('id')) {
            this.personneservice.getOne(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
                console.log(data);
                this.updateForm(data);
            });
        }
        ///////
        var pageHeader = $('.content-header').find('b');
        var adminForm = $('.admin-form');
        var buttons = adminForm.find('.button');
        var Panel = adminForm.find('.panel');
        setTimeout(function () {
            adminForm.addClass('theme-primary');
            Panel.addClass('panel-primary');
            pageHeader.addClass('text-primary');
            buttons.removeClass().addClass('button btn-primary');
        }, 800);
        //////
    }
    createFromForm() {
        return Object.assign({}, new _models_personne_model__WEBPACK_IMPORTED_MODULE_3__["Personne"](), { id: this.registerForm.get(['id']).value, firstname: this.registerForm.get(['firstname']).value, title: this.registerForm.get(['title']).value, date: this.registerForm.get(['date']).value, email: this.registerForm.get(['email']).value, password: this.registerForm.get(['password']).value, acceptTerms: this.registerForm.get(['acceptTerms']).value });
    }
    updateForm(personne) {
        this.registerForm.patchValue({
            id: personne.id,
            firstname: personne.firstname,
            title: personne.title,
            date: personne.date
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        const personne = this.createFromForm();
        console.log(personne);
        if (personne.id != null) {
            this.personneservice.update(personne.id, personne).subscribe(() => {
                console.log("cool");
                this.retour();
            });
        }
        else {
            console.log(personne);
            this.personneservice.insert(personne).subscribe((data) => {
                this.retour();
            });
        }
        // display form values on success
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
    retour() {
        window.history.back();
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
        this.retour();
    }
};
FormulaireUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_personne_service__WEBPACK_IMPORTED_MODULE_4__["PersonneService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
FormulaireUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formulaire',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./FormulaireUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/formulaire/FormulaireUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formulaire.component.css */ "./src/app/formulaire/formulaire.component.css")).default]
    })
], FormulaireUpdateComponent);



/***/ }),

/***/ "./src/app/gestion-commande/gestion-commande.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/gestion-commande/gestion-commande.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlc3Rpb24tY29tbWFuZGUvZ2VzdGlvbi1jb21tYW5kZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/gestion-commande/gestion-commande.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gestion-commande/gestion-commande.component.ts ***!
  \****************************************************************/
/*! exports provided: GestionCommandeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionCommandeComponent", function() { return GestionCommandeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_Commande_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Commande.model */ "./src/app/models/Commande.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/client.service */ "./src/app/_services/client.service.ts");






let GestionCommandeComponent = class GestionCommandeComponent {
    constructor(commandeservice, clientService) {
        this.commandeservice = commandeservice;
        this.clientService = clientService;
        this.nbrecommandeEncours = 0;
        this.montantcommande = 0;
        this.montantvente = 0;
        this.nbrecommandePasser = 0;
        this.client_idTab = [];
        this.showSpinnerMail = false;
        this.p = 1;
        this.TotalVenteBoutique = 0;
        this.NbrCommandeALivrer = 0;
        this.NbrTotalCommande = 0;
        this.AllCommande = [];
        this.items = [
            { libelle: "1", jour: 1 },
            { libelle: "2" },
            { libelle: "3" },
            { libelle: "4" },
            { libelle: "5" },
            { libelle: "6" },
            { libelle: "7" },
            { libelle: "8" },
            { libelle: "9" },
            { libelle: "10" },
        ];
    }
    ngOnInit() {
        this.GetNombreClient();
        this.commande = new _models_Commande_model__WEBPACK_IMPORTED_MODULE_3__["Commande"]();
        this.LoadCommandeNow();
        this.LoadCommandePast();
        this.LoadCommandeFuture();
        this.GetStattistques();
    }
    GetStattistques() {
        this.commandeservice.getData().subscribe((data) => {
            this.AllCommande = data;
            console.log("Allcommande", this.AllCommande);
            this.TotalVenteBoutique = 0;
            this.NbrCommandeALivrer = 0;
            this.NbrTotalCommande = 0;
            for (let c of this.AllCommande) {
                this.TotalVenteBoutique += c.montant;
                if (c.etat == 'Terminé') {
                    this.NbrCommandeALivrer += 1;
                }
            }
            this.NbrTotalCommande = this.AllCommande.length;
            console.log("TotalVenteBoutique", this.TotalVenteBoutique);
        });
    }
    getValues() {
        console.log(this.selected);
        console.log(this.selected.libelle);
        this.LoadCommandeByDays();
    }
    GetNombreClient() {
        this.nbrClient = 0;
        this.clientService.getNombreClient().subscribe((nbr) => {
            this.nbrClient = nbr;
        });
    }
    LoadCommandeNow() {
        this.nbrecommandeEncours = 0;
        this.nbrecommandePasser = 0;
        this.nbrecommandeEncours = 0;
        this.commandeservice.getCommandeDateNow().subscribe((data) => {
            for (let a of data) {
                a.cocher = false;
            }
            this.commandesNow = data;
            console.log(this.commandesNow);
        });
    }
    LoadCommandePast() {
        this.commandeservice.getCommandeDatePast().subscribe((data) => {
            for (let a of data) {
                a.cocher = false;
            }
            this.commandesPast = data;
        });
    }
    LoadCommandeFuture() {
        this.commandeservice
            .getCommandeDateFuture()
            .subscribe((data) => {
            for (let a of data) {
                a.cocher = false;
            }
            this.commandesFuture = data;
            this.filterItems = this.commandesFuture;
        });
    }
    LoadCommandeByDays() {
        this.commandeservice
            .GetDelaiCommandeByDay(Number(this.selected.libelle))
            .subscribe((data) => {
            this.commandesByDays = data;
        });
    }
    GetPhoneNumber(param) {
        param.record.cocher = !param.record.cocher;
        this.client_idTab.push(param.record);
        /*if (param.record.cocher == true) {
          this.data.push(param.record);
          console.log(this.data);
        }*/
        //for(a of )
        /*if (param.record.cocher == true){
          for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].telephone === param.record.telephone ) {
              this.data.splice(i, 1);
              this.data.push(param.record);
            }/*else {
              this.data.push(param.record);
            }
          }
    
        }*/
        //console.log(this.data);
        //if()
        //}
        //if (param.record.etat == 'Terminé') {
        //this.clientPhone_number.push(param.record.telephone);
        //console.log(this.clientPhone_number);
        //}
    }
    /*  SendEmail(){
      //console.log(this.client_idTab);
      this.showSpinnerMail = true;
      this.commande.clientId_number.length = 0;
      this.commandesNow.filter((a) => {
        console.log(a);
        if (a.cocher == true) {
          //a.cocher = false;
          this.commande.clientId_number.push(a.id);
        }
        //this.commandesNow = data;
        console.log(this.commande.clientId_number);
      });
      this.commandeservice.SendMail(this.commande).subscribe(
        (res) => {
          console.log(res);
          this.commande.message = "";
          this.showSpinnerMail = false;
          this.AlertSendMailSucces();
          //window.history.back();
        },
        (err) => {
          console.log(err);
          this.showSpinnerMail = false;
          this.AlertMail();
  
  
        }
      );
  
  
    }
  
    SendEmailPast() {
      //console.log(this.client_idTab);
      this.showSpinnerMail = true;
      this.commande.clientId_number.length = 0;
      this.commandesPast.filter((a) => {
        console.log(a);
        if (a.cocher == true) {
          //a.cocher = false;
          this.commande.clientId_number.push(a.id);
        }
        //this.commandesNow = data;
        console.log(this.commandesPast);
        console.log(this.commande.clientId_number);
      });
      this.commandeservice.SendMail(this.commande).subscribe(
        (res) => {
          console.log(res);
          this.commande.message = "";
          this.showSpinnerMail = false;
          this.AlertSendMailSucces();
          //window.history.back();
        },
        (err) => {
          console.log(err);
          this.showSpinnerMail = false;
          this.AlertMail();
  
        }
      );
  
  
    }
  
    SendEmailFuture() {
      //console.log(this.client_idTab);
      this.showSpinnerMail = true;
      this.commande.clientId_number.length = 0;
      this.commandesFuture.filter((a) => {
        console.log(a);
        if (a.cocher == true) {
          //a.cocher = false;
          this.commande.clientId_number.push(a.id);
        }
        //this.commandesNow = data;
        console.log(this.commandesFuture);
        console.log(this.commande.clientId_number);
      });
      this.commandeservice.SendMail(this.commande).subscribe(
        (res) => {
          console.log(res);
          this.commande.message = "";
          this.showSpinnerMail = false;
          this.AlertSendMailSucces();
          //window.history.back();
        },
        (err) => {
          console.log(err);
          this.showSpinnerMail = false;
          this.AlertMail();
  
        }
      );
  
  
    } */
    FilterDay() {
        this.filterItems = this.commandesFuture.filter((item) => {
            return item.dayAlert.indexOf(this.selected.libelle) > -1;
        });
    }
    UpadteEtat(id, data) {
        return this.commandeservice.updateEtatCommande(id).subscribe((res) => {
            console.log(res);
            this.AlertUpdate();
            this.LoadCommandeNow();
            this.LoadCommandePast();
            this.LoadCommandeFuture();
            this.GetStattistques();
        }, (err) => {
            console.log("Update non effectué");
        });
    }
    UpadteEtatLivre(id, data) {
        return this.commandeservice.updateEtatCommandeLivre(id).subscribe((res) => {
            console.log(res);
            if (res == 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Attention cette commande n\'est encore complètement régler par le client pour être livré.',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok!',
                });
            }
            else {
                this.AlertUpdate();
                this.LoadCommandeNow();
                this.LoadCommandePast();
                this.LoadCommandeFuture();
                this.GetStattistques();
            }
        }, (err) => {
            console.log("Update non effectué");
        });
    }
    AlertUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({ title: "Etat commande modifié avec succès" }).then((result) => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    AlertMail() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Mail non envoyer veuillez réessayer ou vérifier votre connexion internet !!!",
        }).then((result) => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    AlertSendMailSucces() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({ title: "Mail envoyée avec succès !!!" }).then((result) => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
};
GestionCommandeComponent.ctorParameters = () => [
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_1__["CommandeService"] },
    { type: _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] }
];
GestionCommandeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-gestion-commande",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestion-commande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-commande/gestion-commande.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestion-commande.component.css */ "./src/app/gestion-commande/gestion-commande.component.css")).default]
    })
], GestionCommandeComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getPublicContent().subscribe(data => {
            this.content = "data";
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/listecommandeencours/listecommandeencours.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/listecommandeencours/listecommandeencours.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlY29tbWFuZGVlbmNvdXJzL2xpc3RlY29tbWFuZGVlbmNvdXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/listecommandeencours/listecommandeencours.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/listecommandeencours/listecommandeencours.component.ts ***!
  \************************************************************************/
/*! exports provided: ListecommandeencoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListecommandeencoursComponent", function() { return ListecommandeencoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let ListecommandeencoursComponent = class ListecommandeencoursComponent {
    constructor(commandeservice) {
        this.commandeservice = commandeservice;
        this.p = 1;
    }
    ngOnInit() {
        this.LoadAllCommandeEncours();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadAllCommandeEncours() {
        this.commandeservice.GetCommandeEncours().subscribe((data) => {
            this.commandes = data;
            console.log(this.commandes);
        });
    }
    UpadteEtatEnCours(id, data) {
        return this.commandeservice
            .updateEtatCommandeEncours(id)
            .subscribe(res => {
            console.log(res);
            this.AlertUpdate();
            this.LoadAllCommandeEncours();
        }, err => {
            console.log("Update non effectué");
        });
    }
    AlertUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ title: 'Etat commande modifié avec succès' }).then(result => {
            if (result.value) {
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    delete(id) {
        this.commandeservice.deleteData(id).subscribe(() => {
            this.LoadAllCommandeEncours();
        });
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({ title: 'Êtes-vous sûre de vouloir supprimer ?', showCancelButton: true }).then(result => {
            if (result.value) {
                this.delete(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
};
ListecommandeencoursComponent.ctorParameters = () => [
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_2__["CommandeService"] }
];
ListecommandeencoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listecommandeencours',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listecommandeencours.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listecommandeencours/listecommandeencours.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listecommandeencours.component.css */ "./src/app/listecommandeencours/listecommandeencours.component.css")).default]
    })
], ListecommandeencoursComponent);



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-screen-wrapper {\n  z-index: 100000;\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.loading-screen-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n/**\n  Loader: https://codepen.io/eliortabeka/pen/EXJyPP\n */\n\nsvg {\n  display: none;\n}\n\n.blobs {\n  -webkit-filter: url(#goo);\n          filter: url(#goo);\n  width: 300px;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 70px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.blobs .blob-center {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: absolute;\n  background: #475158;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.9) translate(-50%, -50%);\n          transform: scale(0.9) translate(-50%, -50%);\n  -webkit-animation: blob-grow linear 3.4s infinite;\n          animation: blob-grow linear 3.4s infinite;\n  border-radius: 50%;\n  box-shadow: 0 -10px 40px -5px #475158;\n}\n\n.blob {\n  position: absolute;\n  background: #475158;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  -webkit-animation: blobs ease-out 3.4s infinite;\n          animation: blobs ease-out 3.4s infinite;\n  -webkit-transform: scale(0.9) translate(-50%, -50%);\n          transform: scale(0.9) translate(-50%, -50%);\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n  opacity: 0;\n}\n\n.blob:nth-child(1) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\n.blob:nth-child(2) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.blob:nth-child(3) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\n.blob:nth-child(4) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\n.blob:nth-child(5) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n@-webkit-keyframes blobs {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate(calc(-330px - 50%), -50%);\n            transform: scale(0) translate(calc(-330px - 50%), -50%);\n  }\n  1% {\n    opacity: 1;\n  }\n  35%, 65% {\n    opacity: 1;\n    -webkit-transform: scale(0.9) translate(-50%, -50%);\n            transform: scale(0.9) translate(-50%, -50%);\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate(calc(330px - 50%), -50%);\n            transform: scale(0) translate(calc(330px - 50%), -50%);\n  }\n}\n\n@keyframes blobs {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate(calc(-330px - 50%), -50%);\n            transform: scale(0) translate(calc(-330px - 50%), -50%);\n  }\n  1% {\n    opacity: 1;\n  }\n  35%, 65% {\n    opacity: 1;\n    -webkit-transform: scale(0.9) translate(-50%, -50%);\n            transform: scale(0.9) translate(-50%, -50%);\n  }\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate(calc(330px - 50%), -50%);\n            transform: scale(0) translate(calc(330px - 50%), -50%);\n  }\n}\n\n@-webkit-keyframes blob-grow {\n  0%, 39% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n  40%, 42% {\n    -webkit-transform: scale(1, 0.9) translate(-50%, -50%);\n            transform: scale(1, 0.9) translate(-50%, -50%);\n  }\n  43%, 44% {\n    -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);\n            transform: scale(1.2, 1.1) translate(-50%, -50%);\n  }\n  45%, 46% {\n    -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);\n            transform: scale(1.3, 1.2) translate(-50%, -50%);\n  }\n  47%, 48% {\n    -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);\n            transform: scale(1.4, 1.3) translate(-50%, -50%);\n  }\n  52% {\n    -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);\n            transform: scale(1.5, 1.4) translate(-50%, -50%);\n  }\n  54% {\n    -webkit-transform: scale(1.7, 1.6) translate(-50%, -50%);\n            transform: scale(1.7, 1.6) translate(-50%, -50%);\n  }\n  58% {\n    -webkit-transform: scale(1.8, 1.7) translate(-50%, -50%);\n            transform: scale(1.8, 1.7) translate(-50%, -50%);\n  }\n  68%, 70% {\n    -webkit-transform: scale(1.7, 1.5) translate(-50%, -50%);\n            transform: scale(1.7, 1.5) translate(-50%, -50%);\n  }\n  78% {\n    -webkit-transform: scale(1.6, 1.4) translate(-50%, -50%);\n            transform: scale(1.6, 1.4) translate(-50%, -50%);\n  }\n  80%, 81% {\n    -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);\n            transform: scale(1.5, 1.4) translate(-50%, -50%);\n  }\n  82%, 83% {\n    -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);\n            transform: scale(1.4, 1.3) translate(-50%, -50%);\n  }\n  84%, 85% {\n    -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);\n            transform: scale(1.3, 1.2) translate(-50%, -50%);\n  }\n  86%, 87% {\n    -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);\n            transform: scale(1.2, 1.1) translate(-50%, -50%);\n  }\n  90%, 91% {\n    -webkit-transform: scale(1, 0.9) translate(-50%, -50%);\n            transform: scale(1, 0.9) translate(-50%, -50%);\n  }\n  92%, 100% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}\n\n@keyframes blob-grow {\n  0%, 39% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n  40%, 42% {\n    -webkit-transform: scale(1, 0.9) translate(-50%, -50%);\n            transform: scale(1, 0.9) translate(-50%, -50%);\n  }\n  43%, 44% {\n    -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);\n            transform: scale(1.2, 1.1) translate(-50%, -50%);\n  }\n  45%, 46% {\n    -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);\n            transform: scale(1.3, 1.2) translate(-50%, -50%);\n  }\n  47%, 48% {\n    -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);\n            transform: scale(1.4, 1.3) translate(-50%, -50%);\n  }\n  52% {\n    -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);\n            transform: scale(1.5, 1.4) translate(-50%, -50%);\n  }\n  54% {\n    -webkit-transform: scale(1.7, 1.6) translate(-50%, -50%);\n            transform: scale(1.7, 1.6) translate(-50%, -50%);\n  }\n  58% {\n    -webkit-transform: scale(1.8, 1.7) translate(-50%, -50%);\n            transform: scale(1.8, 1.7) translate(-50%, -50%);\n  }\n  68%, 70% {\n    -webkit-transform: scale(1.7, 1.5) translate(-50%, -50%);\n            transform: scale(1.7, 1.5) translate(-50%, -50%);\n  }\n  78% {\n    -webkit-transform: scale(1.6, 1.4) translate(-50%, -50%);\n            transform: scale(1.6, 1.4) translate(-50%, -50%);\n  }\n  80%, 81% {\n    -webkit-transform: scale(1.5, 1.4) translate(-50%, -50%);\n            transform: scale(1.5, 1.4) translate(-50%, -50%);\n  }\n  82%, 83% {\n    -webkit-transform: scale(1.4, 1.3) translate(-50%, -50%);\n            transform: scale(1.4, 1.3) translate(-50%, -50%);\n  }\n  84%, 85% {\n    -webkit-transform: scale(1.3, 1.2) translate(-50%, -50%);\n            transform: scale(1.3, 1.2) translate(-50%, -50%);\n  }\n  86%, 87% {\n    -webkit-transform: scale(1.2, 1.1) translate(-50%, -50%);\n            transform: scale(1.2, 1.1) translate(-50%, -50%);\n  }\n  90%, 91% {\n    -webkit-transform: scale(1, 0.9) translate(-50%, -50%);\n            transform: scale(1, 0.9) translate(-50%, -50%);\n  }\n  92%, 100% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zcGlubmVyL0U6XFxOTEQgU09GVFdBUkVcXHN1bnVtYXJrZXRGcm9udC9zcmNcXGFwcFxcbG9hZGluZy1zcGlubmVyXFxsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDRjs7QURDQTs7RUFBQTs7QUFHQTtFQUNDLGFBQUE7QUNFRDs7QURJQTtFQUNDLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNERDs7QURJQztFQUNDLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQWhCVztFQWlCWCxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0VBSUEsa0JBQUE7RUFDQSxxQ0FBQTtBQ0xGOztBRFVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFuQ1k7RUFvQ1osUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtFQUlBLG1EQUFBO1VBQUEsMkNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsVUFBQTtBQ1ZEOztBRGNFO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQ1pIOztBRFdFO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQ1RIOztBRFFFO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQ05IOztBREtFO0VBQ0MsNkJBQUE7VUFBQSxxQkFBQTtBQ0hIOztBREVFO0VBQ0MsMkJBQUE7VUFBQSxtQkFBQTtBQ0FIOztBRFVBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsK0RBQUE7WUFBQSx1REFBQTtFQ1BBO0VEU0Q7SUFDQyxVQUFBO0VDUEE7RURTRDtJQUNDLFVBQUE7SUFDQSxtREFBQTtZQUFBLDJDQUFBO0VDUEE7RURTRDtJQUNDLFVBQUE7RUNQQTtFRFNEO0lBQ0MsVUFBQTtJQUNBLDhEQUFBO1lBQUEsc0RBQUE7RUNQQTtBQUNGOztBRFhBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsK0RBQUE7WUFBQSx1REFBQTtFQ1BBO0VEU0Q7SUFDQyxVQUFBO0VDUEE7RURTRDtJQUNDLFVBQUE7SUFDQSxtREFBQTtZQUFBLDJDQUFBO0VDUEE7RURTRDtJQUNDLFVBQUE7RUNQQTtFRFNEO0lBQ0MsVUFBQTtJQUNBLDhEQUFBO1lBQUEsc0RBQUE7RUNQQTtBQUNGOztBRFVBO0VBQ0M7SUFDQyxpREFBQTtZQUFBLHlDQUFBO0VDUkE7RURVRDtJQUNDLHNEQUFBO1lBQUEsOENBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msc0RBQUE7WUFBQSw4Q0FBQTtFQ1JBO0VEVUQ7SUFDQyxpREFBQTtZQUFBLHlDQUFBO0VDUkE7QUFDRjs7QUR4Q0E7RUFDQztJQUNDLGlEQUFBO1lBQUEseUNBQUE7RUNSQTtFRFVEO0lBQ0Msc0RBQUE7WUFBQSw4Q0FBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyx3REFBQTtZQUFBLGdEQUFBO0VDUkE7RURVRDtJQUNDLHdEQUFBO1lBQUEsZ0RBQUE7RUNSQTtFRFVEO0lBQ0Msd0RBQUE7WUFBQSxnREFBQTtFQ1JBO0VEVUQ7SUFDQyxzREFBQTtZQUFBLDhDQUFBO0VDUkE7RURVRDtJQUNDLGlEQUFBO1lBQUEseUNBQUE7RUNSQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNjcmVlbi13cmFwcGVyIHtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNjcmVlbi1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi8qKlxyXG4gIExvYWRlcjogaHR0cHM6Ly9jb2RlcGVuLmlvL2VsaW9ydGFiZWthL3Blbi9FWEp5UFBcclxuICovXHJcbnN2ZyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuJGJvbGItY29sb3I6ICM0NzUxNTg7XHJcblxyXG4vLyBMb2FkZXJcclxuLmJsb2JzIHtcclxuXHRmaWx0ZXI6IHVybCgjZ29vKTtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiA3MHB4O1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblxyXG5cdC8vIEJsb2IgY2VudGVyIGl0ZW1cclxuXHQuYmxvYi1jZW50ZXIge1xyXG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJhY2tncm91bmQ6ICRib2xiLWNvbG9yO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSguOSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0YW5pbWF0aW9uOiBibG9iLWdyb3dcclxuXHRcdFx0bGluZWFyXHJcblx0XHRcdDMuNHNcclxuXHRcdFx0aW5maW5pdGU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRib3gtc2hhZG93OiAwIC0xMHB4IDQwcHggLTVweCAkYm9sYi1jb2xvcjtcclxuXHR9XHJcbn1cclxuXHJcbi8vIEJsb2IgaXRlbVxyXG4uYmxvYiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJhY2tncm91bmQ6ICRib2xiLWNvbG9yO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGFuaW1hdGlvbjogYmxvYnNcclxuXHRcdGVhc2Utb3V0XHJcblx0XHQzLjRzXHJcblx0XHRpbmZpbml0ZTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC45KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cclxuXHQvLyBTZXQgYW5pbWF0aW9uIGRlbGF5IGZvciBlYWNoIG9mIHR5cGVcclxuXHRAZm9yICRpIGZyb20gMSB0byA2IHtcclxuXHRcdCY6bnRoLWNoaWxkKCN7JGl9KSB7XHJcblx0XHRcdGFuaW1hdGlvbi1kZWxheTogJGkgKiAwLjIgKyBzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gS2V5ZnJhbWVzIHZhcmlhYmxlc1xyXG4kbGVmdDogY2FsYygtMzMwcHggLSA1MCUpO1xyXG4kcmlnaHQ6IGNhbGMoMzMwcHggLSA1MCUpO1xyXG5cclxuLy8gS2V5ZnJhbWVzXHJcbkBrZXlmcmFtZXMgYmxvYnMge1xyXG5cdDAlIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgkbGVmdCwgLTUwJSk7XHJcblx0fVxyXG5cdDElIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdDM1JSw2NSUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoLjkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0OTklIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKCRyaWdodCwgLTUwJSk7XHJcblx0fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsb2ItZ3JvdyB7XHJcblx0MCUsICAzOSUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG5cdDQwJSwgNDIlIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSwgLjkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0NDMlLCA0NCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ0NSUsIDQ2JSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4yKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG5cdDQ3JSwgNDglIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS40LCAxLjMpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0NTIle1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ1NCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjcsIDEuNikgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ1OCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjgsIDEuNykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ2OCUsIDcwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNywgMS41KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG5cdDc4JSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNiwgMS40KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG5cdDgwJSwgODElIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjQpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0ODIlLCA4MyUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjQsIDEuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ4NCUsIDg1JSB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4yKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG5cdDg2JSwgODclIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0OTAlLCA5MSUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLCAuOSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdH1cclxuXHQ5MiUsIDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0fVxyXG59XHJcbiIsIi5sb2FkaW5nLXNjcmVlbi13cmFwcGVyIHtcbiAgei1pbmRleDogMTAwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2FkaW5nLXNjcmVlbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLyoqXG4gIExvYWRlcjogaHR0cHM6Ly9jb2RlcGVuLmlvL2VsaW9ydGFiZWthL3Blbi9FWEp5UFBcbiAqL1xuc3ZnIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJsb2JzIHtcbiAgZmlsdGVyOiB1cmwoI2dvbyk7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLmJsb2JzIC5ibG9iLWNlbnRlciB7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzQ3NTE1ODtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogYmxvYi1ncm93IGxpbmVhciAzLjRzIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgLTEwcHggNDBweCAtNXB4ICM0NzUxNTg7XG59XG5cbi5ibG9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjNDc1MTU4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogYmxvYnMgZWFzZS1vdXQgMy40cyBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcbiAgb3BhY2l0eTogMDtcbn1cbi5ibG9iOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cbi5ibG9iOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cbi5ibG9iOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbi5ibG9iOm50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cbi5ibG9iOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbkBrZXlmcmFtZXMgYmxvYnMge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZShjYWxjKC0zMzBweCAtIDUwJSksIC01MCUpO1xuICB9XG4gIDElIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDM1JSwgNjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgOTklIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoY2FsYygzMzBweCAtIDUwJSksIC01MCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsb2ItZ3JvdyB7XG4gIDAlLCAzOSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDQwJSwgNDIlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDAuOSkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDQzJSwgNDQlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4xKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgNDUlLCA0NiUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjIpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICA0NyUsIDQ4JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQsIDEuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDUyJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDU0JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcsIDEuNikgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDU4JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgsIDEuNykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDY4JSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNywgMS41KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgNzglIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNiwgMS40KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgODAlLCA4MSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjQpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICA4MiUsIDgzJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQsIDEuMykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIDg0JSwgODUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4yKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgODYlLCA4NyUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjEpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICA5MCUsIDkxJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwLjkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICA5MiUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-spinner/loading-spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/loading-spinner/loading-spinner.component.scss")).default]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.items = ["Babs", "Adama"];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles[0].name;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/marque/marque-update/marque-update.component.css":
/*!******************************************************************!*\
  !*** ./src/app/marque/marque-update/marque-update.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcnF1ZS9tYXJxdWUtdXBkYXRlL21hcnF1ZS11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/marque/marque-update/marque-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/marque/marque-update/marque-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: MarqueUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueUpdateComponent", function() { return MarqueUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_Marque_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/Marque.model */ "./src/app/models/Marque.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_marque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/marque.service */ "./src/app/_services/marque.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let MarqueUpdateComponent = class MarqueUpdateComponent {
    constructor(route, marqueService) {
        this.route = route;
        this.marqueService = marqueService;
        this.form = {};
        this.updateCase = false;
    }
    ngOnInit() {
        this.marque = new _models_Marque_model__WEBPACK_IMPORTED_MODULE_1__["Marque"]();
        if (this.route.snapshot.paramMap.get("id")) {
            this.marqueService
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                console.log(data);
                this.marque = data;
                this.updateForm(this.marque);
            });
        }
        else {
            this.updateCase = true;
            this.marque = new _models_Marque_model__WEBPACK_IMPORTED_MODULE_1__["Marque"]();
            console.log(this.updateCase);
        }
    }
    updateForm(marque) {
        this.form.id = marque.id;
        this.form.marqueLib = marque.marqueLib;
    }
    onSubmit() {
        if (this.route.snapshot.paramMap.get("id")) {
            console.log("Form", this.form);
            this.marque = this.form;
            this.marqueService.updateData(this.marque.id, this.marque).subscribe((data) => {
                console.log("Updated man!!");
                console.log(data);
                this.retour();
            });
        }
        else {
            this.marque = this.form;
            console.log("Marque", this.marque);
            this.marqueService.insertData(this.marque).subscribe((data) => {
                console.log(data);
                this.retour();
                this.AlertSaveSucces();
            }, (err) => {
                this.AlertSaveFailed();
                //this.errorMessage = err.error.message;
            });
        }
    }
    retour() {
        window.history.back();
    }
    AlertSaveSucces() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'success',
            title: 'Marque enregistrée avec succès',
            showConfirmButton: true,
        });
    }
    AlertSaveFailed() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            icon: 'warning',
            title: 'Marque non enregistrée vérifier votre connexion internet puis réessayer !!',
            showConfirmButton: true,
        });
    }
};
MarqueUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_marque_service__WEBPACK_IMPORTED_MODULE_4__["MarqueService"] }
];
MarqueUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-marque-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marque-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque-update/marque-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marque-update.component.css */ "./src/app/marque/marque-update/marque-update.component.css")).default]
    })
], MarqueUpdateComponent);



/***/ }),

/***/ "./src/app/marque/marque.component.css":
/*!*********************************************!*\
  !*** ./src/app/marque/marque.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcnF1ZS9tYXJxdWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/marque/marque.component.ts":
/*!********************************************!*\
  !*** ./src/app/marque/marque.component.ts ***!
  \********************************************/
/*! exports provided: MarqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueComponent", function() { return MarqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");




let MarqueComponent = class MarqueComponent {
    constructor(marqueservice) {
        this.marqueservice = marqueservice;
        this.p = 1;
    }
    ngOnInit() {
        this.LoadTableMarque();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadTableMarque() {
        this.marqueservice.getData().subscribe((data) => {
            console.log(data);
            this.marques = data;
            console.log(this.marques);
        });
    }
    delete(id) {
        this.marqueservice.deleteData(id).subscribe(() => {
            this.LoadTableMarque();
        });
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Suppression',
            text: "Êtes-vous sûr de vouloir supprimer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer!',
            cancelButtonText: 'Non, annuler !'
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Supprimé!', 'Supprimé avec succès', 'success');
            }
            else {
            }
        });
    }
};
MarqueComponent.ctorParameters = () => [
    { type: _services_marque_service__WEBPACK_IMPORTED_MODULE_3__["MarqueService"] }
];
MarqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marque',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marque.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/marque/marque.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marque.component.css */ "./src/app/marque/marque.component.css")).default]
    })
], MarqueComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");












































let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_43__["FormsModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], DemoMaterialModule);



/***/ }),

/***/ "./src/app/models/Adresse.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Adresse.model.ts ***!
  \*****************************************/
/*! exports provided: Adresse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adresse", function() { return Adresse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Adresse {
    constructor(id, libelle, ville, region, etat, encours, client) {
        this.id = id;
        this.libelle = libelle;
        this.ville = ville;
        this.region = region;
        this.etat = etat;
        this.encours = encours;
        this.client = client;
        this.etat = this.etat || false;
        this.encours = this.encours || false;
    }
}


/***/ }),

/***/ "./src/app/models/Categorie.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Categorie.model.ts ***!
  \*******************************************/
/*! exports provided: Categorie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categorie", function() { return Categorie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Categorie {
    constructor(id, libelle, etat) {
        this.id = id;
        this.libelle = libelle;
        this.etat = etat;
    }
}


/***/ }),

/***/ "./src/app/models/Commande.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Commande.model.ts ***!
  \******************************************/
/*! exports provided: Commande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commande", function() { return Commande; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Commande {
    constructor(id, numero, dateLiv, dateLivFormat, dateLivReel, dateCom, etat, dayAlert, cocher, montant, avance, reduction, codePromo, client, shippingAddress, factures, details_commandes) {
        this.id = id;
        this.numero = numero;
        this.dateLiv = dateLiv;
        this.dateLivFormat = dateLivFormat;
        this.dateLivReel = dateLivReel;
        this.dateCom = dateCom;
        this.etat = etat;
        this.dayAlert = dayAlert;
        this.cocher = cocher;
        this.montant = montant;
        this.avance = avance;
        this.reduction = reduction;
        this.codePromo = codePromo;
        this.client = client;
        this.shippingAddress = shippingAddress;
        this.factures = factures;
        this.details_commandes = details_commandes;
    }
}


/***/ }),

/***/ "./src/app/models/DetailCommande.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/DetailCommande.model.ts ***!
  \************************************************/
/*! exports provided: DetailCommande */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCommande", function() { return DetailCommande; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DetailCommande {
    constructor(id, qte, commentaire, commande, produit) {
        this.id = id;
        this.qte = qte;
        this.commentaire = commentaire;
        this.commande = commande;
        this.produit = produit;
    }
}


/***/ }),

/***/ "./src/app/models/Facture.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Facture.model.ts ***!
  \*****************************************/
/*! exports provided: Facture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facture", function() { return Facture; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Facture {
    constructor(id, numero, dateFact, commande, paiement) {
        this.id = id;
        this.numero = numero;
        this.dateFact = dateFact;
        this.commande = commande;
        this.paiement = paiement;
    }
}


/***/ }),

/***/ "./src/app/models/ImageModel.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/ImageModel.model.ts ***!
  \********************************************/
/*! exports provided: ImageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ImageModel {
    constructor(id, image, produit, def) {
        this.id = id;
        this.image = image;
        this.produit = produit;
        this.def = def;
    }
}


/***/ }),

/***/ "./src/app/models/Marque.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/Marque.model.ts ***!
  \****************************************/
/*! exports provided: Marque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marque", function() { return Marque; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Marque {
    constructor(id, marqueLib) {
        this.id = id;
        this.marqueLib = marqueLib;
    }
}


/***/ }),

/***/ "./src/app/models/Paiement.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Paiement.model.ts ***!
  \******************************************/
/*! exports provided: Paiement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paiement", function() { return Paiement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Paiement {
    constructor(id, type, datePaiement, montant, mode_paiement) {
        this.id = id;
        this.type = type;
        this.datePaiement = datePaiement;
        this.montant = montant;
        this.mode_paiement = mode_paiement;
    }
}


/***/ }),

/***/ "./src/app/models/Produit.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Produit.model.ts ***!
  \*****************************************/
/*! exports provided: Produit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produit", function() { return Produit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Produit {
    constructor(id, code, description, etat, image, libelle, quantite, promo, prixpromo, prixUnitaire, images, categorie, marque, stocks) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.etat = etat;
        this.image = image;
        this.libelle = libelle;
        this.quantite = quantite;
        this.promo = promo;
        this.prixpromo = prixpromo;
        this.prixUnitaire = prixUnitaire;
        this.images = images;
        this.categorie = categorie;
        this.marque = marque;
        this.stocks = stocks;
    }
}


/***/ }),

/***/ "./src/app/models/Stock.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/Stock.model.ts ***!
  \***************************************/
/*! exports provided: Stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Stock {
    constructor(id, etat, qteStock, qteSeuil, prixUnitaire, produit) {
        this.id = id;
        this.etat = etat;
        this.qteStock = qteStock;
        this.qteSeuil = qteSeuil;
        this.prixUnitaire = prixUnitaire;
        this.produit = produit;
    }
}


/***/ }),

/***/ "./src/app/models/client.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/client.model.ts ***!
  \****************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Client {
    constructor(id, sexe, cni, tel, etat, user, adresses) {
        this.id = id;
        this.sexe = sexe;
        this.cni = cni;
        this.tel = tel;
        this.etat = etat;
        this.user = user;
        this.adresses = adresses;
        this.etat = this.etat || false;
    }
}


/***/ }),

/***/ "./src/app/models/personne.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/personne.model.ts ***!
  \******************************************/
/*! exports provided: Personne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personne", function() { return Personne; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Personne {
    constructor(id, title, firstname, date, email, password, acceptTerms) {
        this.id = id;
        this.title = title;
        this.firstname = firstname;
        this.date = date;
        this.email = email;
        this.password = password;
        this.acceptTerms = acceptTerms;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(id, email, password, username, nom, prenom, photo, etat, role, roles) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.nom = nom;
        this.prenom = prenom;
        this.photo = photo;
        this.etat = etat;
        this.role = role;
        this.roles = roles;
        this.etat = this.etat || false;
    }
}


/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_Paiement_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Paiement.model */ "./src/app/models/Paiement.model.ts");
/* harmony import */ var _models_Facture_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Facture.model */ "./src/app/models/Facture.model.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _services_commande_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/commande.service */ "./src/app/_services/commande.service.ts");
/* harmony import */ var _services_paiement_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/paiement.service */ "./src/app/_services/paiement.service.ts");
/* harmony import */ var _services_facture_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_services/facture.service */ "./src/app/_services/facture.service.ts");
/* harmony import */ var _models_Commande_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/Commande.model */ "./src/app/models/Commande.model.ts");











let PaymentComponent = class PaymentComponent {
    constructor(dialog, router, spinner, commandeService, paimenetService, factureService, dialogRef, commande) {
        this.dialog = dialog;
        this.router = router;
        this.spinner = spinner;
        this.commandeService = commandeService;
        this.paimenetService = paimenetService;
        this.factureService = factureService;
        this.dialogRef = dialogRef;
        this.commande = commande;
        this.avance = null;
        this.restant = null;
        this.NewAvance = null;
        this.TotalAvance = null;
    }
    ngOnInit() {
        this.paiement = new _models_Paiement_model__WEBPACK_IMPORTED_MODULE_2__["Paiement"]();
        this.facture = new _models_Facture_model__WEBPACK_IMPORTED_MODULE_3__["Facture"]();
        this.TotalCommande = this.commande.montant;
        this.avance = this.commande.avance;
        this.restant = this.TotalCommande - this.avance;
    }
    getRestant() {
        this.restant = 0;
        this.restant = this.TotalCommande - this.avance - this.NewAvance;
    }
    close(message) {
        this.dialogRef.close(message);
    }
    PayAvance() {
        this.spinner.show();
        this.TotalAvance = this.avance + this.NewAvance;
        if (this.TotalCommande != this.TotalAvance) {
            this.paiement.datePaiement = new Date();
            this.paiement.type = 'Avance';
            this.paiement.montant = this.NewAvance;
        }
        else {
            this.paiement.datePaiement = new Date();
            this.paiement.type = 'Complet';
            this.paiement.montant = this.NewAvance;
        }
        console.log("tOTAL AVANCE", this.TotalAvance);
        this.commande.avance = this.TotalAvance;
        console.log("Updating Commande", this.commande);
        this.commandeService.UpdateAvance(this.commande.id, this.NewAvance)
            .subscribe((commandeUpdated) => {
            console.log("UpdateCommande", commandeUpdated);
            if (commandeUpdated) {
                this.paimenetService.insertData(this.paiement)
                    .subscribe((paiementCreated) => {
                    console.log("paiementCreated", paiementCreated);
                    if (paiementCreated) {
                        //Creation Facture
                        this.facture.dateFact = new Date();
                        this.facture.commande = this.commande;
                        //this.facture.numero = '001';
                        this.facture.paiement = paiementCreated;
                        console.log("InsertedFacture", this.facture);
                        this.factureService.insertData(this.facture)
                            .subscribe((factureCreated) => {
                            console.log("factureCreated", factureCreated);
                            this.spinner.hide();
                            this.close("Done");
                        });
                    }
                });
            }
        });
    }
};
PaymentComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _services_commande_service__WEBPACK_IMPORTED_MODULE_7__["CommandeService"] },
    { type: _services_paiement_service__WEBPACK_IMPORTED_MODULE_8__["PaiementService"] },
    { type: _services_facture_service__WEBPACK_IMPORTED_MODULE_9__["FactureService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: _models_Commande_model__WEBPACK_IMPORTED_MODULE_10__["Commande"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], PaymentComponent);



/***/ }),

/***/ "./src/app/pipes/classe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/classe.pipe.ts ***!
  \**************************************/
/*! exports provided: ClassePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassePipe", function() { return ClassePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClassePipe = class ClassePipe {
    constructor() {
        this.tabTemp = [];
    }
    transform(tabClasse, selected, selected2, selected3, selected4) {
        this.tabTemp = tabClasse;
        if (selected) {
            // if (selected.libelle !== null) {
            tabClasse = tabClasse.filter((a) => JSON.stringify(a.cycle) == JSON.stringify(selected));
            // }
        }
        if (selected2) {
            // if (selected2.libelle !== null) {
            tabClasse = tabClasse.filter((a) => a.niveau.libelle == selected2.libelle);
            // }
        }
        if (selected3) {
            tabClasse = tabClasse.filter((a) => a.serie.libelle == selected3.libelle);
        }
        if (selected4) {
            // if (selected4.libelle !== null) {
            tabClasse = tabClasse.filter((a) => a.libelle == selected4.libelle);
            //}
        }
        return tabClasse;
    }
};
ClassePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'classe'
    })
], ClassePipe);



/***/ }),

/***/ "./src/app/pipes/commande.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/commande.pipe.ts ***!
  \****************************************/
/*! exports provided: CommandePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandePipe", function() { return CommandePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommandePipe = class CommandePipe {
    transform(tabcom, mot) {
        console.log(tabcom);
        if (mot) {
            tabcom = tabcom.filter(a => a.dateCom.toLowerCase().indexOf(mot.toLowerCase()) != -1 ||
                a.dateLiv.toLowerCase().indexOf(mot.toLowerCase()) != -1 ||
                a.client.tel.toLowerCase().indexOf(mot.toLowerCase()) != -1 ||
                a.numero.toLowerCase().indexOf(mot.toLowerCase()) != -1 ||
                a.client.user.nom.toLowerCase().indexOf(mot.toLowerCase()) != -1 ||
                a.client.user.prenom.toLowerCase().indexOf(mot.toLowerCase()) != -1);
            // console.log(tabcom);
        }
        return tabcom;
    }
};
CommandePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'commande'
    })
], CommandePipe);



/***/ }),

/***/ "./src/app/produit/produit.component.css":
/*!***********************************************!*\
  !*** ./src/app/produit/produit.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1aXQvcHJvZHVpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/produit/produit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produit/produit.component.ts ***!
  \**********************************************/
/*! exports provided: ProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitComponent", function() { return ProduitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/Produit.service */ "./src/app/_services/Produit.service.ts");
/* harmony import */ var _services_Categorie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/Categorie.service */ "./src/app/_services/Categorie.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let ProduitComponent = class ProduitComponent {
    constructor(produitservice, categorieservice, sanitizer) {
        this.produitservice = produitservice;
        this.categorieservice = categorieservice;
        this.sanitizer = sanitizer;
        this.p = 1;
        this.productEmpty = "assets/img/avatars/empty-img.png";
    }
    ngOnInit() {
        this.LoadTable();
        this.getAllCategories();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadTable() {
        this.produitservice.getData().subscribe((data) => {
            this.produits = data;
            console.log(this.produits);
            for (let a of this.produits) {
                a.image = a.images.filter((b) => b.def == true)[0].image;
            }
        });
    }
    delete(id) {
        this.produitservice.deleteData(id).subscribe(() => {
            this.LoadTable();
        });
    }
    getAllCategories() {
        this.categorieservice.getData().subscribe((data) => {
            this.categories = data;
            console.log(this.categories);
        });
    }
    deleteSupprimer(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Etes-vous sûre de vouloir supprimer?",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
        /* Swal.fire({
           title: 'Êtes-vous sûr de vouloir supprimer.',
           text: "A revoir ...",
           type: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
           if (result.value) {
             this.delete(id);
             Swal.fire(
               'Supprimé!',
               'Supprimé avec succès',
               'success'
             )
           }else {
    
           }
         })*/
    }
};
ProduitComponent.ctorParameters = () => [
    { type: _services_Produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"] },
    { type: _services_Categorie_service__WEBPACK_IMPORTED_MODULE_3__["CategorieService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
ProduitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-produit",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produit.component.css */ "./src/app/produit/produit.component.css")).default]
    })
], ProduitComponent);



/***/ }),

/***/ "./src/app/produit/produitStock.component.ts":
/*!***************************************************!*\
  !*** ./src/app/produit/produitStock.component.ts ***!
  \***************************************************/
/*! exports provided: ProduitStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitStockComponent", function() { return ProduitStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_Stock_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Stock.model */ "./src/app/models/Stock.model.ts");
/* harmony import */ var _models_Produit_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Produit.model */ "./src/app/models/Produit.model.ts");
/* harmony import */ var _services_Produit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/Produit.service */ "./src/app/_services/Produit.service.ts");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/stock.service */ "./src/app/_services/stock.service.ts");







let ProduitStockComponent = class ProduitStockComponent {
    constructor(tissuservice, stockservice, route) {
        this.tissuservice = tissuservice;
        this.stockservice = stockservice;
        this.route = route;
        this.qteTotal = 0;
        this.items = [
            { id: 1, libelle: "Entree" },
            { id: 2, libelle: "Sortie" },
        ];
        this.selected = { id: 0, libelle: "" };
        this.selected1 = { id: 0 };
        this.qte = 0;
        this.tissu = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_4__["Produit"]();
    }
    getValues() {
        console.log(this.selected);
    }
    /* getValues1() {
  
      console.log(this.selected1);
      this.stock=this.stocks.filter((a)=>a.couleur_id==this.selected1.id)[0];
      this.qteTotal=this.qte+parseInt(this.stock.qtestock) ;
  
      console.log(this.stock);
  
  
    }*/
    ngOnInit() {
        const comp = this;
        this.stock = new _models_Stock_model__WEBPACK_IMPORTED_MODULE_3__["Stock"]();
        if (this.route.snapshot.paramMap.get("id")) {
            this.selected = { id: 0, libelle: "" };
            this.tissuservice
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                console.log(data);
                this.tissu = data;
                this.stockservice.getOneStock(data.id).subscribe((data) => {
                    console.log(data);
                    this.stock = data;
                });
            });
        }
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    insertData() {
        if (this.selected.id == 1) {
            console.log("papa");
            console.log(this.qte);
            console.log(this.tissu.quantite);
            this.stock.qteStock =
                parseInt(this.stock.qteStock) + parseInt(this.qte.toString());
            this.tissu.quantite =
                parseInt(this.tissu.quantite) + parseInt(this.qte.toString());
            this.tissuservice.updateData(this.tissu.id, this.tissu).subscribe(() => {
                console.log("entree");
            });
        }
        else {
            this.stock.qteStock =
                parseInt(this.stock.qteStock) - parseInt(this.qte.toString());
            this.tissu.quantite =
                parseInt(this.tissu.quantite) - parseInt(this.qte.toString());
            this.tissuservice.updateData(this.tissu.id, this.tissu).subscribe(() => {
                console.log("SORTIE");
            });
        }
        this.stockservice.updateData(this.stock.id, this.stock).subscribe(() => {
            console.log("dane lo");
            /* let inv=new InventaireModel();
            inv.qtefinal=parseInt(this.stock.qtestock)+parseInt(this.qte.toString())   ;
              inv.qteinit=this.stock.qtestock;
                inv.qtemaj=this.qte;
                inv.type=this.selected.libelle;
                inv.stock_id=this.stock.id;
                this.inventaireservice.insertData(inv).subscribe(
                  ()=>{
                    console.log("data");
                  }
                )*/
            this.precedentPage();
        });
    }
    cool() {
        console.log("dane");
        console.log(parseInt(this.stock.qteStock));
        if (this.selected.id == 1) {
            this.qteTotal =
                parseInt(this.qte.toString()) + parseInt(this.stock.qteStock);
        }
        else {
            this.qteTotal =
                parseInt(this.stock.qteStock) - parseInt(this.qte.toString());
        }
    }
    precedentPage() {
        window.history.back();
    }
    setFileData($event, d) {
        this.getBase64($event, d);
    }
    getBase64(event, d) {
        let me = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            //me.modelvalue = reader.result;
            console.log(reader.result);
            d.url = reader.result;
            console.log(d);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }
};
ProduitStockComponent.ctorParameters = () => [
    { type: _services_Produit_service__WEBPACK_IMPORTED_MODULE_5__["ProduitService"] },
    { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProduitStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tissu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produitStock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitStock.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produit.component.css */ "./src/app/produit/produit.component.css")).default]
    })
], ProduitStockComponent);



/***/ }),

/***/ "./src/app/produit/produitUpdate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/produit/produitUpdate.component.ts ***!
  \****************************************************/
/*! exports provided: ProduitUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitUpdateComponent", function() { return ProduitUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_Produit_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Produit.model */ "./src/app/models/Produit.model.ts");
/* harmony import */ var _services_Produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/Produit.service */ "./src/app/_services/Produit.service.ts");
/* harmony import */ var _services_Categorie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/Categorie.service */ "./src/app/_services/Categorie.service.ts");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/stock.service */ "./src/app/_services/stock.service.ts");
/* harmony import */ var _models_Stock_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/Stock.model */ "./src/app/models/Stock.model.ts");
/* harmony import */ var _services_Image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/Image.service */ "./src/app/_services/Image.service.ts");
/* harmony import */ var _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/ImageModel.model */ "./src/app/models/ImageModel.model.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_marque_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_services/marque.service */ "./src/app/_services/marque.service.ts");













let ProduitUpdateComponent = class ProduitUpdateComponent {
    constructor(collectionservice, categorieservice, stockservice, route, marqueService, imageservice, ng2ImgMax, sanitizer) {
        this.collectionservice = collectionservice;
        this.categorieservice = categorieservice;
        this.stockservice = stockservice;
        this.route = route;
        this.marqueService = marqueService;
        this.imageservice = imageservice;
        this.ng2ImgMax = ng2ImgMax;
        this.sanitizer = sanitizer;
        this.items = [];
        this.items2 = [];
        this.type = [];
        this.val = null;
        this.productEmpty = "assets/img/avatars/empty-img.png";
    }
    getValues() {
        console.log(this.selected);
        this.collection.categorie = this.selected;
    }
    getValues2() {
        console.log(this.selected2);
        this.collection.marque = this.selected2;
    }
    ngOnInit() {
        const comp = this;
        this.collection = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_3__["Produit"]();
        if (!this.route.snapshot.paramMap.get("id")) {
            this.collection = new _models_Produit_model__WEBPACK_IMPORTED_MODULE_3__["Produit"]();
            this.imageObject = new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"]();
            this.collection.promo = 0;
            this.collection.prixpromo = 0;
            this.collection.prixUnitaire = 0;
            this.images = [
                new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"](null, null, null, true),
                new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"](null, null, null, false),
                new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"](null, null, null, false),
                new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"](null, null, null, false),
                new _models_ImageModel_model__WEBPACK_IMPORTED_MODULE_9__["ImageModel"](null, null, null, false),
            ];
        }
        else {
            this.LoadCategories();
            this.LoadMarques();
            this.imageservice
                .getAllImage(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                this.images = data;
                console.log(this.images);
            });
            this.collectionservice
                .getOneData(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                this.collection = data;
                console.log(this.items);
                for (let a of this.items) {
                    if (a.id == this.collection.categorie.id) {
                        this.selected = a;
                    }
                }
                for (let a of this.items2) {
                    if (this.collection.marque != null) {
                        if (a.id == this.collection.marque.id) {
                            this.selected2 = a;
                        }
                    }
                    else {
                        this.selected2 = null;
                    }
                }
                console.log(this.collection);
                console.log("typevetement", this.selected);
            });
        }
        this.LoadCategories();
        this.LoadMarques();
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
    }
    LoadCategories() {
        this.categorieservice.getData().subscribe((data) => {
            this.items = data;
        });
    }
    LoadMarques() {
        this.marqueService.getData().subscribe((data) => {
            this.items2 = data;
        });
    }
    insertData() {
        if (this.route.snapshot.paramMap.get("id")) {
            console.log(this.collection);
            this.collection.image = this.images[0].image;
            this.collection.marque = this.selected2;
            console.log('Updating Produit', this.collection);
            this.collectionservice
                .updateData(this.route.snapshot.paramMap.get("id"), this.collection)
                .subscribe((data) => {
                console.log('Updated Produit', data);
                console.log("Update avec succes");
                for (let a of this.images) {
                    console.log(a);
                    this.imageObject = a;
                    this.imageObject.produit = this.collection;
                    console.log('Updating Image', this.imageObject);
                    this.imageservice.updateData(this.imageObject.id, this.imageObject).subscribe(() => {
                        //console.log('Updating Image', this.imageObject);
                        /*this.collectionservice
                          .updateData(this.route.snapshot.paramMap.get("id"), this.collection)
                          .subscribe(() => {
                            console.log("Update avec succes");
                            window.history.back();
                          });*/
                    });
                }
                window.history.back();
            });
        }
        else {
            this.collection.quantite = 0.0;
            this.collection.id = null;
            this.collection.categorie = this.selected;
            this.collection.marque = this.selected2;
            this.collection.etat = false;
            this.collection.code = "xxx";
            this.collection.image = this.images[0].image;
            console.log(this.collection);
            this.collectionservice.insertData(this.collection).subscribe(() => {
                this.collectionservice.maxproduit().subscribe((data) => {
                    this.id = data[0];
                    this.collectionservice.getOneData(data[0]).subscribe((data) => {
                        for (let a of this.images) {
                            a.produit = data;
                            this.imageservice.insertData(a).subscribe(() => {
                                console.log("cool");
                            });
                        }
                        let a = new _models_Stock_model__WEBPACK_IMPORTED_MODULE_7__["Stock"]();
                        a.etat = false;
                        a.produit = data;
                        a.qteSeuil = 0;
                        a.qteStock = 0;
                        this.stockservice.insertData(a).subscribe(() => {
                            console.log("dane");
                            window.history.back();
                        });
                    });
                });
            }, () => {
                console.log("false");
            });
        }
    }
    precedentPage() {
        window.history.back();
    }
    setFileData($event, d) {
        this.getBase64($event, d);
    }
    getBase64(event, client) {
        let me = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            client.image = reader.result;
            console.log(client);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    }
    pourcentage() {
        console.log("guiss ");
        this.collection.prixpromo =
            parseFloat(this.collection.prixUnitaire) -
                (parseFloat(this.collection.prixUnitaire) *
                    parseFloat(this.collection.promo)) /
                    100;
        console.log(this.collection.prixpromo);
    }
};
ProduitUpdateComponent.ctorParameters = () => [
    { type: _services_Produit_service__WEBPACK_IMPORTED_MODULE_4__["ProduitService"] },
    { type: _services_Categorie_service__WEBPACK_IMPORTED_MODULE_5__["CategorieService"] },
    { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_marque_service__WEBPACK_IMPORTED_MODULE_12__["MarqueService"] },
    { type: _services_Image_service__WEBPACK_IMPORTED_MODULE_8__["ImageService"] },
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_10__["Ng2ImgMaxService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }
];
ProduitUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-collectionUpdate",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produitUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produit/produitUpdate.component.html")).default,
    })
], ProduitUpdateComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/role.service */ "./src/app/_services/role.service.ts");





let RegisterComponent = class RegisterComponent {
    constructor(authService, roleService) {
        this.authService = authService;
        this.roleService = roleService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.items = ["admin", "mod", "user"];
    }
    ngOnInit() {
        /*const set1 = new Set(["admin", "mod", "user"]);
        console.log(set1);*/
        //this.loadSelectRole();
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    /*loadSelectRole(){
      this.roleService.getAll().subscribe(
        (data: Role[]) => {
          this.items = data;
          console.log(this.items);
        },
      );
    }*/
    getValues() {
        console.log("Select roles", this.form.role);
    }
    onSubmit() {
        //this.form.roles = this.s;
        //this.user = this.form;
        //this.user.roles = this.form.roles;
        console.log("Form", this.form);
        this.authService.register(this.form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/statistique/statistique.component.css":
/*!*******************************************************!*\
  !*** ./src/app/statistique/statistique.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stats{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  align-content: space-between;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGlxdWUvc3RhdGlzdGlxdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGlxdWUvc3RhdGlzdGlxdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/statistique/statistique.component.ts":
/*!******************************************************!*\
  !*** ./src/app/statistique/statistique.component.ts ***!
  \******************************************************/
/*! exports provided: StatistiqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatistiqueComponent", function() { return StatistiqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/Produit.service */ "./src/app/_services/Produit.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);




let Boost = __webpack_require__(/*! highcharts/modules/boost */ "./node_modules/highcharts/modules/boost.js");
let noData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
let More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
Boost(highcharts__WEBPACK_IMPORTED_MODULE_3__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_3__);
More(highcharts__WEBPACK_IMPORTED_MODULE_3__);
noData(highcharts__WEBPACK_IMPORTED_MODULE_3__);
let StatistiqueComponent = class StatistiqueComponent {
    constructor(produitservice) {
        this.produitservice = produitservice;
        this.itemmodel = [];
        this.selectedModel = { id: 0 };
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        //For produits vendus
        this.dataBabs = [{}];
        this.TabLibelleProduits = [];
        this.TabQteVendusProduits = [];
        //For clients
        this.dataClients = [{}];
        this.TabNomClients = [];
        this.TabQteAchetes = [];
    }
    ngOnInit() {
        this.getdixclient();
        this.dixproduitvendus();
        //this.nombreachat();
    }
    getdixclient() {
        this.produitservice.dixclient().subscribe((data) => {
            console.log(data);
            for (let d of data.slice(0, 7)) {
                //console.log("ELEMENT",d[0]);
                this.TabNomClients.push(d[0]);
                this.TabQteAchetes.push(d[1]);
            }
            this.dataClients = [{
                    name: 'Montant total achat',
                    data: this.TabQteAchetes
                }];
            this.options2 = {
                chart: {
                    type: "spline"
                },
                title: {
                    text: "Les clients qui commandent le plus"
                },
                xAxis: {
                    categories: this.TabNomClients
                },
                yAxis: {
                    title: {
                        text: "Somme"
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}:<b>{point.y:,.0f}</b> FCFA'
                },
                series: this.dataClients
            };
        });
    }
    dixproduitvendus() {
        this.produitservice.dixproduitvendus().subscribe((data) => {
            console.log(data);
            for (let d of data.slice(0, 7)) {
                //console.log("ELEMENT",d[0]);
                this.TabLibelleProduits.push(d[0]);
                this.TabQteVendusProduits.push(d[1]);
            }
            this.dataBabs = [{
                    name: 'Total vendus',
                    data: this.TabQteVendusProduits
                }];
            this.options1 = {
                chart: {
                    type: "bar"
                },
                title: {
                    text: "Les produits les plus vendus"
                },
                xAxis: {
                    categories: this.TabLibelleProduits
                },
                yAxis: {
                    title: {
                        text: "Quantité"
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}:<b>{point.y:,.0f}</b> Articles'
                },
                series: this.dataBabs
            };
        });
    }
};
StatistiqueComponent.ctorParameters = () => [
    { type: _services_Produit_service__WEBPACK_IMPORTED_MODULE_2__["ProduitService"] }
];
StatistiqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistique',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistique.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/statistique/statistique.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistique.component.css */ "./src/app/statistique/statistique.component.css")).default]
    })
], StatistiqueComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-invalid {\r\n  border-color: #E63F24;\r\n}\r\n\r\n.danger {\r\n  color: #E63F24;\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.span {\r\n\r\n  pointer-events: none;\r\n  display: none;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixhQUFhOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTYzRjI0O1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICBjb2xvcjogI0U2M0YyNDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcblxyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let UserComponent = class UserComponent {
    constructor(userService, sanitizer) {
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.avatar = "assets/img/avatars/user.png";
    }
    ngOnInit() {
        ///////
        var pageHeader = $(".content-header").find("b");
        var adminForm = $(".admin-form");
        var buttons = adminForm.find(".button");
        var Panel = adminForm.find(".panel");
        setTimeout(function () {
            adminForm.addClass("theme-success");
            Panel.addClass("panel-success");
            pageHeader.addClass("text-success");
            buttons.removeClass().addClass("button btn-success");
        }, 800);
        //////
        this.loadUserTable();
    }
    loadUserTable() {
        this.userService.getAll().subscribe((data) => {
            this.users = [];
            for (let u of data) {
                for (let r of u.roles) {
                    if (r.name != "ROLE_USER") {
                        this.users.push(u);
                        break;
                    }
                }
            }
            //this.users = data;
            for (let u of this.users) {
                u.role = [];
                for (let r of u.roles) {
                    if (r.name == "ROLE_ADMIN") {
                        u.role.push("Admin");
                    }
                    if (r.name == "ROLE_MODERATOR") {
                        u.role.push("Modérateur");
                    }
                }
            }
        });
    }
    deleteUser(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Êtes-vous sûr de vouloir supprimer?",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.delete(id);
                // handle Confirm button click
                // result.value will contain `true` or the input value
            }
            else {
                // handle dismissals
                // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
            }
        });
    }
    delete(id) {
        this.userService.delete(id).subscribe(() => {
            this.loadUserTable();
        });
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/user/userUpdate.component.css":
/*!***********************************************!*\
  !*** ./src/app/user/userUpdate.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlclVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/userUpdate.component.ts":
/*!**********************************************!*\
  !*** ./src/app/user/userUpdate.component.ts ***!
  \**********************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/role.service */ "./src/app/_services/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










let UserUpdateComponent = class UserUpdateComponent {
    constructor(formBuilder, authService, userService, roleService, route, ng2ImgMax, sanitizer) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.roleService = roleService;
        this.route = route;
        this.ng2ImgMax = ng2ImgMax;
        this.sanitizer = sanitizer;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = "";
        this.items = ["Admin", "Modérateur"];
        this.update = false;
        this.avatar = "assets/img/avatars/user.png";
    }
    ngOnInit() {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
        if (this.route.snapshot.paramMap.get("id")) {
            this.loadRoles();
            this.update = true;
            this.userService
                .getOne(this.route.snapshot.paramMap.get("id"))
                .subscribe((data) => {
                console.log(data);
                this.user = data;
                this.user.role = [];
                for (let r of this.user.roles) {
                    if (r.name == "ROLE_ADMIN") {
                        this.user.role.push("Admin");
                    }
                    else if (r.name == "ROLE_MODERATOR") {
                        this.user.role.push("Modérateur");
                    }
                }
                //console.log("Photo", this.user.photo);
                this.photoUpdate = this.user.photo;
                this.updateForm(this.user);
            });
        }
    }
    getValues() {
        console.log("Select roles", this.form.roles);
    }
    loadRoles() {
        this.roleService.getAll().subscribe((data) => {
            this.roles = data;
            console.log("Roles", this.roles);
        });
    }
    updateForm(user) {
        this.form.id = user.id;
        this.form.nom = user.nom;
        this.form.prenom = user.prenom;
        this.form.username = user.username;
        this.form.role = user.role;
        this.form.email = user.email;
        this.form.password = user.password;
        this.form.etat = user.etat;
        this.form.photo = user.photo;
        this.form.roles = user.roles;
    }
    onSubmit() {
        if (this.user.id != null) {
            console.log("Form", this.form);
            this.user = this.form;
            this.user.roles = [];
            for (let r of this.form.role) {
                if (r == "Admin") {
                    for (let b of this.roles) {
                        if (b.name == "ROLE_ADMIN") {
                            this.user.roles.push(b);
                        }
                    }
                }
                else if (r == "Modérateur") {
                    for (let b of this.roles) {
                        if (b.name == "ROLE_MODERATOR") {
                            this.user.roles.push(b);
                        }
                    }
                }
            }
            if (this.photo == null) {
                this.user.photo = this.photoUpdate;
            }
            else {
                this.user.photo = this.photo;
            }
            this.userService.update(this.user.id, this.user).subscribe((data) => {
                console.log("Updated man!!");
                //console.log(data);
                this.retour();
            });
        }
        else {
            this.form.etat = true;
            //console.log("Form", this.form);
            this.user = this.form;
            //this.user.photo = this.photo;
            console.log("User", this.user);
            console.log("Photo", this.photo);
            this.user.photo = this.photo;
            this.user.password = "passer";
            this.authService.register(this.user).subscribe((data) => {
                console.log(data);
                this.retour();
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            }, (err) => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            });
        }
    }
    retour() {
        window.history.back();
    }
    onImageChange(event) {
        let image = event.target.files[0];
        this.ng2ImgMax.resizeImage(image, 140, 140).subscribe((result) => {
            this.uploadedImage = new File([result], result.name);
            //this.onImageChange2(this.uploadedImage);
            this.getImagePreview(this.uploadedImage);
            //this.getBase642(this.uploadedImage);
        }, (error) => {
            console.log("😢 Oh no!", error);
        });
    }
    getImagePreview(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const imagePreview = reader.result;
            this.imagePreview2 = imagePreview;
            this.user.photo = imagePreview;
            this.photo = imagePreview;
            console.log("Image resize base64", reader.result);
            console.log("Image lenght", this.imagePreview2.length);
        };
    }
};
UserUpdateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_8__["Ng2ImgMaxService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
];
UserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userUpdate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/userUpdate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userUpdate.component.css */ "./src/app/user/userUpdate.component.css")).default]
    })
], UserUpdateComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    Localurl: "http://localhost:8080/",
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\NLD SOFTWARE\sunumarketFront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map