import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { CategoryComponent } from './models/category/category.component';
import { CookingTermComponent } from './models/cooking-term/cooking-term.component';
import { NewrecipeComponent } from './models/newrecipe/newrecipe.component';

const routes: Routes = [{
  path: '',
  component: LayoutsComponent,

  children: [
    {
      path: 'recipes',
      component: NewrecipeComponent,
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
