import { Receta } from './../../../models/receta';
import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../../services/recetas.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {

  public loading = false;
  recetas: Receta[] = null;

  constructor( private recetasSrv: RecetasService) {
    this.loading = true;

    this.recetasSrv.getRecetasUsuario().then(recetas => {
      if (recetas) {
        this.recetas = recetas;
      }
      this.loading = false;
    }).catch( (err) => {
      this.loading = false;
    });


    // this.loading = true;
    //   setTimeout(() => {
    //     this.loading = false;
    // }, 5000);
  }

  ngOnInit() {
  }

}
