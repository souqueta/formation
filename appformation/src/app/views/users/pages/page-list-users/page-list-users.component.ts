import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { StateRole } from 'src/app/shared/enums/state-role.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public collectionUser: User[];
  public collectionHeaders: String[];
  public states = Object.values(StateRole);

  public btnRoute: BtnI;

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.implementBtns();
    this.collectionHeaders = ['Id', 'Username', 'Role'];
    this.us.collection.subscribe(users => {
      this.collectionUser = users;
      console.log(this.collectionUser);
    });
  }

  public implementBtns(): void {
    this.btnRoute = { label: 'Add a user', route: 'add'}
  }

  public changeRole(user: User, event) {
    this.us.updateRole(user, event.target.value).subscribe(
      data => {
        console.log("Before", user.role);
        user.role = data.role;
        console.log('After', user.role);
      }
    )
  }

}
