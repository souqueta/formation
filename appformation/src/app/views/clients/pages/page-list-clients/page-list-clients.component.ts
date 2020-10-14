import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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
  public collectionHeaders: String[];
  public states = Object.values(StateClient);

  public btnRoute: BtnI;

  constructor(private cs: ClientsService) {
    this.clientListTitle = 'Ma liste de clients!';
  }

  ngOnInit(): void {
    this.implementBtns();
    this.collectionHeaders = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total', 'State']
    this.cs.collection.subscribe(clients => {
      this.collectionClient = clients;
      console.log(this.collectionClient);
    });
  }

  public changeState(client: Client, event) {
    this.cs.updateState(client, event.target.value).subscribe(
      data => {
        console.log("Before", client.state);
        client.state = data.state;
        console.log('After', client.state);
      }
    )
  }

  public implementBtns(): void {
    this.btnRoute = { label: 'Add a client', route: 'add'}
  }

}
