import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'
import { IData } from '../IData';
import * as d3 from "d3";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  chartData: Array<IData>;//Data
  private svg:any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private data = [
    {"Framework": "FramWork", "Stars": "value"},
  ];
number:string='4';

  constructor(private service: DashboardService) {
    this.chartData = new Array<IData>();
  }

  ngOnInit(): void {
    this.generateData();
   
  }


  generateData() {
    this.data.pop();
    this.service.groupBy().subscribe(
      (data: any) => {
        data.forEach((element: any) => { 
          this.number=element.total;
           if(element._id==null){
              element._id="null"
           }
          this.data.push( {"Framework": element._id, "Stars":this.number}, );
        }); 
        this.createSvg();
        this.drawBars(this.data);
      });

    
    console.log(this.data);
  }


//--------------------------------------------------D3 Bar Chart---------------------------------------

  private createSvg(): void {
    this.svg = d3.select("#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Framework))
    .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 20])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: { Framework: string; }) => x(d.Framework))
    .attr("y", (d: { Stars: d3.NumberValue; }) => y(d.Stars))
    .attr("width", x.bandwidth())
    .attr("height", (d: { Stars: d3.NumberValue; }) => this.height - y(d.Stars))
    .attr("fill", "#fffff");
  }
//------------------------------------------------End D3 Bar Chart---------------------------------------
}
