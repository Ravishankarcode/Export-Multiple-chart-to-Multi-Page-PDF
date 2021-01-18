import { Component } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-charts-app';

/*  exportAsPDF(divId)
{
    let data = document.getElementById(divId); 

    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('l', 'cm', 'a4'); 
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
    pdf.save('Charts.pdf');   
  });

}*/

exportAsPDF(card1,card2,card3)
{
    let data1 = document.getElementById(card1); 
    let data2 = document.getElementById(card2);
    let data3 = document.getElementById(card3);

    let pdf = new jspdf('l', 'cm', 'a4');
  
    html2canvas(data1).then(canvas => {

      const contentDataURL = canvas.toDataURL('image/png')      
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0); 
      pdf.addPage();   
  
    });

    html2canvas(data2).then(canvas => {

      const contentDataURL = canvas.toDataURL('image/png')      
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0); 
      pdf.addPage();   
       
    });

  html2canvas(data3).then(canvas => {

    const contentDataURL = canvas.toDataURL('image/png')      
    pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);    

    pdf.save('Charts.pdf');   
  });
  
}

}
