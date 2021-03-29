import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadJokesViewerComponent } from './dad-jokes-viewer/dad-jokes-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DadJokesViewerComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class DadJokesModule {}
