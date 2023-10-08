import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isCollapsed: boolean | undefined;
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.isCollapsed = false;
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

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

}
