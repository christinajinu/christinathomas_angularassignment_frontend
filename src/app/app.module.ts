import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    NewbookComponent,
    UpdatebookComponent,
    SinglebookComponent,
    AuthorsComponent,
    NewauthorComponent,
    UpdateauthorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
