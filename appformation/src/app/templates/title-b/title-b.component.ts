import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-b',
  templateUrl: './title-b.component.html',
  styleUrls: ['./title-b.component.scss']
})
export class TitleBComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() isClientPage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
