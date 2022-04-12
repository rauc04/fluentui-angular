import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'fluentui-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.scss']
})
export class FluentFlipperComponent implements OnInit {
  @ViewChild('flipperRef') flipperRef!: ElementRef<HTMLDivElement>;

  @Input() direction!: 'previous' | 'next';

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    if (this.direction === undefined) {
      this.direction = 'previous';
    }
  }

  hide(): void {
    this.renderer2.setStyle(this.flipperRef.nativeElement, 'display', 'none');
  }

  toShow(): void {
    this.renderer2.removeStyle(this.flipperRef.nativeElement, 'display');
  }
}
