import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuckNorrisViewerComponent } from './chuck-norris-jokes/chuck-norris-jokes-viewer/chuck-norris-viewer.component';
import { DadJokesViewerComponent } from './dad-jokes/dad-jokes-viewer/dad-jokes-viewer.component';
import { FunPickerComponent } from './fun-picker/fun-picker.component';
import { AddressFormComponent } from './address-form/address-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dadjokes', pathMatch: 'full' },
  { path: 'fun-picker', component: FunPickerComponent },
  { path: 'address-form', component: AddressFormComponent },
  { path: 'chucknorris', component: ChuckNorrisViewerComponent },
  { path: 'dadjokes', component: DadJokesViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
