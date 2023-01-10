import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Binding Interpolation';
  estado=false;
  accion='ocultar';
  mensaje='';

  mostrar(){
    if(this.estado) this.accion='ocultar';
    else this.accion='mostrar';
    this.estado=!this.estado;
  }
}
