import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clientListTitle: string;
  constructor() {
    this.clientListTitle = 'Ma liste de clients!';
  }

  ngOnInit(): void {
  }

}
