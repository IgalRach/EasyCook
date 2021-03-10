import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CookingTermService } from '../../services/cooking-term.service';
import { CookingTerm } from '../cookingTerm'


@Component({
  selector: 'app-cooking-term',
  templateUrl: './cooking-term.component.html',
  styleUrls: ['./cooking-term.component.css']
})
export class CookingTermComponent implements OnInit {

  @Output() refresh = new EventEmitter<string>();

  cookingTermArr: Array<CookingTerm>;
  @Input() Title=""; 
  @Input() Des=""; 
  show=false;
  showAd=false;
  term:string="";

  constructor(private service: CookingTermService) {
     this.cookingTermArr = new Array<CookingTerm>();
    }

  ngOnInit() {
    this.createTable();
  }

  createTable(){
    this.cookingTermArr=[];
    this.service.getCookingTerms().subscribe(
      (data: any) => {
        data.forEach((element: any) => {
          this.cookingTermArr.push(element);
        });
      }
    );
  }


  addCookingterm(){
    this.service.createCookingTerm(this.Title,this.Des).subscribe(
      (data: any) => {
        console.log("succsess");
        this.showAd=false;
        this.createTable();
      }
    );
  }

  editTerm(cookingTerm:CookingTerm) {
    console.log("succsess");
    this.service.updateCookingTerm(cookingTerm,this.Title,this.Des).subscribe(
      (data: any) => {
        console.log("succsess");
        this.refresh.emit("Refresh");
        this.show=false;
        this.createTable();
      }
    );
  }

  showAdd(){
    return this.showAd;
  }
  showEdit(){
    return this.show;
  }

  startEditing(){
    this.show=true;
  }
  stopEdit(){
    this.show=false;
  }

  startAdd(){
    this.showAd=true;
  }
  stopAdd(){
    this.showAd=false;
  }



  deleteTerm(id: string) {
    this.service.deleteCookingTerm(id).subscribe(
      (data: any) => {
        console.log("successfuly deleted");
        this.createTable();
      }
    );
  }


  handleRefresh(action:string){
    this.createTable();
  }

  scrape(){
    this.service.scrape().subscribe(
      (data:any)=>{
        this.createTable();
      }
    );
  }
}