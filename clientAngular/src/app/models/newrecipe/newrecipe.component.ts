import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { CategoryService } from '../../services/category.service';
import { Recipe } from '../recipe';
import { Category } from '../category';




@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})
export class NewrecipeComponent implements OnInit {
  recipesArr: Array<Recipe>
  categoryArr: Array<Category>;
  filterData: Array<Recipe>;
  @Input() Title: string = "";
  @Input() Des: string = "";
  @Input() recipePic: string = "";
  @Input() Category: string = "";
  @Input() propTime: string = "";
  @Input() ingredients: string = "";
  @Input() cuttentItemId: string = "";

  @Input() TitleSearch = "";
  show = false;
  showAd = false;

  constructor(private service: RecipesService, private categoryService: CategoryService) {
    this.recipesArr = new Array<Recipe>();
    this.categoryArr = new Array<Category>();
    this.filterData = new Array<Recipe>();
  }

  ngOnInit(): void {
    this.createTable();
    this.createCategoryList();
  }


  createTable() {
    this.recipesArr = [];
    this.service.getrecipes().subscribe(
      (data: any) => {
        data.forEach((element: any) => {
          this.recipesArr.push(element);
        });
      }
    );
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

  search() {
    this.filterData = [];
    this.service.getrecipes().subscribe(
      (data: any) => {

        data.forEach((element: any) => {
          if (element.recipename.includes(this.TitleSearch))
            this.filterData.push(element)
        });
      }
    );
  }


  addRecipe() {
    this.service.addRecipe(this.Title, this.Des, this.Category, this.recipePic, this.propTime, this.ingredients).subscribe(
      (data: any) => {
        console.log("succsess");
        this.createTable();
        this.showAd = false;

      }
    );
  }
  editRecipe() {
    console.log("succsess");
    this.service.updateRecipe(this.cuttentItemId, this.Title, this.Des, this.Category, this.recipePic, this.propTime, this.ingredients).subscribe(
      (data: any) => {
        console.log("succsess");
        this.show = false;
        this.createTable();
      }
    );
  }


  deleteRecipe(id: string) {
    this.service.deleteRecipe(id).subscribe(
      (data: any) => {
        console.log("successfuly deleted");
        this.createTable();
      }
    );
  }


  showAdd() {
    return this.showAd;
  }
  showEdit() {
    return this.show;
  }

  startEditing(id: string) {
    this.cuttentItemId = id;
    console.log(this.cuttentItemId);
    this.show = true;
  }
  stopEdit() {
    this.show = false;
  }

  startAdd() {
    this.showAd = true;
  }
  stopAdd() {
    this.showAd = false;
  }

}
