import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* se injecta el servicio de info-pagina.service.ts, a la hora de ponerle un nombre
  se le puede poner un guion bajo que se utiliza para nombre de servicios (seria _infoPagina) 
  o tambien infoPaginaService (poniendo el nombre mas Service).
  */
  constructor( public _infoPagina: InfoPaginaService,
               public productosService: ProductosService) {


  }

}

