import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SoundsService } from '../../services/sounds.service';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];
  public scrolled: boolean = false;
  constructor(private soundService : SoundsService){}
  ngOnInit(): void {
    this.menuItems = [
      {
        label:'Home',
        icon: 'pi pi-home'
      },
      {
        label:'About',
        icon: 'pi pi-list'
      },
      {
        label:'Services',
        icon:'pi pi-microsoft'
      },
      {
        label:'Contact Us',
        icon: 'pi pi-users'
      }

    ]
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 70) { // Cambia 100 a la posición en la que deseas que ocurra el cambio
      this.scrolled = true;
      console.log("scrol");
      
    } else {
      this.scrolled = false;
    }
  }
  playHoverSound():void {
    this.soundService.playSound('menu_hover.mp3')
    .then(() => {
      // Reproducción exitosa
    })
    .catch((error) => {
      console.error('Error al reproducir el sonido:', error);
    });
  }
  stopHoverSound():void {
    this.soundService.stopSound();
  }

}
