import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appYearValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: YearValidatorDirective,
        multi: true
    }]
})

export class YearValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        let year = Number(control.value)
        return year < 1950 || year > 2050 ? { 'invalidYear': true } : null;
    }
}
