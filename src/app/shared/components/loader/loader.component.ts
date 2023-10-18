import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/bbinco/animations/fade-animations';
@Component({
  selector: 'shared-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [fadeAnimation]
})
export class LoaderComponent {

}
