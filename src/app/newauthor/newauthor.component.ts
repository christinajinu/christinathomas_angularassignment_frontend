import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  authorItem={
    authorid:'',
    name:'',
    genre:'',
    books:'',
    image:''
  }
  
  ngOnInit()
  {
  }
  AddAuthor()
  {    
    this.productService.newAuthor(this.authorItem);
    // console.log("success");    
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
