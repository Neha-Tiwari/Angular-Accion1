import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techstartup',
  templateUrl: './techstartup.component.html',
  styleUrls: ['./techstartup.component.css']
})
export class TechstartupComponent implements OnInit {

  basePath = 'assets/img//';
  
  /* startup & simgarray for tech & startup companies array starts here */
  startuparray = [
    {
      maintitle:'For Technology Companies / Startups',
      title:'Nurturing Ideas And Building Products with Emerging Technologies',
      desc:'Shorten the wait to go from ideas to products with our development accelerators, technology blueprints & frameworks that help you take the fastest route using emerging technologies. Looking for a partner to build or re-engineer digital products, talk to us.',
      link:'#startup',
      logo1:`${this.basePath}awlogo.png`,
      casestudy1:'How we helped a US-based healthcare startup design an innovative device & app that alters mood using ultrasound waves.',
      logo2:`${this.basePath}awlogo.png`,
      casestudy2:'How we designed a web-based personal wealth investment platform for a UK-based startup to disrupt the traditional market '
    }
  ];
  simgarray = [
    {img:`${this.basePath}technology.jpg`, icon:`${this.basePath}startup.svg`}

  ];
  /* startup & simgarray for tech & startup companies array ends here */
  constructor() { }

  ngOnInit() {
  }

}
