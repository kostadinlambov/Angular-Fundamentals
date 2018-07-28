import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidatorDirective,
        multi: true
    }]
})

export class PasswordValidatorDirective implements Validator {
    @Input('appPasswordValidator') inputPasswordValue: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return !/^[a-zA-Z0-9]*?$/.test(control.value) ? {'invalidPassword': true} : null;
    }
}


