import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild('map')
  public mapContainer: ElementRef<HTMLElement>

  constructor() { }

  ionViewDidEnter() {
    this.createMap()
  }

  async createMap() {
    const apiKey = environment.apiKey;

    const newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapContainer.nativeElement, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });
  }

}


