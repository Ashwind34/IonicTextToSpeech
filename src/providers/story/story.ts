import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoryProvider {

  length: number = 500;

  getUrl: string = 'https://gpt2-cy5b7ah32q-uc.a.run.app?length=' + this.length + '&temperature=0.8&top_k=40'

  postUrl: string = 'https://gpt2-cy5b7ah32q-uc.a.run.app';

  seed: number;

  gptResponse: any;

  params: any = {
    "length": this.length,
    "temperature":  "0.8",
    "top_k": "40"
  }

  constructor(public http: HttpClient) {
    console.log('Story Provider Loaded')
  }

  randomStory() {
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
