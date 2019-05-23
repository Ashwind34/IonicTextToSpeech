import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { LoadingController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';

@Injectable()
export class StoryProvider {

  length: number;

  getUrl: string = 'https://gpt2-cors-cy5b7ah32q-uc.a.run.app?temperature=0.8&top_k=40'

  seed: number;

  gptResponse: any;
  
  fakeResponse: string = 'This is the fake response'

  text: string;

  rate: number;

  locale: any = {
    title: 'English',
    code: 'en-US'
  }

  errorMessage: string;

  constructor(public http: HttpClient, public tts: TextToSpeech, public loader: LoadingController) {
    console.log('Story Provider Loaded')
  }

  cleanInputs() {
    if(this.length > 500) {
      this.length = 500;
    }
    if (this.length < 10 || !this.length) {
      this.length = 10;
    }
    if(this.length % 2 !== 0 ) {
      this.length = Math.floor(this.length);
    }
    if(this.rate > 2) {
      this.rate = 2;
    }
    if(this.rate < 0) {
      this.rate = 0;
    }
    if(!this.rate) {
      this.rate = 1.5;
    }
  }

  speakText(text) {
    this.cleanInputs();
    this.tts.speak({
      text: text,
      rate: this.rate,
      locale: this.locale.code
    })
      .then(() => console.log('Success'))
      .catch((reason:any) => console.log(reason))
  }

  stopText() {
    this.tts.speak({
      text: ''
    })
  }

  randomStory() {
    this.cleanInputs();    
    let loader = this.loader.create({
      content: 'Creating your story...'
    })
    loader.present()
    return this.http.get(this.getUrl + '&length=' + this.length)
    .subscribe(
      (response: any) => {
        this.gptResponse = response.text;
        this.speakText(this.gptResponse)
        loader.dismiss()      
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')'
        console.log(this.errorMessage)
        loader.dismiss()
      }
    );
  }
}
