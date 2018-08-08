import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  /* El tipo de dato InfoPagina se refiere al tipo definido en info-pagina.interface.ts
  la variable info se utilizará en el header y el footer */
  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) {

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
}
