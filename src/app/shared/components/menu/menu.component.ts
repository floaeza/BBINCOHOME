import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SoundsService } from '../../services/sounds.service';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];
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

  playHoverSound():void {
    // this.soundService.playSound('menu_hover.mp3');

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
