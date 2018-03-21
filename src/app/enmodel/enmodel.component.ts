import { Component, OnInit } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-enmodel',
  templateUrl: './enmodel.component.html',
  styleUrls: ['./enmodel.component.css']
})
export class EnmodelComponent implements OnInit {

  basePath = 'assets/img//';
  /* enmodelarray for engagement model starts here */
  enmodelarray = [
    {
      img:`${this.basePath}icon-pm.svg`,
      title:'Project Management',
      desc:'Project Services Group (PSG) for rigorous estimation, planning, SOW development and agile-based design/development/testing methodology to deliver projects.',
      link:'#pm'
    },
    {
      img:`${this.basePath}icon-extended.svg`,
      title:'Extended Teams',
      desc:'We work with our customers to execute onsite, offshore and onsite / offshore model turnkey projects through full SDLC using Agile methodologies.',
      link:'#et'
    },
    {
      img:`${this.basePath}icon-shared.svg`,
      title:'Shared IP',
      desc:'A number of measures to ensure our client’s IP is protected also offers its own IP to enable our customers accelerate the delivery of their products and solutions.',
      link:'#sip'
    },
    {
      img:`${this.basePath}icon-codev.svg`,
      title:'Co-Development',
      desc:'Collaborative Delivery Centre (CDC) as a "white-box” execution model to setup remote delivery teams onsite/offsite  to ensure control, quality, time-to-market and IP protection.',
      link:'#cod'
    },
    {
      img:`${this.basePath}icon-consulting.svg`,
      title:'Outcome Based Consulting',
      desc:'We offer strategic advisory services and technology blueprinting for companies by analyzing application environments, infrastructure, assets, technology needs and goals.',
      link:'#obc'
    },
    {
      img:`${this.basePath}icon-staffing.svg`,
      title:'Pro-Staffing Services',
      desc:'Augment technology teams from time-to-time for qualified talent with 600+ resources and database of 14000+ highly skilled resources for professional staffing needs of our clients.',
      link:'#pss'
    }
    
  ];

/* modelarray for engagement model ends here */
  constructor() { }

  ngOnInit() {
  }

}
