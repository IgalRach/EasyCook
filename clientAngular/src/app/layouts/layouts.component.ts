import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  sideBarOpen= true;

  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
