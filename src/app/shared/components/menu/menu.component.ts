import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];
  public htmlElement?: ElementRef<HTMLElement>;
  @ViewChild('navbarTogglerButton') navbarTogglerButton!: ElementRef<HTMLElement>;
  constructor(private el: ElementRef<HTMLElement>){
    this.htmlElement = el;
  }
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

  closeNavbar(){
    if( !this.navbarTogglerButton )return;
    this.navbarTogglerButton.nativeElement.click();
  }
 
}
