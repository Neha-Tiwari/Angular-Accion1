import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterp',
  templateUrl: './enterp.component.html',
  styleUrls: ['./enterp.component.css']
})
export class EnterpComponent implements OnInit {

basePath= 'assets/img//';
  /* fimgarray & entarray for enterprise component strats here  */
  fimgarray =
  [
  {img:`${this.basePath}corporate.jpg`, icon:`${this.basePath}enterprise.svg`}
   ];
  entarray = 
  [
    // { img:`${this.basePath}icon-ux.svg`, title:'UX and UI Design', desc:'Design delightful user experiences for smart, intelligent and impactful digital conversations with Accion Digital Experience Studio.' , link:'#ui&ux'}
    {
    maintitle:'FOR ENTERPRISES',
    title:'Solve Conventional Problems with Smart Re-engineering', 
    desc:'You have to keep pace on exploring new ways of doing business in a fast-changing technology environment. So what should be the next best technology move for your company and customers? Talk to us.', 
    link:'#ent', 
    // logo1:`${this.basePath}case-study.jpg`, 
    logo1:`${this.basePath}awlogo.png`, 
    casestudy1:'How we designed an Amazon workplace experience for the largest water utility company in US.', 
    logo2:`${this.basePath}awlogo.png`, 
    casestudy2:'An intelligent customer app that tells users everything about their water consumption in few clicks.'
    }  
  ];
  /* fimgarray & entarray for enterprise component strats here  */
  constructor() { }

  ngOnInit() {
  }

}
