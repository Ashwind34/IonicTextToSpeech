import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoryProvider } from '../../providers/story/story';
import { StorybookPage } from '../storybook/storybook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title: string = 'Home'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public story: StoryProvider) {}

    newStory(){
      this.story.randomStory();
      this.navCtrl.setRoot(StorybookPage)
    }
}
