import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { MenuPage } from "../menu/menu";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public loadingCtrl: LoadingController) {}

    persona:usuario =  new usuario();
    
    login(){

      if(this.persona.nombre=="1"){

      this.loadingCtrl.create({
      content: 'Cargando...',
      duration: 2000,
      dismissOnPageChange: true
    }).present();

      let alert = this.alerCtrl.create({
      title: 'Ingreso Exitoso de:',
      message: this.persona.nombre,
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.setRoot(MenuPage);
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
  correctas: number;
  incorrectas:number;
  constructor(){}
}