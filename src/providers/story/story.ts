import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Injectable()
export class StoryProvider {

  length: number = 500;

  getUrl: string = 'https://gpt2-cors-cy5b7ah32q-uc.a.run.app?temperature=0.8&top_k=40'

  seed: number;

  gptResponse: any;
  
  fakeResponse: string = 'This is the fake response'

  text: string;

  rate: number = 1;

  locale: any = {
    title: 'English',
    code: 'en-US'
  }

  //USE THESE PROPERTIES AFTER RE-CONFIGURING API ENDPOINTS

  // postUrl: string = 'https://gpt2-cors-cy5b7ah32q-uc.a.run.app';

  // params: any = {
  //   "length": this.length,
  //   "temperature":  "0.8",
  //   "top_k": "40"
  // }

  constructor(public http: HttpClient, public tts: TextToSpeech) {
    console.log('Story Provider Loaded')
  }

  speakText(text) {
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
    console.log(this.fakeResponse);
    return this.http.get(this.getUrl + '&length=' + this.length)
    .subscribe(
      (response: any) => {
        this.gptResponse = response.text;
        console.log(this.gptResponse);
        this.speakText(this.gptResponse)      
      }, error => {
        console.log('Error Status Code: ' + error.status + ' (' + error.statusText + ')')
      }
    );
  }

  check() {
    console.log(this.length);
    console.log(this.rate);
    console.log(this.text);
    console.log(this.locale);
  }

  //CURRENT API WILL ACCEPT TEXT TO FEED INTO MODEL
  //WILL BE ABLE TO USE THIS AFTER RE-CONFIGURING API ENDPOINTS

  // userStory(){
  //   console.log(this.fakeResponse);
  //   return this.http.post(this.postUrl, this.params)
  //   .subscribe(
  //     (response: any) => {
  //       this.gptResponse = response;
  //     }, error => {
  //       console.log('Error Status Code: ' + error.status + ' (' + error.statusText + ')')
  //     }
  //   );
  // }
}
