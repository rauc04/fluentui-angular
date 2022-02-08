import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { TimePickerComponent } from './time-picker.component';
import { PadLeftNumberPipe } from './pad-left-number.pipe';
import { FluentuiDirectivesModule } from '../directive/fluentui-directives.module';



@NgModule({
  declarations: [
    TimePickerComponent,
    PadLeftNumberPipe
  ],
  exports: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    SwiperModule,
    FluentuiDirectivesModule
  ]
})
export class TimePickerModule { }
