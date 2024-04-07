import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
})
export class MiniMapComponent implements AfterViewInit, OnDestroy{

  @Input()
  public lngLat?: [number, number];

  @ViewChild('map')
  public mapContainer?: ElementRef;

  public map?: Map;

  ngAfterViewInit(): void {
    if( !this.mapContainer ) throw "El contenedor del mapa no fue encontrado";
    if ( !this.lngLat ) throw "Las coordenadas no deben de ser nulas";

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 14,
      interactive: false,
    });

    new Marker({ color: 'red' })
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }


}
