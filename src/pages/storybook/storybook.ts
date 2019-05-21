import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoryProvider } from '../../providers/story/story';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-storybook',
  templateUrl: 'storybook.html',
})
export class StorybookPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public story: StoryProvider) {
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorybookPage');
  }

}
