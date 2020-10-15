import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-a',
  templateUrl: './title-a.component.html',
  styleUrls: ['./title-a.component.scss']
})
export class TitleAComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() isClientPage: string;
  constructor() { }

  ngOnInit(): void {
  }

}
