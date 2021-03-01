import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../recipe"


class Item{
  static nextId=0;
  constructor(public id? :number,public name?:string){
    this.id=id? id:Item.nextId++;
  }
} 

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
  onSave(){console.log('clicked');
  }

  title ='Hello';

  hello =false;
  onClick(){
    this.hello=!this.hello;
  }

  items:Item[] =[
    new Item(1,'foo'),
    new Item(2,'bar'),
    new Item(3,'hello'),
    new Item(4,'baz')
  ];
}
