// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.makeLoginCall(this.user.email, this.user.password);
  }

  makeLoginCall(email: string, password: string) {
    this.apiService.login(email, password).subscribe(
      (data) => {
        console.log('Login successful:', data);
        // Handle the response as needed (e.g., navigate to the home page)
      },
      (error) => {
        console.error('Login error:', error);
        // Handle the error (e.g., display an error message)
      }
    );
  }
}
