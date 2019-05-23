import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StoryProvider } from '../../providers/story/story';
import { StorybookPage } from '../storybook/storybook';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title: string = 'Home'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public story: StoryProvider) {}

    goToStory() {
      this.navCtrl.setRoot(StorybookPage);
    }

    goToSettings() {
      this.navCtrl.setRoot(SettingsPage);
    }

    newStory(){
      this.story.randomStory();
      this.goToStory();
    }
}
