import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  bookItem={
    id:'',
    title:'',
    author:'',
    genre:'',
    image:''
  }
  
    ngOnInit(): void {
      let productId = localStorage.getItem("editBookId");
      this.productService.getProduct(productId).subscribe((data)=>{
        this.bookItem=JSON.parse(JSON.stringify(data));
    })
    }
    editBook()
    {    
      this.productService.editBook(this.bookItem);   
      alert("Success");
      this.router.navigate(['books']);
    }
  

}
