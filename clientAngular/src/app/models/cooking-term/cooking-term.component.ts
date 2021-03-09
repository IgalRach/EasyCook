import { Component, Input, OnInit } from '@angular/core';
import { AddCookingTermComponent } from "../../add-cooking-term/add-cooking-term.component";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CookingTermService } from '../../services/cooking-term.service';
import { MatTableDataSource } from '@angular/material/table'
import { CookingTerm } from '../cookingTerm'


@Component({
  selector: 'app-cooking-term',
  templateUrl: './cooking-term.component.html',
  styleUrls: ['./cooking-term.component.css']
})
export class CookingTermComponent implements OnInit {

  cookingTermArr: Array<CookingTerm>;
  @Input() editTitle="Test title"; 
  @Input() editDes="Test body"; 
  show=false;
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

  editTerm(cookingTerm:CookingTerm) {
    console.log("succsess");
    this.service.updateCookingTerm(cookingTerm,this.editTitle,this.editDes).subscribe(
      (data: any) => {
        console.log("succsess");
        this.show=false;
      }
    );
  }

  showEdit(){
    return this.show;
  }
  startEditing(){
    // this.show=!this.show;
    this.show=true;
  }
  stopEdit(){
    this.show=false;
  }



  deleteTerm(id: string) {
    this.service.deleteCookingTerm(id).subscribe(
      (data: any) => {
        console.log("successfuly deleted");
        this.createTable();

      }

    );
  }


  // createCookingTerm(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = {};
  //   this.dialog.open(AddCookingTermComponent, dialogConfig);
  // }

}
