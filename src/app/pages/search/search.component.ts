import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // el ActivatedRoute es para poder recibir parametros desde la url
  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( params => {
        // se usa termino pues es como se ha definido el nombre del
        // parametro en el app-routing.module.ts
        // console.log(params['termino']);
        this.productosService.buscarProducto(params['termino']);
      });

  }

}
