import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(public http: HttpClient) {
    console.log('Story Provider Loaded')
  }

  randomStory() {
    console.log(this.fakeResponse);
    return this.http.get(this.getUrl)
    .subscribe(
      (response: any) => {
        this.gptResponse = response;
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
