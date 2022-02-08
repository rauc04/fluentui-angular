import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Swiper, { Mousewheel, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Mousewheel]);

@Component({
  selector: 'fluentui-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit, OnChanges {
  @Input() minuteIncrement: number = 1;
  @Input() value: Date | string | undefined = undefined;

  isOpen: boolean = false;

  slideHover = {
    hour: false,
    minute: false,
    clockIdentifiers: false
  };

  hours: number[] = [];
  minutes: number[] = [];
  clockIdentifiers: string[] = ['AM', 'PM'];

  commonSwiperConfig : SwiperOptions = {
    direction: 'vertical',
    slideToClickedSlide: true,
    centeredSlides: true,
    slidesPerView: 9,
    mousewheel: {
      sensitivity: 3
    }
  }

  hourMinuteSwiperConfig: SwiperOptions = {
    ...this.commonSwiperConfig,
    loop: true,
    loopAdditionalSlides: 5
  }

  hourSwiperConfig: SwiperOptions = {
    ...this.hourMinuteSwiperConfig,
    initialSlide: 12
  }

  minuteSwiperConfig: SwiperOptions = {
    ...this.hourMinuteSwiperConfig,
    initialSlide: 0
  }


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.minutes = this.arrayOfNumbers('minute', this.minuteIncrement);
  }

  ngOnInit(): void {
    this.hours = this.arrayOfNumbers('hour');
    this.minutes = this.arrayOfNumbers('minute', this.minuteIncrement);
  }

  private arrayOfNumbers(typeTime: 'hour' | 'minute', increment: number = 1): number[] {
    const numbers: number[] = [];
    const sizePerTime = typeTime === 'hour' ? 12 : 59;
    const initialIndex = typeTime === 'hour' ? 1 : 0;

    for (let index = initialIndex; index <= sizePerTime; index+=increment) {
      numbers.push(index);
    }
    return numbers;
  }

  trackByNumber(index: number, item: number): number {
    return item;
  }

  onChangeIndex(value: any) {
    console.log(value);
  }
}
