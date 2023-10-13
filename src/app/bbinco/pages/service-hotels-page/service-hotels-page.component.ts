import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import * as AOS from 'aos';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
@Component({
  selector: 'app-service-hotels-page',
  templateUrl: './service-hotels-page.component.html',
  styleUrls: ['./service-hotels-page.component.css'],
  animations: [fadeAnimation]
})
export class ServiceHotelsPageComponent implements OnInit{
  public imagesArray: string [] = [];
  constructor(private imagesFromFolderService: ImagesFromFolderService){}
  ngOnInit(): void {
    AOS.init({
      duration: 800, 
      offset: 325 
    });
    this.imagesArray = this.imagesFromFolderService.getImages('servicesHotels');
  }

}
