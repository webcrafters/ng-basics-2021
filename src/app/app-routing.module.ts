import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { DadJokesComponent } from './fun/dad-jokes/dad-jokes.component';

const routes: Routes = [
  { path: '', redirectTo: 'dadjokes', pathMatch: 'full' },
  { path: 'chucknorris', component: FunViewerComponent },
  { path: 'dadjokes', component: DadJokesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
