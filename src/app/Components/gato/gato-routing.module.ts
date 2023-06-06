import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatoComponent } from './gato.component';
const routes: Routes = [{path: '', component: GatoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatoRoutingModule { }
