import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun/fun.component';
import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClientModule } from '@angular/common/http';
import { DadJokesComponent } from './fun/dad-jokes/dad-jokes.component';
import { AppRoutingModule } from './app-routing.module';
import { DadJokesViewerComponent } from './fun/dad-jokes-viewer/dad-jokes-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FunComponent,
    FunViewerComponent,
    DadJokesComponent,
    DadJokesViewerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
