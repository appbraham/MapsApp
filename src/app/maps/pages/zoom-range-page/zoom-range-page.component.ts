import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styles: ``
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map')
  public mapContainer?: ElementRef;

  public zoom: number = 14;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat( -69.17649415957776, -12.59428726920207 );

  ngAfterViewInit(): void {

    if (!this.mapContainer) throw 'El elemento HTML no fue encontrado';

      this.map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      // center: [ -69.17649415957776, -12.59428726920207 ], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners(): void{
    if( !this.map ) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18 ) return;
      this.map?.zoomTo(18)
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });

  }

  zoomIn(): void{
    this.map?.zoomIn()
  }

  zoomOut(): void{
    this.map?.zoomOut();
  }

  zoomChanged( value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom )
  }

}
