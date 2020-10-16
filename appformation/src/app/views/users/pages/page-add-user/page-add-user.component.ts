import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(private us: UsersService, private router: Router) { } // , private location: Location

  ngOnInit(): void {
    this.title = 'Users';
    this.subtitle = 'Add a user'
  }

  public createUser(user: User): void {
    this.us.addUser(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['users']);
      }
    )
  }

  // public back(): void {
  //   this.location.back();
  // }
}
