// src/app/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  onSubmit() {
    // Here you can implement authentication logic using the entered email and password
    console.log('Login submitted:', this.user);
    // Example: Call an authentication service to verify credentials
  }
}
