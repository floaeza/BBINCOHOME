import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-flip-image',
  templateUrl: './flip-image.component.html',
  styleUrls: ['./flip-image.component.css']
})
export class FlipImageComponent {
  public isFlipped: boolean = false;
  
  @Input()
  public portadaPath?: string;
  @Input()
  carouselImages!: string[];
  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
