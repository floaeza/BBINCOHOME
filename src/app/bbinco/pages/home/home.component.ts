import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {

  }

}
