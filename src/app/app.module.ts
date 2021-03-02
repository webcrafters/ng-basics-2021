import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun.component';
import { FunViewerComponent } from './fun-viewer/fun-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';

@NgModule({
  declarations: [AppComponent, FunComponent, FunViewerComponent],
  imports: [BrowserModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
