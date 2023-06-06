import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/Services/datos.service';
import { IGatos } from 'src/app/Models/IGatos';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.scss']
})
export class GatoComponent implements OnInit {

  UnGato: any = [];
  id!: string;
  constructor(private _ser: DatosService, private _actroute: ActivatedRoute, private _route: Router) { 
    this._actroute.params.subscribe(data=>{
     this.UnGato = this._ser.getGatos(data['id']);
     console.log(this._ser.getGatos(data['id']));
    })

  }

  ngOnInit(): void {
     
  }

  regresar(){
    this._route.navigate(['/inicio']);
  }

  

  

}
