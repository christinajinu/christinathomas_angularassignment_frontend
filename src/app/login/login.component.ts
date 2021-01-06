import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router){  } 
registerForm=new FormGroup(
  {
    email: new FormControl('',(Validators.required, Validators.pattern(/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/))),

    password:new FormControl('',(Validators.minLength(6),Validators.required))
  }
)
  ngOnInit(): void {
  }

}
