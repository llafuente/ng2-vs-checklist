import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VSChecklistModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, VSChecklistModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}
