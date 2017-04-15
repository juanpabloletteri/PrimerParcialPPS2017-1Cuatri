import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

    persona:usuario =  new usuario();
    login(){
      if(this.persona.nombre=="1"){
        console.log("Iniciando Sesion");
        alert("bien!");
      }
      else{
        alert("mal");
      }
    }
}

export class usuario{
  nombre:string;
  pass:string;
  constructor(){}
}