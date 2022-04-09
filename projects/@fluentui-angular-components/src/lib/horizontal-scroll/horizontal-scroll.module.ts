import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollComponent } from './components/horizontal-scroll.component';
import { ScrollItemDirective } from './directive/scroll-item/scroll-item.directive';
import { ScrollItemElementRefDirective } from './directive/scroll-item-element-ref/scroll-item-element-ref.directive';

@NgModule({
  declarations: [
    HorizontalScrollComponent,
    ScrollItemDirective,
    ScrollItemElementRefDirective
  ],
  exports: [
    HorizontalScrollComponent,
    ScrollItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class HorizontalScrollModule { }
