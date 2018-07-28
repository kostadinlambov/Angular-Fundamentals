import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appNamesValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: NamesValidatorDirective,
        multi: true
    }]
})

export class NamesValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return !/^[A-Z]([a-zA-Z]+)?$/.test(control.value) ? {'invalidName': true} : null;
    }
}

