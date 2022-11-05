import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  // product.component, ProductServisi kullanabilecek demek.
  constructor(private productService : ProductService, private activatedRoute : ActivatedRoute,
    private toastrService:ToastrService , private cartService : CartService) { }
  products : Product[] = [];
  dataLoaded = false;
  filterText = "";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      this.getProducts();
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response =>{
      this.products = response.data;
      this.dataLoaded = true;
    });
  } 

  getProductsByCategory(categoryId : number){
    this.productService.getProductsByCategory(categoryId).subscribe(response =>{
      this.products = response.data;
      this.dataLoaded = true;
    });
  } 

  addToCart(product:Product){
    this.toastrService.success("Ürün sepete eklendi",product.productName);
    this.cartService.addToCart(product);
  }
}
