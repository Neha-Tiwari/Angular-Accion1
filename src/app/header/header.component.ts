import { Component, OnInit } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  basePath = 'assets/img//';
  
  /* headerarray for Header section starts here */

  clogoarray = [{clogo1:`${this.basePath}logo.svg`}];
  headerarray= [
    {
      ldesc1:'What do we do',
      lhead1:'Capabilities'
    },
    {
      ldesc1:'Whom do we serve',
      lhead1:'Customers'
    },
    {
      ldesc1:'What have we',
      lhead1:'Case Studies',
    },
    {
      ldesc1:'Work with us',
      lhead1:'Careers',
    }
    /*
    {
      lhead:'Menu',
      search:'#search',
      talkbutton:'#talk'
    }
    */
  ];
  /* headerarray for Header section ends here */
  constructor() { }

  ngOnInit() {
  }

}
