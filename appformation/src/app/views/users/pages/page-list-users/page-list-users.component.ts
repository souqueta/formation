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
  // public collectionUserObservable: ObservUser[];
  public collectionHeaders: String[];
  public states = Object.values(StateRole);

  public btnRoute: BtnI;
  public userConnected: boolean;

  public user: User;
  public roles = Object.values(StateRole);

  public isAdmin: boolean;

  constructor(private us: UsersService) { }

  ngOnInit(): void {
    this.isAdmin = false;
    this.implementBtns();
    this.collectionHeaders = ['Id', 'Username', 'Role'];
    this.us.collection.subscribe(users => {
      this.collectionUser = users;
      console.log(this.collectionUser);
    });

    if (localStorage.id) {
      this.us.getById(localStorage.id).subscribe(data => {
        this.user = data;
        if (this.user.role === StateRole.ADMIN) {
          this.isAdmin = true;
          this.us.getAll().subscribe(datas => this.collectionUser = datas);
        } else {
          this.collectionUser.push(this.user);
        }
        });
      this.userConnected = true;
      this.collectionHeaders = ['ID', 'Username', 'Role'];
    }
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

  public filterDependingOnUserConnectedRole(user: User) {
      this.us.filterDependingOnUserConnectedRole(user).subscribe(
        data => {
          console.log("Before", data);
          this.collectionUser = data;
          console.log('After', data);
        }
      )
  }

}
