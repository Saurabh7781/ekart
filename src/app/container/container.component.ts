import { Component } from '@angular/core';
import { log } from 'console';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  // name:string = "John Cena";

  // addToCart:number= 0;

  // product = {
  //   name: 'iphone',
  //   price: 999,
  //    color:'Red',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage :'/assets/images/1718531834045.jpg'
  // }

  // getDiscountedPrice(){
  //   return this.product.price -(this.product.price * this.product.discount/100)
  // }

  // // OnNameChange(event : any){

  // //   this.name = event.target.value;

  // // }
  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //   }

  // }
  // incrementCartValue(){
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
      
  //   }
  // }


  listOfString: string[] = ['s', 'a', 'u', 'r', 'a', 'b', 'h'];


}
