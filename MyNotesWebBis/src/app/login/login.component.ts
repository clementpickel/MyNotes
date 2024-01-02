// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService
import { NgModel } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.makeLoginCall(this.user.email, this.user.password);
  }

  makeLoginCall(email: string, password: string) {
    this.apiService.login(email, password).subscribe(
      (response: any) => {
        console.log('User registered successfully', response);
        const accessToken = response.access_token;
        this.authService.saveAccessToken(accessToken);
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Login error:', error);
        // Handle the error (e.g., display an error message)
      }
    );
  }
}
