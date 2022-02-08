import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeftNumber'
})
export class PadLeftNumberPipe implements PipeTransform {
  transform(value: number): string {
    return value > 9 ? value.toString() : `0${value}`;
  }
}
