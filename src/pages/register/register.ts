import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UserserviceProvider]
})
export class RegisterPage {

  title: string = 'Register'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

}
