import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
constructor(private productService: ProductService,private router: Router){  } 
  authorItem={
    id:'',
    name:'',
   
    genre:'',
    books:'',
    image:''
  }
  
    ngOnInit(): void {
      let productId = localStorage.getItem("editAuthorId");
      this.productService.getProduct(productId).subscribe((data)=>{
        this.authorItem=JSON.parse(JSON.stringify(data));
    })
    }
    editAuthor()
    {    
      this.productService.editAuthor(this.authorItem);   
      alert("Success");
      this.router.navigate(['authors']);
    }

}
