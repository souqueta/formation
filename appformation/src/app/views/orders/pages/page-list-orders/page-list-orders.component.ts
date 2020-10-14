import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collectionOrder: Order[];
  public collectionHeaders: String[];
  public states = Object.values(StateOrder);

  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  constructor( private os: OrdersService) {
  }

  ngOnInit(): void {
    this.implementBtns();
    this.collectionHeaders = ['Type', 'Client', 'Nb jours', 'TJM HT', 'Total HT', 'Comment', 'Date', 'Etat']
    this.os.collection.subscribe(orders => {
      this.collectionOrder = orders;
      console.log(this.collectionOrder);
    });

  }

  public changeState(order: Order, event) {
    this.os.updateState(order, event.target.value).subscribe(
      data => {
        console.log("Before", order.state);
        order.state = data.state;
        console.log('After', order.state);
      }
    )
  }

  public implementBtns(): void {
    this.btnRoute = { label: 'Add an order', route: 'add'}
    this.btnHref = { label: 'Go to google', href:'http://google.fr'}
    this.btnAction = { label: 'openPopup', action: true}
  }

  public openPopup(): void {
    console.log('popup!')
  }

}

