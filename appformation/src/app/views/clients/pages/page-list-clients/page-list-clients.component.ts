import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clientListTitle: string;
  public collectionClient: Client[];
  constructor(private cs: ClientsService) {
    this.clientListTitle = 'Ma liste de clients!';
  }

  ngOnInit(): void {
    this.cs.collection.subscribe(clients => {
      this.collectionClient = clients;
      console.log(this.collectionClient);
    });
  }

}
