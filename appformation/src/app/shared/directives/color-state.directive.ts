import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective implements OnChanges {

  @Input() appColorState: string;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = this.formatClass(this.appColorState);
  }

  formatClass(colorState: string): string {
    return `state-${colorState.replace(/\s/g, '').toLowerCase()}`
  }

}
