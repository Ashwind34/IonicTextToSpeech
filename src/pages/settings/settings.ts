import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoryProvider } from '../../providers/story/story';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  title: string = 'Settings'

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public story: StoryProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }  

}
