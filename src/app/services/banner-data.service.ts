import { Injectable } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class BannerDataService {
  private basePath = 'assets/img//';
  // private basePath1 = 'assets/img/svgs/';
  private basePath1='./../../assets/img/svgs/'
  private basePath2 = '/../../assets/img/svgs/';

  getBannerSlideData(){
    return [
      {
        imgname1:`${this.basePath1}tagline.svg`,
        imgname2:`${this.basePath1}burst.svg`,
        title1:'Crafting',
        title2:'Innovations',
        title3:'with Emerging',
        title4:'Technologies',
        desc:'Gear up for the future with latest technology trends and explore new ways of doing business',
        link:'#capability'
      },
      {
        imgname1:`${this.basePath1}tagline.svg`,
        imgname2:`${this.basePath1}burst.svg`,
        title1:'Accelerating',
        title2:'Product ',
        title3:'Development & ',
        title4:'Go-To Market Strategy',
        desc:'Get to market faster and scale to unpredictable customer demands quickly'
        // link:'#product'
      }
      ,
  
      {
        imgname1:`${this.basePath1}tagline.svg`,
        imgname2:`${this.basePath1}burst.svg`,
        title1:'Designing',
        title2:'Additive And',
        title3:'Engaging User',
        title4:'Experiences',
        desc:'Build personalized, seamless and conversational digital interface for users'
        // link:'#design'
      },
      {
        imgname1:`${this.basePath1}tagline.svg`,
        imgname2:`${this.basePath1}burst.svg`,
        title1:'Re-Enginnering',
        title2:'Conventional',
        title3:'Problems with',
        title4:'Smart Technology',
        desc:'Solve simple to complex technology or business problems with faster , leaner digital engineering'
        // link:'#Re-engineer'
      }
    
    
    ];
  }

  constructor( private matregistry : MatIconRegistry, private sanitizer :DomSanitizer, private iconRegistry:MatIconRegistry
  ) {
      this.matregistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/img/svgs/svg-sprite.svg'))
      iconRegistry.addSvgIcon('icon-tagline',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath1}tagline.svg`))
      iconRegistry.addSvgIcon('icon-burst',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath1}burst.svg`))
  }

  
}
