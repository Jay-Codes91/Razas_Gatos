import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import * as data from '../../assets/json/Gatos.json';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url: string = 'assets/json/Gatos.json';
  UnGato: any[] = [];

  constructor(private _http: HttpClient) { }

  getAllGatos(): Observable<any>{
    return this._http.get(this.url);
  }
  getGatos(id: number){
    return data[id-1];
  }

  
}
