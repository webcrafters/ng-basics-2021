import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun/fun.component';
import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClientModule } from '@angular/common/http';
import { DadJokesViewerComponent } from './dad-jokes/dad-jokes-viewer/dad-jokes-viewer.component';

@NgModule({
  declarations: [AppComponent, FunComponent, FunViewerComponent, DadJokesViewerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
