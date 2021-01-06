import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AuthorModel} from './authors/authors.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseurl='http://localhost:3000/authors';
   // readonly baseurl='http://localhost:3000/books';
  selectedProduct: AuthorModel | undefined;
  constructor(private http:HttpClient) { }
 
  getBooks(){
    
    return this.http.get("http://localhost:3000/books");
    console.log(this.getBooks);
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3000/books/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  getProduct(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  editBook(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete("http://localhost:3000/books/remove/"+id)

  }
  readMore(id:any)
  {
    return this.http.get("http://localhost:3000/books/singlebook/"+id)
  }


// authors operations
getAuthors(){
    
  return this.http.get("http://localhost:3000/authors/");
  console.log(this.getAuthors);
}

newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/authors/add",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/authors/"+id);
  }
  editAuthor(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/edit",product)
    .subscribe(data =>{console.log(data)})
  }
  // editAuthor(_id:any,item:AuthorModel){
  //   return this.http.put(this.baseurl+`/${_id}`,{"author":item})
  //   .subscribe((data)=>{
  //     console.log(data);
  //   })
  // }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/authors/delete/"+id)

  }
}
