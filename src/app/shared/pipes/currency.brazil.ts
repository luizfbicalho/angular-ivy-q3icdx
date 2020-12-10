import { PipeTransform, Pipe } from '@angular/core';
import { NumberFormatOptions, CldrIntlService } from '@progress/kendo-angular-intl';

@Pipe({ name: 'currencyBrazil' })
export class CurrencyBrazil implements PipeTransform {

  constructor(private intl: CldrIntlService) {

  }

  KendoFormat: NumberFormatOptions =
    {
      style: "currency",
      currency: "BRL",
      currencyDisplay: "symbol",
      maximumFractionDigits: 2,
      minimumIntegerDigits: 1,
      minimumFractionDigits: 2
    };

  transform(value) {
    return this.intl.formatNumber(value, this.KendoFormat);
  }
}
