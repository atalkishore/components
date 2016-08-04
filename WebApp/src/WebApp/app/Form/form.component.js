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
var forms_1 = require('@angular/forms');
var FormComponent = (function () {
    function FormComponent(fb) {
        this.rdvalue = '';
        this.textval = 'kk';
        this.form = fb.group({
            maleOrFemale: fb.group({
                male: fb.control('male', forms_1.Validators.compose([this.maleOrFemaleValidator])),
                female: new forms_1.FormControl('female', forms_1.Validators.compose([this.maleOrFemaleValidator])),
            }),
            text: fb.control('text', forms_1.Validators.required)
        });
    }
    FormComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    FormComponent.prototype.maleOrFemaleValidator = function (c) {
        if (c.value == 'male' || c.value == 'female') {
            console.log("male female OK");
        }
        else {
            console.log("male female NOK");
            return { noSelection: true };
        }
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'demo-form',
            templateUrl: '/app/form/form.component.html',
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map