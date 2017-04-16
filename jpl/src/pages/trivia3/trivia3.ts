import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormControl} from '@angular/forms';
/*
  Generated class for the Trivia3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trivia3',
  templateUrl: 'trivia3.html'
})
export class Trivia3Page {


  ionViewDidLoad() {
    console.log('ionViewDidLoad Trivia1Page');
  }

  langs;
  langForm;

  constructor(public navCtrl: NavController) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
  confirmar(){
//  this.navCtrl.setRoot(Trivia2Page);
  }
}