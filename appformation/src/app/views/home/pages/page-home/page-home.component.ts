import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public userConnected: User;

  constructor() { }

  ngOnInit(): void {
    this.userConnected = localStorage.username;
  }

}
