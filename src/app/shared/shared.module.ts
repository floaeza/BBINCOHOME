import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderTopComponent,
    FooterComponent
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
