import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styles: ``
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map')
  public mapContainer?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat( -69.17649415957776, -12.59428726920207 );
  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {

    if (!this.mapContainer) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Abraham Gutierrez'
    // const marker = new Marker({ /*color: 'red', element: markerHtml*/ })
    //   .setLngLat( this.currentLngLat )
    //   .addTo( this.map );
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  createMarker(){
    if( !this.map ) return;
    //Genera un color hexadecimal aleatorio
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lgnLat = this.map.getCenter();
    this.addMarker( lgnLat, color );
  }

  addMarker( lngLat: LngLat, color: string ){
    if( !this.map ) return;

    const marker = new Marker({ color: color, draggable: true })
      .setLngLat(lngLat)
      .addTo( this.map );

      this.markers.push( {color: color,marker: marker });
      this.saveToLocalstorage()

      marker.on('dragend', () =>{
        this.saveToLocalstorage();
      });
  }

  deleteMarker( index: number ){
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
    this.saveToLocalstorage();
  }

  flyTo( marker: Marker ){

    this.map?.flyTo({
      zoom: 15,
      center: marker.getLngLat()
    })
  }

  saveToLocalstorage(){
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => {
      return {
        color: color,
        lngLat: marker.getLngLat().toArray(),
      }
    });
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(){
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString ); //! No es seguro

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat;
      const corrds = new LngLat( lng, lat );

      this.addMarker(corrds, color)
    });
  }

}
