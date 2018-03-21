import { Component, OnInit } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { style } from '@angular/cli';

@Component({
  selector: 'app-ourclient',
  templateUrl: './ourclient.component.html',
  styleUrls: ['./ourclient.component.css']
})
export class OurclientComponent implements OnInit {

  basePath = 'assets/img//';
  /* clientarray for Our Client section starts here */
  clientlogoarray = [
    { img:`${this.basePath}amex-logo.png`, alt:'american express'} ,
    { img:`${this.basePath}amw-logo.png`, alt:'american express'},
    { img:`${this.basePath}awana-logo.png`, alt:'american express'},
    { img:`${this.basePath}ep-logo.png`, alt:'american express'},

    { img:`${this.basePath}awana-logo.png`, alt:'american express'},
    { img:`${this.basePath}rackspace-logo.png`, alt:'american express'},
    { img:`${this.basePath}ep-logo.png`, alt:'american express'},
    { img:`${this.basePath}amw-logo.png`, alt:'american express'},

    { img:`${this.basePath}amex-logo.png`, alt:'american express'},
    { img:`${this.basePath}ep-logo.png`, alt:'american express'},
    { img:`${this.basePath}awana-logo.png`, alt:'american express'},
    { img:`${this.basePath}rackspace-logo.png`, alt:'american express'}
  ];

/* clientarray for Our Client section ends here */
  constructor() { }

  ngOnInit() {
  }

}
