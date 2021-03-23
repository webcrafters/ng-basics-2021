import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FunComponent } from './fun/fun/fun.component';
import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClientModule } from '@angular/common/http';
import { DadJokesViewerComponent } from './dad-jokes/dad-jokes-viewer/dad-jokes-viewer.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes/dad-jokes.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FunComponent,
    FunViewerComponent,
    DadJokesViewerComponent,
    DadJokesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
