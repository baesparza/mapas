import { Injectable } from '@angular/core';
import { Marcador } from './../interface/marcador.interface';

@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    let nuevo_marcador: Marcador = {
      lat: -4.001705,
      lng: -79.201420,
      titulo: 'Plaza de San Sebastian',
      draggable: true
    };

    this.marcadores.push( nuevo_marcador );
  }

  insertar_marcador( marcador: Marcador ) {
    this.marcadores.push( marcador );
    // console.log(this.marcadores);
  }

}
