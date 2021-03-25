import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const locs = [
      { applicationId: 'MSFT1', applicationDate: new Date('December 12, 2017 12:00:00'), typeCredit: 'test credit',
      amount: 5, currency: 'USD',
      expiryDate: new Date('December 12, 2018 12:00:00'), portLoadingCountry: 'England', portLoadingCity: 'London',
      portLoadingAddress: 'City Tower', portDischargeCountry: 'Brazil', portDischargeCity: 'Rio',
      portDischargeAddress: 'Stade de Brazil',
      goodsDescription: 'Calculators', goodsQuantity: 500, goodsWeight: 1000, goodsWeightUnit: 'kg', goodsUnitPrice: 1,
      goodsPurchaseOrderRef: 'test abc', placePresentationCountry: 'Brazil', placePresentationState: 'Rio',
      placePresentationCity: 'Rio',
      lastShipmentDate: new Date('December 14, 2017 12:00:00'), periodPresentation: 5,
      beneficiary: 'R3', issuer: 'HSBC', applicant: 'Microsoft', advisingBank: 'Bank of Corda', state: 'Active' }
    ];

    const locsummary = [
      { first: 'MSFT1', second: { beneficiary: 'Seller', applicant: 'Buyer', amount: 100, currency: 'USD',
        description: 'Mock product', status: 'Approved' }
      },
      { first: 'MSFT2', second: { beneficiary: 'Seller', applicant: 'Buyer', amount: 200, currency: 'USD',
        description: 'Mock product2', status: 'Approved' }
      },
      { first: 'MSFT3', second: { beneficiary: 'Seller', applicant: 'Buyer', amount: 3000, currency: 'USD',
        description: 'Mock product3', status: 'Shipped', advisingPayment: true, issuingPayment: false,
        buyerPayment: false }
      },
      { first: 'MSFT4', second: { beneficiary: 'Seller', applicant: 'Buyer', amount: 1234, currency: 'USD',
      description: 'Mock product4', status: 'Shipped', advisingPayment: true, issuingPayment: false,
      buyerPayment: false }
      }
    ];

    return {
      locs,
      locsummary
    };
  }
}
