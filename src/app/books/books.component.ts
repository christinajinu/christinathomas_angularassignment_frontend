import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {BookModel} from './books.model';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent 
// implements OnInit
 {
   pageTitle: string = 'Books';
 imageWidth: number = 100;
 imageHeight: number = 100;
  // books: BookModel[] | undefined;
 

 books=[{
  id:'',
  title: '',
  author: '',
  genre: '',
  image: ''
 }]
 singlebook=[{
  id:'',
  title: '',
  author: '',
  genre: '',
  image: ''
 }]

  constructor(private router:Router,private http:HttpClient,private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  
  }
  editBook(item:any)
  {
    localStorage.setItem("editBookId", item._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(product:any)
  {
    this.productService.deleteBook(product._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== product);
      })
  

  }
  readMore(product:any)
  {
    this.productService.readMore(product._id).subscribe((data)=>{
      this.singlebook=JSON.parse(JSON.stringify(data));
    })
  }
}
