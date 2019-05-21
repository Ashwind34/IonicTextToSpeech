import { Component } from '@angular/core';
import { StoryProvider } from '../../providers/story/story';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StoryProvider]
})
export class HomePage {

  constructor (private story: StoryProvider) {}

  freshStory(){
    this.story.randomStory()
  }

  inputStory() {
    this.story.userStory()
  }

  check() {
    console.log(this.story.length);
    console.log(this.story.rate);
    console.log(this.story.text);
  }

}
