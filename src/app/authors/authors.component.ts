import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit 
{
  _id:string | undefined;
  pageTitle: string = 'Authors';
  imageWidth: number = 100;
  imageHeight: number = 100;
  authors=[{
    id:'',
    name: '',
    genre: '',
    books: '',
    image: ''
   }]
   constructor(private router:Router,private http:HttpClient,private productService: ProductService) { }

   ngOnInit() {
    this.productService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  
  }
  editAuthor(item:any)
  {
    localStorage.setItem("editAuthorId", item._id.toString());
    this.router.navigate(['edit']);
    // this.router.navigate([`/edit/${item._id}`]);

  }
  deleteAuthor(product:any)
  {
    this.productService.deleteAuthor(product._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== product);
      })

}
}
