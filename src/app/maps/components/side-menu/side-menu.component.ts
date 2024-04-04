import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
  icon: string;
  alt: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscreen', name:'Full Screen', icon:'../../assets/bx-fullscreen.svg', alt:'Full Screen Icom' },
    { route: '/maps/zoom-range', name:'Zoom Range', icon:'../../assets/bx-zoom-in.svg', alt:'Zoom Range Icom' },
    { route: '/maps/markers', name:'Markers', icon:'../../assets/bxs-map.svg', alt:'Markers Icom' },
    { route: '/maps/properties', name:'Houses', icon:'../../assets/bxs-home.svg', alt:'Home Icon' },
  ];

}
