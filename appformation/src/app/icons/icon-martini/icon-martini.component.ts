import { Component, OnInit } from '@angular/core';
import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-martini',
  templateUrl: './icon-martini.component.html',
  styleUrls: ['./icon-martini.component.scss']
})
export class IconMartiniComponent implements OnInit {

  public martini = faGlassMartini;
  constructor() { }

  ngOnInit(): void {
  }

}
