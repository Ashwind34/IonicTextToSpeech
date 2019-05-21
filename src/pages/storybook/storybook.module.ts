import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorybookPage } from './storybook';

@NgModule({
  declarations: [
    StorybookPage,
  ],
  imports: [
    IonicPageModule.forChild(StorybookPage),
  ],
})
export class StorybookPageModule {}
