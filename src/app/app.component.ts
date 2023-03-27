import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peticiones';
  respuesta: Persona[] = [];

  constructor(private servicio: ApiService) {
    this.servicio.getGente().subscribe(
      (data) => {
        this.respuesta = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }



}
