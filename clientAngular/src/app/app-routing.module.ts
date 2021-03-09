import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { CategoryComponent } from './models/category/category.component';
import { CookingTermComponent } from './models/cooking-term/cooking-term.component';
import { RecipeComponent } from './models/recipe/recipe.component';

const routes: Routes = [{
  path: '',
  component: LayoutsComponent,

  children: [
    {
      path: 'recipes',
      component: RecipeComponent,
    },
    {
      path: 'cookingTerms',
      component: CookingTermComponent,
    },
    {
      path: 'categories',
      component: CategoryComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
