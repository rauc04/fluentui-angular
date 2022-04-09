import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[fluentuiScrollItem]'
})
export class ScrollItemDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
