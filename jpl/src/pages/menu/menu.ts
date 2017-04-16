import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Trivia1Page } from "../trivia1/trivia1";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }
trivia(){
this.navCtrl.setRoot(Trivia1Page);
}
}
