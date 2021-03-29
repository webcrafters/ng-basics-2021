import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunComponent } from './fun/fun.component';

@NgModule({
  declarations: [FunComponent],
  imports: [CommonModule],
  exports: [FunComponent],
})
export class SharedModule {}
