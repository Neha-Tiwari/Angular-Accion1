
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EmailValidator } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { OurclientComponent } from './ourclient/ourclient.component';
import { EnmodelComponent } from './enmodel/enmodel.component';
import { OpenstechComponent } from './openstech/openstech.component';
import { TechstartupComponent } from './techstartup/techstartup.component';
import { CaapbilityComponent } from './caapbility/caapbility.component';
import { EnterpComponent } from './enterp/enterp.component';
import { AccionsliderComponent } from './accionslider/accionslider.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerDataService } from '../app/services/banner-data.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatIconModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OurclientComponent,
    EnmodelComponent,
    OpenstechComponent,
    TechstartupComponent,
    CaapbilityComponent,
    EnterpComponent,
    AccionsliderComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    SwiperModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


  ],
  providers: [
    BannerDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
