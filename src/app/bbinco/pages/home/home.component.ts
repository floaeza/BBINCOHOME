import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import { ImagesLoaderService } from '../../services/images-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit{
  constructor ( private imageService: ImagesLoaderService) {}
  ngOnInit(): void {

  }

}
