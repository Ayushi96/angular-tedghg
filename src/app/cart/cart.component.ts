import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  
  checkoutForm = this.formBuildere.group({
    name: '',
    address: ''
  });
  
  constructor(private cartService: CartService, 
    private formBuildere: FormBuilder,
  ) { }

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted!", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

    ngOnInit() {
  }

}