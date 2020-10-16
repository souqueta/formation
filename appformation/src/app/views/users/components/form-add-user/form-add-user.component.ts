import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateRole } from 'src/app/shared/enums/state-role.enum';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {
  @Input() user: User = new User();
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  public roles = Object.values(StateRole);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.compose([Validators.required, Validators.minLength(6)])],
      role: [this.user.role]
    })
  }

  public onsubmit(): void {
    this.clicked.emit(this.form.value);
  }
}
