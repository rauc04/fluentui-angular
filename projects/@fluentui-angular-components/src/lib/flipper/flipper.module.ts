import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipperComponent } from './components/flipper.component';

@NgModule({
  declarations: [
    FlipperComponent
  ],
  exports: [
    FlipperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlipperModule { }
