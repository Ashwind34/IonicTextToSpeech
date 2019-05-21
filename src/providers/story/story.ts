import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Injectable()
export class StoryProvider {

  length: number = 500;

  getUrl: string = 'https://gpt2-cors-cy5b7ah32q-uc.a.run.app?length=' + this.length + '&temperature=0.8&top_k=40'

  postUrl: string = '';

  seed: number;

  gptResponse: any;
  
  fakeResponse: string = 'This is the fake response'

  params: any = {
    "length": this.length,
    "temperature":  "0.8",
    "top_k": "40"
  }

  text: string;

  rate: number = 0;

  locale: string = 'en-US'

  constructor(public http: HttpClient, public tts: TextToSpeech) {
    console.log('Story Provider Loaded')
  }

  speakText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate,
      locale: this.locale
    })
      .then(() => console.log('success'))
      .catch((reason:any) => console.log(reason))
  }

  randomStory() {
    console.log(this.fakeResponse);
    return this.http.get(this.getUrl)
    .subscribe(
      (response: any) => {
        this.gptResponse = response.text;
        console.log(this.length)
        console.log(this.getUrl)
        console.log(this.gptResponse);
      }, error => {
        console.log('Error Status Code: ' + error.status + ' (' + error.statusText + ')')
      }
    );
  }

  userStory(){
    console.log(this.fakeResponse);
    return this.http.post(this.postUrl, this.params)
    .subscribe(
      (response: any) => {
        this.gptResponse = response;
      }, error => {
        console.log('Error Status Code: ' + error.status + ' (' + error.statusText + ')')
      }
    );
  }

  




}
