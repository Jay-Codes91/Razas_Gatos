import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGatos } from './Models/IGatos';
import { IGetGatosHeader } from './Models/Funciones';
import { DatosService } from './Services/datos.service';

declare var bootstrap: any;
declare var Swal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, IGetGatosHeader {

  title = 'Gatos';
  nombre: string = '';
  gatos: IGatos[] = [];
  gatoNom: any = [];
  date = new Date();
  constructor(private _ser: DatosService, private _actRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    this.getNomGatos();

  }

  getNomGatos(): void {
    this._ser.getAllGatos().subscribe(data => {
      this.gatos = data;

    })
  }

  buscar(id: any): void {
    console.log(id);
    if(id == 'Buscar'){
      Swal.fire({
        icon: 'warning',
        title: 'Selecciona un gato para mostrar su información',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'rgb(239, 83, 80)'
      })
    }else{
      let nombre = this._ser.getGatos(id).nomRuta;
      this._router.navigate(['/gato/' + id + '/' + nombre]);
    }
    
  }

}
