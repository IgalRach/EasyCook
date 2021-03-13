import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CategoryService } from '../../services/category.service';
import { Recipe } from '../recipe';
import { Category } from '../category';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  categoryArr: Array<Category>;
  @Input() Title: string = "";
  @Input() Des: string = "";
  @Input() recipePic: string = "";
  @Input() Category: string = "";
  @Input() propTime: string = "";
  @Input() ingredients: string = "";
  @Input() cuttentItemId: string = "";

  validation = false;
  showAd = false;

  constructor(private service: RecipesService, private categoryService: CategoryService) { 
    this.categoryArr = new Array<Category>();
  }

  ngOnInit(): void {
    this.createCategoryList();
  }

  createCategoryList() {
    this.categoryArr = [];
    this.categoryService.getCategoeies().subscribe(
      (data: any) => {
        data.forEach((element: any) => {
          this.categoryArr.push(element);
        });
      }
    );
  }

  addRecipe() {
    if ((!this.Title) || (!this.Des) || (!this.Category) || (!this.recipePic) || (!this.propTime) || (!this.ingredients)) {
      this.validation=true;
      this.ValidationErrors();
    }
    else {
      this.service.addRecipe(this.Title, this.Des, this.Category, this.recipePic, this.propTime, this.ingredients).subscribe(
        (data: any) => {
          this.validation = false;
          console.log("succsess");
        }
      );
    }
  }
  
  ValidationErrors() {
    return this.validation;
  }

  startAdd() {
    return this.showAd;
  }
  showAdd() {
    this.showAd = true;
    return this.startAdd();
  }
  stopAdd() {
    this.showAd = false;
    return this.validation=false;
  }

}
