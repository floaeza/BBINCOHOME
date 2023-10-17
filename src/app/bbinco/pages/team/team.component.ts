import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [fadeAnimation]
})
export class TeamComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 350
    });
  }
}
