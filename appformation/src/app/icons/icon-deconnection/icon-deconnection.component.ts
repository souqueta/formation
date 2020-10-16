import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-deconnection',
  templateUrl: './icon-deconnection.component.html',
  styleUrls: ['./icon-deconnection.component.scss']
})
export class IconDeconnectionComponent implements OnInit {

  public powerOff = faPowerOff;
  constructor() { }

  ngOnInit(): void {
  }

  public disconnect(){
    localStorage.removeItem('user');
  }

}
