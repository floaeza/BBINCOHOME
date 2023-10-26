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
  public loading: boolean = true;
  constructor () {}
  ngOnInit(): void {
    this.loading = true;
  }
  onLoad(){
    this.loading = false;
  }

}
