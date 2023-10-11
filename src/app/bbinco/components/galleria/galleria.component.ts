import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit{

  @Input()
  public images!: string [];
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  ngOnInit(): void {
    if ( !this.images ) throw Error('Images property is required');
  }
}
