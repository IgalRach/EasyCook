import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartData: Array<any>;
  constructor() {
    this.chartData=new Array<any>();
   }

  ngOnInit(): void {
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    this.chartData.push([
    `Index ${i}`,
    Math.floor(Math.random() * 100)
    ]);
   }
 }

}
