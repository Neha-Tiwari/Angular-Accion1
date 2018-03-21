import { Component, OnInit } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-caapbility',
  templateUrl: './caapbility.component.html',
  styleUrls: ['./caapbility.component.css']
})
export class CaapbilityComponent implements OnInit {
  // basePath1 ='./assets/img/svgs/';
  basePath ='/assets/img/';
  basePath2='../../assets/img/svgs/';
  // basePath3='../assets/img/svgs/';
  /* caparray for capability component strats here  */
  caparray = [
    { 
    // svgIcon:`${this.basePath2}icon-ux.svg`, 
    iconname:'icon-ux',
    title:'UX and UI Design', 
    desc:'Design delightful user experiences for smart, intelligent and impactful digital conversations with Accion Digital Experience Studio.' , 
    link:'#ui&ux'},
    { 
    // svgIcon:`${this.basePath2}icon-microservices.svg`, 
    iconname:'icon-microservices',  
    title:'Micro-Services', 
    desc:'Shift from monolithic large applications to lightweight apps that make it easy to develop new solutions in small, modular and independent ways.' , 
    link:'#micro'},
    { 
    // img:`${this.basePath}icon-bigdata.svg`, 
    iconname:'icon-bigdata',
    title:'Big Data Applications', 
    desc:'Become a data-driven company that leverages big data analytics, applications and infrastructure for new insights on customers and business opportunities.', 
    link:'#bigdata'},
    { 
    // img:`${this.basePath}icon-devops.svg`, 
    iconname:'icon-devops',
    title:'Dev-Ops & Cloud', 
    desc:'Take advantage of the synergy to power your digital transformation with lower cost of development, testing, deployment and operations on the cloud.' , 
    link:'#devops'},
    { 
    // img:`${this.basePath}icon-iot.svg`, 
    iconname:'icon-iot',
    title:'IoT & Distributed Computing', 
    desc:'Make your data go fast & work hard in a world of connected devices to explore new business opportunities with advanced automation & data analytics.',
    link:'#iot&dc'},
    { 
    // img:`${this.basePath}icon-bi.svg`, 
    iconname:'icon-bi',
    title:'Business Intelligence & Analytics', 
    desc:'Realize the value of BI for data reporting across industries and technology platforms without reinventing the wheel or losing valuable time.',
    link:'#bi&a'},
    { 
    // img:`${this.basePath}icon-blockchain.svg`,
    iconname:'icon-blockchain', 
    title:'Block- Chain', 
    desc:'Digitize your transactions workflow using a highly secured, shared and replicated ledger with our team of experts for the best strategy and use cases for your business.',
    link:'#blockchain'},
    { 
    // img:`${this.basePath}icon-ui.svg`, 
    iconname:'icon-ui',
    title:'Machine Learning & Aritificial Intelligence', 
    desc:'Keep pace in an era of smart machines and intelligent applications with our in-depth expertise in natural language processing (NLP) and team of data scientists.',
    link:'#ml&ai'}
    ];
    /* caparray for capability component ends here  */
  
  
  
  // basePath = 'assets/img//';
  constructor(private matregistry : MatIconRegistry, private sanitizer :DomSanitizer, private iconRegistry:MatIconRegistry){
    this.matregistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/img/svgs/svg-sprite.svg'))
    iconRegistry.addSvgIcon('icon-ux',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-ux.svg`))
    iconRegistry.addSvgIcon('icon-microservices',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-microservices.svg`))
    iconRegistry.addSvgIcon('icon-bigdata',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-bigdata.svg`))
    iconRegistry.addSvgIcon('icon-devops',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-devops.svg`))
    iconRegistry.addSvgIcon('icon-iot',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-iot.svg`))
    iconRegistry.addSvgIcon('icon-bi',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-bi.svg`))
    iconRegistry.addSvgIcon('icon-blockchain',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-blockchain.svg`))
    iconRegistry.addSvgIcon('icon-ui',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}icon-ui.svg`))




  }
  ngOnInit() {
  }

}
