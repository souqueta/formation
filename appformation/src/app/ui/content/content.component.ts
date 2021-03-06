import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void {
    this.open = !this.open;
  }

  public connect(): void {
    this.us.getByUsernameAndPassword('user1', 'user1').subscribe(
      data => {
        console.log(data);
        localStorage.user = data[0];
        console.log("value du user dans getByUsernameAndPassword : " + localStorage.user);
        localStorage.id = data[0].id;
      }
    )
  }

}
