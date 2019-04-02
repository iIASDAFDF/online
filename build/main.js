webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotterysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LotterysPage = /** @class */ (function () {
    function LotterysPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.lotterys = [];
        this.lotterys = navParams.get("lotterys");
        this.callback = navParams.get("callback");
    }
    LotterysPage.prototype.selectLotteryAction = function (groupIndex, itemIndex) {
        var obj = {};
        for (var i = 0; i < this.lotterys.length; i++) {
            var group = this.lotterys[i];
            for (var j = 0; j < group.list.length; j++) {
                var item = group.list[j];
                item.select = false;
                if (groupIndex == i && itemIndex == j) {
                    item.select = true;
                    obj = {
                        title: item.lotteryCategoryName,
                        code: item.lotteryCategoryCode,
                        type: group.parentLotteryCategoryCode
                    };
                }
            }
        }
        this.callback(obj);
        this.viewCtrl.dismiss();
    };
    LotterysPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LotterysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lotterys',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\lotterys\lotterys.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>选择彩种</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="dismiss()">取消</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <div class="lotterys">\n\n    <div class="group" *ngFor="let group of lotterys;let i=index;">\n\n      <div class="name">{{group.parentLotteryCategoryName}}</div>\n\n      <div class="items">\n\n        <div class="item" *ngFor="let item of group.list;let j=index;">\n\n          <div class="box" [ngClass]="{\'select\':item.select}" (click)="selectLotteryAction(i,j)">\n\n            {{item.lotteryCategoryName}}\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\lotterys\lotterys.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LotterysPage);
    return LotterysPage;
}());

//# sourceMappingURL=lotterys.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_password_find_password__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, nat, user, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.user = user;
        this.navParams = navParams;
        this.form = {
            stageType: 'mk',
            account: '',
            password: '',
        };
    }
    LoginPage.prototype.loginAction = function () {
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        if (this.form.password.length <= 0) {
            this.nat.showToast("密码不能为空");
            return;
        }
        var url = ["otherWay", "/api/user/loginCheck"];
        var self = this;
        this.http.post(url, this.form, function (res, err) {
            if (!err) {
                self.nat.storageSetValue("userInfo", JSON.stringify(res));
                self.user.setUserInfo(res);
                self.navCtrl.pop();
            }
        });
    };
    LoginPage.prototype.registerAction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.findPasswordAction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__find_password_find_password__["a" /* FindPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>会员登录</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="head">\n\n      <div class="icon">\n\n        <img src="./assets/login/icon@3x.png"/>     \n\n      </div>\n\n      <p class="title">中金开奖</p>\n\n  </div>\n\n  <div class="form">\n\n    <div class="item">\n\n      <img src="./assets/login/user@3x.png">\n\n      <input type="text" placeholder="用户名/手机号/邮箱" [(ngModel)]="form.account">\n\n    </div>\n\n    <div class="item">\n\n      <img src="./assets/login/lock@3x.png">\n\n      <input type="password" placeholder="密码" [(ngModel)]="form.password">\n\n    </div>\n\n  </div>\n\n  <div class="forget"><span (click)="findPasswordAction()">忘记密码</span><span (click)="registerAction()">注册</span></div>\n\n\n\n  <div class="buttons">\n\n    <button class="login" (click)="loginAction()">登录</button>\n\n  </div>\n\n  <!-- <div>\n\n    <div class="fenjie">\n\n      <span class="line"></span>\n\n      <span>OR</span>\n\n      <span class="line"></span>\n\n    </div>\n\n  </div> -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_5__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading__ = __webpack_require__(1201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notice_notice__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pk10_pk10__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ssc_ssc__ = __webpack_require__(1204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select5_select5__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__slow_slow__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__k3_k3__ = __webpack_require__(1207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scroll_bar_scroll_bar__ = __webpack_require__(1210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plan_plan__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__statistic_statistic__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__prediction_prediction__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__topimg_topimg__ = __webpack_require__(1214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_3__notice_notice__["a" /* NoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pk10_pk10__["a" /* Pk10Component */],
                __WEBPACK_IMPORTED_MODULE_7__ssc_ssc__["a" /* SscComponent */],
                __WEBPACK_IMPORTED_MODULE_8__select5_select5__["a" /* Select5Component */],
                __WEBPACK_IMPORTED_MODULE_9__slow_slow__["a" /* SlowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__k3_k3__["a" /* K3Component */],
                __WEBPACK_IMPORTED_MODULE_12__scroll_bar_scroll_bar__["a" /* ScrollBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__plan_plan__["a" /* PlanComponent */],
                __WEBPACK_IMPORTED_MODULE_14__statistic_statistic__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_15__prediction_prediction__["a" /* PredictionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__topimg_topimg__["a" /* TopimgComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_echarts__["a" /* NgxEchartsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loading_loading__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_3__notice_notice__["a" /* NoticeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pk10_pk10__["a" /* Pk10Component */],
                __WEBPACK_IMPORTED_MODULE_7__ssc_ssc__["a" /* SscComponent */],
                __WEBPACK_IMPORTED_MODULE_8__select5_select5__["a" /* Select5Component */],
                __WEBPACK_IMPORTED_MODULE_9__slow_slow__["a" /* SlowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__k3_k3__["a" /* K3Component */],
                __WEBPACK_IMPORTED_MODULE_12__scroll_bar_scroll_bar__["a" /* ScrollBarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__plan_plan__["a" /* PlanComponent */],
                __WEBPACK_IMPORTED_MODULE_14__statistic_statistic__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_15__prediction_prediction__["a" /* PredictionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__topimg_topimg__["a" /* TopimgComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    Object.defineProperty(LoadingComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LoadingComponent.prototype, "text", null);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\loading\loading.html"*/'\n\n<div class="loading">\n\n  <img src="./assets/imgs/loading.gif">\n\n  <p>{{text}}</p>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\loading\loading.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticeComponent = /** @class */ (function () {
    function NoticeComponent() {
    }
    NoticeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notice',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\notice\notice.html"*/'<!-- Generated template for the NoticeComponent component -->\n\n<div class="body">\n\n  {{text}}\n\n  <!--遮罩-->\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\notice\notice.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NoticeComponent);
    return NoticeComponent;
}());

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pk10Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pk10Component = /** @class */ (function () {
    function Pk10Component(actionSheet, http) {
        this.actionSheet = actionSheet;
        this.http = http;
        this.indexBar = 0; //第几球索引
        this.navBar = []; //时时彩导航
        this.navBarIndex = 0; //时时彩导航索引
        this.number = 30;
        this.numberStr = "近30期";
        this.numbers = [];
        this.types = [];
        this.indexBarStr = "冠军";
        this.navBar = [
            {
                select: true,
                type: 0,
                name: '号码分布',
                item: [],
                url: '/api/lotteryOpenNumber/getNewestOpenNumberByLotteryCategory',
                dataSource: [],
                currentData: []
            },
            {
                select: false,
                type: 0,
                name: '号码走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryBaseTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 1,
                name: '冠亚和走势',
                subIndex: 0,
                item: [],
                url: '/api/lotteryOpenNumber/getLotterySumTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 2,
                name: '位置走势',
                subIndex: 0,
                item: [{
                        select: true,
                        subType: 0,
                        name: '号码分布',
                    }, {
                        select: false,
                        subType: 0,
                        name: '形态特征',
                    }, {
                        select: false,
                        subType: 0,
                        name: '012路',
                    }, {
                        select: false,
                        subType: 0,
                        name: '升平降',
                    }],
                url: '/api/lotteryOpenNumber/getLotteryPositionTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 3,
                name: '龙虎统计',
                item: [{
                        select: true,
                        subType: 0,
                        name: '奇偶个数',
                    }, {
                        select: false,
                        subType: 0,
                        name: '奇偶比',
                    }],
                url: '/api/lotteryOpenNumber/getDragonTigerOfPk',
                dataSource: [],
                currnetData: []
            }, {
                select: false,
                type: 4,
                name: '冷热分析',
                item: [{
                        select: true,
                        subType: 0,
                        name: '和值走势',
                    }, {
                        select: false,
                        subType: 0,
                        name: '和值形态',
                    }],
                url: '/api/lotteryOpenNumber/getColdAndHotAnalysis',
                dataSource: [],
                currentData: []
            }
        ];
        this.numbers = [
            { select: false, num: '01', numInt: 1 },
            { select: false, num: '02', numInt: 2 },
            { select: false, num: '03', numInt: 3 },
            { select: false, num: '04', numInt: 4 },
            { select: false, num: '05', numInt: 5 },
            { select: false, num: '06', numInt: 6 },
            { select: false, num: '07', numInt: 7 },
            { select: false, num: '08', numInt: 8 },
            { select: false, num: '09', numInt: 9 },
            { select: false, num: '10', numInt: 10 },
        ];
        this.types = [
            { select: false, num: '单' },
            { select: false, num: '双' },
            { select: false, num: '大' },
            { select: false, num: '小' },
        ];
    }
    Object.defineProperty(Pk10Component.prototype, "setLotteryCode", {
        set: function (code) {
            this.lotteryCode = code;
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    Pk10Component.prototype.ngAfterViewChecked = function () {
        if (this.navBarIndex == 1) {
            var svg = document.getElementById('svg');
            var node = document.getElementsByClassName('zhong');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
        else if (this.navBarIndex == 2) {
            var svg = document.getElementById('svg1');
            var node = document.getElementsByClassName('zhong1');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
        else if (this.navBarIndex == 3 && this.navBar[3].subIndex == 0) {
            var svg = document.getElementById('svg2');
            var node = document.getElementsByClassName('zhong2');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
    };
    Pk10Component.prototype.createLine = function (bars, lineColor) {
        var svgStr = "";
        if (bars.length <= 0)
            return;
        for (var i = 0; i < this.number - 1; i++) {
            var td = bars[i].parentNode;
            var top_1 = td.offsetTop;
            var left = td.offsetLeft;
            var width = td.offsetWidth / 2;
            var height = td.offsetHeight / 2;
            var tdX = left + width;
            var tdY = top_1 + height;
            var td1 = bars[i + 1].parentNode;
            var top1 = td1.offsetTop;
            var left1 = td1.offsetLeft;
            var width1 = td1.offsetWidth / 2;
            var height1 = td1.offsetHeight / 2;
            var td1X = left1 + width1;
            var td1Y = top1 + height1;
            svgStr += "<line style='stroke:" + lineColor + "' x1='" + tdX + "' y1='" + tdY + "' x2='" + td1X + "' y2='" + td1Y + "'/>";
        }
        return svgStr;
    };
    Pk10Component.prototype.getData = function () {
        var self = this;
        var url = this.navBar[this.navBarIndex].url;
        var navBarIndex = self.navBarIndex; //防止快速切换navBarIndex 数据请求前和请求完毕后navBarIndex不同而报错
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode, number: this.number }, function (data, err) {
            if (!err) {
                if (navBarIndex == 1 || navBarIndex == 3) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].trendList = data[i].trendList.reverse();
                        for (var j = 0; j < data[i].trendList.length; j++) {
                            var item = data[i].trendList[j];
                            item.openNumber = item.openNumber.split(',');
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[self.indexBar].trendList;
                }
                else if (navBarIndex == 2) {
                    //console.log(data)
                    data.trendList = data.trendList.reverse();
                    for (var j = 0; j < data.trendList.length; j++) {
                        var item = data.trendList[j];
                        item.openNumber = item.openNumber.split(',');
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data.trendList;
                }
                else if (navBarIndex == 4) {
                    for (var j = 0; j < data.length; j++) {
                        var item = data[j];
                        item.createTime = item.createTime.substring(2, 10);
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data;
                }
                else if (navBarIndex == 5) {
                    for (var i = 0; i < data.length; i++) {
                        var group = data[i];
                        if (group.rank == 1) {
                            group.ranking = "冠军";
                        }
                        else if (group.rank == 2) {
                            group.ranking = "亚军";
                        }
                        else if (group.rank == 3) {
                            group.ranking = "季军";
                        }
                        else if (group.rank == 4) {
                            group.ranking = "第四名";
                        }
                        else if (group.rank == 5) {
                            group.ranking = "第五名";
                        }
                        else if (group.rank == 6) {
                            group.ranking = "第六名";
                        }
                        else if (group.rank == 7) {
                            group.ranking = "第七名";
                        }
                        else if (group.rank == 8) {
                            group.ranking = "第八名";
                        }
                        else if (group.rank == 9) {
                            group.ranking = "第九名";
                        }
                        else if (group.rank == 10) {
                            group.ranking = "第十名";
                        }
                        for (var j = 0; j < group.list.length; j++) {
                            var item = group.list[j];
                            if (item.state == 1) {
                                item.name = "热号";
                            }
                            else if (item.state == 2) {
                                item.name = "温号";
                            }
                            else if (item.state == 3) {
                                item.name = "冷号";
                            }
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data;
                }
                else {
                    for (var i = 0; i < data.length; i++) {
                        var array = data[i].lotteryOpenNumber.split(',');
                        data[i].openNumber = [];
                        for (var j = 0; j < array.length; j++) {
                            data[i].openNumber.push({ num: parseInt(array[j]), opacity: false });
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data;
                }
            }
        });
    };
    Pk10Component.prototype.onSelectItem = function (index) {
        if (this.navBarIndex == index)
            return;
        this.navBarIndex = index;
        this.indexBar = 0;
        this.indexBarStr = "第一球";
        this.getData();
    };
    Pk10Component.prototype.selectSubBarAction = function (index) {
        for (var i = 0; i < this.navBar[this.navBarIndex].item.length; i++) {
            this.navBar[this.navBarIndex].item[i].select = false;
        }
        this.navBar[this.navBarIndex].item[index].select = true;
        this.navBar[this.navBarIndex].subIndex = index;
    };
    //当前第几球
    Pk10Component.prototype.selectBarIndex = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                { text: '冠军', handler: function () { _this.setCurrentIndexBar(0, '冠军'); } },
                { text: '亚军', handler: function () { _this.setCurrentIndexBar(1, '亚军'); } },
                { text: '第三名', handler: function () { _this.setCurrentIndexBar(2, '第三名'); } },
                { text: '第四名', handler: function () { _this.setCurrentIndexBar(3, '第四名'); } },
                { text: '第五名', handler: function () { _this.setCurrentIndexBar(4, '第五名'); } },
                { text: '第六名', handler: function () { _this.setCurrentIndexBar(5, '第六名'); } },
                { text: '第七名', handler: function () { _this.setCurrentIndexBar(6, '第七名'); } },
                { text: '第八名', handler: function () { _this.setCurrentIndexBar(7, '第八名'); } },
                { text: '第九名', handler: function () { _this.setCurrentIndexBar(8, '第九名'); } },
                { text: '第十名', handler: function () { _this.setCurrentIndexBar(9, '第十名'); } },
                { text: '取消', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }
            ]
        });
        actionSheet.present();
    };
    Pk10Component.prototype.setCurrentIndexBar = function (index, indexName) {
        this.indexBarStr = indexName;
        this.indexBar = index;
        this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[index].trendList;
    };
    Pk10Component.prototype.selectNumberIndexAction = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '近30期',
                    handler: function () {
                        _this.numberStr = "近30期";
                        _this.number = 30;
                        _this.getData();
                    }
                },
                {
                    text: '近60期',
                    handler: function () {
                        _this.numberStr = "近60期";
                        _this.number = 60;
                        _this.getData();
                    }
                },
                {
                    text: '近90期',
                    handler: function () {
                        _this.numberStr = "近90期";
                        _this.number = 90;
                        _this.getData();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Pk10Component.prototype.selectTypeAction = function (index) {
        for (var i = 0; i < this.numbers.length; i++) {
            this.numbers[i].select = false;
        }
        for (var i = 0; i < this.types.length; i++) {
            this.types[i].select = false;
        }
        this.types[index].select = true;
        var data = this.navBar[this.navBarIndex].currentData;
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].openNumber.length; j++) {
                if (index == 0) {
                    if (data[i].openNumber[j].num % 2 != 0) {
                        data[i].openNumber[j].opacity = false;
                    }
                    else {
                        data[i].openNumber[j].opacity = true;
                    }
                }
                else if (index == 1) {
                    if (data[i].openNumber[j].num % 2 == 0) {
                        data[i].openNumber[j].opacity = false;
                    }
                    else {
                        data[i].openNumber[j].opacity = true;
                    }
                }
                else if (index == 2) {
                    if (data[i].openNumber[j].num >= 6) {
                        data[i].openNumber[j].opacity = false;
                    }
                    else {
                        data[i].openNumber[j].opacity = true;
                    }
                }
                else if (index == 3) {
                    if (data[i].openNumber[j].num <= 5) {
                        data[i].openNumber[j].opacity = false;
                    }
                    else {
                        data[i].openNumber[j].opacity = true;
                    }
                }
            }
        }
    };
    Pk10Component.prototype.selectNumberAction = function (index) {
        for (var i = 0; i < this.types.length; i++) {
            this.types[i].select = false;
        }
        for (var i = 0; i < this.numbers.length; i++) {
            this.numbers[i].select = false;
        }
        this.numbers[index].select = true;
        var data = this.navBar[this.navBarIndex].currentData;
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].openNumber.length; j++) {
                if (this.numbers[index].numInt == data[i].openNumber[j].num) {
                    data[i].openNumber[j].opacity = false;
                }
                else {
                    data[i].openNumber[j].opacity = true;
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Pk10Component.prototype, "setLotteryCode", null);
    Pk10Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pk10',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\pk10\pk10.html"*/'<scroll-bar [setButtonArray]="navBar" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n\n\n<div class="point" *ngIf="navBarIndex == 3">\n\n  <div class="item"\n\n       *ngFor="let item of navBar[navBarIndex].item;let i=index;"\n\n       [ngClass]="{\'select\':item.select}"\n\n       (click)="selectSubBarAction(i)">\n\n    {{item.name}}\n\n  </div>\n\n</div>\n\n\n\n<div class="select" *ngIf="navBarIndex != 4 && navBarIndex != 5 && navBarIndex != 0">\n\n  <div class="down" (click)="selectBarIndex()"  *ngIf="navBarIndex == 1 || navBarIndex == 3">{{indexBarStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="down" (click)="selectNumberIndexAction()">{{numberStr}} <ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="tj">查看数据统计</div>\n\n  <div style="clear: both"></div>\n\n</div>\n\n<div *ngIf="navBarIndex == 0" class="hmfb">\n\n\n\n  <div class="numbers">\n\n    <div *ngFor="let item of numbers;let i=index;" class="num">\n\n      <div (click)="selectNumberAction(i)" [ngClass]="{\'selectNum\':item.select}">{{item.num}}</div>\n\n    </div>\n\n  </div>\n\n  <div class="type">\n\n    <div (click)="selectTypeAction(i)" *ngFor="let item of types;let i=index;" [ngClass]="{\'selectNum\':item.select}">{{item.num}}</div>\n\n  </div>\n\n  <div class="list">\n\n    <div class="item" *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <p class="periods">{{item.lotteryPeriods}}</p>\n\n      <img *ngFor="let num of item.openNumber" [ngClass]="{\'opacity\':num.opacity}" src="./assets/gameIcon/pk{{num.num}}.png">\n\n    </div>\n\n  </div>\n\n</div>\n\n<!--号码走势-->\n\n<div *ngIf="navBarIndex == 1">\n\n\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red">{{item.openNumber[indexBar]}}</td>\n\n      <td *ngFor="let num of item.trendArray">\n\n        <span [ngClass]="{\'zhong\':num > 0}">{{num | custompipe:\'\'}}</span>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td>数据统计</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let num of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let num of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td *ngFor="let num of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let num of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues">{{num}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--冠亚和走势-->\n\n<div *ngIf="navBarIndex == 2" style="overflow: scroll">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n      <td>11</td>\n\n      <td>12</td>\n\n      <td>13</td>\n\n      <td>14</td>\n\n      <td>15</td>\n\n      <td>16</td>\n\n      <td>17</td>\n\n      <td>18</td>\n\n      <td>19</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg1"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td *ngFor="let num of item.trendArray">\n\n        <span [ngClass]="{\'zhong1\':num > 0}">{{num | custompipe:\'\'}}</span>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[1].dataSource.analyseTable" class="tj">\n\n    <thead>\n\n    <tr>\n\n      <td>数据统计</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n      <td>11</td>\n\n      <td>12</td>\n\n      <td>13</td>\n\n      <td>14</td>\n\n      <td>15</td>\n\n      <td>16</td>\n\n      <td>17</td>\n\n      <td>18</td>\n\n      <td>19</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let num of navBar[1].dataSource.analyseTable[0].appearCount">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let num of navBar[1].dataSource.analyseTable[0].averageMissingValues">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td *ngFor="let num of navBar[1].dataSource.analyseTable[0].maxContinueNum">{{num}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let num of navBar[1].dataSource.analyseTable[0].maxMissingValues">{{num}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n<!--位置走势-->\n\n<!--号码分布-->\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 0">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg2"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red">{{item.openNumber[indexBar]}}</td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[0] > 0}">{{item.trendArray[0] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[1] > 0}">{{item.trendArray[1] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[2] > 0}">{{item.trendArray[2] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[3] > 0}">{{item.trendArray[3] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[4] > 0}">{{item.trendArray[4] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[5] > 0}">{{item.trendArray[5] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[6] > 0}">{{item.trendArray[6] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[7] > 0}">{{item.trendArray[7] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[8] > 0}">{{item.trendArray[8] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[9] > 0}">{{item.trendArray[9] | custompipe:\'\'}}</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--形态特征-->\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 1">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td colspan="2">奇偶</td>\n\n      <td colspan="2">大小</td>\n\n      <td colspan="2">质和</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red">{{item.openNumber[indexBar]}}</td>\n\n      <td><span [ngClass]="{\'orange\':item.trendArray[10] > 0}">{{item.trendArray[10] | custompipe:\'reliance\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[11] > 0}">{{item.trendArray[11] | custompipe:\'even\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange\':item.trendArray[12] > 0}">{{item.trendArray[12] | custompipe:\'big\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[13] > 0}">{{item.trendArray[13] | custompipe:\'small\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange\':item.trendArray[14] > 0}">{{item.trendArray[14] | custompipe:\'quality\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong2\':item.trendArray[15] > 0}">{{item.trendArray[15] | custompipe:\'with\'}}</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td>数据统计</td>\n\n      <td colspan="2">奇偶</td>\n\n      <td colspan="2">大小</td>\n\n      <td colspan="2">质和</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[10]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[15]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[10]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[15]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[10]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[15]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[10]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[15]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--012路-->\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 2">\n\n  <table >\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>0</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red;font-size: 1.4rem;">{{item.openNumber[indexBar]}}</td>\n\n      <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[16] > 0}">\n\n          {{item.trendArray[16] | custompipe : \'0\'}}\n\n        </span>\n\n\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[17] > 0}">\n\n          {{item.trendArray[17] | custompipe : \'1\'}}\n\n        </span>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[18] > 0}">\n\n          {{item.trendArray[18] | custompipe : \'2\'}}\n\n        </span>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td width="40%">数据统计</td>\n\n      <td>0</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[16]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[17]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[18]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[16]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[17]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[18]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[16]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[17]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[18]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[16]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[17]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[18]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--升平降-->\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 3">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>升</td>\n\n      <td>平</td>\n\n      <td>降</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red;font-size: 1.4rem;">{{item.openNumber[indexBar]}}</td>\n\n      <td><span [ngClass]="{\'orange\':item.trendArray[19] > 0}">{{item.trendArray[19] | custompipe : \'shen\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[20] > 0}">{{item.trendArray[20] | custompipe : \'pin\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange\':item.trendArray[21] > 0}">{{item.trendArray[21] | custompipe : \'jiang\'}}</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td width="40%">数据统计</td>\n\n      <td>升</td>\n\n      <td>平</td>\n\n      <td>降</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[19]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[20]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[21]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[19]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[20]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[21]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[19]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[20]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[21]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[19]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[20]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[21]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n<!--龙虎-->\n\n<div *ngIf="navBarIndex == 4" class="dragon">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td rowspan="2">期号</td>\n\n      <td colspan="2">冠军</td>\n\n      <td colspan="2">亚军</td>\n\n      <td colspan="2">第三</td>\n\n      <td colspan="2">第四</td>\n\n      <td colspan="2">第五</td>\n\n    </tr>\n\n    <tr>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.createTime}}</td>\n\n      <td>{{item.firstDragon}}</td>\n\n      <td>{{item.firstTiger}}</td>\n\n      <td>{{item.secondDragon}}</td>\n\n      <td>{{item.secondTiger}}</td>\n\n      <td>{{item.thirdDragon}}</td>\n\n      <td>{{item.thirdTiger}}</td>\n\n      <td>{{item.fourthDragon}}</td>\n\n      <td>{{item.fourthTiger}}</td>\n\n      <td>{{item.fifthDragon}}</td>\n\n      <td>{{item.fifthTiger}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n<!--冷热-->\n\n<div *ngIf="navBarIndex == 5" class="hot">\n\n  <table *ngFor="let group of navBar[navBarIndex].currentData;let i=index;">\n\n    <thead>\n\n    <tr>\n\n      <td colspan="2" [ngClass]="{\'header-orange\':i==0,\'blue\':i==1,\'grey\':i>1}">{{group.ranking}}</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of group.list;let j=index;">\n\n      <td class="key">{{item.name}}</td>\n\n      <td class="hotNumbers">\n\n        <div *ngFor="let value of item.list;">\n\n          <p class="code">{{value.drawCode}}</p>\n\n          <p class="count" *ngIf="j == 0">{{value.count}}</p>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\pk10\pk10.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */]])
    ], Pk10Component);
    return Pk10Component;
}());

//# sourceMappingURL=pk10.js.map

/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SscComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SscComponent = /** @class */ (function () {
    function SscComponent(actionSheet, http) {
        this.actionSheet = actionSheet;
        this.http = http;
        this.indexBar = 0; //第几球索引
        this.navBar = []; //时时彩导航
        this.navBarIndex = 0; //时时彩导航索引
        this.number = 30;
        this.numberStr = "近30期";
        this.indexBarStr = "第一球";
        this.navBar = [
            {
                select: true,
                type: 0,
                name: '基本走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryBaseTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 1,
                name: '定位走势',
                subIndex: 0,
                item: [{
                        select: true,
                        name: '形态特征',
                    }, {
                        select: false,
                        name: '012路',
                    }, {
                        select: false,
                        name: '升平降',
                    }
                ],
                url: '/api/lotteryOpenNumber/getLotteryPositionTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 2,
                name: '形态走势',
                subIndex: 0,
                item: [
                    {
                        select: true,
                        name: '前三形态',
                    }, {
                        select: false,
                        name: '中三形态',
                    }, {
                        select: false,
                        name: '后三形态',
                    }
                ],
                url: '/api/lotteryOpenNumber/getLotteryFormTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 3,
                name: '冷热分析',
                item: [],
                url: '/api/lotteryOpenNumber/getColdAndHotAnalysis',
                dataSource: [],
                currnetData: []
            }, {
                select: false,
                type: 4,
                name: '龙虎走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryDragonTigerTrend',
                dataSource: [],
                currentData: []
            },
        ];
    }
    Object.defineProperty(SscComponent.prototype, "setLotteryCode", {
        set: function (code) {
            this.lotteryCode = code;
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    SscComponent.prototype.ngAfterViewChecked = function () {
        if (this.navBarIndex == 0) {
            var svg = document.getElementById('svg');
            var node = document.getElementsByClassName('zhong');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
        else if (this.navBarIndex == 2) {
            if (this.navBar[this.navBarIndex].subIndex == 0) {
                var svg1 = document.getElementById('svg1');
                var svg = document.getElementById('svg2');
                var node = document.getElementsByClassName('zhong0');
                var node1 = document.getElementsByClassName('orange0');
                svg.innerHTML = this.createLine(node1, 'orange');
                svg1.innerHTML = this.createLine(node, '#00baff');
            }
            else if (this.navBar[this.navBarIndex].subIndex == 1) {
                var svg1 = document.getElementById('svg3');
                var svg = document.getElementById('svg4');
                var node = document.getElementsByClassName('zhong1');
                var node1 = document.getElementsByClassName('orange1');
                var html = this.createLine(node1, 'orange');
                svg.innerHTML = html;
                svg1.innerHTML = this.createLine(node, '#00baff');
            }
            else if (this.navBar[this.navBarIndex].subIndex == 2) {
                var svg1 = document.getElementById('svg5');
                var svg = document.getElementById('svg6');
                var node = document.getElementsByClassName('zhong');
                var node1 = document.getElementsByClassName('orange');
                var html = this.createLine(node1, 'orange');
                svg.innerHTML = html;
                svg1.innerHTML = this.createLine(node, '#00baff');
            }
        }
        else if (this.navBarIndex == 4) {
            var svg = document.getElementById('svg7');
            var node = document.getElementsByClassName('zhong');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
    };
    SscComponent.prototype.createLine = function (bars, lineColor) {
        var svgStr = "";
        if (bars.length <= 0)
            return;
        for (var i = 0; i < this.number - 1; i++) {
            var td = bars[i].parentNode;
            var top_1 = td.offsetTop;
            var left = td.offsetLeft;
            var width = td.offsetWidth / 2;
            var height = td.offsetHeight / 2;
            var tdX = left + width;
            var tdY = top_1 + height;
            var td1 = bars[i + 1].parentNode;
            var top1 = td1.offsetTop;
            var left1 = td1.offsetLeft;
            var width1 = td1.offsetWidth / 2;
            var height1 = td1.offsetHeight / 2;
            var td1X = left1 + width1;
            var td1Y = top1 + height1;
            svgStr += "<line style='stroke:" + lineColor + "' x1='" + tdX + "' y1='" + tdY + "' x2='" + td1X + "' y2='" + td1Y + "'/>";
        }
        return svgStr;
    };
    SscComponent.prototype.getData = function () {
        var url = this.navBar[this.navBarIndex].url;
        var self = this;
        var navBarIndex = self.navBarIndex;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode, number: this.number }, function (data, err) {
            if (!err) {
                if (navBarIndex == 0 || navBarIndex == 1) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].trendList = data[i].trendList.reverse();
                        for (var j = 0; j < data[i].trendList.length; j++) {
                            var item = data[i].trendList[j];
                            item.openNumber = item.openNumber.split(',');
                            item.preIssue = item.preIssue.substring(4, item.preIssue.length);
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[self.indexBar].trendList;
                }
                else if (navBarIndex == 2) {
                    self.navBar[navBarIndex].dataSource = data;
                    data.trendList.reverse();
                    for (var i = 0; i < data.trendList.length; i++) {
                        var item = data.trendList[i];
                        item.openNumber = item.openNumber.split(',');
                        item.preIssue = item.preIssue.substring(4, item.preIssue.length);
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data.trendList;
                }
                else if (navBarIndex == 3) {
                    for (var i = 0; i < data.length; i++) {
                        var group = data[i];
                        if (group.rank == 1) {
                            group.ranking = "冠军";
                        }
                        else if (group.rank == 2) {
                            group.ranking = "亚军";
                        }
                        else if (group.rank == 3) {
                            group.ranking = "季军";
                        }
                        else if (group.rank == 4) {
                            group.ranking = "第四名";
                        }
                        else if (group.rank == 5) {
                            group.ranking = "第五名";
                        }
                        for (var j = 0; j < group.list.length; j++) {
                            var item = group.list[j];
                            if (item.state == 1) {
                                item.name = "热号";
                            }
                            else if (item.state == 2) {
                                item.name = "温号";
                            }
                            else if (item.state == 3) {
                                item.name = "冷号";
                            }
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data;
                }
                else if (navBarIndex == 4) {
                    self.navBar[navBarIndex].dataSource = data;
                    data.trendList.reverse();
                    for (var i = 0; i < data.trendList.length; i++) {
                        var item = data.trendList[i];
                        item.openNumber = item.openNumber.split(',');
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data.trendList;
                }
            }
        });
    };
    SscComponent.prototype.onSelectItem = function (index) {
        if (this.navBarIndex == index)
            return;
        this.navBarIndex = index;
        this.indexBar = 0;
        this.indexBarStr = "第一球";
        this.getData();
    };
    SscComponent.prototype.selectSubBarAction = function (index) {
        for (var i = 0; i < this.navBar[this.navBarIndex].item.length; i++) {
            this.navBar[this.navBarIndex].item[i].select = false;
        }
        this.navBar[this.navBarIndex].item[index].select = true;
        this.navBar[this.navBarIndex].subIndex = index;
        if (this.navBarIndex == 1) {
            this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[index].trendList;
        }
    };
    //当前第几球
    SscComponent.prototype.selectBarIndex = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '第一球',
                    handler: function () {
                        _this.indexBarStr = "第一球";
                        _this.indexBar = 0;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[0].trendList;
                    }
                },
                {
                    text: '第二球',
                    handler: function () {
                        _this.indexBarStr = "第二球";
                        _this.indexBar = 1;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[1].trendList;
                    }
                },
                {
                    text: '第三球',
                    handler: function () {
                        _this.indexBarStr = "第三球";
                        _this.indexBar = 2;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[2].trendList;
                    }
                }, {
                    text: '第四球',
                    handler: function () {
                        _this.indexBarStr = "第四球";
                        _this.indexBar = 3;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[3].trendList;
                    }
                }, {
                    text: '第五球',
                    handler: function () {
                        _this.indexBarStr = "第五球";
                        _this.indexBar = 4;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[4].trendList;
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SscComponent.prototype.selectNumberAction = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '近30期',
                    handler: function () {
                        _this.numberStr = "近30期";
                        _this.number = 30;
                        _this.getData();
                    }
                },
                {
                    text: '近60期',
                    handler: function () {
                        _this.numberStr = "近60期";
                        _this.number = 60;
                        _this.getData();
                    }
                },
                {
                    text: '近90期',
                    handler: function () {
                        _this.numberStr = "近90期";
                        _this.number = 90;
                        _this.getData();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SscComponent.prototype, "setLotteryCode", null);
    SscComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ssc',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\ssc\ssc.html"*/'\n\n<scroll-bar [setButtonArray]="navBar" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n<div class="point" *ngIf="navBarIndex == 1 || navBarIndex == 2">\n\n\n\n  <div class="item"\n\n       *ngFor="let item of navBar[navBarIndex].item;let i=index;"\n\n       [ngClass]="{\'select\':item.select}"\n\n       (click)="selectSubBarAction(i)">\n\n    {{item.name}}\n\n  </div>\n\n</div>\n\n<div class="select" *ngIf="navBarIndex != 3">\n\n  <div class="down" (click)="selectBarIndex()"  *ngIf="navBarIndex == 0 || navBarIndex == 1">{{indexBarStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="down" (click)="selectNumberAction()">{{numberStr}} <ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="tj">查看数据统计</div>\n\n  <div style="clear: both"></div>\n\n</div>\n\n<!--基本走势-->\n\n<div *ngIf="navBarIndex == 0">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>0</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red;font-size: 1.4rem;">{{item.openNumber[indexBar]}}</td>\n\n      <td *ngFor="let trend of item.trendArray;let i=index;">\n\n        <span *ngIf="trend <= -1">{{trend*-1}}</span>\n\n        <span *ngIf="trend >= 0" class="zhong">{{trend}}</span>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td>数据统计</td>\n\n      <td>0</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--定位走势-->\n\n<div *ngIf="navBarIndex == 1">\n\n  <!--形态特征-->\n\n  <div *ngIf="navBar[1].subIndex == 0">\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td>期号</td>\n\n        <td>号码</td>\n\n        <td colspan="2">奇偶</td>\n\n        <td colspan="2">大小</td>\n\n        <td colspan="2">质和</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td>{{item.openNumber[indexBar]}}</td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[10]>0}">\n\n          {{item.trendArray[10] | custompipe : \'reliance\'}}\n\n        </span>\n\n        </td>\n\n        <td >\n\n        <span [ngClass]="{\'zhong\':item.trendArray[11]>0}">\n\n           {{item.trendArray[11] | custompipe : \'even\'}}\n\n        </span>\n\n        </td>\n\n        <td >\n\n        <span [ngClass]="{\'orange\':item.trendArray[12]>0}">\n\n          {{item.trendArray[12] | custompipe : \'big\'}}\n\n        </span>\n\n        </td>\n\n        <td >\n\n        <span [ngClass]="{\'zhong\':item.trendArray[13]>0}">\n\n          {{item.trendArray[13] | custompipe : \'small\'}}\n\n        </span>\n\n\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[14]>0}">\n\n          {{item.trendArray[14] | custompipe : \'quality\'}}\n\n        </span>\n\n\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[15]>0}">\n\n           {{item.trendArray[15] | custompipe : \'with\'}}\n\n        </span>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource.length > 0">\n\n      <thead>\n\n      <tr>\n\n        <td>数据统计</td>\n\n        <td colspan="2">奇偶</td>\n\n        <td colspan="2">大小</td>\n\n        <td colspan="2">质和</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[15]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div *ngIf="navBar[1].subIndex == 1">\n\n    <table >\n\n      <thead>\n\n      <tr>\n\n        <td>期号</td>\n\n        <td>号码</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td style="color: red;font-size: 1.4rem;">{{item.openNumber[indexBar]}}</td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[16] > 0}">\n\n          {{item.trendArray[16] | custompipe : \'0\'}}\n\n        </span>\n\n\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[17] > 0}">\n\n          {{item.trendArray[17] | custompipe : \'1\'}}\n\n        </span>\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[18] > 0}">\n\n          {{item.trendArray[18] | custompipe : \'2\'}}\n\n        </span>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n      <thead>\n\n      <tr>\n\n        <td width="40%">数据统计</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[18]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[18]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[18]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[18]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div *ngIf="navBar[1].subIndex == 2">\n\n    <table >\n\n      <thead>\n\n      <tr>\n\n        <td>期号</td>\n\n        <td>号码</td>\n\n        <td>升</td>\n\n        <td>平</td>\n\n        <td>降</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td style="color: red;font-size: 1.4rem;">{{item.openNumber[indexBar]}}</td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[19] > 0}">\n\n          {{item.trendArray[19] | custompipe : \'shen\'}}\n\n        </span>\n\n\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[20] > 0}">\n\n          {{item.trendArray[20] | custompipe : \'pin\'}}\n\n        </span>\n\n        </td>\n\n        <td>\n\n        <span [ngClass]="{\'orange\':item.trendArray[21] > 0}">\n\n          {{item.trendArray[21] | custompipe : \'jiang\'}}\n\n        </span>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n      <thead>\n\n      <tr>\n\n        <td width="40%">数据统计</td>\n\n        <td>升</td>\n\n        <td>平</td>\n\n        <td>降</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[21]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[21]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[21]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[21]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</div>\n\n\n\n<!--形态走势-->\n\n<div *ngIf="navBarIndex == 2">\n\n  <!--前三-->\n\n  <div *ngIf="navBar[2].subIndex == 0">\n\n    <table >\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">第<br>一<br>球</td>\n\n        <td rowspan="2">第<br>二<br>球</td>\n\n        <td rowspan="2">第<br>三<br>球</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td>豹子</td>\n\n        <td>顺子</td>\n\n        <td>对子</td>\n\n        <td>半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg1"></svg>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg2"></svg>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td>{{item.openNumber[0]}}</td>\n\n        <td>{{item.openNumber[1]}}</td>\n\n        <td>{{item.openNumber[2]}}</td>\n\n        <td><span [ngClass]="{\'zhong0\':item.trendArray[0]>0}">{{item.trendArray[0] | custompipe : \'bao\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong0\':item.trendArray[1]>0}">{{item.trendArray[1] | custompipe : \'sun\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong0\':item.trendArray[2]>0}">{{item.trendArray[2] | custompipe : \'dui\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong0\':item.trendArray[3]>0}">{{item.trendArray[3] | custompipe : \'ban\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong0\':item.trendArray[4]>0}">{{item.trendArray[4] | custompipe : \'za\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange0\':item.trendArray[5]>0}">{{item.trendArray[5] | custompipe : \'zhus\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange0\':item.trendArray[6]>0}">{{item.trendArray[6] | custompipe : \'zhul\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange0\':item.trendArray[7]>0}">{{item.trendArray[7] | custompipe : \'bao\'}}</span></td>\n\n      </tr>\n\n      </tbody>\n\n\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource.analyseTable">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td>豹子</td>\n\n        <td>顺子</td>\n\n        <td>对子</td>\n\n        <td>半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[7]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[7]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[7]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[7]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <!--中三-->\n\n  <div *ngIf="navBar[2].subIndex == 1">\n\n    <table >\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">第<br>一<br>球</td>\n\n        <td rowspan="2">第<br>二<br>球</td>\n\n        <td rowspan="2">第<br>三<br>球</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td >豹子</td>\n\n        <td >顺子</td>\n\n        <td >对子</td>\n\n        <td >半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg3"></svg>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg4"></svg>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td>{{item.openNumber[0]}}</td>\n\n        <td>{{item.openNumber[1]}}</td>\n\n        <td>{{item.openNumber[2]}}</td>\n\n        <td><span [ngClass]="{\'zhong1\':item.trendArray[8]>0}">{{item.trendArray[8] | custompipe : \'bao\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong1\':item.trendArray[9]>0}">{{item.trendArray[9] | custompipe : \'sun\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong1\':item.trendArray[10]>0}">{{item.trendArray[10] | custompipe : \'dui\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong1\':item.trendArray[11]>0}">{{item.trendArray[11] | custompipe : \'ban\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong1\':item.trendArray[12]>0}">{{item.trendArray[12] | custompipe : \'za\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange1\':item.trendArray[13]>0}">{{item.trendArray[13] | custompipe : \'zhus\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange1\':item.trendArray[14]>0}">{{item.trendArray[14] | custompipe : \'zhul\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange1\':item.trendArray[15]>0}">{{item.trendArray[15] | custompipe : \'bao\'}}</span></td>\n\n      </tr>\n\n      </tbody>\n\n\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td>豹子</td>\n\n        <td>顺子</td>\n\n        <td>对子</td>\n\n        <td>半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[15]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <!--后三-->\n\n  <div *ngIf="navBar[2].subIndex == 2">\n\n    <table >\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">第<br>一<br>球</td>\n\n        <td rowspan="2">第<br>二<br>球</td>\n\n        <td rowspan="2">第<br>三<br>球</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td >豹子</td>\n\n        <td >顺子</td>\n\n        <td >对子</td>\n\n        <td >半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg5"></svg>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg6"></svg>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td>{{item.openNumber[0]}}</td>\n\n        <td>{{item.openNumber[1]}}</td>\n\n        <td>{{item.openNumber[2]}}</td>\n\n        <td><span [ngClass]="{\'zhong\':item.trendArray[16]>0}">{{item.trendArray[16] | custompipe : \'bao\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong\':item.trendArray[17]>0}">{{item.trendArray[17] | custompipe : \'sun\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong\':item.trendArray[18]>0}">{{item.trendArray[18] | custompipe : \'dui\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong\':item.trendArray[19]>0}">{{item.trendArray[19] | custompipe : \'ban\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong\':item.trendArray[20]>0}">{{item.trendArray[20] | custompipe : \'za\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange\':item.trendArray[21]>0}">{{item.trendArray[21] | custompipe : \'zhus\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange\':item.trendArray[22]>0}">{{item.trendArray[22] | custompipe : \'zhul\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange\':item.trendArray[23]>0}">{{item.trendArray[23] | custompipe : \'bao\'}}</span></td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="5">形态</td>\n\n        <td colspan="3">组选类型</td>\n\n      </tr>\n\n      <tr>\n\n        <td>豹子</td>\n\n        <td>顺子</td>\n\n        <td>对子</td>\n\n        <td>半顺</td>\n\n        <td>杂六</td>\n\n        <td>组三</td>\n\n        <td>组六</td>\n\n        <td>豹子</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[21]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[22]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[23]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[21]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[22]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[23]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[21]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[22]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[23]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[19]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[20]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[21]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[22]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[23]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</div>\n\n<!--冷热-->\n\n<div *ngIf="navBarIndex == 3" class="hot">\n\n  <table *ngFor="let group of navBar[navBarIndex].currentData;let i=index;">\n\n    <thead>\n\n    <tr>\n\n      <td colspan="2" [ngClass]="{\'header-orange\':i==0,\'blue\':i==1,\'grey\':i>1}">{{group.ranking}}</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of group.list;let j=index;">\n\n      <td class="key">{{item.name}}</td>\n\n      <td class="hotNumbers">\n\n        <div *ngFor="let value of item.list;">\n\n          <p class="code">{{value.drawCode}}</p>\n\n          <p class="count" *ngIf="j == 0">{{value.count}}</p>\n\n        </div>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--龙虎-->\n\n<div *ngIf="navBarIndex == 4" class="dragon">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td width="30%">期号</td>\n\n      <td width="30%">开奖号码</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>和</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg7"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td class="numbers"><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[0]>=0}">{{item.trendArray[0] | custompipe:\'龙\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[1]>=0}">{{item.trendArray[1] | custompipe:\'虎\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[2]>=0}">{{item.trendArray[2] | custompipe:\'和\'}}</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource.analyseTable">\n\n    <thead>\n\n    <tr>\n\n      <td >数据统计</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n      <td>和</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[1]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[2]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[1]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[2]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[1]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[2]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[1]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[2]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\ssc\ssc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */]])
    ], SscComponent);
    return SscComponent;
}());

//# sourceMappingURL=ssc.js.map

/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Select5Component = /** @class */ (function () {
    function Select5Component(actionSheet, http) {
        this.actionSheet = actionSheet;
        this.http = http;
        this.indexBar = 0; //第几球索引
        this.navBar = []; //时时彩导航
        this.navBarIndex = 0; //时时彩导航索引
        this.number = 30;
        this.numberStr = "近30期";
        this.numbers = [];
        this.indexBarStr = "第一球";
        this.navBar = [
            {
                select: true,
                type: 0,
                name: '基本走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryBaseTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 2,
                name: '定位走势',
                subIndex: 0,
                item: [],
                url: '/api/lotteryOpenNumber/getElevnFiveOrFastThreePositionTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 3,
                name: '龙虎走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryDragonTigerTrend',
                dataSource: [],
                currnetData: []
            }, {
                select: false,
                type: 4,
                name: '和值走势',
                subIndex: 0,
                item: [{
                        select: true,
                        subType: 0,
                        name: '和值和尾',
                    }, {
                        select: false,
                        subType: 0,
                        name: '和值号码分布',
                    }],
                url: '/api/lotteryOpenNumber/getLotterySumTrend',
                dataSource: [],
                currentData: []
            }
        ];
        for (var i = 15; i < 46; i++) {
            this.numbers.push(i);
        }
    }
    Object.defineProperty(Select5Component.prototype, "setLotteryCode", {
        set: function (code) {
            this.lotteryCode = code;
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    Select5Component.prototype.ngAfterViewChecked = function () {
        if (this.navBarIndex == 0) {
            var svg = document.getElementById('svg');
            var node = document.getElementsByClassName('zhong');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
        else if (this.navBarIndex == 1) {
            var svg1 = document.getElementById('svg1');
            var svg = document.getElementById('svg2');
            var node = document.getElementsByClassName('zhong0');
            var node1 = document.getElementsByClassName('orange0');
            svg.innerHTML = this.createLine(node1, 'orange');
            svg1.innerHTML = this.createLine(node, '#00baff');
        }
        if (this.navBarIndex == 2) {
            var svg = document.getElementById('svg3');
            var node = document.getElementsByClassName('zhong1');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
    };
    Select5Component.prototype.createLine = function (bars, lineColor) {
        var svgStr = "";
        if (bars.length <= 0)
            return;
        for (var i = 0; i < this.number - 1; i++) {
            var td = bars[i].parentNode;
            var top_1 = td.offsetTop;
            var left = td.offsetLeft;
            var width = td.offsetWidth / 2;
            var height = td.offsetHeight / 2;
            var tdX = left + width;
            var tdY = top_1 + height;
            var td1 = bars[i + 1].parentNode;
            var top1 = td1.offsetTop;
            var left1 = td1.offsetLeft;
            var width1 = td1.offsetWidth / 2;
            var height1 = td1.offsetHeight / 2;
            var td1X = left1 + width1;
            var td1Y = top1 + height1;
            svgStr += "<line style='stroke:" + lineColor + "' x1='" + tdX + "' y1='" + tdY + "' x2='" + td1X + "' y2='" + td1Y + "'/>";
        }
        return svgStr;
    };
    Select5Component.prototype.getData = function () {
        var url = this.navBar[this.navBarIndex].url;
        var self = this;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode, number: this.number }, function (data, err) {
            if (!err) {
                if (self.navBarIndex == 0 || self.navBarIndex == 1) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].trendList = data[i].trendList.reverse();
                        for (var j = 0; j < data[i].trendList.length; j++) {
                            var item = data[i].trendList[j];
                            item.openNumber = item.openNumber.split(',');
                            if (self.navBarIndex == 1) {
                                item.preIssue = item.preIssue.substring(4, item.preIssue.length);
                            }
                            else if (self.navBarIndex == 0) {
                                item.preIssue = item.preIssue.substring(6, item.preIssue.length);
                            }
                        }
                    }
                    self.navBar[self.navBarIndex].dataSource = data;
                    self.navBar[self.navBarIndex].currentData = data[self.indexBar].trendList;
                }
                else if (self.navBarIndex == 2) {
                    data.trendList = data.trendList.reverse();
                    for (var j = 0; j < data.trendList.length; j++) {
                        var item = data.trendList[j];
                        item.openNumber = item.openNumber.split(',');
                    }
                    self.navBar[self.navBarIndex].dataSource = data;
                    self.navBar[self.navBarIndex].currentData = data.trendList;
                }
                else if (self.navBarIndex == 3) {
                    data.trendList = data.trendList.reverse();
                    for (var j = 0; j < data.trendList.length; j++) {
                        var item = data.trendList[j];
                        item.openNumber = item.openNumber.split(',');
                        item.preIssue = item.preIssue.substring(4, item.preIssue.length);
                        item.array = [];
                        var number = 0;
                        for (var i = 0; i < item.openNumber.length; i++) {
                            number += parseInt(item.openNumber[i]);
                        }
                        item.array.push(number);
                        item.array.push(number % 10);
                    }
                    self.navBar[self.navBarIndex].dataSource = data;
                    self.navBar[self.navBarIndex].currentData = data.trendList;
                }
            }
        });
    };
    Select5Component.prototype.onSelectItem = function (index) {
        if (this.navBarIndex == index)
            return;
        this.navBarIndex = index;
        this.indexBar = 0;
        this.indexBarStr = "第一球";
        this.getData();
    };
    Select5Component.prototype.selectSubBarAction = function (index) {
        for (var i = 0; i < this.navBar[this.navBarIndex].item.length; i++) {
            this.navBar[this.navBarIndex].item[i].select = false;
        }
        this.navBar[this.navBarIndex].item[index].select = true;
        this.navBar[this.navBarIndex].subIndex = index;
    };
    //当前第几球
    Select5Component.prototype.selectBarIndex = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '第一球',
                    handler: function () {
                        _this.indexBarStr = "第一球";
                        _this.indexBar = 0;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[0].trendList;
                    }
                },
                {
                    text: '第二球',
                    handler: function () {
                        _this.indexBarStr = "第二球";
                        _this.indexBar = 1;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[1].trendList;
                    }
                },
                {
                    text: '第三球',
                    handler: function () {
                        _this.indexBarStr = "第三球";
                        _this.indexBar = 2;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[2].trendList;
                    }
                }, {
                    text: '第四球',
                    handler: function () {
                        _this.indexBarStr = "第四球";
                        _this.indexBar = 3;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[3].trendList;
                    }
                }, {
                    text: '第五球',
                    handler: function () {
                        _this.indexBarStr = "第五球";
                        _this.indexBar = 4;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[4].trendList;
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Select5Component.prototype.selectNumberAction = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '近30期',
                    handler: function () {
                        _this.numberStr = "近30期";
                        _this.number = 30;
                        _this.getData();
                    }
                },
                {
                    text: '近60期',
                    handler: function () {
                        _this.numberStr = "近60期";
                        _this.number = 60;
                        _this.getData();
                    }
                },
                {
                    text: '近90期',
                    handler: function () {
                        _this.numberStr = "近90期";
                        _this.number = 90;
                        _this.getData();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Select5Component.prototype, "setLotteryCode", null);
    Select5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select5',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\select5\select5.html"*/'<scroll-bar [setButtonArray]="navBar" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n\n\n<div class="point" *ngIf="navBarIndex == 3">\n\n  <div class="item"\n\n       *ngFor="let item of navBar[navBarIndex].item;let i=index;"\n\n       [ngClass]="{\'select\':item.select}"\n\n       (click)="selectSubBarAction(i)">\n\n    {{item.name}}\n\n  </div>\n\n</div>\n\n\n\n<div class="select">\n\n  <div class="down" (click)="selectBarIndex()"  *ngIf="navBarIndex == 0 || navBarIndex == 0">{{indexBarStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="down" (click)="selectNumberAction()">{{numberStr}} <ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="tj">查看数据统计</div>\n\n  <div style="clear: both"></div>\n\n</div>\n\n\n\n\n\n<!--基本走势-->\n\n\n\n<div *ngIf="navBarIndex == 0">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>号码</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n      <td>11</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red">{{item.openNumber[indexBar]}}</td>\n\n      <td *ngFor="let num of item.trendArray">\n\n        <span [ngClass]="{\'zhong\':num>0}">{{num | custompipe : \'\'}}</span>\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td>数据统计</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>7</td>\n\n      <td>8</td>\n\n      <td>9</td>\n\n      <td>10</td>\n\n      <td>11</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues">\n\n        {{item}}\n\n      </td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--定位走势-->\n\n<div *ngIf="navBarIndex == 1">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td rowspan="2">期号</td>\n\n      <td rowspan="2">号码</td>\n\n      <td colspan="3">大小</td>\n\n      <td colspan="3">单双</td>\n\n    </tr>\n\n    <tr>\n\n      <td>大</td>\n\n      <td>小</td>\n\n      <td>和</td>\n\n      <td>单</td>\n\n      <td>双</td>\n\n      <td>和</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg1"></svg>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg2"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td style="color: red">{{item.openNumber[indexBar]}}</td>\n\n      <td><span [ngClass]="{\'zhong0\':item.trendArray[11]>0}">{{item.trendArray[11] | custompipe : \'big\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong0\':item.trendArray[12]>0}">{{item.trendArray[12] | custompipe : \'small\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong0\':item.trendArray[13]>0}">{{item.trendArray[13] | custompipe : \'with\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange0\':item.trendArray[14]>0}">{{item.trendArray[14] | custompipe : \'单\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange0\':item.trendArray[15]>0}">{{item.trendArray[15] | custompipe : \'双\'}}</span></td>\n\n      <td><span [ngClass]="{\'orange0\':item.trendArray[16]>0}">{{item.trendArray[16] | custompipe : \'和\'}}</span></td>\n\n\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td rowspan="2">数据统计</td>\n\n      <td colspan="3">大小</td>\n\n      <td colspan="3">单双</td>\n\n    </tr>\n\n    <tr>\n\n      <td>大</td>\n\n      <td>小</td>\n\n      <td>和</td>\n\n      <td>单</td>\n\n      <td>双</td>\n\n      <td>和</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[15]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount[16]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[15]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues[16]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[15]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum[16]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[11]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[12]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[13]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[14]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[15]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues[16]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<!--龙虎-->\n\n<div *ngIf="navBarIndex == 2" class="dragon">\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td width="30%">期号</td>\n\n      <td width="30%">开奖号码</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg3"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td class="numbers"><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n      <td><span [ngClass]="{\'zhong1\':item.trendArray[0]>=0}">龙</span></td>\n\n      <td><span [ngClass]="{\'zhong1\':item.trendArray[1]>=0}">虎</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource.analyseTable">\n\n    <thead>\n\n    <tr>\n\n      <td >数据统计</td>\n\n      <td>龙</td>\n\n      <td>虎</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[1]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[1]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[1]}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[0]}}</td>\n\n      <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[1]}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 0">\n\n\n\n  <table>\n\n    <thead>\n\n    <tr>\n\n      <td width="20%">期号</td>\n\n      <td>开奖号码</td>\n\n      <td>和值</td>\n\n      <td>和尾</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td class="numbers"><span *ngFor="let num of item.openNumber" style="color: red">{{num}}</span></td>\n\n      <td *ngFor="let value of item.array">{{value}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n<div *ngIf="navBarIndex == 3 && navBar[3].subIndex == 1">\n\n\n\n  <div class="left" style="width: 20%;float: left">\n\n    <table>\n\n      <thead>\n\n      <tr><td>期号</td></tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table>\n\n      <thead>\n\n      <tr><td>数据统计</td></tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr><td>出现总数</td></tr>\n\n      <tr><td>平均遗漏</td></tr>\n\n      <tr><td>最大连出</td></tr>\n\n      <tr><td>量大遗漏</td></tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div class="right" style="width: 80%;float: right;overflow: scroll;">\n\n\n\n    <table>\n\n      <thead>\n\n      <tr><td *ngFor="let num of numbers">{{num}}</td></tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td *ngFor="let num of item.trendArray">\n\n          <span [ngClass]="{\'zhong\':num > 0}">{{num | custompipe:\'\'}}</span>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table>\n\n      <thead>\n\n      <tr><td *ngFor="let num of numbers">{{num}}</td></tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource.analyseTable[0].appearCount">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues">{{item}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div style="clear: none;"></div>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\select5\select5.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */]])
    ], Select5Component);
    return Select5Component;
}());

//# sourceMappingURL=select5.js.map

/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SlowComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SlowComponent = /** @class */ (function () {
    function SlowComponent() {
        console.log('Hello SlowComponent Component');
        this.text = 'Hello World';
    }
    SlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slow',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\slow\slow.html"*/'<!-- Generated template for the SlowComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\slow\slow.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SlowComponent);
    return SlowComponent;
}());

//# sourceMappingURL=slow.js.map

/***/ }),

/***/ 1207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return K3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var K3Component = /** @class */ (function () {
    function K3Component(actionSheet, http) {
        this.actionSheet = actionSheet;
        this.http = http;
        this.indexBar = 0; //第几球索引
        this.navBar = []; //时时彩导航
        this.navBarIndex = 0; //时时彩导航索引
        this.number = 30;
        this.numberStr = "近30期";
        this.indexBarStr = "第一球";
        this.navBar = [
            {
                select: true,
                type: 0,
                name: '基本走势',
                item: [],
                url: '/api/lotteryOpenNumber/getLotteryBaseTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 1,
                name: '大小走势',
                subIndex: 0,
                item: [{
                        select: true,
                        subType: 0,
                        name: '大小个数',
                    }, {
                        select: false,
                        subType: 0,
                        name: '大小比',
                    }
                ],
                url: '/api/lotteryOpenNumber/getBigSmallTrendAboutKs',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 2,
                name: '定位走势',
                subIndex: 0,
                item: [],
                url: '/api/lotteryOpenNumber/getElevnFiveOrFastThreePositionTrend',
                dataSource: [],
                currentData: []
            }, {
                select: false,
                type: 3,
                name: '奇偶走势',
                subIndex: 0,
                item: [{
                        select: true,
                        subType: 0,
                        name: '奇偶个数',
                    }, {
                        select: false,
                        subType: 0,
                        name: '奇偶比',
                    }],
                url: '/api/lotteryOpenNumber/getOddEvenTrendAboutKs',
                dataSource: [],
                currnetData: []
            }, {
                select: false,
                type: 4,
                name: '和值走势',
                subIndex: 0,
                item: [{
                        select: true,
                        subType: 0,
                        name: '和值走势',
                    }, {
                        select: false,
                        subType: 0,
                        name: '和值形态',
                    }],
                url: '/api/lotteryOpenNumber/getLotterySumTrend',
                dataSource: [],
                currentData: []
            }
        ];
    }
    Object.defineProperty(K3Component.prototype, "setLotteryCode", {
        set: function (code) {
            this.lotteryCode = code;
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    K3Component.prototype.ngAfterViewChecked = function () {
        if (this.navBarIndex == 2) {
            var svg = document.getElementById('svg');
            var node = document.getElementsByClassName('zhong');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
        if (this.navBarIndex == 4) {
            var svg = document.getElementById('svg1');
            var node = document.getElementsByClassName('zhong2');
            svg.innerHTML = this.createLine(node, '#00baff');
        }
    };
    K3Component.prototype.createLine = function (bars, lineColor) {
        var svgStr = "";
        if (bars.length <= 0)
            return;
        for (var i = 0; i < this.number - 1; i++) {
            var td = bars[i].parentNode;
            var top_1 = td.offsetTop;
            var left = td.offsetLeft;
            var width = td.offsetWidth / 2;
            var height = td.offsetHeight / 2;
            var tdX = left + width;
            var tdY = top_1 + height;
            var td1 = bars[i + 1].parentNode;
            var top1 = td1.offsetTop;
            var left1 = td1.offsetLeft;
            var width1 = td1.offsetWidth / 2;
            var height1 = td1.offsetHeight / 2;
            var td1X = left1 + width1;
            var td1Y = top1 + height1;
            svgStr += "<line style='stroke:" + lineColor + "' x1='" + tdX + "' y1='" + tdY + "' x2='" + td1X + "' y2='" + td1Y + "'/>";
        }
        return svgStr;
    };
    K3Component.prototype.getData = function () {
        var url = this.navBar[this.navBarIndex].url;
        var self = this;
        var navBarIndex = self.navBarIndex;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode, number: this.number }, function (data, err) {
            if (!err) {
                if (navBarIndex == 0) {
                    data[0].trendList = data[0].trendList.reverse();
                    for (var j = 0; j < data[0].trendList.length; j++) {
                        var item_1 = data[0].trendList[j];
                        item_1.openNumber = item_1.openNumber.split(',');
                        item_1.preIssue = item_1.preIssue.substring(item_1.preIssue.length - 4, item_1.preIssue.length);
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[self.indexBar].trendList;
                }
                else if (navBarIndex == 1) {
                    data[0].bigSmallList = data[0].bigSmallList.reverse();
                    data[0].bigSmallRatioList = data[0].bigSmallRatioList.reverse();
                    for (var i = 0; i < data[0].bigSmallList.length; i++) {
                        var item_2 = data[0].bigSmallList[i];
                        item_2.openNumber = item_2.openNumber.split(',');
                        item_2.preIssue = item_2.preIssue.substring(item_2.preIssue.length - 4, item_2.preIssue.length);
                        var item1 = data[0].bigSmallRatioList[i];
                        item1.openNumber = item1.openNumber.split(',');
                        item1.preIssue = item1.preIssue.substring(item_2.preIssue.length - 4, item_2.preIssue.length);
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[0].bigSmallList;
                }
                else if (navBarIndex == 2) {
                    for (var i = 0; i < data.length; i++) {
                        var group = data[i];
                        group.trendList = group.trendList.reverse();
                        for (var j = 0; j < group.trendList.length; j++) {
                            var item = group.trendList[j];
                            item.openNumber = item.openNumber.split(',');
                            item.preIssue = item.preIssue.substring(item.preIssue.length - 4, item.preIssue.length);
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[self.indexBar].trendList;
                }
                else if (navBarIndex == 3) {
                    data[0].oddEvenList = data[0].oddEvenList.reverse();
                    data[0].oddEvenRatioArray = data[0].oddEvenRatioArray.reverse();
                    for (var i = 0; i < data[0].oddEvenList.length; i++) {
                        var item_3 = data[0].oddEvenList[i];
                        item_3.openNumber = item_3.openNumber.split(',');
                        item_3.preIssue = item_3.preIssue.substring(item_3.preIssue.length - 4, item_3.preIssue.length);
                        var item1 = data[0].oddEvenRatioArray[i];
                        item1.openNumber = item1.openNumber.split(',');
                        item1.preIssue = item1.preIssue.substring(item_3.preIssue.length - 4, item_3.preIssue.length);
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data[0].oddEvenList;
                }
                else if (navBarIndex == 4) {
                    data.trendList = data.trendList.reverse();
                    for (var i = 0; i < data.trendList.length; i++) {
                        var item_4 = data.trendList[i];
                        item_4.openNumber = item_4.openNumber.split(',');
                        item_4.preIssue = item_4.preIssue.substring(item_4.preIssue.length - 4, item_4.preIssue.length);
                        item_4.with = 0;
                        for (var j = 0; j < item_4.openNumber.length; j++) {
                            var number = parseInt(item_4.openNumber[j]);
                            item_4.with += number;
                        }
                    }
                    self.navBar[navBarIndex].dataSource = data;
                    self.navBar[navBarIndex].currentData = data.trendList;
                }
            }
        });
    };
    K3Component.prototype.onSelectItem = function (index) {
        if (this.navBarIndex == index)
            return;
        this.navBarIndex = index;
        this.indexBar = 0;
        this.indexBarStr = "第一球";
        this.getData();
    };
    K3Component.prototype.selectSubBarAction = function (index) {
        for (var i = 0; i < this.navBar[this.navBarIndex].item.length; i++) {
            this.navBar[this.navBarIndex].item[i].select = false;
        }
        this.navBar[this.navBarIndex].item[index].select = true;
        this.navBar[this.navBarIndex].subIndex = index;
        if (this.navBarIndex == 1) {
            if (index == 0) {
                this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[0].bigSmallList;
            }
            else if (index == 1) {
                this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[0].bigSmallRatioList;
            }
        }
        else if (this.navBarIndex == 3) {
            if (index == 0) {
                this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[0].oddEvenList;
            }
            else if (index == 1) {
                this.navBar[this.navBarIndex].currentData = this.navBar[this.navBarIndex].dataSource[0].oddEvenRatioArray;
            }
        }
    };
    //当前第几球
    K3Component.prototype.selectBarIndex = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '第一球',
                    handler: function () {
                        _this.indexBarStr = "第一球";
                        _this.indexBar = 0;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[0].trendList;
                    }
                },
                {
                    text: '第二球',
                    handler: function () {
                        _this.indexBarStr = "第二球";
                        _this.indexBar = 1;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[1].trendList;
                    }
                },
                {
                    text: '第三球',
                    handler: function () {
                        _this.indexBarStr = "第三球";
                        _this.indexBar = 2;
                        _this.navBar[_this.navBarIndex].currentData = _this.navBar[_this.navBarIndex].dataSource[2].trendList;
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    K3Component.prototype.selectNumberAction = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '近30期',
                    handler: function () {
                        _this.numberStr = "近30期";
                        _this.number = 30;
                        _this.getData();
                    }
                },
                {
                    text: '近60期',
                    handler: function () {
                        _this.numberStr = "近60期";
                        _this.number = 60;
                        _this.getData();
                    }
                },
                {
                    text: '近90期',
                    handler: function () {
                        _this.numberStr = "近90期";
                        _this.number = 90;
                        _this.getData();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], K3Component.prototype, "setLotteryCode", null);
    K3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'k3',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\k3\k3.html"*/'<scroll-bar [setButtonArray]="navBar" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n\n\n<div class="point" *ngIf="navBarIndex == 1 || navBarIndex == 3 || navBarIndex == 4">\n\n  <div class="item"\n\n       *ngFor="let item of navBar[navBarIndex].item;let i=index;"\n\n       [ngClass]="{\'select\':item.select}"\n\n       (click)="selectSubBarAction(i)">\n\n    {{item.name}}\n\n  </div>\n\n</div>\n\n\n\n<div class="select">\n\n  <div class="down" (click)="selectBarIndex()"  *ngIf="navBarIndex == 2">{{indexBarStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="down" (click)="selectNumberAction()">{{numberStr}} <ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="tj">查看数据统计</div>\n\n  <div style="clear: both"></div>\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 0">\n\n  <!--这里真的把我写蒙逼了-->\n\n  <table class="ks">\n\n    <thead>\n\n    <tr>\n\n      <td rowspan="2">期号</td>\n\n      <td rowspan="2">开奖<br>号码</td>\n\n      <td colspan="6">开奖号码分布</td>\n\n      <td colspan="3">号码形态</td>\n\n    </tr>\n\n    <tr>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>豹子</td>\n\n      <td>三不同</td>\n\n      <td>对子</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n      <td>{{item.preIssue}}</td>\n\n      <td class="numbers"><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[0]>0}">{{item.trendArray[0] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[0]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[0]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[1]>0}">{{item.trendArray[1] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[1]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0 ">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[1]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[2]>0}">{{item.trendArray[2] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[2]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[2]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[3]>0}">{{item.trendArray[3] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[3]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0 ">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[3]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[4]>0}">{{item.trendArray[4] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[4]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0 ">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[4]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td>\n\n        <span [ngClass]="{\'zhong\':item.trendArray[5]>0}">{{item.trendArray[5] | custompipe : \'\'}}</span>\n\n        <div class="number-count" *ngIf="item.trendArray[6]>0 && item.trendArray[5]>0"><span>3</span></div>\n\n        <div class="number-count" *ngIf="item.trendArray[8]>0">\n\n          <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == item.trendArray[5]+\'\'">2</span>\n\n        </div>\n\n      </td>\n\n      <td [ngClass]="{\'baozi\':item.trendArray[6]>0}">{{item.trendArray[6] | custompipe : \'baozi\'}}</td>\n\n      <td [ngClass]="{\'sbt\':item.trendArray[7]>0}">{{item.trendArray[7] | custompipe : \'sbt\'}}</td>\n\n      <td [ngClass]="{\'duizi\':item.trendArray[8]>0}">{{item.trendArray[8] | custompipe : \'duizi\'}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[0]">\n\n    <thead>\n\n    <tr>\n\n      <td rowspan="2">数据统计</td>\n\n      <td colspan="6">开奖号码分布</td>\n\n      <td colspan="3">号码形态</td>\n\n    </tr>\n\n    <tr>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>豹子</td>\n\n      <td>三不同</td>\n\n      <td>对子</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable[0].appearCount">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable[0].averageMissingValues">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连出</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable[0].maxContinueNum">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable[0].maxMissingValues">{{item}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 1">\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 0">\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">开奖<br>号码</td>\n\n        <td colspan="6">开奖号码分布</td>\n\n        <td colspan="4">大数个数</td>\n\n        <td colspan="4">小数个数</td>\n\n      </tr>\n\n      <tr>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n        <td *ngFor="let num of item.bigSmallArray;let i=index" [ngClass]="{\'kj-number\':i<6||i>9}">\n\n          <span [ngClass]="{\'zhong\':num > 0 && i<6,\'zhong1\':i>10 && num > 0,\'orange\':i>5 && i<10 && num > 0}">{{num | custompipe : \'\'}}</span>\n\n          <div class="number-count" *ngIf="num > 0 && i<6">\n\n            <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == (num+\'\')">2</span>\n\n          </div>\n\n          <div class="number-count" *ngIf="num > 0 && i<6">\n\n            <span *ngIf="item.openNumber[0] == item.openNumber[1] && item.openNumber[2] == item.openNumber[1] && item.openNumber[2] == item.openNumber[0] && item.openNumber[1] == (num+\'\')">3</span>\n\n          </div>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[0]">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="6">开奖号码分布</td>\n\n        <td colspan="4">大数个数</td>\n\n        <td colspan="4">小数个数</td>\n\n      </tr>\n\n      <tr>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].appearCount">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].averageMissingValues">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连出</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].maxContinueNum">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].maxMissingValues">{{item}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 1">\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">开奖<br>号码</td>\n\n        <td colspan="2">百位</td>\n\n        <td colspan="2">十位</td>\n\n        <td colspan="2">个位</td>\n\n        <td colspan="4">大小比</td>\n\n      </tr>\n\n      <tr>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>3:0</td>\n\n        <td>2:1</td>\n\n        <td>1:2</td>\n\n        <td>0:3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n        <td [ngClass]="{\'zhong_bg\':item.bigSmallRatioArray[0] > 0}">{{item.bigSmallRatioArray[0] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.bigSmallRatioArray[1] > 0}">{{item.bigSmallRatioArray[1] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.bigSmallRatioArray[2] > 0}">{{item.bigSmallRatioArray[2] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.bigSmallRatioArray[3] > 0}">{{item.bigSmallRatioArray[3] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.bigSmallRatioArray[4] > 0}">{{item.bigSmallRatioArray[4] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.bigSmallRatioArray[5] > 0}">{{item.bigSmallRatioArray[5] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.bigSmallRatioArray[6] > 0}">{{item.bigSmallRatioArray[6] | custompipe : \'3:0\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.bigSmallRatioArray[7] > 0}">{{item.bigSmallRatioArray[7] | custompipe : \'2:1\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.bigSmallRatioArray[8] > 0}">{{item.bigSmallRatioArray[8] | custompipe : \'1:2\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.bigSmallRatioArray[9] > 0}">{{item.bigSmallRatioArray[9] | custompipe : \'0:3\'}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[0]">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="2">百位</td>\n\n        <td colspan="2">十位</td>\n\n        <td colspan="2">个位</td>\n\n        <td colspan="4">大小比</td>\n\n      </tr>\n\n      <tr>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>3:0</td>\n\n        <td>2:1</td>\n\n        <td>1:2</td>\n\n        <td>0:3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].appearCount">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].averageMissingValues">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连出</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].maxContinueNum">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].maxMissingValues">{{item}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 2">\n\n  <table style="background: #fdf7ed">\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>开奖号</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>大</td>\n\n      <td>小</td>\n\n      <td>单</td>\n\n      <td>双</td>\n\n    </tr>\n\n    </thead>\n\n    <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg"></svg>\n\n    <tbody>\n\n    <tr *ngFor="let item of navBar[2].currentData">\n\n      <td style="background: white">{{item.preIssue}}</td>\n\n      <td style="background: white" class="numbers"><span *ngFor="let num of item.openNumber;let i=index;" [ngClass]="{\'currentBar\':i == indexBar}">{{num}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[0] > 0}">{{item.trendArray[0] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[1] > 0}">{{item.trendArray[1] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[2] > 0}">{{item.trendArray[2] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[3] > 0}">{{item.trendArray[3] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[4] > 0}">{{item.trendArray[4] | custompipe:\'\'}}</span></td>\n\n      <td><span [ngClass]="{\'zhong\':item.trendArray[5] > 0}">{{item.trendArray[5] | custompipe:\'\'}}</span></td>\n\n      <td style="background: white"><span [ngClass]="{\'zhong1\':item.trendArray[6] > 0}">{{item.trendArray[6] | custompipe:\'big\'}}</span></td>\n\n      <td style="background: white"><span [ngClass]="{\'zhong1\':item.trendArray[7] > 0}">{{item.trendArray[7] | custompipe:\'small\'}}</span></td>\n\n      <td style="background: white"><span [ngClass]="{\'orange\':item.trendArray[8] > 0}">{{item.trendArray[8] | custompipe:\'单\'}}</span></td>\n\n      <td style="background: white"><span [ngClass]="{\'orange\':item.trendArray[9] > 0}">{{item.trendArray[9] | custompipe:\'双\'}}</span></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n  <table *ngIf="navBar[navBarIndex].dataSource[indexBar]">\n\n    <thead>\n\n    <tr>\n\n      <td>期号</td>\n\n      <td>1</td>\n\n      <td>2</td>\n\n      <td>3</td>\n\n      <td>4</td>\n\n      <td>5</td>\n\n      <td>6</td>\n\n      <td>大</td>\n\n      <td>小</td>\n\n      <td>单</td>\n\n      <td>双</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr>\n\n      <td>总次数</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].appearCount">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>平均遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].averageMissingValues">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大连击</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxContinueNum">{{item}}</td>\n\n    </tr>\n\n    <tr>\n\n      <td>最大遗漏</td>\n\n      <td *ngFor="let item of navBar[navBarIndex].dataSource[indexBar].analyseTable[0].maxMissingValues">{{item}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 3">\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 0">\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">开奖<br>号码</td>\n\n        <td colspan="6">开奖号码分布</td>\n\n        <td colspan="4">奇数个数</td>\n\n        <td colspan="4">偶数个数</td>\n\n      </tr>\n\n      <tr>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n        <td *ngFor="let num of item.oddEvenArray;let i=index" [ngClass]="{\'kj-number\':i<6||i>9}">\n\n          <span [ngClass]="{\'zhong\':num > 0 && i<6,\'zhong1\':i>10 && num > 0,\'orange\':i>5 && i<10 && num > 0}">{{num | custompipe : \'\'}}</span>\n\n          <div class="number-count" *ngIf="num > 0 && i<6">\n\n            <span *ngIf="(item.openNumber[0] == item.openNumber[1] || item.openNumber[2] == item.openNumber[1]) && item.openNumber[1] == (num+\'\')">2</span>\n\n          </div>\n\n          <div class="number-count" *ngIf="num > 0 && i<6">\n\n            <span *ngIf="item.openNumber[0] == item.openNumber[1] && item.openNumber[2] == item.openNumber[1] && item.openNumber[2] == item.openNumber[0] && item.openNumber[1] == (num+\'\')">3</span>\n\n          </div>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[0]">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="6">开奖号码分布</td>\n\n        <td colspan="4">奇数个数</td>\n\n        <td colspan="4">偶数个数</td>\n\n      </tr>\n\n      <tr>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n        <td>0</td>\n\n        <td>1</td>\n\n        <td>2</td>\n\n        <td>3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].appearCount">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].averageMissingValues">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连出</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].maxContinueNum">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable1[0].maxMissingValues">{{item}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 1">\n\n\n\n    <table *ngIf="navBar[navBarIndex].currentData">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">期号</td>\n\n        <td rowspan="2">开奖<br>号码</td>\n\n        <td colspan="2">百位</td>\n\n        <td colspan="2">十位</td>\n\n        <td colspan="2">个位</td>\n\n        <td colspan="4">大小比</td>\n\n      </tr>\n\n      <tr>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>3:0</td>\n\n        <td>2:1</td>\n\n        <td>1:2</td>\n\n        <td>0:3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n        <td [ngClass]="{\'zhong_bg\':item.oddEvenRatioArray[0] > 0}">{{item.oddEvenRatioArray[0] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.oddEvenRatioArray[1] > 0}">{{item.oddEvenRatioArray[1] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.oddEvenRatioArray[2] > 0}">{{item.oddEvenRatioArray[2] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.oddEvenRatioArray[3] > 0}">{{item.oddEvenRatioArray[3] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.oddEvenRatioArray[4] > 0}">{{item.oddEvenRatioArray[4] | custompipe : \'big\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.oddEvenRatioArray[5] > 0}">{{item.oddEvenRatioArray[5] | custompipe : \'small\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.oddEvenRatioArray[6] > 0}">{{item.oddEvenRatioArray[6] | custompipe : \'3:0\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.oddEvenRatioArray[7] > 0}">{{item.oddEvenRatioArray[7] | custompipe : \'2:1\'}}</td>\n\n        <td [ngClass]="{\'zhong_bg\':item.oddEvenRatioArray[8] > 0}">{{item.oddEvenRatioArray[8] | custompipe : \'1:2\'}}</td>\n\n        <td [ngClass]="{\'orange_bg\':item.oddEvenRatioArray[9] > 0}">{{item.oddEvenRatioArray[9] | custompipe : \'0:3\'}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource[0]">\n\n      <thead>\n\n      <tr>\n\n        <td rowspan="2">数据统计</td>\n\n        <td colspan="2">百位</td>\n\n        <td colspan="2">十位</td>\n\n        <td colspan="2">个位</td>\n\n        <td colspan="4">大小比</td>\n\n      </tr>\n\n      <tr>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>3:0</td>\n\n        <td>2:1</td>\n\n        <td>1:2</td>\n\n        <td>0:3</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].appearCount">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].averageMissingValues">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连出</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].maxContinueNum">{{item}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td *ngFor="let item of navBar[navBarIndex].dataSource[0].analyseTable2[0].maxMissingValues">{{item}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</div>\n\n\n\n<div *ngIf="navBarIndex == 4">\n\n\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 0">\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td>期号</td>\n\n        <td>和</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>7</td>\n\n        <td>8</td>\n\n        <td>9</td>\n\n        <td>10</td>\n\n        <td>11</td>\n\n        <td>12</td>\n\n        <td>13</td>\n\n        <td>14</td>\n\n        <td>15</td>\n\n        <td>16</td>\n\n        <td>17</td>\n\n        <td>18</td>\n\n      </tr>\n\n      </thead>\n\n      <svg width="300" height="100" version="1.1" style="position: absolute;top: 0;width: 100%;height: 100%;" id="svg1"></svg>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td style="color: red">{{item.with}}</td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[0] > 0}">{{item.trendArray[0] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[1] > 0}">{{item.trendArray[1] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[2] > 0}">{{item.trendArray[2] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[3] > 0}">{{item.trendArray[3] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[4] > 0}">{{item.trendArray[4] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[5] > 0}">{{item.trendArray[5] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[6] > 0}">{{item.trendArray[6] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[7] > 0}">{{item.trendArray[7] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[8] > 0}">{{item.trendArray[8] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[9] > 0}">{{item.trendArray[9] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[10] > 0}">{{item.trendArray[10] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[11] > 0}">{{item.trendArray[11] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[12] > 0}">{{item.trendArray[12] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[13] > 0}">{{item.trendArray[13] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[14] > 0}">{{item.trendArray[14] | custompipe:\'\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[15] > 0}">{{item.trendArray[14] | custompipe:\'\'}}</span></td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource.analyseTable">\n\n      <thead>\n\n      <tr>\n\n        <td>数据统计</td>\n\n        <td>3</td>\n\n        <td>4</td>\n\n        <td>5</td>\n\n        <td>6</td>\n\n        <td>7</td>\n\n        <td>8</td>\n\n        <td>9</td>\n\n        <td>10</td>\n\n        <td>11</td>\n\n        <td>12</td>\n\n        <td>13</td>\n\n        <td>14</td>\n\n        <td>15</td>\n\n        <td>16</td>\n\n        <td>17</td>\n\n        <td>18</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[7]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[15]}}</td>\n\n\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[7]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[7]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[15]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[0]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[1]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[2]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[3]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[4]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[5]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[6]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[7]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[8]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[9]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[10]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[11]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[12]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[13]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[14]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[15]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <div *ngIf="navBar[navBarIndex].subIndex == 1">\n\n\n\n    <table>\n\n      <thead>\n\n      <tr>\n\n        <td>期号</td>\n\n        <td style="width: 20%">开奖号码</td>\n\n        <td>和</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>单</td>\n\n        <td>双</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr *ngFor="let item of navBar[navBarIndex].currentData">\n\n        <td>{{item.preIssue}}</td>\n\n        <td class="numbers"><span *ngFor="let num of item.openNumber">{{num}}</span></td>\n\n        <td style="color: red">{{item.with}}</td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[16] > 0}">{{item.trendArray[16] | custompipe:\'big\'}}</span></td>\n\n        <td><span [ngClass]="{\'zhong2\':item.trendArray[17] > 0}">{{item.trendArray[17] | custompipe:\'small\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange\':item.trendArray[18] > 0}">{{item.trendArray[18] | custompipe:\'单\'}}</span></td>\n\n        <td><span [ngClass]="{\'orange\':item.trendArray[19] > 0}">{{item.trendArray[19] | custompipe:\'双\'}}</span></td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n    <table *ngIf="navBar[navBarIndex].dataSource.analyseTable">\n\n      <thead>\n\n      <tr>\n\n        <td width="20%">数据统计</td>\n\n        <td>大</td>\n\n        <td>小</td>\n\n        <td>单</td>\n\n        <td>双</td>\n\n      </tr>\n\n      </thead>\n\n      <tbody>\n\n      <tr>\n\n        <td>总次数</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].appearCount[19]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>平均遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].averageMissingValues[19]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大连击</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxContinueNum[19]}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td>最大遗漏</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[16]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[17]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[18]}}</td>\n\n        <td>{{navBar[navBarIndex].dataSource.analyseTable[0].maxMissingValues[19]}}</td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n</div>'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\k3\k3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */]])
    ], K3Component);
    return K3Component;
}());

//# sourceMappingURL=k3.js.map

/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustompipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustompipePipe = /** @class */ (function () {
    function CustompipePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CustompipePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var number = parseInt(value);
        if (args[0] == '')
            return number < 0 ? (number * -1) : number;
        if (number >= 0) {
            if (args[0] == 'even')
                return "偶";
            if (args[0] == 'reliance')
                return "奇";
            if (args[0] == 'big')
                return "大";
            if (args[0] == 'small')
                return "小";
            if (args[0] == 'with')
                return "和";
            if (args[0] == 'quality')
                return "质";
            if (args[0] == '0')
                return "0";
            if (args[0] == '1')
                return "1";
            if (args[0] == '2')
                return "2";
            if (args[0] == '3:0')
                return "3:0";
            if (args[0] == '2:1')
                return "2:1";
            if (args[0] == '1:2')
                return "1:2";
            if (args[0] == '0:3')
                return "0:3";
            if (args[0] == 'shen')
                return "升";
            if (args[0] == 'pin')
                return "平";
            if (args[0] == 'bao')
                return "豹";
            if (args[0] == 'sun')
                return "顺";
            if (args[0] == 'dui')
                return "对";
            if (args[0] == 'ban')
                return "半";
            if (args[0] == 'za')
                return "杂";
            if (args[0] == 'zhus')
                return "三";
            if (args[0] == 'zhul')
                return "六";
            if (args[0] == '龙')
                return "龙";
            if (args[0] == '虎')
                return "虎";
            if (args[0] == '和')
                return "和";
            if (args[0] == '单')
                return "单";
            if (args[0] == '双')
                return "双";
            if (args[0] == 'baozi')
                return "豹子";
            if (args[0] == 'sbt')
                return "三不同";
            if (args[0] == 'duizi')
                return "对子";
        }
        return number * -1;
    };
    CustompipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'custompipe', })
    ], CustompipePipe);
    return CustompipePipe;
}());

//# sourceMappingURL=custompipe.js.map

/***/ }),

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransnumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransnumberPipe = /** @class */ (function () {
    function TransnumberPipe() {
    }
    TransnumberPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var numberChart = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
        if (value <= 0) {
            return "正在开奖";
        }
        else if (value <= 10 && value > 0) {
            return numberChart[value - 1] + '分钟开奖';
        }
        else if (value > 10 && value < 60) {
            var index = value.toString()[0];
            var index1 = value.toString()[1];
            if (index1 == '0') {
                return numberChart[index] + '十' + '分钟开奖';
            }
            else {
                if (index == '1') {
                    return '十' + numberChart[index1] + '分钟开奖';
                }
                else
                    return numberChart[index] + '十' + numberChart[index1] + '分钟开奖';
            }
        }
        else if (value >= 60 && value < 60 * 24) {
            //return value/
        }
        else {
            return value;
        }
    };
    TransnumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'transnumber',
        })
    ], TransnumberPipe);
    return TransnumberPipe;
}());

//# sourceMappingURL=transnumber.js.map

/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollBarComponent = /** @class */ (function () {
    function ScrollBarComponent() {
        this.buttons = [];
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(ScrollBarComponent.prototype, "setButtonArray", {
        set: function (buttons) {
            this.buttons = buttons;
        },
        enumerable: true,
        configurable: true
    });
    ScrollBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var width = window.innerWidth;
        this.barItems.forEach(function (ele, index, array) {
            var item = ele.nativeElement;
            var lastItem = _this.barItems.last.nativeElement;
            var itemMaxX = lastItem.offsetLeft + lastItem.offsetWidth;
            if (itemMaxX < width) {
                var itemWidth = (width - 10) / _this.barItems.length;
                if (item.offsetWidth < itemWidth) {
                    item.style.width = itemWidth + 'px';
                }
            }
        });
        var array = this.barItems.toArray();
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].select == true) {
                this.indicator.nativeElement.style.left = array[i].nativeElement.offsetLeft + 'px';
                this.indicator.nativeElement.style.width = array[i].nativeElement.offsetWidth + 'px';
            }
        }
    };
    ScrollBarComponent.prototype.changeNav = function (index) {
        for (var i = 0; i < this.buttons.length; i++) {
            var item = this.buttons[i];
            item.select = false;
        }
        this.buttons[index].select = true;
        var array = this.barItems.toArray();
        this.indicator.nativeElement.style.left = array[index].nativeElement.offsetLeft + 'px';
        this.indicator.nativeElement.style.width = array[index].nativeElement.offsetWidth + 'px';
        this.selectItem.emit(index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('ScrollBarItem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], ScrollBarComponent.prototype, "barItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('indicator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ScrollBarComponent.prototype, "indicator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScrollBarComponent.prototype, "setButtonArray", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollBarComponent.prototype, "selectItem", void 0);
    ScrollBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'scroll-bar',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\scroll-bar\scroll-bar.html"*/'<div class="scroll-bar boxShow">\n\n  <div #ScrollBarItem class="scroll-bar-item" [ngClass]="{\'select\':item.select}" *ngFor="let item of buttons;let i=index;" (click)="changeNav(i)">\n\n    {{item.name}}\n\n  </div>\n\n  <div #indicator class="indicator"></div>\n\n</div>'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\scroll-bar\scroll-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ScrollBarComponent);
    return ScrollBarComponent;
}());

//# sourceMappingURL=scroll-bar.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanComponent = /** @class */ (function () {
    function PlanComponent(http) {
        this.http = http;
        this.buttons = [];
        this.expertList = [];
        this.articlesList = [];
        this.planDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.articlesDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getData();
    }
    PlanComponent.prototype.getData = function () {
        var url = "/api/forecastArticles/getForecastLotteryCategory";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    if (i == 0) {
                        self.getExpertList(res[i].lotteryCategoryCode);
                        self.buttons.push({ select: true, name: res[i].lotteryCategoryName, code: res[i].lotteryCategoryCode });
                    }
                    else {
                        self.buttons.push({ select: false, name: res[i].lotteryCategoryName, code: res[i].lotteryCategoryCode });
                    }
                }
            }
        });
    };
    PlanComponent.prototype.getExpertList = function (code) {
        var url = "/api/forecastArticles/getExpertList";
        var self = this;
        this.http.post(url, { lotteryCategoryCode: code }, function (res, err) {
            if (!err) {
                self.expertList = res;
            }
        });
        url = "/api/forecastArticles/getArticlesHot";
        this.http.post(url, { lotteryCategoryCode: code }, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].createTime = res[i].createTime.replace(/-/g, '/');
                }
                self.articlesList = res;
            }
        });
    };
    PlanComponent.prototype.onSelectItem = function (index) {
        var obj = this.buttons[index];
        this.getExpertList(obj.code);
    };
    PlanComponent.prototype.detailsAction = function (index) {
        this.articlesDetails.emit(this.articlesList[index]);
    };
    PlanComponent.prototype.expertDetailsAction = function (index) {
        this.planDetails.emit(this.expertList[index]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlanComponent.prototype, "planDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PlanComponent.prototype, "articlesDetails", void 0);
    PlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'plan',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\plan\plan.html"*/'<scroll-bar [setButtonArray]="buttons" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n<div class="box boxShow">\n\n  <div class="item" (click)="expertDetailsAction(i)" *ngFor="let item of expertList;let i=index;">\n\n    <div class="users boxShow">\n\n      <img src="{{item.expertImgUrl}}">\n\n      <p class="tag male" >{{item.expertLabelName}}</p>\n\n      <p class="name" >{{item.expertName}}</p>\n\n\n\n      <p class="pro">命中率:{{item.hitRate}}%</p>\n\n    </div>\n\n  </div>\n\n\n\n</div>\n\n\n\n<ion-list>\n\n  <div class="list-header">\n\n    <div class="header-content">\n\n      <img src="./assets/imgs/text.png">\n\n      <p>最火预测</p>\n\n    </div>\n\n  </div>\n\n  <ion-item (click)="detailsAction(i)" *ngFor="let item of articlesList;let i=index;">\n\n    <div class="hot-content">\n\n      <div class="title">\n\n        <img src="./assets/imgs/hot.png" *ngIf="item.isHot == 1">\n\n        <p>{{item.lotteryCategoryName}}:{{item.forecastArticleTitle}}</p>\n\n      </div>\n\n      <div class="other">\n\n        <!--<img src="./assets/imgs/watch.png">-->\n\n        <!--<p class="count">2028</p>-->\n\n        <img src="./assets/imgs/watch.png">\n\n        <p class="like">{{item.sees}}</p>\n\n        <p class="time">{{item.createTime | date:\'yyyy-MM-dd\'}}</p>\n\n      </div>\n\n    </div>\n\n  </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\plan\plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_httpService__["a" /* HttpService */]])
    ], PlanComponent);
    return PlanComponent;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticComponent = /** @class */ (function () {
    function StatisticComponent(http, actionSheet) {
        this.http = http;
        this.actionSheet = actionSheet;
        this.options = {
            title: {
                subtext: '重庆时时彩'
            },
            color: ['#ff153c'],
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['次数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            toolbox: {
                show: true,
                feature: {
                    // dataView: {readOnly: false},
                    magicType: { type: ['line', 'bar'] },
                }
            },
            series: [
                {
                    name: '次数',
                    type: 'bar',
                    barWidth: '60%',
                    data: [],
                    smooth: true,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: 'black',
                                    fontSize: 12
                                }
                            }
                        }
                    }
                }
            ]
        };
        this.sortDef = true;
        this.number = 30;
        this.numberStr = "近30期";
        this.pointStr = "定位冷热";
        this.tapUnit = [
            { code: '1', name: '万', select: true },
            { code: '2', name: '千', select: true },
            { code: '3', name: '百', select: true },
            { code: '4', name: '十', select: true },
            { code: '5', name: '个', select: true },
        ];
    }
    Object.defineProperty(StatisticComponent.prototype, "setLottery", {
        set: function (data) {
            this.lottery = data;
            this.options.title.subtext = data.title;
            if (data.type == 'ssc') {
                this.statisticalCode = 'sscdwlr';
            }
            else if (data.type == 'pk10') {
                this.statisticalCode = 'pk10dwlr';
            }
            else if (data.type == '11x5') {
                this.statisticalCode = '11x5dwlr';
            }
            else if (data.type == 'k3') {
                this.statisticalCode = "k3dwlr";
            }
            for (var i = 0; i < this.tapUnit.length; i++) {
                this.tapUnit[i].select = true;
            }
            this.number = 30;
            this.numberStr = "近30期";
            this.getData();
        },
        enumerable: true,
        configurable: true
    });
    StatisticComponent.prototype.ngAfterViewInit = function () {
        var ctx = this.container.nativeElement;
        this.chart = echarts.init(ctx);
    };
    StatisticComponent.prototype.getData = function () {
        var url = "/api/lotteryColdHot/getStatistics";
        var position = [];
        for (var i = 0; i < this.tapUnit.length; i++) {
            if (this.tapUnit[i].select) {
                position.push(this.tapUnit[i].code);
            }
        }
        var map = {
            parentLotteryCategoryCode: this.lottery.type,
            statisticalCode: this.statisticalCode,
            lotteryCategoryCode: this.lottery.code,
            periods: this.number,
            position: position.join(','),
            sort: this.sortDef ? 0 : 1
        };
        var self = this;
        this.http.post(url, map, function (res, err) {
            if (!err) {
                var array = [];
                if (res.length > 0) {
                    var data = res[0];
                    self.options.xAxis[0].data = [];
                    self.options.series[0].data = [];
                    for (var i = 0; i < data.list.length; i++) {
                        self.options.xAxis[0].data.push(data.list[i].number);
                        self.options.series[0].data.push(data.list[i].count);
                    }
                    self.chart.setOption(self.options);
                }
            }
        });
    };
    StatisticComponent.prototype.selectBarIndex = function () {
        var _this = this;
        var actionSheet = this.actionSheet.create({
            buttons: [
                {
                    text: '近30期',
                    handler: function () {
                        _this.numberStr = "近30期";
                        _this.number = 30;
                        _this.getData();
                    }
                },
                {
                    text: '近60期',
                    handler: function () {
                        _this.numberStr = "近60期";
                        _this.number = 60;
                        _this.getData();
                    }
                },
                {
                    text: '近90期',
                    handler: function () {
                        _this.numberStr = "近90期";
                        _this.number = 90;
                        _this.getData();
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    StatisticComponent.prototype.selectNumberAction = function () {
        var _this = this;
        var buttons = [];
        if (this.lottery.type == 'ssc') {
            buttons = [
                { text: '定位冷热', handler: function () { _this.statisticalCode = 'sscdwlr'; _this.pointStr = '定位冷热'; _this.getData(); } },
                { text: '定位大小', handler: function () { _this.statisticalCode = 'sscdwdx'; _this.pointStr = '定位大小'; _this.getData(); } },
                { text: '定位单双', handler: function () { _this.statisticalCode = 'sscdwds'; _this.pointStr = '定位单双'; _this.getData(); } },
                { text: '万个龙虎', handler: function () { _this.statisticalCode = 'ssclh'; _this.pointStr = '万个龙虎'; _this.getData(); } },
                { text: '万个和尾', handler: function () { _this.statisticalCode = 'sschw'; _this.pointStr = '万个和尾'; _this.getData(); } },
                { text: '取消', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }
            ];
        }
        else if (this.lottery.type == 'k3') {
            buttons = [
                { text: '定位冷热', handler: function () { _this.statisticalCode = 'k3dwlr'; _this.pointStr = '定位冷热'; _this.getData(); } },
                { text: '取消', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }
            ];
        }
        else if (this.lottery.type == '11x5') {
            buttons = [
                { text: '定位冷热', handler: function () { _this.statisticalCode = '11x5dwlr'; _this.pointStr = '定位冷热'; _this.getData(); } },
                { text: '取消', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }
            ];
        }
        else if (this.lottery.type == 'pk10') {
            buttons = [
                { text: '定位冷热', handler: function () { _this.statisticalCode = 'sscdwlr'; _this.pointStr = '定位冷热'; _this.getData(); } },
                { text: '定位大小', handler: function () { _this.statisticalCode = 'sscdwdx'; _this.pointStr = '定位大小'; _this.getData(); } },
                { text: '定位单双', handler: function () { _this.statisticalCode = 'sscdwds'; _this.pointStr = '定位单双'; _this.getData(); } },
                { text: '取消', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }
            ];
        }
        else {
            return;
        }
        var actionSheet = this.actionSheet.create({ buttons: buttons });
        actionSheet.present();
    };
    StatisticComponent.prototype.sortAction = function (index) {
        this.sortDef = index;
        this.getData();
    };
    StatisticComponent.prototype.unitAction = function (index) {
        this.tapUnit[index].select = !this.tapUnit[index].select;
        this.getData();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StatisticComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], StatisticComponent.prototype, "setLottery", null);
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'statistic',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\statistic\statistic.html"*/'\n\n<div class="select">\n\n  <div class="down" (click)="selectBarIndex()">{{numberStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="down" (click)="selectNumberAction()">{{pointStr}}<ion-icon name="arrow-down"></ion-icon></div>\n\n  <div class="buttons down">\n\n    <span [ngClass]="{\'active\':sortDef}" (click)="sortAction(true)">默认排序</span>\n\n    <span [ngClass]="{\'active\':!sortDef}" (click)="sortAction(false)">次数排序</span>\n\n  </div>\n\n  <div style="clear: both"></div>\n\n</div>\n\n<div class="tap-unit">\n\n  <div *ngFor="let item of tapUnit;let i = index;">\n\n    <span  [ngClass]="{\'active\':item.select}" (click)="unitAction(i)">{{item.name}}</span>\n\n  </div>\n\n</div>\n\n<div #chart style="height: 300px;width: 100%"></div>'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\statistic\statistic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], StatisticComponent);
    return StatisticComponent;
}());

//# sourceMappingURL=statistic.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(http) {
        this.http = http;
        this.buttons = [
            { select: true, name: '幸运飞艇', code: 'xyft' },
            { select: false, name: '重庆时时彩', code: 'cqssc' },
            { select: false, name: '北京PK10', code: 'bjpk10' },
            { select: false, name: '吉林快三', code: 'jlk3' },
        ];
        this.currentIndex = 0;
        this.plans = [];
        this.zqList = [];
        this.totalPaly = [];
        this.selectItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getData();
    }
    Object.defineProperty(PredictionComponent.prototype, "setCodeType", {
        set: function (code) {
            if (code.length > 0) {
                for (var i = 0; i < this.buttons.length; i++) {
                    if (this.buttons[i].code == code) {
                        this.buttons[i].select = true;
                        this.currentIndex = i;
                        this.getData();
                    }
                    else {
                        this.buttons[i].select = false;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PredictionComponent.prototype.getData = function () {
        var url = "/api/plan/getPlayList";
        var self = this;
        var map = { lotteryCategoryCode: this.buttons[this.currentIndex].code };
        this.http.post(url, map, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    if (i == 0) {
                        res[i].select = true;
                        self.getZQList(res[i].id);
                    }
                    else {
                        res[i].select = false;
                    }
                }
                self.plans = res;
            }
        });
        url = "/api/newforcastresult/getNewOneOpenNumber";
        this.http.post(url, map, function (res, err) {
            if (!err) {
                res.numbers = res.lotteryOpenNumber.split(',');
                res.lotteryOpenTime = res.lotteryOpenTime.replace(/-/g, '/');
                for (var j = 0; j < res.numbers.length; j++) {
                    res.numbers[j] = parseInt(res.numbers[j]);
                }
                self.newOpenNumber = res;
            }
        });
    };
    PredictionComponent.prototype.getZQList = function (id) {
        var url = "/api/plan/getzqList";
        var self = this;
        this.http.post(url, { playId: id }, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    if (i == 0) {
                        res[i].select = true;
                        self.getTotalPlay(res[i].id);
                    }
                    else {
                        res[i].select = false;
                    }
                }
                self.zqList = res;
            }
        });
    };
    PredictionComponent.prototype.getTotalPlay = function (id) {
        var url = "/api/plan/getTotalPlay";
        var self = this;
        this.http.post(url, { zqdmId: id }, function (res, err) {
            if (!err) {
                self.totalPaly = res.totalPlan;
            }
        });
    };
    PredictionComponent.prototype.onSelectItem = function (index) {
        this.currentIndex = index;
        this.getData();
    };
    PredictionComponent.prototype.selectZQAction = function (index) {
        for (var i = 0; i < this.zqList.length; i++) {
            this.zqList[i].select = false;
        }
        this.zqList[index].select = true;
        this.getTotalPlay(this.zqList[index].id);
    };
    PredictionComponent.prototype.selectPlanAction = function (index) {
        for (var i = 0; i < this.plans.length; i++) {
            this.plans[i].select = false;
        }
        this.plans[index].select = true;
        this.getZQList(this.plans[index].id);
    };
    PredictionComponent.prototype.selectItemAction = function (index) {
        var obj = this.totalPaly[index];
        this.selectItem.emit(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PredictionComponent.prototype, "setCodeType", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PredictionComponent.prototype, "selectItem", void 0);
    PredictionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'prediction',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\prediction\prediction.html"*/'<scroll-bar [setButtonArray]="buttons" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n\n\n<div class="planBox">\n\n  <div class="item" *ngFor="let item of plans;let i=index;">\n\n    <div [ngClass]="{\'active\':item.select}"\n\n          (click)="selectPlanAction(i)">{{item.playName}}</div>\n\n  </div>\n\n</div>\n\n<div class="openNumber" *ngIf="newOpenNumber">\n\n  <div class="info">\n\n    <p class="time">{{newOpenNumber.lotteryOpenTime | date:\'yyyy-MM-dd\'}} - 第{{newOpenNumber.lotteryPeriods}}开奖</p>\n\n  </div>\n\n  <div class="numbers" *ngIf="currentIndex == 1">\n\n    <p class="bar" *ngFor="let num of newOpenNumber.numbers">{{num}}</p>\n\n  </div>\n\n  <div class="numbers" *ngIf="currentIndex == 2 || currentIndex == 0">\n\n    <img src="./assets/gameIcon/pk{{num}}.png" *ngFor="let num of newOpenNumber.numbers"/>\n\n  </div>\n\n  <div class="numbers" *ngIf="currentIndex == 3">\n\n    <img src="./assets/gameIcon/ks{{num}}.png" *ngFor="let num of newOpenNumber.numbers"/>\n\n  </div>\n\n  <div class="tab-bar">\n\n    <div>\n\n      <span class="item"\n\n            *ngFor="let item of zqList;let i=index;"\n\n            [ngClass]="{\'active\':item.select}"\n\n            (click)="selectZQAction(i)">\n\n        {{item.zqdmName}}\n\n      </span>\n\n    </div>\n\n\n\n  </div>\n\n</div>\n\n<div class="forcast" *ngIf="totalPaly">\n\n  <table>\n\n    <tbody>\n\n    <tr *ngFor="let item of totalPaly;let i=index;" (click)="selectItemAction(i)">\n\n      <td width="15px;">{{i+1}}.</td>\n\n      <td>{{item.planName}}</td>\n\n      <td>连中{{item.continuePeriods}}期</td>\n\n      <td>准确率{{item.curr * 100 | number:\'0.1-1\'}}%</td>\n\n      <td>热度{{item.hotNumber}}</td>\n\n      <td width="30px;" *ngIf="item.status == 0"><ion-icon name="md-arrow-dropup" style="color: rgb(44,96,29)"></ion-icon></td>\n\n      <td width="30px;" *ngIf="item.status == 2">-</td>\n\n      <td width="30px;" *ngIf="item.status == 1"><ion-icon name="md-arrow-dropdown" style="color: red"></ion-icon></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\prediction\prediction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_httpService__["a" /* HttpService */]])
    ], PredictionComponent);
    return PredictionComponent;
}());

//# sourceMappingURL=prediction.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopimgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TopimgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TopimgComponent = /** @class */ (function () {
    function TopimgComponent() {
        console.log('Hello TopimgComponent Component');
        this.text = 'Hello World';
    }
    TopimgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topimg',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\topimg\topimg.html"*/'<div class="banner">\n  <img src="./assets/banner/banner.png">\n  <div class="kefu-online"></div>\n</div>'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\components\topimg\topimg.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TopimgComponent);
    return TopimgComponent;
}());

//# sourceMappingURL=topimg.js.map

/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.showLoading = true;
        this.lottery = navParams.get('data');
        console.log(this.lottery);
        this.getData();
    }
    HistoryPage.prototype.getData = function () {
        var url = "/api/lotteryOpenNumber/getNewestOpenNumberByLotteryCategory";
        var map = { lotteryCategoryCode: this.lottery.lotteryCategoryCode, number: 100 };
        var self = this;
        this.http.post(url, map, function (res, err) {
            self.showLoading = false;
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].numbers = res[i].lotteryOpenNumber.split(',');
                    for (var j = 0; j < res[i].numbers.length; j++) {
                        res[i].numbers[j] = parseInt(res[i].numbers[j]);
                    }
                }
                self.data = res;
                console.log(res);
            }
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\lottery\history.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{lottery.lotteryCategoryName}}</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-scroll scrollY="true" style="height: 100%;">\n\n        <loading [text]="\'加载中...\'" *ngIf="showLoading"></loading>\n\n        <div class="list">\n\n            <div class="item" *ngFor="let item of data">\n\n                <div class="info">\n\n                    <div class="other">\n\n                        <p class="num">第<span>{{item.lotteryPeriods}}</span>期</p>\n\n                        <p class="time">{{item.lotteryOpenTime}}</p>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="lottery.parentLotteryCategoryCode != \'pk10\' && lottery.parentLotteryCategoryCode != \'k3\'">\n\n                        <p *ngFor="let num of item.numbers" class="bar">\n\n                            {{num}}\n\n                        </p>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="lottery.parentLotteryCategoryCode == \'pk10\'">\n\n                        <img src="./assets/gameIcon/pk{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="lottery.parentLotteryCategoryCode == \'k3\'">\n\n                        <img src="./assets/gameIcon/ks{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </ion-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\lottery\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan_details_plan_details__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_details_articles_details__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanPage = /** @class */ (function () {
    function PlanPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PlanPage.prototype.articlesDetailsAction = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__articles_details_articles_details__["a" /* ArticlesDetailsPage */], { id: e.id });
    };
    PlanPage.prototype.planDetailsAction = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plan_details_plan_details__["a" /* PlanDetailsPage */], { data: e });
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plan',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\plan\plan.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>专家计划</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <plan (articlesDetails)="articlesDetailsAction($event)" (planDetails)="planDetailsAction($event)"></plan>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\plan\plan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpertPage = /** @class */ (function () {
    function ExpertPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExpertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expert',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\expert\expert.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>专家详情</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="user">\n\n\n\n    <div class="base">\n\n      <img src="./assets/imgs/defAvatar.jpeg"/>\n\n      <p class="name">专家名称</p>\n\n      <p>综合命中率：90%</p>\n\n    </div>\n\n    <div class="other">\n\n      <div class="key">专家简介：</div>\n\n      <div class="value">\n\n        彩票专业好好者，有时间就深入的细致研究，尤其喜欢专研福彩3D\n\n      </div>\n\n    </div>\n\n    <div class="other">\n\n      <div class="key">擅长彩种：</div>\n\n      <div class="value">\n\n        福彩3D,快3,福彩3D,快3,福彩3D,快3\n\n      </div>\n\n    </div>\n\n\n\n    <div class="other">\n\n      <div class="key">下期预测：</div>\n\n      <div class="value">\n\n        <p class="bar">1</p>\n\n        <p class="bar">2</p>\n\n        <p class="bar">3</p>\n\n        <p class="bar">4</p>\n\n        <p class="bar">5</p>\n\n        <p class="bar">6</p>\n\n        <p class="bar">7</p>\n\n        <p class="bar">8</p>\n\n      </div>\n\n      <div class="copy">复制</div>\n\n    </div>\n\n    <div class="like">\n\n      <img src="./assets/imgs/like.png">\n\n      <p>88999</p>\n\n    </div>\n\n  </div>\n\n  <ion-list>\n\n    <div class="list-header">\n\n      <div class="header-content">\n\n        <img src="./assets/imgs/text.png">\n\n        <p>最火预测</p>\n\n      </div>\n\n    </div>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/hot.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/featured.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/featured.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/featured.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/featured.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/featured.png">\n\n          <p>福彩3D:128期参数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐数分析及号号推荐</p>\n\n        </div>\n\n        <div class="other">\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="count">2028</p>\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">1245</p>\n\n          <p class="time">2019-01-12</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\expert\expert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ExpertPage);
    return ExpertPage;
}());

//# sourceMappingURL=expert.js.map

/***/ }),

/***/ 1218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotteryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {HistoryPage} from "./history";
var LotteryPage = /** @class */ (function () {
    function LotteryPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.showLoading = true;
        this.navs = [];
        this.getData();
    }
    LotteryPage.prototype.getData = function () {
        var url = "/api/lotteryCategory/getParentLotteryCategory";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                self.navs = [{
                        index: 0,
                        name: "全部彩种",
                        parentLotteryCategoryCode: "",
                        parentLotteryCategoryName: "全部彩种",
                        select: true,
                        data: []
                    }
                ];
                for (var i = 0; i < res.length; i++) {
                    var item = res[i];
                    item.index = i + 1;
                    item.select = false;
                    item.data = [];
                    item.name = res[i].parentLotteryCategoryName;
                    self.navs.push(item);
                }
                self.getLotteryOpenNumber('');
            }
        });
    };
    LotteryPage.prototype.getLotteryOpenNumber = function (code) {
        var url = "/api/lotteryOpenNumber/getDifferentLotteryCategoryNewestOpenNumber";
        var map = {
            parentLotteryCategoryCode: code,
            number: 30
        };
        var self = this;
        self.showLoading = true;
        this.http.post(url, map, function (res, err) {
            self.showLoading = false;
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].numbers = res[i].lotteryOpenNumber.split(',');
                    // res[i].lotteryOpenTime = res[i].lotteryOpenTime.replace(/-/g,'/');
                    for (var j = 0; j < res[i].numbers.length; j++) {
                        res[i].numbers[j] = parseInt(res[i].numbers[j]);
                    }
                }
                self.data = res;
                for (var i = 0; i < self.navs.length; i++) {
                    if (code == self.navs[i].parentLotteryCategoryCode) {
                        self.navs[i].data = res;
                    }
                }
            }
        });
    };
    LotteryPage.prototype.changeNav = function (index) {
        for (var i = 0; i < this.navs.length; i++) {
            var item_1 = this.navs[i];
            item_1.select = false;
        }
        this.navs[index].select = true;
        var item = this.navs[index];
        this.data = item.data;
        if (item.data.length > 0) {
            return;
        }
        else {
            this.getLotteryOpenNumber(item.parentLotteryCategoryCode);
        }
    };
    LotteryPage.prototype.detailsAction = function (index) {
        var obj = this.data[index];
        // this.navCtrl.push(HistoryPage,{data:obj});
    };
    LotteryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lottery',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\lottery\lottery.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>彩票开奖</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="nav boxShow">\n\n        <div class="item"\n\n             [ngClass]="{\'select\':item.select}"\n\n             *ngFor="let item of navs;let i=index;"\n\n             (click)="changeNav(i)">\n\n            {{item.parentLotteryCategoryName}}\n\n        </div>\n\n    </div>\n\n    <ion-scroll scrollY="true" style="height: 100%;">\n\n        <loading [text]="\'加载中...\'" *ngIf="showLoading"></loading>\n\n        <div class="list">\n\n            <div class="item" *ngFor="let item of data;let i = index;" (click)="detailsAction(i)">\n\n                <img src="{{item.lotteryCategoryLogoUrl}}" class="logo">\n\n                <div class="info">\n\n                    <div class="name">\n\n                        {{item.lotteryCategoryName}}\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode != \'pk10\' && item.parentLotteryCategoryCode != \'k3\'">\n\n                        <p *ngFor="let num of item.numbers" class="bar">\n\n                            {{num}}\n\n                        </p>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode == \'pk10\'">\n\n                        <img src="./assets/gameIcon/pk{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode == \'k3\'">\n\n                        <img src="./assets/gameIcon/ks{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n                    <div class="other">\n\n                        <p class="num">第<span>{{item.lotteryPeriods}}</span>期</p>\n\n                        <p class="time">{{item.lotteryOpenTime}}</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </ion-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\lottery\lottery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], LotteryPage);
    return LotteryPage;
}());

//# sourceMappingURL=lottery.js.map

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_details_news_details__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.page = 1;
        this.size = 30;
        this.newsLists = [];
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        var url = "/api/lotteryNews/getLotteryNewsList";
        var self = this;
        this.http.post(url, { page: this.page, size: this.size }, function (res, err) {
            if (!err) {
                self.newsLists = res;
            }
        });
    };
    NewsPage.prototype.newsDetails = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_details_news_details__["a" /* NewsDetailsPage */], { id: this.newsLists[index].id });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\news\news.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>彩票资讯</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="news">\n\n    <div class="item" *ngFor="let item of newsLists;let i = index;" (click)="newsDetails(i)">\n\n      <img src="./assets/home/recommend@3x.png">\n\n      <p>{{item.newsTitle}}</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lotterys_lotterys__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticPage = /** @class */ (function () {
    function StatisticPage(navCtrl, modal, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.http = http;
        this.navParams = navParams;
        this.currentLottery = {
            'title': '重庆时时彩',
            'code': 'cqssc',
            'type': 'ssc'
        };
        this.callback = function (data) {
            return new Promise(function (res, rej) {
                _this.currentLottery = data;
            });
        };
        this.getAllLotterys();
    }
    StatisticPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticPage');
    };
    StatisticPage.prototype.getAllLotterys = function () {
        var url = "/api/lotteryCategory/getTrendLotteryCategoryList";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    var group = res[i];
                    for (var j = 0; j < group.list.length; j++) {
                        var item = group.list[j];
                        item.select = false;
                        if (i == 0 && j == 0) {
                            item.select = true;
                        }
                    }
                }
                self.lotterys = res;
            }
        });
    };
    StatisticPage.prototype.selectLotteryAction = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__lotterys_lotterys__["a" /* LotterysPage */], { lotterys: this.lotterys, callback: this.callback });
        modal.present();
    };
    StatisticPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistic',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\statistic\statistic.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>冷热统计</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="currentLottery" >\n\n      <span (click)="selectLotteryAction()">\n\n        {{currentLottery.title}}\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </span>\n\n  </div>\n\n  <statistic [setLottery]="currentLottery"></statistic>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\statistic\statistic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], StatisticPage);
    return StatisticPage;
}());

//# sourceMappingURL=statistic.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forecast_details_details__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredictionPage = /** @class */ (function () {
    function PredictionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lotteryCode = "";
        this.lotteryCode = navParams.get("code");
        if (!this.lotteryCode) {
            this.lotteryCode = "";
        }
    }
    PredictionPage.prototype.planDetailsAction = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forecast_details_details__["a" /* DetailsPage */], { data: obj });
    };
    PredictionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-prediction',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\prediction\prediction.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>预测计划</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <prediction (selectItem)="planDetailsAction($event)" [setCodeType]="lotteryCode"></prediction>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\prediction\prediction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PredictionPage);
    return PredictionPage;
}());

//# sourceMappingURL=prediction.js.map

/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, clip, http, user, nat, navParams) {
        this.navCtrl = navCtrl;
        this.clip = clip;
        this.http = http;
        this.user = user;
        this.nat = nat;
        this.navParams = navParams;
        this.showLoading = false;
        var obj = this.navParams.get("data");
        var self = this;
        if (obj.forcastResults) {
            this.setData(obj);
        }
        else {
            this.showLoading = true;
            var url = "/api/plan/getPlanPlay";
            this.http.post(url, { zqdmId: obj.zqdmId, planId: obj.planId }, function (res, err) {
                self.showLoading = false;
                if (!err) {
                    self.setData(res);
                }
            });
        }
    }
    DetailsPage.prototype.setData = function (obj) {
        for (var i = 0; i < obj.forcastResults.length; i++) {
            var o = obj.forcastResults[i];
            o.hitPeriod = o.hitPeriod.substring(o.hitPeriod.length - 3, o.hitPeriod.length);
            o.end = o.endPeriod.substring(o.endPeriod.length - 3, o.endPeriod.length);
            o.start = o.startPeriod.substring(o.startPeriod.length - 3, o.startPeriod.length);
        }
        this.data = obj;
    };
    DetailsPage.prototype.shouchangAction = function () {
        if (!this.user.login) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_login_login__["a" /* LoginPage */]);
            return;
        }
        var url = "/api/newforcastresult/addMyPlan";
        var map = {
            loginToken: this.user.loginToken,
            uid: this.user.uid,
            planId: this.data.id
        };
        var self = this;
        this.http.post(url, map, function (res, err) {
            if (!err) {
                self.nat.showToast("收藏成功");
            }
        });
    };
    DetailsPage.prototype.copyAction = function () {
        var _this = this;
        this.clip.copy(this.data.forcastResults[0].forcastNumber).then(function (res) {
            _this.nat.showToast("复制成功");
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\forecast\details\details.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="data">{{data.planName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <loading *ngIf="showLoading"></loading>\n\n  <div class="info" *ngIf="data">\n\n    <div>当前连中{{data.continuePeriods}}期 | 近{{data.forcastResults.length}}期准确率{{data.curr * 100 | number:\'0.1-1\'}}%</div>\n\n    <div class="btn" (click)="copyAction()">复制</div>\n\n    <div class="btn" (click)="shouchangAction()">收藏</div>\n\n  </div>\n\n\n\n  <table *ngIf="data">\n\n    <thead>\n\n    <tr>\n\n      <td>计划期数</td>\n\n      <td>预测号码</td>\n\n      <td>开奖期数</td>\n\n      <td>开奖结果</td>\n\n      <td>预测结果</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of data.forcastResults">\n\n      <td>{{item.start}}-{{item.end}}期</td>\n\n      <td>{{item.forcastNumber}}</td>\n\n      <td>{{item.hitPeriod}}期</td>\n\n      <td *ngIf="!item.hitOpenNumber" style="color: rgb(140, 140, 140);">等开</td>\n\n      <td *ngIf="item.hitOpenNumber">{{item.hitOpenNumber}}</td>\n\n      <td *ngIf="!item.hitOpenNumber" style="color: rgb(140, 140, 140);">等开{{item.hitIndex}}</td>\n\n      <td *ngIf="item.hitOpenNumber && item.hit == 0" style="color: green">中中{{item.hitIndex}}</td>\n\n      <td *ngIf="item.hitOpenNumber && item.hit == 1" style="color: red">未中{{item.hitIndex}}</td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\forecast\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_4__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userService__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http, user, native, nativeHttp) {
        this.http = http;
        this.user = user;
        this.native = native;
        this.nativeHttp = nativeHttp;
        // public baseUrl:string = "http://192.168.10.79:8100/";
        this.baseUrl = "http://47.244.180.213:8200/";
        this.stageType = "mk";
        this.channelType = 'mk-qd01';
    }
    HttpService.prototype.post = function (url, params, callback) {
        var _this = this;
        if (params === void 0) { params = null; }
        if (url[0] == 'otherWay') {
            url = 'http://47.75.180.253:8999' + url[1];
            //url = 'http://192.168.10.79:8999' + url[1]
        }
        else {
            url = this.baseUrl + url;
            params.stageType = this.stageType;
            params.channelType = this.channelType;
        }
        ;
        if (this.native.isMobile()) {
            this.nativeHttp.post(url, params, {}).then(function (res) {
                var obj = JSON.parse(res.data);
                if (obj.status == '200') {
                    callback(obj['data'], null);
                }
                else {
                    _this.native.showToast(obj["message"]);
                    callback(null, obj["message"]);
                }
            }).catch(function (err) {
                _this.native.hideLoading();
                callback(null, err);
            });
        }
        else {
            var options = {
                headers: { "Content-Type": "application/json;multipart/form-data" },
                params: params
            };
            this.http.post(url, {}, options).subscribe(function (res) {
                if (res.status == '200') {
                    callback(res['data'], null);
                }
                else {
                    _this.native.showToast(res["message"]);
                    callback(null, res["message"]);
                }
            }, function (err) {
                callback(null, err);
            });
        }
    };
    // get数据
    HttpService.prototype.get = function (url, params, callback) {
        var _this = this;
        params.stageType = this.stageType;
        params.channelType = this.channelType;
        url = this.setGetUrl(url, params);
        if (this.native.isMobile()) {
            this.nativeHttp.get(url, {}, {}).then(function (res) {
                var obj = JSON.parse(res.data);
                if (obj.StatusCode) {
                    _this.native.showToast(obj.Message);
                    callback(null, obj.Message);
                }
                else {
                    callback(obj, null);
                }
            }).catch(function (err) {
                callback(null, err);
            });
        }
        else {
            var options = { headers: {} };
            var authtoken = localStorage.getItem('authtoken');
            if (authtoken) {
                options.headers = { authtoken: authtoken };
            }
            this.http.get(url, options).subscribe(function (res) {
                if (res.StatusCode) {
                    _this.native.showToast(res.Message);
                    callback(null, res.Message);
                }
                else {
                    callback(res, null);
                }
            }, function (err) {
                _this.native.hideLoading();
                callback(null, err);
            });
        }
    };
    HttpService.prototype.setGetUrl = function (url, parmas) {
        var u = this.baseUrl + url;
        var par = '?';
        for (var key in parmas) {
            par += key + "=" + parmas[key] + "&";
        }
        u = u + par.substring(0, par.length - 1);
        return u;
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=httpService.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_details_articles_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlanDetailsPage = /** @class */ (function () {
    function PlanDetailsPage(navCtrl, http, user, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.user = user;
        this.nat = nat;
        this.navParams = navParams;
        this.expert = {
            nextForcastNumber: [],
        };
        this.articlesList = [];
        this.showLoading = true;
        this.plan = navParams.get("data");
        console.log(this.plan);
        this.plan.expertIntroduce = this.nat.delHtmlTag(this.plan.expertIntroduce);
        var url = "/api/expertDetails/getExpertDetailsByCode";
        var self = this;
        var map = { expertCode: this.plan.expertCode };
        this.http.post(url, map, function (res, err) {
            self.showLoading = false;
            if (!err) {
                res.nextForcastNumber = res.nextForcastNumber.split(',');
                self.expert = res;
                console.log(res);
            }
        });
        url = "/api/forecastArticles/getArticlesNew";
        this.http.post(url, map, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].createTime = res[i].createTime.replace(/-/g, '/');
                }
                self.articlesList = res;
            }
        });
    }
    PlanDetailsPage.prototype.detailsAction = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__articles_details_articles_details__["a" /* ArticlesDetailsPage */], { id: this.articlesList[index].id });
    };
    PlanDetailsPage.prototype.praiseAction = function () {
        if (!this.user.login) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_login_login__["a" /* LoginPage */]);
            return;
        }
        var url = "/api/expertDetails/updatePraiseNum";
        var self = this;
        this.http.post(url, { id: this.plan.id }, function (res, err) {
            if (!err) {
                self.plan.numberOfPraise += 1;
            }
        });
    };
    PlanDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-plan-details',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\plan-details\plan-details.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>专家详情</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="user-info">\n\n\n\n    <div class="user-header">\n\n      <img src="{{plan.expertImgUrl}}">\n\n      <p class="tag">{{plan.expertLabelName}}</p>\n\n      <p class="name">{{plan.expertName}}</p>\n\n      <p class="staticstics">综合命中率：{{plan.hitRate}}%</p>\n\n      <img src="./assets/imgs/like.png" class="praise" (click)="praiseAction()">\n\n    </div>\n\n    <table>\n\n      <tbody>\n\n      <tr>\n\n        <td class="key">专家简介：</td>\n\n        <td colspan="3" class="value">{{plan.expertIntroduce}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td class="key">擅长彩种：</td>\n\n        <td colspan="2" class="value">{{expert.goodLotteryName}}</td>\n\n        <td class="last">点赞数:{{plan.numberOfPraise}}</td>\n\n      </tr>\n\n      <tr>\n\n        <td class="key">下期预测：</td>\n\n        <td class="value bars" colspan="3">\n\n          <p class="bar"  *ngFor="let item of expert.nextForcastNumber">{{item}}</p>\n\n        </td>\n\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n\n  <loading *ngIf="showLoading"></loading>\n\n  <ion-list>\n\n    <div class="list-header">\n\n      <div class="header-content">\n\n        <img src="./assets/imgs/text.png">\n\n        <p>最新预测</p>\n\n      </div>\n\n    </div>\n\n    <ion-item (click)="detailsAction(i)" *ngFor="let item of articlesList;let i=index;">\n\n      <div class="hot-content">\n\n        <div class="title">\n\n          <img src="./assets/imgs/hot.png" *ngIf="item.isHot == 1">\n\n          <p>{{item.lotteryCategoryName}}:{{item.forecastArticleTitle}}</p>\n\n        </div>\n\n        <div class="other">\n\n          <!--<img src="./assets/imgs/watch.png">-->\n\n          <!--<p class="count">2028</p>-->\n\n          <img src="./assets/imgs/watch.png">\n\n          <p class="like">{{item.sees}}</p>\n\n          <p class="time">{{item.createTime | date:\'yyyy-MM-dd\'}}</p>\n\n        </div>\n\n      </div>\n\n    </ion-item>\n\n    <div *ngIf="articlesList.length == 0 && !showLoading" style="text-align: center;padding-top: 40px;color: #888;">尚未发表预测方案</div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\plan-details\plan-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PlanDetailsPage);
    return PlanDetailsPage;
}());

//# sourceMappingURL=plan-details.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lotterys_lotterys__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryListPage = /** @class */ (function () {
    function HistoryListPage(navCtrl, http, nat, modal, alert, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.modal = modal;
        this.alert = alert;
        this.navParams = navParams;
        this.showLoading = true;
        this.lotterys = [];
        this.showBaseInfo = false;
        this.type = '';
        this.minutes = 0;
        this.seconds = 0;
        this.minutesStr = "00";
        this.secondsStr = "00";
        this.dataSource = [];
        this.isOpenNumber = false;
        this.callback = function (obj) {
            return new Promise(function (res, rej) {
                _this.title = obj.title;
                _this.lotteryCategoryCode = obj.code;
                _this.type = obj.type;
                _this.getLotteryBaseInfo();
                if (obj.type == 'qt') {
                    _this.getData();
                }
            });
        };
        this.lotteryCategoryCode = navParams.get('code');
        this.type = navParams.get('parentCode');
        this.title = navParams.get('title');
        console.log(this.lotteryCategoryCode + '999');
        this.getData();
        this.getLotteryBaseInfo();
        this.getAllLotterys();
    }
    HistoryListPage.prototype.getData = function () {
        var url = "/api/lotteryOpenNumber/getNewestOpenNumberByLotteryCategory";
        var map = { lotteryCategoryCode: this.lotteryCategoryCode, number: 90 };
        var self = this;
        this.http.post(url, map, function (res, err) {
            self.showLoading = false;
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].numbers = res[i].lotteryOpenNumber.split(',');
                    for (var j = 0; j < res[i].numbers.length; j++) {
                        res[i].numbers[j] = parseInt(res[i].numbers[j]);
                    }
                }
                self.data = res;
                console.log(res);
            }
        });
    };
    HistoryListPage.prototype.getAllLotterys = function () {
        var url = "/api/lotteryCategory/getTrendLotteryCategoryList";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    var group = res[i];
                    for (var j = 0; j < group.list.length; j++) {
                        var item = group.list[j];
                        item.select = false;
                        if (i == 0 && j == 0) {
                            //item.select = true;
                            // self.type = group.parentLotteryCode;
                            // self.lotteryCategoryCode = item.lotteryCategoryCode;
                            //self.title = item.lotteryCategoryName;
                            self.getLotteryBaseInfo();
                        }
                    }
                }
                self.lotterys = res;
            }
        });
    };
    HistoryListPage.prototype.getLotteryBaseInfo = function () {
        var url = "/api/lotteryOpenNumber/getOpenNumberInfomation";
        var self = this;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCategoryCode }, function (res, err) {
            if (!err) {
                self.showBaseInfo = true;
                self.type = res.parentLotteryCode;
                console.log(res);
                if (self.type != 'qt') {
                    res.result = res.analyzeResult.replace(/,/g, ' ');
                    res.openNumbers = res.lotteryOpenNumber.split(',');
                    res.numbers = [];
                    for (var i = 0; i < res.openNumbers.length; i++) {
                        res.numbers.push(parseInt(res.openNumbers[i]));
                    }
                    self.baseInfo = res;
                    self.nextOpenTime(res.nextOpenTime.replace(/-/g, '/'));
                }
                else {
                    res.openNumbers = res.lotteryOpenNumber.split(',');
                    self.baseInfo = res;
                }
            }
        });
    };
    HistoryListPage.prototype.nextOpenTime = function (date) {
        var _this = this;
        var openTime = (new Date(date)).getTime() / 1000;
        var currentTime = (new Date()).getTime() / 1000;
        if (currentTime < openTime) {
            clearInterval(this.mInterval);
            this.mInterval = setInterval(function () {
                currentTime = (new Date()).getTime() / 1000;
                var time = openTime - currentTime;
                if (time < 0) {
                    _this.isOpenNumber = true;
                    clearInterval(_this.mInterval);
                    _this.getLotteryBaseInfo();
                }
                else {
                    _this.isOpenNumber = false;
                    _this.timeInterval(time);
                }
            }, 1000);
        }
        else {
            this.isOpenNumber = true;
            this.minutesStr = "00";
            this.secondsStr = "00";
            clearInterval(this.mInterval);
            this.mInterval = setInterval(function () {
                _this.getLotteryBaseInfo();
            }, 5000);
        }
    };
    HistoryListPage.prototype.timeInterval = function (time) {
        this.minutes = Math.round(time / 60);
        this.seconds = Math.round(time % 60);
        if (this.minutes < 10) {
            this.minutesStr = "0" + this.minutes;
        }
        else {
            this.minutesStr = "" + this.minutes;
        }
        if (this.seconds < 10) {
            this.secondsStr = "0" + this.seconds;
        }
        else {
            this.secondsStr = "" + this.seconds;
        }
    };
    HistoryListPage.prototype.showModalAction = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__lotterys_lotterys__["a" /* LotterysPage */], { lotterys: this.lotterys, callback: this.callback });
        modal.present();
    };
    HistoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\historylist\historylist.html"*/'<ion-header>\n\n    <ion-navbar>\n\n            <ion-title (click)="showModalAction()">{{title}}<ion-icon name="arrow-down"></ion-icon></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="baseInfo" *ngIf="showBaseInfo && type != \'qt\'">\n\n        <div *ngIf="!isOpenNumber">\n\n            <div class="time">\n\n            <p class="periods">第{{baseInfo.lotteryPeriods}}期开奖</p>\n\n            <p class="isOpen">已开{{baseInfo.isOpenPeriod}}期，剩余{{baseInfo.notOpenPeriod}}期</p>\n\n            </div>\n\n            <div class="openNums" *ngIf="type == \'k3\'">\n\n            <img *ngFor="let num of baseInfo.numbers" src="./assets/gameIcon/ks{{num}}.png"/>\n\n            </div>\n\n            <div class="openNums" *ngIf="type == \'pk10\'" [ngClass]="{\'pk10\':type == \'pk10\'}">\n\n            <img *ngFor="let num of baseInfo.numbers" src="./assets/gameIcon/pk{{num}}.png"/>\n\n            </div>\n\n            <div class="openNums" *ngIf="type != \'k3\' && type != \'pk10\'">\n\n            <p class="bar" *ngFor="let bar of baseInfo.openNumbers">{{bar}}</p>\n\n            </div>\n\n            <p class="total">{{baseInfo.result}}</p>\n\n            <p class="next-open-time">距下期开奖仅有<span>{{minutesStr}}</span>分<span>{{secondsStr}}</span>秒</p>\n\n        </div>\n\n        <div *ngIf="isOpenNumber">\n\n            <img src="./assets/imgs/loading1.gif" />\n\n            <p style="color: red;font-size: 14px;">正在开奖中...</p>\n\n        </div>        \n\n    </div>\n\n\n\n    <ion-scroll scrollY="true" style="height: 100%;">\n\n        <loading [text]="\'加载中...\'" *ngIf="showLoading"></loading>\n\n        <div class="list">\n\n            <div class="item" *ngFor="let item of data">\n\n                <div class="info">\n\n                    <div class="other">\n\n                        <p class="num">第<span>{{item.lotteryPeriods}}</span>期</p>\n\n                        <p class="time">{{item.lotteryOpenTime}}</p>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode != \'pk10\' && item.parentLotteryCategoryCode != \'k3\'">\n\n                        <p *ngFor="let num of item.numbers" class="bar">\n\n                            {{num}}\n\n                        </p>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode == \'pk10\'">\n\n                        <img src="./assets/gameIcon/pk{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n                    <div class="numbers" *ngIf="item.parentLotteryCategoryCode == \'k3\'">\n\n                        <img src="./assets/gameIcon/ks{{num}}.png" *ngFor="let num of item.numbers"/>\n\n                    </div>\n\n\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </ion-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\historylist\historylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HistoryListPage);
    return HistoryListPage;
}());

//# sourceMappingURL=historylist.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sangcixiang on 2017/5/7.
 */





var NativeService = /** @class */ (function () {
    function NativeService(platform, toastCtrl, toast, storage, spinnerDialog, loadingCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.toast = toast;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
        this.loadingCtrl = loadingCtrl;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.storageSetValue = function (key, value) {
        if (this.isMobile()) {
            this.storage.setItem(key, value);
        }
        else {
            localStorage.setItem(key, value);
        }
    };
    NativeService.prototype.storageGetValue = function (key, callback) {
        if (this.isMobile()) {
            this.storage.getItem(key).then(function (value) {
                callback(value);
            });
        }
        else {
            callback(localStorage.getItem(key));
        }
    };
    NativeService.prototype.storageRemoveKey = function (key) {
        if (this.isMobile()) {
            this.storage.remove(key);
        }
        else {
            localStorage.removeItem(key);
        }
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (!this.isMobile()) {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
        else {
            this.toast.show(message, "2000", 'center').subscribe(function (toast) { console.log(toast); });
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        if (content === void 0) { content = '正在加载中...'; }
        if (this.isMobile()) {
            this.spinnerDialog.show(null, content);
        }
        else {
            if (!this.loadingIsOpen) {
                this.loadingIsOpen = true;
                this.loading = this.loadingCtrl.create({
                    content: content
                });
                this.loading.present();
            }
        }
    };
    ;
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        if (this.isMobile()) {
            this.spinnerDialog.hide();
        }
        else {
            this.loadingIsOpen && this.loading.dismiss();
            this.loadingIsOpen = false;
        }
    };
    ;
    NativeService.prototype.dateFormat = function (date, format) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return 'wifi';
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    NativeService.prototype.checkPhone = function (phone) {
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            return false;
        }
        return true;
    };
    NativeService.prototype.checkPassWord = function (password) {
        var str = password;
        if (str == null || str.length < 2) {
            return false;
        }
        var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
        if (reg.test(str)) {
            return true;
        }
        else {
            return false;
        }
    };
    NativeService.prototype.delHtmlTag = function (str) {
        return str.replace(/<[^>]+>|&nbsp;/g, ""); //去掉所有的html标记
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=NativeService.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 274;

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 322;

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trend_trend__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forecast_forecast__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__me_me__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hall_hall__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__forecast_forecast__["a" /* ForecastPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__hall_hall__["a" /* HallPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__trend_trend__["a" /* TrendPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__me_me__["a" /* MePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="彩票走势" tabIcon="disc"></ion-tab>\n\n  <ion-tab [root]="tab5Root" class="hall" tabIcon="pulse"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="推荐预测" tabIcon="pulse"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="个人中心" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lotterys_lotterys__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrendPage = /** @class */ (function () {
    function TrendPage(navCtrl, http, nat, modal, alert, component, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.modal = modal;
        this.alert = alert;
        this.component = component;
        this.navParams = navParams;
        this.lotterys = []; //全部彩种
        this.showBaseInfo = false;
        this.minutes = 0;
        this.seconds = 0;
        this.minutesStr = "00";
        this.secondsStr = "00";
        this.dataSource = [];
        this.isOpenNumber = false;
        this.callback = function (obj) {
            return new Promise(function (res, rej) {
                _this.title = obj.title;
                _this.lotteryCode = obj.code;
                _this.type = obj.type;
                _this.getLotteryBaseInfo();
                if (obj.type == 'qt') {
                    _this.getData();
                }
            });
        };
        this.title = "";
        this.getAllLotterys();
    }
    TrendPage.prototype.getAllLotterys = function () {
        var url = "/api/lotteryCategory/getTrendLotteryCategoryList";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    var group = res[i];
                    for (var j = 0; j < group.list.length; j++) {
                        var item = group.list[j];
                        item.select = false;
                        if (i == 0 && j == 0) {
                            item.select = true;
                            self.type = group.parentLotteryCategoryCode;
                            self.lotteryCode = item.lotteryCategoryCode;
                            self.title = item.lotteryCategoryName;
                            self.getLotteryBaseInfo();
                        }
                    }
                }
                self.lotterys = res;
            }
        });
    };
    TrendPage.prototype.getLotteryBaseInfo = function () {
        var url = "/api/lotteryOpenNumber/getOpenNumberInfomation";
        var self = this;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode }, function (res, err) {
            if (!err) {
                self.showBaseInfo = true;
                console.log(res);
                if (self.type != 'qt') {
                    res.result = res.analyzeResult.replace(/,/g, ' ');
                    res.openNumbers = res.lotteryOpenNumber.split(',');
                    res.numbers = [];
                    for (var i = 0; i < res.openNumbers.length; i++) {
                        res.numbers.push(parseInt(res.openNumbers[i]));
                    }
                    self.baseInfo = res;
                    self.nextOpenTime(res.nextOpenTime.replace(/-/g, '/'));
                }
                else {
                    res.openNumbers = res.lotteryOpenNumber.split(',');
                    self.baseInfo = res;
                }
            }
        });
    };
    TrendPage.prototype.nextOpenTime = function (date) {
        var _this = this;
        var openTime = (new Date(date)).getTime() / 1000;
        var currentTime = (new Date()).getTime() / 1000;
        if (currentTime < openTime) {
            clearInterval(this.mInterval);
            this.mInterval = setInterval(function () {
                currentTime = (new Date()).getTime() / 1000;
                var time = openTime - currentTime;
                if (time < 0) {
                    _this.isOpenNumber = true;
                    clearInterval(_this.mInterval);
                    _this.getLotteryBaseInfo();
                }
                else {
                    _this.isOpenNumber = false;
                    _this.timeInterval(time);
                }
            }, 1000);
        }
        else {
            this.isOpenNumber = true;
            this.minutesStr = "00";
            this.secondsStr = "00";
            clearInterval(this.mInterval);
            this.mInterval = setInterval(function () {
                _this.getLotteryBaseInfo();
            }, 5000);
        }
    };
    TrendPage.prototype.timeInterval = function (time) {
        this.minutes = Math.round(time / 60);
        this.seconds = Math.round(time % 60);
        if (this.minutes < 10) {
            this.minutesStr = "0" + this.minutes;
        }
        else {
            this.minutesStr = "" + this.minutes;
        }
        if (this.seconds < 10) {
            this.secondsStr = "0" + this.seconds;
        }
        else {
            this.secondsStr = "" + this.seconds;
        }
    };
    TrendPage.prototype.getData = function () {
        var url = "/api/lotteryOpenNumber/getNewestOpenNumberByLotteryCategory";
        var self = this;
        this.http.post(url, { lotteryCategoryCode: this.lotteryCode, number: 30 }, function (data, err) {
            if (!err) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    data[i].lotteryOpenNumber = data[i].lotteryOpenNumber.split(',');
                }
                self.dataSource = data;
            }
        });
    };
    TrendPage.prototype.showModalAction = function () {
        console.log(this.lotterys);
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__lotterys_lotterys__["a" /* LotterysPage */], { lotterys: this.lotterys, callback: this.callback });
        modal.present();
    };
    TrendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trend',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\trend\trend.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title (click)="showModalAction()">{{title}}<ion-icon name="arrow-down"></ion-icon></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="baseInfo" *ngIf="showBaseInfo && type != \'qt\'">\n\n\n\n    <div *ngIf="!isOpenNumber">\n\n      <div class="time">\n\n        <p class="periods">第{{baseInfo.lotteryPeriods}}期开奖</p>\n\n        <p class="isOpen">已开{{baseInfo.isOpenPeriod}}期，剩余{{baseInfo.notOpenPeriod}}期</p>\n\n      </div>\n\n      <div class="openNums" *ngIf="type == \'k3\'">\n\n        <img *ngFor="let num of baseInfo.numbers" src="./assets/gameIcon/ks{{num}}.png"/>\n\n      </div>\n\n      <div class="openNums" *ngIf="type == \'pk10\'" [ngClass]="{\'pk10\':type == \'pk10\'}">\n\n        <img *ngFor="let num of baseInfo.numbers" src="./assets/gameIcon/pk{{num}}.png"/>\n\n      </div>\n\n      <div class="openNums" *ngIf="type != \'k3\' && type != \'pk10\'">\n\n        <p class="bar" *ngFor="let bar of baseInfo.openNumbers">{{bar}}</p>\n\n      </div>\n\n      <p class="total">{{baseInfo.result}}</p>\n\n      <p class="next-open-time">距下期开奖仅有<span>{{minutesStr}}</span>分<span>{{secondsStr}}</span>秒</p>\n\n    </div>\n\n    <div *ngIf="isOpenNumber">\n\n      <img src="./assets/imgs/loading1.gif" />\n\n      <p style="color: red;font-size: 14px;">正在开奖中...</p>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <!--时时彩-->\n\n  <ssc [setLotteryCode]="lotteryCode" *ngIf="type == \'ssc\'"></ssc>\n\n\n\n  <!--快3-->\n\n  <k3 [setLotteryCode]="lotteryCode" *ngIf="type == \'k3\'"></k3>\n\n\n\n  <!--11选5-->\n\n  <select5 [setLotteryCode]="lotteryCode" *ngIf="type == \'11x5\'"></select5>\n\n\n\n  <!--pk10-->\n\n  <pk10 [setLotteryCode]="lotteryCode" *ngIf="type == \'pk10\'"></pk10>\n\n\n\n  <div *ngIf="type == \'qt\'" class="qt">\n\n\n\n    <div class="list">\n\n      <div class="item" *ngFor="let item of dataSource">\n\n        <div class="info">\n\n          <p>第{{item.lotteryPeriods}}</p>\n\n          <p>开奖时间：{{item.lotteryOpenTime | date:\'yyyy-MM-dd hh:mm\'}}</p>\n\n        </div>\n\n        <div class="numbers">\n\n          <p class="bar" *ngFor="let num of item.lotteryOpenNumber">{{num}}</p>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\trend\trend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TrendPage);
    return TrendPage;
}());

//# sourceMappingURL=trend.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lotterys_lotterys__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__articles_details_articles_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plan_details_plan_details__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForecastPage = /** @class */ (function () {
    function ForecastPage(navCtrl, dom, http, nat, modal, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dom = dom;
        this.http = http;
        this.nat = nat;
        this.modal = modal;
        this.navParams = navParams;
        this.navs = [];
        this.currentIndex = 0;
        this.currentLottery = {
            'title': '重庆时时彩',
            'code': 'cqssc',
            'type': 'ssc'
        };
        this.callback = function (data) {
            return new Promise(function (res, rej) {
                _this.navs[_this.currentIndex].currentLottery = data.title;
                _this.currentLottery = data;
            });
        };
        this.navs = [
            {
                url: '/api/lotteryCategory/getForcastLotteryCategoryList',
                name: '中金计划',
                select: true,
                currentLottery: '',
                urls: {
                    plans: '/api/newforcastresult/getPlanListByLotteryCategoryCode',
                    forcast: '/api/newforcastresult/getNewForcast',
                    openNumber: '/api/newforcastresult/getNewOneOpenNumber',
                    nextTime: '/api/newforcastresult/getNextTime' //下期开奖时间
                },
                lotterys: [],
                dataSource: []
            },
            {
                url: '/api/lotteryCategory/getTrendLotteryCategoryList',
                name: '冷热统计',
                select: false,
                currentLottery: '',
                lotterys: [],
                dataSource: []
            },
            {
                url: '/api/forecastArticles/getForecastLotteryCategory',
                name: '专家计划',
                select: false,
                lotterys: [],
                dataSource: []
            },
        ];
        this.onSelectItem(0);
        this.getAllLotterys();
    }
    ForecastPage.prototype.articlesDetailsAction = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__articles_details_articles_details__["a" /* ArticlesDetailsPage */], { id: e.id });
    };
    ForecastPage.prototype.planDetails1Action = function (e) {
        console.log(e);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__plan_details_plan_details__["a" /* PlanDetailsPage */], { data: e });
    };
    ForecastPage.prototype.onSelectItem = function (index) {
        this.currentIndex = index;
    };
    ForecastPage.prototype.getAllLotterys = function () {
        var url = "/api/lotteryCategory/getTrendLotteryCategoryList";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    var group = res[i];
                    for (var j = 0; j < group.list.length; j++) {
                        var item = group.list[j];
                        item.select = false;
                        if (i == 0 && j == 0) {
                            item.select = true;
                            self.navs[1].currentLottery = item.lotteryCategoryName;
                        }
                    }
                }
                self.navs[1].lotterys = res;
            }
        });
    };
    ForecastPage.prototype.selectLotteryAction = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__lotterys_lotterys__["a" /* LotterysPage */], { lotterys: this.navs[this.currentIndex].lotterys, callback: this.callback });
        modal.present();
    };
    ForecastPage.prototype.planDetailsAction = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* DetailsPage */], { data: obj });
    };
    ForecastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forecast',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\forecast\forecast.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <scroll-bar [setButtonArray]="navs" (selectItem)="onSelectItem($event)"></scroll-bar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <prediction *ngIf="currentIndex == 0" (selectItem)="planDetailsAction($event)"></prediction>\n\n  <div *ngIf="currentIndex == 1">\n\n    <div class="currentLottery" >\n\n      <span (click)="selectLotteryAction()">\n\n        {{navs[currentIndex].currentLottery}}\n\n        <ion-icon name="arrow-down"></ion-icon>\n\n      </span>\n\n    </div>\n\n    <statistic [setLottery]="currentLottery"></statistic>\n\n  </div>\n\n  <plan *ngIf="currentIndex == 2" (articlesDetails)="articlesDetailsAction($event)" (planDetails)="planDetails1Action($event)"></plan>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\forecast\forecast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ForecastPage);
    return ForecastPage;
}());

//# sourceMappingURL=forecast.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.time = 60;
        this.isCountdown = false;
        this.getCodeString = "获取验证码";
        this.form = {
            account: '',
            password: '',
            code: '',
            stageType: 'mk',
            channelType: 'qd01'
        };
    }
    RegisterPage.prototype.getCode = function () {
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        var url = ['otherWay', "/api/code/sendCode"];
        var map = {
            account: this.form.account,
            stageType: 'mk',
            type: '0'
        };
        this.isCountdown = true;
        this.countdownAction();
        var self = this;
        this.http.post(url, map, function (res, err) {
            if (!err) {
                self.nat.showToast("短信验证码发送成功");
                console.log(res);
            }
        });
    };
    RegisterPage.prototype.ionViewWillUnload = function () {
        if (this.timeEvent) {
            clearInterval(this.timeEvent);
        }
    };
    RegisterPage.prototype.countdownAction = function () {
        var _this = this;
        this.getCodeString = this.time + "s";
        this.timeEvent = setInterval(function () {
            if (_this.time == 0) {
                _this.time = 60;
                _this.isCountdown = false;
                clearInterval(_this.timeEvent);
                _this.getCodeString = "获取验证码";
            }
            else {
                _this.time--;
                _this.getCodeString = _this.time + "s";
            }
        }, 1000);
    };
    RegisterPage.prototype.registerAction = function () {
        var self = this;
        var url = ['otherWay', '/api/user/userRegrsiter'];
        // let options = {
        //   account:this.form.account,
        //   stageType:0
        // }
        // this.http.post(url,options,function (res,err) {
        //   self.nat.hideLoading();
        //   if(!err){
        //     self.nat.showToast("注册成功");
        //     self.nat.storageSetValue("userInfo",JSON.stringify(res));
        //     self.navCtrl.pop();
        //   }
        // });
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        if (this.form.password.length < 6) {
            this.nat.showToast("密码不能少于6位");
            return;
        }
        if (!this.nat.checkPassWord(this.form.password)) {
            this.nat.showToast("密码应为字母加数字组合");
            return;
        }
        if (this.form.password.length > 16) {
            this.nat.showToast("密码长度不能大于16位");
            return;
        }
        if (this.endPwd != this.form.password) {
            this.nat.showToast("两次密码不一样");
            return;
        }
        if (this.form.code.length <= 0) {
            this.nat.showToast("验证密码不能为空");
            return;
        }
        this.nat.showLoading("注册中...");
        this.http.post(url, this.form, function (res, err) {
            self.nat.hideLoading();
            if (!err) {
                self.nat.showToast("注册成功");
                self.nat.storageSetValue("userInfo", JSON.stringify(res));
                self.navCtrl.pop();
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\register\register.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>注册账号</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="login">\n\n    <img src="./assets/login/banner@3x.png"/>\n\n    <p>注册</p>\n\n    <div class="line"></div>\n\n  </div>\n\n  <div class="form">\n\n    <div class="item">\n\n      <img src="./assets/login/yanzhengma@3x.png">\n\n      <input type="text" placeholder="手机号" [(ngModel)]="form.account">\n\n    </div>\n\n    <div class="item">\n\n      <img src="./assets/login/mima@3x.png">\n\n      <input type="password" placeholder="密码" [(ngModel)]="form.password">\n\n    </div>\n\n    <div class="item">\n\n      <img src="./assets/login/mima@3x.png">\n\n      <input type="password" placeholder="确认密码" [(ngModel)]="endPwd">\n\n    </div>\n\n    <div class="item code">\n\n      <img src="./assets/login/yanzhengma@3x.png">\n\n      <input type="text" placeholder="请输入验证码" [(ngModel)]="form.code">\n\n      <div>\n\n        <button class="codeBtn" [ngClass]="{\'disabled\':isCountdown}" (click)="getCode()">{{getCodeString}}</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="buttons">\n\n    <button class="submit" (click)="registerAction()">马上注册</button>\n\n  </div>\n\n\n\n\n\n  <div class="goLogin"><span>已经有账户?</span><span>马上登录</span></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindPasswordPage = /** @class */ (function () {
    function FindPasswordPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.time = 5;
        this.isCountdown = false;
        this.getCodeString = "获取验证码";
        this.form = {
            account: '',
            newPassword: '',
            code: '',
            stageType: 'mk'
        };
    }
    FindPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindPasswordPage');
    };
    FindPasswordPage.prototype.getCode = function () {
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        var url = ["otherWay", "/api/code/sendCode"];
        var map = {
            account: this.form.account,
            stageType: 'mk',
            type: '1',
        };
        this.isCountdown = true;
        this.countdownAction();
        var self = this;
        this.http.post(url, map, function (res, err) {
            if (!err) {
                self.nat.showToast("短信验证码发送成功");
            }
        });
    };
    FindPasswordPage.prototype.ionViewWillUnload = function () {
        if (this.timeEvent) {
            clearInterval(this.timeEvent);
        }
    };
    FindPasswordPage.prototype.countdownAction = function () {
        var _this = this;
        this.getCodeString = this.time + "s";
        this.timeEvent = setInterval(function () {
            if (_this.time == 0) {
                _this.time = 5;
                _this.isCountdown = false;
                clearInterval(_this.timeEvent);
                _this.getCodeString = "获取验证码";
            }
            else {
                _this.time--;
                _this.getCodeString = _this.time + "s";
            }
        }, 1000);
    };
    FindPasswordPage.prototype.findPasswordAction = function () {
        var url = ['otherWay', '/api/user/userPassWordReset'];
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        if (this.form.newPassword.length < 6) {
            this.nat.showToast("密码不能少于6位");
            return;
        }
        if (!this.nat.checkPassWord(this.form.newPassword)) {
            this.nat.showToast("密码应为字母加数字组合");
            return;
        }
        if (this.form.newPassword.length > 16) {
            this.nat.showToast("密码长度不能大于16位");
            return;
        }
        // if (this.endPwd != this.form.newPassword) {
        //     this.nat.showToast("两次密码不一样");
        //     return;
        // }
        if (this.form.code.length <= 0) {
            this.nat.showToast("验证密码不能为空");
            return;
        }
        var self = this;
        this.nat.showLoading("重置中...");
        this.http.post(url, this.form, function (res, err) {
            self.nat.hideLoading();
            if (!err) {
                self.nat.showToast("重置成功");
                self.nat.storageSetValue("userInfo", JSON.stringify(res));
                self.navCtrl.popToRoot();
            }
        });
    };
    FindPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-find-password',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\find-password\find-password.html"*/'﻿<!--\n\n  Generated template for the FindPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>找回密码</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="form">\n\n        <div class="item">\n\n            <img src="./assets/imgs/phone-icon.png">\n\n            <input type="text" placeholder="请输入11位手机号码" [(ngModel)]="form.account">\n\n        </div>\n\n        <div class="item">\n\n            <img src="./assets/imgs/psw-icon.png">\n\n            <input type="password" placeholder="请输入密码（6-16位英文和数字）" [(ngModel)]="form.newPassword">\n\n        </div>\n\n        <!-- <div class="item">\n\n            <img src="./assets/imgs/psw-icon.png">\n\n            <input type="password" placeholder="再次输入密码" [(ngModel)]="endPwd">\n\n        </div> -->\n\n        <div class="item code">\n\n            <img src="./assets/imgs/modify-icon.png">\n\n            <input type="text" placeholder="请输入验证码" [(ngModel)]="form.code">\n\n            <div>\n\n                <button class="codeBtn" [ngClass]="{\'disabled\':isCountdown}" (click)="getCode()">{{getCodeString}}</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="buttons">\n\n        <button class="login" (click)="findPasswordAction()">完成修改</button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\account\find-password\find-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FindPasswordPage);
    return FindPasswordPage;
}());

//# sourceMappingURL=find-password.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__userInfo_userInfo__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_find__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_collection__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_setting__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MePage = /** @class */ (function () {
    function MePage(navCtrl, user, clip, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.clip = clip;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.weixin = '';
        this.showLoading = true;
        this.initData();
    }
    MePage.prototype.initData = function () {
        this.dataSource = [
            {
                icon: './assets/account/user-icon.png',
                name: '个人信息'
            }, {
                icon: './assets/account/share-icon.png',
                name: '分享应用'
            }, {
                icon: './assets/account/find-icon.png',
                name: '发现兴趣'
            }, {
                icon: './assets/account/like-icon.png',
                name: '我的收藏'
            }, {
                icon: './assets/account/set-icon.png',
                name: '系统设置'
            }
        ];
        var self = this;
        var url = "/api/servicenumber/getWeixinhao";
        this.http.post(url, {}, function (res, err) {
            self.showLoading = false;
            if (!err) {
                console.log(res);
                self.weixin = res.content;
            }
        });
    };
    MePage.prototype.loginAction = function () {
        if (!this.user.login) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_login_login__["a" /* LoginPage */]);
        }
    };
    MePage.prototype.clickAction = function (i) {
        switch (i) {
            case 0:
                console.log(0);
                if (!this.user.login) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_login_login__["a" /* LoginPage */]);
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__userInfo_userInfo__["a" /* UserInfoPage */]);
                }
                break;
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__find_find__["a" /* FindPage */]);
                break;
            case 3:
                console.log(3);
                if (!this.user.login) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_login_login__["a" /* LoginPage */]);
                    return;
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__collection_collection__["a" /* CollectionPage */]);
                }
                break;
            case 4:
                console.log(4);
                if (!this.user.login) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_login_login__["a" /* LoginPage */]);
                    return;
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__setting_setting__["a" /* SettingPage */]);
                }
                break;
        }
    };
    MePage.prototype.copyAction = function () {
        var _this = this;
        if (this.weixin && this.weixin.length > 0) {
            if (this.nat.isMobile()) {
                this.clip.copy(this.weixin).then(function (res) {
                    _this.nat.showToast("复制成功");
                });
            }
            else {
                console.log("这不是手机环境 别复制了");
            }
        }
    };
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-me',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\me.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="userInfo boxShow" (click)="loginAction()">\n\n    <div class="bigCircle">\n\n      <div class="smallCircle">\n\n          <img src="./assets/imgs/user-photo.png">\n\n      </div>\n\n    </div>\n\n    <p class="userName" *ngIf="user.login">{{user.nickName}}</p>\n\n    <p class="userName" *ngIf="!user.login">未登录</p>\n\n  </div>\n\n  <div class="list">\n\n    <div class="item" *ngFor="let group of dataSource;let i=index;" (click)="clickAction(i)">\n\n      <img class="icon" src="{{group.icon}}"> <p>{{ group.name }}</p>\n\n    </div>\n\n    <div class="item" (click)="copyAction()">\n\n      <img class="icon" src="./assets/account/weix-icon.png">\n\n      <p class="kufu">\n\n        客服微信号：<span *ngIf="!showLoading && weixin && weixin.length > 0"></span>\n\n        <span *ngIf="!showLoading && !weixin && weixin.length <= 0">暂无</span>\n\n      </p>\n\n      <img *ngIf="showLoading" class="weixin-loading" src="./assets/imgs/loading.gif">\n\n      <p class="clip" *ngIf="!showLoading && weixin && weixin.length > 0">点击复制</p>\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_8__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_10__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], MePage);
    return MePage;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_httpService__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, alertCtrl, http, user) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.user = user;
    }
    UserInfoPage.prototype.selectSex = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('选择性别');
        alert.addInput({
            type: 'radio',
            label: '男',
            value: '1',
            checked: (this.user.sex == 1 || this.user.sex == 2) ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: '女',
            value: '0',
            checked: this.user.sex == 0 ? true : false
        });
        alert.addButton('取消');
        alert.addButton({
            text: '确定',
            handler: function (data) {
                _this.user.sex = data;
                _this.changeUserInfo();
            }
        });
        alert.present();
    };
    UserInfoPage.prototype.settingEmail = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '邮箱设置',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: '请输入邮箱地址'
                },
            ],
            buttons: [{
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log(data);
                        _this.user.email = data.email;
                        _this.changeUserInfo();
                    }
                }
            ]
        });
        prompt.present();
    };
    UserInfoPage.prototype.compareFn = function (a, b) {
        var key = null;
        if (!key) {
            console.log(a);
            key = '1';
        }
    };
    // settingNi(){
    //   const prompt = this.alertCtrl.create({
    //     title: '昵称设置',
    //     inputs: [
    //       {
    //         name: 'nicheng',
    //         type:'text',
    //         placeholder: '请输入昵称'
    //       },
    //     ],
    //     buttons: [{
    //         text: '取消',
    //         handler: data => {
    //           console.log('Cancel clicked');
    //         }
    //       },
    //       {
    //         text: '确定',
    //         handler: data => {
    //           console.log(data);
    //           this.user.email = data.email;
    //           this.changeUserInfo();
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // }
    UserInfoPage.prototype.changeUserInfo = function () {
        var url = ['otherWay', '/api/userinfo//modifyUserinfo'];
        var map = {
            uid: this.user.uid,
            loginToken: this.user.loginToken,
            email: this.user.email,
            sex: this.user.sex
        };
        this.http.post(url, map, function (res, err) {
            if (!err) {
                console.log(res);
            }
        });
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userInfo',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\userInfo\userInfo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      个人信息\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <button ion-item>\n\n      <p class="key">头像</p>\n\n      <img src="./assets/imgs/user-photo.png" class="avatar">\n\n    </button>\n\n    <ion-select  interface=\'action-sheet\' cancelText="取消" [compareWith]="compareFn">\n\n        <ion-option (click)="changTou(\'pho\')">拍照</ion-option>\n\n        <ion-option (click)="changTou(\'pic\')">从相册选取</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-item>\n\n      <p class="key">昵称</p>\n\n      <p class="value">{{user.nickName}}</p>\n\n    </ion-item>\n\n\n\n    <button ion-item (click)="selectSex()">\n\n      <p class="key" >性别</p>\n\n      <p class="value" *ngIf="user.sex == 0">女</p>\n\n      <p class="value" *ngIf="user.sex == 1">男</p>\n\n      <p class="value" *ngIf="user.sex == 2">未知</p>\n\n    </button>\n\n    <button ion-item (click)="settingEmail()">\n\n      <p class="key">邮箱</p>\n\n      <p class="value" *ngIf="user.email && user.email.length > 0">{{user.email}}</p>\n\n      <p class="value" *ngIf="!user.email || user.email.length <= 0">未填写</p>\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\userInfo\userInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__service_userService__["a" /* UserService */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=userInfo.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindPage = /** @class */ (function () {
    function FindPage(navCtrl, http, browser, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.browser = browser;
        this.navParams = navParams;
        this.showLoading = true;
    }
    FindPage.prototype.ionViewDidLoad = function () {
        var url = "/api/applicationDownload/getList";
        var self = this;
        this.http.post(url, {}, function (res, err) {
            self.showLoading = false;
            if (!err) {
                self.data = res;
            }
        });
    };
    FindPage.prototype.downloadAction = function (index) {
        var _this = this;
        this.browser.isAvailable().then(function (activatable) {
            if (activatable) {
                _this.browser.openUrl(_this.data[index].downloaUrl);
            }
        });
    };
    FindPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-find',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\find\find.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>发现兴趣</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <loading *ngIf="showLoading"></loading>\n\n\n\n  <div class="list">\n\n    <div class="item" *ngFor="let item of data;let i=index;">\n\n      <img src="{{item.iconUrl}}">\n\n      <p class="name">{{item.appName}}</p>\n\n      <p class="des">{{item.slogan}}</p>\n\n      <button (click)="downloadAction(i)">立即下载</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\find\find.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FindPage);
    return FindPage;
}());

//# sourceMappingURL=find.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forecast_details_details__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionPage = /** @class */ (function () {
    function CollectionPage(navCtrl, http, user, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.user = user;
        this.navParams = navParams;
        this.data = [];
        this.showLoading = true;
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
        var url = "/api/newforcastresult/myPlan";
        var map = { uid: this.user.uid, loginToken: this.user.loginToken };
        var self = this;
        this.http.post(url, map, function (res, err) {
            self.showLoading = false;
            if (!err) {
                console.log(res);
                self.data = res;
            }
        });
    };
    CollectionPage.prototype.detailsAction = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forecast_details_details__["a" /* DetailsPage */], { data: this.data[index] });
    };
    CollectionPage.prototype.deletedAction = function (index) {
        console.log(this.data[index]);
        var obj = this.data[index];
        var url = "/api/newforcastresult/removeMyPlan";
        var map = {
            uid: this.user.uid,
            planId: obj.planId,
            loginToken: this.user.loginToken
        };
        var self = this;
        this.http.post(url, map, function (res, err) {
            if (!err) {
                console.log(res);
                self.data.splice(index, 1);
            }
        });
    };
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-collection',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\collection\collection.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>我的收藏</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <loading *ngIf="showLoading"></loading>\n\n  <div style="text-align: center;padding: 20px;color: #666;font-size: 14px;" *ngIf="data.length <= 0 && !showLoading">暂无计划收藏</div>\n\n\n\n  <table class="table">\n\n    <thead>\n\n    <tr>\n\n      <td>排名</td>\n\n      <td>计划名称</td>\n\n      <td>查看</td>\n\n      <td>操作</td>\n\n    </tr>\n\n    </thead>\n\n    <tbody>\n\n    <tr *ngFor="let item of data;let i=index;">\n\n      <td>{{i+1}}</td>\n\n      <td>{{item.planName}}</td>\n\n      <td><div (click)="detailsAction(i)" class="btn">查看</div></td>\n\n      <td><div (click)="deletedAction(i)" class="btn">取消</div></td>\n\n    </tr>\n\n    </tbody>\n\n  </table>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\collection\collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, nat, user, navParams) {
        this.navCtrl = navCtrl;
        this.nat = nat;
        this.user = user;
        this.navParams = navParams;
        this.initData();
    }
    SettingPage.prototype.initData = function () {
        this.dataSource = [
            [
                {
                    icon: '../../assets/account/modified-icon.png',
                    name: '修改密码'
                }
            ]
        ];
    };
    SettingPage.prototype.clickAction = function (i, j) {
        if (i == 0) {
            if (j == 0) {
                if (!this.user.login) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_login_login__["a" /* LoginPage */]);
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__["a" /* ModifyPasswordPage */]);
                }
            }
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.loginOutAction = function () {
        this.user.login = false;
        this.nat.storageRemoveKey("userInfo");
        this.navCtrl.pop();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\setting\setting.html"*/'﻿<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>设置</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list *ngFor="let group of dataSource;let i=index;">\n\n        <button ion-item *ngFor="let item of group;let j=index;" (click)="clickAction(i,j)">\n\n            <img src="{{item.icon}}"> <p>{{ item.name }}</p>\n\n        </button>\n\n    </ion-list>\n\n    <div class="btn">\n\n        <div (click)="loginOutAction()">退出登录</div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_userService__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavController } from 'ionic-angular';




var ModifyPasswordPage = /** @class */ (function () {
    function ModifyPasswordPage(navCtrl, http, nat, user, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.user = user;
        this.navParams = navParams;
        this.form = {
            uid: 0,
            loginToken: '',
            account: '',
            oldPassword: '',
            newPassword: ''
        };
    }
    ModifyPasswordPage.prototype.ionViewWillUnload = function () {
        if (this.timeEvent) {
            clearInterval(this.timeEvent);
        }
    };
    ModifyPasswordPage.prototype.modifyAction = function () {
        var url = ['otherWay', '/api/user/modifyPassword'];
        if (this.form.account.length <= 0) {
            this.nat.showToast("手机号不能为空!");
            return;
        }
        if (!this.nat.checkPhone(this.form.account)) {
            this.nat.showToast("手机号格式有误");
            return;
        }
        if (this.form.newPassword.length < 6) {
            this.nat.showToast("密码不能少于6位");
            return;
        }
        if (!this.nat.checkPassWord(this.form.newPassword)) {
            this.nat.showToast("密码应为字母加数字组合");
            return;
        }
        if (this.form.newPassword.length > 16) {
            this.nat.showToast("密码长度不能大于16位");
            return;
        }
        if (this.form.oldPassword == this.form.newPassword) {
            this.nat.showToast("两次密码一样");
            return;
        }
        var self = this;
        this.form.uid = this.user.uid;
        this.form.loginToken = this.user.loginToken;
        // this.form.account = this.user.account;
        this.nat.showLoading("修改中...");
        this.http.post(url, this.form, function (res, err) {
            self.nat.hideLoading();
            if (!err) {
                self.nat.showToast("修改成功");
                self.navCtrl.popToRoot();
            }
        });
    };
    ModifyPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modify-password',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\modify-password\modify-password.html"*/'﻿<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      修改密码\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n \n\n\n\n\n\n<ion-content>\n\n    <div class="form">\n\n        <div class="item">\n\n            <img src="./assets/imgs/phone-icon.png">\n\n            <input type="text" placeholder="请输入11位手机号码" [(ngModel)]="form.account">\n\n        </div>\n\n        <div class="item">\n\n            <img src="./assets/imgs/psw-icon.png">\n\n            <input type="password" placeholder="请输入旧密码（6-16位英文和数字）" [(ngModel)]="form.oldPassword">\n\n        </div>\n\n        <div class="item">\n\n            <img src="./assets/imgs/psw-icon.png">\n\n            <input type="password" placeholder="请输入新密码（6-16位英文和数字）" [(ngModel)]="form.newPassword">\n\n        </div>\n\n \n\n    </div>\n\n\n\n    <div class="buttons">\n\n        <button class="login" (click)="modifyAction()">完成修改</button>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\me\modify-password\modify-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ModifyPasswordPage);
    return ModifyPasswordPage;
}());

//# sourceMappingURL=modify-password.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newslist_newslist__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__articles_details_articles_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historylist_historylist__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alert, http, nat) {
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.http = http;
        this.nat = nat;
        this.banners = [];
        this.timeEvent = null;
        this.hotNews = [];
        this.y1 = 0;
        this.x1 = 0;
        this.hotLottery = [];
        this.newHotDetail = [];
        this.hotLotteryTimes = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.getData();
        }, 1500);
        this.getHotLottery();
    };
    HomePage.prototype.timeInterval = function () {
        var _this = this;
        if (!this.timeEvent) {
            this.timeEvent = setInterval(function () {
                _this.scrollNumber();
            }, 50);
        }
    };
    //进入
    HomePage.prototype.ionViewDidEnter = function () {
        this.timeInterval();
        this.getDetailLottery();
        console.log('enter');
    };
    //离开
    HomePage.prototype.ionViewDidLeave = function () {
        if (this.timeEvent) {
            clearInterval(this.timeEvent);
            this.hotLotteryTimes = [];
            this.timeEvent = null;
        }
        clearInterval(this.openTimeInterval);
    };
    HomePage.prototype.scrollNumber = function () {
        var _this = this;
        this.y1 -= 1;
        this.x1 -= 1;
        this.noticeText.forEach(function (ele, index, array) {
            var width = 'translateX(-' + (array[array.length - 1].nativeElement.clientLeft + array[array.length - 1].nativeElement.clientWidth) + 'px)';
            ele.nativeElement.style.transform = 'translateX(' + _this.x1 + 'px)';
            if (array[array.length - 1].nativeElement.style.transform == width) {
                _this.x1 = 0;
                ele.nativeElement.style.transform = 'translateX(0px)';
            }
        });
    };
    HomePage.prototype.getHotLottery = function () {
        var self = this;
        var url = ["otherWay", "/openLottery/recommendLottery"];
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                self.hotLottery = res;
                self.getDetailLottery();
            }
        });
    };
    HomePage.prototype.getData = function () {
        var self = this;
        var url = ['otherWay', '/openLottery/notices'];
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                self.noticeWord = res[0].content;
            }
        });
        url = ['otherWay', '/openLottery/hotNews'];
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                for (var i = 0; i < res.length; i++) {
                    res[i].newsIntroduce = res[i].newsIntroduce.replace('&nbsp;', '');
                }
                self.hotNews = res;
            }
        });
    };
    HomePage.prototype.getDetailLottery = function () {
        console.log('获取详情');
        var self = this;
        var url = '/api/lotteryOpenNumber/getOpenNumberInfomation';
        for (var i = 0; i < this.hotLottery.length; i++) {
            var params = { lotteryCategoryCode: self.hotLottery[i].lotteryCategoryCode };
            self.http.post(url, params, function (res, err) {
                if (!err) {
                    self.getTime(res.nextOpenTime, res.lotteryCategoryCode, res.lotteryPeriods, res.lotteryOpenNumber);
                }
            });
        }
    };
    HomePage.prototype.getTime = function (date, code, periods, nums) {
        var self = this;
        var openTime = (new Date(date)).getTime() / 1000;
        var currentTime = (new Date()).getTime() / 1000;
        var time;
        if (currentTime < openTime) {
            time = Math.floor(openTime - currentTime);
        }
        else {
            time = 0;
        }
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        var minutesStr = ('0' + minutes).substr(-2);
        var secondsStr = ('0' + seconds).substr(-2);
        var itemTime = {
            time: time,
            minutes: minutes,
            seconds: seconds,
            minutesStr: minutesStr,
            secondsStr: secondsStr
        };
        self.hotLotteryTimes.push(itemTime);
        self.hotLottery.forEach(function (item) {
            if (item.lotteryCategoryCode == code) {
                if (item.lotteryPeriods != periods) {
                    item.itemTime = itemTime;
                    item.lotteryPeriods = periods;
                    var newNums_1 = [];
                    nums.split(',').forEach(function (element) {
                        newNums_1.push(parseInt(element));
                    });
                    item.nums = newNums_1;
                }
            }
        });
        if (self.hotLotteryTimes.length == self.hotLottery.length) {
            this.newHotDetail = this.hotLottery;
            this.openTimeInterval = setInterval(self.timeScroll.bind(this), 1000);
            this.getDataInterval = setInterval(self.dataScroll.bind(this), 10000);
        }
    };
    HomePage.prototype.timeScroll = function () {
        var self = this;
        this.newHotDetail.forEach(function (item) {
            //console.log(item.itemTime.time)
            if (item.itemTime.time > 0) {
                item.itemTime.time--;
                item.itemTime.minutes = Math.floor(item.itemTime.time / 60);
                item.itemTime.seconds = Math.floor(item.itemTime.time % 60);
                item.itemTime.minutesStr = ('0' + item.itemTime.minutes).substr(-2);
                item.itemTime.secondsStr = ('0' + item.itemTime.seconds).substr(-2);
            }
            else {
                item.itemTime.time = '正在开奖中';
                return false;
            }
        });
    };
    HomePage.prototype.dataScroll = function () {
        var self = this;
        this.newHotDetail.forEach(function (item) {
            if (item.itemTime.time > 0) {
                return;
            }
            else {
                self.getOnlyData(item.lotteryCategoryCode);
                return false;
            }
        });
    };
    HomePage.prototype.getOnlyData = function (code) {
        var self = this;
        var url = '/api/lotteryOpenNumber/getOpenNumberInfomation';
        var params = { lotteryCategoryCode: code };
        self.http.post(url, params, function (res, err) {
            if (!err) {
                self.getTime(res.nextOpenTime, res.lotteryCategoryCode, res.lotteryPeriods, res.lotteryOpenNumber);
            }
        });
    };
    HomePage.prototype.gotoNewList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__newslist_newslist__["a" /* NewslistPage */]);
    };
    HomePage.prototype.gotoArticle = function (id, type) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__articles_details_articles_details__["a" /* ArticlesDetailsPage */], { id: id, type: type });
    };
    HomePage.prototype.gotoHistory = function (code, parentCode, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__historylist_historylist__["a" /* HistoryListPage */], { code: code, parentCode: parentCode, title: title });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('noticeText'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HomePage.prototype, "noticeText", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <div class="logo">\n\n        <img src="./assets/imgs/icon@3x.png"/>\n\n        <span class="appName">中金开奖</span>\n\n    </div>\n\n    <div class="notice">\n\n      <img src="./assets/imgs/gonggao@3x.png"/>\n\n      <div class="notice-box">\n\n        <span class="noticeText" #noticeText>{{noticeWord}}</span>\n\n      </div>      \n\n    </div>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <topimg></topimg>\n\n  <div class="open-number-info" *ngIf="hotLotteryTimes!=[]" >\n\n    <div class="item" *ngFor="let item of newHotDetail;let i=index" (click)="gotoHistory(item.lotteryCategoryCode,item.parentLotteryCode,item.lotteryCategoryName)">\n\n      <div class="time">\n\n        <p>第 <span class="danger">{{item.lotteryPeriods}}</span> 期</p>\n\n        <p class="danger" *ngIf="item.itemTime.time==\'正在开奖中\'" >正在开奖中</p>\n\n        <p *ngIf="item.itemTime.time!=\'正在开奖中\'">距离下次开奖: <span class="danger">{{item.itemTime.minutesStr}}:{{item.itemTime.secondsStr}}</span></p>\n\n      </div>\n\n      <div class="lottery"> \n\n        <img src="./assets/allLotterys/{{item.lotteryCategoryCode}}.png"/>\n\n        <div class="right">\n\n          <p class="name">{{item.lotteryCategoryName}}</p>\n\n          <div class="numbers">\n\n            <div *ngIf="item.parentLotteryCategoryCode != \'pk10\' && item.parentLotteryCategoryCode != \'k3\'">\n\n              <p class="bar" *ngFor="let num of item.nums">{{num}}</p>\n\n            </div>\n\n            <div *ngIf="item.parentLotteryCategoryCode == \'pk10\'">\n\n              <img *ngFor="let num of item.nums" src="./assets/gameIcon/pk{{num}}.png">\n\n            </div>\n\n            <div *ngIf="item.parentLotteryCategoryCode == \'k3\'">\n\n              <img *ngFor="let num of item.nums" src="./assets/gameIcon/ks{{num}}.png">\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="hot-info">\n\n    <div class="hot-info-title" (click)=\'gotoNewList()\'>\n\n      <img class="icon_1" src="./assets/imgs/juxing@3x.png"/>\n\n      <img class="icon_2" src="./assets/imgs/hot@3x.png"/>\n\n      <span>热点资讯</span>\n\n    </div>\n\n    <div class="hot-info-body">\n\n      <ul class="hot-list">\n\n        <li *ngFor="let item of hotNews" (click)=\'gotoArticle(item["id"],"news")\'>\n\n          <p>{{item.newsTitle}}</p>\n\n          <span>{{item.newsIntroduce}}</span>\n\n        </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__articles_details_articles_details__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewslistPage = /** @class */ (function () {
    function NewslistPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.pageOne = 0;
        this.pageTwo = 0;
        this.showType = 'news';
    }
    NewslistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewslistPage');
        this.getData('e');
        this.getSkills('e');
    };
    NewslistPage.prototype.gotoArticle = function (id, type) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__articles_details_articles_details__["a" /* ArticlesDetailsPage */], { id: id, type: type });
    };
    NewslistPage.prototype.getData = function (e) {
        var self = this;
        var url = ['otherWay', '/openLottery/newsTitle'];
        var options = { page: self.pageOne, size: 6 };
        this.http.post(url, options, function (res, err) {
            if (!err) {
                if (res.length == 0) {
                    self.pageOne = 'complete';
                }
                for (var i = 0; i < res.length; i++) {
                    res[i].newsIntroduce = res[i].newsIntroduce.replace('&nbsp;', '');
                }
                if (self.pageOne == 0) {
                    self.hotNews = res;
                }
                else {
                    self.hotNews = self.hotNews.concat(res);
                    e.complete();
                }
            }
        });
    };
    NewslistPage.prototype.getSkills = function (e) {
        var self = this;
        var url = ['otherWay', '/openLottery/skillTitle'];
        var options = { page: self.pageTwo, size: 6 };
        this.http.post(url, options, function (res, err) {
            if (!err) {
                if (res.length == 0) {
                    self.pageTwo = 'complete';
                }
                for (var i = 0; i < res.length; i++) {
                    res[i].newsIntroduce = res[i].newsIntroduce.replace('&nbsp;', '');
                }
                if (self.pageTwo == 0) {
                    self.skills = res;
                }
                else {
                    self.skills = self.skills.concat(res);
                    e.complete();
                }
            }
        });
    };
    NewslistPage.prototype.changeShow = function (type) {
        this.showType = type;
    };
    NewslistPage.prototype.doInfinite = function (e) {
        if (this.showType == 'news') {
            if (this.pageOne == 'complete') {
                e.complete();
                return;
            }
            this.pageOne++;
            this.getData(e);
        }
        else {
            if (this.pageTwo == 'complete') {
                e.complete();
                return;
            }
            this.pageTwo++;
            this.getSkills(e);
        }
    };
    NewslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newslist',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\newslist\newslist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>彩票资讯</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <topimg></topimg>\n    <div class="hot-info">\n      <div class="hot-info-title">\n        <div class="biaoQian" (click)="changeShow(\'news\')">\n          <img class="icon_1" src="./assets/imgs/juxing@3x.png"/>\n          <img class="icon_2" src="./assets/imgs/hot@3x.png"/>\n          <span>热点资讯</span>\n        </div>\n        <div class="biaoQian" (click)="changeShow(\'skills\')">\n          <img class="icon_1" src="./assets/imgs/juxing@3x.png"/>\n          <img class="icon_2" src="./assets/imgs/wanjiajiqiao@3x.png"/>\n          <span>玩家技巧</span>\n        </div>\n      </div>\n      <div class="hot-info-body" *ngIf="showType==\'news\'" >\n        <ul class="hot-list">\n          <li *ngFor="let item of hotNews" (click)=\'gotoArticle(item["id"],"news")\'>\n            <p>{{item.newsTitle}}</p>\n            <span>{{item.newsIntroduce}}</span>\n          </li>\n        </ul>\n        <div class="notice" *ngIf="pageOne==\'complete\'" >别拉了 没数据了</div>\n      </div>\n\n      <div class="hot-info-body" *ngIf="showType==\'skills\'">\n        <ul class="hot-list">\n          <li *ngFor="let item of skills" (click)=\'gotoArticle(item["id"],"news")\'>\n            <p>{{item.newsTitle}}</p>\n            <span>{{item.newsIntroduce}}</span>\n          </li>\n        </ul>\n        <div class="notice" *ngIf="pageOne==\'complete\'" >别拉了 没数据了</div>\n      </div>\n      \n    </div>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)"> \n      <ion-infinite-scroll-content\n       loadingSpinner="bubbles"\n       loadingText="加载中..."> \n       </ion-infinite-scroll-content> \n    </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\newslist\newslist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NewslistPage);
    return NewslistPage;
}());

//# sourceMappingURL=newslist.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historylist_historylist__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HallPage = /** @class */ (function () {
    function HallPage(navCtrl, http, nat, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.nat = nat;
        this.navParams = navParams;
        this.hallData = [];
        this.timeEvent = null;
        this.y1 = 0;
        this.x1 = 0;
        this.LotteryDetail = [];
    }
    HallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HallPage');
        this.getData();
    };
    HallPage.prototype.timeInterval = function () {
        var _this = this;
        if (!this.timeEvent) {
            this.timeEvent = setInterval(function () {
                _this.scrollNumber();
            }, 50);
        }
    };
    //进入
    HallPage.prototype.ionViewDidEnter = function () {
        this.timeInterval();
        console.log('enter');
    };
    //离开
    HallPage.prototype.ionViewDidLeave = function () {
        if (this.timeEvent) {
            clearInterval(this.timeEvent);
            this.timeEvent = null;
        }
    };
    HallPage.prototype.scrollNumber = function () {
        var _this = this;
        this.y1 -= 1;
        this.x1 -= 1;
        this.noticeText.forEach(function (ele, index, array) {
            var width = 'translateX(-' + (array[array.length - 1].nativeElement.clientLeft + array[array.length - 1].nativeElement.clientWidth) + 'px)';
            ele.nativeElement.style.transform = 'translateX(' + _this.x1 + 'px)';
            if (array[array.length - 1].nativeElement.style.transform == width) {
                _this.x1 = 0;
                ele.nativeElement.style.transform = 'translateX(0px)';
            }
        });
    };
    HallPage.prototype.getData = function () {
        var self = this;
        var url = ['otherWay', '/openLottery/notices'];
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                self.noticeWord = res[0].content;
            }
        });
        url = ['otherWay', '/openLottery/allLottery'];
        this.http.post(url, {}, function (res, err) {
            if (!err) {
                console.log(res);
                res.forEach(function (element) {
                    self.hallData = self.hallData.concat(element['list']);
                });
                console.log(self.hallData);
            }
        });
    };
    HallPage.prototype.gotoHistory = function (code, parentCode, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__historylist_historylist__["a" /* HistoryListPage */], { code: code, parentCode: parentCode, title: title });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('noticeText'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HallPage.prototype, "noticeText", void 0);
    HallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hall',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\hall\hall.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <div class="logo">\n\n          <img src="./assets/imgs/icon@3x.png"/>\n\n          <span class="appName">中金开奖</span>\n\n      </div>\n\n      <div class="notice">\n\n        <img src="./assets/imgs/gonggao@3x.png"/>\n\n        <div class="notice-box">\n\n          <span class="noticeText" #noticeText>{{noticeWord}}</span>\n\n        </div>      \n\n      </div>\n\n      <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <topimg></topimg>\n\n  <div class="lotterys">\n\n    <div class="item" *ngFor="let item of hallData" (click)="gotoHistory(item.lotteryCategoryCode,item.parentLotteryCode,item.lotteryCategoryName)">\n\n      <img src="./assets/allLotterys/{{item.lotteryCategoryCode}}.png">\n\n      <div class="right">\n\n        <p class="name">{{item.lotteryCategoryName}}</p>\n\n        <p class="info">{{item.openTimeRule}}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\hall\hall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HallPage);
    return HallPage;
}());

//# sourceMappingURL=hall.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sangcixiang on 2019/1/8.
 */

var UserService = /** @class */ (function () {
    function UserService() {
        this.loginToken = null;
        this.login = false;
    }
    UserService.prototype.setUserInfo = function (user) {
        this.login = true;
        this.account = user.accout;
        this.email = user.email;
        this.gameTimes = user.gameTimes;
        this.giftMoney = user.giftMoney;
        this.integel = user.integel;
        this.loginToken = user.loginToken;
        this.nickName = user.nickName;
        this.qq = user.qq;
        this.sex = user.sex;
        this.signerStatus = user.signerStatus;
        this.uid = user.uid;
        this.wechat = user.wechat;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custompipe_custompipe__ = __webpack_require__(1208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transnumber_transnumber__ = __webpack_require__(1209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__custompipe_custompipe__["a" /* CustompipePipe */],
                __WEBPACK_IMPORTED_MODULE_2__transnumber_transnumber__["a" /* TransnumberPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__custompipe_custompipe__["a" /* CustompipePipe */],
                __WEBPACK_IMPORTED_MODULE_2__transnumber_transnumber__["a" /* TransnumberPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsDetailsPage = /** @class */ (function () {
    function NewsDetailsPage(navCtrl, http, domSanitizer, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.navParams = navParams;
        this.showLoading = true;
        this.id = this.navParams.get("id");
    }
    NewsDetailsPage.prototype.ionViewDidLoad = function () {
        var url = "/api/lotteryNews/getLotteryNewsById";
        var self = this;
        this.http.post(url, { id: this.id }, function (res, err) {
            if (!err) {
                self.showLoading = false;
                self.data = res;
                self.html = self.domSanitizer.bypassSecurityTrustHtml(res.newsContent);
            }
        });
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-news-details',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\news-details\news-details.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>新闻资讯</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <loading *ngIf="showLoading"></loading>\n\n  <div class="news-content" *ngIf="!showLoading">\n\n    <h2>{{data.newsTitle}}</h2>\n\n    <p class="time">{{data.postedTime}}</p>\n\n    <div class="content" [innerHTML]="html"></div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\home\news-details\news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NewsDetailsPage);
    return NewsDetailsPage;
}());

//# sourceMappingURL=news-details.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(565);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_badge__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_dialogs__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_spinner_dialog__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_toast__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_browser_tab__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_echarts__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_userService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_components_module__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_pipes_module__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home_home__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_home_lottery_history__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_plan_plan__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_expert_expert__ = __webpack_require__(1217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_home_lottery_lottery__ = __webpack_require__(1218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_news_news__ = __webpack_require__(1219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_news_details_news_details__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_hall_hall__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_historylist_historylist__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_newslist_newslist__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_statistic_statistic__ = __webpack_require__(1220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_prediction_prediction__ = __webpack_require__(1221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_lotterys_lotterys__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_plan_details_plan_details__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_articles_details_articles_details__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_forecast_forecast__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_forecast_details_details__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_me_me__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_me_find_find__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_me_collection_collection__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_me_setting_setting__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_me_userInfo_userInfo__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_me_about_about__ = __webpack_require__(1222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_me_modify_password_modify_password__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_account_find_password_find_password__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_account_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_account_register_register__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_trend_trend__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_tabs_tabs__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_forecast_forecast__["a" /* ForecastPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_trend_trend__["a" /* TrendPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_me_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_lottery_lottery__["a" /* LotteryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_lotterys_lotterys__["a" /* LotterysPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_me_userInfo_userInfo__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_me_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_me_modify_password_modify_password__["a" /* ModifyPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_me_find_find__["a" /* FindPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_me_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_expert_expert__["a" /* ExpertPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_account_find_password_find_password__["a" /* FindPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_account_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_forecast_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_account_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_statistic_statistic__["a" /* StatisticPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_prediction_prediction__["a" /* PredictionPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_plan_details_plan_details__["a" /* PlanDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_articles_details_articles_details__["a" /* ArticlesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_historylist_historylist__["a" /* HistoryListPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_hall_hall__["a" /* HallPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_newslist_newslist__["a" /* NewslistPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_lottery_history__["a" /* HistoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_22_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: '返回',
                    tabsHideOnSubPages: 'true'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_forecast_forecast__["a" /* ForecastPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_trend_trend__["a" /* TrendPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_me_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_lottery_lottery__["a" /* LotteryPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_lotterys_lotterys__["a" /* LotterysPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_me_userInfo_userInfo__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_me_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_me_modify_password_modify_password__["a" /* ModifyPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_me_find_find__["a" /* FindPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_me_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_plan_plan__["a" /* PlanPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_expert_expert__["a" /* ExpertPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_account_find_password_find_password__["a" /* FindPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_account_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_forecast_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_account_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_statistic_statistic__["a" /* StatisticPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_prediction_prediction__["a" /* PredictionPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_plan_details_plan_details__["a" /* PlanDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_articles_details_articles_details__["a" /* ArticlesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_historylist_historylist__["a" /* HistoryListPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_hall_hall__["a" /* HallPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_newslist_newslist__["a" /* NewslistPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_lottery_history__["a" /* HistoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_action_sheet__["a" /* ActionSheet */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_spinner_dialog__["a" /* SpinnerDialog */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_badge__["a" /* Badge */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_dialogs__["a" /* Dialogs */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__service_httpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_25__service_NativeService__["a" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_26__service_userService__["a" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_NativeService__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_userService__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, nat, user, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            nat.storageGetValue("userInfo", function (res) {
                if (res) {
                    var userJSON = JSON.parse(res);
                    console.log(userJSON);
                    user.setUserInfo(userJSON);
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_httpService__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_NativeService__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticlesDetailsPage = /** @class */ (function () {
    function ArticlesDetailsPage(navCtrl, http, clip, nat, domSanitizer, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.clip = clip;
        this.nat = nat;
        this.domSanitizer = domSanitizer;
        this.navParams = navParams;
        this.data = {
            newsTitle: '',
            postedTime: '',
            newsContent: ''
        };
    }
    ArticlesDetailsPage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    ArticlesDetailsPage.prototype.getData = function () {
        this.id = this.navParams.get("id");
        this.type = this.navParams.get("type");
        var url = ['otherWay', "/openLottery/articleDetails"];
        var self = this;
        this.http.post(url, { id: this.id }, function (res, err) {
            if (!err) {
                self.data = res;
                console.log(self.data.newsTitle);
            }
        });
    };
    ArticlesDetailsPage.prototype.copyAction = function () {
        var _this = this;
        this.clip.copy(this.data.nextPeriod).then(function (res) {
            _this.nat.showToast("复制成功");
        });
    };
    ArticlesDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-articles-details',template:/*ion-inline-start:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\articles-details\articles-details.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>彩票资讯</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="articles-content">\n\n    <h3>{{data.newsTitle}}</h3>\n\n    <div class="info">\n\n      <p>{{data.postedTime}}</p>\n\n      <!-- <p>发表时间:{{data.createTime | date:\'yyyy-MM-dd hh:mm\'}}</p> -->\n\n    </div>\n\n    <div class="html" [innerHTML]="data.newsContent"></div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\youyou\forecast_ionic-master\forecast_ionic\src\pages\articles-details\articles-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__service_httpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_5__service_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ArticlesDetailsPage);
    return ArticlesDetailsPage;
}());

//# sourceMappingURL=articles-details.js.map

/***/ })

},[560]);
//# sourceMappingURL=main.js.map