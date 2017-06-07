import { Component } from '@angular/core';

import { MapasService } from './services/mapas.service';
import { Marcador } from './interface/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = -4.001705;
  lng: number = -79.201420;
  zoom: number = 17;


  constructor ( public _mapasService: MapasService ) {
    this._mapasService.cargarMarcadores();
  }


  clickMapa( event ) {

    let marcador: Marcador = {
      lat : event.coords.lat,
      lng : event.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._mapasService.insertar_marcador( marcador );
    this._mapasService.guardarMarcadores();

    // console.log(event);
  }

}
