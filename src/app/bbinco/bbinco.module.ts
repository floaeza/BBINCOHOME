import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbincoRoutingModule } from './bbinco-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BbincoRoutingModule,
    PrimeNgModule,
  ]
})
export class BbincoModule { }
