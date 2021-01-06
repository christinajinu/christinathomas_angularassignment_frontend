import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
  singlebook={
    id:'',
    title:'',
    author:'',
    genre:'',
    image:''
  }

  ngOnInit(): void {
  }
  readMore()
  {
    // this.productService.readMore(product._id).subscribe((data)=>{
      // this.productService.getProduct(product._id).subscribe((data)=>{
      // this.singlebook=JSON.parse(JSON.stringify(data));
       this.router.navigate(['singlebook']);
    }
  }

