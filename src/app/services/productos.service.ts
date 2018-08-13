import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = []; // se utilizará en la busqueda

  constructor( private http: HttpClient) {

    this.cargarProductos();
  }

  // para el portafolio inicial
  private cargarProductos() {

    // Se utiliza una promesa ya que la carga es asincrona (mediante subscribe)
    // y puede no estar cargado todavia cuando se necesite (para la busquedaç)
    // por ello al poner el código dentro de un promise despues se puede
    // llamar al metodo y ponerlee un .then() haciendo que realize la
    // busqueda al terminar este metodo totalmente.
    // la Promesa tiene dos parametros el pimero lo que devuelve uando se ejecuta bien
    // y el segundo lo que devuelve cuando hay algun error
    return new Promise( (resolve, reject) => {

      this.http.get('https://angular-html-dd52c.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        // console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve(); // así se le dice que la promesa ha terminado exitosamente
      });


    }) ;


  }

  // Para los detalles de producto
  getProducto(id: string) {
    // usamos comilla torcida (backtip) para poder usar la carqacteristica de Ecmscript6 literales,
    // la cual permite insertar expresiones dentro de un string usando ${}
    return this.http.get(`https://angular-html-dd52c.firebaseio.com/productos/${ id }.json`);
    // en este caso no se va a subscribir qa la respuesta porque la subscripción
    // se va a realizar en la página desde la que se llama a este servicio.


  }
  // al caragar la página inicialmente es podible que la busqueda
  // no fucnione buien pues el arreglo productosFiltrado depende de 
  // dependen de que el arreglo Productos que se carga asincronamente (mediante 
  // subscribe) este cargado.

  // por ello se ha puesto dicah carrga dentro de un promise pudiendo ahora
  // utiilizar el .then() con dicho metodo para que lo siguente solo se ejecute
  // al haber terminado la carga.

  buscarProducto ( termino: string) {

    if ( this.productos.length === 0){
      // si topdavia no se han cargado los productos
      // se vuelve a llamar a cargarProductos
      this.cargarProductos().then( () => {
        // el filtro se ejecutara solo cuando se haya terminado de 
        // cargar Productos
        this.filtrarProductos( termino );

      });
    } else {
      // se aplica el filtro
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productosFiltrado.push( prod );
      }
    });

  }

}

