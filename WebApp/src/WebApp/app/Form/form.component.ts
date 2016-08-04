import { Component } from '@angular/core';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup, FormControl, Validators
} from '@angular/forms';

@Component({
    selector: 'demo-form',
    templateUrl: '/app/form/form.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],

})
export class FormComponent {
    form: FormGroup;
    rdvalue: string='';
    textval: string = 'kk';
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            maleOrFemale: fb.group({
                male: fb.control('male', Validators.compose([this.maleOrFemaleValidator])),
                female: new FormControl('female', Validators.compose([this.maleOrFemaleValidator])),
            }),
            text: fb.control('text', Validators.required)
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
    maleOrFemaleValidator(c: FormControl): { [s: string]: boolean }  {
        if (c.value == 'male' || c.value == 'female') {
            console.log("male female OK")
        }
        else {
            console.log("male female NOK")
            return { noSelection: true }
        }
    }

}