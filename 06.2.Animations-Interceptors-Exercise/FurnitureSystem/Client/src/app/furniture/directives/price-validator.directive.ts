import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appPriceValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PriceValidatorDirective,
        multi: true
    }]
})

export class PriceValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        let price = Number(control.value)
        return price < 0  ? { 'invalidPrice': true } : null;
    }
}
