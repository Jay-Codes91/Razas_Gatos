import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//Services
import { DatosService } from './Services/datos.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { GatoComponent } from './Components/gato/gato.component';
import { ObjectToArrayPipe } from './Pipes/object-to-array.pipe';
import { BuscargatoPipe } from './Pipes/buscargato.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GatoComponent,
    ObjectToArrayPipe,
    BuscargatoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
