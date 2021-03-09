import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CookingTermService} from '../services/cooking-term.service';

@Component({
  selector: 'app-add-cooking-term',
  templateUrl: './add-cooking-term.component.html',
  styleUrls: ['./add-cooking-term.component.css']
})

export class AddCookingTermComponent implements OnInit {

  
  constructor( private service: CookingTermService, public dialogRef: MatDialogRef<AddCookingTermComponent>) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let des = (document.getElementById('description') as HTMLInputElement).value;
    


    if (name == null || name == '') { name = '0'; }

    if (des == null || des == '') { des = '0'; }
 
    this.service.createCookingTerm(name, des).subscribe();
  }


  onClose() {
    this.dialogRef.close();
  }
}
