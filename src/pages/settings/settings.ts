import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
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
              public story: StoryProvider,
              public actShtCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }  

  presentLanguage() {
    const langSheet = this.actShtCtrl.create({
      title: 'Select your Language',
      buttons : [
        {
          text: 'English',
          handler: () => {
            this.story.locale = 'en-US'
          }
        } , {
          text: 'Spanish',
          handler: () => {
            this.story.locale = 'es'
          }
        }, {
          text: 'Italian',
          handler: () => {
            this.story.locale = 'it'
          }
        }, {
          text: 'French',
          handler: () => {
            this.story.locale = 'fr_FR'
          }
        }, {
          text: 'Chinese',
          handler: () => {
            this.story.locale = 'zh'
          }
        }, {
          text: 'Japanese',
          handler: () => {
            this.story.locale = 'ja_JP'
          }
        }, {
          text: 'Russian',
          handler: () => {
            this.story.locale = 'ru-RU'
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]            
    })
    langSheet.present()
  }

}
