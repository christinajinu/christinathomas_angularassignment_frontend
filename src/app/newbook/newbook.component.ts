import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {

  // constructor() { }
  constructor(private productService: ProductService,private router: Router){  } 
  bookItem={
    id:'',
    title:'',
    author:'',
    genre:'',
    image:''
  }
  
  ngOnInit()
  {
  }
  AddBook()
  {    
    this.productService.newBook(this.bookItem);
    // console.log("success");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}

