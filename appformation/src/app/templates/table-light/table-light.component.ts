import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() collectionOrder: Order[];
  @Input() collectionClient: Client[];
  @Input() collectionUser: User[];
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
