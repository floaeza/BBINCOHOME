import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { fadeAnimation } from '../../animations/fade-animations';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [fadeAnimation]
})
export class ServicesComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 350
    });
  }

}
