import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { StoryProvider } from '../../providers/story/story';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StoryProvider]
})
export class HomePage {

  constructor (private tts: TextToSpeech, private story: StoryProvider) {}

  text: string;

  rate: number = 0;

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

  freshStory(){
    this.story.randomStory()
  }

  inputStory() {
    this.story.userStory()
  }

}
