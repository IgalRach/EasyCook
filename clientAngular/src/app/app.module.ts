import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UsersCounterComponent } from './users-counter/users-counter.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
// import { CookingTermComponent } from './models/cooking-term/cooking-term.component';
// import { RecipeComponent } from './models/recipe/recipe.component';
// import { CategoryComponent } from './models/category/category.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCookingTermComponent } from './add-cooking-term/add-cooking-term.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCookingTermComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutsModule,
    BrowserAnimationsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
