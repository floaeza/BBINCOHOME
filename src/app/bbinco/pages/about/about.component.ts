import { Component } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation]
})
export class AboutComponent {

}
