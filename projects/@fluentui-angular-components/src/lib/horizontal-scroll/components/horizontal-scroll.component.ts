import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { FluentFlipperComponent } from '../../flipper/components/flipper.component';
import { ScrollItemElementRefDirective } from '../directive/scroll-item-element-ref/scroll-item-element-ref.directive';
import { ScrollItemDirective } from '../directive/scroll-item/scroll-item.directive';

@Component({
  selector: 'fluentui-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
  exportAs: 'horizontal-scroll'
})
export class FluentHorizontalScrollComponent implements OnInit, AfterViewInit {
  @ContentChildren(ScrollItemDirective) items!: QueryList<ScrollItemDirective>;
  @ViewChildren(ScrollItemElementRefDirective, { read: ElementRef }) private itemsElementsRef!: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('scrollWrapper', { static: false }) private scrollWrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollItems', { static: false }) private scrollItemsRef!: ElementRef<HTMLDivElement>;
  @ViewChild('previousFlipperRef') private previousFlipperRef!: FluentFlipperComponent;
  @ViewChild('nextFlipperRef') private nextFlipperRef!: FluentFlipperComponent;

  @Input() slidesPerView: number | undefined = undefined;
  @Input() slidePerGroup = false;
  @Input() spaceBetween = 0;
  /**
   * default value: `true`
   */
  @Input() outlineWrapper = true;
  /**
   * default value: `center`
   */
  @Input() alignItem: 'flex-start' | 'center' | 'flex-end' = 'center';
  @Input() height: number | undefined = undefined;
  @Input() showControls = true;

  @Output() toNext = new EventEmitter<void>();
  @Output() toPrevious = new EventEmitter<void>();

  private scrollAmount = 0;
  private maxScroll = 0;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initHorizontalScroll();

    this.itemsElementsRef.changes.subscribe(itemsChanges => {
      this.initHorizontalScroll();
    });
  }

  onScrollHorizontal(isNext: boolean = true): void {
    const { nativeElement } = this.scrollWrapperRef;
    let currentScrollPosition = 0;

    if (isNext) {
      currentScrollPosition = nativeElement.scrollLeft + this.scrollAmount;
      this.toNext.emit();
    } else {
      currentScrollPosition = nativeElement.scrollLeft - this.scrollAmount;
      this.toPrevious.emit();
    }

    if (this.showControls) {
      if (this.maxScroll > 0) {
        if (currentScrollPosition <= 0) {
          this.previousFlipperRef.hide();
        } else {
          this.previousFlipperRef.toShow();
        }

        if (Math.ceil(currentScrollPosition) >= this.maxScroll) {
          currentScrollPosition = this.maxScroll;

          this.nextFlipperRef.hide();
        } else {
          this.nextFlipperRef.toShow();
        }
      }
    }

    nativeElement.scrollTo({ left: currentScrollPosition });
  }

  private initHorizontalScroll(): void {
    const widthByItem = Math.ceil(this.scrollWrapperRef.nativeElement.offsetWidth / (this.slidesPerView ?? 1));

    this.itemsElementsRef.forEach((item, itemIndex) => {
      this.renderer2.removeStyle(item.nativeElement, 'width');
      this.renderer2.removeStyle(item.nativeElement, 'margin-right');

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

    this.maxScroll = this.scrollWrapperRef.nativeElement.scrollWidth - this.scrollItemsRef.nativeElement.offsetWidth;

    if (this.showControls) {
      this.previousFlipperRef.hide();

      if (this.maxScroll === 0) {
        this.nextFlipperRef.hide();
      } else {
        this.nextFlipperRef.toShow();
      }
    }
  }

  private parseUnit(value: number, unit: 'px' | 'rem' | 'em'): string {
    return `${value}${unit}`;
  }
}
