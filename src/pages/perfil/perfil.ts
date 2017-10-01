import { PerfilServiceProvider } from './../../providers/perfil-service/perfil-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'perfil-page',
  templateUrl: 'perfil.html',
  providers:[PerfilServiceProvider]
})
export class PerfilPage {
  public perfis:any;
  constructor(public navCtrl: NavController, public perfilService:PerfilServiceProvider) {
      this.perfilService.getPerfis().subscribe(
        response => this.perfis = response
      );
  }

}
