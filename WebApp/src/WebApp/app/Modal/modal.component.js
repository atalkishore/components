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
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
/*
 * App Component
 * Top Level Component
 */
var ModalComponent = (function () {
    function ModalComponent(modal, viewContainer) {
        this.modal = modal;
        modal.defaultViewContainer = viewContainer;
    }
    ModalComponent.prototype.openAlert = function () {
        return this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .open();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal-sel',
            viewProviders: bootstrap_1.BS_MODAL_PROVIDERS.slice(),
            templateUrl: '/app/Modal/modal.component.html'
        }), 
        __metadata('design:paramtypes', [bootstrap_1.Modal, core_1.ViewContainerRef])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map