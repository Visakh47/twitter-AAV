import { TestBed } from '@angular/core/testing';

import { HttpsConverterInterceptor } from './https-converter.interceptor';

describe('HttpsConverterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpsConverterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpsConverterInterceptor = TestBed.inject(HttpsConverterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
