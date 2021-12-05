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

/***/ "./src/app/CharacterObject.ts":
/*!************************************!*\
  !*** ./src/app/CharacterObject.ts ***!
  \************************************/
/*! exports provided: CharacterObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterObject", function() { return CharacterObject; });
var CharacterObject = /** @class */ (function () {
    function CharacterObject() {
    }
    return CharacterObject;
}());



/***/ }),

/***/ "./src/app/GiftObject.ts":
/*!*******************************!*\
  !*** ./src/app/GiftObject.ts ***!
  \*******************************/
/*! exports provided: GiftObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftObject", function() { return GiftObject; });
var GiftObject = /** @class */ (function () {
    function GiftObject() {
    }
    return GiftObject;
}());



/***/ }),

/***/ "./src/app/abilities/abilities.component.css":
/*!***************************************************!*\
  !*** ./src/app/abilities/abilities.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/abilities/abilities.component.html":
/*!****************************************************!*\
  !*** ./src/app/abilities/abilities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"abilityType\">\n\t<div id=\"abilityTitle\" class=\"row\">\n\t\t<h1 class=\"col-sm\">{{abilityType.name}}</h1>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-1\"></div>\n\t\t<div class=\"col-sm-10\">\n\t\t\t<div id=\"abilityDescription\" class=\"row\">\n\t\t\t\t<p class=\"col-sm\">{{abilityType.description}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-1\"></div>\n\t\t\t\t<div class=\"p-3\" *ngFor=\"let abil of abilityType.abilities\">\n\t\t\t\t\t<button type=\"button\" class=\"col-sm btn btn-secondary\" routerLink=\"/abilities/{{abilityType.name}}/{{abil}}\">{{abil}}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t<div class=\"col-sm-8\" *ngIf=\"selectedAbility\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">{{selectedAbility.name}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\" [innerHTML]=\"selectedAbility.description\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4>Levels</h4>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\"> Poor: {{selectedAbility.levels.one}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-1 \">&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm \">Average: {{selectedAbility.levels.two}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Good: {{selectedAbility.levels.three}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Exceptional: {{selectedAbility.levels.four}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Outstanding: {{selectedAbility.levels.five}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr >\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<h5>Possessed by:</h5> {{selectedAbility.possessedBy}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<h5><a (click)=\"open(content)\" routerLink=\"#\">Specialties:</a></h5> {{selectedAbility.specialties}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Specialties:</h4>\n  </div>\n  <div class=\"modal-body\">\n  \t<p>\n  \t\tWhen a character has at least four dots in an\n\t\tAttribute or Ability, she’s eligible to choose a specialty\n\t\tin the given Trait. Specialties represent a particular\n\t\tfocus and proficiency related to the character’s\n\t\tconcept or profession. For example, a sprinter might\n\t\thave the “swift-footed” specialty in Dexterity, while\n\t\ta mechanic could have the “Muscle Cars” specialty\n\t\tin Craft. Several specialty suggestions are given with\n\t\teach Trait. Whenever you roll for an action that falls\n\t\tunder your character’s specialty, any die that comes\n\t\tup “10” counts as two successes instead of just one.\n  \t</p>\n  \t<p>\n\t\tLet’s look at an example. Dr. Karel Weilbacher,\n\t\tGet of Fenris Theurge, has the Knowledge Medicine\n\t\tat four dots; his specialty is “emergency medicine.” A\n\t\tBlack Spiral Dancer has badly wounded one of his sept’s\n\t\tyoung Ahroun. Karel’s player Monica rolls Intelligence\n\t\t(three dots) + Medicine (four dots), making her dice pool\n\t\tseven. Monica rolls three 10s, one 6 and three 2s. The\n\t\troll yields a total of seven successes for Karel, who heals\n\t\tthe kid quickly enough for him to get back into the fray.\n\t</p>\n\t<p>\n\t\tPlayers should clear any specialties with the\n\t\tStoryteller, who can veto any specialties that are too broad\n\t\t(such as “guns” for Firearms or “healing” for Medicine) or\n\t\tthat focus solely on game mechanics (“dealing damage”\n\t\tfor Strength or “soak rolls” for Stamina). The player and\n\t\tStoryteller should work together to express the character’s\n\t\tconcept through specialties.\n\t</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/abilities/abilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/abilities/abilities.component.ts ***!
  \**************************************************/
/*! exports provided: AbilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesComponent", function() { return AbilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ability_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ability.service */ "./src/app/ability.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbilitiesComponent = /** @class */ (function () {
    function AbilitiesComponent(route, abilityService, location, modalService) {
        this.route = route;
        this.abilityService = abilityService;
        this.location = location;
        this.modalService = modalService;
    }
    AbilitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.abilityTypeId = params.get('type');
            _this.getAbilityType();
        });
        this.route.paramMap.subscribe(function (params) {
            _this.abilityId = params.get('id');
            if (_this.abilityId != null)
                _this.getAbility();
        });
    };
    AbilitiesComponent.prototype.open = function (content) {
        this.modalService.open(content).result;
    };
    AbilitiesComponent.prototype.getAbilityType = function () {
        var _this = this;
        this.abilityService.getAbilityType(this.abilityTypeId).subscribe(function (data) { return _this.abilityType = data; });
    };
    AbilitiesComponent.prototype.getAbility = function () {
        var _this = this;
        this.abilityService.getAbility(this.abilityTypeId, this.abilityId).subscribe(function (data) { return _this.selectedAbility = data; });
    };
    AbilitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abilities',
            template: __webpack_require__(/*! ./abilities.component.html */ "./src/app/abilities/abilities.component.html"),
            styles: [__webpack_require__(/*! ./abilities.component.css */ "./src/app/abilities/abilities.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ability_service__WEBPACK_IMPORTED_MODULE_4__["AbilityService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AbilitiesComponent);
    return AbilitiesComponent;
}());



/***/ }),

/***/ "./src/app/ability.service.ts":
/*!************************************!*\
  !*** ./src/app/ability.service.ts ***!
  \************************************/
/*! exports provided: AbilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityService", function() { return AbilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbilityService = /** @class */ (function () {
    function AbilityService(http) {
        this.http = http;
    }
    AbilityService.prototype.getAbilityType = function (type) {
        return this.http.get('./assets/Abilities/' + type + "/" + type + '.json');
    };
    AbilityService.prototype.getAbility = function (type, id) {
        return this.http.get('./assets/Abilities/' + type + "/" + id + '.json');
    };
    AbilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AbilityService);
    return AbilityService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _tribes_detail_tribes_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tribes-detail/tribes-detail.component */ "./src/app/tribes-detail/tribes-detail.component.ts");
/* harmony import */ var _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/attributes.component */ "./src/app/attributes/attributes.component.ts");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var _d10system_d10system_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d10system/d10system.component */ "./src/app/d10system/d10system.component.ts");
/* harmony import */ var _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gifts/gifts.component */ "./src/app/gifts/gifts.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _combat_types_types_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combat/types/types.component */ "./src/app/combat/types/types.component.ts");
/* harmony import */ var _combat_stages_stages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./combat/stages/stages.component */ "./src/app/combat/stages/stages.component.ts");
/* harmony import */ var _combat_maneuvers_maneuvers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./combat/maneuvers/maneuvers.component */ "./src/app/combat/maneuvers/maneuvers.component.ts");
/* harmony import */ var _combat_charts_charts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./combat/charts/charts.component */ "./src/app/combat/charts/charts.component.ts");
/* harmony import */ var _combat_health_health_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./combat/health/health.component */ "./src/app/combat/health/health.component.ts");
/* harmony import */ var _traits_renown_renown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./traits/renown/renown.component */ "./src/app/traits/renown/renown.component.ts");
/* harmony import */ var _traits_rage_rage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./traits/rage/rage.component */ "./src/app/traits/rage/rage.component.ts");
/* harmony import */ var _traits_gnosis_gnosis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./traits/gnosis/gnosis.component */ "./src/app/traits/gnosis/gnosis.component.ts");
/* harmony import */ var _traits_willpower_willpower_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./traits/willpower/willpower.component */ "./src/app/traits/willpower/willpower.component.ts");
/* harmony import */ var _breeds_breeds_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./breeds/breeds.component */ "./src/app/breeds/breeds.component.ts");
/* harmony import */ var _auspices_auspices_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auspices/auspices.component */ "./src/app/auspices/auspices.component.ts");
/* harmony import */ var _tribes_tribes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tribes/tribes.component */ "./src/app/tribes/tribes.component.ts");
/* harmony import */ var _character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./character-creation/character-creation.component */ "./src/app/character-creation/character-creation.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _combat_martial_arts_martial_arts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./combat/martial-arts/martial-arts.component */ "./src/app/combat/martial-arts/martial-arts.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'd10system', component: _d10system_d10system_component__WEBPACK_IMPORTED_MODULE_6__["D10systemComponent"] },
    { path: 'gifts', component: _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_7__["GiftsComponent"] },
    { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"] },
    { path: 'tribes/:id', component: _tribes_detail_tribes_detail_component__WEBPACK_IMPORTED_MODULE_3__["TribesDetailComponent"] },
    { path: 'attributes/:id', component: _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_4__["AttributesComponent"] },
    { path: 'abilities/:type', component: _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_5__["AbilitiesComponent"] },
    { path: 'abilities/:type/:id', component: _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_5__["AbilitiesComponent"] },
    { path: 'combat/types', component: _combat_types_types_component__WEBPACK_IMPORTED_MODULE_9__["TypesComponent"] },
    { path: 'combat/stages', component: _combat_stages_stages_component__WEBPACK_IMPORTED_MODULE_10__["StagesComponent"] },
    { path: 'combat/maneuvers', component: _combat_maneuvers_maneuvers_component__WEBPACK_IMPORTED_MODULE_11__["ManeuversComponent"] },
    { path: 'combat/martial-arts', component: _combat_martial_arts_martial_arts_component__WEBPACK_IMPORTED_MODULE_23__["MartialArtsComponent"] },
    { path: 'combat/charts', component: _combat_charts_charts_component__WEBPACK_IMPORTED_MODULE_12__["ChartsComponent"] },
    { path: 'combat/health', component: _combat_health_health_component__WEBPACK_IMPORTED_MODULE_13__["HealthComponent"] },
    { path: 'traits/renown', component: _traits_renown_renown_component__WEBPACK_IMPORTED_MODULE_14__["RenownComponent"] },
    { path: 'traits/rage', component: _traits_rage_rage_component__WEBPACK_IMPORTED_MODULE_15__["RageComponent"] },
    { path: 'traits/gnosis', component: _traits_gnosis_gnosis_component__WEBPACK_IMPORTED_MODULE_16__["GnosisComponent"] },
    { path: 'traits/willpower', component: _traits_willpower_willpower_component__WEBPACK_IMPORTED_MODULE_17__["WillpowerComponent"] },
    { path: 'breeds', component: _breeds_breeds_component__WEBPACK_IMPORTED_MODULE_18__["BreedsComponent"] },
    { path: 'auspices', component: _auspices_auspices_component__WEBPACK_IMPORTED_MODULE_19__["AuspicesComponent"] },
    { path: 'tribes', component: _tribes_tribes_component__WEBPACK_IMPORTED_MODULE_20__["TribesComponent"] },
    { path: 'creation', component: _character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_21__["CharacterCreationComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_22__["NewsComponent"] },
    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_24__["CharactersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = "@font-face {\n    font-family: werewolf;\n    src: url(\"/WerewolfRPG/assets/WEREWOLF.TTF\");\n}\n\nbody {\n\tpadding-top: 70px; \n}\n\n.main-content {\n    padding: 5rem 1.5rem;\n    text-align: center;\n}\n\n/deep/ body {\n\tbackground-image: linear-gradient(#21548d, #000000);\n\tcolor: white;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size:cover;\n}\n\n/deep/ a {\n\tcolor: rgba(255, 255, 255, 0.75);\n}\n\n/deep/ a:hover {\n\tcolor: white;\n}\n\n/deep/ h1 {\n\tfont-family: werewolf;\n}\n\n/deep/ h2 {\n\tcolor: gold;\n\tfont-family: werewolf;\n}\n\n/deep/ h3 {\n\tcolor: gold;\n\tfont-family: werewolf;\n}\n\n/deep/ h4 {\n\tcolor: gold;\n\tfont-family: werewolf;\n}\n\n/deep/ h5 {\n\tcolor: gold;\n\tfont-family: werewolf;\n}\n\n/deep/ .modal-body{\n\tbackground-color: black;\n\tcolor: white;\n}\n\n/deep/ .modal-header {\n\tbackground-color: black;\n\tcolor: white;\n}\n\n/deep/ .modal-footer {\n\tbackground-color: black;\n\tcolor: white;\n}\n\n/deep/ hr {\n\tcolor: white;\n\tbackground-color: white;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WerewolfRPG';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributes/attributes.component */ "./src/app/attributes/attributes.component.ts");
/* harmony import */ var _tribes_detail_tribes_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tribes-detail/tribes-detail.component */ "./src/app/tribes-detail/tribes-detail.component.ts");
/* harmony import */ var _d10system_d10system_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./d10system/d10system.component */ "./src/app/d10system/d10system.component.ts");
/* harmony import */ var _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gifts/gifts.component */ "./src/app/gifts/gifts.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _combat_charts_charts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./combat/charts/charts.component */ "./src/app/combat/charts/charts.component.ts");
/* harmony import */ var _combat_health_health_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./combat/health/health.component */ "./src/app/combat/health/health.component.ts");
/* harmony import */ var _combat_maneuvers_maneuvers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./combat/maneuvers/maneuvers.component */ "./src/app/combat/maneuvers/maneuvers.component.ts");
/* harmony import */ var _combat_stages_stages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./combat/stages/stages.component */ "./src/app/combat/stages/stages.component.ts");
/* harmony import */ var _combat_types_types_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./combat/types/types.component */ "./src/app/combat/types/types.component.ts");
/* harmony import */ var _traits_rage_rage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./traits/rage/rage.component */ "./src/app/traits/rage/rage.component.ts");
/* harmony import */ var _traits_gnosis_gnosis_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./traits/gnosis/gnosis.component */ "./src/app/traits/gnosis/gnosis.component.ts");
/* harmony import */ var _traits_willpower_willpower_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./traits/willpower/willpower.component */ "./src/app/traits/willpower/willpower.component.ts");
/* harmony import */ var _traits_renown_renown_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./traits/renown/renown.component */ "./src/app/traits/renown/renown.component.ts");
/* harmony import */ var _breeds_breeds_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./breeds/breeds.component */ "./src/app/breeds/breeds.component.ts");
/* harmony import */ var _auspices_auspices_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auspices/auspices.component */ "./src/app/auspices/auspices.component.ts");
/* harmony import */ var _character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./character-creation/character-creation.component */ "./src/app/character-creation/character-creation.component.ts");
/* harmony import */ var _tribes_tribes_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tribes/tribes.component */ "./src/app/tribes/tribes.component.ts");
/* harmony import */ var _gifts_detail_gifts_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./gifts-detail/gifts-detail.component */ "./src/app/gifts-detail/gifts-detail.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _combat_martial_arts_martial_arts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./combat/martial-arts/martial-arts.component */ "./src/app/combat/martial-arts/martial-arts.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./character-detail/character-detail.component */ "./src/app/character-detail/character-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__["AbilitiesComponent"],
                _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_8__["AttributesComponent"],
                _tribes_detail_tribes_detail_component__WEBPACK_IMPORTED_MODULE_9__["TribesDetailComponent"],
                _d10system_d10system_component__WEBPACK_IMPORTED_MODULE_10__["D10systemComponent"],
                _gifts_gifts_component__WEBPACK_IMPORTED_MODULE_11__["GiftsComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_13__["SettingComponent"],
                _combat_charts_charts_component__WEBPACK_IMPORTED_MODULE_15__["ChartsComponent"],
                _combat_health_health_component__WEBPACK_IMPORTED_MODULE_16__["HealthComponent"],
                _combat_maneuvers_maneuvers_component__WEBPACK_IMPORTED_MODULE_17__["ManeuversComponent"],
                _combat_stages_stages_component__WEBPACK_IMPORTED_MODULE_18__["StagesComponent"],
                _combat_types_types_component__WEBPACK_IMPORTED_MODULE_19__["TypesComponent"],
                _traits_rage_rage_component__WEBPACK_IMPORTED_MODULE_20__["RageComponent"],
                _traits_gnosis_gnosis_component__WEBPACK_IMPORTED_MODULE_21__["GnosisComponent"],
                _traits_willpower_willpower_component__WEBPACK_IMPORTED_MODULE_22__["WillpowerComponent"],
                _traits_renown_renown_component__WEBPACK_IMPORTED_MODULE_23__["RenownComponent"],
                _breeds_breeds_component__WEBPACK_IMPORTED_MODULE_24__["BreedsComponent"],
                _auspices_auspices_component__WEBPACK_IMPORTED_MODULE_25__["AuspicesComponent"],
                _character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_26__["CharacterCreationComponent"],
                _tribes_tribes_component__WEBPACK_IMPORTED_MODULE_27__["TribesComponent"],
                _gifts_detail_gifts_detail_component__WEBPACK_IMPORTED_MODULE_28__["GiftsDetailComponent"],
                _search_pipe__WEBPACK_IMPORTED_MODULE_29__["SearchPipe"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipe"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_31__["NewsComponent"],
                _combat_martial_arts_martial_arts_component__WEBPACK_IMPORTED_MODULE_32__["MartialArtsComponent"],
                _characters_characters_component__WEBPACK_IMPORTED_MODULE_33__["CharactersComponent"],
                _character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_34__["CharacterDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attribute.service.ts":
/*!**************************************!*\
  !*** ./src/app/attribute.service.ts ***!
  \**************************************/
/*! exports provided: AttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeService", function() { return AttributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeService = /** @class */ (function () {
    function AttributeService(http) {
        this.http = http;
    }
    AttributeService.prototype.getCharAttribute = function (id) {
        return this.http.get('./assets/Attributes/' + id + '.json');
    };
    AttributeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AttributeService);
    return AttributeService;
}());



/***/ }),

/***/ "./src/app/attributes/attributes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/attributes/attributes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/attributes/attributes.component.html":
/*!******************************************************!*\
  !*** ./src/app/attributes/attributes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"attri\">\n\t<div id=\"attriTitle\" class=\"row\">\n\t\t<h1 class=\"col-sm\">{{attri.name}}</h1>\n\t</div>\n\t<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<div>\n\t\t\t<h4>Description:</h4>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<p class=\"col-sm\" [innerHTML]=\"attri.description\"></p>\n\t\t</div>\n\t\t<hr >\n\t\t<div class=\"row\">\n\t\t\t<h4 class=\"col-sm\">Levels:</h4>\n\t\t</div>\n\t\t<div class=\"row text-left\">\n\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t<div class=\"col-sm-1\">&#9679;</div>\n\t\t\t<div class=\"col-sm\"> Poor: {{attri.levels.one}}</div>\n\t\t</div>\n\t\t<div class=\"row text-left\">\n\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t<div class=\"col-sm-1 \">&#9679;&#9679;</div>\n\t\t\t<div class=\"col-sm \">Average: {{attri.levels.two}}</div>\n\t\t</div>\n\t\t<div class=\"row text-left\">\n\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;</div>\n\t\t\t<div class=\"col-sm\">Good: {{attri.levels.three}}</div>\n\t\t</div>\n\t\t<div class=\"row text-left\">\n\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t<div class=\"col-sm\">Exceptional: {{attri.levels.four}}</div>\n\t\t</div>\n\t\t<div class=\"row text-left\">\n\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t<div class=\"col-sm-1\">&#9679;&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t<div class=\"col-sm\">Outstanding: {{attri.levels.five}}</div>\n\t\t</div>\n\t\t<hr>\n\t\t<div class=\"row\">\n\t\t\t<h4 class=\"col-sm\"><a (click)=\"open(content)\" routerLink=\"#\">Specialties:</a></h4>\n\t\t</div>\n\t\t<div *ngFor=\"let special of attri.specialties\">\n\t\t\t\t<p>{{special}}</p>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Specialties:</h4>\n  </div>\n  <div class=\"modal-body\">\n  \t<p>\n  \t\tWhen a character has at least four dots in an\n\t\tAttribute or Ability, she’s eligible to choose a specialty\n\t\tin the given Trait. Specialties represent a particular\n\t\tfocus and proficiency related to the character’s\n\t\tconcept or profession. For example, a sprinter might\n\t\thave the “swift-footed” specialty in Dexterity, while\n\t\ta mechanic could have the “Muscle Cars” specialty\n\t\tin Craft. Several specialty suggestions are given with\n\t\teach Trait. Whenever you roll for an action that falls\n\t\tunder your character’s specialty, any die that comes\n\t\tup “10” counts as two successes instead of just one.\n  \t</p>\n  \t<p>\n\t\tLet’s look at an example. Dr. Karel Weilbacher,\n\t\tGet of Fenris Theurge, has the Knowledge Medicine\n\t\tat four dots; his specialty is “emergency medicine.” A\n\t\tBlack Spiral Dancer has badly wounded one of his sept’s\n\t\tyoung Ahroun. Karel’s player Monica rolls Intelligence\n\t\t(three dots) + Medicine (four dots), making her dice pool\n\t\tseven. Monica rolls three 10s, one 6 and three 2s. The\n\t\troll yields a total of seven successes for Karel, who heals\n\t\tthe kid quickly enough for him to get back into the fray.\n\t</p>\n\t<p>\n\t\tPlayers should clear any specialties with the\n\t\tStoryteller, who can veto any specialties that are too broad\n\t\t(such as “guns” for Firearms or “healing” for Medicine) or\n\t\tthat focus solely on game mechanics (“dealing damage”\n\t\tfor Strength or “soak rolls” for Stamina). The player and\n\t\tStoryteller should work together to express the character’s\n\t\tconcept through specialties.\n\t</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/attributes/attributes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attributes/attributes.component.ts ***!
  \****************************************************/
/*! exports provided: AttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesComponent", function() { return AttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _attribute_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attribute.service */ "./src/app/attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttributesComponent = /** @class */ (function () {
    function AttributesComponent(route, attributeService, location, modalService) {
        this.route = route;
        this.attributeService = attributeService;
        this.location = location;
        this.modalService = modalService;
    }
    AttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.getAttr();
        });
    };
    AttributesComponent.prototype.open = function (content) {
        this.modalService.open(content).result;
    };
    AttributesComponent.prototype.getAttr = function () {
        var _this = this;
        this.attributeService.getCharAttribute(this.id).subscribe(function (data) { return _this.attri = data; });
    };
    AttributesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attributes',
            template: __webpack_require__(/*! ./attributes.component.html */ "./src/app/attributes/attributes.component.html"),
            styles: [__webpack_require__(/*! ./attributes.component.css */ "./src/app/attributes/attributes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _attribute_service__WEBPACK_IMPORTED_MODULE_4__["AttributeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AttributesComponent);
    return AttributesComponent;
}());



/***/ }),

/***/ "./src/app/auspices/auspices.component.css":
/*!*************************************************!*\
  !*** ./src/app/auspices/auspices.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#quote {\n\tfont-family: werewolf;\n\tcolor: gold;\n}"

/***/ }),

/***/ "./src/app/auspices/auspices.component.html":
/*!**************************************************!*\
  !*** ./src/app/auspices/auspices.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t\t<h1>Auspices</h1>\n\t\t\t<p> \n\t\t\t\tGaia is the Mother, but werewolves also feel a powerful \n\t\t\t\tspiritual bond to her sister Luna. Whatever else happens, \n\t\t\t\twhen the moon is in the sky, the Garou feel stronger. The \n\t\t\t\tinfluence of Luna provides a blessing at birth that guides \n\t\t\t\teach werewolf ’s spiritual path. This path, this blessing, \n\t\t\t\tis called the auspice.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tAn auspice is many things. It may influence the werewolf ’s general personality traits, attitudes and interests; it \n\t\t\t\tstrongly influences his duties in the pack. All auspices are \n\t\t\t\timportant, for no werewolf can be all things to his people. \n\t\t\t\tEach specialty strengthens the pack as a whole when they \n\t\t\t\tfocus as one. Auspice also determines the inner Rage of \n\t\t\t\tthe werewolf. Some Garou mothers try to use herbs or \n\t\t\t\tother methods to induce labor under a specific moon, \n\t\t\t\twhich is one of the reasons that Ragabash and Ahroun \n\t\t\t\tare roughly as common as the other three auspices, even \n\t\t\t\tthough the full moon and new moon appear only half as \n\t\t\t\toften as any other phase.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tEach young werewolf studies with an elder of the same \n\t\t\t\tauspice, learning particular Gifts and the role Luna has \n\t\t\t\tdecreed for him in werewolf society. Many werewolves \n\t\t\t\tintroduce themselves by auspice and tribe to one another: \n\t\t\t\t“Kolvar Irontongue, Ahroun to the Shadow Lords” says \n\t\t\t\tvolumes. Whether the werewolf was born under a waxing \n\t\t\t\tor waning moon also shows some influence on his auspice \n\t\t\t\tand temperament. The waxing moon is a sign of rising \n\t\t\t\tRage, while the waning moon hints at a cooler, more \n\t\t\t\tsomber personality. Players might take this aspect of a \n\t\t\t\tcharacter’s auspice into account when considering some \n\t\t\t\tof the character’s minor personality quirks.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tAuspice is an influence, not a law. Some werewolves \n\t\t\t\tdiscover they’re badly suited for the blessing of their birth \n\t\t\t\tmoon. Even though doing so is a direct insult to Luna, \n\t\t\t\tthey may change auspices by renouncing their former \n\t\t\t\tauspice and identity through a Rite of Renunciation. \n\t\t\t\tThis rite is a grave thing for any werewolf to consider. \n\t\t\t\tIn addition to losing any former rank and Gifts to begin \n\t\t\t\tin his new auspice at Rank 1, he’s sure to face the deep \n\t\t\t\tmistrust of others until he has proven his decision more \n\t\t\t\tthan justified, if not for the rest of his life. \n\t\t\t</p>\n\t\t\t<ngb-tabset>\n\t\t\t\t<ngb-tab title=\"Ragabash\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Ragabash: <br>The New Moon, The Trickster</h2>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<div id=\"quote\" class=\"row\">\n\t\t\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\t\t\tOh, what you’ve described is technically a plan, I suppose.<br> \n\t\t\t\t\t\t\t\tThe sort of plan a drooling, brain-dead savage might create, but still a plan. <br>\n\t\t\t\t\t\t\t\tHey, easy! I wasn’t talking about you, I was talking about the drooling, brain-dead savages massing on our border. <br>\n\t\t\t\t\t\t\t\tI’ve overheard their plans, and they were largely the same as yours. Perhaps you might like to rethink your approach? \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe Ragabash is the mythic trickster, the fool who \n\t\t\t\t\t\t\tis alternately foolish and wise. He plays the role of the \n\t\t\t\t\t\t\tcontrary, questioning tradition in order to find the wisest \n\t\t\t\t\t\t\tpath. Although the New Moon may seem disrespectful, \n\t\t\t\t\t\t\this wry humor and incisive insights are meant to serve the \n\t\t\t\t\t\t\tgreater good of the Garou. The clever Ragabash doesn’t \n\t\t\t\t\t\t\tquestion every decision — only those that need it. In the \n\t\t\t\t\t\t\tfield, the New Moon is a cunning scout and unconventional tactician, leading the enemy into ambushes and \n\t\t\t\t\t\t\tstriking at their soft underbellies when they least expect it.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWhile other auspices have fairly set roles within their \n\t\t\t\t\t\t\tsept and tribe, the Ragabash is usually left to his own \n\t\t\t\t\t\t\tdevises. He has the gift of flexibility: the opportunity \n\t\t\t\t\t\t\tto explore options usually off-limits to other Garou. His \n\t\t\t\t\t\t\tinsights are sometimes unwelcome, but frequently worthy. \n\t\t\t\t\t\t\tWhen there’s tension in the air, the Ragabash is usually \n\t\t\t\t\t\t\tthe one to lift it, even if it means putting himself at risk of \n\t\t\t\t\t\t\tviolence at the hands of a humorless Ahroun. But the New \n\t\t\t\t\t\t\tMoon frequently risks it anyway — what sort of trickster \n\t\t\t\t\t\t\twould he be if he was afraid to do something unpopular?\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Rage:</h5> 1\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5> Blur of the Milky Eye, Infectious Laughter, Liar’s Face, Open Seal, Scent of Running Water\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Stereotype:</h5>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tThe Ragabash born under the waxing \n\t\t\t\t\t\t\t\tnew moon is usually light-hearted and capricious, while \n\t\t\t\t\t\t\t\tone born under the waning new moon has a slightly more \n\t\t\t\t\t\t\t\twicked and ruthless streak. It’s a rare Ragabash indeed that \n\t\t\t\t\t\t\t\tlacks a keen wit and the capacity to find some humor in any \n\t\t\t\t\t\t\t\tsituation, no matter how bleak. Many other werewolves are \n\t\t\t\t\t\t\t\tslow to take the Ragabash seriously, though, as it’s difficult \n\t\t\t\t\t\t\t\tto tell the difference between a New Moon’s mockery that \n\t\t\t\t\t\t\t\tpoints out a grievous flaw in a plan and similar mockery \n\t\t\t\t\t\t\t\tthat simply amuses him. Sometimes a Ragabash points \n\t\t\t\t\t\t\t\tout that the emperor has no clothes — but sometimes \n\t\t\t\t\t\t\t\tthey’re the first to cry wolf, so to speak.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Theurge\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Theurge: <br>The Crescent Moon, The Seer<br></h2>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<div id=\"quote\" class=\"row\">\n\t\t\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\t\t\tI hear their voices.<br> \n\t\t\t\t\t\t\t\tThe earth grows hot with anger. <br>\n\t\t\t\t\t\t\t\tThe wind is cold with scorn. They are all around us,awaiting my call. \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe sickle-shaped crescent moon grants the gift of \n\t\t\t\t\t\t\tinsight. The Theurges are the mystics of the Garou, closer \n\t\t\t\t\t\t\tthan any to the Umbra and its denizens. They peer deep \n\t\t\t\t\t\t\tinto the shadowed recesses of the spirit world, and are \n\t\t\t\t\t\t\ttasked with dealing with the secrets they find there — \n\t\t\t\t\t\t\tone way or another.  \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome call these seers the daydreamers of the werewolves, and many do seem to be a bit detached from their brethren. They can see and hear things that others cannot, as if they live half in the world of the physical and half in the world of the spirit. For all her alien solitude, though, the Theurge holds an important place in any pack. \n\t\t\t\t\t\t\tWithout her, the werewolves would forget the spiritual \n\t\t\t\t\t\t\tside of their nature. They might wander lost and blind if \n\t\t\t\t\t\t\tthey did not have her visions and dreams to guide them.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Rage:</h5> 2\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5> Mother’s Touch, Sense Wyrm, Spirit Snare, Spirit Speech, Umbral Tether\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Stereotype:</h5> \n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t The Crescent Moons can be strange and \n\t\t\t\t\t\t\t\t enigmatic, prone to falling into the convoluted symbolic \n\t\t\t\t\t\t\t\t logic of the spirits they truck with rather than the more \n\t\t\t\t\t\t\t\t familiar logic of humanity. Those Theurges born under the \n\t\t\t\t\t\t\t\t waning moon frequently have a harsher, more adversarial \n\t\t\t\t\t\t\t\t relationship with the spirit world — they tend to excel \n\t\t\t\t\t\t\t\t at binding and forcing spirits to their will, and are more \n\t\t\t\t\t\t\t\t vicious when battling spirits. Theurges born under the \n\t\t\t\t\t\t\t\t waxing moon tend to be more generous and open with \n\t\t\t\t\t\t\t\t the spirits, charming and cajoling rather than intimidating and threatening.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Philodox\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Philodox: <br>The Half Moon, The Mediator<br></h2>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div id=\"quote\" class=\"row\">\n\t\t\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\t\t\tYou abandoned your post to aid a packmate. <br>\n\t\t\t\t\t\t\t\tTo save another Garou’s life is commendable; to think of your packmate before yourself is proper. <br>\n\t\t\t\t\t\t\t\tBut to put the sept in danger is foolish and disregards the lives of your fellows. <br>You must pay the price for that. I levy the punishment of ordeal. <br>\n\t\t\t\t\t\t\t\tPerhaps your love of your pack will encourage you to excel here and wipe the stain from your honor.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe half moon is balance and duality, standing between two worlds. The Garou is both wolf and human, flesh and spirit, fury and wisdom, savage and savant. The \n\t\t\t\t\t\t\tPhilodox embraces this duality, attempting to harness it \n\t\t\t\t\t\t\twith balance. The Half Moon acts as counselor, mediator \n\t\t\t\t\t\t\tand law-keeper to his pack. Where the Ragabash must \n\t\t\t\t\t\t\tquestion the laws, the Philodox must interpret them, \n\t\t\t\t\t\t\tfinding the wisest answer out of many. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tHalf Moons are called to judge, for better or for worse. \n\t\t\t\t\t\t\tTheirs is the task to set punishment when the Garou stray \n\t\t\t\t\t\t\tfrom the path, and to determine when a werewolf ’s actions \n\t\t\t\t\t\t\tare particularly meritorious. They are frequently leaders \n\t\t\t\t\t\t\tin times of peace, but often cede command to Ahroun or \n\t\t\t\t\t\t\tGalliards when war breaks out. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Rage:</h5> 3\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5> Fangs of Judgment, Persuasion, Resist Pain, Scent of the True Form, Truth of Gaia\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Stereotype:</h5> \n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tBuried so heavily in his role as impartial \n\t\t\t\t\t\t\tjudge and jury, the Philodox may seem aloof, even surprisingly cold-blooded for a werewolf. Those born under \n\t\t\t\t\t\t\tthe waxing Half Moon may seem unusually serene and \n\t\t\t\t\t\t\tdisaffected, their emotions only emerging when their \n\t\t\t\t\t\t\tRage comes to a boil. The waning-moon Philodox is \n\t\t\t\t\t\t\tmore incisive and judgmental, his all-seeing eye always \n\t\t\t\t\t\t\tcarefully watching his packmates and colleagues for any \n\t\t\t\t\t\t\tdeparture from the expected. The Half Moons’ opinions \n\t\t\t\t\t\t\tare somewhat feared, yet highly respected — a word of \n\t\t\t\t\t\t\tpraise or condemnation means much coming from those \n\t\t\t\t\t\t\tborn to see both sides of every struggle.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Galliard\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Galliard: <br>The Gibbous Moon, The Moon Dancer<br></h2>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div id=\"quote\" class=\"row\">\n\t\t\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\t\t\tYou should be afraid, brothers and sisters. <br>\n\t\t\t\t\t\t\t\tThis is Kyrrth’takla, Beast of a Thousand Mouths, they have awoken. <br>\n\t\t\t\t\t\t\t\tThe stories of its strength are terrifying. But I know you. I’ve been honored to fight alongside you, and I know you will not be afraid. <br>\n\t\t\t\t\t\t\t\tWhat you want is the glory of tearing this abomination apart and my brothers and sisters, we will have it!\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe Galliard sings the soul of the Garou to the near-full \n\t\t\t\t\t\t\tmoon, howling of their joys and sorrows, their triumphs \n\t\t\t\t\t\t\tand losses. She is the voice of the People, calling them \n\t\t\t\t\t\t\tto battle and inspiring them to greatness in life and in \n\t\t\t\t\t\t\tdeath. She is also a keeper of traditions, carrying the lore \n\t\t\t\t\t\t\tof tribes all the way back to the beginning. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA Galliard can rouse the pack from self-pity and suffering when their claws are needed for battle. She can speak caution to a Ragabash, draw a Theurge from his reverie, \n\t\t\t\t\t\t\tsoften the heart of a Philodox, and soothe the anger of an \n\t\t\t\t\t\t\tAhroun. The Galliard’s art and performance may take many \n\t\t\t\t\t\t\tforms — she might be a dancer, a storyteller, a musician or a \n\t\t\t\t\t\t\tbit of everything rolled into one. She may even be a leader \n\t\t\t\t\t\t\tin times of war. When the battle is done, hers is the voice \n\t\t\t\t\t\t\tfirst raised to praise the sacrifices made by the fallen, and the \n\t\t\t\t\t\t\ttriumphs of those who still live to fight again.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Rage:</h5> 4\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5> Beast Speech, Call of the Wyld, Heightened Senses, Mindspeak, Perfect Recall\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Stereotype:</h5> \n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t Where the Philodox is stoic, the Galliard \n\t\t\t\t\t\t\t is a creature of unbridled passion. The Gibbous Moon is \n\t\t\t\t\t\t\t a fiery muse, and stirs its children into great heights and \n\t\t\t\t\t\t\t depths of emotion. While all Galliards are prone to immense mirth and immense melancholy, those born under \n\t\t\t\t\t\t\t a waning moon fall more readily into dark, consuming \n\t\t\t\t\t\t\t passions; they are the tragedians of the Garou, mastering \n\t\t\t\t\t\t\t tales of doom, ruin, sacrifice and loss. Conversely, their \n\t\t\t\t\t\t\t waxing-moon cousins sing of triumph and conquest, of \n\t\t\t\t\t\t\t the pounding heart and the love of life. They tend to be \n\t\t\t\t\t\t\t the soul of their pack’s morale — when the Galliard is \n\t\t\t\t\t\t\t willing to go on, so too are all the others. \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Ahroun\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Ahroun: <br>The Full Moon, The Warrior<br></h2>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div id=\"quote\" class=\"row\">\n\t\t\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\t\t\tNo more running. <br>\n\t\t\t\t\t\t\t\tNo more surrender. <br>\n\t\t\t\t\t\t\t\tHere we stand and here we fight. <br>\n\t\t\t\t\t\t\t\tWe do not walk to Gaia’s arms tonight — we will swim there, in a river of our enemy’s blood! <br>\n\t\t\t\t\t\t\t\tLet them hear your howls and know true fear!\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe Garou’s connection to the moon is much more \n\t\t\t\t\t\t\textensive than human legends state. Every phase has its \n\t\t\t\t\t\t\tsecret, but human myth comes close to understanding the \n\t\t\t\t\t\t\ttruth in one aspect: the full moon floods the Warrior with \n\t\t\t\t\t\t\tRage. The Ahroun is the living weapon of Gaia, the lord \n\t\t\t\t\t\t\tof bloodshed. He is the warrior among a race of warriors, \n\t\t\t\t\t\t\tthe champion of a martial people. He is ever ready to kill, \n\t\t\t\t\t\t\tand to die if need be.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe Ahroun are respected, but also treated with some \n\t\t\t\t\t\t\tlevel of dread. Their killing instinct is inborn; even a Full \n\t\t\t\t\t\t\tMoon just past his First Change is more lethal than many \n\t\t\t\t\t\t\tveterans of other auspices. Their elders are few — it’s a \n\t\t\t\t\t\t\trare Ahroun that survives the countless battles that are his \n\t\t\t\t\t\t\tbirthright — but all the more terrifying for their experience. Like the Galliard, the Ahroun is an inspiring leader \n\t\t\t\t\t\t\tin time of war, but he leads with deeds and action. He is \n\t\t\t\t\t\t\tfirst into battle and last to retreat — if he ever retreats at \n\t\t\t\t\t\t\tall. In times of peace, he relinquishes command to others, \n\t\t\t\t\t\t\tbut remains ever vigilant, knowing his talent for war will \n\t\t\t\t\t\t\tbe needed again all too soon.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Rage:</h5> 5\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5>  Falling Touch, Inspiration, Pack Tactics, Razor Claws, Spur Claws\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Stereotype:</h5> \n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t The Ahroun is the archetype of the \n\t\t\t\t\t\t\t werewolf as murderous beast, though they range from \n\t\t\t\t\t\t\t unapologetic berserkers to hardened veterans tempering \n\t\t\t\t\t\t\t their Rage with discipline. Their high levels of Rage put \n\t\t\t\t\t\t\t them on the edge at all times — the Full Moon’s blessing is a hair trigger, among other things. Those closer to \n\t\t\t\t\t\t\t the waxing moon tend to exult in the glory of the war, \n\t\t\t\t\t\t\t while those closer to the waning moon are more viciously \n\t\t\t\t\t\t\t pragmatic, ruthless in their bloodthirst. Every Ahroun is \n\t\t\t\t\t\t\t a dangerous individual to be around, but when the forces \n\t\t\t\t\t\t\t of the Wyrm attack, their packmates are glad to have a \n\t\t\t\t\t\t\t Full Moon warrior at the front of the charge.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/auspices/auspices.component.ts":
/*!************************************************!*\
  !*** ./src/app/auspices/auspices.component.ts ***!
  \************************************************/
/*! exports provided: AuspicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuspicesComponent", function() { return AuspicesComponent; });
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

var AuspicesComponent = /** @class */ (function () {
    function AuspicesComponent() {
    }
    AuspicesComponent.prototype.ngOnInit = function () {
    };
    AuspicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auspices',
            template: __webpack_require__(/*! ./auspices.component.html */ "./src/app/auspices/auspices.component.html"),
            styles: [__webpack_require__(/*! ./auspices.component.css */ "./src/app/auspices/auspices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuspicesComponent);
    return AuspicesComponent;
}());



/***/ }),

/***/ "./src/app/breeds/breeds.component.css":
/*!*********************************************!*\
  !*** ./src/app/breeds/breeds.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/breeds/breeds.component.html":
/*!**********************************************!*\
  !*** ./src/app/breeds/breeds.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t\t<h1>Breeds</h1>\n\t\t\t<p> Werewolves are wolf, human, and spirit melded into \n\t\t\t\tone. But they have to come from somewhere. A werewolf ’s breed is a function of immediate parentage, never \n\t\t\t\tperfectly balanced, always slightly askew. Each Garou’s \n\t\t\t\tbreed is determined by his or her mother’s natural form. \n\t\t\t\tHomids are born to human or homid Garou mothers; \n\t\t\t\tlupus are born to wolves or lupus Garou. Only metis, the \n\t\t\t\tchildren of Garou-Garou pairings, are born in a different \n\t\t\t\tbreed form than their mother’s. The father still contributes \n\t\t\t\tsome genetics to the child, but affects breed only if he’s \n\t\t\t\ta werewolf as well. A female lupus Garou who takes on \n\t\t\t\thuman form and mates with a human man will bear wolf \n\t\t\t\tcubs or, perhaps, a lupus cub or two. \n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tFemale werewolves who bear offspring always wear their \n\t\t\t\tbreed form when giving birth. The only exceptions to this \n\t\t\t\trule are those pregnant with metis; they give birth in Crinos \n\t\t\t\tfor the sake of survival. Werewolves can be born without a \n\t\t\t\twerewolf parent as well. Some come from Kinfolk lines with \n\t\t\t\tno immediate Garou parentage. Every so often, a werewolf \n\t\t\t\tchild is born to an ordinary human or wolf mother who \n\t\t\t\tmay be many generations removed from werewolf and Kin. \n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tEach breed has its own strengths and weaknesses, and \n\t\t\t\teach group has a slightly different connection to Gaia. \n\t\t\t\tLupus have a stronger connection to the wild. Homids have \n\t\t\t\tthe experience and talent to move in human society. Even \n\t\t\t\tmetis, despite their flaws, have remarkable advantages \n\t\t\t\tthanks to having their natural form be Crinos war-form. \n\t\t\t\tBreed should inform your character both with interesting mechanics and inspiring possibilities for a backstory.\n\t\t\t</p>\n\t\t\t<ngb-tabset>\n\t\t\t\t<ngb-tab title=\"Homid\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Homid</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour mother was human, Kin or not, or a homid \n\t\t\t\t\t\t\tGarou. You grew up among humans and learned how to \n\t\t\t\t\t\t\tlive in their society. Yet something always set you apart. \n\t\t\t\t\t\t\tOther kids reacted unconsciously to the predator within \n\t\t\t\t\t\t\tyou, and to the vicious temper that you couldn’t always \n\t\t\t\t\t\t\tkeep under control. Strange dreams marked your childhood, and as you grew you remembered more and more of \n\t\t\t\t\t\t\tthem — dreams of the moon, of the taste of blood, of the \n\t\t\t\t\t\t\tsmell of war. Maybe they found you before your Change, \n\t\t\t\t\t\t\tmaybe after, but now there’s no going back. You are what \n\t\t\t\t\t\t\tyou are — you’re as much wolf as human now.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tHomid characters have no limits on what Abilities \n\t\t\t\t\t\t\tthey may purchase during character creation. They have \n\t\t\t\t\t\t\tplenty of experience with the abstract thought that’s newer \n\t\t\t\t\t\t\tto their lupus cousins, and they usually grow up surrounded \n\t\t\t\t\t\t\tby human technology. No werewolf is better able to deal \n\t\t\t\t\t\t\twith the many peculiarities of human society. In their breed \n\t\t\t\t\t\t\tform, homids can also handle silver with no Gnosis penalty.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe human-born advantages at navigating human \n\t\t\t\t\t\t\tsociety are balanced against weaker connections with the \n\t\t\t\t\t\t\twolf and spirit portions of their nature. Homids are generally \n\t\t\t\t\t\t\tless intuitive and perceptive than lupus or metis. They’re \n\t\t\t\t\t\t\tlikely to rely on what they see and hear, rather than what \n\t\t\t\t\t\t\tthey feel. Moreover, their innate spiritual connections \n\t\t\t\t\t\t\tare weaker, as represented by their low starting Gnosis. \n\t\t\t\t\t\t\tHumanity has simply grown apart from the spirit world. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Nicknames:</h5> Apes, Two-Legs, Monkeys\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Gnosis:</h5>  1\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5>Apecraft’s Blessings, City Running, Master of Fire, Persuasion, Smell of Man\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Metis\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Metis</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tBorn to two werewolves who broke the Litany for love \n\t\t\t\t\t\t\tor lust, you were a child that shouldn’t have been — but \n\t\t\t\t\t\t\tone raised among the Garou anyway. You endured a hard, \n\t\t\t\t\t\t\tthankless life, stemming both from the deformity that is \n\t\t\t\t\t\t\tyour birthright and your place at the bottom of the social \n\t\t\t\t\t\t\tladder. Many other Garou pointed to your deformity as a \n\t\t\t\t\t\t\tsign that you, like all other metis, are a living affront to \n\t\t\t\t\t\t\tGaia — others said it’s a likely side effect of the over concentration of already powerful werewolf blood. Whatever the case, you’ve survived from a hard birth, through years \n\t\t\t\t\t\t\tof living only in your Crinos body (the natural form of a \n\t\t\t\t\t\t\tmetis), to finally undergo your First Change. Whether your \n\t\t\t\t\t\t\tparents raised you — as an outcast among the sept — or \n\t\t\t\t\t\t\tlong-suffering but devoted Kinfolk did, you’re now ready \n\t\t\t\t\t\t\tto take your place in the sept. Unlike homids, you have \n\t\t\t\t\t\t\ta lot of knowledge about werewolf society already — the \n\t\t\t\t\t\t\tnobility, the brutality, the wisdom, the spite. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tMetis characters have no restrictions on Abilities. Like \n\t\t\t\t\t\t\thomids, they have early experience with abstract thought, \n\t\t\t\t\t\t\tand are often introduced to technology, education, and \n\t\t\t\t\t\t\tother human creations early on as part of being raised at \n\t\t\t\t\t\t\tthe sept. But like their wolf relatives, the metis also have \n\t\t\t\t\t\t\ta strong connection to their animal nature. They have \n\t\t\t\t\t\t\tthe strengths of both sides to some degree.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOn the other hand, all metis bear the mark of deformity. To attempt to hide this shame is considered \n\t\t\t\t\t\t\tdishonorable; to wear it openly is to attract the contempt \n\t\t\t\t\t\t\tof many other werewolves. Another flaw of this breed is \n\t\t\t\t\t\t\tthat all metis are sterile; none can sire or bear children. \n\t\t\t\t\t\t\tIt’s faintly ironic that Garou/Garou pairings are the only \n\t\t\t\t\t\t\tmatings that invariably produce werewolf offspring — and \n\t\t\t\t\t\t\tyet they are no way to ensure the future of the People.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Nicknames:</h5> Mules, Bastards, Obscenities\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Gnosis:</h5>  3\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5> Create Element, Primal Anger, Rat Head, Sense Wyrm, Shed\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Deformities:</b>\n\t\t\t\t\t\t\tEvery metis character has at least one \n\t\t\t\t\t\t\tdeformity, chosen during character creation. While some \n\t\t\t\t\t\t\tdeformities may have minor benefits, the bad always outweighs the good. Storytellers should encourage players to \n\t\t\t\t\t\t\tchoose defects that complement their character concept. \n\t\t\t\t\t\t\tSome possibilities for metis deformities include:\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Albino:</b><br>\n\t\t\t\t\t\t\tYou have no melanin in your body, in any form. Your \n\t\t\t\t\t\t\tskin is faintly pink, and it burns easily. Your hair is stark \n\t\t\t\t\t\t\twhite (not silver) and your eyes are pinkish to blood red. \n\t\t\t\t\t\t\tTake a +2 difficulty penalty on all Perception rolls if you’re \n\t\t\t\t\t\t\ttrying to operate in bright light without your protective \n\t\t\t\t\t\t\tclothing or sunglasses.<br><br>\n\t\t\t\t\t\t\t<b>Blind:</b><br>\n\t\t\t\t\t\t\tWhether you have two eyes in the right place that don’t \n\t\t\t\t\t\t\twork, or no eyes at all, you are totally blind. You fail any \n\t\t\t\t\t\t\trolls involving vision automatically. At the Storyteller’s \n\t\t\t\t\t\t\tdiscretion, though, you may take occasional bonuses with \n\t\t\t\t\t\t\tother sense groups.<br><br>\n\t\t\t\t\t\t\t<b>Fits of Madness:</b><br>\n\t\t\t\t\t\t\tMental illness plagues you on a periodic basis. Whatever your malaise, you tend to fall to pieces when you \n\t\t\t\t\t\t\tget stressed. The Storyteller may call on you to make a \n\t\t\t\t\t\t\tWillpower roll (difficulty 8) whenever situations get tough. \n\t\t\t\t\t\t\tScoring fewer than three successes means that you become \n\t\t\t\t\t\t\tnon-functional for a period of time, losing your lucidity.<br><br>\n\t\t\t\t\t\t\t<b>Hairless:</b><br>\n\t\t\t\t\t\t\tYou have no hair or fur in any of your forms. Take \n\t\t\t\t\t\t\ta +1 difficulty penalty to all Social rolls. You might be \n\t\t\t\t\t\t\table to avoid this penalty among humans when you’re in \n\t\t\t\t\t\t\tHomid form, although some people may be put off by your \n\t\t\t\t\t\t\tcomplete lack of hair even then — you don’t have body \n\t\t\t\t\t\t\thair where it’d be expected, not even eyebrows.<br><br>\n\t\t\t\t\t\t\t<b>Horns:</b><br>\n\t\t\t\t\t\t\tYou have a pair of horns in every form. They may be \n\t\t\t\t\t\t\tlike those of a ram or goat, or like a small pair of antelope-\n\t\t\t\t\t\t\tlike antlers. You might even have a single short horn like \n\t\t\t\t\t\t\ta unicorn’s. Whatever the form, you suffer a +1 difficulty \n\t\t\t\t\t\t\tpenalty to all Social rolls, and you are likely to be even \n\t\t\t\t\t\t\tmore heavily scorned by your fellow Garou. (Horns are a \n\t\t\t\t\t\t\tmark of prey, not of a predator, after all.) If you actually \n\t\t\t\t\t\t\ttry to attack with your horns (which may do Strength +1 \n\t\t\t\t\t\t\tbashing damage at best), you will likely lose some amount \n\t\t\t\t\t\t\tof Glory Renown for fighting like a prey animal instead of \n\t\t\t\t\t\t\ta Garou. Passing as a human is particularly difficult for you.<br><br>\n\t\t\t\t\t\t\t<b>Hunchback:</b><br>\n\t\t\t\t\t\t\tYou were born with a front-to-back or side-to-side \n\t\t\t\t\t\t\tcurve of your spine that’s worsened as you’ve aged. It gives \n\t\t\t\t\t\t\tyou a negative social stigma (+1 difficulty penalty to Social \n\t\t\t\t\t\t\trolls), and it also impedes your movement, adding a +1 \n\t\t\t\t\t\t\tdifficulty penalty to all Dexterity-based rolls.<br><br>\n\t\t\t\t\t\t\t<b>No Sense of Smell:</b><br>\n\t\t\t\t\t\t\tYour sense of smell is nonexistent, even in Lupus form. \n\t\t\t\t\t\t\tYou fail all Perception rolls involving smell automatically, \n\t\t\t\t\t\t\tand you suffer a +2 difficulty penalty to track prey using \n\t\t\t\t\t\t\tyour Primal-Urge.<br><br>\n\t\t\t\t\t\t\t<b>No Tail:</b><br>\n\t\t\t\t\t\t\tNot having a tail creates serious communication \n\t\t\t\t\t\t\tproblems with others of your kind. You take a +1 difficulty \n\t\t\t\t\t\t\tpenalty in all social situations while in Lupus, Hispo or \n\t\t\t\t\t\t\tCrinos forms. In addition, your sense of balance suffers. \n\t\t\t\t\t\t\tYou take a +1 difficulty penalty to Dexterity rolls as well \n\t\t\t\t\t\t\twhile wearing those forms.<br><br>\n\t\t\t\t\t\t\t<b>Seizures:</b><br>\n\t\t\t\t\t\t\tWhen you’re under the gun, you lose control of your \n\t\t\t\t\t\t\tbody. When you botch an important roll, make a Willpower \n\t\t\t\t\t\t\tcheck (difficulty 8). Scoring less than three successes \n\t\t\t\t\t\t\tmakes you writhe uncontrollably until the Storyteller \n\t\t\t\t\t\t\ttells you to make another roll. You can take no actions \n\t\t\t\t\t\t\twhile experiencing a seizure.<br><br>\n\t\t\t\t\t\t\t<b>Tough Hide:</b>\n\t\t\t\t\t\t\tYour skin is tough as old leather, and considerably \n\t\t\t\t\t\t\tless attractive. You have no coat to speak of, merely a few \n\t\t\t\t\t\t\tpatches of fur here and there across your wrinkled, dry \n\t\t\t\t\t\t\thide. Your Appearance can never be greater than 1, and \n\t\t\t\t\t\t\tunbearable itching and hot spots are constant aggravations. On the positive side, you get an extra die on soak \n\t\t\t\t\t\t\trolls, but it’s only a small advantage to weigh against your \n\t\t\t\t\t\t\tsmelly, scratchy hide.<br><br>\n\t\t\t\t\t\t\t<b>Wasting Disease:</b><br>\n\t\t\t\t\t\t\tYour constitution is notably weak. You cough and \n\t\t\t\t\t\t\twheeze, and have extreme difficulty with the long-term \n\t\t\t\t\t\t\thunts and endurance runs where humans, wolves, and \n\t\t\t\t\t\t\tGarou normally excel. Take a +2 difficulty penalty on all \n\t\t\t\t\t\t\tStamina rolls, including soak rolls.<br><br>\n\t\t\t\t\t\t\t<b>Weak Immune System:</b><br>\n\t\t\t\t\t\t\tWerewolves are normally very resistant, even immune, \n\t\t\t\t\t\t\tto ordinary disease. You lack that level of supernatural \n\t\t\t\t\t\t\tconstitution, and in fact are more vulnerable to ailments \n\t\t\t\t\t\t\tthan most humans are. Because of your condition, you \n\t\t\t\t\t\t\thave no Bruised health level. When marking damage, \n\t\t\t\t\t\t\tbegin at the Hurt level.<br><br>\n\t\t\t\t\t\t\t<b>Withered Limb</b><br>\n\t\t\t\t\t\t\tYou have four limbs, but the muscles of one are atrophied, leaving it withered or paralyzed. Depending on \n\t\t\t\t\t\t\tyour form, you can’t walk well, and you run more slowly \n\t\t\t\t\t\t\tthan other werewolves. You incur a +2 difficulty penalty \n\t\t\t\t\t\t\ton all Dexterity rolls when trying to use this limb.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Lupus\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Lupus</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tNone are closer to nature and the hidden face of Gaia \n\t\t\t\t\t\t\tthan you are. You were born a precocious pup, already showing remarkable intelligence above that of your siblings. \n\t\t\t\t\t\t\tWhen the Change overcame you, and you discovered \n\t\t\t\t\t\t\tyour true nature, the world itself became something you \n\t\t\t\t\t\t\thad never expected.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tLupus are quite capable of abstract thought, but much \n\t\t\t\t\t\t\tof their experience with the concepts governed by such \n\t\t\t\t\t\t\tthought comes after the First Change. They pick up the \n\t\t\t\t\t\t\tbasics of Garou speech very quickly, and the basics of \n\t\t\t\t\t\t\thuman languages with surprising speed, but the small nuances and connotations frequently elude them. They are \n\t\t\t\t\t\t\taccustomed to the socialization of a pack, not of a greater \n\t\t\t\t\t\t\tsociety — which can be particularly problematic if they \n\t\t\t\t\t\t\twere raised in a traditional wolf pack, which is more of a \n\t\t\t\t\t\t\tnuclear family than anything else. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe advantages of the lupus are several — many of \n\t\t\t\t\t\t\tthem spiritual. The wolf-born lack the spiritual disconnection that the homids have gradually developed, and \n\t\t\t\t\t\t\tthey are also free of the spiritual “static” that comes with \n\t\t\t\t\t\t\tthe blood of the metis. They have a knack for mastering \n\t\t\t\t\t\t\tthe animistic rituals of the Garou, as they are closer to \n\t\t\t\t\t\t\t“spirit logic” than the more educated reasoning of humankind. Some of this is reflected in their high starting \n\t\t\t\t\t\t\tGnosis. However, lupus characters have little opportunity \n\t\t\t\t\t\t\tto learn many useful skills before their First Change, and \n\t\t\t\t\t\t\tare therefore limited during character creation regarding \n\t\t\t\t\t\t\tthe Abilities they can purchase.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Nicknames:</h5> <p>Ferals, Four-Legs, Fleabiters </p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Initial Gnosis:</h5>  <p>5</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Beginning Gifts:</h5>  <p>Hare’s Leap, Heightened Senses, Predator’s Arsenal, Prey Mind, Sense Prey</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Restricted Abilities:</h5> \n\t\t\t\t\t\t\t\t<p>Beginning lupus characters \n\t\t\t\t\t\t\t\tcannot take the following Skills and Knowledges with \n\t\t\t\t\t\t\t\ttheir initial dots. You may, however, use freebie points \n\t\t\t\t\t\t\t\tto purchase them, perhaps as a result of your character’s \n\t\t\t\t\t\t\t\tprelude. Similarly, you can use experience points to add \n\t\t\t\t\t\t\t\tthese Abilities as a result of training or “life experience” \n\t\t\t\t\t\t\t\tin the course of the chronicle.</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Restricted Skills:</h5> <p>Crafts, Drive, Etiquette, Firearms, Larceny</p>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<h5>Restricted Knowledges:</h5> <p>Academics, Computer, Law, Science, Technology</p>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/breeds/breeds.component.ts":
/*!********************************************!*\
  !*** ./src/app/breeds/breeds.component.ts ***!
  \********************************************/
/*! exports provided: BreedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedsComponent", function() { return BreedsComponent; });
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

var BreedsComponent = /** @class */ (function () {
    function BreedsComponent() {
    }
    BreedsComponent.prototype.ngOnInit = function () {
    };
    BreedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breeds',
            template: __webpack_require__(/*! ./breeds.component.html */ "./src/app/breeds/breeds.component.html"),
            styles: [__webpack_require__(/*! ./breeds.component.css */ "./src/app/breeds/breeds.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreedsComponent);
    return BreedsComponent;
}());



/***/ }),

/***/ "./src/app/character-creation/character-creation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/character-creation/character-creation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/character-creation/character-creation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/character-creation/character-creation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t\t<h1>Character Creation - What is a werewolf?</h1>\n\t\t\t<p>\n  \t\t\t\tThree important characteristics shape the werewolf. \n\t\t\t\tBreed is the birth form and heritage, whether born to humans, wolves, or Garou alone. Auspice is the moon phase under which he was born: a mystical blessing illuminating \n\t\t\t\this spiritual path. Tribe is the specific Garou society unit \n\t\t\t\tto which he belongs. These three characteristics are the \n\t\t\t\tfoundation for a Werewolf character’s background story.\n\t\t\t\tBreed, auspice, and tribe should inspire you as a player \n\t\t\t\tto create an interesting combination of traits, interpreting \n\t\t\t\thow the intersection of these three axes provides guidelines \n\t\t\t\tfor a fascinating character. Naturally, these three aspects \n\t\t\t\tare merely starting points — inspirational archetypes, not \n\t\t\t\tpre-programmed personality traits. In play, your character \n\t\t\t\tmay become the Platonic ideal of these archetypes, or he \n\t\t\t\tmay break away from assumptions to define himself in an \n\t\t\t\tentirely unexpected fashion.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<h2><a routerLink=\"/breeds\">Breeds</a></h2>\n\t\t\t<h2><a routerLink=\"/auspices\">Auspices</a></h2>\n\t\t\t<h2><a routerLink=\"/tribes\">Tribes</a></h2>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/character-creation/character-creation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/character-creation/character-creation.component.ts ***!
  \********************************************************************/
/*! exports provided: CharacterCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterCreationComponent", function() { return CharacterCreationComponent; });
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

var CharacterCreationComponent = /** @class */ (function () {
    function CharacterCreationComponent() {
    }
    CharacterCreationComponent.prototype.ngOnInit = function () {
    };
    CharacterCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-creation',
            template: __webpack_require__(/*! ./character-creation.component.html */ "./src/app/character-creation/character-creation.component.html"),
            styles: [__webpack_require__(/*! ./character-creation.component.css */ "./src/app/character-creation/character-creation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CharacterCreationComponent);
    return CharacterCreationComponent;
}());



/***/ }),

/***/ "./src/app/character-detail/character-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gift-detail{\nborder-style: solid;\nborder-color: white;\nborder-radius: 15px;\npadding: 25px; \n}\n\n@media screen and (max-width: 1000px) {\n\t#characterImage {\n  \t\theight: auto;\n  \t\twidth: 20em;\n\t}\n}\n\n@media screen and (min-width: 1000px) {\n\t#characterImage {\n  \t\theight: 30em;\n  \t\twidth: auto;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/character-detail/character-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gift-detail\">\n\t<div *ngIf=\"character\" >\n\t\t<div class=\"col-sm\">\n\t\t\t<h2>{{character.name}}</h2>\n\t\t\t<br>\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"gift list-inline-item\"\n\t\t\t\t\t*ngFor=\"let image of character.images\">\n\t\t\t\t\t\t<img id=\"characterImage\" class=\"clearfix img-fluid\" src=\"assets/Characters/{{image}}\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div><span><b>Description: </b><p [innerHTML]=\"character.description\"></p></span></div>\n\t\t\t<div><span><b>Affiliation: </b><p [innerHTML]=\"character.affiliation\"></p></span></div>\n\t\t\t<div><span><b>Rank: </b><p [innerHTML]=\"character.rank\"></p></span></div>\n\t\t\t<div><span><b>{{character.status}}</b></span></div><br>\n\t\t\t<ul style=\"list-style: none; padding-left: 0px\">\n\t\t\t\t<li class=\"gift list-item\"\n\t\t\t\t\t*ngFor=\"let story of character.stories\">\n\t\t\t\t\t<a href={{story.link}} target=\"_blank\"><b>{{story.title}}</b></a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t<div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/character-detail/character-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/character-detail/character-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _characters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../characters.service */ "./src/app/characters.service.ts");
/* harmony import */ var _CharacterObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CharacterObject */ "./src/app/CharacterObject.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterDetailComponent = /** @class */ (function () {
    function CharacterDetailComponent(characterService) {
        this.characterService = characterService;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        this.getCharacter();
    };
    CharacterDetailComponent.prototype.ngOnChanges = function (changes) {
        this.getCharacter();
    };
    CharacterDetailComponent.prototype.getCharacter = function () {
        var _this = this;
        this.characterService.getCharacters()
            .subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                if (_this.characterObject.id === item.id)
                    _this.character = item;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _CharacterObject__WEBPACK_IMPORTED_MODULE_2__["CharacterObject"])
    ], CharacterDetailComponent.prototype, "characterObject", void 0);
    CharacterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-detail',
            template: __webpack_require__(/*! ./character-detail.component.html */ "./src/app/character-detail/character-detail.component.html"),
            styles: [__webpack_require__(/*! ./character-detail.component.css */ "./src/app/character-detail/character-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_characters_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());



/***/ }),

/***/ "./src/app/characters.service.ts":
/*!***************************************!*\
  !*** ./src/app/characters.service.ts ***!
  \***************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterService = /** @class */ (function () {
    function CharacterService(http) {
        this.http = http;
    }
    CharacterService.prototype.getCharacters = function () {
        return this.http.get('./assets/Characters/Characters.json');
    };
    CharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CharacterService);
    return CharacterService;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/*!*****************************************************!*\
  !*** ./src/app/characters/characters.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gift-detail-app{\n\tmargin-top: 8px;\n}\n\n.gift-filter{\n\tborder: 2px solid white;\n\tborder-radius: 5px;\n\tbackground: transparent;\n\t-webkit-text-decoration-color: gold;\n\t        text-decoration-color: gold;\n\tpadding: 5px;\n\tcolor: white;\n\tfont-family: werewolf;\n\tfont-size: 20px;\n\tmargin: 8px;\n\tmax-width: 300px;\n}\n\n.gift {\n\tcursor: pointer;\n}\n\n.scrollbar {\nmax-height: 500px;\nbackground: transparent;\noverflow-y: scroll;\nmax-width: 300px;\nmargin: auto;\nborder-style: solid;\nborder-color: white;\nborder-radius: 5px;\npadding: 25px; \nfont-family: werewolf;\nfont-size: 20px;\n}\n\n.force-overflow {\nmin-height: 10px;\n}\n\n.scrollbar-primary::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-primary::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #4285F4; }\n\n.scrollbar-danger::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-danger::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-danger::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #ff3547; }\n\n.scrollbar-warning::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-warning::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-warning::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #FF8800; }\n\n.scrollbar-success::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-success::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-success::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #00C851; }\n\n.scrollbar-info::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-info::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-info::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #33b5e5; }\n\n.scrollbar-default::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-default::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-default::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #2BBBAD; }\n\n.scrollbar-secondary::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-secondary::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-secondary::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #aa66cc; }"

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<h1>Characters</h1>\n\t\t\t<input class=\"gift-filter\" placeholder=\"Filter characters\" [(ngModel)]=\"query\">\n\t\t\t<!--<div class=\"col-sm-4\">\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"homid-check\"[(ngModel)]=\"homidCheck\">Homid\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"metis-check\"[(ngModel)]=\"metisCheck\">Metis\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"lupus-check\"[(ngModel)]=\"lupusCheck\">Lupus\n\t\t\t\t</label>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Ragabash\" value=\"ragabash\" [checked]=\"auspiceSearchTerm==='ragabash'\" [(ngModel)]=\"auspiceSearchTerm\">Ragabash\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Theurge\" value=\"theurge\" [checked]=\"auspiceSearchTerm==='theurge'\" [(ngModel)]=\"auspiceSearchTerm\">Theurge\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Philodox\" value=\"philodox\" [checked]=\"auspiceSearchTerm==='philodox'\" [(ngModel)]=\"auspiceSearchTerm\">Philodox\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Galliard\" value=\"galliard\" [checked]=\"auspiceSearchTerm==='galliard'\" [(ngModel)]=\"auspiceSearchTerm\">Galliard\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Ahroun\" value=\"ahroun\" [checked]=\"auspiceSearchTerm==='ahroun'\" [(ngModel)]=\"auspiceSearchTerm\">Ahroun\n\t\t\t\t</label>\n\t\t\t</div>-->\n\t\t\t<div class=\"scrollbar scrollbar-primary col-sm-6\">\n\t\t\t\t<div class=\"force-overflow container-fluid\">\n\t\t\t\t\t<ul class=\"smooth-scroll list-unstyled\">\n\t\t\t\t\t\t<li class=\"gift list-group-item-unstyled\"\n\t\t\t\t\t\t*ngFor=\"let characterObject of characterList | search:'name':query\"\n\t\t\t\t\t\t[class.selected]=\"characterObject === selectedCharacter\" \n\t\t\t\t\t\t(click)=\"onSelect(characterObject)\">\n\t\t\t\t\t\t<span class=\"badge\">{{characterObject.name}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"selectedCharacter\" class=\"col-sm-8 gift-detail-app\">\n\t\t\t<app-character-detail [characterObject]=\"selectedCharacter\"></app-character-detail>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _characters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../characters.service */ "./src/app/characters.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(characterService) {
        this.characterService = characterService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharactersComponent.prototype.onSelect = function (character) {
        this.selectedCharacter = character;
    };
    CharactersComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService.getCharacters().subscribe(function (characterList) { return _this.characterList = characterList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); }); });
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.css */ "./src/app/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [_characters_service__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/combat/charts/charts.component.css":
/*!****************************************************!*\
  !*** ./src/app/combat/charts/charts.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/charts/charts.component.html":
/*!*****************************************************!*\
  !*** ./src/app/combat/charts/charts.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t<h1>Equipment Charts:</h1>\n\t\t<p>Here are charts for types of weapons and armor.</p>\n\t\t<p>These are not the only weapons or armors in the game, but are examples types like automatic rifles, or riot armor.</p>\n\t</div>\n</div>\n<br>\n<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Melee Weapon Chart\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Melee Weapons</h1>\n\t\t\t\t\t<p>Examples of melee weapon types. Other weapons will need to be approximated by the storyteller.</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Weapon</b></p></div><div class=\"col-sm\"><p><b>Damage</b></p></div><div class=\"col-sm\"><p><b>Conceal</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Sap+</p></div><div class=\"col-sm\"><p>Strength +1/B</p></div><div class=\"col-sm\"><p>P</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Whip*</p></div><div class=\"col-sm\"><p>Strength +1/L</p></div><div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Spiked Gauntlet</p></div><div class=\"col-sm\"><p>Strength +1/L</p></div><div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Broken Bottle</p></div><div class=\"col-sm\"><p>Strength +1/L**</p></div><div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Knife</p></div><div class=\"col-sm\"><p>Strength +1</p></div><div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Sword</p></div><div class=\"col-sm\"><p>Strength +2</p></div><div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Axe</p></div><div class=\"col-sm\"><p>Strength +3</p></div><div class=\"col-sm\"><p>N</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Stake*</p></div><div class=\"col-sm\"><p>Strength +1</p></div><div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>+</b> Denotes a blunt object. Blunt objects inflict\n\t\t\t\t\t\tbashing damage unless targeted at the head. \n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>*</b> May paralyze a vampire if driven through\n\t\t\t\t\t\t\t\tthe heart. The attacker must target the heart\n\t\t\t\t\t\t\t\t(difficulty 9) and score three damage successes.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Concealment Chart</h4>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>P:</b> Can be carried in the pocket.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>J:</b> Can be hidden in a jacket.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>T:</b> Can be hidden in a trenchcoat.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>N:</b> Cannot be concealed on the person at all.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Ranged Weapon Chart\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Ranged Weapons</h1>\n\t\t\t\t\t<p>Examples of ranged weapon types. Other weapons will need to be approximated by the storyteller.</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Type</b></p></div><div class=\"col-sm\"><p><b>Damage</b></p></div><div class=\"col-sm\"><p><b>Range</b></p></div><div class=\"col-sm\"><p><b>Rate</b></p></div><div class=\"col-sm\"><p><b>Capacity</b></p></div><div class=\"col-sm\"><p><b>Conceal</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Revolver, Light</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>4</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>12</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>6</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>P</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Revolver, Heavy</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>6</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>35</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>2</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>6</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Pistol, Light</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>4</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>20</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>4</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>15+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>P</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Pistol, Heavy</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>5</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>25</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>13+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Rifle</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>8</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>200</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>N</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>SMG, Small*</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>4</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>20</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>17+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>J</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>SMG, Large*</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>4</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>50</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>30+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>N</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Assault Rifle*</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>7</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>150</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>30+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>N</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Shotgun</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>8</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>20</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>5+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Shotgun, Semi-Auto</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>8</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>20</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>6+1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Crossbow**</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>5</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>20</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>T</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Damage:</b> Indicates the damage dice pool. For mortals firearms is lethal damage. Firearms are bashing damage to vampires unless the head is targeted.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Range:</b> This is the practical shot range in yards or meters. Weapons may be fired at twice this distance, but the attacks are considered long range (difficulty 8).\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Rate:</b> The maximum number of bullets or three-round bursts the gun can fire in a single turn. This rate does not apply to full-auto or spray attacks.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Capacity:</b> The number of shells a gun can hold. The +1 indicates a bullet can be held in the chamber, ready to fire.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>*</b> Indicates the weapon is capable of three-round bursts, full auto, and sprays.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>**</b> The crossbow is included for characters who wish to try staking an opponent. Crossbows require five turns to reload. Unless the crossbow is aimed at the head or heart, it inflicts bashing damage on Kindred. It inflicts lethal damage versus mortals.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4>Concealment Chart</h4>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>P:</b> Can be carried in the pocket.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>J:</b> Can be hidden in a jacket.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>T:</b> Can be hidden in a trenchcoat.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>N:</b> Cannot be concealed on the person at all.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Armor Chart\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Armor</h1>\n\t\t\t\t\t<p>Examples of armor types. Other armors will need to be approximated by the storyteller.</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Class</b></p></div><div class=\"col-sm\"><p><b>Armor Rating</b></p></div><div class=\"col-sm\"><p><b>Penalty</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Class One (Reinforced Clothing)</p></div><div class=\"col-sm\"><p>1</p></div><div class=\"col-sm\"><p>0</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Class Two (armor T-shirt)</p></div><div class=\"col-sm\"><p>2</p></div><div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Class Three (Kevlar vest)</p></div><div class=\"col-sm\"><p>3</p></div><div class=\"col-sm\"><p>1</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Class Four (flak jacket)</p></div><div class=\"col-sm\"><p>4</p></div><div class=\"col-sm\"><p>2</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Class Five (full riot gear)</p></div><div class=\"col-sm\"><p>5</p></div><div class=\"col-sm\"><p>3</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tArmor adds its rating to the character’s soak\n\t\t\t\t\t\tdice pool against bashing damage, lethal\n\t\t\t\t\t\tdamage, and aggravated damage from fangs\n\t\t\t\t\t\tand claws.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p> It does not protect against fire or sunlight.</p> \n\t\t\t\t\t<p>\n\t\t\t\t\t\tHowever, armor also subtracts\n\t\t\t\t\t\ta number of dice from dice pools related to\n\t\t\t\t\t\tbodily coordination and agility (most Dexterity-based dice pools). \n\t\t\t\t\t\tThis is reflected in the penalty listing.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAttackers may make targeting rolls to hit unprotected portions of a defender\n\t\t\t\t\t\tand thus ignore the armor (see targeting - General Combat Maneuvers).\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/charts/charts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/combat/charts/charts.component.ts ***!
  \***************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
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

var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/combat/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.css */ "./src/app/combat/charts/charts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/combat/health/health.component.css":
/*!****************************************************!*\
  !*** ./src/app/combat/health/health.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/health/health.component.html":
/*!*****************************************************!*\
  !*** ./src/app/combat/health/health.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-3\"></div>\n\t<div class=\"col-sm-6\">\n\t\t<h1>Health</h1>\n\t\t\t<p>\n\t\t\t\tWhether inflicted by a bullet, a speeding car, or the\n\t\t\t\tclaws of a werewolf, a character’s injuries are represented\n\t\t\t\tthe same way in Werewolf: the Health Trait, comprising seven health levels. Although werewolves heal very\n\t\t\t\tquickly, overwhelming injuries can incapacitate them\n\t\t\t\tor even kill them. The last level marked indicates the\n\t\t\t\tcharacter’s current health.\n\t\t\t</p>\n\t</div>\n</div>\n<br>\n<div class=\"row\">\n\t<div class=\"col-sm-3\"></div>\n\t<div class=\"col-sm-6\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"About Health\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Health Chart</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tEvery character has seven health levels, ranging from\n\t\t\t\t\t\tBruised to Incapacitated. A character with no health\n\t\t\t\t\t\tlevels checked off is in full health, while the level after\n\t\t\t\t\t\tincapacitated indicates that the character is dead.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWhen an attacker scores a success on\n\t\t\t\t\t\ta damage roll, your character takes one health level of\n\t\t\t\t\t\tdamage. This is marked on your character sheet in the\n\t\t\t\t\t\tappropriate box, although the mark you make depends\n\t\t\t\t\t\ton the type of damage inflicted. See applying damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs your character\n\t\t\t\t\t\tgets more and more battered, it’s increasingly difficult\n\t\t\t\t\t\tfor him to perform even the simplest of tasks. The dice\n\t\t\t\t\t\tpenalty is subtracted from your dice pool for every ac-\n\t\t\t\t\t\ttion (except reflexive actions such as soak) until the\n\t\t\t\t\t\twound heals. The penalty also indicates impaired movement.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Health Levels\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Health Levels</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Health chart on the character sheet helps you\n\t\t\t\t\t\ttrack your character’s current physical condition. It also\n\t\t\t\t\t\tlists the penalty imposed on your dice pool for each level\n\t\t\t\t\t\tof injury that your character sustains. As your character\n\t\t\t\t\t\tsuffers more injuries, her health declines, until she becomes\n\t\t\t\t\t\tincapacitated or dies.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Health Level</b></p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Dice Pool Penalty</b></p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Movement Penalty</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Bruised</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>0</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is only bruised and suffers no dice pool penalties due to damage.</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Hurt</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>-1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is superficially hurt and suffers no movement hindrance.</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Injured</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>-1</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character suffers minor injuries and movement is mildly inhibited (halve maximum running speed).</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Wounded</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>-2</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character suffers significant damage and may not run (though he may still walk). Character can only move or attack; he always loses dice when moving and attacking in the same turn.</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Mauled</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>-2</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is badly injured and may only hobble about (three yards/meters per turn).</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Crippled</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>-5</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is catastrophically injured and may only crawl (one yard/meter per turn).</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Incapacitated</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>&nbsp;</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is incapable of movement and is likely unconscious. A character who takes any more damage at this level dies.</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Dead</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>&nbsp;</p></div>\n\t\t\t\t\t\t<div class=\"col-sm\"><p>Character is dead. His pack and sept will mourn him, but he is with the ancestors now.</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Applying Damage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Applying Damage</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis is where you apply bashing, leathal and aggravated damage. Below is the same chart you have on your character sheet.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBashing damage represents forms of injury that are\n\t\t\t\t\t\tunlikely to kill instantly, and that fade quickly — compared to gunshot wounds, at least. Most unarmed combat\n\t\t\t\t\t\tmoves — punches, kicks, tackles, and clinches — deal\n\t\t\t\t\t\tbashing damage. Even humans heal bashing damage at a\n\t\t\t\t\t\treasonable rate, recovering from such injuries in a matter\n\t\t\t\t\t\tof hours. Garou, by contrast, shrug off such injuries in\n\t\t\t\t\t\tseconds, though large amounts of bashing damage can be\n\t\t\t\t\t\tenough trauma to knock a werewolf out, or even kill her.\n\t\t\t\t\t\tHumans can soak bashing damage with their Stamina,\n\t\t\t\t\t\tas can Garou.\n\t\t\t\t\t\tIf your character falls to Incapacitated from bashing\n\t\t\t\t\t\tdamage, she falls unconscious but remains in whatever form\n\t\t\t\t\t\tshe was in. Any additional bashing damage “upgrades” an\n\t\t\t\t\t\texisting bashing wound to lethal damage. If this additional\n\t\t\t\t\t\tdamage upgrades her Incapacitated health level to lethal\n\t\t\t\t\t\tdamage, she reverts to breed form and may use Rage to\n\t\t\t\t\t\tremain active (see below). Once she’s Incapacitated with\n\t\t\t\t\t\tlethal damage, another level of bashing damage kills her.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLethal damage includes any form of trauma that\n\t\t\t\t\t\twould lead to a hospital stay for a human being — from\n\t\t\t\t\t\tgunshot damage to knife-wounds. While a werewolf can\n\t\t\t\t\t\tregenerate lethal wounds just as easily as bashing dam-\n\t\t\t\t\t\tage, other creatures are not so lucky. At the Storyteller’s\n\t\t\t\t\t\tdiscretion, attacks that would otherwise cause bashing\n\t\t\t\t\t\tdamage can cause lethal damage when aimed at a vital\n\t\t\t\t\t\tbody part such as a kidney or an eye, though such areas\n\t\t\t\t\t\tare difficulty 8 or 9 to target.\n\t\t\t\t\t\tHumans cannot soak lethal damage at all. Garou and\n\t\t\t\t\t\tother shapeshifters can soak lethal damage with Stamina\n\t\t\t\t\t\tin any form except their breed form. Some fomori may\n\t\t\t\t\t\tbe able to soak lethal damage, as can vampires and other\n\t\t\t\t\t\tmonsters that lurk in the night, though that varies depending on the twisted creature’s specific abilities.\n\t\t\t\t\t\tIf your character falls to Incapacitated from lethal\n\t\t\t\t\t\tdamage, she can channel her Rage to remain active.\n\t\t\t\t\t\tIf she doesn’t, she falls unconscious and reverts to her\n\t\t\t\t\t\tbreed form. She remains unconscious and regenerates\n\t\t\t\t\t\tthat health level after an eight-hour period. If she takes\n\t\t\t\t\t\ta level of lethal damage when at Incapacitated, she dies.\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t Bashing damage is recorded as a slash <b>[/]</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLethal damage is marked with an <b>[X]</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAggravated damage is marked with an asterisk <b>[*]</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAggravated damage comes from attacks that go\n\t\t\t\t\t\tagainst a werewolf’s nature. All silver weapons, not just\n\t\t\t\t\t\tbullets, deal aggravated damage to werewolves, but not to\n\t\t\t\t\t\thumans. Fire, some Wyrm-tainted poisons, and the teeth\n\t\t\t\t\t\tand claws of werewolves and other supernatural creatures\n\t\t\t\t\t\tall deal aggravated damage.\n\t\t\t\t\t\tHumans can’t soak aggravated damage. Werewolves\n\t\t\t\t\t\tcan soak aggravated damage with Stamina in any form\n\t\t\t\t\t\texcept their breed form, with the exception of damage\n\t\t\t\t\t\tfrom silver. Garou cannot regenerate aggravated damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf your character falls to Incapacitated from aggravated\n\t\t\t\t\t\tdamage, she has one chance: she can channel her Rage to\n\t\t\t\t\t\tremain active. If she doesn’t succeed, she dies.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe aggravated level is then noted by simply drawing\n\t\t\t\t\t\tanother line through the \"Bruised\" box, turning it into “*.” instead of the original \"X\".\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe same applies for bashing and lethal damage. If you have a box with bashing, and you get damaged with lethal damage, you \"move\" the bashing damage down to the box below, and make the previous bashing damage into an X.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Silver Weapons</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tDamage dealt from a silver weapon is handled\n\t\t\t\t\t\tslightly differently to other sources of damage.\n\t\t\t\t\t\tIf a homid or lupus werewolf is in her breed form,\n\t\t\t\t\t\tan attack with a silver weapon does nothing special.\n\t\t\t\t\t\tIt causes bashing or lethal damage as appropriate and\n\t\t\t\t\t\tcan be soaked as normal — that the weapon is silver\n\t\t\t\t\t\tdoes not factor in to the damage.\n\t\t\t\t\t\tIn any other form, a werewolf cannot soak damage\n\t\t\t\t\t\tfrom silver without a Gift or fetish, and the damage taken\n\t\t\t\t\t\tis aggravated. A successful attack always deals one point of\n\t\t\t\t\t\tdamage, even if the attacker rolled no successes for damage.\n\t\t\t\t\t\tMetis do not have safety of a breed form to shield\n\t\t\t\t\t\tthem from the ravages of silver. They take unsoakable\n\t\t\t\t\t\taggravated damage from silver in any form.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4>Health</h4>\n\t\t\t\t\t<p>At this point the character is injured and has a -1 penalty and her speed is reduced by half. Regardless whether the last damage is bashing or not. If your chart is filled with bashing damage, you go into torpor.</p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Bruised</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>&nbsp;</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[*]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Hurt</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-1</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[X]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Injured</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-1</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[/]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Wounded</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-2</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[  ]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Mauled</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-2</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[  ]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Crippled</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-5</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[  ]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Incapacitated</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>-1</b></p></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm\"><p><b>[  ]</b></p></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Healing Damage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Healing Damage</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWerewolves heal at an incredible pace. A Garou\n\t\t\t\t\t\tregenerates her worst bashing or lethal health level every\n\t\t\t\t\t\tturn. Homid- and lupus-breed Garou can regenerate a\n\t\t\t\t\t\thealth level each day while in their natural forms if they\n\t\t\t\t\t\tare in critical condition, but doing so doesn’t let them do\n\t\t\t\t\t\tmuch more than sleep. If they’re conscious and moving\n\t\t\t\t\t\taround in their breed form, they heal as humans do. Metis\n\t\t\t\t\t\tare blessed with full regeneration in every form.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>Regenerating damage when engaged in a stressful or\n\t\t\t\t\t\tphysically intensive activity (like combat) is harder for\n\t\t\t\t\t\ta werewolf. The player must roll the Garou’s Stamina\n\t\t\t\t\t\t(difficulty 8) each turn. This roll is reflexive, so does not\n\t\t\t\t\t\tinvolve splitting a dice pool or spending Rage for multiple actions. Success means that the werewolf heals as\n\t\t\t\t\t\tnormal. Failure means that he heals no damage. A botch\n\t\t\t\t\t\tindicates that the werewolf cannot regenerate until she’s\n\t\t\t\t\t\thad a chance to rest.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4>Aggravated damage</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGarou cannot regenerate aggravated damage with\n\t\t\t\t\t\tanything like the same speed. A character heals one health\n\t\t\t\t\t\tlevel of aggravated damage each day, as long as she spends\n\t\t\t\t\t\ther time resting in a form that normally regenerates.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Remaining Active\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Remaining Active</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA critically injured werewolf can channel her Rage to\n\t\t\t\t\t\tsave her life. It’s a risky proposition — if it succeeds, the\n\t\t\t\t\t\twerewolf is thrown into a wild frenzy. It’s sometimes the\n\t\t\t\t\t\tonly way for a character to save her life, though.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tTo remain active, the player rolls his character’s\n\t\t\t\t\t\tpermanent Rage (difficulty 8). Each success heals one\n\t\t\t\t\t\thealth level of any kind of damage. No matter how much\n\t\t\t\t\t\tdamage is healed, the character enters a berserk frenzy.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA character can only channel her Rage in this way\n\t\t\t\t\t\tonce per scene. If she’s reduced to Incapacitated more\n\t\t\t\t\t\tthan once in a single fight, she takes the worst effects of\n\t\t\t\t\t\tthe damage.\n\t\t\t\t\t\tAlthough her Rage can remove an awful lot of damage, supercharging a werewolf’s incredible regeneration\n\t\t\t\t\t\tcomes with some side effects. A werewolf gains a Battle\n\t\t\t\t\t\tScar (p. 259) whenever she successfully remains active.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/health/health.component.ts":
/*!***************************************************!*\
  !*** ./src/app/combat/health/health.component.ts ***!
  \***************************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
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

var HealthComponent = /** @class */ (function () {
    function HealthComponent() {
    }
    HealthComponent.prototype.ngOnInit = function () {
    };
    HealthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health',
            template: __webpack_require__(/*! ./health.component.html */ "./src/app/combat/health/health.component.html"),
            styles: [__webpack_require__(/*! ./health.component.css */ "./src/app/combat/health/health.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HealthComponent);
    return HealthComponent;
}());



/***/ }),

/***/ "./src/app/combat/maneuvers/maneuvers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/combat/maneuvers/maneuvers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/maneuvers/maneuvers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/combat/maneuvers/maneuvers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t<h1>Combat Maneuvers:</h1>\n\t\t\t<p>These maneuvers give you a variety of choices in combat. Most of these maneuvers take one action to execute.</p>\n\t</div>\n</div>\n<br>\n<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"General Maneuvers\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>General Maneuvers</h1>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAny character with the right physique can perform\n\t\t\t\t\t\tthese maneuvers. Some moves, however, are limited to\n\t\t\t\t\t\tcertain forms — it’s hard to claw someone if you don’t\n\t\t\t\t\t\thave claws! For the most part, these attacks inflict bashing\n\t\t\t\t\t\tdamage. Exceptions are noted in each entry.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Bite</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe most basic attack utilized by creatures with\n\t\t\t\t\t\tteeth, biting involves... well, biting. Garou and vampires\n\t\t\t\t\t\tinflict aggravated damage with their bites, while many\n\t\t\t\t\t\tother creatures deal out lethal damage. At the storyteller’s\n\t\t\t\t\t\toption, Glabro-form Garou may bite a target at difficulty\n\t\t\t\t\t\t8, inflicting Strength –1 in lethal damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Usable By: Crinos, Hispo, Lupus\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 5\n\t\t\t\t\t\t\tDamage: Strength + 1\n\t\t\t\t\t\t\tActions: 1</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Claw</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRipping his target with sharp talons, a were-\n\t\t\t\t\t\twolf inflicts aggravated damage on his opponent when\n\t\t\t\t\t\tin Crinos and Hispo form, bashing damage in Glabro or\n\t\t\t\t\t\tLupus form.\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Usable By: Crinos or Hispo/A, Glabro or Lupus/B\n\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\tDamage: Strength + 1\n \t\t\t\t\t\tActions: 1</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Disarm</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe attacker uses her weapon to knock\n\t\t\t\t\t\ther opponent’s weapon from his hand. To succeed, the attacker rolls Dexterity + Melee at +1 to her usual difficulty;\n\t\t\t\t\t\tif her successes exceed her opponent’s Strength score, he\n\t\t\t\t\t\tdrops that weapon. If she doesn’t score enough successes\n\t\t\t\t\t\tto disarm the opponent, she still inflicts her usual damage.\n\t\t\t\t\t\tIf she botches that roll, she loses her own weapon instead.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA brave or desperate attacker can try to disarm an\n\t\t\t\t\t\tarmed opponent with her bare hands. In this case, the roll\n\t\t\t\t\t\tis Dexterity + Brawl, the difficulty is 8, and she subtracts\n\t\t\t\t\t\tone die from her usual attack dice pool.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Dexterity + Melee\n \t\t\t\t\t\t\tDifficulty: +1 / 8\n\t\t\t\t\t\t\tDamage: Special Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Flank or Rear Attacks</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBy attacking an opponent’s\n\t\t\t\t\t\tflank, the assailant reduces his difficulty by one; by at-\n\t\t\t\t\t\ttacking from the rear, he reduces it by two.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\n\t\t\t\t\t\t\tRoll: Normal\n \t\t\t\t\t\t\tDifficulty: –1 / –2\n\t\t\t\t\t\t\tDamage: Normal Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<h4>Grapple</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSeizing an opponent, the attacker tries to\n\t\t\t\t\t\teither crush him (a clinch) or immobilize him (a hold).\n\t\t\t\t\t\tEither assault begins with a successful Strength +\n\t\t\t\t\t\tBrawl roll. If the attacker wants to hurt her\n\t\t\t\t\t\tfoe, that player may roll her Strength to\n\t\t\t\t\t\tinflict damage, beginning on the next turn\n\t\t\t\t\t\tand continuing until the opponent breaks\n\t\t\t\t\t\tfree. (The foe may try to soak that damage\n\t\t\t\t\t\tas usual.) If the attacker wishes to hold her\n\t\t\t\t\t\topponent still, he’s stuck in her grip until\n\t\t\t\t\t\this next action.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tTo escape a grapple, the opponent has two\n\t\t\t\t\t\toptions: He can break free by successfully beating his attacker in a resisted Strength + Brawl\n\t\t\t\t\t\troll; or he can reverse the hold by doing the same\n\t\t\t\t\t\tthing and then scoring two successes more than his\n\t\t\t\t\t\tattacker has scored. At the Storyteller’s option, an\n\t\t\t\t\t\tagile character can use Dexterity instead of Strength\n\t\t\t\t\t\twith such feats.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGrapple attacks normally inflict bashing damage.\n\t\t\t\t\t\tA character using barbs, spikes or claws with such an\n\t\t\t\t\t\tattack can rend her victim with lethal or possibly (as\n\t\t\t\t\t\twith Garou) aggravated damage instead.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Strength + Brawl\n\t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: Strength or none\n\t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Kick</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLashing out with a leg\n\t\t\t\t\t\tor two, the character knocks his\n\t\t\t\t\t\topponent silly. As presented here,\n\t\t\t\t\t\tthe kick is pretty straightforward; to\n\t\t\t\t\t\treflect elaborate martial arts kicks,\n\t\t\t\t\t\tthe Storyteller may adjust the difficulty\n\t\t\t\t\t\tand/or damage upward for complexity\n\t\t\t\t\t\tand effect.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tKicks normally inflict bashing damage. A Crinos were-\n\t\t\t\t\t\twolf kicking a normal human, however, may inflict lethal\n\t\t\t\t\t\tdamage from sheer mass and power.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 7\n\t\t\t\t\t\t\tDamage: Strength +1\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Punch</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tPunches, like kicks, can be simple or\n\t\t\t\t\t\telaborate. Special punches — an uppercut, a haymaker,\n\t\t\t\t\t\ta knife-hand strike — may deal out extra damage with a\n\t\t\t\t\t\thigher difficulty rating. Punches generally inflict bashing\n\t\t\t\t\t\tdamage, but nerve-strikes, kidney-blows, and punches by\n\t\t\t\t\t\t800-pound werewolves might shatter bones and organs,\n\t\t\t\t\t\tinflicting lethal damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\t\t\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: Strength Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Sweep</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUsing a leg (Brawl) or weapon (Melee), the\n\t\t\t\t\t\tattacker knocks her opponent’s legs out from under him. A\n\t\t\t\t\t\tsuccessful sweep dumps the foe on the ground that turn; it\n\t\t\t\t\t\twon’t hurt him, but might set him up for further attacks.\n\t\t\t\t\t\tCrinos-form werewolves can use their long arms to\n\t\t\t\t\t\tsweep an enemy’s legs out, too. Likewise, a Hispo or Lupus\n\t\t\t\t\t\tGarou can trip a bipedal opponent by tangling up his\n\t\t\t\t\t\tlegs. Either attack employs the same difficulty and effects.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 8\n\t\t\t\t\t\t\tDamage: None\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Tackle</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tDashing toward his opponent, the attacker\n\t\t\t\t\t\tsmashes full-force into her. Tackles are risky, though —\n\t\t\t\t\t\tusing one’s self as a battering ram can backfire.\n\t\t\t\t\t\tA tackle requires at least two yards of distance to\n\t\t\t\t\t\tachieve effective momentum. Each combatant must make\n\t\t\t\t\t\ta successful Dexterity + Athletics roll (difficulty 6 for\n\t\t\t\t\t\tthe attacker, difficulty 6 + the attacker’s successes for the\n\t\t\t\t\t\ttarget) or else wind up sprawled on the ground afterward.\n\t\t\t\t\t\tA would-be tackler who botches trips and falls (in-\n\t\t\t\t\t\tflicting one die of damage upon himself for every yard he\n\t\t\t\t\t\tran); slams into something else (inflicting that damage\n\t\t\t\t\t\tplus his Strength damage upon himself); or crashes into his\n\t\t\t\t\t\ttarget and bounces off (suffering the opponent’s Stamina\n\t\t\t\t\t\tin damage, but leaving the target unharmed).\n\t\t\t\t\t\tIn most cases, tackling inflicts bashing damage. Certain situations — crashing into a brick wall, employing\n\t\t\t\t\t\ta spiky hide or armor, crushing a puny human beneath\n\t\t\t\t\t\tthe weight of a charging werewolf — might make that\n\t\t\t\t\t\tdamage lethal instead.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 7\n\t\t\t\t\t\t\tDamage: Strength Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Dirty Fighting\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t\t<h1>Dirty Fighting</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBrutal, dishonorable and usually effective, the following maneuvers come from back-alleys, bar-brawls, rape-prevention classrooms and other venues where anything\n\t\t\t\t\t\tthat puts your opponent down for the count is fair game.\n\t\t\t\t\t\tIn game terms, a character must either have Brawl 3\n\t\t\t\t\t\tor higher, a background (like a self-defense class) in which\n\t\t\t\t\t\the might have learned such tricks, or both.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Blinding</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRaking the enemy’s eyes, throwing dirt in\n\t\t\t\t\t\tthem, spraying his face with chemicals or using some similar\n\t\t\t\t\t\tmethod, the attacker tries to render her opponent sightless.\n\t\t\t\t\t\tIf she succeeds, the enemy is blinded for one turn per success, and loses two dice from his dice pools until he recovers.\n\t\t\t\t\t\tThis attack doesn’t normally inflict lasting damage.\n\t\t\t\t\t\tAt the Storyteller’s option, however, a truly vicious strike\n\t\t\t\t\t\t(gouging with claws, throwing acid, etc.) might inflict a\n\t\t\t\t\t\thealth level or two of lethal damage in addition to the\n\t\t\t\t\t\tblindness. Five successes or more may destroy the eyes\n\t\t\t\t\t\tcompletely, and while a werewolf can heal from such\n\t\t\t\t\t\tinjury, most creatures cannot.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Dexterity + Subterfuge Difficulty: 9\n\t\t\t\t\t\t\tDamage: Special Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Body Slam</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tPicking an opponent up over his head,\n\t\t\t\t\t\tthe assailant uses brute strength and momentum to bring\n\t\t\t\t\t\tsome serious pain.\n\t\t\t\t\t\tThis maneuver first requires a successful grapple attack; if the enemy can’t break free that turn, the attacker\n\t\t\t\t\t\tmay use her next action to slam him into the nearest and\n\t\t\t\t\t\tmost painful surface. Generally, this attack inflicts bashing damage; if the surface happens to be sharp, spiked or\n\t\t\t\t\t\tincredibly hot, however, said pain might be lethal.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: Strength +2\n \t\t\t\t\t\t\tActions: 2\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Curbstomp</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBracing his opponent’s face against\n\t\t\t\t\t\ta curb or other solid surface, the attacker then slams his\n\t\t\t\t\t\tfoot down on the back of the enemy’s head. A favorite\n\t\t\t\t\t\ttactic of Bone Gnawer and Get of Fenris street-fighters,\n\t\t\t\t\t\tthis move can break teeth, crack jaws, snap spines or crush\n\t\t\t\t\t\tskulls... especially when done by a werewolf!\n\t\t\t\t\t\tCurbstomping requires a stunned or immobilized\n\t\t\t\t\t\ttarget, plus a turn to place his face into position. After\n\t\t\t\t\t\tthat, the attacker stomps, and physics does the rest. The\n\t\t\t\t\t\tattacker rolls his Strength for the attack. This assault in-\n\t\t\t\t\t\tflicts lethal damage, and may leave the opponent unable\n\t\t\t\t\t\tto bite afterward (Storyteller’s call) until the injury heals.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Strength + Brawl\n \t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: Strength +2\n \t\t\t\t\t\t\tActions: 2\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Low Blow</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tJust what it says. Wherever the attacker\n\t\t\t\t\t\thits (septum, nuts, kidneys, etc.), it’s going to hurt. A lot.\n\t\t\t\t\t\tAssuming the assailant makes a successful attack roll,\n\t\t\t\t\t\ther target winds up stunned for one turn for each health\n\t\t\t\t\t\tlevel inflicted after the soak roll. He can try to shrug it\n\t\t\t\t\t\toff with a Stamina roll (difficulty 8), but otherwise he’s\n\t\t\t\t\t\twrithing or paralyzed with pain. Normally, this trauma\n\t\t\t\t\t\tinvolves bashing damage. A low blow struck with claws,\n\t\t\t\t\t\tteeth, blades, or crushing force, however, is lethal.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 7\n\t\t\t\t\t\t\tDamage: Strength + Stun Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Pistol Whip</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBelting her target across the face or\n\t\t\t\t\t\tskull with a gun or other slender, heavy object, the attacker adds some extra emphasis to her argument... and\n\t\t\t\t\t\tpossibly cracks the target’s skull as well. Obviously, this\n\t\t\t\t\t\tmaneuver requires a gun or similar instrument (crowbar,\n\t\t\t\t\t\ttruncheon, candlestick, etc.), and it inflicts lethal dam-\n\t\t\t\t\t\tage. A character hit with a successful pistol whip may be\n\t\t\t\t\t\tstunned for one turn if he fails a Stamina roll (difficulty\n\t\t\t\t\t\t8), and for two turns if he botches that roll.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro\n\t\t\t\t\t\t\tRoll: Dexterity + Melee\n \t\t\t\t\t\t\tDifficulty: 7\n\t\t\t\t\t\t\tDamage: Strength +2/L\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Special Maneuvers\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Special Maneuvers</h1>\n\t\t\t\t\t<p>Werewolves are born fighters. Even so, certain maneuvers must be taught by skilled warriors. Many \t of the\n\t\t\t\t\t\tfollowing tactics demand bestial flexibility too — normal\n\t\t\t\t\t\tpeople lack the natural grace or weaponry essential to such\n\t\t\t\t\t\ttactics. In game terms, a Garou character may begin the\n\t\t\t\t\t\tgame knowing one selected maneuver from this list; to\n\t\t\t\t\t\tlearn more, he’ll need to spend time with an appropriate\n\t\t\t\t\t\tmentor (another werewolf who knows the trick) and then\n\t\t\t\t\t\tpractice what he’s learned.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Evasive Action</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAnimals excel at getting out of\n\t\t\t\t\t\tharm’s way. By leaping, spinning, whirling, and otherwise\n\t\t\t\t\t\tdodging attacks, a werewolf can set her opponent up for\n\t\t\t\t\t\ta surprise blow.\n\t\t\t\t\t\tIn game terms, this maneuver works like a dodge,\n\t\t\t\t\t\talthough the evasive character cannot abort her previous\n\t\t\t\t\t\tdeclared action to use this tactic. Each success scored by\n\t\t\t\t\t\tthe evader subtracts one success from the attacker’s roll.\n\t\t\t\t\t\tIf she scores more successes than her attacker does, she\n\t\t\t\t\t\tcan hit him in the next turn at –1 to her attack difficulty,\n\t\t\t\t\t\tassuming that she acts before he does.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\n\t\t\t\t\t\t\tRoll: Wits + Athletics\n \t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: None\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Hamstring</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBiting into his foe’s lower leg, the as-\n\t\t\t\t\t\tsailant tears out her tendons. This cripples two-legged\n\t\t\t\t\t\tenemies and hampers four-legged ones severely. In game\n\t\t\t\t\t\tterms, a successful hamstring attack knocks a bipedal target\n\t\t\t\t\t\tover and makes it hard for her to stand again (Dexterity\n\t\t\t\t\t\t+ Athletics, difficulty 8), much less move (1/4 normal\n\t\t\t\t\t\tmovement) until the injury heals. Multi-legged opponents\n\t\t\t\t\t\thalve their usual movement, and may be pulled down.\n\t\t\t\t\t\tunless they make a successful Dexterity + Athletics move\n\t\t\t\t\t\tto remain standing (difficulty 7).\n\t\t\t\t\t\tWhen dealt out by a werewolf’s fangs or claws, the damage\n\t\t\t\t\t\tinflicted by this attack is aggravated. Humanoid characters\n\t\t\t\t\t\tcan try to hamstring an enemy with a blade or axe, using\n\t\t\t\t\t\tDexterity + Melee (difficulty 9) and inflicting lethal damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Crinos, Hispo, Lupus\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 8 / 9\n\t\t\t\t\t\t\tDamage: Strength + Cripple Actions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>\n\t\t\t\t\t\tJaw Lock\n\t\t\t\t\t</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis common lupine tactic can force a\n\t\t\t\t\t\tsmart opponent to surrender without injuring her. The\n\t\t\t\t\t\tattacking werewolf grips his rival’s throat with his teeth,\n\t\t\t\t\t\tbut does not bite her... yet.\n\t\t\t\t\t\tThis attack can be performed only if the attacker is\n\t\t\t\t\t\tin a position to use his mass to his advantage. It’s usually\n\t\t\t\t\t\tdone once the rival has been flipped over or knocked to\n\t\t\t\t\t\tthe ground. The attacking wolf then wraps his jaws around\n\t\t\t\t\t\tthe rival’s throat — a bite roll with an additional +1 to its\n\t\t\t\t\t\tdifficulty. If the rival chooses to fight back, both players\n\t\t\t\t\t\troll a resisted Strength + Athletics roll; if the attacker\n\t\t\t\t\t\twins, he forces the other wolf to the ground and pins her;\n\t\t\t\t\t\tif the attacker loses, he fails to immobilize his target, but\n\t\t\t\t\t\tinflicts the usual bite damage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMany animals instinctively surrender at this point. If\n\t\t\t\t\t\tthe defender chooses not to give up, her player can roll\n\t\t\t\t\t\ther Strength + Brawl on the next turn, in a resisted roll\n\t\t\t\t\t\tagainst the attacker’ Strength + Brawl. The defender’s\n\t\t\t\t\t\tdifficulty is the attacker’s Brawl + 4, while the attacker’s\n\t\t\t\t\t\tdifficulty is the defender’s Brawl +2. If she fails, she remains pinned; if she matches his successes, she pulls free\n\t\t\t\t\t\tbut takes damage equal to the attacker’s successes in that\n\t\t\t\t\t\tturn. (She can try to soak this damage.) Should she score\n\t\t\t\t\t\tmore successes than he did, she wins free — probably to\n\t\t\t\t\t\tteach her rival the error of his ways.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Crinos, Hispo, Lupus\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n \t\t\t\t\t\t\tDifficulty: 6\n\t\t\t\t\t\t\tDamage: None/ Special\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Leaping Rake</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSailing past her opponent, the attacker lashes out with claws or a weapon, hopefully dishing\n\t\t\t\t\t\tup some harm in the process. Assuming she succeeds, the\n\t\t\t\t\t\tassailant winds up out of her enemy’s attack range.\n\t\t\t\t\t\tIn game terms, the player picks where she wants her\n\t\t\t\t\t\tcharacter to land. The Storyteller figures out how many\n\t\t\t\t\t\tsuccesses on a Dexterity + Athletics roll she’ll need in order\n\t\t\t\t\t\tto get there safely. (Difficulty is 3; distances can be found\n\t\t\t\t\t\tunder Jumping in the Physical Feats section.) If the player\n\t\t\t\t\t\tscores enough successes to reach her goal, she may try to tag\n\t\t\t\t\t\ther target with an additional Dexterity + Brawl roll. If she\n\t\t\t\t\t\tfails the jump roll, she winds up within her enemy’s reach.\n\t\t\t\t\t\tA Homid- or Glabro-form werewolf could attempt\n\t\t\t\t\t\tthis trick with a weapon, inflicting lethal or perhaps\n\t\t\t\t\t\tbashing damage with a successful Dexterity + Melee roll.\n\t\t\t\t\t\tIt’s most effective, however, in Crinos form, when the\n\t\t\t\t\t\twerewolf’s claws cause aggravated injury with a war-wolf’s\n\t\t\t\t\t\tfull strength behind it.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Homid, Glabro, Crinos\n\t\t\t\t\t\t\tRoll: Dexterity + Athletics/ Dexterity + Brawl\n\t\t\t\t\t\t\tDifficulty: 8\n\t\t\t\t\t\t\tDamage: Strength + 1\n \t\t\t\t\t\t\tActions: 2\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Taunt</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA Ragabash favorite! The attacker mocks,\n\t\t\t\t\t\tthreatens, and tempts his opponent, seeking to drive her\n\t\t\t\t\t\tto distraction or stupidity. For every two successes the\n\t\t\t\t\t\tassailant scores on a roll of Manipulation + Intimidation\n\t\t\t\t\t\t(for non-Garou) or Expression (for other werewolves),\n\t\t\t\t\t\tthe target loses one die from her next action.\n\t\t\t\t\t\tA Garou may be taunted into frenzy. If the attacker\n\t\t\t\t\t\tscores one success or more, the defender must make a\n\t\t\t\t\t\tRage roll; if an entire pack is taunting her (see below),\n\t\t\t\t\t\tthe frenzy difficulty is reduced by one.\n\t\t\t\t\t\tThis tactic may be used by entire pack (see Pack Tactics),\n\t\t\t\t\t\tin which case its effects add up as each taunting wolf takes\n\t\t\t\t\t\ta turn. Prey taunted this way may soon wind up unable to\n\t\t\t\t\t\tact at all. A target whose dice pool is reduced to nothing\n\t\t\t\t\t\tcan’t do anything except dodge, scream, and probably die.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: All forms\t\t\n\t\t\t\t\t\t\tRoll: Manipulation + Expression/ Intimidation\n\t\t\t\t\t\t\tDifficulty: Opponent’s Wits + 4\n\t\t\t\t\t\t\tDamage: None\n \t\t\t\t\t\t\tActions: 1\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Wishbone</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGrabbing a foe by an extremity or two, a\n\t\t\t\t\t\twerewolf can use her incredible strength to rip said enemy\n\t\t\t\t\t\tlimb from limb. Even more effective when employed by a\n\t\t\t\t\t\tpack of wolves, this attack may be used for intimidation,\n\t\t\t\t\t\ttorture, or grotesque theatricality.\n\t\t\t\t\t\tEach character involved in the wishbone attempt\n\t\t\t\t\t\tmust successfully roll Dexterity + Brawl. The difficulty\n\t\t\t\t\t\tstarts at 6, and drops by one for each Garou involved in\n\t\t\t\t\t\tthe attack. Assuming success, the monsters can use their\n\t\t\t\t\t\tnext action to give a nice hard yank.\n\t\t\t\t\t\tThis damage is lethal if the werewolves are using brute\n\t\t\t\t\t\tstrength, aggravated if they employ their teeth. Obviously,\n\t\t\t\t\t\tthe Garou can choose not to pull; this tends to be a rather\n\t\t\t\t\t\teffective method of coercion. If the werewolves decide to\n\t\t\t\t\t\tmake things last, they might pull slowly, inflicting bashing\n\t\t\t\t\t\tdamage rather than lethal or aggravated injury. And if the\n\t\t\t\t\t\twerewolf’s not in the mood to play around, she might simply\n\t\t\t\t\t\tdecide to tear things off. If any one Garou inflicts more\n\t\t\t\t\t\tthan three health levels (after soaking) with this attack,\n\t\t\t\t\t\tthe extremity in question is broken or... um, removed.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tUsable By: Glabro, Crinos, Hispo, Lupus\n\t\t\t\t\t\t\tRoll: Dexterity + Brawl\n\t\t\t\t\t\t\tDifficulty: 6 / –1 for each additional werewolf involved\n\t\t\t\t\t\t\tDamage: Strength (for each Garou involved)\n\t\t\t\t\t\t\tActions: 2\n\t\t\t\t\t\t</b>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Pack Tactics\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h1>Pack Tactics</h1>\n\t\t\t\t\t\t<p> Werewolves, like true wolves, are more efficient in\n\t\t\t\t\t\t\tpacks. Beyond the obvious devastation wrought by a bunch\n\t\t\t\t\t\t\tof shapechanging monstrosities, certain combat maneuvers make full use of the bond between packmates. The\n\t\t\t\t\t\t\tfollowing tactics require a certain familiarity — typically\n\t\t\t\t\t\t\tthe spiritual bond provided by a common totem spirit —\n\t\t\t\t\t\t\tbefore they can be performed by the werewolves in question. At the Storyteller’s option, a pack of Garou who’ve\n\t\t\t\t\t\t\ttrained together might use some of these maneuvers as\n\t\t\t\t\t\t\twell, though at an additional +1 difficulty.</p>\n\n\t\t\t\t\t\t<p>As a group, the pack may know one common maneuver\n\t\t\t\t\t\t\tfor each point of Gnosis possessed by the packmate with\n\t\t\t\t\t\t\tthe lowest Gnosis rating. This preternatural awareness\n\t\t\t\t\t\t\tallows them to share an uncanny level of coordination.\n\t\t\t\t\t\t\tThe following entries merely scratch the surface of what\n\t\t\t\t\t\t\tan imaginative pack can do, and each entry features a\n\t\t\t\t\t\t\tminimum number of packmates necessary to perform the\n\t\t\t\t\t\t\tfeat. Coming up with new tactics may be worth a point\n\t\t\t\t\t\t\tof Glory or Wisdom Renown, and will certainly make\n\t\t\t\t\t\t\tyour pack a more formidable entity. For other potential\n\t\t\t\t\t\t\tpack-based tactics, see Flank or Rear Attacks, Sweep, Taunt,\n\t\t\t\t\t\t\tand Wishbone, above, as well as Long Running, Sensing,\n\t\t\t\t\t\t\tand Shadowing in the Physical Feats section, and Hunting,\n\t\t\t\t\t\t\tSearching, and Tracking under the Mental Feats section.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h4>Fur Gnarl</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tAs one packmate strips away protective layers from the prey, a second packmate darts in to\n\t\t\t\t\t\t\t\tattack the freshly exposed area. The protection in question doesn’t have to be fur — it could be armor plating,\n\t\t\t\t\t\t\t\tprotective gear, or something else. Either way, the target\n\t\t\t\t\t\t\t\tbecomes more vulnerable, thanks to a tag-team assault.\n\t\t\t\t\t\t\t\tThe first attacker rolls Dexterity + Brawl, difficulty\n\t\t\t\t\t\t\t\t7, to tear away the armor; for each two successes on this\n\t\t\t\t\t\t\t\troll, the defender loses one die from his soak rolls for\n\t\t\t\t\t\t\t\tthat location. The next packmate can then attack that\n\t\t\t\t\t\t\t\tarea; although she adds two to her difficulty, that second\n\t\t\t\t\t\t\t\twerewolf hits that weak spot, bypassing the protection\n\t\t\t\t\t\t\t\tthat would be there if her packmate hadn’t removed it\n\t\t\t\t\t\t\t\tfirst. Until he can regrow or replace his armor, the prey\n\t\t\t\t\t\t\t\tremains in pretty sad shape... especially since the were-\n\t\t\t\t\t\t\t\twolves can strip away more layers with further attacks.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\tUsable By: Glabro, Crinos, Hispo, Lupus\n\t\t\t\t\t\t\t\t\tPackmates Required: 2 or more\n\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\tHarrying\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tWolves typically run their prey to ground,\n\t\t\t\t\t\t\t\tseparating groups and then driving a potential meal to\n\t\t\t\t\t\t\t\texhaustion. Garou do the same thing, especially when a\n\t\t\t\t\t\t\t\tfoe is too dangerous to attack head-on.\n\t\t\t\t\t\t\t\tTo harry a target, at least four werewolves close in —\n\t\t\t\t\t\t\t\tone in front of the prey, one behind it, and two or more on\n\t\t\t\t\t\t\t\teach flank. The rearmost Garou drives the target towards\n\t\t\t\t\t\t\t\tthe others, then breaks off as the one in front jumps out\n\t\t\t\t\t\t\t\tof cover, snapping and snarling. The packmates trade off\n\t\t\t\t\t\t\t\tpositions, never actually closing in until the prey gets\n\t\t\t\t\t\t\t\tworn down. If and when the prey or werewolves stand\n\t\t\t\t\t\t\t\tand fight, combat proceeds normally.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tThe game system for harrying prey works like this:\n\t\t\t\t\t\t\t\tThe rearmost Garou makes a Dexterity + Athletics roll,\n\t\t\t\t\t\t\t\tdifficulty 5; the prey makes the same roll at the same difficulty. If the werewolf scores more successes, she chases\n\t\t\t\t\t\t\t\tthe prey toward another packmate, “handing him off” for\n\t\t\t\t\t\t\t\tanother round of harrying.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tIf the prey scores more successes than the werewolf\n\t\t\t\t\t\t\t\tplayer does, he wins a head start. The Garou player can\n\t\t\t\t\t\t\t\ttry to harry him again, but this time each success he rolled\n\t\t\t\t\t\t\t\tbeyond her own adds +1 to her difficulty. She must exceed\n\t\t\t\t\t\t\t\ther prey’s successes at the new, higher difficulty in order to\n\t\t\t\t\t\t\t\tchase him to the next packmate. (A werewolf whose initial\n\t\t\t\t\t\t\t\tattempt was beaten by three successes, for example, must\n\t\t\t\t\t\t\t\tbeat her prey at difficulty 8 during the next attempt, while\n\t\t\t\t\t\t\t\ther prey still rolls against difficulty 5.) If she succeeds, the\n\t\t\t\t\t\t\t\tprey escapes and the pack must chase him down again.\n\t\t\t\t\t\t\t\tFor each successful “hand-off,” the prey adds +1 to his\n\t\t\t\t\t\t\t\tdifficulty; thus, he rolls against difficulty 6 when facing the\n\t\t\t\t\t\t\t\tsecond werewolf, difficulty 7 when facing the third, and\n\t\t\t\t\t\t\t\tso on until he’s worn down and either turns to fight, sur-\n\t\t\t\t\t\t\t\trenders, or collapses from exhaustion. For each successful\n\t\t\t\t\t\t\t\t“hand-off” after the first, the prey loses one die from his\n\t\t\t\t\t\t\t\tdice pools. Normal humans also lose one Willpower point\n\t\t\t\t\t\t\t\teach time they’re “handed off” between werewolves, while\n\t\t\t\t\t\t\t\thuman-like entities (vampires, changelings, mages, etc.) lose\n\t\t\t\t\t\t\t\tone Willpower point for every two successful exchanges.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tGarou typically harry their prey in one of their lupine forms; Homid and Glabro aren’t usually frightening\n\t\t\t\t\t\t\t\tenough, while Crinos tends to finish the “game” in a hurry.\n\t\t\t\t\t\t\t\tMany tribes, especially the Shadow Lords, Red Talons,\n\t\t\t\t\t\t\t\tand Get of Fenris, use harrying to kidnap and initiate their\n\t\t\t\t\t\t\t\tnew cubs before or during the First Change. Welcome to\n\t\t\t\t\t\t\t\tthe Garou, kid — better get used to it!\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\tUsable By: Hispo, Lupus\n\t\t\t\t\t\t\t\t\tPackmates Required: 4 or more\n\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<h4>Savage</h4>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tSometimes called the “dogpile” by Bone\n\t\t\t\t\t\t\t\tGnawers, this assault involves a bunch of werewolves\n\t\t\t\t\t\t\t\tjumping on a fallen opponent and tearing him to shreds.\n\t\t\t\t\t\t\t\tOne Garou knocks the enemy over, and the rest charge\n\t\t\t\t\t\t\t\tin, biting and ripping with teeth and claws.\n\t\t\t\t\t\t\t\tThe brave first attacker executes a successful sweep or\n\t\t\t\t\t\t\t\ttackle maneuver; once the prey hits the ground, the packmates\n\t\t\t\t\t\t\t\tsurge in to attack. (See Blinded, Knocked Down, Immobilized, or\n\t\t\t\t\t\t\t\tStunned.) If the prey manages to survive the initial onslaught,\n\t\t\t\t\t\t\t\tit might try to stand up again This attempt requires a successful Strength + Athletics roll, with the difficulty being 4 + 1\n\t\t\t\t\t\t\t\tfor each Garou involved in the attack (maximum 10). As\n\t\t\t\t\t\t\t\tmany Bone Gnawer enemies have discovered, the dogpile\n\t\t\t\t\t\t\t\ttends to finish most enemies off in no time.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t\t\tUsable By: Any form\n\t\t\t\t\t\t\t\t\tPackmates Required: 3 or more\n\t\t\t\t\t\t\t\t</b>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Complications/Status Effects\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Maneuver complications</h1>\n\t\t\t\t\t<p>Sometimes not everything goes according to plan. Here are some maneuver complications and status effects.</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h4>Blinding</h4>\n\t\t\t\t\t<p> A character who’s been blinded by injury\n\t\t\t\t\t\tor darkness cannot dodge, parry or block incoming attacks.\n\t\t\t\t\t\tAll other actions add two to their difficulty. Given the\n\t\t\t\t\t\tkeen senses of most werewolves, a Garou player could take\n\t\t\t\t\t\tan action to sense her character’s surroundings in order\n\t\t\t\t\t\tto reduce that penalty, or else use a Gift to compensate\n\t\t\t\t\t\tfor blindness. As usual, the Storyteller is the final judge.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Knockdown</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA character who’s been knocked\n\t\t\t\t\t\toff her feet must take an action to scramble back up; if\n\t\t\t\t\t\tshe cannot do so, she may be considered to be partially\n\t\t\t\t\t\timmobilized.\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<h4>Immobilization</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf a character has been held down,\n\t\t\t\t\t\tparalyzed, or otherwise rendered unable to move, any\n\t\t\t\t\t\tcharacter who attacks him reduces her difficulty by two\n\t\t\t\t\t\tif the target is still able to move a little bit, and may hit\n\t\t\t\t\t\thim automatically if he cannot move at all.\n\t\t\t\t\t</p>\n\t\t\t\t\t<h4>Stunning</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIf — after the soak roll — a character\n\t\t\t\t\t\tsuffers health-level damage that equals or exceeds her\n\t\t\t\t\t\tStamina rating, she’s stunned until the end of the fol-\n\t\t\t\t\t\tlowing turn. The stunned character can’t do anything\n\t\t\t\t\t\texcept perhaps stumble around in a daze, and attack\n\t\t\t\t\t\trolls against her during that time reduce their\n\t\t\t\t\t\tdifficulty by two.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/maneuvers/maneuvers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/combat/maneuvers/maneuvers.component.ts ***!
  \*********************************************************/
/*! exports provided: ManeuversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManeuversComponent", function() { return ManeuversComponent; });
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

var ManeuversComponent = /** @class */ (function () {
    function ManeuversComponent() {
    }
    ManeuversComponent.prototype.ngOnInit = function () {
    };
    ManeuversComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maneuvers',
            template: __webpack_require__(/*! ./maneuvers.component.html */ "./src/app/combat/maneuvers/maneuvers.component.html"),
            styles: [__webpack_require__(/*! ./maneuvers.component.css */ "./src/app/combat/maneuvers/maneuvers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManeuversComponent);
    return ManeuversComponent;
}());



/***/ }),

/***/ "./src/app/combat/martial-arts/martial-arts.component.css":
/*!****************************************************************!*\
  !*** ./src/app/combat/martial-arts/martial-arts.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/martial-arts/martial-arts.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/combat/martial-arts/martial-arts.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t<h1>Martial Arts</h1>\n\t\t\t<p>This page describes the martial arts of the various Garou tribes and their special skills and maneuvers as well as requirements. All of these martial arts require special training by mentors well-versed in the art themselves. Advancing in these arts require training by these experienced mentors.</p>\n\t</div>\n</div>\n<br>\n<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Iskakku\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Iskakku</h1>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAccording to the Children of Gaia; Iskakku, The Way of the Staff was started by ‘Peak Who Emits The Brilliance’ an Ahroun of Ancient Kish. Generations of warriors who followed him have worked on expanding the Way. In keeping with the philosophy of its creator tribe; Iskakku is focused towards defence and subduing enemies without permanent harm. As many an arrogant Ahroun from other tribes has discovered, this in no way makes it ineffective. Unlike the other Ways of Discipline, there are no formal restriction or arduous tests for those interested in learning. Members of other tribes and Kinfolk are taught as freely as aspirants among the Children of Gaia. Students are encouraged to share what they have discovered.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUnlike Klaviskar “Fetish Staffs” created as weapons are vanishingly rare, typicaly made by other Tribes. Somewhat more widespread are Staff Fetishes which are created for different purposes ( such as the Pilgrim’s Staff) which can also serve as a weapon.\n\t\t\t\t\t\tStaves are made from wood ( generally from wood that has been coppiced from living trees or from those who have died of natural causes) or Bamboo which is harvested without harming the plant. Bamboo groves or Coppiced trees which have had there spirits awakened may grant staves that give +1 Dice to the Iskakku skill, in exchange for the appropriate chimmage.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Requirements: </b>\n\t\t\t\t\t\t1 Dodge, 1 Melee, Staff, Training\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h2>Maneuvers</h2>\n\t\t\t\t\t<b>&#9679; Attack and Block</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis Maneuver is considered always active. You may substitute Iskakku for Melee skill when using a Staff in combat.\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679; Iskakku Dodge</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs long as you are holding a staff, you may substitute your Martial Arts for Dodge. This is a manifestation of an Iskakku novice's mastery of staff balance, and ability to feint and otherwise outmaneuver his opponent by using his staff to confuse them. <b>A character must already have at least Dodge 1 in order to make use of this maneuver.</b>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Mahasu Qatu - Hand Smite</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 8<br></p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWhen being attacked by someone using another melee weapon, the character may opt to make a parry that also doubles as an attempt to dislocate the attacker’s wrist. This not only knocks the oncoming attack away, but also potentially disables his opponent. The defender makes an Iskakku+Dex roll (diff 8). If the number of successes exceeds the attacker’s successes, then the attack is not only successfully deflected, But the attacker’s wrist becomes dislocated and he may no longer use that hand until it heals (the equivalent of healing a level of bashing damage)\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Tammabukku Istu Kur – Dragon emerges from mountain</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 6<br>\n\t\t\t\t\tDamage +2 Dice</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs a sudden departure from the usual series of swings, the character suddenly thrusts the staff forward as he would normally a spear. This blow is aimed at the face and may not be attempted more than once in a row.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Tabalu Kur – Take away the Land</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 8<br>\n\t\t\t\t\tDamage +2 Dice</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWith a sweep of the staff, the attacker may attempt to trip his opponent, forcing him to the ground. The attacker rolls dex+iskakku (Diff 8) while the defender resists with dex + athletics (diff 7). If the attacker has more successes, then the defender falls. Otherwise he remains standing.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679; Isten Kima Ummante – One as an Army</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 6<br>\n\t\t\t\t\tDamage -1 Die</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe staff is wielded in such a way that both ends may be used to attack in quick succession. When using the technique, the character splits his attack dice in half, using the first (and larger if not even split) pool for his initial attack and the second pool for another attack. While these attacks aren’t as threatening as full swing, it tends to force the opponent to defend himself from the flurry of blows just to avoid being hit. All damage done with these attacks is one die less.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679; Sepu Istu An – Foot from Heaven</b>\n\t\t\t\t\t<p>Roll Dex+Brawl<br>\n\t\t\t\t\tDiff 7<br>\n\t\t\t\t\tDamage Str+3<br>\n\t\t\t\t\tActions 2</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Character uses his staff to vault himself through the air and deliver a powerful kick to his opponent. The attacker first must have a little running room, and then roll his Strength + Athletics (Diff 5) to determine if he can vault far enough to his opponent. The distance vaulted is up to 8 feet per success. Upon landing, he rolls Dexterity+Brawl (diff 7) to deliver a powerful kick to his opponent. Regular combat rules apply to this attack.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679; Sepsu Sepu – Powerful Foot</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 6<br>\n\t\t\t\t\tDamage -1 Die<br>\n\t\t\t\t\tActions 1</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn addition to the extra attack allowed by Isten Kima Ummanante, the character may now divide his attack dice into three pools and use the third for a kick. Using all three blows is usually reserved for fighting lots of untrained combatants.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679;&#9679; Adannu Lukur Daku – Appointed time of the Enemy’s Demise</b>\n\t\t\t\t\t<p>Roll Dex+Iskakku<br>\n\t\t\t\t\tDiff 8<br>\n\t\t\t\t\tDamage Normal<br>\n\t\t\t\t\tActions 2</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe master of Iskakku often ends the fight before it actually begins. He stands in wait for his opponent’s first attack; He parries with one end of the staff while moving past his opponent and then delivers a powerful blow to the back of the head with the other end. If struck with precision, the blow to the cerebellum is enough to knock nearly anyone unconscious. The defender must make a successful parry (diff 7) and then make a dex+ Iskakku roll (Diff 8) to attack. If successful, the damage dealt is not applied as health levels of damage but is compared to the opponents stamina. If the damage is greater than his Stamina, the opponent is rendered Unconscious. This imaginary damage cannot be soaked.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Kailindo\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t\t<h1>Kailindo</h1>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA fusion of shapeshifting and Asian martial arts, this combat style involves rapidly shifting all or part of the body between the forms while striking, dodging, or grappling. The Stargazer tribe guards this style as an ancient tradition. A user of Kailindo is called a Kani.\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\tBecause it involves frequent shapeshifting, Kailindo always presents a potential breach of the Veil. During combat the Kani may bypass the normal shifting rules with the exception that the shift must occur during a kailindo action. An appropriate trait must be bid for any Maneuver that requires a challenge. All maneuvers are rolled using the ability Kailindo. Opponents may counter with an appropriate defensive ability. Some Maneuvers have restrictions on how often they may be used. No Maneuver may be used more than once in a turn. \n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\tThe default damage of Kailindo maneuvers is Lethal, though the user may choose to deal bashing. On non-grapple Maneuvers, the Kani may deal aggravated damage if the form permits. When inflicting damage with a maneuver, if in Crinos, you may deal 2 base damage with your hands and feet (regardless if you are using claws or not).\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Requirements: </b>\n\t\t\t\t\t\t1 Brawl, 1 Dodge, Ability to shapeshift, Training\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h2>Maneuvers</h2>\n\t\t\t\t\t<b>&#9679; Fading Breeze</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Kailindo<br>\n\t\t\t\t\t\tShift: Yes, final form must be Hispo or Crinos<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Kani changes from a smaller to a larger form as she slowly retreats while hurling a punch kick or slash towards the opponent. <br>\n\t\t\t\t\t\tGain a 2 trait bonus on the attack.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Deceptive Wind</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Kailindo<br>\n\t\t\t\t\t\tShift: Must begin in Homid-Crinos. No shift is needed.<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 2\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBy leaping towards her opponent the Kani first feints a kick to the front, but instead passes her opponent and strikes from the side or the back while passing. <br>\n\t\t\t\t\t\tThe opponent is considered surprised, allowing the Kani to get a surprise attack. You may use this on the target once per scene, though it may be used on multiple targets in the same scene.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679; Striking the Wind</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Kailindo<br>\n\t\t\t\t\t\tShift: Must begin in a different form and end in Crinos.<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 2\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Kani takes a hit, but changes into a larger form and strikes with a counterattack. <br>\n\t\t\t\t\t\tAfter the Kani is struck in close combat, whether they take damage or not, they may reflexively spend a Rage Trait in order to make a counter attack against their attacker. This attack is made immediately after, regardless of initiative, and does not take into account (or count against) how many times their opponent has been attacked this Action. The Kani’s opponent may not use the Counterattack option on this attack.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679; Tornado Kick</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Kailindo<br>\n\t\t\t\t\t\tDamage: +1 Die<br>\n\t\t\t\t\t\tShift: Must begin in Homid-Crinos. No shift is needed.<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Kani spins around once like a tornado with incredible speed, adding momentum to the force of his blow or slash of claws. <br>\n\t\t\t\t\t\tThe damage of the attack is increased by one.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679;&#9679; Uncoiling Snake</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Kailindo<br>\n\t\t\t\t\t\tShift: Must begin in a smaller form and end in Glabro or Crinos.<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Kani throws a kick or punch or slash of claws, but shifts to a large form at the last moment, surprising an opponent with more reach and power on the blow. <br>\n\t\t\t\t\t\tThe opponent is knocked down and is considered to be -3 traits on physical actions the next turn.You may use this on the target once per scene, though it may be used on multiple targets in the same scene.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Klaviskar\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Klaviskar</h1>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe ancient art of dueling takes on an entirely new aspect in Garou society. Many challenges are resolved through gamesmanship, puzzles, quests or other methods. But the most serious contests and the bitterest feuds are almost always settled with Klaives. Ownership of a Klaive is a sacred responsibility and it is considered a mark of the seriousness with which you take the fight for Gaia. Failure to respect the Klaive or the spirits within it is often grounds for honor duels or removal of the Klaive by the Elders. Challenging someone to Klaviskar is tantamount to a death threat as almost all Klaive duels end in death. It is therefore considered dishonorable (but not unheard of) to challenge someone to Klaviskar when they do not own a Klaive.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Requirements: </b>\n\t\t\t\t\t\t1 Melee, 1 Athletics, Klaive, Training\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h2>Maneuvers</h2>\n\t\t\t\t\t<b>&#9679; Parry</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe parry is a simple move to block the opponent’s blade with the duelist’s own.<br>\n \t\t\t\t\t\tAllows the character to parry his opponents attack. If successful, they may make a free immediate Riposte Maneuver (if possessed). In addition, the character is up 2 traits for physical actions for the rest of the turn.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679; Bind</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Duelist attempts to entrap his opponents blade with his own. Each success after the first prevents the opponent from taking one action with their klaive that turn. The opponent loses any Rage she has spent to gain extra actions. The due list may do nothing but maintain the bind and taunt his foe. After a successful bind, the duelist may attempt a Disarm or Prise d’Argent at -2 diff.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Feint</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Wits+Klaviskar<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe duelist pretends to be attacking in one direction, and then dodges any attempt to block, aiming to hit elsewhere on his opponent’s body.<br>\n \t\t\t\t\t\tCountered by opponent's perception + dodge. If successful, add every additional success to your next attack within 2 actions.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Disarm</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Strength+Klaviskar<br>\n\t\t\t\t\t\tDiff 6<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn a contested Strength+Klaviskar (Vs Str+Melee if necessary) the duelist attempts to twist his opponents klaive out of their hands. His opponent's blade will land one yard away for each net success. If he botches, he looses his own weapon.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679; Blind</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 8<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGarou bleed profusely from any wound inflicted by a Klaive. Some sneaky duelists attempt to take advantage of this to blind their opponents. A single swipe to the forehead can send blood pouring into he opponents eyes for the rest of the fight. Should this maneuver succeed, all the opponents attack rolls as well as parries and dodges are increased by 1.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679; Riposte</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 4<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe duelist makes a swift attack at his exposed opponent.<br>\n \t\t\t\t\t\tThis attack is resolved immediately regardless of what current Action occurs. This maneuver may only be used directly after a Parry Maneuver.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679; Fleche</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Athletics<br>\n\t\t\t\t\t\tDiff 7<br>\n\t\t\t\t\t\tActions 3\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe duelist launches himself in an all out attack at the opponent, blade first. After the strike, the duelist comes to a halt some distance behind his opponent, and is vulnerable for an action as he regains his balance (cannot dodge for one action after this attack).\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679; Prise d’ Argent - Pressing The Silver</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 4<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis maneuver, much favored by Silver Fang duelists, uses the opponent’s blade as a guide for an attack. The duelist slides his Klaive along his opponent’s blade and drives it into her body. This Maneuver can only be done on the next action, after a successful Riposte or Parry Maneuver has been performed.\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679; Silver Shield</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 7<br>\n\t\t\t\t\t\tActions 1\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUsing his speed and the bluk of his klaive, the duelist creates a shield of silver in front of him. Each success scored on this roll may be added to any parry attempts during this turn\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679;&#9679; Swinging Slash</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 7<br>\n\t\t\t\t\t\tDamage: +3 Dice<br>\n\t\t\t\t\t\tActions 2\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe duelist commits his whole effort into a single, massive swipe at his opponent, exposing himself, but hoping to do enough damage to make that irrelevant.<br>\n\t\t\t\t\t\tDiff of any further actions this turn is increased by 2\n\t\t\t\t\t</p>\n\t\t\t\t\t<b>&#9679;&#9679;&#9679;&#9679;&#9679; Stop Hit</b>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRoll Dex+Klaviskar<br>\n\t\t\t\t\t\tDiff 7<br>\n\t\t\t\t\t\tDamage: +2 Dice<br>\n\t\t\t\t\t\tActions 2\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA duelist who has initiative over her opponent can choose to defer her action until her opponent acts. If her opponent attempts to attack, the duellist attempts to step inside his guard and deliver a fast, deadly blow that stops the opponent in her tracks, using her own forward momentum to make the blow more deadly. This attack cannot be parried or dodged, because the opponent is already committed. However, if the Stop Hit fails to incapacitate or knock down the opponent, the duelist cannot dodge or parry the attack.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/martial-arts/martial-arts.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/combat/martial-arts/martial-arts.component.ts ***!
  \***************************************************************/
/*! exports provided: MartialArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MartialArtsComponent", function() { return MartialArtsComponent; });
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

var MartialArtsComponent = /** @class */ (function () {
    function MartialArtsComponent() {
    }
    MartialArtsComponent.prototype.ngOnInit = function () {
    };
    MartialArtsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-martial-arts',
            template: __webpack_require__(/*! ./martial-arts.component.html */ "./src/app/combat/martial-arts/martial-arts.component.html"),
            styles: [__webpack_require__(/*! ./martial-arts.component.css */ "./src/app/combat/martial-arts/martial-arts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MartialArtsComponent);
    return MartialArtsComponent;
}());



/***/ }),

/***/ "./src/app/combat/stages/stages.component.css":
/*!****************************************************!*\
  !*** ./src/app/combat/stages/stages.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/stages/stages.component.html":
/*!*****************************************************!*\
  !*** ./src/app/combat/stages/stages.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t<h1>Combat Stages:</h1>\n\t\t\t<p>Combat is divided into a series of three-second turns.\n\t\t\t\tEach combat turn has three stages to make it easier to keep track\n\t\t\t\tof things.\n\t\t\t</p>\n\t</div>\n</div>\n<br>\n<div class=\"row\">\n\t<div class=\"col-sm-3\"></div>\n\t<div class=\"col-sm-6\">\n\t\t<ngb-tabset>\n\t\t\t\t<ngb-tab title=\"Initiative stage\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Initiative</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOnce combat begins, each player rolls initiative for\n\t\t\t\t\t\t\this or her character. To do this, roll one die and then add\n\t\t\t\t\t\t\tit to your character’s initiative rating (Dexterity + Wits).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe character with the highest initiative acts first, the\n\t\t\t\t\t\t\tsecond-highest goes next, and so on down the line. The\n\t\t\t\t\t\t\tStoryteller handles initiative for each of his characters\n\t\t\t\t\t\t\ttoo, and might decide for simplicity’s sake to have them\n\t\t\t\t\t\t\tall act on the same initiative.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tTies are resolved by using the highest initiative rating;\n\t\t\t\t\t\t\tif those are tied too, you could decide this tie in favor of the\n\t\t\t\t\t\t\tcharacter with the highest Wits or Dexterity (highest rating\n\t\t\t\t\t\t\twins). In story terms, both characters act simultaneously,\n\t\t\t\t\t\t\tand the effects of their actions hit home at the same time.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tTechnically, you can roll a new initiative each turn.\n\t\t\t\t\t\t\tTo speed things along, though, you might decide to simply\n\t\t\t\t\t\t\thave everyone roll one initiative for that particular combat\n\t\t\t\t\t\t\tsession and then stick with it for the rest of the scene.\n\t\t\t\t\t\t\tThe Storyteller must decide which option applies before\n\t\t\t\t\t\t\tthe action starts. Don’t try to use both options within the\n\t\t\t\t\t\t\tsame scene — it’ll get messy.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tNow, each player declares what his or her character\n\t\t\t\t\t\t\tis doing this turn. Characters with the highest initiatives\n\t\t\t\t\t\t\tact first, but their players declare their actions last\n\t\t\t\t\t\t\tso that they can anticipate and react to what the slower\n\t\t\t\t\t\t\tcharacters do. If you’re choosing to spend Rage this turn,\n\t\t\t\t\t\t\tthis stage is the time to declare that you’re doing so.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tFrom the highest initiative down, each player makes\n\t\t\t\t\t\t\tthe necessary rolls to reflect the character activities. As\n\t\t\t\t\t\t\tthe dice decide the results, the players and Storyteller\n\t\t\t\t\t\t\tdescribe the dramatic effects. Have fun with this! A bland\n\t\t\t\t\t\t\t“You lose three health levels” pales in comparison to “His\n\t\t\t\t\t\t\tclaws rip a gaping hole in your side, scraping the bone and\n\t\t\t\t\t\t\tsending a shower of blood and flesh flying — lose three\n\t\t\t\t\t\t\thealth levels and feel the pain!”\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tRemember that wound penalties subtract directly\n\t\t\t\t\t\t\tfrom a character’s initiative rating.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>OPTIONAL RULE: PACK INITIATIVE</b>\n\t\t\t\t\t\t\tWerewolves are pack animals bound by uncanny\n\t\t\t\t\t\t\tinstincts. To reflect this element, you might allow a\n\t\t\t\t\t\t\tpack of Garou who share a single totem to share a single\n\t\t\t\t\t\t\tinitiative roll as well. Assuming that the packmates agree\n\t\t\t\t\t\t\ton this course of action, the pack’s alpha makes the roll\n\t\t\t\t\t\t\tfor the entire pack and then, for the duration of that\n\t\t\t\t\t\t\tscene, each werewolf in that pack acts in the order of\n\t\t\t\t\t\t\ttheir individual Dexterity Traits, highest down to lowest.\n\t\t\t\t\t\t\tTies can be resolved either with a coin flip, a dice roll,\n\t\t\t\t\t\t\taccording to the pack hierarchy, or simply by saying,\n\t\t\t\t\t\t\t“Hey, it’s cool — you go first, and I’ll follow your lead.”\n\t\t\t\t\t\t\tThe roll itself can be based on either the alpha\n\t\t\t\t\t\t\tcharacter’s own initiative rating, or on the average of\n\t\t\t\t\t\t\tall the packmates’ initiative ratings — that is, their\n\t\t\t\t\t\t\tinitiative ratings added together and then divided by\n\t\t\t\t\t\t\tthe number of packmates involved in that fight. The\n\t\t\t\t\t\t\t“group average method” would probably work best un-\n\t\t\t\t\t\t\tless the alpha has a higher base than the other Garou;\n\t\t\t\t\t\t\tfor simplicity’s sake, though, you may want to figure\n\t\t\t\t\t\t\tout that group initiative base before the fur starts flying.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Attack stage\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Attack:</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWhen the blood hits the fan, the dice pool you employ\n\t\t\t\t\t\t\tdepends upon what your character is doing that turn:\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf your character doesn’t have points in\n\t\t\t\t\t\t\tthe necessary Ability, fall back to the Attribute (Dexterity).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Close Combat: </b> Dexterity + Brawl (unarmed) or Dexterity + Melee (armed).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\tRanged Combat: \t</b>Dexterity + Firearms (guns)\n\t\t\t\t\t\t\tor Dexterity + Athletics (thrown weapons).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p><b>Most attacks are made versus difficulty 6.</b></p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThis can be adjusted however for situational modifiers like long range or cramped quarters.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn ranged combat, your weapon may modify your dice\n\t\t\t\t\t\t\tpool or difficulty (due to rate of fire, a targeting scope, etc.); check the weapon’s statistics for details.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAny extra successes you get above the first adds one die to your damage roll.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tRemember you can abort your action at any time to do a defensive maneuver as long as your character hasn't made an action yet.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAborting requires you to roll a willpower rating of 6 or use a willpower point. Doing so allows you to do a block, dodge or parry. (See Defensive Maneuvers)\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Resolution stage\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Resolution:</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOnce the attacks have landed, the players determine how\n\t\t\t\t\t\t\tmuch damage the combatants have inflicted and received.\n\t\t\t\t\t\t\tTo figure out how much damage has been inflicted,\n\t\t\t\t\t\t\tthe attacking player rolls her dice pool against difficulty\n\t\t\t\t\t\t\t6. Each success deals out one health level of damage.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tReally successful attacks inflict more damage. For each\n\t\t\t\t\t\t\tsuccess above the first one that the player scores on her attack\n\t\t\t\t\t\t\troll, she adds one more die to the damage dice pool. (Three\n\t\t\t\t\t\t\tsuccesses would add two more dice, etc.) This way, skilled or\n\t\t\t\t\t\t\tlucky combatants can make hamburger of their opponents.\n\t\t\t\t\t\t\tThankfully, werewolves heal with devastating speed.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Example:</b> You have an axe (Strength +3 damage), your strength is two. If you get one success, you roll 5 dice. If you get three successes, you roll 7 dice.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAfter damage have been rolled against your character, you are allowed to do a soak roll. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Soaking\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Soaking:</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tLiving beings tend to be fairly resilient, and so\n\t\t\t\t\t\t\tcharacters who take damage can try to “soak” it before\n\t\t\t\t\t\t\tsubtracting health levels from those injuries. To soak damage, roll your character’s Stamina against a difficulty\n\t\t\t\t\t\t\tdetermined by the damage:\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tBashing damage can be soaked by any character\n\t\t\t\t\t\t\tat difficulty 6.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tLethal damage can be soaked by Garou and many\n\t\t\t\t\t\t\tother supernatural creatures at difficulty 6. Humans can-\n\t\t\t\t\t\t\tnot normally soak lethal damage, although exceptionally\n\t\t\t\t\t\t\ttough ones may be able to try and soak it (Storyteller’s\n\t\t\t\t\t\t\toption) at difficulty 8.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAggravated damage, other than that inflicted by\n\t\t\t\t\t\t\tsilver, can be soaked by Garou at difficulty 6 in any form\n\t\t\t\t\t\t\texcept their breed form. Silver damage cannot be soaked\n\t\t\t\t\t\t\tin any form except the breed form, and metis Garou can’t\n\t\t\t\t\t\t\tsoak it at all. To homid and lupus Garou, silver stings\n\t\t\t\t\t\t\texposed skin when those werewolves are in their breed\n\t\t\t\t\t\t\tforms, but inflicts damage only if it’s been fashioned into\n\t\t\t\t\t\t\tweapons... in which case blades or bullets are lethal and\n\t\t\t\t\t\t\tblunt-force weapons deal out bashing damage. Non-\n\t\t\t\t\t\t\tGarou, of course, can’t soak aggravated damage at\n\t\t\t\t\t\t\tall unless they have some form of supernatural\n\t\t\t\t\t\t\tresistance to such injuries.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Spending Rage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Spending Rage</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe sacred fury within all Garou allows a player\n\t\t\t\t\t\tto spend Rage points in order to perform the following feats:\n\t\t\t\t\t</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b>Take Extra Actions:</b> For each point of Rage\n\t\t\t\t\t\t\t\tspent, the character can take one extra action that\n\t\t\t\t\t\t\t\tturn. The player must declare that she’s spending\n\t\t\t\t\t\t\t\tRage for extra actions at the beginning of that turn.\n\t\t\t\t\t\t\t\tOnce she decides to spend those Rage points, they’re\n\t\t\t\t\t\t\t\tofficially spent, and cannot be used for anything else\n\t\t\t\t\t\t\t\tthat turn. Other limits apply, too – see below.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b> Change Forms:</b>\n\t\t\t\t\t\t\t\tAt any point in the turn, a\n\t\t\t\t\t\t\t\tplayer can decide to spend a point of Rage, \n\t\t\t\t\t\t\t\timmediately shifting his werewolf into any one of the five\n\t\t\t\t\t\t\t\tGarou forms.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b> Ignore Stunning:</b>\n\t\t\t\t\t\t\t\tUnder normal circumstances,\n\t\t\t\t\t\t\t\ta character who takes a lot of damage is stunned,\n\t\t\t\t\t\t\t\tand cannot act for the remainder of that turn.\n\t\t\t\t\t\t\t\tA werewolf, however, can spend\n\t\t\t\t\t\t\t\ta Rage point that turn and keep moving normally.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<b> Ignore Pain:</b>\n\t\t\t\t\t\t\t\tIn similar fashion, a werewolf\n\t\t\t\t\t\t\t\tplayer can spend a point of Rage to let her character\n\t\t\t\t\t\t\t\tignore the dice penalty for one health level worth\n\t\t\t\t\t\t\t\tof damage. This option does not heal the damage,\n\t\t\t\t\t\t\t\tit lasts for only one turn, and it alleviates only one\n\t\t\t\t\t\t\t\thealth level’s penalty for each point of Rage spent this\n\t\t\t\t\t\t\t\tway. After that turn, the pain-penalties kick in again.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<h3>Extra Action Limitations</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Rage Score:</b> \n\t\t\t\t\t\tWithin a single turn, a player\n\t\t\t\t\t\tcan spend up to half his character’s permanent Rage\n\t\t\t\t\t\tscore in Rage points (rounded up) when getting\n\t\t\t\t\t\textra actions. A Garou with Rage 5, for example,\n\t\t\t\t\t\tcan spend three Rage for three extra actions that\n\t\t\t\t\t\tturn. The player could spend more Rage in order to\n\t\t\t\t\t\tignore stunning or pain, but cannot get more than\n\t\t\t\t\t\tthree extra actions that turn.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Timing:</b> \n\t\t\t\t\t\tRage spent for extra actions must be\n\t\t\t\t\t\tdeclared at the beginning of the turn. Other Rage\n\t\t\t\t\t\texpenditures can be declared at any point within\n\t\t\t\t\t\tthat turn.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Speed:</b> \n\t\t\t\t\t\tIn a single turn, a character can take\n\t\t\t\t\t\tonly as many “normal” extra actions as she has dots\n\t\t\t\t\t\tin either her Dexterity or Wits, whichever is lower.\n\t\t\t\t\t\tA Dexterity 4/Wits 3 Garou, for instance, could take\n\t\t\t\t\t\tonly three extra actions without incurring a penalty.\n\t\t\t\t\t\tIf her player chooses to exceed that limit, she suffers\n\t\t\t\t\t\ta +3 penalty to all difficulties that turn. Essentially,\n\t\t\t\t\t\tthe werewolf is trying to go too fast for her body\n\t\t\t\t\t\t(Dexterity) or mind (Wits) to process. If she happens\n\t\t\t\t\t\tto be in frenzy, however, her Rage actions are limited\n\t\t\t\t\t\tonly by her Dexterity, as she’s pretty much “beyond\n\t\t\t\t\t\ther wits” to start with.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Summary\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h1>Quick summary:</h1>\n\t\t\t\t\t\t<h4>Stage 1: Initiative</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tRoll initiative (<b>1x D10 + Dexterity + Wits</b>).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tEveryone declares their actions in reverse order to let faster character act on slower characters. The character with highest initiative performs her action first. Actions can be delayed to any time later in the order of initiative.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDeclare any multiple actions, reducing dice\n\t\t\t\t\t\t\tpools accordingly. Declare Rage expenditure.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<h4>Stage 2: Attack</h4>\n\t\t\t\t\t\t<p>Uarmed close-combat attacks, roll <b>Dexterity + Brawl.</b></p>\n\t\t\t\t\t\t<p> Armed close-combat attacks, roll <b>Dexterity + Melee.</b></p>\n\t\t\t\t\t\t<p>Guns, roll <b>Dexterity + Firearms</b>.</p>\n\t\t\t\t\t\t<p>Thrown weapons, roll <b>Dexterity + Athletics</b>.</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA character can abort to a defensive action\n\t\t\t\t\t\t\t(block, dodge, parry) at any time before her\n\t\t\t\t\t\t\taction is performed, as long as you make a\n\t\t\t\t\t\t\tsuccessful Willpower roll (or a Willpower\n\t\t\t\t\t\t\tpoint is spent).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t<h4>Stage 3: Resolution</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDetermine total damage effect (weapon type or maneuver), adding any extra dice gained from successes on the attack roll.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tTargets may attempt to soak damage, if possible.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/stages/stages.component.ts":
/*!***************************************************!*\
  !*** ./src/app/combat/stages/stages.component.ts ***!
  \***************************************************/
/*! exports provided: StagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StagesComponent", function() { return StagesComponent; });
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

var StagesComponent = /** @class */ (function () {
    function StagesComponent() {
    }
    StagesComponent.prototype.ngOnInit = function () {
    };
    StagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stages',
            template: __webpack_require__(/*! ./stages.component.html */ "./src/app/combat/stages/stages.component.html"),
            styles: [__webpack_require__(/*! ./stages.component.css */ "./src/app/combat/stages/stages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StagesComponent);
    return StagesComponent;
}());



/***/ }),

/***/ "./src/app/combat/types/types.component.css":
/*!**************************************************!*\
  !*** ./src/app/combat/types/types.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/combat/types/types.component.html":
/*!***************************************************!*\
  !*** ./src/app/combat/types/types.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\">\n\t\t\t<h1>Combat/Damage types</h1>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-sm-3\"></div>\n\t<div class=\"col-sm-6\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Combat Types\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Combat Types</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWerewolves kill things. And since most things don’t\n\t\t\t\t\t\treally enjoy being killed, there’s usually a fight involved\n\t\t\t\t\t\tbefore the prey’s near-inevitable demise. When Gaia’s\n\t\t\t\t\t\tprotectors and predators enter combat, the following\n\t\t\t\t\t\tsystems help resolve the fast and brutal results:\n\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr >\n\t\t\t\t\t<h3>Close Combat:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis covers the Garou specialty: hand-\n\t\t\t\t\t\tto-hand fighting, either with weapons(Dexterity + Melee) \n\t\t\t\t\t\tor naked fang-and-claw ferocity (Dexterity + Brawl).\n\t\t\t\t\t</p>\n\t\t\t\t\t<h3>Ranged Combat:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis deals with long-distance carnage (Dexterity + Firearms):\n\t\t\t\t\t\tguns, arrows, thrown objects and the like. Characters\n\t\t\t\t\t\tneed a relatively clear line of sight in order to fight at\n\t\t\t\t\t\trange. If you can’t see it, you can’t usually hit it.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Damage Types\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Damage Types</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAll attacks have specific damage ratings, indicating \n\t\t\t\t\t\tthe number of dice to roll for the attack’s damage called the damage dice pool.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSome damage dice pools\n\t\t\t\t\t\tare based on the attacker’s Strength, while others are\n\t\t\t\t\t\tbased on the weapon used. <b>Damage dice rolls are made\n\t\t\t\t\t\tversus difficulty 6.</b> Each success on the damage roll inflicts one health level of damage on the target. However, the damage applied may be one of three types:\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<h3>Bashing damage:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tBashing damage comes from blunt-force trauma:\n\t\t\t\t\t\tfists, clubs, table legs, etc. Even normal humans heal this\n\t\t\t\t\t\ttype of damage fairly quickly, and it rarely does anything\n\t\t\t\t\t\tbut piss off a Garou. On a character sheet, bashing damage\n\t\t\t\t\t\tgets marked with a single slash (“/”) rather than an “X.”\n\t\t\t\t\t</p>\n\t\t\t\t\t<h3>Lethal damage:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLethal damage comes courtesy of sharp-edged\n\t\t\t\t\t\tweapons, firearms, spiked clubs, barbed-wire garrotes,\n\t\t\t\t\t\tchainsaws, and so on. Most living things have a hard\n\t\t\t\t\t\ttime healing lethal damage, but werewolves regenerate\n\t\t\t\t\t\tsuch injuries almost no time. Indicate this form of damage on your character sheet with an “X.”\n\t\t\t\t\t</p>\n\t\t\t\t\t<h3>Aggravated damage:</h3>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAggravated damage reflects severe injury. Even\n\t\t\t\t\t\twerewolves suffer badly from such harm, which usually\n\t\t\t\t\t\tcomes from supernatural attacks: Garou claws and teeth,\n\t\t\t\t\t\tvampire fangs, toxic waste, and some forms of fire. Silver\n\t\t\t\t\t\tinflicts aggravated damage against werewolves, too — a\n\t\t\t\t\t\tfact whose notoriety poses a constant threat to Garou. Aggravated damage takes a long time to heal, and although\n\t\t\t\t\t\tit can be soaked (except in Homid and the breed form), it cannot be regenerated — only healed by\n\t\t\t\t\t\tcertain Gifts like Mother’s Touch. Indicate aggravated\n\t\t\t\t\t\tdamage with an “*” on your character sheet.\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr >\n\t\t\t\t\t<p>\n\t\t\t\t\t\tDamage dice pools can never be reduced to lower\n\t\t\t\t\t\tthan one die; any attack that strikes its target has at\n\t\t\t\t\t\tleast a small chance of inflicting damage before a soak\n\t\t\t\t\t\troll is made. Moreover, damage effect rolls cannot\n\t\t\t\t\t\tbotch; a botched roll simply means the attack glances\n\t\t\t\t\t\tharmlessly off the target.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Armor\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h1>Armor</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSome combatants wear heavy protective gear. Others have thick hides,\n\t\t\t\t\t\tslimy skin, or other artificial or innate defenses. In game terms, it all works the\n\t\t\t\t\t\tsame way: armor adds extra dice to a character’s soak roll.\n\t\t\t\t\t\tCertain types of armor also restrict movement, and thus\n\t\t\t\t\t\tinflict a penalty to the wearer’s Dexterity-related difficulties.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tFor most non-Garou characters, armor\n\t\t\t\t\t\tdice (and only the armor dice) can\n\t\t\t\t\t\tsoak lethal damage, and\n\t\t\t\t\t\tpossibly (Storyteller’s\n\t\t\t\t\t\tdiscretion) aggravated damage, too.\n\t\t\t\t\t\tArmor may help a\n\t\t\t\t\t\tGarou soak certain\n\t\t\t\t\t\tkinds of silver damage,\n\t\t\t\t\t\ttoo.  It makes sense,\n\t\t\t\t\t\tafter all, that a flak jacket could blunt the trauma from a\n\t\t\t\t\t\twerewolf’s claws or a silver bullet; it could not, however,\n\t\t\t\t\t\tstop fire or radiation.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tArmor is not indestructible. If the damage rolled in a single attack equals twice the armor’s rating, the armor is destroyed.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/combat/types/types.component.ts":
/*!*************************************************!*\
  !*** ./src/app/combat/types/types.component.ts ***!
  \*************************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
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

var TypesComponent = /** @class */ (function () {
    function TypesComponent() {
    }
    TypesComponent.prototype.ngOnInit = function () {
    };
    TypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-types',
            template: __webpack_require__(/*! ./types.component.html */ "./src/app/combat/types/types.component.html"),
            styles: [__webpack_require__(/*! ./types.component.css */ "./src/app/combat/types/types.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypesComponent);
    return TypesComponent;
}());



/***/ }),

/***/ "./src/app/d10system/d10system.component.css":
/*!***************************************************!*\
  !*** ./src/app/d10system/d10system.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/d10system/d10system.component.html":
/*!****************************************************!*\
  !*** ./src/app/d10system/d10system.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t\t<h1>The D10 System</h1>\n\t\t\t<img id=\"d10image\" class=\"img-fluid\" src=\"assets/D10.png\">\n\t\t\t<p> Werewolf puts the success and failure of most actions\n\t\t\t\tin the hands of chance and fate. Specifically, the agents of\n\t\t\t\tchance are a number of 10-sided dice. You can find these\n\t\t\t\tin most game stores, buy them from online retailers, or\n\t\t\t\tsimulate the experience with software dice rollers \n\t\t\t\t(including a number of excellent mobile apps). The Storyteller\n\t\t\t\twill need some dice, as will the players — while the players\n\t\t\t\tcan share, the Storyteller needs some dice to make rolls\n\t\t\t\twith in secret. Both the players and the Storyteller should\n\t\t\t\thave at least 10 dice each to start with.\n\t\t\t</p>\n\t\t\t<ngb-tabset>\n\t\t\t\t<ngb-tab title=\"Dice Pools\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Dice Pools</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWhen you roll dice, you roll one die for each dot a\n\t\t\t\t\t\t\tcharacter has in a Trait. For example, if your character\n\t\t\t\t\t\t\tis trying to remember a license plate number, and he\n\t\t\t\t\t\t\thas three dots in Intelligence, you would roll three dice.\n\t\t\t\t\t\t\tHowever, it is very rare to roll an Attribute Trait all by\n\t\t\t\t\t\t\titself. Raw potential is modified by skill, and most rolls\n\t\t\t\t\t\t\tadd together the dots in an Attribute and an appropriate\n\t\t\t\t\t\t\tAbility for the action.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tFor example, your character comes up with an\n\t\t\t\t\t\t\telaborate lie to convince a pack of Red Talons to leave\n\t\t\t\t\t\t\ta human family alone. The Storyteller might ask you to\n\t\t\t\t\t\t\troll Manipulation + Subterfuge: an Attribute plus an\n\t\t\t\t\t\t\tAbility. If your character has three dots of Manipulation, \n\t\t\t\t\t\t\tyou’d take three dice, plus one more die for every\n\t\t\t\t\t\t\tdot of Subterfuge — say two dots, so two more dice. You\n\t\t\t\t\t\t\ttherefore roll five dice in total to see whether your lie is\n\t\t\t\t\t\t\tconvincing enough that the Red Talons fall for it. The\n\t\t\t\t\t\t\ttotal number of dice rolled for any action is called the dice\n\t\t\t\t\t\t\tpool.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tMost of the time, you calculate dice pools for only\n\t\t\t\t\t\t\tone action at a time, though you can modify it to take\n\t\t\t\t\t\t\tmultiple actions in a single turn (for more information,\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThough most actions combine an Attribute and an\n\t\t\t\t\t\t\tAbility into a dice pool, some actions require only an\n\t\t\t\t\t\t\tAttribute. Breaking down a door relies on the Strength\n\t\t\t\t\t\t\tAttribute alone, so no Ability is added to the dice pool.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA dice pool can’t draw from more than two Traits. In\n\t\t\t\t\t\t\taddition, if your dice pool involves a Trait with a maximum\n\t\t\t\t\t\t\trating of 10 (such as Rage or Willpower), you can’t add any\n\t\t\t\t\t\t\tother Traits to your dice pool. It is effectively impossible\n\t\t\t\t\t\t\tfor a normal human to have more than 10 dice in a dice\n\t\t\t\t\t\t\tpool. On the other hand, totem benefits and the Attribute\n\t\t\t\t\t\t\tmodifications of a werewolf’s forms can sometimes help\n\t\t\t\t\t\t\tGarou overcome the limitations of a mere mortal.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Difficulty\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Difficulties</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThere’s no point in rolling the dice unless you know\n\t\t\t\t\t\t\twhat number you’re looking for. The Storyteller assigns\n\t\t\t\t\t\t\teach action an appropriate difficulty number and tells the\n\t\t\t\t\t\t\tplayer what it is. A difficulty number is always from 2\n\t\t\t\t\t\t\tto 10 (and usually between 3 and 9). Every die a player\n\t\t\t\t\t\t\trolls that comes up equal to or higher than the difficulty\n\t\t\t\t\t\t\tnumber is one success. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf the Storyteller assigns a difficulty\n\t\t\t\t\t\t\tof 6 and you roll 5, 4, 8, 8, 2 and 6, then you have gained \n\t\t\t\t\t\t\tthree successes.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou need only one success to accomplish\n\t\t\t\t\t\t\ta task, but that success is marginal at best. If you score\n\t\t\t\t\t\t\tthree or more successes, you have succeeded completely.\n\t\t\t\t\t\t\tGetting five or more successes is a momentous event.\n\t\t\t\t\t\t\tA die that shows a 10 is always a success, no matter the\n\t\t\t\t\t\t\tdifficulty number.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr class=\"col-sm-8\">\n\t\t\t\t\t\t<p><b>Levels of Difficulty</b> (number you need to roll to succeed):</p>\n\t\t\t\t\t\t<ul class=\"text-left\">\n\t\t\t\t\t\t\t<li>Three: Trivial (scanning a small crowd for a familiar face)</li>\n\t\t\t\t\t\t\t<li>Four: Easy (following a trail of blood by scent)</li>\n\t\t\t\t\t\t\t<li>Five: Straightforward (harrying prey that’s old or ill)</li>\n\t\t\t\t\t\t\t<li>Six: Standard (firing a gun)</li>\n\t\t\t\t\t\t\t<li>Seven: Challenging Challenging (discovering a hiding spirit)</li>\n\t\t\t\t\t\t\t<li>Eight: Difficult (convincing a cop that your unlicensed gun isn’t his problem)</li>\n\t\t\t\t\t\t\t<li>Nine: Extremely difficult (walking a tightrope)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<hr class=\"col-sm-8\">\n\t\t\t\t\t\t<p><b>Degrees of Success</b> (number dice at or above the difficulty):</p>\n\t\t\t\t\t\t<ul class=\"text-left\">\n\t\t\t\t\t\t\t<li><b>One success:</b>  Marginal (keep a broken refrigerator running until the repairman arrives)</li>\n\t\t\t\t\t\t\t<li><b>Two successes:</b>  Moderate (making a handicraft that’s ugly but useful)</li>\n\t\t\t\t\t\t\t<li><b>Three successes:</b>  Complete (fixing something so that it’s good as new)</li>\n\t\t\t\t\t\t\t<li><b>Four successes:</b> Exceptional (increasing your car’s efficiency in the process of repairing it)</li>\n\t\t\t\t\t\t\t<li><b>Five or more:</b> Phenomenal (creating a masterwork.)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<hr class=\"col-sm-8\">\n\t\t\t\t\t\t<h2>Automatic Success:</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou know how to do it so well that you could do it\n\t\t\t\t\t\t\tin your sleep. Your Garou has more training in the field\n\t\t\t\t\t\t\tthan you do. So why should you have to roll? Well, you\n\t\t\t\t\t\t\tshouldn’t. Anything that streamlines play and reduces\n\t\t\t\t\t\t\tdistraction is a good thing. To that end, Werewolf has a\n\t\t\t\t\t\t\tsimple system for automatic successes, allowing you to skip\n\t\t\t\t\t\t\trolls for tasks that your character would find mundane.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf the number of dice you have in your dice pool is equal\n\t\t\t\t\t\t\tto or greater than the difficulty number, your character\n\t\t\t\t\t\t\tsucceeds automatically. No dice are rolled. This system\n\t\t\t\t\t\t\tdoesn’t work for all tasks: if you’re in combat, or another\n\t\t\t\t\t\t\tstressful situation like trying to escape a burning building,\n\t\t\t\t\t\t\tyou can’t take an automatic success.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tFurther, an automatic success is the same as rolling only one success on the roll.\n\t\t\t\t\t\t\tFor basic and repeated actions that’s often just fine. If you\n\t\t\t\t\t\t\twant to roll it — if you want to try for more than one\n\t\t\t\t\t\t\tsuccess — you can, though you do risk failure. You don’t\n\t\t\t\t\t\t\thave to take an automatic success if you don’t want to.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou can get an automatic success on a roll in another\n\t\t\t\t\t\t\tway: Spend a Willpower point (p. 147). You can only do\n\t\t\t\t\t\t\tthis once per turn, and you can’t do it too often, but it\n\t\t\t\t\t\t\tdoes guarantee that when you roll, you’ll have at least\n\t\t\t\t\t\t\tone success — and that success counts when it comes\n\t\t\t\t\t\t\tto holding off botches as well. It’s a handy thing to have\n\t\t\t\t\t\t\twhen the stakes are high.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Failures/Botches\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Failure:</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf you score no successes on your roll, your character\n\t\t\t\t\t\t\tfailed his attempted action. He missed his shot. She\n\t\t\t\t\t\t\tcouldn’t break the code. He forgot the punch-line of the\n\t\t\t\t\t\t\tjoke. Failure, while disappointing, is not nearly as bad as\n\t\t\t\t\t\t\twhat can happen if you botch a roll (below).\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<b>Example:</b> Jane’s character, Two-Skulls, is trying to\n\t\t\t\t\t\t\tfollow the trail of a group of hunters. The Storyteller tells\n\t\t\t\t\t\t\ther to roll Perception + Survival (difficulty 7). She rolls,\n\t\t\t\t\t\t\tand her dice come up 4, 5, 3, 5, 6, 6 — no successes.\n\t\t\t\t\t\t\tTwo-Skulls loses the humans’ trail near a river. As she’s\n\t\t\t\t\t\t\ttrying to regain their scent, she blunders into their camp!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h2>Botches</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tEveryone has bad days and the Garou are no exception. \n\t\t\t\t\t\t\tIn addition to success and failure, a roll can also\n\t\t\t\t\t\t\tbe a botch. When a die comes up a 1, that 1 cancels out\n\t\t\t\t\t\t\ta success. Take the 1 die and any one success, and set\n\t\t\t\t\t\t\tthem both aside. Do the same for every 1 that turns up\n\t\t\t\t\t\t\ton a roll. Thus, even seemingly successful actions can be\n\t\t\t\t\t\t\treduced to nothing.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSometimes, fate is watching the character in order to\n\t\t\t\t\t\t\treally fuck him up. If all of your dice land with no successes\n\t\t\t\t\t\t\tshowing and any of them is a 1, you have just botched\n\t\t\t\t\t\t\tthat action. Even one success can cancel the botch out.\n\t\t\t\t\t\t\tIf you have one success and seven 1s on your roll, it’s still\n\t\t\t\t\t\t\tjust a failure. It is only when you roll no successes that\n\t\t\t\t\t\t\tbotches occur.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA botch is much worse than a failure — it’s a dramatically \n\t\t\t\t\t\t\tappropriate misfortune, the worst-case outcome from\n\t\t\t\t\t\t\tany action that calls for a dice roll. Botching a Stealth\n\t\t\t\t\t\t\troll when breaking in to an office block means tripping\n\t\t\t\t\t\t\tthe alarms and making so much noise that security is\n\t\t\t\t\t\t\twaiting for you. Botch a Firearms roll when you’ve got a\n\t\t\t\t\t\t\tbead on the Wyrm-tainted councilor, and your gun jams.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf Two-Skulls had botched rather than failing, he’d have\n\t\t\t\t\t\t\twalked straight into one of the hunters’ traps and made\n\t\t\t\t\t\t\tenough noise that the whole group descended with guns\n\t\t\t\t\t\t\tat the ready.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe Storyteller decides exactly what goes\n\t\t\t\t\t\t\twrong; a botch may produce a minor inconvenience or\n\t\t\t\t\t\t\tmight result in wholesale catastrophe.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Actions\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Actions</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOver the course of the game, your character will do\n\t\t\t\t\t\t\tmany things. Most of the time, those things are fairly\n\t\t\t\t\t\t\tsimple, and thus don’t require a roll, like walking across\n\t\t\t\t\t\t\tthe street, or reading the news on a smartphone. Actions,\n\t\t\t\t\t\t\tby contrast, are anything that might produce an interesting \n\t\t\t\t\t\t\toutcome to the direction the story takes. Using a Gift,\n\t\t\t\t\t\t\t“accidentally” stabbing a challenger in the gut with your\n\t\t\t\t\t\t\tklaive, hiding while watching two of your packmates\n\t\t\t\t\t\t\tbreaking the Litany, chasing a rival pack across the rooftops \n\t\t\t\t\t\t\t— these are actions, and their success or failure will\n\t\t\t\t\t\t\talter the outcome of the story. An action typically takes\n\t\t\t\t\t\t\tone turn to complete.\n\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tIf you need only one success to accomplish an action,\n\t\t\t\t\t\t\t\tthe action in question is called a <b>simple action</b>. Actions\n\t\t\t\t\t\t\t\tthat require more successes or longer periods of time to\n\t\t\t\t\t\t\t\tcomplete are called <b>extended actions</b>. See p. 237 for more\n\t\t\t\t\t\t\t\tinformation on extended actions.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Multiple Actions\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Multiple Actions</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSometimes, a player wants his character to perform\n\t\t\t\t\t\t\tmore than one action in a single turn, such as climbing\n\t\t\t\t\t\t\ta tree while remaining quiet, or sidestepping an \n\t\t\t\t\t\t\tincoming attack and clawing at his opponent’s belly. In these\n\t\t\t\t\t\t\tsituations, the player can roll for all the actions, but each\n\t\t\t\t\t\t\tone suffers a penalty.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tThe player first declares how many actions the character \n\t\t\t\t\t\t\twill take in a turn, and determines which one has the\n\t\t\t\t\t\t\tsmallest dice pool. He may then allocate that number of\n\t\t\t\t\t\t\tdice among the actions as he sees fit, though each action\n\t\t\t\t\t\t\tmust have at least one die allocated to it.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>Example:</b> Stew wants his character, Steel-Trap-Mind, \n\t\t\t\t\t\t\tto kick the teeth out of the guy threatening him,\n\t\t\t\t\t\t\twhile using his obvious physical superiority to scare the\n\t\t\t\t\t\t\tcrap out of the thugs on both sides of him. The Glass\n\t\t\t\t\t\t\tWalker Philodox has Dexterity 2, Brawl 3, Charisma 4,\n\t\t\t\t\t\t\tand Intimidation 3. The boot to the head has a dice pool\n\t\t\t\t\t\t\tof five, while the intimidation attempt has seven dice. Five\n\t\t\t\t\t\t\tdice is the smaller pool, and Stew assigns three of those to\n\t\t\t\t\t\t\tkicking the guy, and the remaining two to scaring his friends.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tRage makes this situation a whole different story,\n\t\t\t\t\t\t\tsince it can give a Garou extra actions in a single turn\n\t\t\t\t\t\t\twithout splitting one dice pool. These extra actions cannot \n\t\t\t\t\t\t\tthemselves be split.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Reflexive Actions\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Reflexive Actions</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSometimes, it doesn’t take an appreciable length of\n\t\t\t\t\t\t\ttime to take a significant action. Instinctual reactions happen as your character is acting. Such actions are called reflexive actions, \n\t\t\t\t\t\t\tand performing one may break the normal sequence of action resolution. \n\t\t\t\t\t\t\tA player doesn’t have to “take an action” as described above to use a reflexive\n\t\t\t\t\t\t\taction. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYour character can perform one whenever the\n\t\t\t\t\t\t\topportunity arises, and may also take his normal action,\n\t\t\t\t\t\t\twithout any penalty.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSoaking damage from an attack doesn’t take any appreciable time, for example. \n\t\t\t\t\t\t\tSpending a point of Rage to take another form takes less than a second — it doesn’t\n\t\t\t\t\t\t\trequire a dice roll, and your character can do it while focusing on something else, \n\t\t\t\t\t\t\tlike gutting the fomor that tore her packmate’s arm off.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tTo perform a reflexive action, the character must\n\t\t\t\t\t\t\tusually be conscious and thus able to decide to perform\n\t\t\t\t\t\t\tthe action (though not always — characters still soak\n\t\t\t\t\t\t\tdamage when unconscious, for example). Unless otherwise specified, \n\t\t\t\t\t\t\ta character can perform any number of reflexive actions, \n\t\t\t\t\t\t\tand they don’t prevent her from taking other actions in the same turn.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Extended Actions\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Extended Actions</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tWhen you need multiple successes to accomplish even a marginal\n\t\t\t\t\t\t\tsuccess at the task in question, that action is an extended\n\t\t\t\t\t\t\taction.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn an extended action, you roll your dice pool again\n\t\t\t\t\t\t\tand again over subsequent turns, trying to collect enough\n\t\t\t\t\t\t\tsuccesses to succeed. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<b>For example:</b>Your character has\n\t\t\t\t\t\t\tbeen chasing a fomor through the city streets on foot.\n\t\t\t\t\t\t\tThe Wyrmspawn had ducked into a warehouse and\n\t\t\t\t\t\t\tslammed the door closed just as your character got there.\n\t\t\t\t\t\t\tThe Storyteller rules that it will take 15 successes to get\n\t\t\t\t\t\t\tthrough the door, but your prey gets farther away each\n\t\t\t\t\t\t\tturn and has a better chance to set up an ambush. You\n\t\t\t\t\t\t\twill succeed eventually, but will you find the fomor? \n\t\t\t\t\t\t\t<i>The Storyteller is the final authority on which situations are extended actions.</i>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou can usually take as many turns as you need to\n\t\t\t\t\t\t\tfinish an extended action. That said, the Garou seldom\n\t\t\t\t\t\t\thave the luxury of time. If any roll botches in the course\n\t\t\t\t\t\t\tof an extended action, it’s back to square one. You lose\n\t\t\t\t\t\t\tall accumulated successes, you have to start over with\n\t\t\t\t\t\t\tnothing, and the Storyteller’s probably got a whole new\n\t\t\t\t\t\t\tcatastrophe for you to deal with.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn some cases, the botch may wreck the situation so badly that you can’t start over\n\t\t\t\t\t\t\tat all; you’ve failed and that’s all there is to it. Time to\n\t\t\t\t\t\t\tmove on.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome extended actions don’t break down on a\n\t\t\t\t\t\t\tturn-by-turn basis. One roll of an extended action can\n\t\t\t\t\t\t\tencompass any segment of game time that the Storyteller\n\t\t\t\t\t\t\tdeems appropriate. For example, an Uktena researching a reawakened spirit might roll once for each night’s research. \n\t\t\t\t\t\t\tA Shadow Lord might attempt a longterm seduction of a rival’s Kinfolk sister over\n\t\t\t\t\t\t\tthe course of weeks. Many rites invoke extended actions that can take place over a long period of time.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Resisted Actions\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h2>Resisted Actions</h2>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA simple difficulty number might not\n\t\t\t\t\t\t\tbe enough to represent a struggle between\n\t\t\t\t\t\t\tcharacters. You may try to lose your tail\n\t\t\t\t\t\t\tin a daring car chase, while your pursuer\n\t\t\t\t\t\t\ttries to ram you off the road.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn such a case, you’d make an opposed or resisted\n\t\t\t\t\t\t\troll. Each participant rolls dice against a difficulty, \n\t\t\t\t\t\t\toften determined by one of your opponent’s Traits. \n\t\t\t\t\t\t\tThe person who scores the most successes wins.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn a resisted roll, you score only as many\n\t\t\t\t\t\t\tsuccesses as it takes to exceed your opponent’s successes. \n\t\t\t\t\t\t\tIn other words, the opponent’s successes eliminate your own,\n\t\t\t\t\t\t\tjust as 1s do.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIf you score four successes and your opponent scores three, \n\t\t\t\t\t\t\tyou are left with only one success: a marginal success. \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome actions (such as arm-wrestling, debating, or\n\t\t\t\t\t\t\tcat-and-mouse chases) may be both extended and resisted.\n\t\t\t\t\t\t\tIn these cases, one of the participants must achieve a\n\t\t\t\t\t\t\tcertain number of successes to triumph. On each roll, the\n\t\t\t\t\t\t\tplayer who scores higher adds the successes he got over\n\t\t\t\t\t\t\this opponent to a running tally. The winner is the first\n\t\t\t\t\t\t\tto reach the required number of successes.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/d10system/d10system.component.ts":
/*!**************************************************!*\
  !*** ./src/app/d10system/d10system.component.ts ***!
  \**************************************************/
/*! exports provided: D10systemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D10systemComponent", function() { return D10systemComponent; });
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

var D10systemComponent = /** @class */ (function () {
    function D10systemComponent() {
    }
    D10systemComponent.prototype.ngOnInit = function () {
    };
    D10systemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-d10system',
            template: __webpack_require__(/*! ./d10system.component.html */ "./src/app/d10system/d10system.component.html"),
            styles: [__webpack_require__(/*! ./d10system.component.css */ "./src/app/d10system/d10system.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], D10systemComponent);
    return D10systemComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".LogoSpace {\n\theight: 100%;\n\twidth: 100%;\n    text-align: right;\n}\n\n\n\n@media screen and (max-width: 1000px) {\n\t#werewolfLogo {\n  \t\theight: 100%;\n  \t\twidth: 100%;\n  \t\tmargin-left: 15%;\n  \t\tmargin-top: 50%;\n\t}\n}\n\n\n\n@media screen and (min-width: 1000px) {\n\t#werewolfLogo {\n\t\tmargin-top: 5em;\n\t\tmargin-right: 5em;\n\t\tmargin-left:5em;\n\t\tmargin-bottom: 5em;\n\t\theight: 75%; width: 75%;\n\t}\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"LogoSpace\">\n\t<img id=\"werewolfLogo\" class=\"clearfix img-fluid\" src=\"assets/Logo.svg\">\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        var filter = args[0];
        if (filter && Array.isArray(value)) {
            var filterKeys_1 = Object.keys(filter);
            return value.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return memo && item[keyName] === filter[keyName];
                }, true);
            });
        }
        else {
            return value;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/gifts-detail/gifts-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gifts-detail/gifts-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gift-detail{\nborder-style: solid;\nborder-color: white;\nborder-radius: 15px;\npadding: 25px; \n}"

/***/ }),

/***/ "./src/app/gifts-detail/gifts-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gifts-detail/gifts-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gift-detail\">\n\t<div *ngIf=\"gift\" >\n\t\t<div class=\"col-sm\">\n\t\t\t<h2>{{gift.name}} - Level {{gift.level}}</h2>\n\t\t\t<br>\n\t\t\t<div><span><b>Description: </b><p [innerHTML]=\"gift.description\"></p></span></div>\n\t\t\t\t<br><br>\n\t\t\t<div><span><b>System: </b><p [innerHTML]=\"gift.system\"></p></span></div>\n\t\t\t<br><br>\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<ul class=\"list-inline\"> <b>This gift is taught to: </b>\n\t\t\t\t\t<li class=\"gift list-inline-item\"\n\t\t\t\t\t*ngFor=\"let user of gift.users\">\n\t\t\t\t\t<span>{{user | titlecase}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t<div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/gifts-detail/gifts-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gifts-detail/gifts-detail.component.ts ***!
  \********************************************************/
/*! exports provided: GiftsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsDetailComponent", function() { return GiftsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GiftObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GiftObject */ "./src/app/GiftObject.ts");
/* harmony import */ var _gifts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gifts.service */ "./src/app/gifts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GiftsDetailComponent = /** @class */ (function () {
    function GiftsDetailComponent(giftService) {
        this.giftService = giftService;
    }
    GiftsDetailComponent.prototype.ngOnInit = function () {
        this.getGift();
    };
    GiftsDetailComponent.prototype.ngOnChanges = function (changes) {
        this.getGift();
    };
    GiftsDetailComponent.prototype.getGift = function () {
        var _this = this;
        this.giftService.getGifts()
            .subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                if (_this.giftObject.id === item.id)
                    _this.gift = item;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _GiftObject__WEBPACK_IMPORTED_MODULE_1__["GiftObject"])
    ], GiftsDetailComponent.prototype, "giftObject", void 0);
    GiftsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gifts-detail',
            template: __webpack_require__(/*! ./gifts-detail.component.html */ "./src/app/gifts-detail/gifts-detail.component.html"),
            styles: [__webpack_require__(/*! ./gifts-detail.component.css */ "./src/app/gifts-detail/gifts-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_gifts_service__WEBPACK_IMPORTED_MODULE_2__["GiftsService"]])
    ], GiftsDetailComponent);
    return GiftsDetailComponent;
}());



/***/ }),

/***/ "./src/app/gifts.service.ts":
/*!**********************************!*\
  !*** ./src/app/gifts.service.ts ***!
  \**********************************/
/*! exports provided: GiftsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsService", function() { return GiftsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GiftsService = /** @class */ (function () {
    function GiftsService(http) {
        this.http = http;
    }
    GiftsService.prototype.getGifts = function () {
        return this.http.get('./assets/Gifts/Gifts.json');
    };
    GiftsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GiftsService);
    return GiftsService;
}());



/***/ }),

/***/ "./src/app/gifts/gifts.component.css":
/*!*******************************************!*\
  !*** ./src/app/gifts/gifts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gift-detail-app{\n\tmargin-top: 8px;\n}\n\n.gift-filter{\n\tborder: 2px solid white;\n\tborder-radius: 5px;\n\tbackground: transparent;\n\t-webkit-text-decoration-color: gold;\n\t        text-decoration-color: gold;\n\tpadding: 5px;\n\tcolor: white;\n\tfont-family: werewolf;\n\tfont-size: 20px;\n\tmargin: 8px;\n\tmax-width: 300px;\n}\n\n.gift {\n\tcursor: pointer;\n}\n\n.scrollbar {\nmax-height: 500px;\nbackground: transparent;\noverflow-y: scroll;\nmax-width: 300px;\nmargin: auto;\nborder-style: solid;\nborder-color: white;\nborder-radius: 5px;\npadding: 25px; \nfont-family: werewolf;\nfont-size: 20px;\n}\n\n.force-overflow {\nmin-height: 10px;\n}\n\n.scrollbar-primary::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-primary::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #4285F4; }\n\n.scrollbar-danger::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-danger::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-danger::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #ff3547; }\n\n.scrollbar-warning::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-warning::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-warning::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #FF8800; }\n\n.scrollbar-success::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-success::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-success::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #00C851; }\n\n.scrollbar-info::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-info::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-info::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #33b5e5; }\n\n.scrollbar-default::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-default::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-default::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #2BBBAD; }\n\n.scrollbar-secondary::-webkit-scrollbar-track {\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #F5F5F5;\nborder-radius: 10px; }\n\n.scrollbar-secondary::-webkit-scrollbar {\nwidth: 12px;\nbackground-color: #F5F5F5; }\n\n.scrollbar-secondary::-webkit-scrollbar-thumb {\nborder-radius: 10px;\n-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\nbackground-color: #aa66cc; }"

/***/ }),

/***/ "./src/app/gifts/gifts.component.html":
/*!********************************************!*\
  !*** ./src/app/gifts/gifts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t<h1>Gifts</h1>\n\t\t\t<input class=\"gift-filter\" placeholder=\"Filter gifts\" [(ngModel)]=\"query\">\n\t\t\t<!--<div class=\"col-sm-4\">\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"homid-check\"[(ngModel)]=\"homidCheck\">Homid\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"metis-check\"[(ngModel)]=\"metisCheck\">Metis\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"checkbox\" name=\"lupus-check\"[(ngModel)]=\"lupusCheck\">Lupus\n\t\t\t\t</label>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Ragabash\" value=\"ragabash\" [checked]=\"auspiceSearchTerm==='ragabash'\" [(ngModel)]=\"auspiceSearchTerm\">Ragabash\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Theurge\" value=\"theurge\" [checked]=\"auspiceSearchTerm==='theurge'\" [(ngModel)]=\"auspiceSearchTerm\">Theurge\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Philodox\" value=\"philodox\" [checked]=\"auspiceSearchTerm==='philodox'\" [(ngModel)]=\"auspiceSearchTerm\">Philodox\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Galliard\" value=\"galliard\" [checked]=\"auspiceSearchTerm==='galliard'\" [(ngModel)]=\"auspiceSearchTerm\">Galliard\n\t\t\t\t</label>\n\t\t\t\t<label>\n  \t\t\t\t\t<input type=\"radio\" name=\"auspice-group\" id=\"Ahroun\" value=\"ahroun\" [checked]=\"auspiceSearchTerm==='ahroun'\" [(ngModel)]=\"auspiceSearchTerm\">Ahroun\n\t\t\t\t</label>\n\t\t\t</div>-->\n\t\t\t<div class=\"scrollbar scrollbar-primary col-sm-6\">\n\t\t\t\t<div class=\"force-overflow container-fluid\">\n\t\t\t\t\t<ul class=\"smooth-scroll list-unstyled\">\n\t\t\t\t\t\t<li class=\"gift list-group-item-unstyled\"\n\t\t\t\t\t\t*ngFor=\"let giftObject of giftList | search:'name':query\"\n\t\t\t\t\t\t[class.selected]=\"giftObject === selectedGift\" \n\t\t\t\t\t\t(click)=\"onSelect(giftObject)\">\n\t\t\t\t\t\t<span class=\"badge\">{{giftObject.name}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"selectedGift\" class=\"col-sm-8 gift-detail-app\">\n\t\t\t<app-gifts-detail [giftObject]=\"selectedGift\"></app-gifts-detail>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/gifts/gifts.component.ts":
/*!******************************************!*\
  !*** ./src/app/gifts/gifts.component.ts ***!
  \******************************************/
/*! exports provided: GiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsComponent", function() { return GiftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gifts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gifts.service */ "./src/app/gifts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GiftsComponent = /** @class */ (function () {
    function GiftsComponent(giftsService) {
        this.giftsService = giftsService;
    }
    GiftsComponent.prototype.ngOnInit = function () {
        this.getGifts();
    };
    GiftsComponent.prototype.onSelect = function (gift) {
        this.selectedGift = gift;
    };
    GiftsComponent.prototype.getGifts = function () {
        var _this = this;
        this.giftsService.getGifts().subscribe(function (giftList) { return _this.giftList = giftList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); }); });
    };
    GiftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gifts',
            template: __webpack_require__(/*! ./gifts.component.html */ "./src/app/gifts/gifts.component.html"),
            styles: [__webpack_require__(/*! ./gifts.component.css */ "./src/app/gifts/gifts.component.css")]
        }),
        __metadata("design:paramtypes", [_gifts_service__WEBPACK_IMPORTED_MODULE_1__["GiftsService"]])
    ], GiftsComponent);
    return GiftsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo {\n\theight: 2em;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\" routerLink=\"/home\">\n    \t<img id=\"logo\" src=\"assets/WerewolfClaws.png\" alt=\"Home\" class=\"img-fluid\">\n    </a>\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarsDefault\" aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n \n    <div  [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"werewolfNavBar\">\n      <ul class=\"navbar-nav mr-auto\">\n\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Information</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/d10system\">The D10 Ruleset</a>\t\n    \t    <a class=\"dropdown-item\" routerLink=\"/setting\">Setting and Information</a>\n    \t    <a class=\"dropdown-item\" routerLink=\"/news\">News</a>\t\t\n\t\t  </div>\n\t\t</li>\n\t\t<li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown05\" ngbDropdownToggle>Character Creation</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/creation\">General Guidelines</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/breeds\">Breed</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/auspices\">Auspice</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/tribes\">Tribe</a>\n\t\t  </div>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/characters\">Characters</a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Tribes</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/tribes/Furies\">Black Furies</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/tribes/Gnawers\">Bone Gnawers</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/tribes/Children\">Children of Gaia</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Fianna\">Fianna</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Fenris\">Get of Fenris</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Walkers\">Glass Walkers</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Talons\">Red Talons</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Lords\">Shadow Lords</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Striders\">Silent Striders</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Fangs\">Silver Fangs</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Stargazers\">Stargazers</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Uktena\">Uktena</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/tribes/Wendigo\">Wendigo</a>\n\t\t  </div>\n\t\t</li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown02\" ngbDropdownToggle>Attributes</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown02\" ngbDropdownMenu>\n\t\t  \t<u class=\"dropdown-item font-weight-bold\">Physical</u>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/attributes/Strength\">Strength</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/attributes/Dexterity\">Dexterity</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/attributes/Stamina\">Stamina</a>\n\t\t    <hr>\n\t\t  \t<u class=\"dropdown-item font-weight-bold\">Social</u>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Charisma\">Charisma</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Manipulation\">Manipulation</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Appearance\">Appearance</a>\n\t\t\t<hr>\n\t\t  \t<u class=\"dropdown-item font-weight-bold\">Mental</u>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Perception\">Perception</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Intelligence\">Intelligence</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/attributes/Wits\">Wits</a>\n\t\t  </div>\n\t\t</li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown03\" ngbDropdownToggle>Abilities</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/abilities/Talents\">Talents</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/abilities/Skills\">Skills</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/abilities/Knowledges\">Knowledges</a>\n\t\t  </div>\n\t\t</li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/gifts\">Gifts</a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown04\" ngbDropdownToggle>Combat</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown04\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/combat/types\">Types</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/combat/stages\">Combat Stages</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/combat/maneuvers\">Maneuvers</a>\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/combat/martial-arts\">Martial Arts</a>\n\t\t\t<!--<a class=\"dropdown-item\" routerLink=\"/combat/charts\">Equipment Charts</a>-->\n\t\t\t<a class=\"dropdown-item\" routerLink=\"/combat/health\">Health</a>\n\t\t\t<!--<a class=\"dropdown-item\" routerLink=\"/\">Shapeshifting</a>-->\n\t\t  </div>\n\t\t</li>\n        <li class=\"nav-item dropdown\" ngbDropdown>\n\t\t  <a class=\"nav-link dropdown-toggle\" id=\"dropdown05\" ngbDropdownToggle>Special Traits</a>\n\t\t  <div class=\"dropdown-menu\" aria-labelledby=\"dropdown03\" ngbDropdownMenu>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/traits/rage\">Rage</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/traits/gnosis\">Gnosis</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/traits/willpower\">Willpower</a>\n\t\t    <a class=\"dropdown-item\" routerLink=\"/traits/renown\">Renown</a>\n\t\t  </div>\n\t\t</li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"./assets/W20CharacterSheet.pdf\" target=\"_blank\">Character Sheet</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://thetrove.net/Books/World%20of%20Darkness/Classic%20World%20of%20Darkness/Werewolf%20(c)/Werewolf%2020th%20Anniversary/W20%20-%20Core%20Rulebook.pdf\" download=\"rulebook\" target=\"_blank\">Core Rulebook</a>\n        </li>\n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<h1 class=\"col-sm\">News and changes</h1>\n\t</div>\n\t<img id=\"settingClaws\" class=\"img-fluid settingAnkh\" src=\"assets/WerewolfClaws_Glow.png\" >\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\tThis page contains a list of the most recent updates to the site.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t<ngb-tabset>\n\t\t\t\t\t<ngb-tab title=\"Changelog\">\n\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tAdded news page.<br>\n\t\t\t\tAdded martial arts under combat section.<br>\n\t\t\t\tAdded characters section.<br>\n\t\t\t\tAdded logo<br>\n\t\t\t</p>\n\t\t\t</div>\n\t</div>\n\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t\t\t<br>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t</ngb-tabset>\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
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

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/*!***********************************************!*\
  !*** ./src/app/setting/setting.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#settingClaws {\n\theight: 140px;\n}\n#werewolfLogo {\n\theight: 20em;\n\twidth: 40em;\n}"

/***/ }),

/***/ "./src/app/setting/setting.component.html":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<h1 class=\"col-sm\">Setting and Information</h1>\n\t</div>\n\t<img id=\"settingClaws\" class=\"img-fluid settingAnkh\" src=\"assets/WerewolfClaws_Glow.png\" >\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\tThe year is 2004. The world has changed dramatically as terrorists have attacked the very heart of the United States, followed by the War on Terror in the Middle East and increased government surveillance. The US is seeing an economic boom that looks like it will last forever, but it's mainly benefitting the corporations and leaving the people in the dust. This is an age of consistent technological innovation and everyone now owns a cell phone camera. As the Weaver asserts it's influence on the dying world, the Veil has never been as threatened as now.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t<ngb-tabset>\n\t\t\t\t\t<ngb-tab title=\"Basic Information\">\n\t\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\t<b>Gameplay Information:</b> <br>\n\t\t\t\tEach player will have to update their character backstory to reflect 5 years of growth. <br>\n\t\t\t\tEach player gets 10 freebie points to represent growth during the past 5 years. These should be invested in a way that makes sense with the expanded backstory you give these characters for the past 5 years. We will distribute these together in the first session, but giving some thought to them beforehand never hurts.\n\t\t\t\tThe start date of the game is June 2004.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\t<b>Story Information:</b><br>\n\t\t\t\tIn the World of Darkness, a lot has happened as well during the past 5 years. The Stargazers have formally seceded from the Garou Nation to join the Beast Courts of Asia and the 13 tribes of the Garou are reduced to 12, weakening the unity in the fight for Gaia even more. In addition to this, the Perfect Metis is said to have been born somewhere among the Garou in these times, and it is believed to be the harbinger of the Apocalypse.\n\t\t\t\tElders of the Garou has with the appearance of the Red Star on the sky had to concluded that the Sixth Sign of the Prophecy of the Phoenix has come to pass and that the seventh, and the final battle of the apocalypse, is surely nigh.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tIn the year 2001, the mysterious Kuei-Jin moved into Los Angeles to stake their domain, and with them came the Hengeyokai from Asia. Some setting up secret Caerns in Garou territory, further encroaching on the ancient order. In May of 2001, mortal scientists could finally see the Red Star, the Eye of the Wyrm with their own eyes.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tIn the following years, Black Spiral Dancer raids increase, the megacorporations expands their reach and their invasions of the natural world, and at the end of the year 2002, the Garou experience a prophecy that the elders of the Nation interpret to say that sometime soon, new Garou will stop being born. In this time when even demons have said to have arrived in the world, the Garou are more pressed than ever.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tAnd if this was not enough, after 75% of the Hunters on the newly launched Hunter-Net was killed in under a year by supernatural causes, other organizations hunting the supernatural have started showing up. Staying hidden is harder than ever, even for the Garou.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tIn the beginning of the year 2004, A call goes out on both Glass Walker Net and among the spirits and Corax messengers of the Garou Nation that the Shadow Lords and the Silver Fangs are calling all warriors of the nation together to a concolation to decide on the next steps in the war against the Wyrm, in the name of the last Gaian king, Jonas Albrecht. The concolation will be held in half a year's time, after the celebration of midsummer. <br><br>\n\n\t\t\t\tHere, the future course of the Garou Nation will be decided.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"Vampire - Epilogue\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tFollowing that frenzied November night at Poe’s tower and the fight with the true cardinal, both the Camarilla and Sabbat of Miami were in shambles. With the cardinal dead, the Sabbat withdrew and ceased their recent offensives against the Camarilla for a time while they reorganized their ranks.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tNow that Poe had met his final death at the hands of Angel, the Camarilla of Miami stood without a Prince. Initially, both Logan, Henry and surprisingly Logan’s secretary Victoria tried to make claim to the position, but in the end the ones who played the strongest game was the Tremere regent Jonathan Maximillian. He had contacted his old sire Maximillian Strauss of the Tremere Chantry in Los Angeles and received a few more neonates, making the Tremere clan in Miami by far stronger than the other clans. As they had the backing of the Nosferatu as well due to sheltering them from the Sabbat, there was really no contest. The ventrues had to give up in the end and Jonathan became the next Prince of Miami.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHaving lost his bid for Prince, Henry instead started focusing on building his fledgling businesses. His initial “financial maneuvering” had been discovered by certain members of a multi-national megacorporation, but instead of revealing his fraud, they instead invested heavily in his new businesses as well as providing plenty of funds for Rosalie’s new club, “No Mercy”. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tDue to her efforts during the last couple of weeks and all the help provided to the Tremeres, Rosalie’s club was made a new Elysium by Jonathan after the destruction of Uprising. This gave Rosalie several new responsibilities as Keeper of Elysium, but it also gave her a core position among the kindred of Miami. Unfortunately, Jaxon had his final death that fateful night, but Rosalie somehow managed to get a hold of what remained of his art collection and used this to furnish her new club and apartment. Jonathan did not want to give Rosalie all the responsibilities of being a primogen just yet, and instead decided to give the position to Ashton, the only other remaining Toreador in the city. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tJohn Franklin disappeared from the streets of Miami for a while, delving into the arcane mysteries of the Tremere clan like never before. He spent the next nights learning everything he could about Thaumaturgy, but still occasionally did small tasks for Jonathan with his coterie.  \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tTravis had lost his friend Ermer before, and now while his life was saved, he would never be the same as he had once been. After  having been a prisoner of the Sabbat and endured that vicious car chase, Ermer’s mind was in tatters and unfortunately for Travis, the medical professionals as well as Ermer’s family decided that he should probably come home to Kentucky to get treatment. This left Travis alone, walking the streets of Miami and drinking the blood of inebriated people in order to drown his sorrows in alcohol. One of these nights, at the Death Match bar, he encountered a smoking hot chick whom he ended up buying a drink. She introduced him to a new line of work suited to his particular talents, as an assassin. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHe was still roped into doing work for the Camarilla at times, and Jonathan found him a useful person to have around, though slighly difficult to control. In that sense, he was a bit like his sire Richard.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThis was how the final months of 1998 ended for the Camarilla of Miami, and the year 1999 began. Gehenna creeping ever closer...\n\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"Werewolf: Everglades - Setting Information\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<img id=\"werewolfLogo\" class=\"clearfix img-fluid\" src=\"assets/Logo_Everglades.svg\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\tThe year is 1999 - The End Times. Fighting has resumed in the Kosovo civil war, Europe agrees on a single currency called the euro, India conducts three atomic tests despite worldwide disapproval while Pakistan stages five tests in response to the aggressions. Miami gets wracked by a bloody drug war.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tThis is the world you currently live in, a world on the brink of collapse facing the turn of the millennium. Who is reponsible for this degradation?<br>\n\t\t\t\tWell, there are those who are more responsible than others. Megacorporations rape the earth in their endless chase for profits and nations arm themselves with weapons that can potentially destroy the planet several times over. \n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tDoes anyone in this world care enough to fight the coming apocalypse?\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tThe game begins in the early to middle January of 1999, right at the beginning of the year. The setting will be in and around Miami and it's surrounding areas however your characters can come from anywhere in the world and start the game wherever you want.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tYou will play werewolves who have yet to experience their first change. Most likely at a young age as while the change can occur at any point in a person or wolf's life, it most often occurs during late teens or young adulthood. Whether you have basic knowledge about werewolves, are raised in families of kinfolk or are completely clueless about your heritage is up to you. If you are born a metis ( a child of two werewolves ), you might however possess more knowledge about werewolf society at the cost of being shunned by the rest of the werewolves. \n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tThe first session will be spent creating our characters and having a prelude session explaining the basic circumstances of your lives as well as the time leading up to your first change. What you need to have beforehand is a clear character concept ( personality, background and looks ) as well as an idea of what breed, auspice and tribe you want your werewolf to belong to. You should also consider whether the first change into a werewolf has a considerable impact on your character.\n\t\t\t</p>\n\t\t\t<br>\n\t\t\t<p>\n\t\t\t\tUse the information on this website to create a character that you want to play, and have fun. \n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tFor you are the children of Luna. \n\t\t\t</p>\n\t\t\t<br>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"Werewolf: Everglades - Epilogue\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAfter our escape on the moon bridge, we headed west towards the Sept of the Western Eye. Butch's grandfather was relieved that we had all managed to get away safely, and that Butch had also managed to best Arthur, whom we had by now all learnt was a traitor the entire time. After this night, the red star, Anthelios had become visible in the sky even outside of the Umbra and it now hangs above us as an ominous reminder of the upcoming apocalypse. It seems not to have been noticed by humans yet, though.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe didn't see Hvitr again since that night. He crept away with the cub during the night, and I don't know if we'll ever see him again. He was later declared a ronin, an exile of the Garou nation, but knowing him, he'll make it just fine on his own. Rumours of him being a traitor and fallen to the wyrm eventually started spreading. It might have originated from those Corax we met...\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWhile I'd like to say we were greeted with open arms, that is not exactly what happened. At all the caerns we stopped on our way west, Kiera was suspected of being a minion of the Wyrm due to her recent encounters with Balefire. It took all the persuasiveness we could muster, not to be chased out and hunted. When we finally arrived at the sept of the Western Eye, we were met with very harsh treatment and suspicion, however it wore off with time as the wyrmtaint started to dissipate and as we proved ourselves to the sept. Art was also incredibly helpful in convincing the sept of our innocence and explaining the situation. I hope to one day be as skilled a Galliard as him.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe made sure to report what had happened in Florida, and the Uktena in the sept decided to send a pack down there to get control of the situation and man the caerns. We later heard that the remaining Garou in the Everglades had banded together under Nikola Flame-Claw to protect the Caern of the Blue Flame that we'd helped create with Seeks-In-Darkness after the army stopped searching there. It seems they reported on several strange bear sightings in the Everglades, but did not discover anything out of the ordinary at the caern site itself. The other Uktena took over the Caern of the Sunrise Birds and the situation seems to have stabilized there.\n\t\t\t\t\t\t\n\t\t\t\t\t\tThough it didn't take long for the Black Spiral Dancers to retake their hive near the city and start harassing them once more.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe next months after our arrival at the sept, we learned that King Albrecht had succeeded in rooting out and destroying most of the wyrmcult called the Seventh Generation. We also eventually got the word that the Stargazer tribe was intending to leave the Garou Nation and join the Beast Courts of Asia instead. \n\t\t\t\t\t\tFollowing this, the elders of the Garou Nation finally admitted that the Sixth Sign of the Prophecy of the Phoenix has come to pass, and that the Seventh is soon to come. We are surely moving ever closer to the final battle of the Apocalypse. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI later heard that Naomi had used the money she escaped with to help found a Glass Walker mercenary group called 'Dies Ultima' to battle the apocalypse, and that they even allow kinfolk to join their ranks. Speaking of which, Emma, the Glass Walker kinfolk girl that Christopher had trained for a while got away from the ordeal with the fear. It seems she didn't suffer any permanent damage or trauma, thank Gaia. The Glass Walkers also managed to retake their caern in Miami, and thanks to the protection of Cockroach, it was still not corrupted by wyrmish influence. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAfter staying at the Sept of the Western Eye for a while, I said my goodbyes to the pack and left to join my tribe and to study their ways. It was sad to part with them after so long, but I know that if I don't grow, I will never be able to keep up. I will find my own way, and when I meet them again, I will have a name that I can be proud of. \n\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t\t<ngb-tab title=\"Werewolf: Golden State - Epilogue\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs I left the concolation, I truly felt as if this was the end of our pack. Or maybe it ended a while ago. Maybe it ended five years ago in Miami, and this was just the bloody aftermath, or perhaps we discovered and finally completed the true purpose and quest of our pack that was intended for us all along.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn the end, did we achieve something? Did we make a difference? Did we make all the suffering worth something in the end? I don’t know, I can only hope that this leads to a greater good. Truthfully, after we returned from the Island of the Apple Trees, I thought it was up to me to get our retribution on the wyrm. The klaive whispered to me of blood and vengeance. It might be a klaive made from a glade child rather than a spirit of war, but it was made for vengeance and it will find it’s true power in the hands of someone who can grant that vengeance. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI am glad I decided to stay with my pack, and now, thanks to them I have a new purpose. A greater purpose than needlessly dying in battle. I get to help bring our lost croatan brothers back with the help of Turtle, and I could think of nothing more honorable. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAfter we all went our separate ways, I was approached by Frost Bringer. His pack had fallen to angry Rokea trying to extract the information they needed. I learned that when we found the Rokea, we actually had stepped into their negotiations with them and thus our duel wasn’t supposed to have been our duel at all, but Frost Bringer’s duel. This is why they carried the dream with them as the price. It was just dumb coincidence, but it led to us losing Butch. After this, Frost Bringer had stalked us to Miami trying to track us to turtle, but he’d lost our scent in the city. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHe seemed much humbled from the experiences, and told me he wanted to be a part of bringing the Croatans back, so he became the first ahroun of the new Croatan tribe. I hope my experiences with Hvitr has taught me enough to help our new pack revive our tribe. We have since been joined by Garou from all over and I now run with the Lost Brothers pack, trying to find what kinfolk are left of Croatan descent. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSara and Tyr both left after the end of the concolation. Tyr rejecting the Get of Fenris and having his initation into the Fianna steal much of the spotlight of the concolation. Thanks to how this all played out, it seems the Get has lost much of their political power and I doubt they would look fondly at Tyr from now on. I hope he gets the aid and protection he needs from the Fianna as he heads with them back to Eire. I’ll be sure to check in on him when my path takes me to that side of the world. For Hvitr.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tSara left with the Shadow Lords, this one called Bane Hunter or some such, I believe. He seems a suspicious sort and seems to be pretty high up in the Shadow Lords, but from my asking around, I couldn’t pinpoint his origins. I hope Sara will be safe with him, but I am sure this is what Butch would have wanted for her. I wonder if I will ever see her again someday…\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tKing Albrecht seemed to have shut down the portal to Malfeas shortly after the concolation, much to the dismay of the Get of Fenris and Shadow Lords. But for now, it seems no attack is imminent, and we get to build our strength and prepare for the apocalypse a while longer. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI went back with my new pack to Muir Woods a few months into the new year and visited the Sept of the Western Eye. It seemed though as if Kiera had set out on her peace pilgrimage again, so I didn’t get to check in with her. But I did catch up with her uncle Roland. He seems to be running the rangers well as always, though our attack on the UAC left him damaged. He might not have all that many years left to fight. I will be checking in with them when I can. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI visited Butch and Art’s graves. They are both well taken care of, but when I visited, Butch’s grave had  fresh lights and flowers. Someone must have been by, perhaps Kiera before she left. I did not interrogate further. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tUpon visiting Christopher and Emma in Palo Alto they seem to be doing well and enjoying some time together again after all that had happened in the past year. Emma seems to be expecting now. I am glad that we get some new life in this world after all the loss we’ve had. I’m sure we were all craving life right now. And I’m sure Christopher will be a wonderful father.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWith the First Klaive recovered and the Croatan tribe slowly coming back, we have fulfilled our quest as the Moontusk Pack and payed our debts to the spirit world and I am glad the survivors of this quest get to move on to new packs and new roles. \n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn any case, I feel like there couldn’t have been a better group of people for this job, and I am so thankful to have met them all. Kiera, our guide to our true purpose. Christopher, our voice of reason and responsibility. Butch, our tie to pack and family and Hvitr, our ferocity and wolf blood. And me, to tell their stories forevermore.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<b>Teller-Of-Stories</b>\n\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-tab>\n\t</ngb-tabset>\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm\">\n\t\t\t<p>\n\t\t\t\t\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
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

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/traits/gnosis/gnosis.component.css":
/*!****************************************************!*\
  !*** ./src/app/traits/gnosis/gnosis.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/gnosis/gnosis.component.html":
/*!*****************************************************!*\
  !*** ./src/app/traits/gnosis/gnosis.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<br>\n\t\t<h1>Gnosis</h1>\n\t\t<br>\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Gnosis\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGaia did not leave the Garou with Rage as their only \n\t\t\t\t\t\tinheritance of her spiritual power. She gave them another \n\t\t\t\t\t\ttool, one that connects her children to their other nature, \n\t\t\t\t\t\tthe spirit world. This connection to the Sacred Mother \n\t\t\t\t\t\tis called Gnosis.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGnosis is the essence of the spiritual world; it allows \n\t\t\t\t\t\tGarou to access the spirits that surround them. In some \n\t\t\t\t\t\tways, it is the expression of their half-spirit nature. This \n\t\t\t\t\t\tconnection is what makes travel to the Umbra possible, \n\t\t\t\t\t\tand it fuels many of the powerful Gifts the spirits can \n\t\t\t\t\t\tbestow. Without this spiritual force, Garou would be cut \n\t\t\t\t\t\toff from half of their natures. Characters with low Gnosis \n\t\t\t\t\t\tcan find contact with the spirits rare and difficult. On the \n\t\t\t\t\t\tother side, those with very high Gnosis scores sometimes \n\t\t\t\t\t\tfind the worlds blurring, and they may have trouble \n\t\t\t\t\t\tdistinguishing each side of the Gauntlet from the other.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMuch of a Garou’s struggle comes from a never-ending \n\t\t\t\t\t\tbattle with the Rage each werewolf feels. The Beast is \n\t\t\t\t\t\tnever far from their thoughts — even the most pacifistic \n\t\t\t\t\t\tRagabash or the most serene of the Children of Gaia looks \n\t\t\t\t\t\tat a normal human and must repress the urge to rend and \n\t\t\t\t\t\ttear and bite until all that’s left is blood and meat. Ahroun \n\t\t\t\t\t\thave it far worse, fighting to see friends, family, and loved \n\t\t\t\t\t\tones as little more than prey animals or targets for attack.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGnosis is recorded in two forms, much like Rage and \n\t\t\t\t\t\tWillpower. The first is the character’s permanent Gnosis \n\t\t\t\t\t\trating, indicated on the character sheet by the dots. The \n\t\t\t\t\t\tsecond is the temporary Gnosis pool, represented by the \n\t\t\t\t\t\tsquares, which shows how many Gnosis points the player \n\t\t\t\t\t\thas left to spend. The Gnosis pool can never be greater \n\t\t\t\t\t\tthan the Gnosis rating. When you spend a point of Gnosis, \n\t\t\t\t\t\tremove it from the Gnosis pool, not the permanent Gnosis \n\t\t\t\t\t\trating. Permanent Gnosis stays constant through the story, \n\t\t\t\t\t\twhile the pool fluctuates.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Using Gnosis\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Using Gnosis</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMuch as Rage fuels battle and the physical world, \n\t\t\t\t\t\tthe uses of Gnosis tend toward affecting insight and the \n\t\t\t\t\t\tspirit world.<br><br>\n\t\t\t\t\t\t<b>Rage and Gnosis:</b>\n\t\t\t\t\t\t A player cannot use both Rage \n\t\t\t\t\t\tand Gnosis in the same turn, whether spending points or \n\t\t\t\t\t\trolling the Trait. The only exceptions are certain Gifts \n\t\t\t\t\t\tthat demand both to function. These two forces are very \n\t\t\t\t\t\tpowerful, and the Garou’s body is not strong enough to \n\t\t\t\t\t\tpull the power from these two natures simultaneously. \n\t\t\t\t\t\tFor example, a werewolf cannot spend Rage for multiple \n\t\t\t\t\t\tactions and activate a fetish in the same turn.<br><br>\n\t\t\t\t\t\t<b>Carrying Silver:</b>\n\t\t\t\t\t\t For every object made of or containing \n\t\t\t\t\t\tsilver that a character is carrying, she loses one effective point \n\t\t\t\t\t\tfrom her Gnosis rating. More potent objects will cause the \n\t\t\t\t\t\tcharacter to lose more. Luckily, this effect is only temporary, \n\t\t\t\t\t\tand it lasts only a day after the silver is discarded.<br><br>\n\t\t\t\t\t\t<b>Using Gifts:</b>\n\t\t\t\t\t\t Many of the Gifts the spirits have \n\t\t\t\t\t\tbestowed upon faithful Garou call for Gnosis expenditures \n\t\t\t\t\t\tand/or rolls.<br><br>\n\t\t\t\t\t\t<b>Fetishes:</b>\n \t\t\t\t\t\tGnosis is used to attune or activate fetishes. <br><br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Gaining Gnosis\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Gaining and Regaining Gnosis</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tCharacters can regain their Gnosis in several ways.<br><br>\n\t\t\t\t\t\t<b>Meditation:</b>\n\t\t\t\t\t\t When a character takes time to \n\t\t\t\t\t\tcenter himself and reconnect with the Sacred Mother \n\t\t\t\t\t\ton a personal level, he can sometimes regain Gnosis. \n\t\t\t\t\t\tThe character must spend at least an hour in one place, \n\t\t\t\t\t\tfocusing on his deeply spiritual side. The player rolls Wits \n\t\t\t\t\t\t+ Enigmas (difficulty 8). For each success, the character \n\t\t\t\t\t\tregains one Gnosis point, up to a maximum of one point \n\t\t\t\t\t\tper hour of meditation; additional successes are lost. A \n\t\t\t\t\t\tGarou can only meditate to regain Gnosis once per day. The \n\t\t\t\t\t\tdifficulty increases by one for each extra day a character \n\t\t\t\t\t\tattempts it in the same week, to a maximum difficulty \n\t\t\t\t\t\tof 10. The spirits are gracious, but not always generous.<br><br>\n\t\t\t\t\t\t<b>Sacred Hunt:</b>\n\t\t\t\t\t\t The Sacred Hunt is one of the most \n\t\t\t\t\t\tfrequently performed activities at Garou moots. The \n\t\t\t\t\t\tchosen prey — an Engling — is summoned and then hunted \n\t\t\t\t\t\tdown. This activity can be done in either the Umbra or \n\t\t\t\t\t\ton Earth. After the prey has been caught and “killed,” \n\t\t\t\t\t\twerewolves who have taken part in the hunt give thanks \n\t\t\t\t\t\tto the spirit for the gift of its life. All who participate in \n\t\t\t\t\t\tthe hunt replenish their Gnosis pools completely. <br><br>\n\t\t\t\t\t\t<b>Bargaining with Spirits:</b>\n\t\t\t\t\t\t Ritual hunts are not the \n\t\t\t\t\t\tonly way to get Gnosis out of a spirit; the soft sell can \n\t\t\t\t\t\twork just as well. A werewolf can simply ask a spirit to \n\t\t\t\t\t\tshare some of its Gnosis. The character must be able to \n\t\t\t\t\t\tspeak in the spirit language through the use of a Gift or \n\t\t\t\t\t\tsimilar. The spirit may ask the character to perform some \n\t\t\t\t\t\ttask before it shares its life force with the Garou. Once \n\t\t\t\t\t\tthe bargain is completed, the spirit spends an amount of \n\t\t\t\t\t\tEssence, and the werewolf gains that many points of Gnosis.<br><br>\n\t\t\t\t\t\t<b>Between Stories: </b>\n\t\t\t\t\t\tIn the downtime between new \n\t\t\t\t\t\ttales, the players can make a Charisma + Enigmas roll to \n\t\t\t\t\t\tregain some Gnosis. Each success on this roll refreshes \n\t\t\t\t\t\tone point of Gnosis.<br><br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/traits/gnosis/gnosis.component.ts":
/*!***************************************************!*\
  !*** ./src/app/traits/gnosis/gnosis.component.ts ***!
  \***************************************************/
/*! exports provided: GnosisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GnosisComponent", function() { return GnosisComponent; });
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

var GnosisComponent = /** @class */ (function () {
    function GnosisComponent() {
    }
    GnosisComponent.prototype.ngOnInit = function () {
    };
    GnosisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gnosis',
            template: __webpack_require__(/*! ./gnosis.component.html */ "./src/app/traits/gnosis/gnosis.component.html"),
            styles: [__webpack_require__(/*! ./gnosis.component.css */ "./src/app/traits/gnosis/gnosis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GnosisComponent);
    return GnosisComponent;
}());



/***/ }),

/***/ "./src/app/traits/rage/rage.component.css":
/*!************************************************!*\
  !*** ./src/app/traits/rage/rage.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/rage/rage.component.html":
/*!*************************************************!*\
  !*** ./src/app/traits/rage/rage.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<br>\n\t\t<h1>Rage</h1>\n\t\t<br>\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Rage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tEvery Garou is a crucible for Gaia’s primal anger — her \n\t\t\t\t\t\tRage at the pillage of the world at the hands of the Weaver \n\t\t\t\t\t\tand the Wyrm. This Rage is a force of mindless violence, a \n\t\t\t\t\t\tconstant slow-motion path of unthinking destruction and \n\t\t\t\t\t\tviolence that each and every Garou must keep control of lest \n\t\t\t\t\t\tit consume her. Rage mixes instinctual cunning and hunting \n\t\t\t\t\t\tability with savage bloodlust and unpredictable horror.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tTo the Garou, Rage is both a blessing and a curse. \n\t\t\t\t\t\tMany think that Luna gave Rage to the Garou through \n\t\t\t\t\t\ther moon-signs that determine how much Rage a Garou \n\t\t\t\t\t\tbegins his life with after the First Change. Others contend \n\t\t\t\t\t\tthat Rage is a spark of the Wyrm within each Garou, the \n\t\t\t\t\t\tforce of primal destruction corrupting the children of the \n\t\t\t\t\t\tcreator. The most vocal say that it is Gaia herself who would \n\t\t\t\t\t\thave her children use her Rage as their greatest weapon.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMuch of a Garou’s struggle comes from a never-ending \n\t\t\t\t\t\tbattle with the Rage each werewolf feels. The Beast is \n\t\t\t\t\t\tnever far from their thoughts — even the most pacifistic \n\t\t\t\t\t\tRagabash or the most serene of the Children of Gaia looks \n\t\t\t\t\t\tat a normal human and must repress the urge to rend and \n\t\t\t\t\t\ttear and bite until all that’s left is blood and meat. Ahroun \n\t\t\t\t\t\thave it far worse, fighting to see friends, family, and loved \n\t\t\t\t\t\tones as little more than prey animals or targets for attack.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRage is recorded in two forms on the character sheet. \n\t\t\t\t\t\tThe dots indicate the character’s Rage rating — her \n\t\t\t\t\t\tpermanent Rage. The second is the Rage pool, shown by \n\t\t\t\t\t\tthe squares underneath. These squares show how much \n\t\t\t\t\t\tRage you have left to spend. When you spend a point of \n\t\t\t\t\t\tRage, remove it from one of the squares. Don’t take it from \n\t\t\t\t\t\tthe dots of the permanent rating. A werewolf ’s permanent \n\t\t\t\t\t\tRage stays constant, while the pool will drop during the \n\t\t\t\t\t\tcourse of the story. At certain times, a werewolf ’s Rage \n\t\t\t\t\t\tcan even go higher than his permanent rating, but only \n\t\t\t\t\t\tif the situation is sufficiently infuriating.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Using Rage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Using Rage</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRage points are spent at the beginning of a turn, in the \n\t\t\t\t\t\tdeclaration stage. You can spend Rage only in times of stress.<br><br>\n\t\t\t\t\t\tA Garou can use Rage in the following ways:<br><br>\n\t\t\t\t\t\t<b>Frenzy:</b>\n\t\t\t\t\t\t Frenzy is the violent outburst, the untamed \n\t\t\t\t\t\tsavagery, the animal instinct for blood and brutality that \n\t\t\t\t\t\tlurks in the heart of every werewolf. Whenever a player \n\t\t\t\t\t\tgets four or more successes on a Rage roll, the character \n\t\t\t\t\t\tenters a frenzy.<br><br>\n\t\t\t\t\t\t<b>Extra Actions:</b>\n\t\t\t\t\t\t A player can spend Rage to give \n\t\t\t\t\t\ther character extra actions in a single turn. However, a \n\t\t\t\t\t\tGarou cannot spend more Rage points for actions in a \n\t\t\t\t\t\tturn than half of her permanent Rage rating.<br><br>\n\t\t\t\t\t\t<b>Changing Forms:</b>\n\t\t\t\t\t\t A Player may spend a Rage point \n\t\t\t\t\t\tfor his character to change instantly to any form he desires, \n\t\t\t\t\t\twithout having to roll Stamina + Primal-Urge. <br><br>\n\t\t\t\t\t\t<b>Recovering from Stun:</b>\n\t\t\t\t\t\t If a character loses more \n\t\t\t\t\t\thealth levels in one turn than his Stamina rating, he is \n\t\t\t\t\t\tstunned and unable to act in the next turn. By spending \n\t\t\t\t\t\ta Rage point, the werewolf can ignore the effect and \n\t\t\t\t\t\tfunction normally. <br><br>\n\t\t\t\t\t\t<b>Remaining Active:</b>\n\t\t\t\t\t\t If a character falls below the Incapacitated \n\t\t\t\t\t\thealth level, a player can use Rage to keep her character going. Doing \n\t\t\t\t\t\tso requires a Rage roll (difficulty 8). Each success heals a health \n\t\t\t\t\t\tlevel, regardless of the type of wound. A player may attempt this roll \n\t\t\t\t\t\tonly once per scene. If this roll fails, the character doesn’t recover.\n\t\t\t\t\t\tHowever, this last-ditch survival effort has its price. Like all \n\t\t\t\t\t\tRage rolls, the character is still subject to frenzy. The wound will \n\t\t\t\t\t\talso remain on the Garou’s body as an appropriate Battle Scar.<br><br>\n\t\t\t\t\t\t<b>Beast Within:</b>\n\t\t\t\t\t\t Occasionally, a Garou is more a snarling monster \n\t\t\t\t\t\tthan man or beast, and she must pay the price for it. For every point \n\t\t\t\t\t\tof Rage a character has above her Willpower rating, she loses one \n\t\t\t\t\t\tdie on all social-interaction rolls. People, even other werewolves, \n\t\t\t\t\t\tcan sense the killer hiding just under her skin, and they don’t want \n\t\t\t\t\t\tto be anywhere near it.<br><br>\n\t\t\t\t\t\t<b>Losing the Wolf:</b>\n\t\t\t\t\t\t If a character has lost or spent all his Rage \n\t\t\t\t\t\tand Willpower points, he has “lost the wolf,” and he cannot regain \n\t\t\t\t\t\tRage. The Garou cannot shift to anything except his breed form until \n\t\t\t\t\t\this Rage returns. The character must regain at least one Willpower \n\t\t\t\t\t\tpoint before he can recover any Rage.<br><br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Gaining Rage\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Gaining and Regaining Rage</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Rage pool fluctuates from session to session and from turn \n\t\t\t\t\t\tto turn. Rage replenishes itself in several ways.<br><br>\n\t\t\t\t\t\t<b>The Moon:</b>\n\t\t\t\t\t\t The first time a werewolf sees the moon at night, \n\t\t\t\t\t\tthe Beast inside stirs, and Rage floods back into her. Under a new \n\t\t\t\t\t\tmoon, the character gets one point; under a waning moon, two \n\t\t\t\t\t\tpoints; under a half or waxing moon, three points; and under a full \n\t\t\t\t\t\tmoon, four points. If the moon phase corresponds with the character’s \n\t\t\t\t\t\tauspice, she regains all of her Rage. This phenomenon only occurs \n\t\t\t\t\t\twhen the character first sees the moon each night.<br><br>\n\t\t\t\t\t\t<b>Botch:</b>\n\t\t\t\t\t\t If the Storyteller approves, a werewolf might receive a \n\t\t\t\t\t\tRage point after a botched a roll. Rage comes from stressful situations, \n\t\t\t\t\t\tand seeing the action you were attempting blow up in your face, \n\t\t\t\t\t\tsometimes literally, can be a very stressful situation.<br><br>\n\t\t\t\t\t\t<b>Humiliation:</b>\n\t\t\t\t\t\t Rage will also come rushing back if anything a \n\t\t\t\t\t\tGarou does proves particularly humiliating. The Storyteller decides \n\t\t\t\t\t\twhether a situation is embarrassing enough to warrant a Rage point. \n\t\t\t\t\t\tGarou tend to be very proud, and they don’t take being laughed at well.<br><br>\n\t\t\t\t\t\t<b>Confrontation:</b>\n\t\t\t\t\t\t Again at the Storyteller’s approval, a character \n\t\t\t\t\t\tcould receive a Rage point at the beginning of a tense situation, in \n\t\t\t\t\t\tthe moments right before combat starts. This gain accounts for the \n\t\t\t\t\t\tanticipation and hackle-raising that happens just as tempers start to flare.<br><br>\n\t\t\t\t\t\t<b>New Stories:</b>\n\t\t\t\t\t\tWhen a new story begins, each player should \n\t\t\t\t\t\troll a die to determine how many Rage points he possesses currently. \n\t\t\t\t\t\t(They might even exceed their permanent Rage ratings, at the \n\t\t\t\t\t\tStoryteller’s discretion.) Yes, characters might end up with less Rage \n\t\t\t\t\t\tthan they had at the end of the last story. Such is the way of Rage. \n\t\t\t\t\t\tIt is always moving and never predictable.\n\t\t\t\t\t\tThe player is encouraged to explain this increase or decrease in \n\t\t\t\t\t\tRage by describing what happened between sessions. If they come \n\t\t\t\t\t\tup with some creative tales, Storytellers can be a little more giving \n\t\t\t\t\t\twith the Rage as the new story progresses.<br><br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/traits/rage/rage.component.ts":
/*!***********************************************!*\
  !*** ./src/app/traits/rage/rage.component.ts ***!
  \***********************************************/
/*! exports provided: RageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RageComponent", function() { return RageComponent; });
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

var RageComponent = /** @class */ (function () {
    function RageComponent() {
    }
    RageComponent.prototype.ngOnInit = function () {
    };
    RageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rage',
            template: __webpack_require__(/*! ./rage.component.html */ "./src/app/traits/rage/rage.component.html"),
            styles: [__webpack_require__(/*! ./rage.component.css */ "./src/app/traits/rage/rage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RageComponent);
    return RageComponent;
}());



/***/ }),

/***/ "./src/app/traits/renown/renown.component.css":
/*!****************************************************!*\
  !*** ./src/app/traits/renown/renown.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/renown/renown.component.html":
/*!*****************************************************!*\
  !*** ./src/app/traits/renown/renown.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<br>\n\t\t<h1>Renown</h1>\n\t\t<br>\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Renown\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t<p>\n\t\t\tRenown is a set of Traits that measures how well a \n\t\t\tcharacter is living up to his expected role in Garou society. \n\t\t\tIt’s this reason that connects Renown so closely with \n\t\t\tauspices. Unlike experience points, a character’s Renown \n\t\t\treflects her standing among the Garou as a result of her \n\t\t\tdeeds and actions — a character can rack up plenty of \n\t\t\texperience for his actions, but if he does not perform the \n\t\t\tduties expected of his auspice, his Renown will not increase.\n\t\t</p>\n\t\t<p>\n\t\t\tA character’s Rank is tied to his Renown. As such, \n\t\t\tthose with low Renown are expected to respect and defer \n\t\t\tto werewolves of higher Rank. Some Garou rail against this \n\t\t\tsystem, but that’s a fast track to losing even more Renown.\n\t\t</p>\n\t\t<p>\n\t\t\tThe Garou measure Renown in three separate areas: \n\t\t\tGlory, Honor, and Wisdom. Each one is somewhat self explanatory. Glory represents a character’s physical deeds, \n\t\t\tincluding feats of strength, stamina, and agility, such \n\t\t\tas those that made Hercules a legend. It also measures \n\t\t\tbravery, a willingness to take extreme risks (at least, \n\t\t\textreme risks that pay off) and victory in battle. Honor \n\t\t\tmeasures a Garou’s sense of duty and history. It speaks of \n\t\t\tthe character’s ethics and morals, as well as his personal \n\t\t\tsense of pride. Finally, Wisdom celebrates the more mental \n\t\t\tvirtues of a character, including strategy, cunning and \n\t\t\tinsight. Patience and a strong connection to the spirit \n\t\t\tworld also help a Garou increase his Wisdom.\n\t\t</p>\n\t\t<p>\n\t\t\tCharacters record Renown in two forms. The dots \n\t\t\trepresent the character’s permanent Renown rating, while \n\t\t\tthe squares denote a character’s pool of temporary Renown \n\t\t\tpoints. Renown differs from other Traits that have both \n\t\t\tpermanent and temporary ratings, in that a character starts \n\t\t\twith no points of temporary Renown, and temporary Renown \n\t\t\tis allowed to exceed the Renown rating. Permanent Renown \n\t\t\tchanges rarely (only normally due to a Punishment Rite or \n\t\t\ta Rite of Accomplishment), while temporary Renown is \n\t\t\talways in flux, and can shift several times in one session.\n\t\t</p>\n\t\t<p>\n\t\t\tOnce a Garou has gained enough points of permanent \n\t\t\tRenown, she increases in Rank.\n\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Beginning Renown\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Beginning Renown</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAll new characters start play with three permanent \n\t\t\t\t\t\tdots in Renown, which are distributed according to \n\t\t\t\t\t\ther auspice . She earns \n\t\t\t\t\t\tthis Renown as part of her Rite of Passage, and if the \n\t\t\t\t\t\tStoryteller intends the pack to play through the rite, \n\t\t\t\t\t\tplayers shouldn’t assign these dots until the rite is \n\t\t\t\t\t\tcompleted. Starting Garou begin the game at Rank 1.\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Glory\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Glory</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMany Garou earn Glory through defeating mighty \n\t\t\t\t\t\tenemies and succeeding at dangerous quests. A werewolf \n\t\t\t\t\t\tcan earn Glory by fighting on through overwhelming \n\t\t\t\t\t\todds in order to triumph, but Glory is not the Renown \n\t\t\t\t\t\tof a mere brawler. A werewolf must have a reason and a \n\t\t\t\t\t\tcause to fight for, and though the odds are against her, she \n\t\t\t\t\t\tmust never surrender —regardless of the cost. Many young \n\t\t\t\t\t\tGarou have their Glory stripped from them for leaping \n\t\t\t\t\t\tinto fights that they cannot hope to win; Glory only trucks \n\t\t\t\t\t\twith stupidity when a character actually succeeds at the \n\t\t\t\t\t\timpossible. That said, a grand death in service to a noble \n\t\t\t\t\t\tideal may give the deceased a large share of the Glory they \n\t\t\t\t\t\tso desired in life — if anyone ever hears about it.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h4>Glory Creed</h4>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\tI shall be valorous<br>\n\t\t\t\t\t\tI shall be dependable<br>\n\t\t\t\t\t\tI shall be generous<br>\n\t\t\t\t\t\tI shall protect the weak<br>\n\t\t\t\t\t\tI shall slay the Wyrm<br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Honor\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Honor</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tGarou earn Honor by following their moral imperative \n\t\t\t\t\t\tto uphold the laws of the Garou. It refers to a fundamental \n\t\t\t\t\t\tbelief in the wisdom of their society’s laws, which all derive \n\t\t\t\t\t\tfrom the ultimate standard of Garou behavior: the Litany. \n\t\t\t\t\t\tTo gain Honor Renown among Garou society shows an \n\t\t\t\t\t\tindividual to be of honesty, integrity, and respect. Honor \n\t\t\t\t\t\tcan be a rare trait, but werewolves who have it strive to \n\t\t\t\t\t\tmaintain their honor with ferocity for fear of losing it.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWerewolves hold themselves to the highest possible \n\t\t\t\t\t\tstandards in the name of Honor. That’s not to say that \n\t\t\t\t\t\tthey feel superior to others — a Garou who looks down his \n\t\t\t\t\t\tnose at his compatriots isn’t exactly behaving honorably \n\t\t\t\t\t\ttowards them. Those who tolerate a braggart will soon \n\t\t\t\t\t\tsurpass him. Instead, a werewolf holds himself to high \n\t\t\t\t\t\tstandards in the sometimes vain hope of staving off pride.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHonor, after all, is all about self-control. Not \n\t\t\t\t\t\tjust the self-control that comes with upholding \n\t\t\t\t\t\tstrict principles when easier alternatives abound, \n\t\t\t\t\t\tbut the iron will to avoid falling into frenzy. When \n\t\t\t\t\t\tberserk, a Garou is capable of all manner of evil \n\t\t\t\t\t\tacts. More than a few newly-Changed Garou have \n\t\t\t\t\t\tawakened after a frenzy to find themselves soaked \n\t\t\t\t\t\tin blood and bereft of honor.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h4>Honor Creed</h4>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\tI shall be respectful<br>\n\t\t\t\t\t\tI shall be loyal<br>\n\t\t\t\t\t\tI shall be just<br>\n\t\t\t\t\t\tI shall live by my word<br>\n\t\t\t\t\t\tI shall accept all fair challenges<br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Wisdom\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Wisdom</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tHigh Wisdom Renown is the mark of a \n\t\t\t\t\t\tcharacter who thinks through her words and \n\t\t\t\t\t\tactions before sharing them, and is adept at \n\t\t\t\t\t\tsensing when others have not done the same. As such, \n\t\t\t\t\t\twerewolves with a reputation for Wisdom are likely to \n\t\t\t\t\t\tfind others listening and deferring to them at moots.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe deeds of a wise werewolf rarely align with those \n\t\t\t\t\t\tof a glorious one. Glory-seekers charge into battle \n\t\t\t\t\t\twhenever they see a goal worth chasing, while those \n\t\t\t\t\t\twho quest for Wisdom pick their fights carefully, to \n\t\t\t\t\t\tensure they have the greatest chance of victory. Both \n\t\t\t\t\t\twerewolves have their uses to a pack, but those who \n\t\t\t\t\t\tdo not succeed on their quest for Wisdom are more \n\t\t\t\t\t\tlikely to survive to try again. Those werewolves who \n\t\t\t\t\t\tare both wise and valorous know both when to fight \n\t\t\t\t\t\tand how to win. It’s a fine balance to strike, but those \n\t\t\t\t\t\twho manage it are valuable allies to all Garou.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h4>Wisdom Creed</h4>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p class=\"col-sm\">\n\t\t\t\t\t\tI shall be calm<br>\n\t\t\t\t\t\tI shall be prudent<br>\n\t\t\t\t\t\tI shall be merciful<br>\n\t\t\t\t\t\tI shall think before I act and listen before I think<br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Rank\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Rank</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Garou, like many societies that must fight for \n\t\t\t\t\t\ttheir very survival, hold to a strict system of ranks. Among \n\t\t\t\t\t\tthe Garou, rank determines status and shows how much \n\t\t\t\t\t\trespect a character deserves. As her rank increases, a \n\t\t\t\t\t\tGarou demonstrates to her sept and to her tribe that \n\t\t\t\t\t\tshe is committed and trustworthy in the fight against \n\t\t\t\t\t\tthe Wyrm. She learns more of the secrets of her tribe \n\t\t\t\t\t\twith each new rank, though other werewolves \n\t\t\t\t\t\thave higher expectations for her behavior. Characters begin at Rank 1, and they increase in \n\t\t\t\t\t\trank by gaining Renown.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h4>Benefits of Rank</h4>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tRank among the Garou has many privileges.<br>\n\t\t\t\t\t\t<b>Gifts:</b> When a Garou reaches a new rank, she can \n\t\t\t\t\t\tpetition spirits to learn new, more powerful Gifts. To learn \n\t\t\t\t\t\ta new Gift, a character must not only have the required \n\t\t\t\t\t\texperience points, but also the Rank equal to the level of the \n\t\t\t\t\t\tGift. A Garou cannot buy the respect of his peers and of the \n\t\t\t\t\t\tspirit world with experience points. The most valuable and \n\t\t\t\t\t\tpowerful Gifts are thus reserved only for those werewolves \n\t\t\t\t\t\twho have demonstrated great Glory, Honor, and Wisdom.<br>\n\t\t\t\t\t\t<b>Rights:</b> The Litany is quite clear: those of lower \n\t\t\t\t\t\tstation must defer to those higher. As a Garou increases \n\t\t\t\t\t\tin rank, younger and lower-ranked Garou defer to her. \n\t\t\t\t\t\tWhen a character has risen to Rank 3 or higher, werewolf \n\t\t\t\t\t\tsociety at large has heard of her. Rank brings with it \n\t\t\t\t\t\tresponsibilities, as werewolves are expected to embark \n\t\t\t\t\t\ton quests and missions to help the sept and tribe, guard \n\t\t\t\t\t\tcaerns from attack, and lead and look after those lower \n\t\t\t\t\t\tin station — as the Litany requires.<br>\n\t\t\t\t\t\t<b>Challenges:</b>\n\t\t\t\t\t\tThe legality of a challenge is governed \n\t\t\t\t\t\tby Rank. A werewolf can only issue a challenge to another \n\t\t\t\t\t\twho is one rank higher than the werewolf himself: a Rank \n\t\t\t\t\t\t1 Garou can challenge a Rank 2 superior, but he cannot \n\t\t\t\t\t\tchallenge anyone of Rank 3 or 4.<br>\n\t\t\t\t\t\t<b>Self Control:</b>\n \t\t\t\t\t\tCharacters of high rank have shown \n\t\t\t\t\t\tdiscipline, and have immersed themselves in the structure \n\t\t\t\t\t\tof Garou society so much that they are less likely to frenzy. \n\t\t\t\t\t\tThe following chart shows the bonuses a character gains \n\t\t\t\t\t\tas his rank rises.<br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>Rank</b></p></div><div class=\"col-sm\"><p><b>Frenzy Bonus</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>0</b></p></div><div class=\"col-sm\"><p><b>---</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>1</b></p></div><div class=\"col-sm\"><p><b>---</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>2</b></p></div><div class=\"col-sm\"><p><b>---</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>3</b></p></div><div class=\"col-sm\"><p><b>+1 to frenzy difficulties</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>4</b></p></div><div class=\"col-sm\"><p><b>+2 to frenzy difficulties</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>5</b></p></div><div class=\"col-sm\"><p><b>+2 to frenzy difficulties, 5+ successes needed to frenzy</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm\"><p><b>6</b></p></div><div class=\"col-sm\"><p><b>+2 to frenzy difficulties, 6+ successes needed to frenzy</b></p></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/traits/renown/renown.component.ts":
/*!***************************************************!*\
  !*** ./src/app/traits/renown/renown.component.ts ***!
  \***************************************************/
/*! exports provided: RenownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenownComponent", function() { return RenownComponent; });
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

var RenownComponent = /** @class */ (function () {
    function RenownComponent() {
    }
    RenownComponent.prototype.ngOnInit = function () {
    };
    RenownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renown',
            template: __webpack_require__(/*! ./renown.component.html */ "./src/app/traits/renown/renown.component.html"),
            styles: [__webpack_require__(/*! ./renown.component.css */ "./src/app/traits/renown/renown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RenownComponent);
    return RenownComponent;
}());



/***/ }),

/***/ "./src/app/traits/willpower/willpower.component.css":
/*!**********************************************************!*\
  !*** ./src/app/traits/willpower/willpower.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/traits/willpower/willpower.component.html":
/*!***********************************************************!*\
  !*** ./src/app/traits/willpower/willpower.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<br>\n\t\t<h1>Willpower</h1>\n\t\t<br>\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Willpower\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAlmost every creature in the World of Darkness \n\t\t\t\t\t\tpossesses Willpower. It is the strength hidden in each \n\t\t\t\t\t\tindividual to overcome his base urges and occasionally \n\t\t\t\t\t\tpush himself to greatness.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMuch like Gnosis and Rage, Willpower is recorded in \n\t\t\t\t\t\ttwo forms. The permanent Willpower rating is illustrated \n\t\t\t\t\t\ton the character sheet by dots; the temporary Willpower \n\t\t\t\t\t\tpool is measured in the squares below the Willpower rating. \n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tA character’s Willpower pool can never be larger than his \n\t\t\t\t\t\tWillpower rating. As with Rage and Gnosis, spending a \n\t\t\t\t\t\tWillpower point is recorded on the Willpower pool squares, \n\t\t\t\t\t\tand not on the permanent rating dots.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tAs a character spends Willpower, he finds his reserves \n\t\t\t\t\t\tbecoming depleted. With no Willpower left, characters \n\t\t\t\t\t\tare exhausted and unable to summon the inner strength \n\t\t\t\t\t\tto perform their duties. They will not care what happens \n\t\t\t\t\t\tto them, since they have no Willpower to go on.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\"> Spineless</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2 \">&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm \">Weak</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Unassertive</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Diffident</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Certain</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679; &#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Confident</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Determined</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Controlled</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Iron-willed</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-left\">\n\t\t\t\t\t\t<div class=\"col-sm-3\"></div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">&#9679;&#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;&#9679;</div>\n\t\t\t\t\t\t<div class=\"col-sm\">Unshakable</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br><br>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Using Willpower\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Using Willpower</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tOf all the Traits werewolves possess, Willpower is \n\t\t\t\t\t\tone of the most frequently rolled and spent because of \n\t\t\t\t\t\tthe many ways it can be utilized.<br><br>\n\t\t\t\t\t\t<b>Automatic Successes:</b>\n\t\t\t\t\t\t Spending a Willpower point \n\t\t\t\t\t\ton an action gives the player one extra success on any \n\t\t\t\t\t\troll. Only one point can be spent this way each turn, but \n\t\t\t\t\t\tthe success is guaranteed. Spending Willpower in this way \n\t\t\t\t\t\tcompletely negates the effects of a botch. Some do not \n\t\t\t\t\t\tallow a character to spend Willpower, including damage \n\t\t\t\t\t\trolls or any roll to activate Gifts.<br><br>\n\t\t\t\t\t\t<b>Uncontrollable Urges:</b>\n\t\t\t\t\t\t Garou are instinctual \n\t\t\t\t\t\tcreatures, and can find the Beast within reacting to \n\t\t\t\t\t\tstimuli without conscious thought. The Storyteller may \n\t\t\t\t\t\tinform you that your character has done something from \n\t\t\t\t\t\ta primal urge, like getting away from fire or attacking a \n\t\t\t\t\t\tcreature of the Wyrm. A Willpower point can be spent to \n\t\t\t\t\t\tnegate this gut reaction and keep the Garou right where \n\t\t\t\t\t\the is. On rare occasions, the player must keep spending \n\t\t\t\t\t\tWillpower points until the character removes himself \n\t\t\t\t\t\tfrom the situation or runs out of Willpower.<br><br>\n\t\t\t\t\t\t<b>Halting Frenzies:</b>\n\t\t\t\t\t\t As mentioned previously, a \n\t\t\t\t\t\tcharacter flies into a frenzy whenever her player rolls \n\t\t\t\t\t\tmore than four successes on a Rage roll. This situation \n\t\t\t\t\t\tcan be averted if the player spends a Willpower point to \n\t\t\t\t\t\tremain in control.<br><br> \n\t\t\t\t\t\t<b>Fighting On: </b>\n\t\t\t\t\t\t When a werewolf is injured, her \n\t\t\t\t\t\twounds can make it hard for her to concentrate, represented \n\t\t\t\t\t\tby wound penalties to her actions. By spending a point \n\t\t\t\t\t\tof Willpower, she can ignore the wound penalties on a \n\t\t\t\t\t\tsingle roll. <br><br>\n\t\t\t\t\t</p>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Recovering Willpower\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<h2>Recovering Willpower</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tCharacters must be able to rest in order to regain \n\t\t\t\t\t\tWillpower. Between their ongoing battles against the \n\t\t\t\t\t\tWyrm and its minions, the daily rituals and duties of the \n\t\t\t\t\t\thuman side of their lives, Garou often do not have time \n\t\t\t\t\t\tto take a breath. This section presents three different \n\t\t\t\t\t\tways characters can regain their Willpower; it’s up to the \n\t\t\t\t\t\tStoryteller which of these methods she uses.<br><br> \n\t\t\t\t\t\t<b>When a story is complete</b>\n\t\t\t\t\t\t, characters can regain \n\t\t\t\t\t\tall their Willpower. This act should be reserved for \n\t\t\t\t\t\tstory\n\t\t\t\t\t\tendings, not necessarily the end of each session. The \n\t\t\t\t\t\tStoryteller may allow the characters to regain only as \n\t\t\t\t\t\tmuch Willpower as she feels they deserve for the goal \n\t\t\t\t\t\tthey accomplished.<br><br>\n\t\t\t\t\t\tCharacters who \n\t\t\t\t\t\t<b>achieve a personal victory</b>\n\t\t\t\t\t\t in the \n\t\t\t\t\t\tframework of the larger story can regain some amount \n\t\t\t\t\t\tof Willpower. These victories should relate directly to \n\t\t\t\t\t\tthe character, such as confronting a personal enemy \n\t\t\t\t\t\tor overcoming a vice. The Storyteller rules whether a \n\t\t\t\t\t\tcharacter has regained some or all of his self-confidence \n\t\t\t\t\t\tby this action.<br><br>\n\t\t\t\t\t\tIf a character \n\t\t\t\t\t\t<b>performed his auspice duties</b>\n\t\t\t\t\t\tparticularly well, she might regain one to three Willpower \n\t\t\t\t\t\tpoints. This method is subject to the Storyteller’s approval, \n\t\t\t\t\t\tand it relies largely on the roleplaying skills of the player.\n\t\t\t\t\t\tIn addition to these methods, characters regain one \n\t\t\t\t\t\tpoint of Willpower when they wake up each day. While \n\t\t\t\t\t\tnot as involved or satisfying as the above methods, it \n\t\t\t\t\t\tdoes allow werewolves to keep moving even when all \n\t\t\t\t\t\thope seems lost.<br><br>\n\t\t\t\t\t</p>\n\t\t\t\t\t<br>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/traits/willpower/willpower.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/traits/willpower/willpower.component.ts ***!
  \*********************************************************/
/*! exports provided: WillpowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WillpowerComponent", function() { return WillpowerComponent; });
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

var WillpowerComponent = /** @class */ (function () {
    function WillpowerComponent() {
    }
    WillpowerComponent.prototype.ngOnInit = function () {
    };
    WillpowerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-willpower',
            template: __webpack_require__(/*! ./willpower.component.html */ "./src/app/traits/willpower/willpower.component.html"),
            styles: [__webpack_require__(/*! ./willpower.component.css */ "./src/app/traits/willpower/willpower.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WillpowerComponent);
    return WillpowerComponent;
}());



/***/ }),

/***/ "./src/app/tribes-detail/tribes-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tribes-detail/tribes-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: werewolf;\n    src: url(\"/WerewolfRPG/assets/WEREWOLF.TTF\");\n}\n\n#tribeTitle {\n\tpadding-bottom: 40px;\n}\n\n#tribeLogo {\n\theight: 20em;\n}\n\n#quote {\n\tfont-family: werewolf;\n\tcolor: gold;\n}\n"

/***/ }),

/***/ "./src/app/tribes-detail/tribes-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/tribes-detail/tribes-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tribe\">\n\t<div id=\"tribeTitle\" class=\"row\">\n\t\t<h1 class=\"col-sm\">{{tribe.name}}</h1>\n\t</div>\n\t<img id=\"tribeLogo\" src=\"./assets/Tribes/{{tribe.nickname}}/logo.png\" class=\"img-fluid\">\n\t<div class=\"row\">\n\t\t<span class=\"col-sm\"><br></span>\n\t</div>\n\t<div id=\"quote\" class=\"row\">\n\t\t<p class=\"col-sm\" [innerHTML]=\"tribe.quote\"></p>\n\t</div>\n\t<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t<ngb-tabset>\n\t\t\t<ngb-tab title=\"Basic Information\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<!--<div id=\"nicknameTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Nickname:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"nickname\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\">{{tribe.nickname}}</p>\n\t\t\t\t\t</div>-->\n\t\t\t\t\t<div id=\"descriptionTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Description:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"description\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\"[innerHTML]=\"tribe.description\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"giftsTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\"><a routerLink=\"/gifts\">Beginning Gifts:</a></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let gift of tribe.gifts\">\n\t\t\t\t\t\t<p>{{gift}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Appearance\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"appearanceTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Appearance:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"appearance\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\" [innerHTML]=\"tribe.appearance\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Territory\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"territoryTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Kinfolk & Territory:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"territory\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\" [innerHTML]=\"tribe.territory\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Creation\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"creationTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Character Creation:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"creation\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\" [innerHTML]=\"tribe.creation\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"willpower\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Initial Willpower:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p class=\"col-sm\">{{tribe.willpower}}</p>\n\t\t\t\t\t</div> \n\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Totem\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"totemTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Tribal Totem:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"totem\" class=\"row\">\n\t\t\t\t\t\t<p class=\"col-sm\" [innerHTML]=\"tribe.totem\"></p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Camps\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"campTitle\" class=\"row\">\n\t\t\t\t\t\t<h4 class=\"col-sm\">Camps:</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let camp of tribe.camps\">\n\t\t\t\t\t\t<p [innerHTML]='camp'></p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t\t<ngb-tab title=\"Stereotypes\">\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div id=\"tribesTitle\" class=\"row\">\n\t\t\t\t\t\t<h3 class=\"col-sm\">Tribes:</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Black Furies'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Black Furies:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.furies}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Bone Gnawers'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Bone Gnawers:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.gnawers}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Children of Gaia'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Children of Gaia:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.children}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Fianna'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Fianna:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.fianna}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Get of Fenris'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Get of Fenris:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.fenris}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Glass Walkers'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Glass Walkers:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.walkers}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Red Talons'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Red Talons:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.talons}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Shadow Lords'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Shadow Lords:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.lords}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Silent Striders'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Silent Striders:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.striders}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Silver Fangs'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Silver Fangs:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.fangs}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Stargazers'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Stargazers:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.stargazers}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Uktena'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Uktena:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.uktena}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngIf=\"tribe.name != 'Wendigo'\">\n\t\t\t\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t\t\t\t<h5>Wendigo:</h5> \n\t\t\t\t\t\t<p>&nbsp;\"{{tribe.stereotypesTribes.wendigo}}\"</p>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t\t</ngb-tabset>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/tribes-detail/tribes-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tribes-detail/tribes-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: TribesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TribesDetailComponent", function() { return TribesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tribes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tribes.service */ "./src/app/tribes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TribesDetailComponent = /** @class */ (function () {
    function TribesDetailComponent(route, tribesService, location) {
        this.route = route;
        this.tribesService = tribesService;
        this.location = location;
    }
    TribesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.getTribe();
        });
    };
    TribesDetailComponent.prototype.getTribe = function () {
        var _this = this;
        this.tribesService.getTribe(this.id).subscribe(function (data) { return _this.tribe = data; });
    };
    TribesDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tribes-detail',
            template: __webpack_require__(/*! ./tribes-detail.component.html */ "./src/app/tribes-detail/tribes-detail.component.html"),
            styles: [__webpack_require__(/*! ./tribes-detail.component.css */ "./src/app/tribes-detail/tribes-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _tribes_service__WEBPACK_IMPORTED_MODULE_3__["TribesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TribesDetailComponent);
    return TribesDetailComponent;
}());



/***/ }),

/***/ "./src/app/tribes.service.ts":
/*!***********************************!*\
  !*** ./src/app/tribes.service.ts ***!
  \***********************************/
/*! exports provided: TribesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TribesService", function() { return TribesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TribesService = /** @class */ (function () {
    function TribesService(http) {
        this.http = http;
    }
    TribesService.prototype.getTribe = function (id) {
        return this.http.get('./assets/Tribes/' + id + "/" + id + '.json');
    };
    TribesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TribesService);
    return TribesService;
}());



/***/ }),

/***/ "./src/app/tribes/tribes.component.css":
/*!*********************************************!*\
  !*** ./src/app/tribes/tribes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tribes/tribes.component.html":
/*!**********************************************!*\
  !*** ./src/app/tribes/tribes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-2\"></div>\n\t<div class=\"col-sm-8\">\n\t\t\t<h1>Tribes</h1>\n\t\t\t<p> \n\t\t\t\tThe tradition of werewolves coming together in packs \n\t\t\t\tof one tribe is long past, as the Garou are now too few \n\t\t\t\tin number to have that luxury. Instead, packs consist of \n\t\t\t\twerewolves from many tribes, who each bring their own \n\t\t\t\tcontext for who the Garou are and how they can best \n\t\t\t\tfight the Wyrm. Each tribe has a spirit totem that reflects \n\t\t\t\tthe tribe’s characteristics. Some tribes have ties to various \n\t\t\t\thuman cultures and ethnicities, though the strength of \n\t\t\t\tthese ties is waning. Choose your character’s tribe with \n\t\t\t\tcare, as it will impact both her background, and her choice \n\t\t\t\tof Backgrounds.\n\t\t\t\tPlayers can choose any of the 13 tribes of the Garou \n\t\t\t\tNation. The tribes are described further under the <a href=\"/tribes/Furies\">\"Tribes\"</a> section.\n\t\t\t</p>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/tribes/tribes.component.ts":
/*!********************************************!*\
  !*** ./src/app/tribes/tribes.component.ts ***!
  \********************************************/
/*! exports provided: TribesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TribesComponent", function() { return TribesComponent; });
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

var TribesComponent = /** @class */ (function () {
    function TribesComponent() {
    }
    TribesComponent.prototype.ngOnInit = function () {
    };
    TribesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tribes',
            template: __webpack_require__(/*! ./tribes.component.html */ "./src/app/tribes/tribes.component.html"),
            styles: [__webpack_require__(/*! ./tribes.component.css */ "./src/app/tribes/tribes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TribesComponent);
    return TribesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /home/geekodot/WerewolfRPG/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map