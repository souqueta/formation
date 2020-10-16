import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  @Input() user: User = new User(); // Commented for pbs with FormBuilder
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  public form: FormGroup;

  constructor() { } // private fb: FormBuilder

  ngOnInit(): void {
  //   this.form =  this.fb.group({
  //     //username:[this.user.username],
  //     //password:[this.user.password]
  //  });
   this.form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
   }

   );
  }

  public onsubmit(): void {
    // ici on peut directement appeler le service à la place.
    this.clicked.emit(this.form.value);
  }

}
