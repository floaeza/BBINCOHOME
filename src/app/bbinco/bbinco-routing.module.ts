import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutPagComponent } from './pages/layout-page/layout-pag.component';
import { ServiceHotelsPageComponent } from './pages/service-hotels-page/service-hotels-page.component';
import { ServiceResidencesPageComponent } from './pages/service-residences-page/service-residences-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'team', component: TeamComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'services/hotels', component: ServiceHotelsPageComponent},
      { path: 'services/residences', component: ServiceResidencesPageComponent},
      { path: '**', redirectTo: 'home'},
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BbincoRoutingModule { }
