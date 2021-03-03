import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun.component';
import { FunViewerComponent } from './fun-viewer/fun-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FunComponent, FunViewerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
