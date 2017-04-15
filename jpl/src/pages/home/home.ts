import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {}

    persona:usuario =  new usuario();
    login(){
      if(this.persona.nombre=="1"){
        console.log("Iniciando Sesion");
      let alert = this.alerCtrl.create({
      title: 'Ingreso Exitoso de:',
      message: this.persona.nombre,
      buttons: ['Ok']
    });
    alert.present()
      }
      else{
      let alert = this.alerCtrl.create({
      title: 'Error!',
      message: 'Usuario Inexistente',
      buttons: ['Ok']
    });
    alert.present()
      }
    }
}

export class usuario{
  nombre:string;
  pass:string;
  constructor(){}
}