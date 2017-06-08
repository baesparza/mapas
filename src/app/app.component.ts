import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  marcadorShell: any = null;
  marcador_forma: FormGroup;
  index: number;


  constructor ( public _mapasService: MapasService ) {
    this._mapasService.cargarMarcadores();

    this.marcador_forma = new FormGroup({
      titulo: new FormControl('', Validators.required),
      desc: new FormControl(),
      draggable: new FormControl(true, Validators.required),
      lat: new FormControl(),
      lng: new FormControl(),
    });

    // console.log(this.marcador_forma);
  }


  clickMapa( event ) {

    let marcador: Marcador = {
      lat : event.coords.lat,
      lng : event.coords.lng,
      titulo: '',
      draggable: true,
      desc: ''
    };

    this._mapasService.insertar_marcador( marcador );
    this._mapasService.guardarMarcadores();

    // console.log(event);
  }

  clickMarcador(marcador: Marcador, i: number) {
    // console.log(marcador, i);
    this.marcadorShell = marcador;
    // console.log(this.marcadorShell);
    this.index = i;
    this.marcador_forma.setValue(this.marcadorShell);
  }

  actualizarMarcador() {
    this._mapasService.actualizarMarcador(this.index, this.marcador_forma.value);
    this._mapasService.guardarMarcadores();
  }

  actualizarMarcadorPocicion(marcador: Marcador, event) {
    // console.log(marcador, event);
    marcador.lat = event.coords.lat;
    marcador.lng = event.coords.lng;
    this._mapasService.guardarMarcadores();
  }

  borrar(index: number) {
    this._mapasService.borrarMarcador(index);
    this._mapasService.guardarMarcadores();
    this.marcadorShell = null;
  }

}
