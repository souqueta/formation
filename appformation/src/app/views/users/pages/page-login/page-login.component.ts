import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.title = 'Login';
    this.subtitle = 'Enter your username and password'
  }

  public login(user: User): void {
    this.us.getByUsernameAndPassword(user.username, user.password)
    .subscribe(
      data => {
        console.log(data);
        if (data[0] && data[0].username != null) {
          console.log("you are logged in!!!!")
          localStorage.username = data[0].username
          this.router.navigate(['home']);
        } else {
          console.log("Sorry, but cannot log in! ");
        }
      }
    )
  }

}
