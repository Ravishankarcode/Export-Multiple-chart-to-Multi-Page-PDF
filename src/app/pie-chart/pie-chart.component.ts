import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Java'], ['Dot Net'], ['C ++'], ['Java Script'], ['Python']];
  public pieChartData: SingleDataSet = [30, 10, 20, 15, 25];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  exportAsPDF(divId)
{
    let data = document.getElementById(divId);  
    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
    // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
    pdf.save('Pie-Chart.pdf');   
  }); 
}

}
