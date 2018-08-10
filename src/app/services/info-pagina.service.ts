import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';
/* al final no se utiliza la interface InfoEquipo porque a la hora de iterea en la página
de About con *ngFor="let persona of _servicio.equipo" no permite iterar objetos solo array
(en realidad funciona pero da un error) */

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  /* El tipo de dato InfoPagina se refiere al tipo definido en info-pagina.interface.ts
  la variable info se utilizará en el header y el footer */
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // console.log('Servicio de infoPágina listo');
    // leer el archivo JSON (se utiiza el modulo de angular HttpClientModule importado desde app.module.ts)
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        // console.log(resp);
        // console.log(resp['twitter']);
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {

    this.http.get('https://angular-html-dd52c.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        // console.log(resp);
        this.equipo = resp;
      });

  }

}
