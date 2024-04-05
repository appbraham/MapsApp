import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styles: ``
})
export class ZoomRangePageComponent implements AfterViewInit{

  @ViewChild('map')
  public mapContainer?: ElementRef;

  ngAfterViewInit(): void {

    if (!this.mapContainer) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -67.80980493857295, -9.974691624615625 ], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }

}
