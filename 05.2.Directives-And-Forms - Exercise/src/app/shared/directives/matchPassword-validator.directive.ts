import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appMatchPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: MatchPasswordValidatorDirective,
        multi: true
    }]
})

export class MatchPasswordValidatorDirective implements Validator {
    @Input('appMatchPasswordValidator') appMatchPasswordValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const passwordValue = control.parent.get(this.appMatchPasswordValidator);
        if (passwordValue && passwordValue.value !== control.value) {
             return   {'notEqual': true} ;
        }
        return null;
    }
}


