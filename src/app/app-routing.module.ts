import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';
import { DadJokesViewerComponent } from './dad-jokes/dad-jokes-viewer/dad-jokes-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'dadjokes', pathMatch: 'full' },
  { path: 'dadjokes', component: DadJokesViewerComponent },
  { path: 'chucknorris', component: FunViewerComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
