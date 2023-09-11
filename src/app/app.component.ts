import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subTypes = ['Basic', 'Advanced', 'Pro'];
  defaultSub = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subType: '',
    password: '',
  };

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.user.email = form.value.email;
    this.user.subType = form.value.subType;
    this.user.password = form.value.password;
    form.reset();
  }
}
