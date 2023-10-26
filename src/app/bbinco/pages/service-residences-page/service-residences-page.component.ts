import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import * as AOS from 'aos';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
@Component({
  selector: 'app-service-residences-page',
  templateUrl: './service-residences-page.component.html',
  styleUrls: ['./service-residences-page.component.css'],
  animations: [fadeAnimation]
})
export class ServiceResidencesPageComponent implements OnInit{
  public imagesArray: string [] = [];
  public imagesChilenoExperience: string [] = [];
  public portadaPathChileno: string = '';
  public portadaPathMandarina: string = '';
  public imagesMandarinaExperience: string [] = [];
  public portadaPathDelMar: string = '';
  public imagesDelMarExperience: string [] = [];

  constructor(private imagesFromFolderService: ImagesFromFolderService){}
  
  ngOnInit(): void {
    AOS.init({
      duration: 800, 
      offset: 325 
    });
    this.imagesArray = this.imagesFromFolderService.getImages('servicesResidences');
    this.imagesChilenoExperience = this.imagesFromFolderService.getImages('chilenoExperience');
    this.portadaPathChileno = 'assets/pictures/ChilenoBayLogo.png';
    this.imagesMandarinaExperience = this.imagesFromFolderService.getImages('mandarinaExperience');
    this.portadaPathMandarina = 'assets/pictures/mandarina.jpeg';
    this.imagesDelMarExperience = this.imagesFromFolderService.getImages('delMarExperience');
    this.portadaPathDelMar = 'assets/pictures/delMar.jpeg';
  }
}
