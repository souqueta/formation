import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-text',
  templateUrl: './global-text.component.html',
  styleUrls: ['./global-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalTextComponent implements OnInit {

  @Input() booleanPage: boolean;
  @Input() isClientPage: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
