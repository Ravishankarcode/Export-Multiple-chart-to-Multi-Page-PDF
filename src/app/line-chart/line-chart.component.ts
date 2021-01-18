import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'JOB TITLE' },
  ];

  lineChartLabels: Label[] = ['Bigdata Developer', 'Fullstack Developer', 'DevOps Engineer', 'Data Analyst', 'React Developer', 'Technical Manager'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  exportAsPDF(divId)
{
    let data = document.getElementById(divId);  
    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
    // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
    pdf.save('Line-Chart.pdf');   
  }); 
}

}