import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
/* import { Packer } from "docx";
import * as fs from 'file-saver';
import { DocumentCreator } from '../doc.generator'; */

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
    //aspectRatio: 1, // For Size Ratio of Chart
    maintainAspectRatio: true,
    //showLines:true,
    scales: {
      xAxes: [{
          gridLines: {
              offsetGridLines: true
          }
      }]
  }
  };
  barChartLabels: Label[] = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [ ];


  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Technical Competancy' }
  ];

exportAsPDF(divId)
{
    let data = document.getElementById(divId);  
    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('l', 'cm', 'a3'); //Generates PDF in landscape mode
    // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    pdf.text("Bar Chart",17,2);
    pdf.text("Technical Compt  Percentage",32,6);
    pdf.text("-----------------------  ---------------",32,6.5);
    pdf.text("C1             45%",35,8);
    pdf.text("C2             37%",35,8.5);
    pdf.text("C3             60%",35,9);
    pdf.text("C4             70%",35,9.5);
    pdf.text("C5             46%",35,10);
    pdf.text("C6             33%",35,10.5);
    pdf.addImage(contentDataURL, 'PNG', 1, 4, 29.7, 21.0);  
    pdf.save('Bar-Chart.pdf');   
  }); 
}

exportAsDOC(divId)
{

  let data = document.getElementById(divId);
  
 /* const documentCreator = new DocumentCreator();
  const doc = documentCreator.create();

  Packer.toBlob(doc).then(buffer => {
    console.log(buffer);
    fs.saveAs(buffer, "example.docx");
    console.log("Document created successfully");
  }); */

}

}
 