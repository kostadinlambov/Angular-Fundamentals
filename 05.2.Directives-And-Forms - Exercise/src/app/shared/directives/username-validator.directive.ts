import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appUsernameValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: UsernameValidatorDirective,
        multi: true
    }]
})

export class UsernameValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return !/^[A-Z]([a-zA-Z0-9]+)?$/.test(control.value) ? {'invalidUsername': true} : null;
    }
}


