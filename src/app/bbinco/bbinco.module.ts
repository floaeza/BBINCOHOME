import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';

import { BbincoRoutingModule }            from './bbinco-routing.module';
import { FormsModule }                    from '@angular/forms';
import { PrimeNgModule }                  from '../prime-ng/prime-ng.module';

import { SharedModule }                   from '../shared/shared.module';

import { AboutComponent }                 from './pages/about/about.component';
import { CarouselComponent }              from './components/carousel/carousel.component';
import { ContactComponent }               from './pages/contact/contact.component';
import { GalleriaComponent }              from './components/galleria/galleria.component';
import { HomeComponent }                  from './pages/home/home.component';
import { LayoutPagComponent }             from './pages/layout-page/layout-pag.component';
import { ServiceHotelsPageComponent }     from './pages/service-hotels-page/service-hotels-page.component';
import { ServiceResidencesPageComponent } from './pages/service-residences-page/service-residences-page.component';
import { ServicesComponent }              from './pages/services/services.component';
import { TeamComponent }                  from './pages/team/team.component';
import { FlipImageComponent } from './components/flip-image/flip-image.component';



@NgModule({
  declarations: [
    AboutComponent,
    CarouselComponent,
    ContactComponent,
    GalleriaComponent,
    HomeComponent,
    LayoutPagComponent,
    ServiceHotelsPageComponent,
    ServiceResidencesPageComponent,
    ServicesComponent,
    TeamComponent,
    FlipImageComponent,
  ],
  imports: [
    BbincoRoutingModule,
    CommonModule,
    FormsModule,
    PrimeNgModule,
    SharedModule,
  ]
})
export class BbincoModule { }
