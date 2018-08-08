import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

/* el useHash se pone porque de esta manera añade a la ruta un # y el navegador no intente buscar
    una dirección por ejemplo item/1/ que no existe realmente ya
    que todo está estructurado por angular. En un servidor apache o 
    en alguno que podamos configurar nosotros no seria necesario usar
    # ya que se le puede decir en el archivo htacces que todas
    las direcciones sean procesadas por la página index de la raiz
    (es decir por angular), pero en este caso como se va a subir a
    Gitpages y no se puede configurar la soulucion es usar #
*/
@NgModule({
    imports: [
      RouterModule.forRoot( app_routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
