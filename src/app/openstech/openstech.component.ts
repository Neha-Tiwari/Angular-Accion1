import { Component, OnInit } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-openstech',
  templateUrl: './openstech.component.html',
  styleUrls: ['./openstech.component.css']
})
export class OpenstechComponent implements OnInit {

  basePath = 'assets/img//';

  /* oimgarray & opensarray for Open Source Solutions starts here */
  oimgarray = [
    {img:`${this.basePath}retail.jpg`, icon:`${this.basePath}opensource.svg`}
  ];
  opensarray = [
    {
      maintitle:'Open Source Solutions',
      title:'Easy-to-use Scalable Affordable Technologies',
      desc:'Experience the freedom and flexibility of open source technologies for your IT environment with easy customization of features to align with your business needs.',
      link:'#opensource',
      logo1:`${this.basePath}awlogo.png`, 
      casestudy1:'How a travel agency saved costs on IT and staff by shifting to open source for accounting software',
      logo2:`${this.basePath}awlogo.png`, 
      casestudy2:'Learn How we built a conversational UI to assist staff and partners.'
    }
  ];
  /* oimgarray & opensarray for Open Source Solutions ends here */

  constructor() { }

  ngOnInit() {
  }

}
