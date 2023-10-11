import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations/fade-animations';
import { ImagesFromFolderService } from '../../services/images-from-folder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit{
  imagesUs:         string[] = [];
  imagesHistory:    string[] = [];
  imagesVision:     string[] = [];
  imagesUbication:  string[] = [];

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
    this.imagesUs = this.imagesFromFolderService.getImages('us');
    this.imagesHistory = this.imagesFromFolderService.getImages('history');
    this.imagesVision = this.imagesFromFolderService.getImages('vision');
    this.imagesUbication = this.imagesFromFolderService.getImages('ubication');
  }
}
