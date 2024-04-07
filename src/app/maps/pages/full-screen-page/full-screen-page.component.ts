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
      center: [ -69.17649415957776, -12.59428726920207 ], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }



}
