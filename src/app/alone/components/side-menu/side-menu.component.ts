import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
  icon: string;
  alt: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports:[ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name:'Full Screen', icon:'../../assets/bx-fullscreen.svg', alt:'Full Screen Icom' },
    { route: '/maps/zoom-range', name:'Zoom Range', icon:'../../assets/bx-zoom-in.svg', alt:'Zoom Range Icom' },
    { route: '/maps/markers', name:'Markers', icon:'../../assets/bxs-map.svg', alt:'Markers Icom' },
    { route: '/maps/properties', name:'Houses', icon:'../../assets/bxs-home.svg', alt:'Home Icon' },
    { route: '/alone', name:'Alone Page', icon:'../../assets/bx-cube-alt.svg', alt:'Component Icon' },
  ];

}
