import { Component } from '@angular/core';
import { StoryProvider } from '../../providers/story/story';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor (public story: StoryProvider) {}

}
