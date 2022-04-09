import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ScrollItemElementRefDirective } from '../directive/scroll-item-element-ref/scroll-item-element-ref.directive';
import { ScrollItemDirective } from '../directive/scroll-item/scroll-item.directive';
import { Opacity } from '../utils/enum';

@Component({
  selector: 'fluentui-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements OnInit, AfterViewInit {
  @ContentChildren(ScrollItemDirective) items!: QueryList<ScrollItemDirective>;
  @ViewChildren(ScrollItemElementRefDirective, { read: ElementRef }) private itemsElementsRef!: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('scrollWrapper') private scrollWrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollItems') private scrollItemsRef!: ElementRef<HTMLDivElement>;
  @ViewChild('previousButton') private previousButtonRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextButton') private nextButtonRef!: ElementRef<HTMLButtonElement>;

  @Input() slidesPerView: number | undefined = undefined;
  @Input() slidePerGroup = false;
  @Input() spaceBetween = 0;
  @Input() height: number | undefined = undefined;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;

  private currentScrollPosition = 0;
  private scrollAmount = 0;
  private maxScroll = 0;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
  }

  onScrollHorizontal(value: number): void {
    this.currentScrollPosition += (value * this.scrollAmount);

    if (this.currentScrollPosition >= 0) {
      this.currentScrollPosition = 0;
      this.setOpacityButton(this.previousButtonRef, Opacity.Invisible);
    } else {
      this.setOpacityButton(this.previousButtonRef, Opacity.Visible);
    }

    if (this.currentScrollPosition <= this.maxScroll) {
      this.currentScrollPosition = this.maxScroll;
      this.setOpacityButton(this.nextButtonRef, Opacity.Invisible);
    } else {
      this.setOpacityButton(this.nextButtonRef, Opacity.Visible);
    }

    this.renderer2.setStyle(this.scrollItemsRef.nativeElement, 'left', `${this.currentScrollPosition}px`);
  }

  private initHorizontalScroll(): void {
    this.setOpacityButton(this.previousButtonRef, Opacity.Invisible);

    const widthByItem = Math.ceil(this.scrollWrapperRef.nativeElement.offsetWidth / (this.slidesPerView ?? 1));

    this.itemsElementsRef.forEach((item, itemIndex) => {
      const widthWithMargin = widthByItem - this.spaceBetween;

      this.renderer2.setStyle(item.nativeElement, 'width', this.parseUnit(widthWithMargin, 'px'));

      if (this.spaceBetween > 0) {
        if (itemIndex === this.itemsElementsRef.length - 1) { return; }
        this.renderer2.setStyle(item.nativeElement, 'margin-right', this.parseUnit(this.spaceBetween, 'px'));
      }
    });

    if (this.height !== undefined) {
      if (typeof this.height === 'number') {
        this.renderer2.setStyle(this.scrollWrapperRef.nativeElement, 'height', this.parseUnit(this.height, 'px'));
      }
    }

    if (this.slidesPerView === undefined) {
      this.scrollAmount = widthByItem;
    } else {
      this.scrollAmount = this.slidePerGroup ? (widthByItem * this.slidesPerView) : widthByItem;
    }

    this.maxScroll = this.scrollWrapperRef.nativeElement.offsetWidth - this.scrollItemsRef.nativeElement.offsetWidth;
  }

  private setOpacityButton(buttonRef: ElementRef<HTMLButtonElement>, opacity: Opacity): void {
    const { nativeElement } = buttonRef;
    this.renderer2.setStyle(nativeElement, 'opacity', opacity);
  }

  private parseUnit(value: number, unit: 'px' | 'rem' | 'em'): string {
    return `${value}${unit}`;
  }
}
