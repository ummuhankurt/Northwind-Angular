import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart/cartItem';
import { CartItems } from 'src/app/models/cartItems/cartItems';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product : Product){
    let item = CartItems.find(c => c.product.productId === product.productId); // Eklenmek istenen ürün,cartItemsta varmı? Varsa tekrar ekleme quantitysini artır.
    if(item){
      item.quantity += 1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product : Product){
    let item = CartItems.find(c=> c.product.productId === product.productId);
    if(item){
      if(item.quantity >1)
      {
        item.quantity -=1;
      }
      else{
        CartItems.splice(CartItems.indexOf(item),1)
      }
    }

  }

  list() : CartItem[]{ // cart item arrayi döndürücem. 
    return CartItems; // bu da cart item arrayi.
  }
}
