import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  // selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map')
  public mapContainer?: ElementRef;

  ngAfterViewInit(): void {

    if (!this.mapContainer) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-69.19454607302642, -12.593823222658045], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }



}
