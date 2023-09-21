import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiServiceService } from './api-service.service';
import { product, productParent } from '../app.interface';

describe('ApiServiceService', () => {
  let service: ApiServiceService;
  let testingController : HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ApiServiceService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('test for api endpoint',()=>{
    expect(service.api).toBe('https://dummyjson.com');
  })
  it('test for getting product from dummy json api',()=>{
    const mockProducts: product[] = [
      { id: 1, title: 'Product 1', description: 'Description 1' },
      { id: 2, title: 'Product 2', description: 'Description 2' },
    ];

    const mockResponse: productParent = {
      limit: 10,
      skip: 0,
      total: 2,
      products: mockProducts,
    };
    service.getProducts().subscribe((response) => {
      expect(response).toEqual(mockProducts);
    });

    const req = testingController.expectOne('https://dummyjson.com/products');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
    })
});