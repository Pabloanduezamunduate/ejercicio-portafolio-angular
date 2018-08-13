import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripccion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // no se inicializa el objeto, lo que se va hacer es llamar a las propiedades
  // del objeto en el html solo cando producto este cargado, si no
  // da inicialmente una serie de errores porque producto esta undefined (no iniciado)
  producto: ProductoDescripcion;
  productoId: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
        this.productoId = parametros['id'];
        // console.log(parametros['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe ((producto: ProductoDescripcion) => {
            this.producto = producto;
            //console.log(producto);

          });

      });

  }

}
