import { Component, OnInit } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';

import { MatFormFieldControl } from '@angular/material';
import {MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit

 {

  basePath = 'assets/img//';
  /* cstudytalk for Footer section starts here */

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  cstudytalk = [
    {
      bgimg:`${this.basePath}work.jpeg`,
      title:'Case Studies',
      desc:'See how we transformed some of these projects in to lorem ipsum '
    },
    {
      bgimg:`${this.basePath}letstalk.jpeg`, 
      title:"Let's Talk",
      desc:"Got a project? Don't know where to start? Let's start talking."
    }
  ];
/* newsarray for Footer section ends here */

/* Footerarray for external linkss in footer section starts here */

  line1footer = [
    {
      clogo2:`${this.basePath}logo.svg`,
      title1:'Driving Outcomes',
      title2:'Through Actions',
      link1:'Accion Story',
      link2:'Accion Leadership',
      link3:'Global Offices',
      link4:'Contact Us',
      title3:'Follow us on:',
      icon1:'fb',
      icon2:'tw',
      icon3:'g+',
      icon4:'in',
      icon5:'you'
    }
  ];

  line2footer = [
    {
      title1:'What Do We Do?',
      link1:'UX and UI Design',
      link2:'Big Data and Machine Learning',
      link3:'DevOps and Cloud Computing',
      link4:'Microservices',
      link5:'IoT and Distributed Computing',
      link6:'Business Intelligence & Analytics',
      link7:'Blockchain',
      link8:'Open Source Solutions',
      link9:'UI and Front-end'
    }
  ];

  line3footer = [
    {
      title1:'Who Do We Serve?',
      link1:'For Enterprises',
      link2:'For Technology Companies',
      link3:'For Startups',
      link4:'For Open Source Solutions',
      title2:'Work With Us',
      link5:'Careers',
      link6:'Accion Culture',
      link7:'Current Openings',
      link8:'Get in touch'
    }
  ];

  line4footer = [
    {
      title1:'What Have We Done ?',
      link1:'Case Studies',
      link2:'Our Clients',
      link3:'Zephyr - Conversational Framework',
      link4:'Breeze - Some Framework',
      title2:'Accion Websites',
      link5:'Conversations',
      link6:'Frameworks',
     
    }
  ];

  baseline1 = [
    {
      copyright:'2018 -- All rights reserved'
    }
  ];

  baseline2 = [
    {
      terms:'Terms of use',
      policy:'Privacy Policy',
      crafted:'Handcrafted with',
      cname:'by AccionLabs'
    }
  ];

/* Footerarray for external linkss in footer section ends here */

  constructor() { }

  ngOnInit() { }

}
