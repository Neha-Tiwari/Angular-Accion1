import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  
  basePath1='../assets/img/svgs//';

  basePath2='../assets/img/svgs/';
  // basePath = 'assets/img//';

  constructor(private matregistry : MatIconRegistry, private sanitizer :DomSanitizer, private iconRegistry:MatIconRegistry){
    this.matregistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/img/svgs/svg-sprite.svg'))
    iconRegistry.addSvgIcon('icon-ux',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath1}icon-ux.svg`))

    iconRegistry.addSvgIcon('icon-tagline',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}tagline.svg`))
    iconRegistry.addSvgIcon('icon-burst',sanitizer.bypassSecurityTrustResourceUrl(`${this.basePath2}burst.svg`))
  }
}
