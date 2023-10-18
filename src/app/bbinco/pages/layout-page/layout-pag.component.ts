import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription, delay, filter } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPagComponent {
  public isLoading :boolean = false;

  private readonly routeChange: Subscription | undefined;
  constructor(private router: Router) {
    this.routeChange = router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationStart|| event instanceof NavigationEnd),
      )
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isLoading = false;
        } else if (event instanceof NavigationEnd) {
          this.isLoading = true;
        }
      });
  }
}
