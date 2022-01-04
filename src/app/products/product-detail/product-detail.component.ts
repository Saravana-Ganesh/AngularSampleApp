import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../Iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = "Product Details";
  product:Iproduct|undefined;
  errorMessage = '';
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productService: ProductService) {

     }

  ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.pageTitle += id;
    if(id)
        this.getProduct(id);
  }
  getProduct(id:number){
      this.productService.getProduct(id).subscribe({
        next:product=>this.product = product,
        error:err=>this.errorMessage = err
      });
  }
  onBack(){
    this.router.navigate(['/products']);
  }

}
