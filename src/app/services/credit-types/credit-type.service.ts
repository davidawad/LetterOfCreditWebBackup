import { Injectable } from '@angular/core';
import { CreditType } from './credit-type'
import { CREDITTYPES } from './mock-credit-type'

@Injectable()
export class CreditTypeService {
    getCreditTypes(): Promise<CreditType[]> {
        return Promise.resolve(CREDITTYPES);
    }
}
