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
            this.story.locale = {
              title: 'English',
              code: 'en-US'
            }
          }
        } , {
          text: 'Spanish',
          handler: () => {
            this.story.locale = {
              title: 'Spanish',
              code: 'es'
            }
          }
        }, {
          text: 'Italian',
          handler: () => {
            this.story.locale = {
              title: 'Italian',
              code: 'it'
            }
          }
        }, {
          text: 'French',
          handler: () => {
            this.story.locale = {
              title: 'French',
              code: 'fr_FR'
            }
          }
        }, {
          text: 'Chinese',
          handler: () => {
            this.story.locale = {
              title: 'Chinese',
              code: 'zh'
            }
          }
        }, {
          text: 'Japanese',
          handler: () => {
            this.story.locale = {
              title: 'Japanese',
              code: 'ja_JP'
            }
          }
        }, {
          text: 'Russian',
          handler: () => {
            this.story.locale = {
              title: 'Russian',
              code: 'ru-RU'
            }
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
