import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { DadJokesViewerComponent } from './fun/dad-jokes-viewer/dad-jokes-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'dadjokes', pathMatch: 'full' },
  { path: 'chucknorris', component: FunViewerComponent },
  { path: 'dadjokes', component: DadJokesViewerComponent },
  // { path: 'dadjokes', component: DadJokesViewerComponent },
  // { path: 'dadjokes', component: DadJokesViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
