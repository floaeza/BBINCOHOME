import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/carouselItem.interface';
import * as AOS from 'aos';

@Component({
  selector: 'component-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Item[] = [];

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    AOS.init({
      duration: 800, 
      offset: 350 
    });
    this.items = [
      {
        title_h1: "Innovación en Acción",
        title_span: "Soluciones en Tecnología",
        paragraph: "La innovación es nuestra brújula. En BBINCO, no solo hablamos de soluciones tecnológicas; las ponemos en acción. Constantemente buscamos nuevas formas de abordar los desafíos tecnológicos y ofrecer soluciones que realmente marquen la diferencia",
        buttons: [{
          texto: "Ver mas",
          clase: "btn-1",
          enlace: "#"
        },
        {
          texto: "Cotiza ahora",
          clase: "btn-2",
          enlace: "#"
        }
      ]
      },
      {
        title_h1: "Conectando el Futuro",
        title_span: "Elevando la Tecnología",
        paragraph: "Conectar el futuro con el presente es nuestra misión. En BBINCO, trabajamos arduamente para asegurarnos de que tu empresa esté siempre un paso adelante en la evolución tecnológica, creando oportunidades en el presente para un futuro más prometedor.",
        buttons:  [{
          texto: "Contactanos",
          clase: "btn-1",
          enlace: "#"
        }
      ]
      }
    ];
    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

}
