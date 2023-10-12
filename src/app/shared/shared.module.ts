import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';

import { PrimeNgModule }      from '../prime-ng/prime-ng.module';

import { FooterComponent }    from './components/footer/footer.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { MenuComponent }      from './components/menu/menu.component';
import { CustomNavDirective } from './directives/custom-nav.directive';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderTopComponent,
    FooterComponent,
    CustomNavDirective
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent,
    HeaderTopComponent,
    FooterComponent
  ]
})
export class SharedModule { }
