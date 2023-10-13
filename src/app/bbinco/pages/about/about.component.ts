import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit{
  public imagesUs:         string[] = [];
  public imagesHistory:    string[] = [];
  public imagesVision:     string[] = [];
  public imagesUbication:  string[] = [];

  position:               string = 'top' ?? '';
  showIndicatorsOnItem:   boolean = false;
  positionOptions = [
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
  ];

  constructor ( private imagesFromFolderService: ImagesFromFolderService ) {}
  ngOnInit(): void {
    AOS.init({
      duration: 800, 
      offset: 325 
    });
    this.imagesUs = this.imagesFromFolderService.getImages('us');
    this.imagesHistory = this.imagesFromFolderService.getImages('history');
    this.imagesVision = this.imagesFromFolderService.getImages('vision');
    this.imagesUbication = this.imagesFromFolderService.getImages('ubication');
  }
}
