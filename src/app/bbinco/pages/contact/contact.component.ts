import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      offset: 350
    });
  }
}
