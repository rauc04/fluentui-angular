import {
  Directive,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[fluentui-hover]'
})
export class HoverDirective {
  @Output() isHovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('mouseenter') handleMouseEnter() {
    console.log('isHovered');
    this.isHovered.emit(true);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    console.log('isNotHovered');
    this.isHovered.emit(false);
  }
}
