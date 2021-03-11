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
  filterData: Array<CookingTerm>;
  @Input() Title=""; 
  @Input() Des=""; 
  @Input() cuttentItemId:string=""; 
  @Input() TitleSearch=""; 

  show=false;
  showAd=false;
  term:string="";

  constructor(private service: CookingTermService) {
     this.cookingTermArr = new Array<CookingTerm>();
     this.filterData = new Array<CookingTerm>();
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

  search(){
    this.filterData=[];
    this.service.getCookingTerms().subscribe(
      (data: any) => {
        data.forEach((element: any) => {
          if(element.title.includes(this.TitleSearch))
          this.filterData.push(element)
        });
      }
    );  
  }

  
  addCookingterm(){
    this.service.createCookingTerm(this.Title,this.Des).subscribe(
      (data: any) => {
        this.cookingTermArr=[];
        this.createTable();
        console.log("succsess");
        this.showAd=false;
      }
    );
  }

  editTerm() {
    console.log("succsess");
    this.service.updateCookingTerm(this.cuttentItemId,this.Title,this.Des).subscribe(
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

  startEditing(id:string){
    this.cuttentItemId=id;
    console.log(this.cuttentItemId);
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
