import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../recipe"

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  recipe: Recipe = {
    recipename:'Pizza',
    description:'2 eggs , 2 jars of tommatos,dwqfefhjoifjoirgjr.....',
   category:'Italian',
    //  recipePic:[
    //      {
    //      img: String
    //      }
    //   ],

    // keyword:{type: String},
  }
  path='https://placehold.it/100x100'

  Mypath='100x100'

  bar='';
  foo(val:string){
    this.bar=val;
  }

  datee= new Date(2000,1,20);

}
