import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPagComponent {
  public loading: boolean = true;
  constructor(private router: Router){
    this.router.events.pipe(
      filter((event): event is NavigationStart | NavigationEnd => event instanceof NavigationStart || event instanceof NavigationEnd),
      )
    .subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navegación iniciada:', event.url);
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        console.log('Navegación completada:', event.url);
        this.loading = false;
      }
    })
  }
}
