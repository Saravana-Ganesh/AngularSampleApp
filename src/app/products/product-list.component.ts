import { Component, OnDestroy, OnInit,ElementRef } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Subscription } from "rxjs";
import { Iproduct } from "./Iproduct";
import { ProductService } from "./product.service";
@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy{
    filteredProducts:Iproduct[] = [];
    errorMessage!: string;
    sub!: Subscription;


    constructor(private _productService:ProductService){

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngOnInit(): void {
      console.log("ngOnInit Method call")
      this.sub = this._productService.getProducts().subscribe({
        next:products=>{
          this.products = products;
          this.filteredProducts = this.products;
        },
        error:err=>this.errorMessage = err
      })
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    get listFilter():string{
      return this._listFilter;
    }

    performFilter(value: string): Iproduct[] {
      value = value.toLocaleLowerCase();
      return this.products.filter((product:Iproduct)=>{
        console.log(product);
        return product.productName.toLocaleLowerCase().includes(value);
      });
    }

    onRatingClicked(value:string):void{
        this.pageTitle = 'Product List '+value;
    }

    private _listFilter = '';
    imageWidth = 50;
    imageMargin =2;
    showImage = true;
    pageTitle:string = "Saravana Ganesh Product Management"
    products: Iproduct[] = [];
    toggleImage():void{
      this.showImage = !this.showImage;
    }
    TestBed: any
}