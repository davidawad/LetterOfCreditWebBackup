import { Injectable } from '@angular/core';
import { Currency } from './currency'
import { CURRENCY } from './mock-currency'
import { WeightUnit } from './weight-unit'
import { WEIGHTUNIT } from './mock-weight-unit'

@Injectable()
export class CommonService {
    getCurrencies(): Promise<Currency[]> {
        return Promise.resolve(CURRENCY);
    }

    getWeightUnits(): Promise<WeightUnit[]> {
      return Promise.resolve(WEIGHTUNIT);
  }
}
