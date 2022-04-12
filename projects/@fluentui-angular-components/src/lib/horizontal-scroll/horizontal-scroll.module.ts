import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluentHorizontalScrollComponent } from './components/horizontal-scroll.component';
import { ScrollItemDirective } from './directive/scroll-item/scroll-item.directive';
import { ScrollItemElementRefDirective } from './directive/scroll-item-element-ref/scroll-item-element-ref.directive';
import { FluentFlipperModule } from '../flipper/flipper.module';

@NgModule({
  declarations: [
    FluentHorizontalScrollComponent,
    ScrollItemDirective,
    ScrollItemElementRefDirective
  ],
  exports: [
    FluentHorizontalScrollComponent,
    ScrollItemDirective
  ],
  imports: [
    CommonModule,
    FluentFlipperModule
  ]
})
export class FluentHorizontalScrollModule { }
