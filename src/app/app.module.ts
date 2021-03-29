import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChuckNorrisViewerComponent } from './chuck-norris-jokes/chuck-norris-jokes-viewer/chuck-norris-viewer.component';
import { LoremIpsum } from 'lorem-ipsum';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DadJokesModule } from './dad-jokes/dad-jokes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ChuckNorrisViewerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DadJokesModule,
    SharedModule,
  ],
  providers: [LoremIpsum],
  bootstrap: [AppComponent],
})
export class AppModule {}
