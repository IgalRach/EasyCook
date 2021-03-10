import {  Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../category'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categotyArr: Array<Category>;
  @Input() Title=""; 
  showAd=false;

  constructor(private service: CategoryService) { 
    this.categotyArr = new Array<Category>();
  }

  ngOnInit(): void {
    this.createTable();
  }

  createTable(){
    this.categotyArr=[];
    this.service.getCategoeies().subscribe(
      (data: any) => {
        data.forEach((element: any) => {
          this.categotyArr.push(element);
        });
      }
    );
  }

  addCcategory(){
    this.service.createCategory(this.Title).subscribe(
      (data: any) => {
        console.log("succsess");
        this.showAd=false;
        this.createTable();
      }
    );
  }

  deleteTerm(categoryname: string) {
    this.service.deleteCookingTerm(categoryname).subscribe(
      (data: any) => {
        console.log("successfuly deleted");
        this.createTable();
      }
    );
  }

  showAdd(){
    return this.showAd;
  }
  
  startAdd(){
    this.showAd=true;
  }
  stopAdd(){
    this.showAd=false;
  }
}
