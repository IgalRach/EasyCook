// import { Component } from '@angular/core';
// import {Recipe} from 'src/app/models/recipe';
// import { RecipesService } from 'src/app/services/recipes.service';
// import {CurrentRecipeService} from 'src/app/services/current-recipe.service'
// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent {
//   recipes: Recipe[] = [];

//   constructor(private recipeService: RecipesService,
//     private currentRecipeService: CurrentRecipeService) { }
//   ngOnInit() {
//     this.load();
//   }

//   load() {
//     this.recipeService.getrecipes().subscribe(data => {
//       this.recipes = data;
//     });
//   }

//   onClick(recipe: Recipe) {
//     this, this.currentRecipeService.changeCurrentRecipe(recipe);
//   }

//   handlePanel(action:string){
//     this.load();
//   }
// }
