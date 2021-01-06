import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'addbook',
    component:NewbookComponent
  },
  {
    path:'update',
    component:UpdatebookComponent
  },
  {
    path:'Read More',
    component:SinglebookComponent
  },
  {
    path:'authors',
    component:AuthorsComponent
  },
  {
    path:'addauthor',
    component:NewauthorComponent
  },
  {
    path:'edit',
    component:UpdateauthorComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
