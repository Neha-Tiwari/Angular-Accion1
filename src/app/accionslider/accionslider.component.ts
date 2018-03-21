import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BannerDataService } from '../services/banner-data.service';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
direction: 'vertical',
slidesPerView: 'auto'
};

@Component({
selector: 'app-accionslider',
templateUrl: './accionslider.component.html',
styleUrls: ['./accionslider.component.css']
})
export class AccionsliderComponent implements OnInit {

/* slidearr1 new for slider starts here */
basePath4 = './assets/img/svgs/';

sliderarr1: ({ imgname1: string; imgname2: string; title1: string; title2: string; title3: string; title4: string; desc: string; link: string; } | 
    { imgname1: string; imgname2: string; title1: string; title2: string; title3: string; title4: string; desc: string; 
    // { imgname1: string; imgname2: string; title1: string; title2: string; title3: string; title4: string; desc: string; } |
    // { imgname1: string; imgname2: string; title1: string; title2: string; title3: string; title4: string; desc: string; 
    })[];

banner1Config: SwiperConfigInterface = {};

/* slidearr1 new for slider ends here */

constructor( private bannerService : BannerDataService
) {
    
}


ngOnInit() {
this.sliderarr1 = this.bannerService.getBannerSlideData(); 
}
ngAfterViewInit(){
this.banner1Config = {
pagination: true,
direction:'horizontal',
slidesPerView:1,
// mousewheel: true,
spaceBetween: 30,
speed:4000,
autoplay:{
delay:2000
},

};
}
}
