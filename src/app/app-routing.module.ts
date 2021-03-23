import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { FunViewerComponent } from './fun/fun-viewer/fun-viewer.component';

const routes: Routes = [
  {path: '', redirectTo: 'dadjokes', pathMatch: 'full'},
  {path: 'dadjokes', component: },
  {path: 'chucknorris', component: FunViewerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
