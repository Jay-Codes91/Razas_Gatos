import { Component, OnInit } from '@angular/core';
import { IGatos } from './Models/IGatos';
import { IGetGatosHeader } from './Models/Funciones';
import { DatosService } from './Services/datos.service';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, IGetGatosHeader {
  
  title = 'Gatos';

  gatos: IGatos[] = [];
  date = new Date();
  constructor(private _ser: DatosService){}

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        this.getNomGatos();
  }

  getNomGatos(): void {
    this._ser.getAllGatos().subscribe(data=>{
      this.gatos = data;
      console.log(data[0].nombre);
      
    })
  }


}
