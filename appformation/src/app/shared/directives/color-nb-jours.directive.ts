import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorNbJours]'
})
export class ColorNbJoursDirective implements OnChanges {

  @Input() appColorNbJours: string;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appColorNbJours);
    if (parseInt(this.appColorNbJours) < 3) {
      this.className = "green-nbjours";
    }
    else {
      this.className = "red-nbjours";
    }
  }
}
