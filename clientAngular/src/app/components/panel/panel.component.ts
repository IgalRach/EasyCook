import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {RecipesService} from 'src/app/services/recipes.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    @Output() panel= new EventEmitter<string>();

  constructor(private recipeService : RecipesService) { }

  ngOnInit(): void {
  }
  
  onRefresh(){
    this.panel.emit("Refresh");
  }
  onAdd(recipename: string){
    this.recipeService.addRecipe(recipename).subscribe(()=>
    {
      this.panel.emit("refresh");
    });
  }

  onScrape(){
    this.recipeService.scrape().subscribe(()=>{
      this.panel.emit("Refresh");
    });
  }
}
