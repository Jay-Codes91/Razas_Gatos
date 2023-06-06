import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';
import { IGatos } from 'src/app/Models/IGatos';
import { IGetAllGatos } from 'src/app/Models/Funciones';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, IGetAllGatos {

  gatos: IGatos[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  constructor(private _ser: DatosService) { }
  

  ngOnInit(): void {
    this.getAllGatos();
  }

  getAllGatos(): void {
    this._ser.getAllGatos().subscribe(data=>{
      this.gatos = data;
    })
  }

}
