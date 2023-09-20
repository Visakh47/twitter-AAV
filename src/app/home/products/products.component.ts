import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/app.interface';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: product[];

  constructor(private apiService: ApiServiceService) { }
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data['products'];
      console.log(data['products']);
    });
  }


}
