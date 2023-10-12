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
import { FormsModule }    from '@angular/forms';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { LayoutPagComponent } from './pages/layout-page/layout-pag.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceHotelsPageComponent } from './pages/service-hotels-page/service-hotels-page.component';
import { ServiceResidencesPageComponent } from './pages/service-residences-page/service-residences-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    CarouselComponent,
    GalleriaComponent,
    LayoutPagComponent,
    ServiceHotelsPageComponent,
    ServiceResidencesPageComponent
  ],
  imports: [
    CommonModule,
    BbincoRoutingModule,
    PrimeNgModule,
    FormsModule,
    SharedModule
  ]
})
export class BbincoModule { }
