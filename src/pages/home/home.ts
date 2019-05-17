import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor (private tts: TextToSpeech) {}

  text: string;

  rate: number;

  locale: string = 'en-US'

  speakText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate,
      locale: this.locale
    })
      .then(() => console.log('success'))
      .catch((reason:any) => console.log(reason))
  }

}
