"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var users_mock_1 = require('./users.mock');
var AuthService = (function () {
    function AuthService() {
        this._user = null;
    }
    AuthService.prototype.login = function (user) {
        return Observable_1.Observable.of(this.fakeLogin(user)).delay(1000);
    };
    AuthService.prototype.fakeLogin = function (user) {
        var result = users_mock_1.MOCK_USERS.find(function (x) {
            return x.email === user.email && x.password === user.password;
        });
        if (!!result) {
            this._user = user;
        }
        return !!result;
    };
    AuthService.prototype.logout = function () {
        this._user = null;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return !!this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map