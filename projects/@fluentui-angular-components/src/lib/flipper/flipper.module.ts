import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluentFlipperComponent } from './components/flipper.component';

@NgModule({
  declarations: [
    FluentFlipperComponent
  ],
  exports: [
    FluentFlipperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FluentFlipperModule { }
