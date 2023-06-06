import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscargato'
})
export class BuscargatoPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    const gatos = [];

    for(const gato of value){
      
      if(gato.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        gatos.push(gato);
      }
    }
    return gatos;
  }

}
