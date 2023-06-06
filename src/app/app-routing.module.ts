import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./Components/inicio/inicio.module').then(m=> m.InicioModule)
  },
  {
    path: 'gato/:id/:nomRuta',
    loadChildren: () => import('./Components/gato/gato.module').then(m=> m.GatoModule)
  },
  {
    path: '',
    loadChildren: () => import('./Components/inicio/inicio.module').then(m=> m.InicioModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
